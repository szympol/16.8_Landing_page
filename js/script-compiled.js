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

var _loop = function _loop(i) {
  navbarSectionsElements[i].addEventListener('click', function () {
    sortNavbarSectionsElements();
    navbarSectionsElements[i].classList.add('navbar-sections--active');
  });
};

for (var i = 0; i < navbarSectionsElements.length; i++) {
  _loop(i);
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
    for (var i = 0; i < videos.length; i++) {
      var video = videos[i];
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
