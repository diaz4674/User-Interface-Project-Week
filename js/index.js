// JS goes here
//Expanded Nav
let expandedNav = document.querySelector(".navOptions");

const toggleNav = () => {
    expandedNav.classList.toggle("navOptions--open")
}

let hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', (event) => {
    toggleNav(event);
});

//Closing Expanded Nav

const toggleNavClose = () => {
    expandedNav.classList.remove("navOptions--open")
}

let hamburgerClose = document.querySelector('.hamburgerClose')

hamburgerClose.addEventListener('click', (event) => {
    toggleNavClose(event);
});