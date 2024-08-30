import { useCallback } from "react";

export const useSortSelection = (sort, setSort, loading, loadingMore) => {
  const isDisabled = loading;

  const handleDateClick = useCallback(() => {
    if (!isDisabled && sort !== "date") {
      setSort("date");
    }
  }, [sort, setSort, isDisabled]);

  const handleDogClick = useCallback(() => {
    if (!isDisabled && sort !== "dog") {
      setSort("dog");
    }
  }, [sort, setSort, isDisabled]);

  const handleCatClick = useCallback(() => {
    if (!isDisabled && sort !== "cat") {
      setSort("cat");
    }
  }, [sort, setSort, isDisabled]);

  const handleOtherClick = useCallback(() => {
    if (!isDisabled && sort !== "other") {
      setSort("other");
    }
  }, [sort, setSort, isDisabled]);

  const handleNewestClick = useCallback(() => {
    if (!isDisabled && sort !== "newest") {
      setSort("newest");
    }
  }, [sort, setSort, isDisabled]);

  const handlePopularityClick = useCallback(() => {
    if (!isDisabled && sort !== "popularity") {
      setSort("popularity");
    }
  }, [sort, setSort, isDisabled]);

  return {
    handleDateClick,
    handleDogClick,
    handleCatClick,
    handleOtherClick,
    handleNewestClick,
    handlePopularityClick,
  };
};
