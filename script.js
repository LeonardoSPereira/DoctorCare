const header = document.querySelector('.header');
const logo = document.querySelector('#fixed-logo');
const mobileMenu = document.querySelector('#mobileMenu');

window.addEventListener('scroll', function() {
    
    if (scrollY > 0) {
        header.classList.add('fixed-header');
        logo.classList.add('fixed-logo');
        mobileMenu.classList.add("fixed-menu");
    } else {
        header.classList.remove('fixed-header');
        logo.classList.remove('fixed-logo');
        
    }
});


function onClick() {
    
}