//expanding and hiding the burger menu when clicked

const hideExpand = () => {
    const burger = document.querySelector('.burger-menu'); //class from _nav; these are the 3 lines
    const nav = document.querySelector('.navlinks'); //links
    const eachLink = document.querySelectorAll('.navlinks li');

    burger.addEventListener('click', ()=>{ //toggle function
        nav.classList.toggle('burger-expand');

         eachLink.forEach((link, index) => {
             link.style.animation = `LinksFading 0.2s ease forwards ${index / 8 + 0.5}s`; //fading in each link
        });

        burger.classList.toggle('toggleBurger');
    });

}

hideExpand(); //sayyy whaaaaaat