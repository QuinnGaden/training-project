// Переменные блока меню
const menu = document.querySelector ('.menu');
const menuBtn = document.querySelector ('.header__menubtn');
const closeBtn = document.querySelector ('.menu__closebtn');
// Слушатель на бургере для открытия меню
menuBtn.addEventListener ('click', () => {
  menu.classList.toggle ('menu__active');
});
// Слушатель для закрытия меню
closeBtn.addEventListener ('click', () => {
  menu.classList.remove ('menu__active');
});