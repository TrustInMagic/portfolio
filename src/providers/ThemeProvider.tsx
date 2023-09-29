'use client';

import React from 'react';
// ------------------------------------------------ //

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = React.createContext<ThemeContextProps | null>(null);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState('light');

  const provider = { theme, setTheme };

  return (
    <ThemeContext.Provider value={provider}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => React.useContext(ThemeContext);

export { useTheme };
export default ThemeProvider;
