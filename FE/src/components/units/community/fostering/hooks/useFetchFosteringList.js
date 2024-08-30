import { useEffect, useState, useCallback } from "react";
import {
  fetchFosteringList,
  fetchPopularFosteringList,
} from "../CommunityFostering.queries";

export default function useFetchFosteringList() {
  const [fosterings, setFosterings] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [sort, setSort] = useState("newest");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadInitialFosterings = async () => {
        setLoading(true);
        const page = getPageNumber(sort);
        setFosterings([]);
        for (let i = 0; i <= page; i++) {
          const fetchedFosterings =
            sort === "newest"
              ? await fetchFosteringList(i)
              : await fetchPopularFosteringList(i);
          if (fetchedFosterings) {
            setFosterings((prevFosterings) => [
              ...prevFosterings,
              ...fetchedFosterings.posts,
            ]);
            setIsLastPage(fetchedFosterings.isLastPage);
          }
        }
        setLoading(false);
      };

      loadInitialFosterings();
    }
  }, [sort]);

  const getPageNumber = (sort) => {
    if (typeof window !== "undefined") {
      const page = parseInt(sessionStorage.getItem(`${sort}FosteringPage`), 10);
      return isNaN(page) ? 0 : page;
    }
    return 0;
  };

  const setPageNumber = (sort, page) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(`${sort}FosteringPage`, page.toString());
    }
  };

  const loadFosterings = async (page, sort) => {
    setLoading(true);
    const fetchedFosterings =
      sort === "newest"
        ? await fetchFosteringList(page)
        : await fetchPopularFosteringList(page);
    if (fetchedFosterings) {
      setFosterings((prevFosterings) => [
        ...prevFosterings,
        ...fetchedFosterings.posts,
      ]);
      setIsLastPage(fetchedFosterings.isLastPage);
      setPageNumber(sort, page);
    }
    setLoading(false);
  };

  const handleLoadFosterings = useCallback(async () => {
    const page = getPageNumber(sort) + 1;
    await loadFosterings(page, sort);
  }, [sort]);

  return {
    fosterings,
    isLastPage,
    handleLoadFosterings,
    sort,
    setSort,
    loading,
  };
}
