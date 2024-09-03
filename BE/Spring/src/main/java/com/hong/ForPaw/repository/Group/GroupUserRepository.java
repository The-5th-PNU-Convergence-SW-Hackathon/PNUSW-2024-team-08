package com.hong.ForPaw.repository.Group;

import com.hong.ForPaw.domain.Group.Group;
import com.hong.ForPaw.domain.Group.GroupUser;
import com.hong.ForPaw.domain.Group.Role;
import com.hong.ForPaw.domain.User.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.List;
import java.util.Optional;

@Repository
public interface GroupUserRepository extends JpaRepository<GroupUser, Long> {

    Optional<GroupUser> findByGroupIdAndUserId(Long groupId, Long userId);

    @EntityGraph(attributePaths = {"group"})
    @Query("SELECT gu FROM GroupUser gu WHERE gu.user.id = :userId")
    List<GroupUser> findAllByUserIdWithGroup(Long userId);

    @Query("SELECT gu.user FROM GroupUser gu WHERE gu.group.id = :groupId AND gu.user.id NOT IN (:myId)")
    List<User> findAllUsersByGroupIdWithoutMe(@Param("groupId") Long groupId, @Param("myId") Long myId);

    @Query("SELECT gu.group FROM GroupUser gu WHERE gu.user.id = :userId")
    List<Group> findAllGroupByUserId(@Param("userId") Long userId);

    @Query("SELECT gu.group FROM GroupUser gu WHERE gu.user.id = :userId")
    Page<Group> findAllGroupByUserId(@Param("userId") Long userId, Pageable pageable);

    @EntityGraph(attributePaths = {"user"})
    @Query("SELECT gu FROM GroupUser gu WHERE gu.group.id = :groupId")
    List<GroupUser> findByGroupIdWithUser(@Param("groupId") Long groupId);

    @Query("SELECT COUNT(gu) > 0 FROM GroupUser gu WHERE gu.group.id = :groupId AND gu.user.id = :userId")
    boolean existsByGroupIdAndUserId(@Param("groupId") Long groupId, @Param("userId") Long userId);

    @Modifying
    @Query("UPDATE GroupUser gu SET gu.role = :role WHERE gu.group.id = :groupId AND gu.user.id = :userId")
    void updateRole(@Param("role") Role role, @Param("groupId") Long groupId, @Param("userId") Long userId);

    void deleteByGroupIdAndUserId(Long groupId, Long userId);

    void deleteAllByGroupId(Long groupId);

    void deleteAllByUserId(Long userId);
}