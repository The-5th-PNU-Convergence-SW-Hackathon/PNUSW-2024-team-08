package com.hong.ForPaw.repository.Animal;

import com.hong.ForPaw.domain.Animal.Animal;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Long> {

    @Query("SELECT a FROM Animal a WHERE a.removedAt IS NULL")
    Page<Animal> findAll(Pageable pageable);

    @Query("SELECT a FROM Animal a WHERE a.id = :id AND a.removedAt IS NULL")
    Optional<Animal> findById(@Param("id") Long id);
    
    @Query("SELECT a FROM Animal a WHERE a.shelter.id = :careRegNo AND a.removedAt IS NULL")
    Page<Animal> findByShelterId(@Param("careRegNo") Long careRegNo, Pageable pageable);

    @Query("SELECT COUNT(a) > 0 FROM Animal a WHERE a.id = :animalId AND a.removedAt IS NULL")
    boolean existsById(@Param("animalId") Long animalId);
}
