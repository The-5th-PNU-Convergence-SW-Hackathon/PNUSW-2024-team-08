import { useEffect, useState, useCallback } from "react";
import { fetchChatImagesMore } from "../Albums.queries";
import useItemGrouping from "../../../../../../../src/components/commons/hooks/useItemGrouping";

export default function useFetchChatImagesData(
  chatRoomId,
  initialChatImagesData
) {
  const { groupItemsByDate, mergeItems } = useItemGrouping();
  // 그룹화된 initialChatImagesData 사용
  const [chatImages, setChatImages] = useState(
    initialChatImagesData ? groupItemsByDate(initialChatImagesData.images) : {}
  );
  const [currentPage, setCurrentPage] = useState(
    initialChatImagesData?.length > 0 ? 1 : 0
  );
  const [loadedImages, setLoadedImages] = useState([]); // 이미지 로딩 상태 배열
  const [isLastPage, setIsLastPage] = useState(
    initialChatImagesData ? initialChatImagesData.isLastPage : false
  );
  const [loading, setLoading] = useState(false); // 전체 로딩 상태

  useEffect(() => {
    // 초기 이미지 로딩 상태 배열 설정
    const totalImages = Object.values(chatImages).flat().length;
    setLoadedImages(Array(totalImages).fill(false));
  }, [chatImages]);

  useEffect(() => console.log("chatImages: ", chatImages), [chatImages]);

  useEffect(() => console.log("currentPage: ", currentPage), [currentPage]);

  const loadChatImagesData = async (page) => {
    setLoading(true); // 로딩 시작
    const fetchedChatImagesData = await fetchChatImagesMore(chatRoomId, page);
    if (fetchedChatImagesData) {
      setChatImages((prevChatImages) => {
        // 이전 이미지를 펼쳐서 배열로 만든 뒤 병합
        const mergedImages = mergeItems(
          Object.values(prevChatImages).flat(),
          fetchedChatImagesData.images
        );
        return mergedImages;
      });

      // 새로운 이미지 로딩 상태 추가
      const newImagesCount = fetchedChatImagesData.images.length;
      setLoadedImages((prev) => [
        ...prev,
        ...Array(newImagesCount).fill(false),
      ]);

      setIsLastPage(fetchedChatImagesData.isLastPage);
    }
    setLoading(false); // 로딩 종료
  };

  const handleLoadImagesData = async () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    await loadChatImagesData(nextPage);
  };

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const updatedLoadedImages = [...prev];
      updatedLoadedImages[index] = true;
      return updatedLoadedImages;
    });
  };

  return {
    chatImages,
    loadedImages,
    setLoadedImages,
    handleImageLoad,
    loadChatImagesData,
    handleLoadImagesData,
    isLastPage,
    loading,
  };
}
