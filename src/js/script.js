'use strict';

// variables
const menu = document.querySelector('.hamburger');
const navbarWrapper = document.getElementById('navbar-wrapper');
const navbarSections = document.getElementById('navbar-sections');

const classesNavbarWrapper = navbarWrapper.classList;

let ifHasNavbarWrapperForMobileView;

// toggle menu on mobile viewport
menu.addEventListener(
  'click',
  function () {
    this.classList.toggle('hamburger--active');
  },
  false
);

function toggleMenu () {
  navbarWrapper.classList.toggle('navbar-wrapper--mobile');
  navbarSections.classList.toggle('navbar-sections--mobile');
  ifHasNavbarWrapperForMobileView = classesNavbarWrapper.contains(
    'navbar-wrapper--mobile'
  );
}

function removeMobileToggle () {
  navbarWrapper.classList.remove('navbar-wrapper--mobile');
  navbarSections.classList.remove('navbar-sections--mobile');
  menu.classList.remove('hamburger--active');
}

menu.addEventListener('click', function (e) {
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
  function () {
    setViewportWidth();
    if (viewportWidth > 768 && ifHasNavbarWrapperForMobileView) {
      removeMobileToggle();
    } else {
      return false;
    }
  },
  false
);
