package com.hong.ForPaw.repository.Group;

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

    Page<Group> findByRegion(String region, Pageable pageable);

    boolean existsByName(String name);

    boolean existsById(Long id);

    Page<Group> findByNameContaining(@Param("name") String name, Pageable pageable);

    @Query("SELECT g.id FROM Group g")
    Page<Long> findGroupIds(Pageable pageable);
}
