export function buttonsCalculator() {
  const board = document.querySelector(".calculator--board_container");
  let result = document.querySelector(".calculator_header--output");

  [...board.children].forEach((element, index, arr) => {
    if (index !== arr.length - 1) {
      element.addEventListener("click", (_e) => {
        let newValue = result.value + element.textContent
        // validation
        result.value = newValue
      })
    }
  });
}