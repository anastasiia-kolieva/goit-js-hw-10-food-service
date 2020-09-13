import itemsTemplates from './templates/menu-items.hbs';
import ArrayOfDishes from './menu';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const switchInputRef = document.querySelector('.js-switch-input');

//   по умолчанию тема светлая
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

// //   если при загрузке страницы тема темная, не забудь поставить свойство checked у чекбокса input.js-switch-input в true, чтобы ползунок сдвинулся в правильное положение.
if (localStorage.getItem('theme') === Theme.DARK) {
  switchInputRef.checked = true;
  bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
}

// Шаблонизация
const markup = itemsTemplates(ArrayOfDishes);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
