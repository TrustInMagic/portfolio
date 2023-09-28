'use client';

import React from 'react';
// theme
import palette from '@/theme/palette';
// types
import { PaletteReturn } from '@/theme/palette';
// ------------------------------------------------ //

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextProps {
  theme: PaletteReturn;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = React.createContext<null | ThemeContextProps>(null);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState('light');

  const provider = {
    theme: palette(theme),
    setTheme,
  };

  return (
    <ThemeContext.Provider value={provider}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => React.useContext(ThemeContext);

export { useTheme };
export default ThemeProvider;
