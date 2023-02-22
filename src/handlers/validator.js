const CALC_REGEXP = /[0-9]/

export function validateChangeCalc(old_string = "", new_string = "") {
  return new_string
}

export function validateCalc(string = "") {
  let stringClean = string.replace("÷", "/").replace("%", "/").replace("x", "*")
  let result = ""
  try {
    result = eval(stringClean)
  } catch (error) {
    result = "Syntax Error"
  }
  return result
}