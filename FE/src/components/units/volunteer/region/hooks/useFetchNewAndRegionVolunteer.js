import { useState, useEffect, useCallback } from 'react';
import { requseVolunteerWithAuth, requseVolunteerWithoutAuth, fetchVolunteerRegion } from "../VolunteerRegion.quries";
import { volunteerLike } from '../../Volunteer.quries';
import { findProvinceEn, findDistrictEn } from "../../../../../../src/components/commons/district/districtName";

export const useFetchVolunteer = (selectedRegion, isSSRLoggedIn, openModal) => {
  const [volunteerInfos, setVolunteerInfos] = useState({
    volunteerNewGroupInfos: null,
    volunteerRegionInfos: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [uidistrict, setUiDistrict] = useState('');

  const fetchVolunteerData = useCallback(async (province, district) => {
    if (isSSRLoggedIn) {
      if (province !== "시/도 선택" && district !== "구/군/시") {
        setIsLoading(true);
        setError(null);
        try {
          const data = await requseVolunteerWithAuth(findProvinceEn(province), findDistrictEn(district));
          console.log("지역 검색으로 나온 지역 봉사: ", data);
          setVolunteerInfos({
            volunteerNewGroupInfos: data.newGroups,
            volunteerRegionInfos: data.localGroups,
          });
          setHasMore(true);
          setUiDistrict(district);
        } catch (error) {
          console.error("Failed to fetch volunteer data:", error);
          setError("모임을 불러오지 못했습니다");
        } finally {
          setIsLoading(false);
        }
      }
    }
    else {
      if (province !== "시/도 선택" && district !== "구/군/시") {
        setIsLoading(true);
        setError(null);
        try {
          const data = await requseVolunteerWithoutAuth(findProvinceEn(province), findDistrictEn(district));
          console.log("지역 검색으로 나온 지역 봉사: ", data);
          setVolunteerInfos({
            volunteerNewGroupInfos: data.newGroups,
            volunteerRegionInfos: data.localGroups,
          });
          setHasMore(true);
          setUiDistrict(district);
        } catch (error) {
          console.error("Failed to fetch volunteer data:", error);
          setError("모임을 불러오지 못했습니다");
        }
      }
    }
  }, []);

  useEffect(() => {
    if (error) {
      setShowModal(true);
      setModalMessage(error);
      setTimeout(() => setShowModal(false), 1400);
    }
  }, [error]);

  const loadUpdatedVolunteerRegionData = useCallback(async () => {
    console.log(selectedRegion.province, selectedRegion.district)
    try {
      setIsLoading(true);
      const nextPage = page + 1;
      const data = await fetchVolunteerRegion(
        findProvinceEn(selectedRegion.province),
        findDistrictEn(selectedRegion.district),
        nextPage
      );

      if (data.length > 0) {
        setVolunteerInfos(prevState => ({
          ...prevState,
          volunteerRegionInfos: [...prevState.volunteerRegionInfos, ...data]
        }));
        setPage(nextPage);
      } else {
        setHasMore(false);
        setShowModal(true);
        setTimeout(() => setShowModal(false), 1400);
        setModalMessage("모든 모임을 표시했습니다.");
      }
    } catch (error) {
      console.error("Failed to load more volunteer data:", error);
      setError("추가 데이터를 불러오는데 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  }, [page, selectedRegion.province, selectedRegion.district]);


  const handleToggleLike = useCallback(async (volunteerId) => {
    if (!isSSRLoggedIn) {
      openModal();
    } else {
      try {
        setIsLoading(true);
        const response = await volunteerLike(volunteerId);
        if (response.success) {
          setVolunteerInfos(prevState => ({
            ...prevState,
            volunteerRegionInfos: prevState.volunteerRegionInfos.map(info =>
              info.id === volunteerId
                ? {
                  ...info,
                  isLike: !info.isLike,
                  likeNum: info.isLike ? info.likeNum - 1 : info.likeNum + 1
                }
                : info
            )
          }));
        } else {
          throw new Error("Failed to toggle like");
        }
      } catch (error) {
        console.error("Failed to toggle like:", error);
        setError("좋아요 처리에 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    }
  }, [isSSRLoggedIn, openModal]);

  return {
    uidistrict,
    volunteerInfos,
    isLoading,
    error,
    showModal,
    setShowModal,
    modalMessage,
    setModalMessage,
    hasMore,
    fetchVolunteerData,
    handleToggleLike,
    loadUpdatedVolunteerRegionData,
  };
};