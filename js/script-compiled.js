/* eslint-disable no-undef */
'use strict';
// import '@babel/polyfill';

// variables

var menu = document.querySelector('.hamburger');
var navbarWrapper = document.getElementById('navbar-wrapper');
var navbarSections = document.getElementById('navbar-sections');
var navbarSectionsElements = navbarSections.querySelectorAll('li');
var navbarSectionsElementsLinks = navbarSections.querySelectorAll('li a');

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

// sliders

var glide = new Glide('.hero', {
  type: 'carousel',
  hoverpause: false,
  autoplay: false,
  perView: 1,
  gap: 0
});

glide.mount();

var glideTeam = new Glide('.our-team', {
  type: 'carousel',
  hoverpause: true,
  autoplay: false,
  perView: 3,
  gap: 30,
  startAt: 0,
  breakpoints: {
    576: {
      perView: 1,
      autoplay: false
    },
    991: {
      perView: 2,
      autoplay: false
    }
  }
});

glideTeam.mount();

var glideHappyClients = new Glide('.happy-clients', {
  type: 'carousel',
  hoverpause: true,
  autoplay: false,
  perView: 1,
  startAt: 0
});

glideHappyClients.mount();

var glidePremium = new Glide('.premium', {
  type: 'carousel',
  hoverpause: true,
  autoplay: false,
  perView: 1,
  startAt: 0
});

glidePremium.mount();

// video play when visible

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

// delegate onClick transfer to sections from 'a' to 'li' tags in the navbar

var simulateClick = function simulateClick(elem) {
  // Create our event (with options)
  var evt = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  // If cancelled, don't dispatch our event
  var canceled = !elem.dispatchEvent(evt);
};

var _loop2 = function _loop2(_i3) {
  navbarSectionsElements[_i3].addEventListener('click', function (e) {
    if (e.target && e.target.nodeName === 'LI') {
      var _a = navbarSectionsElements[_i3].querySelector('a');
      //let a = e.target.getElementsByTagName('a');
      simulateClick(_a);
      // console.log('List item ', i, ' was clicked!', a.innerText);
    }
  });
};

for (var _i3 = 0; _i3 < navbarSectionsElements.length; _i3++) {
  _loop2(_i3);
}

// countUp

var a = 0;
$(window).scroll(function () {
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a === 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function () {
      var $this = $(this);
      var countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      }, {
        duration: 2000,
        easing: 'swing',
        step: function step() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function complete() {
          $this.text(this.countNum);
          // alert('finished');
        }
      });
    });
    a = 1;
  }
});
