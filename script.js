const mobileMenu = document.querySelector('.mobile__menu')
const headerHero = document.querySelector('.header__hero')
const iconMenu = document.querySelector('.hamburger-icon')
const iconClose = document.querySelector('.icon-close')

const mobileMenuModal = function () {
    mobileMenu.classList.toggle('hidden')
    headerHero.classList.toggle('hidden')
}

iconMenu.addEventListener('click', mobileMenuModal)
iconClose.addEventListener('click', mobileMenuModal)