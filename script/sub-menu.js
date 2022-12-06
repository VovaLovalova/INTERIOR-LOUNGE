const dropButton = document.querySelector('#button__drop');
const subMenu = document.querySelector('.sub-menu-wrapper');

dropButton.addEventListener('click', () => {
    subMenu.classList.toggle('sub-menu-wrapper--hidden');
});