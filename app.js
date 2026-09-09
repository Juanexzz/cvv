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
