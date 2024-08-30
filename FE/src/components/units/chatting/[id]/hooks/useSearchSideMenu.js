import { useState, useCallback } from "react";

export const useSearchSideMenu = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSearch = useCallback(() => {
    setIsSearchOpen((prev) => !prev);
  }, []);

  const toggleSideMenu = useCallback(() => {
    setIsSideMenuOpen((prev) => !prev);
  }, []);

  return { isSearchOpen, toggleSearch, isSideMenuOpen, toggleSideMenu };
};
