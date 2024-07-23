package com.hong.ForPaw.repository;

import com.hong.ForPaw.domain.Post.PostReadStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PostReadStatusRepository extends JpaRepository<PostReadStatus, Long> {

    void deleteAllByPostId(Long postId);

    @Query("SELECT COUNT(ps) > 0 FROM PostReadStatus ps WHERE ps.user.id = :userId AND ps.post.id = :postId")
    boolean existsByUserIdAndPostId(@Param("userId") Long userId, @Param("postId") Long postId);
}
