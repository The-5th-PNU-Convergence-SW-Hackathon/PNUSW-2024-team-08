import { useRouter } from "next/router";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import SearchUI from "./Search.presenter";
import useFetchSearch from "./hooks/useFetchSearch";

export default function Search() {
  const { navigateBack } = useNavigate();
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path)
  }

  const {
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
  } = useFetchSearch();

  return (
    <SearchUI
      name={name}
      isActive={isActive}
      navigateTo={navigateTo}
      navigateBack={navigateBack}
      searchInfos={searchInfos}
      search={search}
      handleSearchChange={handleSearchChange}
      handleCancle={handleCancle}
      loadSearch={loadSearch}
      handleLoadMore={handleLoadMore}
      hasMoreShelters={hasMoreShelters}
      hasMorePosts={hasMorePosts}
      hasMoreGroups={hasMoreGroups}
      showModal={showModal}
      modalMessage={modalMessage}
      initialSheltersCount={initialSheltersCount}
      initialPostsCount={initialPostsCount}
      initialGroupsCount={initialGroupsCount}
    />
  );
}