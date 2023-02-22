export function buttonsCalculator() {
  const board = document.querySelector(".calculator--board_container");
  let result = document.querySelector(".calculator_header--output");

  [...board.children].forEach((element, index, arr) => {
    if (index !== arr.length - 1) {
      element.addEventListener("click", (_e) => {
        let newValue = result.value + element.textContent
        // validation regexp
        result.value = newValue
      })
    }
  });

  // keayboard actions
  document.addEventListener("keydown", (e) => {
    e.preventDefault();

    const target = {
      numbers: [...document.querySelectorAll(".button-num")],
      operators: [...document.querySelectorAll(".button-op")]
    }

    const operatorsSynonyms = {
      "%": "÷",
      "/": "÷",
      "*": "x"
    }

    if (e.key.match(/^[0-9]/)) {
      let buttonNumber = target.numbers.filter((element) => element.textContent === e.key)
      if (buttonNumber.length > 0) {
        buttonNumber[0].click()
      }
    }
    else if (e.key.match(/^(\+|-|\*|\/|%)$/)) {
      let buttonOperator = target.operators.filter((element) => element.textContent === e.key || operatorsSynonyms[e.key] === element.textContent)
      if (buttonOperator.length > 0) {
        buttonOperator[0].click()
      }
    }
  })
}