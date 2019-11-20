//expanding and hiding the burger menu when clicked

const hideExpand = () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.navlinks');
    const eachLink = document.querySelectorAll('.navlinks li');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('burger-expand');

         eachLink.forEach((link, index) => {
             link.style.animation = `LinksFading 0.2s ease forwards ${index / 8 + 0.5}s`;
        });

        burger.classList.toggle('toggleBurger');
    });

}

hideExpand(); //whaaaaaat