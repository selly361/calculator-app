import React, { useEffect, useState } from "react";

import { NumberError } from "utils/errorClass";
import { getSelectedText } from "utils/getSelectedText";

/**
 * A custom React hook that provides calculator functionalities.
 *
 * @returns {object} An object that contains the following properties:
 *  - `compute`: A function that evaluates the expression and sets the result as the new expression.
 *  - `del`: A function that removes the last character from the expression.
 *  - `reset`: A function that resets the expression to an empty string.
 *  - `setExpression`: A function that sets the expression to a given value.
 */
export function useCalc() {
  /**
   * The state variable that holds the expression for the calculator.
   *
   * @type {string}
   */
  const [expression, setExpression] = useState("0");

  /**
   * A function that evaluates the current expression and sets the result as the new expression.
   *
   * @function
   */
  function compute() {
    try {
      const answer = Function(`"use strict";return (${expression})`)();

      if (isNaN(Number(answer))) {
        throw new NumberError(answer);
      }

      setExpression(String(answer));
    } catch (error) {
      setExpression("isNaN");
    }
  }


  function inputNumber(number: string){

    
    
    if(expression == '0' || expression == 'isNaN'){
      setExpression((e) => number);
    }

    else {
      setExpression((e) => e + number);
    }
  }
  

  /**
   * A function that removes the last character from the expression.
   *
   * @function
   */
  function del() {

    if (getSelectedText() == expression) {
      console.log(getSelectedText());
      reset();
    }

    setExpression((e) => e.slice(0, e.length - 1));
  }


  if(expression.length == 0){
    setExpression('0')
  }

  /**
   * A function that resets the expression to an empty string.
   *
   * @function
   */
  function reset() {
    setExpression("0");
  }

  /**
   * A function that handles key press events and updates the expression accordingly.
   *
   * @function
   * @param {KeyboardEvent} e The event object for the key press event.
   */
  function handleKeyPress(e: KeyboardEvent) {
    const key = e.key;

    if (key >= "0" && key <= "9") {
      
      inputNumber(key)
            
    }

    switch (key) {
      case "+":
      case "-":
      case "*":
      case "/":
      case ".":
        setExpression((e) => e + key);
        break;
      case "Backspace":
        del();
        break;

      case "Delete":
      case "Clear":
        reset();
        break;

      case "=":
        compute();
        break;
    }
  }

  /**
   * A hook that adds a key press event listener to the document to handle calculator key presses.
   *
   * @function
   */
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  });

  return { compute, del, reset, expression, inputNumber, setExpression };
}

export default useCalc;
