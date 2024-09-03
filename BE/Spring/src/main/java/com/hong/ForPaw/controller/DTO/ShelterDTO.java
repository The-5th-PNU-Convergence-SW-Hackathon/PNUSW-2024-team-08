package com.hong.ForPaw.controller.DTO;


import java.util.List;

public record ShelterDTO(ResponseDTO response) {
    public record ResponseDTO(HeaderDTO header, BodyDTO body) { }
    public record HeaderDTO(Long reqNo,
                            String resultCode,
                            String resultMsg,
                            String errorMsg) { }
    public record BodyDTO(ItemsDTO items) { }
    public record ItemsDTO(List<itemDTO> item) { }
    public record itemDTO(String careNm, Long careRegNo) { }
}