package com.hong.ForPaw.domain.Group;

import com.hong.ForPaw.domain.TimeStamp;
import com.hong.ForPaw.domain.User.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class GroupUser extends TimeStamp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id")
    private Group group;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column
    private Role role;

    @Column
    private String greeting;

    @Builder
    public GroupUser(Group group, User user, Role role, String greeting) {
        this.group = group;
        this.user = user;
        this.role = role;
        this.greeting = greeting;
    }

    public void updateRole(Role role){
        this.role = role;
    }
}
