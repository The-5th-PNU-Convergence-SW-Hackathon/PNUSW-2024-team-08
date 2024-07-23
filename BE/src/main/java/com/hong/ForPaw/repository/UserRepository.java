package com.hong.ForPaw.repository;

import com.hong.ForPaw.domain.User.Role;
import com.hong.ForPaw.domain.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    @Query("SELECT u.role FROM User u WHERE u.id = :userId")
    Optional<Role> findRoleById(@Param("userId") Long userId);
}
