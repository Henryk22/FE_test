// Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

const square = document.getElementById('square');
const changeBtn = document.getElementById('change-square');
changeBtn.addEventListener('click', function() {
  square.style.backgroundColor = 'green';
  square.style.width = '100px';
  square.style.height = '100px';
});

// Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

const square2 = document.getElementById('square');
const changeBtn2 = document.getElementById('change-color');
changeBtn.addEventListener('click', function() {
  square.style.backgroundColor = 'blue';
  console.log(square.style.backgroundColor);
});

// Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

const square3 = document.getElementById('square');
const changeBtn3 = document.getElementById('change-size');
changeBtn.addEventListener('click', function() {
  const currentWidth = parseInt(square.style.width);
  const currentHeight = parseInt(square.style.height);
  square.style.width = (currentWidth + 20) + 'px';
  square.style.height = (currentHeight + 20) + 'px';
});

// Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.

const root = document.querySelector('.root');
const addBtn = document.getElementById('add-paragraph');
addBtn.addEventListener('click', function() {
  const p = document.createElement('p');
  p.style.color = 'blue';
  p.textContent = 'Произвольный текст';
  root.appendChild(p);
});

// Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

const rootblue = document.querySelector('.root');
const addBtnblue = document.getElementById('add-paragraph');
let currentColor = 'blue';
addBtn.addEventListener('click', function() {
  const p = document.createElement('p');
  p.style.color = currentColor;
  p.textContent = 'Произвольный текст';
  root.appendChild(p);
  currentColor = currentColor === 'blue' ? 'green' : 'blue';
});