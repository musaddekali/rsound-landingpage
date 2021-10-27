const navToggler = document.querySelector('.nav-menu-toggler');
const navMenuCollaps = document.querySelector('.nav-menu-collaps');

let isNavmenuOpen = false;

navToggler.addEventListener('click', () => {
    if (!isNavmenuOpen) {
        navMenuCollaps.classList.add('open');
        isNavmenuOpen = true;
    } else {
        navMenuCollaps.classList.remove('open');
        isNavmenuOpen = false;
    }
})