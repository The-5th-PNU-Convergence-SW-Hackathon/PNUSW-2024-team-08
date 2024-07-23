package com.hong.ForPaw.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hong.ForPaw.controller.DTO.AnimalRequest;
import com.hong.ForPaw.controller.DTO.AnimalResponse;
import com.hong.ForPaw.core.errors.CustomException;
import com.hong.ForPaw.core.errors.ExceptionCode;
import com.hong.ForPaw.domain.Apply.Apply;
import com.hong.ForPaw.domain.Apply.Status;
import com.hong.ForPaw.domain.Animal.FavoriteAnimal;
import com.hong.ForPaw.domain.User.User;
import com.hong.ForPaw.controller.DTO.AnimalDTO;
import com.hong.ForPaw.domain.Animal.Animal;
import com.hong.ForPaw.domain.Shelter;
import com.hong.ForPaw.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import javax.persistence.EntityManager;
import java.net.URI;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AnimalService {

    private final AnimalRepository animalRepository;
    private final ShelterRepository shelterRepository;
    private final FavoriteAnimalRepository favoriteAnimalRepository;
    private final UserRepository userRepository;
    private final ApplyRepository applyRepository;
    private final EntityManager entityManager;

    @Value("${openAPI.service-key2}")
    private String serviceKey;

    @Value("${openAPI.animalURL}")
    private String baseUrl;

    @Value("${animal.names}")
    private String[] animalNames;

    @Transactional
    public void loadAnimalDate() {
        // shelter 돌면서 => animal 정보 쭉 떙겨온다 => shelter를 패치하고 => animal 등록
        ObjectMapper mapper = new ObjectMapper();
        RestTemplate restTemplate = new RestTemplate();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");

        List<Shelter> shelters = shelterRepository.findAll();

        for(Shelter shelter : shelters){
            Long careRegNo = shelter.getId();

            try {
                String url = baseUrl + "?serviceKey=" + serviceKey + "&care_reg_no=" + careRegNo + "&_type=json" + "&numOfRows=1000";

                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.APPLICATION_JSON);
                headers.set("Accept", "*/*;q=0.9"); // HTTP_ERROR 방지
                HttpEntity<?> entity = new HttpEntity<>(null, headers);

                URI uri = new URI(url);

                ResponseEntity<String> responseEntity = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class);
                String response = responseEntity.getBody();
                System.out.println(response);

                AnimalDTO json = mapper.readValue(response, AnimalDTO.class);
                List<AnimalDTO.ItemDTO> itemDTOS = json.response().body().items().item();
                boolean isShelterUpdate = false; // 보호소 업데이트 여부 (동물을 조회할 때 보호소 나머지 정보도 등장함)

                for (AnimalDTO.ItemDTO itemDTO : itemDTOS) {
                    if (!isShelterUpdate) {
                        shelter.updateShelterInfo(itemDTO.careTel(), itemDTO.careAddr(), Long.valueOf(json.response().body().totalCount()));
                        isShelterUpdate = true;
                    }

                    Animal animal = Animal.builder()
                            .id(Long.valueOf(itemDTO.desertionNo()))
                            .name(createAnimalName())
                            .shelter(shelter) // 연관관계 매핑
                            .happenDt(LocalDate.parse(itemDTO.happenDt(), formatter))
                            .happenPlace(itemDTO.happenPlace())
                            .kind(itemDTO.kindCd())
                            .color(itemDTO.colorCd())
                            .age(itemDTO.age())
                            .weight(itemDTO.weight())
                            .noticeSdt(LocalDate.parse(itemDTO.noticeSdt(), formatter))
                            .noticeEdt(LocalDate.parse(itemDTO.noticeEdt(), formatter))
                            .profileURL(itemDTO.popfile())
                            .processState(itemDTO.processState())
                            .gender(itemDTO.sexCd())
                            .neuter(itemDTO.neuterYn())
                            .specialMark(itemDTO.specialMark())
                            .build();

                    animalRepository.save(animal);
                }
            }
            catch (Exception e){
                System.err.println("JSON 파싱 오류가 발생했습니다. 재시도 중...: ");
                System.out.println(e);
            }
        }
    }

    @Transactional
    public AnimalResponse.FindAnimalListDTO findAnimalList(Integer page, Integer size, String sort, Long userId){

        Pageable pageable =createPageable(page, size, sort);
        Page<Animal> animalPage = animalRepository.findAll(pageable);

        // 동물이 데이터베이스상에 없음
        if(animalPage.isEmpty()){
            throw new CustomException(ExceptionCode.ANIMAL_NOT_EXIST);
        }

        List<AnimalResponse.AnimalDTO> animalDTOS = animalPage.getContent().stream()
                .map(animal -> new AnimalResponse.AnimalDTO(animal.getId(), animal.getName(), animal.getAge()
                        , animal.getGender(), animal.getSpecialMark(), animal.getShelter().getRegionCode().getUprName()+" "+animal.getShelter().getRegionCode().getOrgName()
                        , animal.getInquiryNum(), animal.getLikeNum(), favoriteAnimalRepository.findByUserIdAndAnimalId(userId, animal.getId()).isPresent(), animal.getProfileURL() ))
                .collect(Collectors.toList());

        return new AnimalResponse.FindAnimalListDTO(animalDTOS);
    }

    @Transactional
    public AnimalResponse.FindAnimalByIdDTO findAnimalById(Long animalId){

        Animal animal = animalRepository.findById(animalId).orElseThrow(
                () -> new CustomException(ExceptionCode.ANIMAL_NOT_FOUND)
        );

        return new AnimalResponse.FindAnimalByIdDTO(animalId, animal.getHappenPlace(), animal.getKind(), animal.getColor(),
                animal.getWeight(), animal.getNoticeSdt(), animal.getNoticeEdt(), animal.getProcessState(), animal.getNeuter());
    }

    @Transactional
    public void likeAnimal(Long userId, Long animalId){
        // 존재하지 않는 동물이면 에러
        if(!animalRepository.existsById(animalId)){
            throw new CustomException(ExceptionCode.ANIMAL_NOT_FOUND);
        }

        Animal animalRef = entityManager.getReference(Animal.class, animalId);
        User userRef = entityManager.getReference(User.class, userId);

        Optional<FavoriteAnimal> favoriteAnimalOP = favoriteAnimalRepository.findByUserIdAndAnimalId(userId, animalId);

        // 좋아요가 이미 있다면 삭제, 없다면 추가
        if (favoriteAnimalOP.isPresent()) {
            favoriteAnimalRepository.delete(favoriteAnimalOP.get());
        }
        else {
            FavoriteAnimal favoriteAnimal = FavoriteAnimal.builder()
                    .user(userRef)
                    .animal(animalRef)
                    .build();
            favoriteAnimalRepository.save(favoriteAnimal);
        }
    }

    @Transactional
    public void applyAdoption(AnimalRequest.ApplyAdoptionDTO requestDTO, Long userId, Long animalId){
        // 동물이 존재하지 않으면 에러
        if(!animalRepository.existsById(animalId)){
            throw new CustomException(ExceptionCode.ANIMAL_NOT_FOUND);
        }
        // 이미 지원하였으면 에러
        if(applyRepository.existsByUserIdAndAnimalId(userId, animalId)){
            throw new CustomException(ExceptionCode.ANIMAL_ALREADY_APPLY);
        }

        Animal animalRef = entityManager.getReference(Animal.class, animalId);
        User userRef = entityManager.getReference(User.class, userId);

        Apply apply = Apply.builder()
                .user(userRef)
                .animal(animalRef)
                .status(Status.PROCESSING)
                .name(requestDTO.name())
                .tel(requestDTO.tel())
                .residence(requestDTO.residence())
                .build();

        applyRepository.save(apply);
    }

    @Transactional
    public AnimalResponse.FindApplyListDTO findApplyList(Long userId){

        List<Apply> applies = applyRepository.findByUserId(userId);

        // 지원서가 존재하지 않음
        if(applies.isEmpty()){
            throw new CustomException(ExceptionCode.APPLY_NOT_FOUND);
        }

        List<AnimalResponse.ApplyDTO> applyDTOS = applies.stream()
                .map(apply -> new AnimalResponse.ApplyDTO(
                        apply.getId(),
                        apply.getAnimal().getName(),
                        apply.getAnimal().getKind(),
                        apply.getAnimal().getGender(),
                        apply.getAnimal().getAge(),
                        apply.getName(),
                        apply.getTel(),
                        apply.getResidence(),
                        apply.getStatus()))
                .collect(Collectors.toList());

        return new AnimalResponse.FindApplyListDTO(applyDTOS);
    }

    @Transactional
    public void deleteApplyById(Long applyId, Long userId){
        // 지원하지 않았거나, 권한이 없으면 에러
        if(!applyRepository.existsByApplyIdAndAnimalId(applyId, userId)){
            throw new CustomException(ExceptionCode.APPLY_NOT_FOUND);
        }

        applyRepository.deleteById(applyId);
    }

    private Pageable createPageable(int page, int size, String sortProperty) {
        return PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, sortProperty));
    }

    // 동물 이름 지어주는 메서드
    public String createAnimalName() {
        int index = ThreadLocalRandom.current().nextInt(animalNames.length);
        return animalNames[index];
    }
}