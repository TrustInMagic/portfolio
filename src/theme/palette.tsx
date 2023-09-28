export type PaletteReturn = {
  fillings: string;
  fillingsDark: string;
  background: {
    light: string;
    dark: string;
  };
  text: {
    light: string;
    dark: string;
  };
};

const COMMON = {
  fillings: '#0064ff',
  fillingsDark: '#1d4ed8',
};

const palette = (mode: string): PaletteReturn => {
  const dark = {
    ...COMMON,
    background: {
      light: '#1d1d1f',
      dark: '#000000',
    },
    text: {
      light: '#FFFFFF',
      dark: '#cfcfcf',
    },
  };

  const light = {
    ...COMMON,
    background: {
      light: '#FFFFFF',
      dark: '#f5f5f7',
    },
    text: {
      light: '#535355',
      dark: '#1d1d1f',
    },
  };

  return mode === 'light' ? light : dark;
};

export default palette;
