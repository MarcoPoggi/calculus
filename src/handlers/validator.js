const CALC_REGEXP = /^(\d+(\.\d*)?((?<=\d)[+*/-]|$))*$/

export function validateChangeCalc(old_string = "", new_string = "") {
  return CALC_REGEXP.test(new_string) ? new_string : old_string
}

export function validateCalc(string = "") {
  let stringClean = string.replace("÷", "/").replace("%", "/").replace("x", "*")
  let result = null
  try {
    if (!CALC_REGEXP.test(stringClean)) throw new Error
    result = eval(stringClean)
  } catch (e) {
    result = "Syntax Error"
  }
  return result
}