package com.hong.ForPaw.domain.Animal;

import com.hong.ForPaw.domain.Shelter;
import com.hong.ForPaw.domain.TimeStamp;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;


import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "animal_tb")
@SQLDelete(sql = "UPDATE animal_tb SET removed_at = NOW() WHERE id=?")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Animal extends TimeStamp {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "shelter_id")
    private Shelter shelter;

    @Id
    private Long id;

    @Column
    private LocalDate happenDt;

    @Column
    private String happenPlace;

    @Column
    private String kind;

    @Column
    private String color;

    @Column
    private String age;

    @Column
    private String weight;

    // 공고 시작일
    @Column
    private LocalDate noticeSdt;

    @Column
    private LocalDate noticeEdt;

    @Column
    private String profileURL;

    // 보호중 여부
    @Column
    private String processState;

    @Column
    private String gender;

    // 중성화 여부
    @Column
    private String neuter;

    @Column
    private String specialMark;

    @Column
    private String region;

    @Column
    private String name;

    @Column(name = "removed_at")
    private LocalDateTime removedAt;

    @Builder
    public Animal(Long id, Shelter shelter, LocalDate happenDt, String happenPlace, String kind, String color, String age, String weight, LocalDate noticeSdt, LocalDate noticeEdt, String profileURL, String processState, String gender, String neuter, String specialMark, String name, String region) {
        this.id = id;
        this.shelter = shelter;
        this.happenDt = happenDt;
        this.happenPlace = happenPlace;
        this.kind = kind;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.noticeSdt = noticeSdt;
        this.noticeEdt = noticeEdt;
        this.profileURL = profileURL;
        this.processState = processState;
        this.gender = gender;
        this.neuter = neuter;
        this.specialMark = specialMark;
        this.name = name;
        this.region = region;
    }
}
