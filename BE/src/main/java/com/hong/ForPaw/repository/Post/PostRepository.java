package com.hong.ForPaw.repository.Post;

import com.hong.ForPaw.domain.Post.Post;
import com.hong.ForPaw.domain.Post.PostType;
import com.hong.ForPaw.domain.User.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    @Query("SELECT p FROM Post p WHERE p.removedAt IS NULL")
    List<Post> findAll();

    @Query("SELECT p FROM Post p WHERE p.id = :id AND p.removedAt IS NULL")
    Optional<Post> findById(@Param("id") Long id);

    @Query("SELECT p.user FROM Post p WHERE p.id = :postId AND p.removedAt IS NULL")
    Optional<User> findUserByPostId(@Param("postId") Long postId);

    @Query("SELECT p.user.id FROM Post p WHERE p.id = :postId AND p.removedAt IS NULL")
    Optional<Long> findUserIdByPostId(@Param("postId") Long postId);

    @EntityGraph(attributePaths = {"user"})
    @Query("SELECT p FROM Post p WHERE p.group.id = :groupId AND p.removedAt IS NULL")
    Page<Post> findByGroupId(@Param("groupId") Long groupId, Pageable pageable);

    @Query("SELECT p FROM Post p WHERE p.title LIKE %:title% AND p.removedAt IS NULL")
    Page<Post> findByTitleContaining(@Param("title") String title, Pageable pageable);

    @EntityGraph(attributePaths = {"user"})
    @Query("SELECT p FROM Post p WHERE p.postType = :postType AND p.removedAt IS NULL")
    Page<Post> findByPostTypeWithUser(@Param("postType") PostType postType, Pageable pageable);

    @EntityGraph(attributePaths = {"user"})
    @Query("SELECT p FROM Post p WHERE p.parent.id = :parentId AND p.removedAt IS NULL")
    List<Post> findByParentIdWithUser(@Param("parentId") Long parentId);

    @EntityGraph(attributePaths = {"user"})
    @Query("SELECT p FROM Post p WHERE p.id = :postId AND p.removedAt IS NULL")
    Optional<Post> findByIdWithUser(@Param("postId") Long postId);

    @Query("SELECT prs.post.id FROM PostReadStatus prs WHERE prs.user.id = :userId")
    List<Long> findAllPostIdByUserId(@Param("userId") Long userId);

    @Query("SELECT p.id FROM Post p WHERE p.removedAt IS NULL")
    Page<Long> findAllPostId(Pageable pageable);

    boolean existsById(Long id);

    @Modifying
    @Query("UPDATE Post p SET p.likeNum = :likeNum WHERE p.id = :postId AND p.removedAt IS NULL")
    void updateLikeNum(@Param("likeNum") Long likeNum, @Param("postId") Long postId);

    void deleteAllByGroupId(Long groupId);
}