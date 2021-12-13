import { PaletteMode } from "@mui/material";

/* */
export const getDesignTokens = (mode: PaletteMode ) => ({
palette: {
    mode,
    ...(mode === "light"
    ? {
        palette: {
            mode: 'light',
          },
          primary: {
            main: '#ff4400',
          },
          secondary: {
            main: '#0044ff',
            textSecondary: '#aaa',
          },
          background: {
            default: '#FFF',
            dark: '#F4F6F8',
            paper: '#FFF'
          }
        }
    : {
        // palette dark
        palette: {
            mode: 'dark',
          },
          primary: {
            main: '#ff4400',
          },
          secondary: {
            main: '#0044ff',
            textSecondary: '#aaa',
          },
          background: {
            default: '#232323',
            dark: '#181818',
            paper: '#232323'
          }
        }),
}       

});