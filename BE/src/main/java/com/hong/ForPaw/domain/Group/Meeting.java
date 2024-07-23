package com.hong.ForPaw.domain.Group;

import com.hong.ForPaw.domain.TimeStamp;
import com.hong.ForPaw.domain.User.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
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
    private User user; // 주최자

    @Column
    private String name;

    @Column
    private LocalDateTime date;

    @Column
    private String location;

    @Column
    private Long cost;

    @Column
    private Integer participantNum = 0;

    @Column
    private Integer maxNum;

    @Column
    private String description;

    @Column
    private String profileURL;

    @Builder
    public Meeting(Group group, User user,String name, LocalDateTime date, String location, Long cost, Integer maxNum, String description, String profileURL) {
        this.group = group;
        this.user = user;
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
}
