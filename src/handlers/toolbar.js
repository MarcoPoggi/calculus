export function resetCalculator() {
  const clearButton = document.querySelector(".button-clear");

  clearButton.addEventListener("click", (e) => {
    let result = document.querySelector(".calculator_header--output")
    result.value = ""
  })
}

export function backspaceCalculator() {
  const backspaceButton = document.querySelector(".button-backspace");

  backspaceButton.addEventListener("click", (e) => {
    let result = document.querySelector(".calculator_header--output")
    result.value = result.value.slice(0, -1)
  })
}