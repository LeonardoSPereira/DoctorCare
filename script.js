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


function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}

function onScroll() {
    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(servicos);
    activateMenuAtCurrentSection(sobre);
    activateMenuAtCurrentSection(contact);

}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

    const menuElement = document.querySelector(`.desktop-menu ul a[href*=${section.getAttribute('id')}]`)

    menuElement.classList.remove('active');
    if(sectionBoundaries) {
        menuElement.classList.add('active');
    }
    
}