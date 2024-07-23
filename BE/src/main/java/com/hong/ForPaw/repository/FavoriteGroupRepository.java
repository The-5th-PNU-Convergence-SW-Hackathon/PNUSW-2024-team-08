package com.hong.ForPaw.repository;

import com.hong.ForPaw.domain.Group.FavoriteGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FavoriteGroupRepository extends JpaRepository<FavoriteGroup, Long> {

    Optional<FavoriteGroup> findByUserIdAndGroupId(Long userId, Long groupId);

    void deleteAllByGroupId(Long groupId);
}