'use strict';
//import '@babel/polyfill';

// variables
const menu = document.querySelector('.hamburger');
const navbarWrapper = document.getElementById('navbar-wrapper');
const navbarSections = document.getElementById('navbar-sections');
const navbarSectionsElements = navbarSections.querySelectorAll('li');

const classesNavbarWrapper = navbarWrapper.classList;
let ifHasNavbarWrapperForMobileView;

// toggle menu on mobile viewport
menu.addEventListener(
  'click',
  function() {
    this.classList.toggle('hamburger--active');
  },
  false
);

function toggleMenu() {
  navbarWrapper.classList.toggle('navbar-wrapper--mobile');
  navbarSections.classList.toggle('navbar-sections--mobile');
  ifHasNavbarWrapperForMobileView = classesNavbarWrapper.contains(
    'navbar-wrapper--mobile'
  );
}

function removeMobileToggle() {
  navbarWrapper.classList.remove('navbar-wrapper--mobile');
  navbarSections.classList.remove('navbar-sections--mobile');
  menu.classList.remove('hamburger--active');
}

menu.addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

// listening to resize
let viewportWidth;

let setViewportWidth = () => {
  viewportWidth = window.innerWidth;
  // console.log(viewportWidth);
};

setViewportWidth();

window.addEventListener(
  'resize',
  function() {
    setViewportWidth();
    // eslint-disable-next-line no-unused-expressions
    viewportWidth > 768 && ifHasNavbarWrapperForMobileView
      ? removeMobileToggle()
      : false;
  },
  false
);

// active element in the menu
let sortNavbarSectionsElements = () => {
  for (let element of navbarSectionsElements) {
    element.classList.remove('navbar-sections--active');
  }
};

for (let i = 0; i < navbarSectionsElements.length; i++) {
  navbarSectionsElements[i].addEventListener('click', function() {
    sortNavbarSectionsElements();
    navbarSectionsElements[i].classList.add('navbar-sections--active');
  });
}

let glide = new Glide('#hero', {
  type: 'carousel',
  hoverpause: false,
  autoplay: false,
  perView: 1,
  gap: 0
});

glide.mount();
