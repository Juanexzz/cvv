const colorScreen = document.getElementById('color-screen');
const colorIndicator = document.getElementById('color-indicator');
const colorCounter = document.getElementById('color-counter');
const colorSplash = document.getElementById('color-splash');
const btnChangeColor = document.getElementById('btn-change-color');
const btnResetColor = document.getElementById('btn-reset-color');

const colorPalette = [
  { bg: '#FF6B6B', text: '#ffffff', splash: 'rgba(255, 107, 107, 0.4)' },
  { bg: '#4ECDC4', text: '#0f172a', splash: 'rgba(78, 205, 196, 0.4)' },
  { bg: '#45B7D1', text: '#ffffff', splash: 'rgba(69, 183, 209, 0.4)' },
  { bg: '#FFA07A', text: '#0f172a', splash: 'rgba(255, 160, 122, 0.4)' },
  { bg: '#98D8C8', text: '#0f172a', splash: 'rgba(152, 216, 200, 0.4)' },
  { bg: '#F7B731', text: '#0f172a', splash: 'rgba(247, 183, 49, 0.4)' },
  { bg: '#A55EEA', text: '#ffffff', splash: 'rgba(165, 94, 234, 0.4)' },
  { bg: '#26DE81', text: '#0f172a', splash: 'rgba(38, 222, 129, 0.4)' },
  { bg: '#FC5C65', text: '#ffffff', splash: 'rgba(252, 92, 101, 0.4)' },
  { bg: '#FD9644', text: '#0f172a', splash: 'rgba(253, 150, 68, 0.4)' },
  { bg: '#2BCBBA', text: '#0f172a', splash: 'rgba(43, 203, 186, 0.4)' },
  { bg: '#EB3B5A', text: '#ffffff', splash: 'rgba(235, 59, 90, 0.4)' },
  { bg: '#3867D6', text: '#ffffff', splash: 'rgba(56, 103, 214, 0.4)' },
  { bg: '#8854D0', text: '#ffffff', splash: 'rgba(136, 84, 208, 0.4)' },
  { bg: '#20BF6B', text: '#ffffff', splash: 'rgba(32, 191, 107, 0.4)' }
];

let colorClickCount = 0;
let currentColorIndex = -1;

function getRandomColorIndex() {
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * colorPalette.length);
  } while (nextIndex === currentColorIndex && colorPalette.length > 1);
  return nextIndex;
}

function updateColorBackground() {
  currentColorIndex = getRandomColorIndex();
  const selected = colorPalette[currentColorIndex];
  colorClickCount++;

  colorScreen.style.backgroundColor = selected.bg;
  colorIndicator.textContent = selected.bg;
  colorCounter.textContent = `Clics: ${colorClickCount}`;

  const radialA = colorPalette[(currentColorIndex + 2) % colorPalette.length].bg;
  const radialB = colorPalette[(currentColorIndex + 5) % colorPalette.length].bg;
  colorSplash.style.background = `radial-gradient(circle at 30% 25%, ${radialA}88 0%, transparent 45%), radial-gradient(circle at 75% 75%, ${radialB}88 0%, transparent 50%)`;
}

function resetColorState() {
  colorClickCount = 0;
  currentColorIndex = -1;
  colorScreen.style.backgroundColor = '#f8fafc';
  colorIndicator.textContent = '#F8FAFC';
  colorCounter.textContent = 'Clics: 0';
  colorSplash.style.background = 'none';
}

if (btnChangeColor) {
  btnChangeColor.addEventListener('click', updateColorBackground);
}

if (btnResetColor) {
  btnResetColor.addEventListener('click', resetColorState);
}

const listForm = document.getElementById('list-form');
const listInput = document.getElementById('list-input');
const dynamicList = document.getElementById('dynamic-list');
const itemsCountBadge = document.getElementById('items-count-badge');
const btnClearAll = document.getElementById('btn-clear-all');

const itemsInMemory = [];

function renderDynamicList() {
  dynamicList.innerHTML = '';

  if (itemsInMemory.length === 0) {
    const emptyState = document.createElement('li');
    emptyState.className = 'list-empty-state';
    emptyState.textContent = 'No hay elementos en la lista. ¡Escribe algo y presiona Agregar!';
    dynamicList.appendChild(emptyState);
    itemsCountBadge.textContent = 'En memoria: 0 elementos';
    return;
  }

  itemsInMemory.forEach((itemText, index) => {
    const li = document.createElement('li');
    li.className = 'dynamic-item';

    const textSpan = document.createElement('span');
    textSpan.className = 'item-text';
    textSpan.textContent = itemText;

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'btn-delete-item';
    deleteBtn.setAttribute('aria-label', `Eliminar ${itemText}`);
    deleteBtn.textContent = '×';

    deleteBtn.addEventListener('click', () => {
      removeItemFromMemory(index);
    });

    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    dynamicList.appendChild(li);
  });

  itemsCountBadge.textContent = `En memoria: ${itemsInMemory.length} ${itemsInMemory.length === 1 ? 'elemento' : 'elementos'}`;
}

function addItemToMemory(text) {
  const cleanText = text.trim();
  if (!cleanText) return;
  itemsInMemory.push(cleanText);
  renderDynamicList();
}

function removeItemFromMemory(index) {
  if (index >= 0 && index < itemsInMemory.length) {
    itemsInMemory.splice(index, 1);
    renderDynamicList();
  }
}

function clearAllMemory() {
  itemsInMemory.length = 0;
  renderDynamicList();
}

if (listForm) {
  listForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addItemToMemory(listInput.value);
    listInput.value = '';
    listInput.focus();
  });
}

if (btnClearAll) {
  btnClearAll.addEventListener('click', clearAllMemory);
}

renderDynamicList();

const btnDecrement = document.getElementById('btn-decrement');
const btnIncrement = document.getElementById('btn-increment');
const counterDisplay = document.getElementById('counter-display');
const counterAlert = document.getElementById('counter-alert');
const btnResetCounter = document.getElementById('btn-reset-counter');

let counterCurrentValue = 0;
const COUNTER_LIMIT = 10;

function updateCounterDisplay() {
  counterDisplay.textContent = counterCurrentValue;

  if (counterCurrentValue === COUNTER_LIMIT) {
    counterAlert.classList.remove('hidden');
    counterDisplay.classList.add('limit-reached');
  } else {
    counterAlert.classList.add('hidden');
    counterDisplay.classList.remove('limit-reached');
  }
}

function incrementCounter() {
  counterCurrentValue++;
  updateCounterDisplay();
}

function decrementCounter() {
  if (counterCurrentValue > 0) {
    counterCurrentValue--;
    updateCounterDisplay();
  }
}

function resetCounter() {
  counterCurrentValue = 0;
  updateCounterDisplay();
}

if (btnIncrement) {
  btnIncrement.addEventListener('click', incrementCounter);
}

if (btnDecrement) {
  btnDecrement.addEventListener('click', decrementCounter);
}

if (btnResetCounter) {
  btnResetCounter.addEventListener('click', resetCounter);
}

updateCounterDisplay();

const calcPrevOperand = document.getElementById('calc-prev-operand');
const calcCurrentOperand = document.getElementById('calc-current-operand');
const calcKeypad = document.getElementById('calc-keypad');

let calculatorCurrent = '0';
let calculatorPrevious = '';
let calculatorOperation = null;
let shouldResetDisplay = false;
const calculatorHistoryLog = [];

function sanitizeResult(value) {
  if (typeof value !== 'number' || !isFinite(value)) {
    return 'Error';
  }
  const precision = 100000000;
  const rounded = Math.round(value * precision) / precision;
  return rounded.toString();
}

function performManualCalculation(firstOperand, secondOperand, operator) {
  const numA = Number(firstOperand);
  const numB = Number(secondOperand);

  if (isNaN(numA) || isNaN(numB)) {
    return 'Error';
  }

  if (operator === '+') {
    return sanitizeResult(numA + numB);
  }

  if (operator === '−' || operator === '-') {
    return sanitizeResult(numA - numB);
  }

  if (operator === '×' || operator === '*') {
    return sanitizeResult(numA * numB);
  }

  if (operator === '÷' || operator === '/') {
    if (numB === 0) {
      return 'Error: Div 0';
    }
    return sanitizeResult(numA / numB);
  }

  return sanitizeResult(numB);
}

function appendCalculatorNumber(digit) {
  if (calculatorCurrent === '0' || shouldResetDisplay) {
    calculatorCurrent = digit;
    shouldResetDisplay = false;
  } else {
    if (calculatorCurrent.length < 12) {
      calculatorCurrent += digit;
    }
  }
  updateCalculatorUI();
}

function appendCalculatorDecimal() {
  if (shouldResetDisplay) {
    calculatorCurrent = '0.';
    shouldResetDisplay = false;
    updateCalculatorUI();
    return;
  }
  if (!calculatorCurrent.includes('.')) {
    calculatorCurrent += '.';
    updateCalculatorUI();
  }
}

function chooseCalculatorOperation(operator) {
  if (calculatorCurrent === 'Error' || calculatorCurrent === 'Error: Div 0') {
    resetCalculatorState();
    return;
  }

  if (calculatorOperation !== null && !shouldResetDisplay) {
    computeCalculatorResult();
  }

  calculatorOperation = operator;
  calculatorPrevious = calculatorCurrent;
  shouldResetDisplay = true;
  updateCalculatorUI();
}

function computeCalculatorResult() {
  if (calculatorOperation === null || shouldResetDisplay) {
    return;
  }

  const result = performManualCalculation(calculatorPrevious, calculatorCurrent, calculatorOperation);

  calculatorHistoryLog.push([calculatorPrevious, calculatorOperation, calculatorCurrent, result]);

  calcPrevOperand.textContent = `${calculatorPrevious} ${calculatorOperation} ${calculatorCurrent} =`;
  calculatorCurrent = result;
  calculatorOperation = null;
  calculatorPrevious = '';
  shouldResetDisplay = true;
  calcCurrentOperand.textContent = calculatorCurrent;
}

function toggleCalculatorSign() {
  if (calculatorCurrent === '0' || calculatorCurrent.includes('Error')) {
    return;
  }
  if (calculatorCurrent.startsWith('-')) {
    calculatorCurrent = calculatorCurrent.slice(1);
  } else {
    calculatorCurrent = '-' + calculatorCurrent;
  }
  updateCalculatorUI();
}

function calculatePercentage() {
  if (calculatorCurrent.includes('Error')) {
    return;
  }
  const numericValue = Number(calculatorCurrent);
  if (!isNaN(numericValue)) {
    calculatorCurrent = sanitizeResult(numericValue / 100);
    shouldResetDisplay = true;
    updateCalculatorUI();
  }
}

function resetCalculatorState() {
  calculatorCurrent = '0';
  calculatorPrevious = '';
  calculatorOperation = null;
  shouldResetDisplay = false;
  updateCalculatorUI();
}

function updateCalculatorUI() {
  calcCurrentOperand.textContent = calculatorCurrent;
  if (calculatorOperation !== null) {
    calcPrevOperand.textContent = `${calculatorPrevious} ${calculatorOperation}`;
  } else if (!calcPrevOperand.textContent.includes('=')) {
    calcPrevOperand.textContent = '';
  }
}

if (calcKeypad) {
  calcKeypad.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.classList.contains('calc-btn')) return;

    const num = target.getAttribute('data-num');
    const action = target.getAttribute('data-action');
    const op = target.getAttribute('data-op');

    if (num !== null) {
      appendCalculatorNumber(num);
      return;
    }

    if (action === 'decimal') {
      appendCalculatorDecimal();
      return;
    }

    if (action === 'operator' && op) {
      chooseCalculatorOperation(op);
      return;
    }

    if (action === 'equals') {
      computeCalculatorResult();
      return;
    }

    if (action === 'clear') {
      calcPrevOperand.textContent = '';
      resetCalculatorState();
      return;
    }

    if (action === 'negate') {
      toggleCalculatorSign();
      return;
    }

    if (action === 'percent') {
      calculatePercentage();
      return;
    }
  });
}

window.addEventListener('keydown', (event) => {
  if (event.target === listInput) {
    return;
  }

  const key = event.key;

  if (key >= '0' && key <= '9') {
    appendCalculatorNumber(key);
    return;
  }

  if (key === '.' || key === ',') {
    appendCalculatorDecimal();
    return;
  }

  if (key === '+' || key === '-') {
    chooseCalculatorOperation(key === '-' ? '−' : '+');
    return;
  }

  if (key === '*') {
    chooseCalculatorOperation('×');
    return;
  }

  if (key === '/') {
    event.preventDefault();
    chooseCalculatorOperation('÷');
    return;
  }

  if (key === 'Enter' || key === '=') {
    event.preventDefault();
    computeCalculatorResult();
    return;
  }

  if (key === 'Escape' || key.toLowerCase() === 'c') {
    calcPrevOperand.textContent = '';
    resetCalculatorState();
    return;
  }

  if (key === 'Backspace') {
    if (calculatorCurrent.length > 1 && !calculatorCurrent.includes('Error')) {
      calculatorCurrent = calculatorCurrent.slice(0, -1);
    } else {
      calculatorCurrent = '0';
    }
    updateCalculatorUI();
  }
});
