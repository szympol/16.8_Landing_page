'use strict';
//import '@babel/polyfill';

// variables

var menu = document.querySelector('.hamburger');
var navbarWrapper = document.getElementById('navbar-wrapper');
var navbarSections = document.getElementById('navbar-sections');
var navbarSectionsElements = navbarSections.querySelectorAll('li');

var classesNavbarWrapper = navbarWrapper.classList;
var ifHasNavbarWrapperForMobileView = void 0;

// toggle menu on mobile viewport
menu.addEventListener('click', function () {
  this.classList.toggle('hamburger--active');
}, false);

function toggleMenu() {
  navbarWrapper.classList.toggle('navbar-wrapper--mobile');
  navbarSections.classList.toggle('navbar-sections--mobile');
  ifHasNavbarWrapperForMobileView = classesNavbarWrapper.contains('navbar-wrapper--mobile');
}

function removeMobileToggle() {
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

var setViewportWidth = function setViewportWidth() {
  viewportWidth = window.innerWidth;
  // console.log(viewportWidth);
};

setViewportWidth();

window.addEventListener('resize', function () {
  setViewportWidth();
  // eslint-disable-next-line no-unused-expressions
  viewportWidth > 768 && ifHasNavbarWrapperForMobileView ? removeMobileToggle() : false;
}, false);

// active element in the menu
var sortNavbarSectionsElements = function sortNavbarSectionsElements() {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = navbarSectionsElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var element = _step.value;

      element.classList.remove('navbar-sections--active');
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

var _loop = function _loop(_i) {
  navbarSectionsElements[_i].addEventListener('click', function () {
    sortNavbarSectionsElements();
    navbarSectionsElements[_i].classList.add('navbar-sections--active');
  });
};

for (var _i = 0; _i < navbarSectionsElements.length; _i++) {
  _loop(_i);
}

var glide = new Glide('#hero', {
  type: 'carousel',
  hoverpause: false,
  autoplay: false,
  perView: 1,
  gap: 0
});

glide.mount();

//video play when visible

window.onload = function () {
  var videos = document.getElementsByTagName('video');
  var fraction = 0.8;

  var checkScroll = function checkScroll() {
    for (var _i2 = 0; _i2 < videos.length; _i2++) {
      var video = videos[_i2];
      var x = video.offsetLeft;
      var y = video.offsetTop;
      var w = video.offsetWidth;
      var h = video.offsetHeight;
      var r = x + w; //right
      var b = y + h; //bottom
      var visibleX = void 0;
      var visibleY = void 0;
      var visible = void 0;

      visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
      visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

      visible = visibleX * visibleY / (w * h);

      visible > fraction ? video.play() : video.pause();
    }
  };

  window.addEventListener('scroll', checkScroll, false);
  window.addEventListener('resize', checkScroll, false);
};

// init Isotope
var iso = new Isotope('.our-projects-grid', {
  itemSelector: '.our-projects-grid-item',
  layoutMode: 'fitRows'
});

// bind filter button click
var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener('click', function (event) {
  // only work with buttons
  if (!matchesSelector(event.target, 'button')) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  // use matching filter function
  iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for (var i = 0, len = buttonGroups.length; i < len; i++) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup(buttonGroup);
}

function radioButtonGroup(buttonGroup) {
  buttonGroup.addEventListener('click', function (event) {
    // only work with buttons
    if (!matchesSelector(event.target, 'button')) {
      return;
    }
    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
    event.target.classList.add('is-checked');
  });
}
