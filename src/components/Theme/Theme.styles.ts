import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 44px;
  width: 139px;
  display: flex;
  align-items: end;
  gap: 26px;
`;

export const Text = styled.h2`
  font-size: 12px;
  font-weight: 700;
  line-height: 11px;
  letter-spacing: 1px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
  padding-bottom: 7px;
`;

export const Wrapper = styled.div`
  min-height: 44px;
  width: 71px;
  position: relative;
`;

const primaryButtonStyles = css`
  font-size: 12px;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: 0px;
  height: 100%;
  position: absolute;
  color: ${(props) => props.theme.textColor};
  width: 33%;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledButton1 = styled.button`
  ${primaryButtonStyles}
  left: 0;
`;

export const StyledButton2 = styled.button`
  ${primaryButtonStyles}
  left: 0;
  right: 0;
  margin: auto;
`;

export const StyledButton3 = styled.button`
  ${primaryButtonStyles}
  right: 0;
`;

export const Circle = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.equalsBackground};
  transition: 0.5s ease margin;
  margin: 0;

  &.one {
    margin-left: 0;
  }

  &.two {
    margin-left: 23px;
  }

  &.three {
    margin-left: 43px;
  }
`;

export const ThemeContainer = styled.div`
  height: 26px;
  width: 71px;
  border-radius: 13px;
  background-color: ${(props) => props.theme.auxBackground};
  padding: 5px;
  display: grid;
  align-items: center;
  position: absolute;
  bottom: 0;
`;
