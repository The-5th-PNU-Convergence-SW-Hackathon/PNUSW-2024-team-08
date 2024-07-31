package com.hong.ForPaw.domain.Group;

import com.hong.ForPaw.domain.Animal.Animal;
import com.hong.ForPaw.domain.TimeStamp;
import com.hong.ForPaw.domain.User.User;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "favoriteGroup_tb", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"user_id", "group_id"})
})
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class FavoriteGroup extends TimeStamp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id")
    private Group group;

    @Builder
    public FavoriteGroup(User user, Group group) {
        this.user = user;
        this.group = group;
    }
}
