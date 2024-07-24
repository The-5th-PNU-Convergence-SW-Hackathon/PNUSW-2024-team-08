import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import SearchUI from "./Search.presenter";
import useFetchSearch from "./hooks/useFetchSearch";

export default function Search() {
  const { navigateBack } = useNavigate();

  const {
    name,
    isActive,
    searchInfos,
    search,
    handleSearchChange,
    loadSearch
  } = useFetchSearch();

  return (
    <SearchUI
      name={name}
      isActive={isActive}
      navigateBack={navigateBack}
      searchInfos={searchInfos}
      search={search}
      handleSearchChange={handleSearchChange}
      loadSearch={loadSearch}
    />
  )
}
