import { validateCalc, validateChangeCalc } from "./validator";

export function buttonsCalculator() {
  const board = document.querySelector(".calculator--board_container");
  let resultOutput = document.querySelector(".calculator_header--output");
  let resultButton = document.querySelector(".button-result");

  [...board.children].forEach((element, index, arr) => {
    if (index !== arr.length - 1) {
      element.addEventListener("click", (_e) => {
        let newValue = validateChangeCalc(element.textContent, (resultOutput.value + element.textContent))
        resultOutput.value = newValue
      })
    }
  });

  resultButton.addEventListener("click", (_e) => {
    let result = validateCalc(resultOutput.value)

    resultOutput.value = result
    if (result === "Syntax Error") setTimeout(() => resultOutput.value = "", 1000)
  })

  // keayboard actions
  document.addEventListener("keydown", (e) => {
    e.preventDefault();

    const operatorsSynonyms = {
      "%": "÷",
      "/": "÷",
      "*": "x",
      "Enter": "=",
      ",": "."
    };

    let button = [...board.children].find((element) => element.textContent === e.key || operatorsSynonyms[e.key] === element.textContent)
    if (button) button.click()
  })
}