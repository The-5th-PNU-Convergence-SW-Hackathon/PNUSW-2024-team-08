package com.hong.ForPaw.controller;

import com.hong.ForPaw.controller.DTO.AnimalRequest;
import com.hong.ForPaw.controller.DTO.AnimalResponse;
import com.hong.ForPaw.core.security.CustomUserDetails;
import com.hong.ForPaw.core.utils.ApiUtils;
import com.hong.ForPaw.service.AnimalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api")
public class AnimalController {

    private final AnimalService animalService;

    @GetMapping("/animals/import")
    public ResponseEntity<?> loadAnimals() {
        animalService.loadAnimalData();
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @GetMapping("/animals")
    public ResponseEntity<?> findAnimalList(@RequestParam("page") Integer page, @RequestParam("size") Integer size, @RequestParam("sort") String sort, @AuthenticationPrincipal CustomUserDetails userDetails){
        AnimalResponse.FindAnimalListDTO responseDTO = animalService.findAnimalList(page, size, sort, userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @GetMapping("/animals/like")
    public ResponseEntity<?> findLikeAnimalList(@RequestParam("page") Integer page, @RequestParam("size") Integer size, @AuthenticationPrincipal CustomUserDetails userDetails){
        AnimalResponse.FindLikeAnimalListDTO responseDTO = animalService.findLikeAnimalList(page, size, userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @GetMapping("/animals/{animalId}")
    public ResponseEntity<?> findAnimalById(@PathVariable Long animalId, @AuthenticationPrincipal CustomUserDetails userDetails){
        AnimalResponse.FindAnimalByIdDTO responseDTO = animalService.findAnimalById(animalId, userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @PostMapping("/animals/{animalId}/like")
    public ResponseEntity<?> likeAnimal(@PathVariable Long animalId, @AuthenticationPrincipal CustomUserDetails userDetails){
        animalService.likeAnimal(userDetails.getUser().getId(), animalId);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @PostMapping("/animals/{animalId}/apply")
    public ResponseEntity<?> applyAdoption(@RequestBody AnimalRequest.ApplyAdoptionDTO requestDTO, Errors errors, @PathVariable Long animalId, @AuthenticationPrincipal CustomUserDetails userDetails){
        AnimalResponse.CreateApplyDTO responseDTO = animalService.applyAdoption(requestDTO, userDetails.getUser().getId(), animalId);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, requestDTO));
    }

    @GetMapping("/applies")
    public ResponseEntity<?> findApplyList(@AuthenticationPrincipal CustomUserDetails userDetails){
        AnimalResponse.FindApplyListDTO responseDTO = animalService.findApplyList(userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @PatchMapping("/applies/{applyId}")
    public ResponseEntity<?> updateApply(@RequestBody AnimalRequest.UpdateApplyDTO requestDTO, Errors errors, @PathVariable Long applyId, @AuthenticationPrincipal CustomUserDetails userDetails){
        animalService.updateApply(requestDTO, applyId, userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    // 권한 처리가 필요함
    @DeleteMapping ("/applies/{applyId}")
    public ResponseEntity<?> deleteApply(@PathVariable Long applyId, @AuthenticationPrincipal CustomUserDetails userDetails){
        animalService.deleteApply(applyId, userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }
}