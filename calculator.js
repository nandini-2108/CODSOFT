let currentInput = '';
let currentOperation = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

function setOperation(operator) {
  if (currentInput === '') return; 

  if (previousInput !== '') {
    calculateResult();
  }

  currentOperation = operator;
  previousInput = currentInput;
  currentInput = '';
}

function calculateResult() {
  let result;

  if (previousInput === '' || currentInput === '') return;

  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (currentOperation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert('Cannot divide by zero!');
        clearDisplay();
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  currentOperation = '';
  previousInput = '';
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  currentOperation = '';
  previousInput = '';
  document.getElementById('display').value = '';
}


function backspace() {
  currentInput = currentInput.slice(0, -1); 
  document.getElementById('display').value = currentInput;
}
function calculate(){
    const display=document.getElementById("display");
    try{
        display.value=eval(display.value);
    }catch (error)
    {
        display.value="Error";
    }
}
