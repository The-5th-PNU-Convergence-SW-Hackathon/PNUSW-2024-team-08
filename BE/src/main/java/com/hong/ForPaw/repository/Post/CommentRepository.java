package com.hong.ForPaw.repository.Post;

import com.hong.ForPaw.domain.Post.Comment;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Query("SELECT c FROM Comment c WHERE c.removedAt IS NULL")
    List<Comment> findAll();

    @Query("SELECT c FROM Comment c WHERE c.id = :id AND c.removedAt IS NULL")
    Optional<Comment> findById(@Param("id") Long id);

    @Query("SELECT c FROM Comment c WHERE c.id = :commentId AND c.removedAt IS NULL")
    @EntityGraph(attributePaths = {"user"})
    Optional<Comment> findByIdWithUser(@Param("commentId") Long commentId);

    @Query("SELECT c.user.id FROM Comment c WHERE c.id = :commentId AND c.removedAt IS NULL")
    Optional<Long> findUserIdByCommentId(@Param("commentId") Long commentId);

    // 모든 댓글과 대댓글을 한 번에 가져오기
    @Query("SELECT c FROM Comment c WHERE c.post.id = :postId")
    @EntityGraph(attributePaths = {"user, parent"})
    List<Comment> findAllByPostIdWithUserAndParent(@Param("postId") Long postId);

    boolean existsById(Long id);

    void deleteAllByPostId(Long postId);

    @Modifying
    @Query("UPDATE Comment c SET c.removedAt = NOW() WHERE c.post.id IN (SELECT p.id FROM Post p WHERE p.group.id = :groupId )")
    void deleteAllByGroupId(@Param("groupId") Long groupId);
}