package com.hong.ForPaw.service;

import com.hong.ForPaw.controller.DTO.SearchResponse;
import com.hong.ForPaw.domain.Group.Group;
import com.hong.ForPaw.domain.Post.Post;
import com.hong.ForPaw.domain.Shelter;
import com.hong.ForPaw.repository.GroupRepository;
import com.hong.ForPaw.repository.PostImageRepository;
import com.hong.ForPaw.repository.PostRepository;
import com.hong.ForPaw.repository.ShelterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SearchService {

    private final ShelterRepository shelterRepository;
    private final PostRepository postRepository;
    private final PostImageRepository postImageRepository;
    private final GroupRepository groupRepository;

    @Transactional
    public SearchResponse.SearchAllDTO searchAll(String keyword){

        Pageable pageable = createPageable(0, 5, "id");

        // 보호소
        Page<Shelter> shelterPage = shelterRepository.findByNameContaining(keyword, pageable);

        List<SearchResponse.ShelterDTO> shelterDTOS = shelterPage.getContent().stream()
                .map(shelter -> new SearchResponse.ShelterDTO(shelter.getId(), shelter.getName()))
                .collect(Collectors.toList());

        // 게시글
        Page<Post> postPage = postRepository.findByTitleContainingOrContentContaining(keyword, keyword, pageable);

        List<SearchResponse.PostDTO> postDTOS = postPage.getContent().stream()
                .map(post -> {
                    List<SearchResponse.PostImageDTO> postImageDTOS = postImageRepository.findByPost(post).stream()
                            .map(postImage -> new SearchResponse.PostImageDTO(postImage.getId(), postImage.getImageURL()))
                            .collect(Collectors.toList());

                        return new SearchResponse.PostDTO(post.getId(), post.getTitle(), post.getContent(), post.getCreatedDate(),
                                post.getCommentNum(), post.getLikeNum(), postImageDTOS);
                })
                .collect(Collectors.toList());


        // 그룹
        Page<Group> groupPage = groupRepository.findByNameContaining(keyword, pageable);

        List<SearchResponse.GroupDTO> groupDTOS = groupPage.getContent().stream()
                .map(group -> new SearchResponse.GroupDTO(group.getId(), group.getName(), group.getDescription(), group.getParticipationNum(),
                        group.getCategory(), group.getRegion(), group.getSubRegion(), group.getProfileURL(), group.getLikeNum()))
                .collect(Collectors.toList());

        return new SearchResponse.SearchAllDTO(shelterDTOS, postDTOS, groupDTOS);
    }

    private Pageable createPageable(int page, int size, String sortProperty) {
        return PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, sortProperty));
    }
}
