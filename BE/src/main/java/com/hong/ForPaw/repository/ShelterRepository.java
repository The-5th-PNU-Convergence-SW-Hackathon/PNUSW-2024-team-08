package com.hong.ForPaw.repository;

import com.hong.ForPaw.domain.Shelter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ShelterRepository extends JpaRepository<Shelter, Long> {

    @Modifying
    @Query("DELETE FROM Shelter s WHERE s.animalCnt = 0")
    void deleteZeroShelter();

    Page<Shelter> findWithAnimalCntMoreThanOne(Long animalCnt, Pageable pageable);

    Page<Shelter> findByNameContaining(String name, Pageable pageable);
}