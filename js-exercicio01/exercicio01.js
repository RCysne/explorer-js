let numberOne = Number(prompt('Digite um número.'))
let numberTwo = Number(prompt('Digite outro número.'))

function operators(numberOne, numberTwo) {
  let sum = numberOne + numberTwo
  alert(`A soma dos números é ${sum}`)
  let dec = numberOne - numberTwo
  alert(`A subtração dos números é ${dec}`)
  let mul = numberOne * numberTwo
  alert(`A multiplicação dos números é ${mul}`)
  let div = numberOne / numberTwo
  alert(`A divisão dos números é ${div.toFixed(2)}`)
  let res = numberOne % numberTwo
  alert(`O resto da divisão dos números é ${res}`)
  if (sum % 2 == 0) {
    alert(`A soma dos dois números é par: ${sum}`)
  } else {
    alert(`A soma dos dois números é ímpar: ${sum}`)
  }
  if (numberOne == numberTwo) {
    alert(`Os números inseridos são iguais`)
  } else {
    alert(`Os números inseridos são diferentes`)
  }
}

operators(numberOne, numberTwo)
