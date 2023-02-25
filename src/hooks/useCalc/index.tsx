import React, { useEffect, useState } from "react";

import { Toperator } from "./types";

function useCalc() {
  const [expression, setExpression] = useState("");

  function compute() {
    const answer = Function(`"use strict";return (${expression})`)();

    setExpression(answer);
  }

  function del() {
    setExpression((e) => e.slice(0, e.length - 1));
  }

  function reset() {
    setExpression("");
  }

  function handleKeyPress(e: KeyboardEvent) {
    const key = e.key;

    if (key >= "0" && key <= "9") setExpression((e) => e + key);

    switch (key) {
      case "+":
      case "-":
      case "*":
      case "/": setExpression((e) => e + key);
        break;
        
      case "Backspace": del();
        break;
        
      case "Delete": reset();
        break;
        
      case '=': compute()
      break;
    }
  }

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);

    return () => document.removeEventListener("keypress", handleKeyPress);
  });



  return { compute, del, reset, setExpression }
  
}

export default useCalc;
