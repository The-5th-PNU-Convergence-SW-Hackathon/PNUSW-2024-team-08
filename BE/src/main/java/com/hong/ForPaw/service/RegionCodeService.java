package com.hong.ForPaw.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hong.ForPaw.controller.DTO.RegionsDTO;
import com.hong.ForPaw.domain.RegionCode;
import com.hong.ForPaw.domain.User.Role;
import com.hong.ForPaw.repository.RegionCodeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;

@Service
@RequiredArgsConstructor
public class RegionCodeService {

    private final RegionCodeRepository regionCodeRepository;
    private final ObjectMapper mapper;

    public void loadRegionCodeData(Role role) throws IOException {
        InputStream inputStream = TypeReference.class.getResourceAsStream("/sigungu.json");
        RegionsDTO json = mapper.readValue(inputStream, RegionsDTO.class);

        json.regions().forEach(region ->
                        region.subRegions().forEach(subRegion -> {
                            RegionCode regionCode = RegionCode.builder()
                                    .uprCd(region.orgCd())
                                    .uprName(region.orgdownNm())
                                    .orgCd(subRegion.orgCd())
                                    .orgName(subRegion.orgdownNm())
                                    .build();

                            regionCodeRepository.save(regionCode);
                        })
        );
    }
}
