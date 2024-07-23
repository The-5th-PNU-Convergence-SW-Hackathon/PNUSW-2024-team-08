package com.hong.ForPaw.controller.DTO;


import java.util.List;

public record AnimalDTO(ResponseDTO response) {
    public record ResponseDTO(HeaderDTO header, BodyDTO body) { }
    public record HeaderDTO(Long reqNo, String resultCode, String resultMsg) { }
    public record BodyDTO(ItemsDTO items, Integer numOfRows, Integer pageNo, Integer totalCount) { }
    public record ItemsDTO(List<ItemDTO> item) { }
    public record ItemDTO(String desertionNo, String filename, String happenDt, String happenPlace,
                          String kindCd, String colorCd, String age, String weight, String noticeNo,
                          String noticeSdt, String noticeEdt, String popfile, String processState,
                          String sexCd, String neuterYn, String specialMark, String careNm, String careTel,
                          String careAddr, String orgNm, String chargeNm, String officetel) { }
}