package com.hong.ForPaw.repository;

import com.hong.ForPaw.domain.Animal.FavoriteAnimal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FavoriteAnimalRepository extends JpaRepository<FavoriteAnimal, Long> {

    Optional<FavoriteAnimal> findByUserIdAndAnimalId(Long userId, Long animalId);
}
