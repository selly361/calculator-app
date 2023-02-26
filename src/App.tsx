import { useCalc, useTheme } from "hooks";

import GlobalStyles from "global/styles";
import React from "react";
import { Theme } from "components";
import { ThemeProvider } from "styled-components";
import themeStyles from "global/theme";

function App() {
  const { theme, setTheme } = useTheme();

  const { expression, setExpression } = useCalc();

  return (
    <ThemeProvider theme={themeStyles[theme]}>
      <GlobalStyles />
      
    </ThemeProvider>
  );
}

export default App;
