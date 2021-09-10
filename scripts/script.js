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
let delay = 300; 
let image = document.querySelectorAll(".looks__photo-mage"); 
function imageRotation() {  
  image.forEach (function () {    
    image[i].src = `${array[Math.floor(Math.random() * 8)]}`;
    image[i].classList.add('looks__animation_type-fade-in');
    setTimeout ( () => image[i].classList.add('looks__animation_type-fade-out'),100); 
    setTimeout ( () => image[i].classList.remove('looks__animation_type-fade-out'),200);
    setTimeout ( () => image[i].classList.remove('looks__animation_type-fade-in'),200);
  });  
  i++;
  if (i === array.length) i = 0;   
  setTimeout("imageRotation(" + i + ")", delay);
}

imageRotation();