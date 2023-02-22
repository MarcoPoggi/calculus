const CALC_REGEXP = /[0-9]/

export function validateChangeCalc(old_string = "", new_string = "") {
  return new_string
}

export function validateCalc(string = "") {
  let stringClean = string.replace("÷", "/").replace("%", "/").replace("x", "*")
  let result = null
  try {
    result = eval(stringClean)
  } catch (e) {
    result = "Syntax Error"
  }
  return result
}