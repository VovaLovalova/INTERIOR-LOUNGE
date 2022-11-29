const drop_button = document.querySelector('.button__drop');
const project_navigation = document.querySelector('.project-navigation');

drop_button.addEventListener('click', () => {
    project_navigation.classList.toggle('project-navigation__hidden');
});