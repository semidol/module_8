// Задание 8.7.2

function calculate(a, b, operator) {
  if (operator === '+') {
    return a + b
  } else if (operator === '-') {
    return a - b
  } else if (operator === '/') {
    return a / b
  } else if (operator === '*') {
    return a * b
  }
}

let obj = {
  a: 2,
  b: 3,
  operator: '+'
}

let result = calculate.apply(obj, [2, 3, "+"])

console.log(result)