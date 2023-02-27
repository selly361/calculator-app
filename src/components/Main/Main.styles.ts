import styled from "styled-components";

export const StyledMain = styled.main`
  height: 708px;
  width: 540px;
  display: flex;
  gap: 32px;
  flex-direction: column;
`;

export const StyledHeader = styled.header`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: League Spartan;
  font-size: 32px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: -0.5333333611488342px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;

export const Screen = styled.input`
  height: 128px;
  width: 100%;
  border-radius: 10px;
  padding: 40px 32px 36px 32px;
  background-color: ${(props) => props.theme.screenBackground};
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 52px;
  text-align: right;
  letter-spacing: -0.933333px;
  color: ${(props) => props.theme.textColor};
`;

export const CalculatorBody = styled.div`
  height: max-content;
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.auxBackground};
  padding: 32px 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 25px;
`;

export const GeneralKeyButton = styled.button`
  height: 64px;
  width: 101px;
  border-radius: 10px;
  color: ${(props) => props.theme.keyTextColor};
  background-color: ${(props) => props.theme.keyBackground};
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 37px;
  letter-spacing: -0.666667px;
  display: grid;
  place-items: center;
  box-shadow: inset 0px -4px 0px ${(props) => props.theme.keyShadow};
  transition: 1s ease box-shadow;

  &:active {
    box-shadow: none;
  }
`;

export const DelButton = styled(GeneralKeyButton)`
  box-shadow: inset 0px -4px 0px ${(props) => props.theme.delButShadow};
  background-color: ${(props) => props.theme.delButBackground};
  color: white;
  

`

export const ResetButton = styled(DelButton)`
  grid-column: span 2;
  width: 227px;
`
export const EqualsButton = styled(ResetButton)`
  box-shadow: inset 0px -4px 0px ${(props) => props.theme.equalShadow};
  background-color: ${(props) => props.theme.equalsBackground};
  color: ${(props) => props.theme.equalsText};
`
