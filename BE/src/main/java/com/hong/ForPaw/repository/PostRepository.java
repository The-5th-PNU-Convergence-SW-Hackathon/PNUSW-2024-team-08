package com.hong.ForPaw.repository;

import com.hong.ForPaw.domain.Post.Post;
import com.hong.ForPaw.domain.Post.PostType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    Page<Post> findByPostType(PostType postType, Pageable pageable);

    boolean existsById(Long id);

    @Query("SELECT (COUNT(p) > 0) FROM Post p WHERE p.id = :postId AND p.user.id = :userId")
    boolean isOwnPost(@Param("postId") Long postId, @Param("userId") Long userId);

    @Modifying
    @Query("UPDATE Post p SET p.likeNum = p.likeNum + 1 WHERE p.id = :postId")
    void incrementLikeNumById(@Param("postId") Long postId);

    @Modifying
    @Query("UPDATE Post p SET p.likeNum = p.likeNum - 1 WHERE p.id = :postId AND p.likeNum > 0")
    void decrementLikeNumById(@Param("postId") Long postId);

    @Modifying
    @Query("UPDATE Post p SET p.commentNum = p.commentNum + 1 WHERE p.id = :postId")
    void incrementCommentNumById(@Param("postId") Long postId);

    @Modifying
    @Query("UPDATE Post p SET p.commentNum = p.commentNum - 1 WHERE p.id = :postId AND p.commentNum > 0")
    void decrementCommentNumById(@Param("postId") Long postId);

    @Query("SELECT p.user.id FROM Post p WHERE p.id = :postId")
    Optional<Long> findUserIdByPostId(@Param("postId") Long postId);

    @Modifying
    @Query("UPDATE Post p SET p.title = :title, p.content = :content WHERE p.id = :postId")
    void updatePostTitleAndContent(@Param("postId") Long postId, @Param("title") String title, @Param("content") String content);

    void deleteAllByGroupId(Long groupId);

    Page<Post> findAllByGroupId(Long groupId, Pageable pageable);

    Page<Post> findByTitleContainingOrContentContaining(String titleKeyword, String contentKeyword, Pageable pageable);
}