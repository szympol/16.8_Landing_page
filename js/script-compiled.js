'use strict';

// variables

var menu = document.querySelector('.hamburger');
var navbarWrapper = document.getElementById('navbar-wrapper');
var navbarSections = document.getElementById('navbar-sections');

var classesNavbarWrapper = navbarWrapper.classList;

var ifHasNavbarWrapperForMobileView = void 0;

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
var viewportWidth = void 0;

var setViewportWidth = function setViewportWidth () {
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
