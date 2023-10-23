'use client';

import React from 'react';
// ------------------------------------------------ //

interface ScreenSizeProviderProps {
  children: React.ReactNode;
}

interface ScreenSizeContextProps {
  screenWidth: number;
}

const ScreenSizeContext = React.createContext<null | ScreenSizeContextProps>(
  null
);

const ScreenSizeProvider: React.FC<ScreenSizeProviderProps> = ({
  children,
}) => {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const setWidth = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', setWidth);

    return () => window.removeEventListener('resize', setWidth);
  });

  return (
    <ScreenSizeContext.Provider value={{ screenWidth }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

const useScreenSize = () => {
  const context = React.useContext(ScreenSizeContext);

  if (!context) {
    throw new Error('useScreenSize must be used within a ScreenSizeProvider');
  }

  return context;
};

export default ScreenSizeProvider;
export { useScreenSize };
