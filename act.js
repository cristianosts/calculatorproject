//seleção dos elementos(variáveis)
const previousOperationText = document.querySelector('#previous-operation')
const currentOperationText = document.querySelector('#current-operation')
const buttons = document.querySelectorAll('#buttons-container button')

//lógica de aplicação da calculadora
class Calculator {
  constructor(previousOperationText,currentOperationText) {
    this.previousOperationText = previousOperationText
    this.currentOperationText = currentOperationText
    this.currentOperation = ''
  }

  //adicionar digito á tela da calculadora
  addDigit(digit) {
  //conferir se a operação já tem um ponto
    if (digit === '.' && this.currentOperationText.innerText.includes('.')) {
        return
    }

    this.currentOperation = digit
    this.updateScreen()
  }

  //processar todas as operações
  processOperation(operation) {
   
    // pegar valor atual e valor anterior
    let operationValue
    let previous = +this.previousOperationText.innerText.split(' ')[0]
    let current = +this.currentOperationText.innerText
    
    switch(operation) {
      case '+':
        operationValue = previous + current
        this.updateScreen(operationValue, operation, current, previous)
        break
      case '+':
        operationValue = previous + current
        this.updateScreen(operationValue, operation, current, previous)
       break
      case '+':
        operationValue = previous + current
        this.updateScreen(operationValue, operation, current, previous)
       break
      case '+':
        operationValue = previous + current
        this.updateScreen(operationValue, operation, current, previous)
       break
      default:
        return
    }

  }

  //adicionar valores na tela da calculadora
  updateScreen(
     operationValue = null,
     operation = null,
     current = null,
     previous = null) {
      console.log(operationValue, operation, current, previous)

    if (operationValue === null) {
        this.currentOperationText.innerText += this.currentOperation
    } else {
        //conferir se o valor é zero, se for só add o valor q foi digitado
        if (previous === 0) {
          operationValue = current 
        }
        //adicionar valor digitado a previous
        this.previousOperationText.innerText = `${operationValue} ${operation}`
        this.currentOperationText.innerText = ''
    }
  }

}

const calc = new Calculator(previousOperationText,currentOperationText)

//eventos para a funcionalidade da calculadora
buttons.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        const value = e.target.innerText

        if (+value >= 0 || value === '.'){
          calc.addDigit(value)
        } else {
          calc.processOperation(value)
        }
    })
})
