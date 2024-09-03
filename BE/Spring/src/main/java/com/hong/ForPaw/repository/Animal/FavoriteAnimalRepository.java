package com.hong.ForPaw.repository.Animal;

import com.hong.ForPaw.domain.Animal.Animal;
import com.hong.ForPaw.domain.Animal.FavoriteAnimal;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavoriteAnimalRepository extends JpaRepository<FavoriteAnimal, Long> {

    Optional<FavoriteAnimal> findByUserIdAndAnimalId(Long userId, Long animalId);

    @Query("SELECT f.animal FROM FavoriteAnimal f WHERE f.user.id = :userId")
    Page<Animal> findAnimalByUserId(@Param("userId") Long userId, Pageable pageable);

    @Query("SELECT fa.animal.id FROM FavoriteAnimal fa WHERE fa.user.id = :userId")
    List<Long> findLikedAnimalIdsByUserId(@Param("userId") Long userId);
}
