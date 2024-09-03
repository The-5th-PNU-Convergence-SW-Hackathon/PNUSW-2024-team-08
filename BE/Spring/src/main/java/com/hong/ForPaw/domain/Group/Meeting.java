package com.hong.ForPaw.domain.Group;

import com.hong.ForPaw.domain.TimeStamp;
import com.hong.ForPaw.domain.User.User;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.BatchSize;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "meeting_tb")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Meeting extends TimeStamp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id")
    private Group group;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User creator; // 주최자

    @OneToMany(mappedBy = "meeting", cascade = CascadeType.ALL, orphanRemoval = true)
    @BatchSize(size = 500)
    private List<MeetingUser> meetingUsers = new ArrayList<>();

    @Column
    private String name;

    @Column
    private LocalDateTime date;

    @Column
    private String location;

    @Column
    private Long cost;

    @Column
    private Integer maxNum;

    @Column
    private String description;

    @Column
    private String profileURL;

    @Builder
    public Meeting(Group group, User creator, String name, LocalDateTime date, String location, Long cost, Integer maxNum, String description, String profileURL) {
        this.group = group;
        this.creator = creator;
        this.name = name;
        this.date = date;
        this.location = location;
        this.cost = cost;
        this.maxNum = maxNum;
        this.description = description;
        this.profileURL = profileURL;
    }

    public void updateMeeting(String name, LocalDateTime date, String location, Long cost, Integer maxNum, String description, String profileURL){
        this.name = name;
        this.date = date;
        this.location = location;
        this.cost = cost;
        this.maxNum = maxNum;
        this.description = description;
        this.profileURL = profileURL;
    }

    public void addMeetingUser(MeetingUser meetingUser){
        meetingUsers.add(meetingUser);
        meetingUser.updateMeeting(this);
    }
}
