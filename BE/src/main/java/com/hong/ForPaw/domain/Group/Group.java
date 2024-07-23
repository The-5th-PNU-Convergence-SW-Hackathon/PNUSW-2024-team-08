package com.hong.ForPaw.domain.Group;

import com.hong.ForPaw.domain.TimeStamp;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "groups_table")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Group extends TimeStamp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String region;

    @Column
    private String subRegion;

    @Column
    private String description;

    @Column
    private String category;

    @Column
    private String profileURL;

    @Column
    private Integer likeNum = 0;

    @Column
    private Integer participationNum = 0;

    @Builder
    public Group(String name, String region, String subRegion, String description, String category, String profileURL) {
        this.name = name;
        this.region = region;
        this.subRegion = subRegion;
        this.description = description;
        this.category = category;
        this.profileURL = profileURL;
    }

    public void updateInfo(String name, String region, String subRegion, String description, String category, String profileURL){
        this.name = name;
        this.region = region;
        this.subRegion = subRegion;
        this.description = description;
        this.category = category;
        this.profileURL = profileURL;
    }
}
