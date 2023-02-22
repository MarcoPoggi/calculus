import { resetCalculator, backspaceCalculator } from "./handlers/toolbar";
import { buttonsCalculator } from "./handlers/board";

document.addEventListener("DOMContentLoaded", (_e) => {
  // toolbar
  resetCalculator();
  backspaceCalculator();

  // board
  buttonsCalculator()
})