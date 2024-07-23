package com.hong.ForPaw.repository;

import com.hong.ForPaw.domain.Group.Group;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {

    Optional<Group> findByName(String name);

    Page<Group> findByRegion(String region, Pageable pageable);

    boolean existsByName(String name);

    boolean existsById(Long id);

    @Modifying
    @Query("UPDATE Group g SET g.participationNum = g.participationNum + 1 WHERE g.id = :groupId")
    void incrementParticipantNumById(@Param("groupId") Long groupId);

    @Modifying
    @Query("UPDATE Group g SET g.participationNum = g.participationNum - 1 WHERE g.id = :groupId AND g.participationNum > 0")
    void decrementParticipantNumById(@Param("groupId") Long groupId);

    @Query("SELECT g.description FROM Group g WHERE g.id = :groupId")
    String findDescriptionById(Long groupId);

    Page<Group> findByNameContaining(String name, Pageable pageable);
}
