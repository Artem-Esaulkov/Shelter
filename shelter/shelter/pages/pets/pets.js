const wrapper = document.querySelector('.wrapper');
const wrapperActive = document.querySelector('.wrapper_active');
const page = document.querySelector('.page');
const burgerWrapper = document.querySelector('.wrapper__burger');
const burgerWrapperActive = document.querySelector('.wrapper__burger_active');
const burgerMenu = document.querySelector('#menu-inactive');
const burgerMenuActive = document.querySelector('#menu-active');
const burgerMenuRotated = document.querySelector('.header__burger-lines_rotated');
const burgerMenuInactive = document.querySelector('.header__burger-lines_inactive');
const navigationHelp = document.querySelector('#nav-help');
const navigationContacts = document.querySelector('#nav-conts');

const openBurgerMenu = () => {
    burgerWrapper.classList.add('wrapper__burger_active');
    wrapper.classList.add('wrapper_active');
    burgerMenu.classList.add('header__burger-lines_rotated');
    burgerMenuActive.classList.add('header__burger-lines_rotated');
    burgerMenuActive.classList.remove('header__burger-lines_inactive');
    burgerMenu.classList.remove('header__burger-lines_inactive');
    page.style.overflow = 'hidden';
};

const closeBurgerMenu = () => {
    page.style.overflow = 'visible';
    burgerWrapper.classList.remove('wrapper__burger_active');
    wrapper.classList.remove('wrapper_active');
    burgerMenu.classList.add('header__burger-lines_inactive');
    burgerMenuActive.classList.add('header__burger-lines_inactive');
    burgerMenu.classList.remove('header__burger-lines_rotated');
    burgerMenuActive.classList.remove('header__burger-lines_rotated');
}

page.style['overflow-x'] = "hidden";
burgerMenu.addEventListener('click', openBurgerMenu);
burgerMenuActive.addEventListener('click', closeBurgerMenu);
if (wrapperActive) {
    wrapper.addEventListener('click', closeBurgerMenu);
}
navigationHelp.addEventListener('click', () => {
    closeBurgerMenu();
    navigationHelp.href = '../main/index.html#help';
});
navigationContacts.addEventListener('click', () => {
    closeBurgerMenu();
    navigationContacts.href = '#contacts';
});