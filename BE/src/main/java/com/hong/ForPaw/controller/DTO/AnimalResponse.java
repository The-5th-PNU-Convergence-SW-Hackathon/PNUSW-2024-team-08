package com.hong.ForPaw.controller.DTO;

import com.hong.ForPaw.domain.Apply.Status;

import java.time.LocalDate;
import java.util.List;

public class AnimalResponse {

    public record FindAnimalListDTO(List<AnimalDTO> animalDTOS){ }

    public record AnimalDTO(Long id, String name, String age,
                            String gender, String specialMark, String region,
                            Integer inquiryNum, Integer likeNum, Boolean isLike,
                            String profileURL
    ){};

    public record FindAnimalByIdDTO(Long id, String happenPlace, String kind, String color,
                                    String weight, LocalDate noticeSdt, LocalDate noticeEdt,
                                    String processState, String neuter){}

    public record FindApplyListDTO(List<ApplyDTO> adoptionApplyDTOS) { }

    public record ApplyDTO(Long id, String animalName, String kind, String gender, String age, String userName,
                           String tel, String residence, Status status){ }
}
