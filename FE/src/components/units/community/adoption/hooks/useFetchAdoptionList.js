import { useEffect, useState, useCallback } from "react";
import {
  fetchAdoptionList,
  fetchPopularAdoptionList,
} from "../CommunityAdoption.queries";

export default function useFetchAdoptionList() {
  const [adoptions, setAdoptions] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [sort, setSort] = useState("newest");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadInitialAdoptions = async () => {
        setLoading(true);
        const page = getPageNumber(sort);
        setAdoptions([]);
        for (let i = 0; i <= page; i++) {
          const fetchedAdoptions =
            sort === "newest"
              ? await fetchAdoptionList(i)
              : await fetchPopularAdoptionList(i);
          if (fetchedAdoptions) {
            setAdoptions((prevAdoptions) => [
              ...prevAdoptions,
              ...fetchedAdoptions.posts,
            ]);
            setIsLastPage(fetchedAdoptions.isLastPage);
          }
        }
        setLoading(false);
      };

      loadInitialAdoptions();
    }
  }, [sort]);

  const getPageNumber = (sort) => {
    if (typeof window !== "undefined") {
      const page = parseInt(sessionStorage.getItem(`${sort}AdoptionPage`), 10);
      return isNaN(page) ? 0 : page;
    }
    return 0;
  };

  const setPageNumber = (sort, page) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(`${sort}AdoptionPage`, page.toString());
    }
  };

  const loadAdoptions = async (page, sort) => {
    setLoading(true);
    const fetchedAdoptions =
      sort === "newest"
        ? await fetchAdoptionList(page)
        : await fetchPopularAdoptionList(page);
    if (fetchedAdoptions) {
      setAdoptions((prevAdoptions) => [
        ...prevAdoptions,
        ...fetchedAdoptions.posts,
      ]);
      setIsLastPage(fetchedAdoptions.isLastPage);
      setPageNumber(sort, page);
    }
    setLoading(false);
  };

  const handleLoadAdoptions = useCallback(async () => {
    const page = getPageNumber(sort) + 1;
    await loadAdoptions(page, sort);
  }, [sort]);

  return { adoptions, isLastPage, handleLoadAdoptions, sort, setSort, loading };
}
