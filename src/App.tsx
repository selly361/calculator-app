import { Main, Theme } from "components";
import { useCalc, useTheme } from "hooks";

import GlobalStyles from "global/styles";
import React from "react";
import { ThemeProvider } from "styled-components";
import themeStyles from "global/theme";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeProvider theme={themeStyles[theme]}>
      <GlobalStyles />
      <Main theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
