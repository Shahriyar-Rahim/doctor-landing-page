// initialise dom classes and id

const sections = document.querySelectorAll('section[id');
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const menu = document.querySelectorAll('.navbar-menu');
const burger = document.querySelectorAll('.navbar-burger');
const close = document.querySelectorAll('.navbar-close');
const backdrop = document.querySelectorAll('.navbar-backdrop');
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a[href^="#"]');

document.addEventListener('DOMContentLoaded', () => {
    handleScroll()
    window.addEventListener('scroll', handleScroll); //by this when we navigate to a section the section will be highlighted in the navbar

    if (burger.length && menu.length) {
        handleMobileMenuToggle(burger, menu);
    }

    if (close.length && backdrop.length && menu.length) {
        handleMobileMenuClose(close, backdrop, menu);
    }

    // for closing the menu in mobile
    if (mobileMenuLinks.length && navLinks.length && menu.length) {
        handleMobileMenuLinkClicks(mobileMenuLinks, navLinks, menu);
    }
})

// 
function setActiveLink(sections, navLinks) {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) { }
    navLinks.forEach((link) => link.classList.remove('active'));
    if (navLinks[index]) {
        navLinks[index].classList.add('active')
    }
}

////by this when we navigate to a section the section will be highlighted in the navbar its a function
function handleScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    setActiveLink(sections, navLinks)
}

function handleMobileMenuToggle(burger, menu) {
    burger.forEach(b => {
        b.addEventListener('click', () => {
            menu.forEach(m => m.classList.toggle('hidden'));
        })
    })
}


function handleMobileMenuClose(close, backdrop, menu) {
    close.forEach(c => {
        c.addEventListener('click', () => {
            menu.forEach(m => m.classList.add('hidden'));
        });
    })
    backdrop.forEach(b => {
        b.addEventListener('click', () => {
            menu.forEach(m => m.classList.add('hidden'));
        });
    });

}

function handleMobileMenuLinkClicks(mobileMenuLinks, navLinks, menu) {
    mobileMenuLinks.forEach(anchor => {
        anchor.addEventListener('click', () => {
            navLinks.forEach((link) => link.classList.remove('active'));
            const targetLink = document.querySelectorAll(`nav a[href="${this.getAttribute('href')}"]`);
            if (targetLink) {
                targetLink.classList.add('active');
            }
            menu.forEach(m => m.classList.add('hidden'));
        });
    });
}