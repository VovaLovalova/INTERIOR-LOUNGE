const commentTamplate = document.querySelector('#comment').content;
const form = document.querySelector('.main-footer__form');
const commentField = form.querySelector('.main-footer__form-comment');
const nameField = form.querySelector('.main-footer__form-name');
const commentsList = document.querySelector('.comments__list');

const getNewComment = () => {
    const commentElement = commentTamplate.cloneNode(true);
    commentElement.querySelector('.comments__comment').textContent = commentField.value;
    commentElement.querySelector('.comments__name').textContent = nameField.value;
    commentsList.append(commentElement);
}


form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    getNewComment();
    commentField.value = '';
});