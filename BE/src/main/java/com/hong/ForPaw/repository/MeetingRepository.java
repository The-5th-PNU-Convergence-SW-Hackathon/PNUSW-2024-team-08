package com.hong.ForPaw.repository;

import com.hong.ForPaw.domain.Group.Meeting;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MeetingRepository extends JpaRepository<Meeting, Long> {

    boolean existsById(Long id);

    @Modifying
    @Query("UPDATE Meeting m SET m.participantNum = m.participantNum + 1 WHERE m.id = :meetingId")
    void incrementParticipantNumById(@Param("meetingId") Long meetingId);

    @Modifying
    @Query("UPDATE Meeting m SET m.participantNum = m.participantNum - 1 WHERE m.id = :meetingId AND m.participantNum > 0")
    void decrementParticipantNumById(@Param("meetingId") Long meetingId);

    void deleteAllByGroupId(Long groupId);

    Page<Meeting> findAllByGroupId(Long groupId, Pageable pageable);
}