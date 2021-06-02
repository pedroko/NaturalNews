/*console.log("HOLAMUNDO"); comando solo para saber si está leyendo el js*/
document.querySelector('.menu.btn').addEventListener('click', () => {
    document.querySelector('nav-menu'). classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.showcase', {delay:500});
ScrollReveal().reveal('.news-cards', {delay:500});
ScrollReveal().reveal('.cards-banner-two', {delay:500});
ScrollReveal().reveal('.cards-banner-one', {delay:500});
