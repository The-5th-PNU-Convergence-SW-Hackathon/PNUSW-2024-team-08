package com.hong.ForPaw.service;

import com.hong.ForPaw.controller.DTO.SearchResponse;
import com.hong.ForPaw.domain.Group.Group;
import com.hong.ForPaw.domain.Post.Post;
import com.hong.ForPaw.domain.Shelter;
import com.hong.ForPaw.repository.Group.GroupRepository;
import com.hong.ForPaw.repository.Post.PostRepository;
import com.hong.ForPaw.repository.ShelterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SearchService {

    private final ShelterRepository shelterRepository;
    private final PostRepository postRepository;
    private final GroupRepository groupRepository;
    private final RedisService redisService;

    @Transactional
    public SearchResponse.SearchAllDTO searchAll(String keyword){
        // 전체 검색 시 일단 0페이지의 데이터 5개만 보내준다.
        Pageable pageable = createPageable(0, 5, "id");

        // 보호소 검색
        List<SearchResponse.ShelterDTO> shelterDTOS = getShelterDTOsByKeyword(keyword, pageable);

        // 게시글 검색
        List<SearchResponse.PostDTO> postDTOS = getPostDTOsByKeyword(keyword, pageable);

        // 그룹 검색
        List<SearchResponse.GroupDTO> groupDTOS = getGroupDTOsByKeyword(keyword, pageable);

        return new SearchResponse.SearchAllDTO(shelterDTOS, postDTOS, groupDTOS);
    }

    @Transactional
    public SearchResponse.SearchShelterListDTO searchShelterList(String keyword, Integer page, Integer size){
        Pageable pageable = createPageable(page, size, "id");
        List<SearchResponse.ShelterDTO> shelterDTOS = getShelterDTOsByKeyword(keyword, pageable);

        return new SearchResponse.SearchShelterListDTO(shelterDTOS);
    }

    @Transactional
    public SearchResponse.SearchPostListDTO searchPostList(String keyword, Integer page, Integer size){
        Pageable pageable =createPageable(page, size, "id");
        List<SearchResponse.PostDTO> postDTOS = getPostDTOsByKeyword(keyword, pageable);

        return new SearchResponse.SearchPostListDTO(postDTOS);
    }

    @Transactional
    public SearchResponse.SearchGroupListDTO searchGroupList(String keyword, Integer page, Integer size){
        Pageable pageable =createPageable(page, size, "id");
        List<SearchResponse.GroupDTO> groupDTOS = getGroupDTOsByKeyword(keyword, pageable);

        return new SearchResponse.SearchGroupListDTO(groupDTOS);
    }

    private List<SearchResponse.ShelterDTO> getShelterDTOsByKeyword(String keyword, Pageable pageable){
        Page<Shelter> shelterPage = shelterRepository.findByNameContaining(keyword, pageable);

        List<SearchResponse.ShelterDTO> shelterDTOS = shelterPage.getContent().stream()
                .filter(shelter -> shelter.getAnimalCnt() > 0)
                .map(shelter -> new SearchResponse.ShelterDTO(shelter.getId(), shelter.getName()))
                .collect(Collectors.toList());

        return shelterDTOS;
    }

    private List<SearchResponse.PostDTO> getPostDTOsByKeyword(String keyword, Pageable pageable){
        // PostImages는 배치로 가져온다
        Page<Post> postPage = postRepository.findByTitleContaining(keyword, pageable);

        List<SearchResponse.PostDTO> postDTOS = postPage.getContent().stream()
                .map(post -> {
                    List<SearchResponse.PostImageDTO> postImageDTOS = post.getPostImages().stream()
                            .map(postImage -> new SearchResponse.PostImageDTO(postImage.getId(), postImage.getImageURL()))
                            .collect(Collectors.toList());

                    Long commentNum = redisService.getDataInLong("commentNum", post.getId().toString());
                    Long likeNum = redisService.getDataInLong("postLikeNum", post.getId().toString());

                    return new SearchResponse.PostDTO(
                            post.getId(),
                            post.getTitle(),
                            post.getContent(),
                            post.getCreatedDate(),
                            commentNum,
                            likeNum,
                            postImageDTOS);
                })
                .collect(Collectors.toList());

        return postDTOS;
    }

    private List<SearchResponse.GroupDTO> getGroupDTOsByKeyword(String keyword, Pageable pageable){
        Page<Group> groupPage = groupRepository.findByNameContaining(keyword, pageable);

        List<SearchResponse.GroupDTO> groupDTOS = groupPage.getContent().stream()
                .map(group -> {
                    Long participantNum = redisService.getDataInLong("participantNum", group.getId().toString());
                    Long likeNum = redisService.getDataInLong("groupLikeNum", group.getId().toString());

                    return new SearchResponse.GroupDTO(
                        group.getId(),
                        group.getName(),
                        group.getDescription(),
                        participantNum,
                        group.getCategory(),
                        group.getRegion(),
                        group.getSubRegion(),
                        group.getProfileURL(),
                        likeNum);
                })
                .collect(Collectors.toList());

        return groupDTOS;
    }

    private Pageable createPageable(int page, int size, String sortProperty) {
        return PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, sortProperty));
    }
}
