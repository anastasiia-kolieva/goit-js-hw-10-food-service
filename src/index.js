// импорт массива обьектов блюд из menu.json
import ArrayOfDishes from './menu';

import './styles.css';

// Для удобства хранения списка тем используй такое перечисление Theme.
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const switchInputRef = document.querySelector('.js-switch-input');

//   По умолчанию тема светлая
bodyRef.classList.add(Theme.LIGHT);

switchInputRef.addEventListener('change', changingTheme);

//   функция смены темы
function changingTheme() {
  if (bodyRef.classList.contains(Theme.LIGHT)) {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

// //   Если при загрузке страницы тема темная, не забудь поставить свойство checked у чекбокса input.js-switch-input в true, чтобы ползунок сдвинулся в правильное положение.
if (localStorage.getItem('theme') === Theme.DARK) {
  switchInputRef.checked = true;
  bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
}
