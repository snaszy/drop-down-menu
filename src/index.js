import './style.css';

const menu = document.querySelector('.dropdown-menu');

const button = document.querySelector('.dropdown-button');
button.addEventListener('click', () => {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
});
