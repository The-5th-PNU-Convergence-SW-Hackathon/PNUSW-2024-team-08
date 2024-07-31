package com.hong.ForPaw.domain.User;

import com.hong.ForPaw.domain.TimeStamp;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;

import java.sql.Timestamp;
import java.time.LocalDateTime;


@Entity
@Table(name = "user_tb")
@SQLDelete(sql = "UPDATE user_tb SET removed_at = NOW() WHERE id=?")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class User extends TimeStamp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String nickName;

    @Column
    private String email;

    @Column
    private String password;

    @Column
    @Enumerated(EnumType.STRING)
    private Role role;

    @Column
    private String profileURL;

    // 활동 지역 - 시/도/군
    @Column
    private String region;

    // 활동 지역 - 군/구
    @Column
    private String subRegion;

    @Column(name = "removed_at")
    private LocalDateTime removedAt;

    @Builder
    public User(Long id, String name, String nickName, String email, String password, Role role, String profileURL, String region, String subRegion) {
        this.id = id;
        this.name = name;
        this.nickName = nickName;
        this.email = email;
        this.password = password;
        this.role = role;
        this.profileURL = profileURL;
        this.region = region;
        this.subRegion = subRegion;
    }

    public void updatePassword (String password) {
        this.password  = password;
    }

    public void updateProfile(String nickName, String region, String subRegion, String profileURL){
        this.nickName = nickName;
        this.region = region;
        this.subRegion = subRegion;
        this.profileURL = profileURL;
    }

    public void updateRole(Role role){ this.role = role; }
}
