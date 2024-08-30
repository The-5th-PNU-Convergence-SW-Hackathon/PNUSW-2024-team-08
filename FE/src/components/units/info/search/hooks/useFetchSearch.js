import { fetchSearchAll, fetchSearchShelters, fetchSearchPosts, fetchSearchGroups } from "../Search.quries";
import { useState } from "react";
import { useRouter } from "next/router";

export default function useFetchSearch() {
  const [searchInfos, setSearchInfos] = useState({ shelters: [], posts: [], groups: [] });
  const [isActive, setIsActive] = useState(false);
  const [search, setSearch] = useState(``);
  const [page, setPage] = useState(0);
  const [hasMoreShelters, setHasMoreShelters] = useState(true);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const [hasMoreGroups, setHasMoreGroups] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [initialSheltersCount, setInitialSheltersCount] = useState(0);
  const [initialPostsCount, setInitialPostsCount] = useState(0);
  const [initialGroupsCount, setInitialGroupsCount] = useState(0);
  const router = useRouter();

  console.log(searchInfos);

  const name = router.query.name;

  const handleLoadMore = async (type) => {
    const newPage = page + 1;
    setPage(newPage);

    let moreData = null;

    try {
      switch (type) {
        case 'shelters':
          moreData = await fetchSearchShelters(search, newPage);
          setSearchInfos((prev) => ({
            ...prev,
            shelters: [...prev.shelters, ...moreData.shelters]
          }));
          if (moreData.shelters.length === 0) {
            setHasMoreShelters(false);
            setModalMessage('모든 보호소를 검색했습니다.');
            setShowModal(true);
            setTimeout(() => setShowModal(false), 1000);
          }
          break;
        case 'posts':
          moreData = await fetchSearchPosts(search, newPage);
          setSearchInfos((prev) => ({
            ...prev,
            posts: [...prev.posts, ...moreData.posts]
          }));
          if (moreData.posts.length === 0) {
            setHasMorePosts(false);
            setModalMessage('모든 게시물을 검색했습니다.');
            setShowModal(true);
            setTimeout(() => setShowModal(false), 1000);
          }
          break;
        case 'groups':
          moreData = await fetchSearchGroups(search, newPage);
          setSearchInfos((prev) => ({
            ...prev,
            groups: [...prev.groups, ...moreData.groups]
          }));
          if (moreData.groups.length === 0) {
            setHasMoreGroups(false);
            setModalMessage('모든 모임을 검색했습니다.');
            setShowModal(true);
            setTimeout(() => setShowModal(false), 1000);
          }
          break;
        default:
          throw new Error(`Unknown load more type: ${type}`);
      }
    } catch (error) {
      console.error('Error fetching more data:', error);
    }
  };

  const handleSearchChange = (e) => {
    const inputSearch = e.target.value;
    setSearch(inputSearch);
  }

  const handleCancle = () => {
    setSearch('');
  }

  const loadSearch = async (e) => {
    if (e.key === 'Enter' && search.trim()) {
      setIsActive(true);
      setPage(0);
      setHasMoreShelters(true);
      setHasMorePosts(true);
      setHasMoreGroups(true);
      let searchInfosData = null;

      try {
        switch (name) {
          case 'searchAdopt':
            searchInfosData = await fetchSearchShelters(search, 0);
            setInitialSheltersCount(searchInfosData.shelters.length);
            break;
          case 'searchPosts':
            searchInfosData = await fetchSearchPosts(search, 0);
            setInitialPostsCount(searchInfosData.posts.length);
            break;
          case 'searchGroups':
            searchInfosData = await fetchSearchGroups(search, 0);
            setInitialGroupsCount(searchInfosData.groups.length);
            break;
          case 'searchAll':
            searchInfosData = await fetchSearchAll(search, 0);
            setInitialSheltersCount(searchInfosData.shelters.length);
            setInitialPostsCount(searchInfosData.posts.length);
            setInitialGroupsCount(searchInfosData.groups.length);
            break;
          default:
            throw new Error(`Unknown search name: ${name}`);
        }

        setSearchInfos(searchInfosData);
      } catch (error) {
        console.error('Error fetching search data:', error);
        setSearchInfos({ shelters: [], posts: [], groups: [] });
      }
    }
  };

  return {
    name,
    isActive,
    searchInfos,
    search,
    handleSearchChange,
    handleCancle,
    loadSearch,
    handleLoadMore,
    hasMoreShelters,
    hasMorePosts,
    hasMoreGroups,
    showModal,
    modalMessage,
    initialSheltersCount,
    initialPostsCount,
    initialGroupsCount
  };
}