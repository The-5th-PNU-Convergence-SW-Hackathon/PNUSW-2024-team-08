package com.hong.ForPaw.domain;


import jakarta.persistence.*;
import lombok.*;



@Entity
@Table(name = "regionCode_tb")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class RegionCode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 시도 코드
    @Column
    private Integer uprCd;

    // 시군구 코드
    @Column
    private Integer orgCd;

    // 시도명
    @Column
    private String uprName;

    // 시도군명
    @Column
    private String orgName;

    @Builder
    public RegionCode(Integer uprCd, Integer orgCd, String uprName, String orgName) {
        this.uprCd = uprCd;
        this.orgCd = orgCd;
        this.uprName = uprName;
        this.orgName = orgName;
    }
}
