import React, {useMemo, useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { getDesignTokens } from './style/ThemeStyle';
import Home from './components/Home';


function App() {

const [themeMode, setThemeMode] = useState<"light" | "dark">('light');

const theme = useMemo(
  () => createTheme(getDesignTokens(themeMode)),
  [themeMode]
);

const onThemeChange = React.useCallback((): void => {
  setThemeMode(themeMode === "dark" ? "light" : "dark");
}, [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <Home onThemeChange={onThemeChange} themeMode={themeMode} />
    </ThemeProvider >
  );
}

export default App;
