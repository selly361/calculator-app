import { Circle, Container, StyledButton1, StyledButton2, StyledButton3, ThemeContainer, Wrapper } from "./Theme.styles"

import React from "react";

interface IProps {
  theme: string;
  setTheme: (arg: string) => void;
}

function Theme({ theme, setTheme }: IProps) {
  const activeClass = theme == '1' ? 'one' : theme == '2' ? 'two' : 'three'

  
  return (
    <Wrapper>
        <StyledButton1 onClick={() => setTheme("1")}>1</StyledButton1>
        <StyledButton2 onClick={() => setTheme("2")}>2</StyledButton2>
        <StyledButton3 onClick={() => setTheme("3")}>3</StyledButton3>
        <ThemeContainer>
          <Circle className={activeClass} />
        </ThemeContainer>
    </Wrapper>
  );
}

export default Theme;
