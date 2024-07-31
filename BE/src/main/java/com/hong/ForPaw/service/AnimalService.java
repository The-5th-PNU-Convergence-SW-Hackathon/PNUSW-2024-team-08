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
import com.hong.ForPaw.repository.Animal.AnimalRepository;
import com.hong.ForPaw.repository.Animal.FavoriteAnimalRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.Duration;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
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
    private final RedisService redisService;
    private final ApplyRepository applyRepository;
    private final EntityManager entityManager;
    private final ObjectMapper mapper;
    private final WebClient webClient;
    private final RestTemplate restTemplate;

    @Value("${openAPI.service-key2}")
    private String serviceKey;

    @Value("${openAPI.animalURL}")
    private String baseUrl;

    @Value("${animal.names}")
    private String[] animalNames;

    @Transactional
    @Scheduled(cron = "0 0 0,12 * * *") // 매일 자정과 정오에 실행
    public void loadAnimalData() {
        List<Shelter> shelters = shelterRepository.findAllWithRegionCode();

        Flux.fromIterable(shelters)
                .delayElements(Duration.ofMillis(50)) // 각 요청 사이에 0.05초 지연
                .flatMap(shelter -> {
                    Long careRegNo = shelter.getId();
                    URI uri = buildURI(baseUrl, serviceKey, careRegNo);

                    return webClient.get()
                            .uri(uri)
                            .retrieve()
                            .bodyToMono(String.class)
                            .flatMapMany(response -> processAnimalData(response, shelter))
                            .collectList()
                            .doOnNext(animalRepository::saveAll);
                })
                .then()
                .subscribe();
    }

    @Transactional
    public AnimalResponse.FindAnimalListDTO findAnimalList(Integer page, Integer size, String sort, Long userId){
        Pageable pageable =createPageable(page, size, sort);
        Page<Animal> animalPage = animalRepository.findAll(pageable);

        if(animalPage.isEmpty()){
            throw new CustomException(ExceptionCode.ANIMAL_NOT_EXIST);
        }

        // 사용자가 '좋아요' 표시한 Animal의 ID 목록
        List<Long> likedAnimalIds = favoriteAnimalRepository.findLikedAnimalIdsByUserId(userId);

        List<AnimalResponse.AnimalDTO> animalDTOS = animalPage.getContent().stream()
                .map(animal -> {
                    Long inquiryNum = redisService.getDataInLong("inquiryNum", animal.getId().toString());
                    Long likeNum = redisService.getDataInLong("postLikeNum", animal.getId().toString());

                    return new AnimalResponse.AnimalDTO(
                        animal.getId(),
                        animal.getName(),
                        animal.getAge(),
                        animal.getGender(),
                        animal.getSpecialMark(),
                        animal.getRegion(),
                        inquiryNum,
                        likeNum,
                        likedAnimalIds.contains(animal.getId()),
                        animal.getProfileURL());
                })
                .collect(Collectors.toList());

        return new AnimalResponse.FindAnimalListDTO(animalDTOS);
    }

    @Transactional
    public AnimalResponse.FindLikeAnimalListDTO findLikeAnimalList(Integer page, Integer size, Long userId){
        Pageable pageable =createPageable(page, size, "id");
        Page<Animal> animalPage = favoriteAnimalRepository.findAnimalByUserId(userId, pageable);

        if(animalPage.isEmpty()){
            throw new CustomException(ExceptionCode.ANIMAL_NOT_EXIST);
        }

        List<AnimalResponse.AnimalDTO> animalDTOS = animalPage.getContent().stream()
                .map(animal -> {
                    Long inquiryNum = redisService.getDataInLong("inquiryNum", animal.getId().toString());
                    Long likeNum = redisService.getDataInLong("postLikeNum", animal.getId().toString());

                    return new AnimalResponse.AnimalDTO(
                        animal.getId(),
                        animal.getName(),
                        animal.getAge(),
                        animal.getGender(),
                        animal.getSpecialMark(),
                        animal.getRegion(),
                        inquiryNum,
                        likeNum,
                        true,
                        animal.getProfileURL());
                })
                .collect(Collectors.toList());

        return new AnimalResponse.FindLikeAnimalListDTO(animalDTOS);
    }

    @Transactional
    public AnimalResponse.FindAnimalByIdDTO findAnimalById(Long animalId, Long userId){
        Animal animal = animalRepository.findById(animalId).orElseThrow(
                () -> new CustomException(ExceptionCode.ANIMAL_NOT_FOUND)
        );

        boolean isLike = favoriteAnimalRepository.findByUserIdAndAnimalId(userId, animal.getId()).isPresent();

        return new AnimalResponse.FindAnimalByIdDTO(animalId,
                animal.getName(),
                animal.getAge(),
                animal.getGender(),
                animal.getSpecialMark(),
                animal.getRegion(),
                isLike,
                animal.getProfileURL(),
                animal.getHappenPlace(),
                animal.getKind(),
                animal.getColor(),
                animal.getWeight(),
                animal.getNoticeSdt(),
                animal.getNoticeEdt(),
                animal.getProcessState(),
                animal.getNeuter());
    }

    @Transactional
    public void likeAnimal(Long userId, Long animalId){
        // 존재하지 않는 동물이면 에러
        if(!animalRepository.existsById(animalId)){
                throw new CustomException(ExceptionCode.ANIMAL_NOT_FOUND);
            }

        Optional<FavoriteAnimal> favoriteAnimalOP = favoriteAnimalRepository.findByUserIdAndAnimalId(userId, animalId);

        // 좋아요가 이미 있다면 삭제, 없다면 추가
        if (favoriteAnimalOP.isPresent()) {
            favoriteAnimalRepository.delete(favoriteAnimalOP.get());
            redisService.decrementCnt("animalLikeNum", animalId.toString(), 1L);
        }
        else {
            Animal animalRef = entityManager.getReference(Animal.class, animalId);
            User userRef = entityManager.getReference(User.class, userId);

            FavoriteAnimal favoriteAnimal = FavoriteAnimal.builder()
                    .user(userRef)
                    .animal(animalRef)
                    .build();

            favoriteAnimalRepository.save(favoriteAnimal);
            redisService.incrementCnt("animalLikeNum", animalId.toString(), 1L);
        }
    }

    @Transactional
    public AnimalResponse.CreateApplyDTO applyAdoption(AnimalRequest.ApplyAdoptionDTO requestDTO, Long userId, Long animalId){
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

        // 동물의 문의 횟수 증가
        Long inquiryNum = redisService.getDataInLong("inquiryNum", animalId.toString());
        redisService.storeDate("inquiryNum", animalId.toString(), Long.toString(inquiryNum + 1L));

        return new AnimalResponse.CreateApplyDTO(apply.getId());
    }

    @Transactional
    public AnimalResponse.FindApplyListDTO findApplyList(Long userId){
        List<Apply> applies = applyRepository.findAllByUserId(userId);

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
    public void updateApply(AnimalRequest.UpdateApplyDTO requestDTO, Long applyId, Long userId){
        // 지원하지 않았거나, 권한이 없으면 에러
        if(!applyRepository.existsByApplyIdAndUserId(applyId, userId)){
            throw new CustomException(ExceptionCode.APPLY_NOT_FOUND);
        }

        Apply apply = applyRepository.findById(applyId).orElseThrow(
                () -> new CustomException(ExceptionCode.APPLY_NOT_FOUND)
        );

        apply.updateApply(requestDTO.name(), requestDTO.tel(), requestDTO.residence());
    }

    @Transactional
    public void deleteApply(Long applyId, Long userId){
        // 지원하지 않았거나, 권한이 없으면 에러
        if(!applyRepository.existsByApplyIdAndUserId(applyId, userId)){
            throw new CustomException(ExceptionCode.APPLY_NOT_FOUND);
        }

        // 동물의 문의 횟수 감소
        Long animalId = applyRepository.findAnimalIdById(applyId);
        Long inquiryNum = redisService.getDataInLong("inquiryNum", animalId.toString());
        redisService.storeDate("inquiryNum", animalId.toString(), Long.toString(inquiryNum - 1L));

        applyRepository.deleteById(applyId);
    }

    private Flux<Animal> processAnimalData(String response, Shelter shelter) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
        final boolean[] isShelterUpdate = {false};

        try {
            AnimalDTO json = mapper.readValue(response, AnimalDTO.class);
            return Flux.fromIterable(Optional.ofNullable(json.response().body().items())
                            .map(AnimalDTO.ItemsDTO::item)
                            .orElse(Collections.emptyList()))
                    .map(itemDTO -> {
                        if (!isShelterUpdate[0]) {
                            shelterRepository.updateShelterInfo(itemDTO.careTel(), itemDTO.careAddr(), Long.valueOf(json.response().body().totalCount()), shelter.getId());
                            isShelterUpdate[0] = true;
                        }
                        return createAnimal(itemDTO, shelter, formatter);
                    });
        } catch (Exception e) {
            return Flux.empty();
        }
    }

    private Animal createAnimal(AnimalDTO.ItemDTO itemDTO, Shelter shelter, DateTimeFormatter formatter) {
        return Animal.builder()
                .id(Long.valueOf(itemDTO.desertionNo()))
                .name(createAnimalName())
                .shelter(shelter)
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
                .region(shelter.getRegionCode().getUprName() + " " + shelter.getRegionCode().getOrgName())
                .build();
    }

    // 동물 이름 지어주는 메서드
    public String createAnimalName() {
        int index = ThreadLocalRandom.current().nextInt(animalNames.length);
        return animalNames[index];
    }

    private URI buildURI(String baseUrl, String serviceKey, Long careRegNo) {
        String url = baseUrl + "?serviceKey=" + serviceKey + "&care_reg_no=" + careRegNo + "&_type=json" + "&numOfRows=1000";

        try {
            return new URI(url);
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        }
    }

    private Pageable createPageable(int page, int size, String sortProperty) {
        return PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, sortProperty));
    }
}