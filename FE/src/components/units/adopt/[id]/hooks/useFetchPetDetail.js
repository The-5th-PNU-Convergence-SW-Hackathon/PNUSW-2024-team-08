import { useEffect, useState } from "react";
import {
  fetchPetDetailWithAuth,
  fetchPetDetailWithoutAuth,
} from "../AdoptPetDetail.queries";
import { useToggleLike } from "../../../../../../src/components/commons/hooks/useToggleLike";
import useAuthStore from "../../../../../../src/store/useAuthStore";

export default function useFetchPetDetail(id) {
  const [petDetail, setPetDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);
  const { toggle } = useToggleLike();
  const { accessToken } = useAuthStore((state) => ({
    accessToken: state.accessToken,
  }));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      const loggedIn = sessionStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
      setAuthChecked(true);
      console.log("Auth status checked:", loggedIn);
    };
    checkAuthStatus();
  }, []);

  useEffect(() => {
    if (!authChecked) return;

    console.log("useEffect called");
    console.log("isLoggedIn:", isLoggedIn);
    console.log("accessToken:", accessToken);

    if (id) {
      async function loadPetDetail(petId) {
        try {
          setLoading(true);
          const startTime = Date.now();
          const fetchedPetDetailData =
            isLoggedIn && accessToken
              ? await fetchPetDetailWithAuth(petId)
              : await fetchPetDetailWithoutAuth(petId);
          const endTime = Date.now();
          const elapsedTime = endTime - startTime;
          const minLoadingTime = 500; // 최소 로딩 시간 설정 (500ms)

          console.log("Fetched Pet Detail Data:", fetchedPetDetailData);

          if (fetchedPetDetailData) {
            setPetDetail(fetchedPetDetailData);
          }

          if (elapsedTime < minLoadingTime) {
            setTimeout(() => {
              setLoading(false);
              setShowOverlay(false);
            }, minLoadingTime - elapsedTime);
          } else {
            setLoading(false);
            setShowOverlay(false);
          }
        } catch (error) {
          console.error("Error loading pet detail:", error);
          setLoading(false);
          setShowOverlay(false);
        }
      }

      loadPetDetail(id);
    }
  }, [id, isLoggedIn, accessToken, authChecked]);

  // '좋아요' 토글을 처리하는 함수
  const handleToggleLike = async () => {
    const isSuccess = await toggle(petDetail.id);
    if (isSuccess) {
      // 토글이 성공하면 'isLike' 상태를 반전
      setPetDetail((currentDetail) => ({
        ...currentDetail,
        isLike: !currentDetail.isLike,
      }));
    }
  };

  return { petDetail, handleToggleLike, loading, showOverlay };
}
