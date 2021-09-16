// Переменные блока меню
const menu = document.querySelector ('.menu');
const menuBtn = document.querySelector ('.header__menubtn');
const closeBtn = document.querySelector ('.menu__closebtn');
// Переменные footer__form
const footerForm = document.querySelector('.footer__form');
const checkBox = document.querySelector('.footer__checkbox');
const input = document.querySelector('.footer__input');
const footerBtn = document.querySelector('.footer__button') ; 
// Слушатель на бургере для открытия меню
menuBtn.addEventListener ('click', () => {
  menu.classList.toggle ('menu__active');
});
// Слушатель для закрытия меню
closeBtn.addEventListener ('click', () => {
  menu.classList.remove ('menu__active');
});
// Массив изображений
let i = 0;
let array = [
  "./image/looks_item1.png",
  "./image/looks_item2.png",
  "./image/looks_item3.png",
  "./image/looks_item4.png",
  "./image/looks_item5.png",
  "./image/looks_item6.png",
  "./image/looks_item7.png",
  "./image/looks_item8.png",
];
// Задержка анимации
let delay = 300; 
let image = document.querySelectorAll(".looks__photo-image"); 
// Функция меняющая изображения в блоке looks
function imageRotation() {  
  image.forEach (function () {    
    image[i].src = `${array[Math.floor(Math.random() * 8)]}`;
    image[i].classList.add('looks__animation_type-fade-in');
    setTimeout ( () => image[i].classList.add('looks__animation_type-fade-out'),300); 
    image[i].classList.remove('looks__animation_type-fade-out');
    setTimeout ( () => image[i].classList.remove('looks__animation_type-fade-in'),300);
  });  
  i++;
  if (i === array.length) i = 0;   
  setTimeout("imageRotation(" + i + ")", 1000);
}

imageRotation();
// Прерывание отправки формы
footerForm.addEventListener ('submit', (eve) => {
  eve.preventDefault();
  footerForm.reset();
});
// функция проверки checkbox на checked
checkBox.addEventListener('change', (eve) => {
  input.disabled = !eve.target.checked;
  footerBtn.disabled = !eve.target.checked;
});

// Анимация блока about

const title = document.querySelector('.about__title');
const aboutText = document.querySelector('.about__text');
const text = document.querySelector('.about__text_place_third');
const img1 = document.querySelector('.about__image-first');
const img2 = document.querySelector('.about__image-second');
const img3 = document.querySelector('.about__image-third');
const aboutGroup = document.querySelectorAll('.about__group');

setTimeout( function animationText() {
  title.classList.add('about__animation_type_fade-in-left');  
  aboutText.classList.add('about__animation_type_fade-in-right');
  aboutGroup[0].classList.add('about__animation_type_fade-in-left'); 
  img1.classList.add('about__animation_type_fade-in-right'); 
  img2.classList.add('about__animation_type_fade-in-left');
  text.classList.add('about__animation_type_fade-in-right');
  aboutGroup[1].classList.add('about__animation_type_fade-in-left');    
  img3.classList.add('about__animation_type_fade-in-right');  
},500); 
setTimeout(500);

