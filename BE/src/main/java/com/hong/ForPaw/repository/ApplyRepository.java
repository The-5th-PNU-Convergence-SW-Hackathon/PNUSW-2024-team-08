package com.hong.ForPaw.repository;

import com.hong.ForPaw.domain.Apply.Apply;
import com.hong.ForPaw.domain.Post.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ApplyRepository extends JpaRepository<Apply, Long> {

    @Query("SELECT a FROM Apply a WHERE a.removedAt IS NULL")
    List<Apply> findAll();

    @Query("SELECT a FROM Apply a WHERE a.id = :id AND a.removedAt IS NULL")
    Optional<Apply> findById(@Param("id") Long id);

    @Query("SELECT a FROM Apply a WHERE a.user.id = :userId AND a.removedAt IS NULL")
    List<Apply> findAllByUserId(@Param("userId") Long userId);

    @Query("SELECT COUNT(a) > 0 FROM Apply a WHERE a.id = :applyId AND a.user.id = :userId AND a.removedAt IS NULL")
    boolean existsByApplyIdAndUserId(@Param("applyId") Long applyId, @Param("userId") Long userId);

    @Query("SELECT COUNT(a) > 0 FROM Apply a WHERE a.user.id = :userId AND a.animal.id = :animalId AND a.removedAt IS NULL")
    boolean existsByUserIdAndAnimalId(@Param("userId") Long userId, @Param("animalId") Long animalId);

    @Query("SELECT a.animal.id FROM Apply a WHERE a.id = :applyId AND a.removedAt IS NULL")
    Long findAnimalIdById(@Param("applyId") Long applyId);

    void deleteAllByUserId(Long userId);
}