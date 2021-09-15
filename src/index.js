const menu = document.getElementByID('dropdown-menu');
menu.classList.toggle('show');

const button = document.getElementById('dropdown-button');
button.addEventListener('click', () => {
    const dropdownContent = document.getElementById('dropdown-content');
    for (let i = 0; i < dropdownContent.length; i++) {
        const dropdown = dropdownContent[i];
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show')
        }
    }
})

