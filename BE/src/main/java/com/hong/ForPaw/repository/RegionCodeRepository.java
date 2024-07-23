package com.hong.ForPaw.repository;

import com.hong.ForPaw.domain.RegionCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegionCodeRepository extends JpaRepository<RegionCode, Long> {

}
