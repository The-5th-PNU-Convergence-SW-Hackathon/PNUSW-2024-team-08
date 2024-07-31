package com.hong.ForPaw.repository.Post;

import com.hong.ForPaw.domain.Post.PostReadStatus;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostReadStatusRepository extends JpaRepository<PostReadStatus, Long> {

    void deleteAllByPostId(Long postId);

    @Modifying
    @Query("DELETE FROM PostReadStatus prs WHERE prs.post.id IN (SELECT p.id FROM Post p WHERE p.group.id = :groupId)")
    void deleteAllByGroupId(@Param("groupId") Long groupId);

    void deleteAllByUserId(Long userId);
}
