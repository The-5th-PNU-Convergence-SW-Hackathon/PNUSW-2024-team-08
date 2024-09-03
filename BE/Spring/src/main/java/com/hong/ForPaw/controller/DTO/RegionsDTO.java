package com.hong.ForPaw.controller.DTO;

import java.util.List;

public record RegionsDTO(List<RegionDTO> regions) {

    public record RegionDTO(Integer orgCd, String orgdownNm, List<SubRegionDTO> subRegions) { }

    public record SubRegionDTO(Integer uprCd, Integer orgCd, String orgdownNm) { }
}
