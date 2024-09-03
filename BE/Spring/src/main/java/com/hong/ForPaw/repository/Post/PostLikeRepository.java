package com.hong.ForPaw.repository.Post;

import com.hong.ForPaw.domain.Post.PostLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PostLikeRepository extends JpaRepository<PostLike, Long> {

    Optional<PostLike> findByUserIdAndPostId(Long userId, Long postId);

    void deleteAllByPostId(Long postId);

    @Modifying
    @Query("DELETE FROM PostLike pl WHERE pl.post.id IN (SELECT p.id FROM Post p WHERE p.group.id = :groupId)")
    void deleteAllByGroupId(@Param("groupId") Long groupId);
}
