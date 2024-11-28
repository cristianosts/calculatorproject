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
   
    

  }

  //adicionar valores na tela da calculadora
  updateScreen() {
    this.currentOperationText.innerText += this.currentOperation
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
