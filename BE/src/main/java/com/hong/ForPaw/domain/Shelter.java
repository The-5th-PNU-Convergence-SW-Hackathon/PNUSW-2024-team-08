package com.hong.ForPaw.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Shelter {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "regionCode_id")
    private RegionCode regionCode;

    // 보호소 등록 번호
    @Id
    private Long id;

    @Column
    private String name;

    @Column
    private String careTel;

    @Column
    private String careAddr;

    @Column
    private Long animalCnt = 0L;

    @Builder
    public Shelter(Long id, RegionCode regionCode, String name, String careTel, String careAddr) {
        this.id = id;
        this.regionCode = regionCode;
        this.name = name;
        this.careTel = careTel;
        this.careAddr = careAddr;
    }

    public void updateShelterInfo(String careTel, String careAddr, Long animalCnt){
        this.careTel = careTel;
        this.careAddr = careAddr;
        this.animalCnt = animalCnt;
    }
}