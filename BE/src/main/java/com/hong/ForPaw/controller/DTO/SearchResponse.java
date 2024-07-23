package com.hong.ForPaw.controller.DTO;

import java.time.LocalDateTime;
import java.util.List;

public class SearchResponse {

    public record SearchAllDTO(List<ShelterDTO> shelters, List<PostDTO> posts, List<GroupDTO> groups) {}

    public record ShelterDTO(Long id, String name) {}

    public record PostDTO(Long id, String title, String content, LocalDateTime date, Integer commentNum, Integer likeNum, List<PostImageDTO> images){}

    public record PostImageDTO(Long id, String imageURL) {}

    public record GroupDTO(Long id, String name, String description, Integer participationNum, String category,
                                    String region, String subRegion, String profileURL, Integer likeNum) {}

}
