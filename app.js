const colorScreen = document.getElementById('color-screen');
const colorIndicator = document.getElementById('color-indicator');
const colorCounter = document.getElementById('color-counter');
const colorSplash = document.getElementById('color-splash');
const btnChangeColor = document.getElementById('btn-change-color');
const btnResetColor = document.getElementById('btn-reset-color');

const colorPalette = [
  { bg: '#FF6B6B', text: '#ffffff' },
  { bg: '#4ECDC4', text: '#0f172a' },
  { bg: '#45B7D1', text: '#ffffff' },
  { bg: '#FFA07A', text: '#0f172a' },
  { bg: '#98D8C8', text: '#0f172a' },
  { bg: '#F7B731', text: '#0f172a' },
  { bg: '#A55EEA', text: '#ffffff' },
  { bg: '#26DE81', text: '#0f172a' },
  { bg: '#FC5C65', text: '#ffffff' },
  { bg: '#FD9644', text: '#0f172a' },
  { bg: '#2BCBBA', text: '#0f172a' },
  { bg: '#EB3B5A', text: '#ffffff' },
  { bg: '#3867D6', text: '#ffffff' },
  { bg: '#8854D0', text: '#ffffff' },
  { bg: '#20BF6B', text: '#ffffff' }
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
