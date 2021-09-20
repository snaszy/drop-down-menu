import './style.css';

document.addEventListener('click', (e) => {
    const hamburgerMenu = e.target.matches('.bar');
    if (hamburgerMenu) {
        document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
            dropdown.classList.toggle('active');
        })
    }

    const dropdownButton = e.target.matches('.dropdown-button');
    if (!dropdownButton && e.target.closest('.dropdown-menu') != null) return;

    let currentDropdown;
    if (dropdownButton) {
        currentDropdown = e.target.closest('.dropdown-menu');
        currentDropdown.classList.toggle('show');
    }

    document.querySelectorAll('.dropdown-menu.show').forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('show');
    })
})

/* const buttons = document.querySelectorAll('.dropdown-button');
buttons.forEach(function(button) {
    button.addEventListener('click', (e) => {
        const contents = document.querySelector('.dropdown-content');
            contents.classList.toggle('show');
            console.log(contents)
            console.log(button)
    })
}) */

/* document.addEventListener('click', (e) => {
    const dropdownContent = document.querySelector('.dropdown-content');
    const button = document.querySelector('.dropdown-button');
    if (e.target === button) {
        dropdownContent.classList.toggle('show');
    } else if (dropdownContent.classList.contains('show')) {
        dropdownContent.classList.toggle('show');
    } else {
        return; 
    };
}) */
