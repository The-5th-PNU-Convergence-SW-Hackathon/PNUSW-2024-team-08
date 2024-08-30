import { useState } from "react"

export const useSearch = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const input = e.target.value;
    setSearch(input);
  }

  return {
    search,
    handleSearch
  }
}