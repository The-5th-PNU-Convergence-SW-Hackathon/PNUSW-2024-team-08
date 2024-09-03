package com.hong.ForPaw.repository.Group;

import com.hong.ForPaw.domain.Group.FavoriteGroup;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavoriteGroupRepository extends JpaRepository<FavoriteGroup, Long> {

    Optional<FavoriteGroup> findByUserIdAndGroupId(Long userId, Long groupId);

    @EntityGraph(attributePaths = {"group"})
    @Query("SELECT fg FROM FavoriteGroup fg WHERE fg.user.id = :userId")
    List<FavoriteGroup> findAllByUserIdWithGroup(Long userId);

    void deleteAllByGroupId(Long groupId);
}