import { useState, useEffect } from "react";
import { fetchUserInfo } from "../Create_Volunteer.queries"

export const useFetchUserInfo = () => {
  const userInfo = {
    nickName: "기존 닉네임",
    province: "시/도 선택",
    district: "구/군/시",
    subdistrict: "동/읍/면",
  };

  // useEffect(() => {
  //   const loadUserInfo = async () => {
  //     const data = await fetchUserInfo();
  //     setUserInfo({
  //       nickName: data.nickName,
  //       province: data.province,
  //       district: data.district,
  //       subdistrict: data.subdistrict,
  //     });
  //   };

  //   // loadUserInfo();
  // }, []);

  return { userInfo };
};