package com.hong.ForPaw.service;

import com.hong.ForPaw.controller.DTO.AlarmRequest;
import com.hong.ForPaw.controller.DTO.PostRequest;
import com.hong.ForPaw.controller.DTO.PostResponse;
import com.hong.ForPaw.core.errors.CustomException;
import com.hong.ForPaw.core.errors.ExceptionCode;
import com.hong.ForPaw.domain.Alarm.AlarmType;
import com.hong.ForPaw.domain.Post.*;
import com.hong.ForPaw.domain.User.Role;
import com.hong.ForPaw.domain.User.User;
import com.hong.ForPaw.repository.*;
import com.hong.ForPaw.repository.Post.*;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PostService {

    private final PostRepository postRepository;
    private final PostImageRepository postImageRepository;
    private final PostLikeRepository postLikeRepository;
    private final PostReadStatusRepository postReadStatusRepository;
    private final CommentRepository commentRepository;
    private final CommentLikeRepository commentLikeRepository;
    private final RedisService redisService;
    private final UserRepository userRepository;
    private final BrokerService brokerService;
    private final EntityManager entityManager;

    @Transactional
    public PostResponse.CreatePostDTO createPost(PostRequest.CreatePostDTO requestDTO, Long userId){
        User userRef = entityManager.getReference(User.class, userId);

        List<PostImage> postImages = requestDTO.images().stream()
                .map(postImageDTO -> PostImage.builder()
                        .imageURL(postImageDTO.imageURL())
                        .build())
                .toList();

        Post post = Post.builder()
                .user(userRef)
                .postType(requestDTO.type())
                .title(requestDTO.title())
                .content(requestDTO.content())
                .build();

        // 연관관계 설정
        postImages.forEach(post::addImage);

        postRepository.save(post);

        return new PostResponse.CreatePostDTO(post.getId());
    }

    @Transactional
    public PostResponse.CreateAnswerDTO createAnswer(PostRequest.CreateAnswerDTO requestDTO, Long parentPostId, Long userId){
        // 존재하지 않는 질문글에 답변을 달려고 하면 에러
        Post parentPost = postRepository.findByIdWithUser(parentPostId).orElseThrow(
                () -> new CustomException(ExceptionCode.POST_NOT_FOUND)
        );

        // 질문글에만 답변을 달 수 있다
        if(!parentPost.getPostType().equals(PostType.question)){
            throw new CustomException(ExceptionCode.NOT_QUESTION_TYPE);
        }

        User userRef = entityManager.getReference(User.class, userId);

        List<PostImage> postImages = requestDTO.images().stream()
                .map(postImageDTO -> PostImage.builder()
                        .imageURL(postImageDTO.imageURL())
                        .build())
                .toList();

        Post post = Post.builder()
                .user(userRef)
                .postType(PostType.answer)
                .title(parentPost.getTitle() + "(답변)")
                .content(requestDTO.content())
                .build();

        // 연관관계 설정
        postImages.forEach(post::addImage);
        parentPost.addChildPost(post);

        postRepository.save(post);

        // 게시글의 답변 수 레디스에 저장
        redisService.incrementCnt("answerNum", parentPostId.toString(), 1L);

        // 알림 생성
        String content = "새로운 답변: " + requestDTO.content();
        String redirectURL = "post/"+parentPostId+"/entire";
        LocalDateTime date = LocalDateTime.now();

        AlarmRequest.AlarmDTO alarmDTO = new AlarmRequest.AlarmDTO(
                parentPost.getUser().getId(),
                content,
                redirectURL,
                date,
                AlarmType.answer);

        brokerService.produceAlarm(parentPost.getUser().getId(), alarmDTO);

        return new PostResponse.CreateAnswerDTO(post.getId());
    }

    @Transactional
    public PostResponse.FindAllPostDTO findPostList(){
        // 페이지네이션은 0페이지에 5개만 보내줌
        Pageable pageable = createPageable(0, 5, "id");

        // 입양 스토리 글 찾기
        List<PostResponse.PostDTO> adoptionPosts = getPostDTOsByType(PostType.adoption, pageable);

        // 임시 보호 글 찾기
        List<PostResponse.PostDTO> protectionPosts = getPostDTOsByType(PostType.protection, pageable);

        // 질문해요 글 찾기
        List<PostResponse.QnaDTO> questionPosts = getQnaDTOs(pageable);

        return new PostResponse.FindAllPostDTO(adoptionPosts, protectionPosts, questionPosts);
    }

    @Transactional
    public PostResponse.FindAdoptionPostListDTO findAdoptionPostList(Integer page, Integer size, String sort){
        Pageable pageable = createPageable(page, size, sort);
        List<PostResponse.PostDTO> adoptPostDTOS = getPostDTOsByType(PostType.adoption, pageable);

        if(adoptPostDTOS.isEmpty()){
            throw new CustomException(ExceptionCode.SEARCH_NOT_FOUND);
        }

        return new PostResponse.FindAdoptionPostListDTO(adoptPostDTOS);
    }

    @Transactional
    public PostResponse.FindProtectionPostListDTO findProtectionPostList(Integer page, Integer size, String sort){
        Pageable pageable = createPageable(page, size, sort);
        List<PostResponse.PostDTO> adoptPostDTOS = getPostDTOsByType(PostType.protection, pageable);

        if(adoptPostDTOS.isEmpty()){
            throw new CustomException(ExceptionCode.SEARCH_NOT_FOUND);
        }

        return new PostResponse.FindProtectionPostListDTO(adoptPostDTOS);
    }

    @Transactional
    public PostResponse.FindQnaPostListDTO findQuestionPostList(Integer page, Integer size, String sort){
        Pageable pageable = createPageable(page, size, sort);
        List<PostResponse.QnaDTO> qnaDTOS = getQnaDTOs(pageable);

        if(qnaDTOS.isEmpty()){
            throw new CustomException(ExceptionCode.SEARCH_NOT_FOUND);
        }

        return new PostResponse.FindQnaPostListDTO(qnaDTOS);
    }

    @Transactional
    public PostResponse.FindPostByIdDTO findPostById(Long postId, Long userId){
        // user, postImages를 패치조인 해서 조회
        Post post = postRepository.findById(postId).orElseThrow(
                () -> new CustomException(ExceptionCode.POST_NOT_FOUND)
        );

        // 게시글 이미지 DTO
        List<PostResponse.PostImageDTO> postImageDTOS = post.getPostImages().stream()
                .map(postImage -> new PostResponse.PostImageDTO(postImage.getId(), postImage.getImageURL()))
                .collect(Collectors.toList());

        // 댓글 DTO (특정 게시글에 대한 모든 댓글 및 대댓글을 들고 있음)
        List<PostResponse.CommentDTO> commentDTOS = new ArrayList<>();
        Map<Long, PostResponse.CommentDTO> commentMap = new HashMap<>(); // map을 사용해서 대댓글을 해당 부모 댓글에 추가

        List<Comment> comments = commentRepository.findAllByPostIdWithUserAndParent(postId);
        comments.forEach(comment -> {
            // 부모 댓글이면, CommentDTO로 변환해서 commentDTOS 리스트에 추가
            if (comment.getParent() == null) {
                PostResponse.CommentDTO commentDTO = new PostResponse.CommentDTO(
                        comment.getId(),
                        comment.getUser().getNickName(),
                        comment.getContent(),
                        comment.getCreatedDate(),
                        comment.getUser().getRegion(),
                        new ArrayList<>());

                commentDTOS.add(commentDTO);
                commentMap.put(comment.getId(), commentDTO);
            }
            else { // 자식 댓글이면, ReplyDTO로 변환해서 부모 댓글의 replies 리스트에 추가
                PostResponse.ReplyDTO replyDTO = new PostResponse.ReplyDTO(
                        comment.getId(),
                        comment.getUser().getNickName(),
                        comment.getContent(),
                        comment.getCreatedDate(),
                        comment.getUser().getRegion());

                Long parentId = comment.getParent().getId();
                commentMap.get(parentId).replies().add(replyDTO);
            }
        });

        // 좋아요 수
        Long likeNum = redisService.getDataInLong("postLikeNum", postId.toString());

        // 댓글 수
        Long commentNum = redisService.getDataInLong("commentNum", postId.toString());

        // 게시글 읽음 처리
        User userRef = entityManager.getReference(User.class, userId);
        PostReadStatus postReadStatus = PostReadStatus.builder()
                .post(post)
                .user(userRef)
                .build();

        postReadStatusRepository.save(postReadStatus);

        return new PostResponse.FindPostByIdDTO(post.getUser().getNickName(), post.getTitle(), post.getContent(), post.getCreatedDate(), commentNum, likeNum, postImageDTOS, commentDTOS);
    }

    @Transactional
    public PostResponse.FIndQnaByIdDTO findQnaById(Long postId){
        // user, postImages를 패치조인 해서 조회
        Post post = postRepository.findById(postId).orElseThrow(
                () -> new CustomException(ExceptionCode.POST_NOT_FOUND)
        );

        // 게시글 이미지 DTO
        List<PostResponse.PostImageDTO> postImageDTOS = post.getPostImages().stream()
                .map(postImage -> new PostResponse.PostImageDTO(postImage.getId(), postImage.getImageURL()))
                .collect(Collectors.toList());

        // 답변 게시글 DTO
        List<PostResponse.AnswerDTO> answerDTOS = postRepository.findByParentIdWithUser(postId).stream()
                .map(answer -> {
                    List<PostResponse.PostImageDTO> answerImageDTOS = answer.getPostImages().stream()
                            .map(postImage -> new PostResponse.PostImageDTO(postImage.getId(), postImage.getImageURL()))
                            .collect(Collectors.toList());

                    return new PostResponse.AnswerDTO(
                            answer.getId(),
                            answer.getUser().getNickName(),
                            answer.getContent(),
                            answer.getCreatedDate(),
                            answerImageDTOS);
                })
                .collect(Collectors.toList());

        return new PostResponse.FIndQnaByIdDTO(post.getUser().getNickName(), post.getTitle(), post.getContent(), post.getCreatedDate(), postImageDTOS, answerDTOS);
    }

    @Transactional
    public void updatePost(PostRequest.UpdatePostDTO requestDTO, User user, Long postId){
        // 존재하지 않는 글이면 에러
        Post post = postRepository.findByIdWithUser(postId).orElseThrow(
                () -> new CustomException(ExceptionCode.POST_NOT_FOUND)
        );

        // 수정 권한 체크
        checkPostAuthority(post.getUser().getId(), user);

        // 제목, 본문 업데이트
        post.updatePost(requestDTO.title(), requestDTO.content());

        // 유지할 이미지를 제외한 모든 이미지 삭제
        if (requestDTO.retainedImageIds() != null && !requestDTO.retainedImageIds().isEmpty()) {
            postImageRepository.deleteByPostIdAndIdNotIn(postId, requestDTO.retainedImageIds());
        } else {
            postImageRepository.deleteByPostId(postId);
        }

        // 새 이미지 추가
        List<PostImage> newImages = requestDTO.newImages().stream()
                .map(postImageDTO -> PostImage.builder()
                        .post(post)
                        .imageURL(postImageDTO.imageURL())
                        .build())
                .collect(Collectors.toList());

        postImageRepository.saveAll(newImages);
    }

    @Transactional
    public void deletePost(Long postId, User user){
        // 존재하지 않은 포스트면 에러
        Long writerId = postRepository.findUserIdByPostId(postId).orElseThrow(
                () -> new CustomException(ExceptionCode.POST_NOT_FOUND)
        );

        // 수정 권한 체크
        checkPostAuthority(writerId, user);

        postLikeRepository.deleteAllByPostId(postId);
        postReadStatusRepository.deleteAllByPostId(postId);
        commentLikeRepository.deleteAllByPostId(postId);
        commentRepository.deleteAllByPostId(postId); // soft-delete
        postRepository.deleteById(postId); // soft-delete

        // 레디스에 저장된 댓글 수, 답변 수 삭제
        redisService.removeData("answerNum", postId.toString());
        redisService.removeData("commentNum", postId.toString());
    }

    @Transactional
    public void likePost(Long postId, Long userId){
        // 존재하지 않는 글이면 에러
        Long postWriterId = postRepository.findUserIdByPostId(postId).orElseThrow(
                () -> new CustomException(ExceptionCode.POST_NOT_FOUND)
        );

        // 자기 자신의 글에는 좋아요를 할 수 없다.
        if (postWriterId.equals(userId)) {
            throw new CustomException(ExceptionCode.POST_CANT_LIKE);
        }

        Optional<PostLike> postLikeOP = postLikeRepository.findByUserIdAndPostId(userId, postId);

        // 이미 좋아요를 눌렀다면, 취소하는 액션이니 게시글의 좋아요 수를 감소시키고 하고, postLike 엔티티 삭제
        if(postLikeOP.isPresent()){
            postLikeRepository.delete(postLikeOP.get());
            redisService.decrementCnt("postLikeNum", postId.toString(), 1L);
        }
        else { // 좋아요를 누르지 않았다면, 좋아요 수를 증가키고, 엔티티 저장
            User userRef = entityManager.getReference(User.class, userId);
            Post postRef = entityManager.getReference(Post.class, postId);

            PostLike postLike = PostLike.builder().user(userRef).post(postRef).build();

            postLikeRepository.save(postLike);
            redisService.incrementCnt("postLikeNum", postId.toString(), 1L);
        }
    }

    @Scheduled(cron = "0 0 * * * *")
    public void syncLikes() {
        // 업데이트는 50개씩 진행
        int page = 0;
        int batchSize = 50;

        Pageable pageable = PageRequest.of(page, batchSize);
        Page<Long> postIdsPage;

        do {
            postIdsPage = processLikesBatch(pageable);
            pageable = pageable.next();
        } while (postIdsPage != null && postIdsPage.hasNext());
    }

    @Transactional
    public Page<Long> processLikesBatch(Pageable pageable) {
        Page<Long> postIdsPage = postRepository.findAllPostId(pageable);
        List<Long> postIds = postIdsPage.getContent();

        for (Long postId : postIds) {
            Long likeNum = redisService.getDataInLong("postLikeNum", postId.toString());
            if (likeNum != null) {
                postRepository.updateLikeNum(likeNum, postId);
            }
        }
        return postIdsPage;
    }

    @Transactional
    public PostResponse.CreateCommentDTO createComment(PostRequest.CreateCommentDTO requestDTO, Long userId, Long postId){
        // 존재하지 않는 글이면 에러
        Long writerId = postRepository.findUserIdByPostId(postId).orElseThrow(
                () -> new CustomException(ExceptionCode.POST_NOT_FOUND)
        );

        User userRef = entityManager.getReference(User.class, userId);
        Post postRef = entityManager.getReference(Post.class, postId);

        Comment comment = Comment.builder()
                .user(userRef)
                .post(postRef)
                .content(requestDTO.content())
                .build();

        commentRepository.save(comment);

        // 게시글의 댓글 수 증가
        redisService.incrementCnt("commentNum", postId.toString(), 1L);

        // 알람 생성
        String content = "새로운 댓글: " + requestDTO.content();
        String redirectURL = "post/"+postId;
        LocalDateTime date = LocalDateTime.now();

        AlarmRequest.AlarmDTO alarmDTO = new AlarmRequest.AlarmDTO(
                writerId,
                content,
                redirectURL,
                date,
                AlarmType.comment);

        brokerService.produceAlarm(writerId, alarmDTO);

        return new PostResponse.CreateCommentDTO(comment.getId());
    }

    @Transactional
    public PostResponse.CreateCommentDTO createReply(PostRequest.CreateCommentDTO requestDTO, Long postId, Long userId, Long parentCommentId){
        // 존재하지 않는 댓글이면 에러
        Comment parentComment = commentRepository.findByIdWithUser(parentCommentId).orElseThrow(
                () -> new CustomException(ExceptionCode.COMMENT_NOT_FOUND)
        );

        // 작성자
        User userRef = entityManager.getReference(User.class, userId);
        Post postRef = entityManager.getReference(Post.class, postId);

        Comment comment = Comment.builder()
                .user(userRef)
                .post(postRef)
                .content(requestDTO.content())
                .build();

        parentComment.addChildComment(comment);
        commentRepository.save(comment);

        // 게시글의 댓글 수 증가
        redisService.incrementCnt("commentNum", postId.toString(), 1L);

        // 알람 생성
        String content = "새로운 대댓글: " + requestDTO.content();
        String redirectURL = "posts/"+postId;
        LocalDateTime date = LocalDateTime.now();

        AlarmRequest.AlarmDTO alarmDTO = new AlarmRequest.AlarmDTO(
                parentComment.getUser().getId(),
                content,
                redirectURL,
                date,
                AlarmType.comment);

        brokerService.produceAlarm(parentComment.getUser().getId(), alarmDTO);

        return new PostResponse.CreateCommentDTO(comment.getId());
    }

    @Transactional
    public void updateComment(PostRequest.UpdateCommentDTO requestDTO, Long commentId, User user){
        // 존재하지 않는 댓글이면 에러
        Comment comment = commentRepository.findByIdWithUser(commentId).orElseThrow(
                () -> new CustomException(ExceptionCode.COMMENT_NOT_FOUND)
        );

        // 수정 권한 체크
        checkCommentAuthority(comment.getUser().getId(), user);

        comment.updateComment(requestDTO.content());
    }

    // soft delete를 구현하기 전에는 부모 댓글 삭제시, 대댓글까지 모두 삭제 되도록 구현
    @Transactional
    public void deleteComment(Long postId, Long commentId, User user){
        // 존재하지 않는 댓글이면 에러
        Comment comment = commentRepository.findByIdWithUser(commentId).orElseThrow(
                () -> new CustomException(ExceptionCode.COMMENT_NOT_FOUND)
        );

        // 수정 권한 체크
        checkCommentAuthority(comment.getUser().getId(), user);

        Long childNum = Long.valueOf(comment.getChildren().size());

        // 댓글 및 관련 대댓글 삭제 (CascadeType.ALL에 의해 처리됨)
        commentRepository.deleteById(commentId);
        commentLikeRepository.deleteAllByCommentId(commentId);

        // 게시글의 댓글 수 감소
        redisService.decrementCnt("commentNum", postId.toString(), 1L + childNum);
    }

    @Transactional
    public void likeComment(Long commentId, Long userId){
        // 존재하지 않는 댓글인지 체크
        Long commentWriterId = commentRepository.findUserIdByCommentId(commentId).orElseThrow(
                () -> new CustomException(ExceptionCode.COMMENT_NOT_FOUND)
        );

        // 자기 자신의 댓글에는 좋아요를 할 수 없다.
        if(commentWriterId.equals(userId)){
            throw new CustomException(ExceptionCode.COMMENT_CANT_LIKE);
        }

        Optional<CommentLike> commentLikeOP = commentLikeRepository.findByUserIdAndCommentId(userId, commentId);

        // 이미 좋아요를 눌렀다면, 취소하는 액션이니 게시글의 좋아요 수를 감소시키고 하고, postLike 엔티티 삭제
        if(commentLikeOP.isPresent()){
            commentLikeRepository.delete(commentLikeOP.get());
            redisService.decrementCnt("commentLikeNum", commentId.toString(), 1L);
        }
        else{ // 좋아요를 누르지 않았다면, 좋아요 수를 증가키고, 엔티티 저장
            User userRef = entityManager.getReference(User.class, userId);
            Comment commentRef = entityManager.getReference(Comment.class, commentId);

            CommentLike commentLike = CommentLike.builder().user(userRef).comment(commentRef).build();

            commentLikeRepository.save(commentLike);
            redisService.incrementCnt("commentLikeNum", commentId.toString(), 1L);
        }
    }

    public List<PostResponse.PostDTO> getPostDTOsByType(PostType postType, Pageable pageable){
        // 유저를 패치조인하여 조회
        Page<Post> postPage = postRepository.findByPostTypeWithUser(postType, pageable);

        List<PostResponse.PostDTO> postDTOS = postPage.getContent().stream()
                .map(post ->  {
                    Long commentNum = redisService.getDataInLong("commentNum", post.getId().toString());
                    Long likeNum = redisService.getDataInLong("postLikeNum", post.getId().toString());

                    return new PostResponse.PostDTO(
                        post.getId(),
                        post.getUser().getNickName(),
                        post.getTitle(),
                        post.getContent(),
                        post.getCreatedDate(),
                        commentNum,
                        likeNum,
                        post.getPostImages().get(0).getImageURL());
                })
                .collect(Collectors.toList());

        return postDTOS;
    }

    public List<PostResponse.QnaDTO> getQnaDTOs(Pageable pageable){
        // 유저를 패치조인하여 조회
        Page<Post> postPage = postRepository.findByPostTypeWithUser(PostType.question, pageable);

        List<PostResponse.QnaDTO> qnaDTOS = postPage.getContent().stream()
                .map(post -> {
                    Long answerNum = redisService.getDataInLong("answerNum", post.getId().toString());

                    return new PostResponse.QnaDTO(
                        post.getId(),
                        post.getUser().getNickName(),
                        post.getTitle(),
                        post.getContent(),
                        post.getCreatedDate(),
                        answerNum);
                })
                .collect(Collectors.toList());

        return qnaDTOS;
    }

    private Pageable createPageable(int page, int size, String sortProperty) {
        return PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, sortProperty));
    }

    private void checkPostAuthority(Long writerId, User accessor){
        // 관리자면 수정 가능
        if(accessor.getRole().equals(Role.ADMIN)){
            return;
        }

        if(!writerId.equals(accessor.getId())){
            throw new CustomException(ExceptionCode.USER_FORBIDDEN);
        }
    }

    private void checkCommentAuthority(Long writerId, User accessor) {
        // 관리자면 수정 가능
        if(accessor.getRole().equals(Role.ADMIN)){
            return;
        }

        if(!writerId.equals(accessor.getId())){
            throw new CustomException(ExceptionCode.USER_FORBIDDEN);
        }
    }
}