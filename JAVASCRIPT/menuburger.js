/*JAVASCRIPT from https://www.youtube.com/watch?v=1iS0r238G4g and https://github.com/Deltaty-Code/Humburger-Menu Open menu*/
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

/*Initialiser la valeur par défaut*/
window.addEventListener("load", function (){
    document.getElementById('mainMenu').style.top = '-110%'
})

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-110%';/*-100% didn't work for me, so I put -110%*/
}