package com.hong.ForPaw.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hong.ForPaw.controller.DTO.ShelterResponse;
import com.hong.ForPaw.core.errors.CustomException;
import com.hong.ForPaw.core.errors.ExceptionCode;
import com.hong.ForPaw.domain.Animal.Animal;
import com.hong.ForPaw.domain.RegionCode;
import com.hong.ForPaw.controller.DTO.ShelterDTO;
import com.hong.ForPaw.domain.Shelter;
import com.hong.ForPaw.domain.User.Role;
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

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ShelterService {

    private final ShelterRepository shelterRepository;
    private final RegionCodeRepository regionCodeRepository;
    private final AnimalRepository animalRepository;
    private final FavoriteAnimalRepository favoriteAnimalRepository;
    private final UserRepository userRepository;

    @Value("${openAPI.service-key2}")
    private String serviceKey;

    @Value("${openAPI.careURL}")
    private String baseUrl;

    @Transactional
    public void loadShelterData(Role role) {

        // 관리자만 사용 가능 (테스트 상황에선 주석 처리)
        //if(role.equals(Role.ADMIN)){
        //    throw new CustomException(ExceptionCode.USER_FORBIDDEN);
        //}

        ObjectMapper mapper = new ObjectMapper();
        RestTemplate restTemplate = new RestTemplate();

        List<RegionCode> regionCodeList = regionCodeRepository.findAll();

        for (RegionCode regionCode : regionCodeList) {
            Integer uprCd = regionCode.getUprCd();
            Integer orgCd = regionCode.getOrgCd();

            try {
                String url = baseUrl + "?serviceKey=" + serviceKey + "&upr_cd=" + uprCd + "&org_cd=" + orgCd + "&_type=json";

                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.APPLICATION_JSON);
                headers.set("Accept", "*/*;q=0.9"); // HTTP_ERROR 방지
                HttpEntity<?> entity = new HttpEntity<>(null, headers);

                URI uri = new URI(url);

                ResponseEntity<String> responseEntity = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class);
                String response = responseEntity.getBody();

                ShelterDTO json = mapper.readValue(response, ShelterDTO.class);
                List<ShelterDTO.itemDTO> itemDTOS = json.response().body().items().item();

                for (ShelterDTO.itemDTO itemDTO : itemDTOS) {
                    com.hong.ForPaw.domain.Shelter shelter = com.hong.ForPaw.domain.Shelter.builder()
                            .regionCode(regionCode)
                            .id(itemDTO.careRegNo())
                            .name(itemDTO.careNm()).build();

                    shelterRepository.save(shelter);
                }

            } catch (Exception e) {
                System.err.println("JSON 파싱 오류가 발생했습니다. 재시도 중...: ");
                System.out.println(e);
            }
        }
    }

    @Transactional
    public ShelterResponse.FindShelterListDTO findShelterList(Pageable pageable){

        Page<Shelter> shelterPage = shelterRepository.findWithAnimalCntMoreThanOne(0L, pageable);

        List<ShelterResponse.ShelterDTO> shelterDTOS = shelterPage.getContent().stream()
                .map(shelter -> new ShelterResponse.ShelterDTO(shelter.getId(), shelter.getName()))
                .collect(Collectors.toList());

        return new ShelterResponse.FindShelterListDTO(shelterDTOS);
    }

    @Transactional
    public ShelterResponse.FindShelterByIdDTO findShelterById(Long shelterId, Long userId, Integer page, Integer size, String sort){
        // 보호소가 존재하지 않으면 에러
        Shelter shelter = shelterRepository.findById(shelterId).orElseThrow(
                () -> new CustomException(ExceptionCode.SHELTER_NOT_FOUND)
        );

        Pageable pageable = createPageable(page, size, sort);
        Page<Animal> animalPage = animalRepository.findByShelterCareRegNo(shelterId, pageable);

        List<ShelterResponse.AnimalDTO> animalDTOS = animalPage.getContent().stream()
                .map(animal -> new ShelterResponse.AnimalDTO(animal.getId(), animal.getName(), animal.getAge()
                        , animal.getGender(), animal.getSpecialMark(), animal.getShelter().getRegionCode().getUprName()+" "+animal.getShelter().getRegionCode().getOrgName()
                        , animal.getInquiryNum(), animal.getLikeNum(), favoriteAnimalRepository.findByUserIdAndAnimalId(userId, animal.getId()).isPresent(), animal.getProfileURL() ))
                .collect(Collectors.toList());

        return new ShelterResponse.FindShelterByIdDTO(shelter.getCareAddr(), shelter.getCareTel(), animalDTOS);
    }

    // 데이터 정합성 문제로 인해 사용 '보류' => 조회 단계에서 animalCnt가 1이상인 것만 조회하도록 수정
    @Transactional
    public void deleteZeroShelter(Role role){

        // 관리자만 사용 가능 (테스트 상황에선 주석 처리)
        if(role.equals(Role.ADMIN)){
            throw new CustomException(ExceptionCode.USER_FORBIDDEN);
        }

        shelterRepository.deleteZeroShelter();
    }

    private Pageable createPageable(int page, int size, String sortProperty) {
        return PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, sortProperty));
    }
}
