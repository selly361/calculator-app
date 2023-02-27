import styled from "styled-components";

export const StyledMain = styled.main`
  height: 708px;
  width: 540px;
  
`;

export const StyledHeader = styled.header`
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const Title = styled.h1`
font-family: League Spartan;
font-size: 32px;
font-weight: 700;
line-height: 29px;
letter-spacing: -0.5333333611488342px;
text-align: center;
color: ${props => props.theme.textColor};
`