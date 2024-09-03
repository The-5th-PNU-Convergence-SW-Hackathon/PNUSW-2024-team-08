package com.hong.ForPaw.repository.Group;

import com.hong.ForPaw.domain.Group.MeetingUser;
import com.hong.ForPaw.domain.User.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MeetingUserRepository extends JpaRepository<MeetingUser, Long> {

    @Query("SELECT mu.user FROM MeetingUser mu WHERE mu.meeting.id = :meetingId")
    List<User> findUsersByMeetingId(@Param("meetingId") Long meetingId);

    @EntityGraph(attributePaths = {"meeting"})
    @Query("SELECT gu FROM GroupUser gu WHERE gu.user.id = :userId")
    List<MeetingUser> findAllByUserIdWithMeeting(Long userId);

    @Query("SELECT COUNT(m) > 0 FROM MeetingUser m WHERE m.meeting.id = :meetingId AND m.user.id = :userId")
    boolean existsByMeetingIdAndUserId(@Param("meetingId") Long meetingId, @Param("userId") Long userId);

    void deleteByMeetingIdAndUserId(Long meetingId, Long userId);

    void deleteAllByMeetingId(Long meetingId);

    @Modifying
    @Query("DELETE FROM MeetingUser mu WHERE mu.meeting.id IN (SELECT m.id FROM Meeting m WHERE m.group.id = :groupId)")
    void deleteAllByGroupId(@Param("groupId") Long groupId);
}
