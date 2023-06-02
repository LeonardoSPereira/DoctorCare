const header = document.querySelector('.header');
const logo = document.querySelector('logo')

window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;

    const scrollThreshold = 5;

    if (scrollPosition > scrollThreshold) {
        header.classList.add('fixed-header');
        logo.classList.add('fixed-logo');
    } else {
        header.classList.remove('fixed-header');
        logo.classList.add('fixed-logo');
    }
});
