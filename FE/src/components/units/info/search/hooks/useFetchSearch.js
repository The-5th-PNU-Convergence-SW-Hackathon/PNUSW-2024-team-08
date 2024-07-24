import { fetchSearchAll, fetchSearchShelters, fetchSearchPosts, fetchSearchGroups } from "../Search.quries";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function useFetchSearch() {
  const [searchInfos, setSearchInfos] = useState();
  const [isActive, setIsActive] = useState(false);
  const [search, setSearch] = useState(``);
  const router = useRouter();

  const name = router.query.name;

  const handleSearchChange = (e) => {
    const inputSearch = e.target.value;
    setSearch(inputSearch);
  }

  const loadSearch = async (e) => {
    if (e.key === 'Enter' && search.trim()) {
      setIsActive(true);
      let searchInfosData = null;

      try {
        switch (name) {
          case 'searchAdopt':
            console.log(name);
            searchInfosData = await fetchSearchShelters(search);
            break;
          case 'searchPosts':
            console.log(name);
            searchInfosData = await fetchSearchPosts(search);
            break;
          case 'searchGroups':
            console.log(name);
            searchInfosData = await fetchSearchGroups(search);
            break;
          case 'searchAll':
            console.log(name);
            searchInfosData = await fetchSearchAll(search);
            break;
          default:
            throw new Error(`Unknown search name: ${name}`);
        }

        setSearchInfos(searchInfosData);
      } catch (error) {
        console.error('Error fetching search data:', error);
        // 여기서 오류 처리 로직 추가
        setSearchInfos(null); // 예를 들어, 오류 발생 시 상태 초기화
      }
    }

    return searchInfos;
  };

  useEffect(() => {
    console.log("data", searchInfos); // 상태 업데이트 후 콘솔 로그
  }, [searchInfos]); // searchInfos가 업데이트될 때만 실행

  return {
    name,
    isActive,
    searchInfos,
    search,
    handleSearchChange,
    loadSearch
  };
}
