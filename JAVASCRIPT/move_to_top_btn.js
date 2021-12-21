/*JAVASCRIPT from https://www.youtube.com/watch?v=Rm3EGxlIrnA and https://codepen.io/Ziratsu/pen/PooyEEp Move-to-top button*/
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})