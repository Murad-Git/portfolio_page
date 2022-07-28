import React, { createContext, useState } from 'react';

interface Props {
  children?: React.ReactNode;
}

// variables typing
type ThemesContextState = {
  darkMode: boolean;
  toggleMode: () => void;
  currentSlide: number;
  changeSlide: (isLeft: string | null) => void;
  isMenuOpen: boolean;
  openMenu: () => void;
};

// default state
const contextDefaultValues: ThemesContextState = {
  darkMode: false,
  toggleMode: () => {},
  currentSlide: 0,
  changeSlide: () => {},
  isMenuOpen: false,
  openMenu: () => {},
};

// variables
export const ThemesContext =
  createContext<ThemesContextState>(contextDefaultValues);

// provider - reducer
const ThemesProvider: React.FC<Props> = ({ children }) => {
  const [pageMode, setPageMode] = useState<boolean>(
    contextDefaultValues.darkMode
  );
  const [currentSlide, setCurrentSlide] = useState<number>(
    contextDefaultValues.currentSlide
  );
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(
    contextDefaultValues.isMenuOpen
  );

  // dark theme
  const togglePageMode = () => {
    setPageMode(!pageMode);
  };
  // slider
  const changeSlide = (isLeft: string | null) => {
    if (isLeft === 'left')
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2);
    if (isLeft === null) {
      setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0);
    }
  };
  // hamburger menu
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // change default values with the current
  const contextValue: ThemesContextState = {
    darkMode: pageMode,
    toggleMode: togglePageMode,
    currentSlide: currentSlide,
    changeSlide: changeSlide,
    isMenuOpen: isMenuOpen,
    openMenu: openMenu,
  };
  return (
    <ThemesContext.Provider value={contextValue}>
      {children}
    </ThemesContext.Provider>
  );
};

export default ThemesProvider;
