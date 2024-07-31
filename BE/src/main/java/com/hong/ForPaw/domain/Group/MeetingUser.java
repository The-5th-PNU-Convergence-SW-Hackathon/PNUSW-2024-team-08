package com.hong.ForPaw.domain.Group;

import com.hong.ForPaw.domain.TimeStamp;
import com.hong.ForPaw.domain.User.User;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.BatchSize;


@Entity
@Table(name = "meetingUser_tb")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class MeetingUser extends TimeStamp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "meeting_id")
    private  Meeting meeting;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column
    private String profileURL;

    @Builder
    public MeetingUser(User user, String profileURL) {
        this.user = user;
        this.profileURL = profileURL;
    }

    public void updateMeeting(Meeting meeting){
        this.meeting = meeting;
    }
}
