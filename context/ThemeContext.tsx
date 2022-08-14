import React, {createContext} from 'react';
import {theme} from './theme';

type TThemeContextProvideProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({children}: TThemeContextProvideProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
