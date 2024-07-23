package com.hong.ForPaw.domain.Apply;

import com.hong.ForPaw.domain.Animal.Animal;
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
public class Apply extends TimeStamp {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "animal_id")
    private Animal animal;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @Enumerated(EnumType.STRING)
    private Status status;

    @Column
    private String name;

    @Column
    private String tel;

    @Column
    private String residence;

    @Builder
    public Apply(User user, Animal animal, Status status, String name, String tel, String residence) {
        this.user = user;
        this.animal = animal;
        this.status = status;
        this.name = name;
        this.tel = tel;
        this.residence = residence;
    }
}
