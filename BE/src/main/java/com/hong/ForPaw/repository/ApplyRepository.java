package com.hong.ForPaw.repository;

import com.hong.ForPaw.domain.Apply.Apply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ApplyRepository extends JpaRepository<Apply, Long> {

    List<Apply> findByUserId(Long userId);

    @Query("SELECT COUNT(a) > 0 FROM Apply a WHERE a.id = :applyId AND a.animal.id = :animalId")
    boolean existsByApplyIdAndAnimalId(@Param("applyId") Long applyId, @Param("animalId") Long animalId);

    @Query("SELECT COUNT(a) > 0 FROM Apply a WHERE a.user.id = :userId AND a.animal.id = :animalId")
    boolean existsByUserIdAndAnimalId(@Param("userId") Long userId, @Param("animalId") Long animalId);
}