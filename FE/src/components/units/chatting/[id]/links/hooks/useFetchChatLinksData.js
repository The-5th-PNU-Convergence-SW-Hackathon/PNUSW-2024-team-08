import { useEffect, useState, useCallback } from "react";
import { fetchChatLinksMore } from "../Links.queries";
import useItemGrouping from "../../../../../../../src/components/commons/hooks/useItemGrouping";

export default function useFetchChatLinksData(
  chatRoomId,
  initialChatLinksData
) {
  const { groupItemsByDate, mergeItems } = useItemGrouping();
  // 그룹화된 initialChatImagesData 사용
  const [chatLinks, setChatLinks] = useState(
    initialChatLinksData ? groupItemsByDate(initialChatLinksData.links) : {}
  );
  const [currentPage, setCurrentPage] = useState(
    initialChatLinksData?.length > 0 ? 1 : 0
  );
  const [loadedImages, setLoadedImages] = useState([]); // 이미지 로딩 상태 배열
  const [isLastPage, setIsLastPage] = useState(
    initialChatLinksData ? initialChatLinksData.isLastPage : false
  );
  const [loading, setLoading] = useState(false); // 전체 로딩 상태

  useEffect(() => {
    // 초기 이미지 로딩 상태 배열 설정
    const totalImages = Object.values(chatLinks).flat().length;
    setLoadedImages(Array(totalImages).fill(false));
  }, [chatLinks]);

  useEffect(() => console.log("chatLinks: ", chatLinks), [chatLinks]);

  useEffect(() => console.log("currentPage: ", currentPage), [currentPage]);

  const loadChatLinksData = async (page) => {
    setLoading(true); // 로딩 시작
    const fetchedChatLinksData = await fetchChatLinksMore(chatRoomId, page);
    if (fetchedChatLinksData) {
      setChatLinks((prevChatLinks) => {
        // 이전 이미지를 펼쳐서 배열로 만든 뒤 병합
        const mergedImages = mergeItems(
          Object.values(prevChatLinks).flat(),
          fetchedChatLinksData.links
        );
        return mergedImages;
      });

      // 새로운 이미지 로딩 상태 추가
      const newLinksCount = fetchedChatLinksData.links.length;
      setLoadedImages((prev) => [...prev, ...Array(newLinksCount).fill(false)]);

      setIsLastPage(fetchedChatLinksData.isLastPage);
    }
    setLoading(false); // 로딩 종료
  };

  const handleLoadLinksData = async () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    await loadChatLinksData(nextPage);
  };

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const updatedLoadedImages = [...prev];
      updatedLoadedImages[index] = true;
      return updatedLoadedImages;
    });
  };

  const getMainDomain = (url) => {
    const urlObj = new URL(url);
    return urlObj.origin;
  };

  return {
    chatLinks,
    loadedImages,
    setLoadedImages,
    handleImageLoad,
    loadChatLinksData,
    handleLoadLinksData,
    isLastPage,
    loading,
    getMainDomain,
  };
}
