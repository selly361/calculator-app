import { StyledHeader, StyledMain, Title } from './Main.styles'

import React from 'react'
import { Theme } from "components"

interface IProps {
    theme: string;
    setTheme: (arg: string) => void;
  }
  

function Main(props: IProps) {
  return (
    <StyledMain>
        <StyledHeader>
            <Title>Calc</Title>

            <Theme {...props} />
        </StyledHeader>
    </StyledMain>
  )
}

export default Main