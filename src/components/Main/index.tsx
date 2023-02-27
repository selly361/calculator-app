import { CalculatorBody, DelButton, EqualsButton, GeneralKeyButton, ResetButton, Screen, StyledHeader, StyledMain, Title } from './Main.styles'

import React from 'react'
import { Theme } from "components"
import { useCalc } from 'hooks';

interface IProps {
    theme: string;
    setTheme: (arg: string) => void;
  }
  

function Main(props: IProps) {

  const { expression, inputNumber, compute, del, setExpression, reset } = useCalc()
  console.log(expression);


  const screenExpression = !isNaN(Number(expression)) ? Number(expression).toLocaleString() : expression;
  
  return (
    <StyledMain>
        <StyledHeader>
            <Title>Calc</Title>

            <Theme {...props} />
        </StyledHeader>
        <Screen readOnly value={screenExpression} />
        <CalculatorBody>
          <GeneralKeyButton onClick={() => inputNumber('7')}>7</GeneralKeyButton>
          <GeneralKeyButton onClick={() => inputNumber('8')}>8</GeneralKeyButton>
          <GeneralKeyButton onClick={() => inputNumber('9')}>9</GeneralKeyButton>
          <DelButton onClick={del}>DEL</DelButton>
          <GeneralKeyButton onClick={() => inputNumber('4')}>4</GeneralKeyButton>
          <GeneralKeyButton onClick={() => inputNumber('5')}>5</GeneralKeyButton>
          <GeneralKeyButton onClick={() => inputNumber('6')}>6</GeneralKeyButton>
          <GeneralKeyButton onClick={() => setExpression(e => e + '+')}>+</GeneralKeyButton>
          <GeneralKeyButton onClick={() => inputNumber('1')}>1</GeneralKeyButton>
          <GeneralKeyButton onClick={() => inputNumber('2')}>2</GeneralKeyButton>
          <GeneralKeyButton onClick={() => inputNumber('3')}>3</GeneralKeyButton>
          <GeneralKeyButton onClick={() => setExpression(e => e + '-')}>-</GeneralKeyButton>
          <GeneralKeyButton onClick={() => inputNumber('.')}>.</GeneralKeyButton>
          <GeneralKeyButton onClick={() => inputNumber('0')}>0</GeneralKeyButton>
          <GeneralKeyButton onClick={() => setExpression(e => e + '/')}>/</GeneralKeyButton>
          <GeneralKeyButton onClick={() => setExpression(e => e + 'x')}>x</GeneralKeyButton>
          <ResetButton onClick={reset}>RESET</ResetButton>
          <EqualsButton onClick={compute}>=</EqualsButton>
        </CalculatorBody>
    </StyledMain>
  )
}

export default Main