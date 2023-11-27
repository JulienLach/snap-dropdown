document.addEventListener('DOMContentLoaded', function () { //initier la fonction

    const iconMenu = document.querySelector('.icon-menu');
    const iconClose = document.querySelector('.icon-close');

    iconMenu.addEventListener('click', function () {  //première fonction quand je clique sur l'icone hamburger

        iconMenu.style.display = 'none';
        iconClose.style.display = 'block';
    });

    iconClose.addEventListener('click', function () {  //afficher l'icone croix

        iconMenu.style.display = 'block';
        iconClose.style.display = 'none';
    });


    const iconMobileMenu = document.querySelector('.icon-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    iconMobileMenu.addEventListener('click', () =>
        mobileMenu.classList.toggle('active')

    );

    iconClose.addEventListener('click', () =>
        mobileMenu.classList.toggle('active')

    );


    const companyMobileMenu = document.querySelector('.company');
    const featuresMobileMenu = document.querySelector('.features');
    const dropdownMobileMenu1 = document.querySelector('.dropdown-mobile-menu1');
    const dropdownMobileMenu2 = document.querySelector('.dropdown-mobile-menu2');


    companyMobileMenu.addEventListener('click', () => {
        dropdownMobileMenu1.classList.toggle('active');
    });

    featuresMobileMenu.addEventListener('click', () => {
        dropdownMobileMenu2.classList.toggle('active');
    });





});