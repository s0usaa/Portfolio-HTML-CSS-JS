// Cambio del icono del navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// seccion del scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // activacion de las animaciones en las secciones con el scroll
            sec.classList.add('show-animate')
        }
    })
    
    // cabecera sticky
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

// quitar el icono del menu y el navbar cuando hacemos click en los enlaces

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
}