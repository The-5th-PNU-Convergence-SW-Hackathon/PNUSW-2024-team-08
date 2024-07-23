package com.hong.ForPaw.repository;

import com.hong.ForPaw.domain.Animal.Animal;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Long> {
    Page<Animal> findAll(Pageable pageable);

    Page<Animal> findByShelterCareRegNo(Long careRegNo, Pageable pageable);

    boolean existsById(Long id);
}
