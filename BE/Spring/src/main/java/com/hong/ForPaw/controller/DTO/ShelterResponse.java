package com.hong.ForPaw.controller.DTO;

import java.util.List;

public class ShelterResponse {

    public record FindShelterListDTO(List<ShelterDTO> shelterDTOS){}

    public record FindShelterByIdDTO(String careAddr,
                                     String careTel,
                                     List<AnimalDTO> animals) {}

    public record AnimalDTO(Long id,
                            String name,
                            String age,
                            String gender,
                            String specialMark,
                            String region,
                            Long inquiryNum,
                            Long likeNum,
                            Boolean isLike,
                            String profileURL
    ){};

    public record ShelterDTO(Long id, String name) {}
}
