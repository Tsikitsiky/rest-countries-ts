export const CUSTOM_THEMES = {
    light: {
      name: 'light',
      colors: {
        background: 'hsl(0, 0%, 98%)',
        primary: 'hsl(200, 15%, 8%)',
        secondary: 'hsl(0, 0%, 52%)',
        backgroundElement: 'hsl(0, 0%, 100%)',
      },
    },
    dark: {
      name: 'dark',
          colors: {
          primary: 'hsl(0, 0%, 100%)',
          secondary: 'hsl(0, 0%, 100%)',
          background: 'hsl(207, 26%, 17%)',
          backgroundElement: 'hsl(209, 23%, 22%)',
          },
    },
  };
  
  export interface themeType {
          name: string
          colors: {
          primary: string
          secondary: string
          background: string
          backgroundElement: string
      }
  }