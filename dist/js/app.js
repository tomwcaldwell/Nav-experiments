/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// ----------- Navigation example 1 -----------
$(document).ready(function () {
  $('.nav-button-1').on('click', function () {
    $('.nav').toggleClass('hidden active');
    setTimeout(function () {
      $('.nav-image-section').toggleClass('background-fade-1');
    }, 800);
    setTimeout(function () {
      $('.nav-detail>ul li').each(function (i) {
        $(this).delay(800 * i).animate({
          'opacity': 1
        }, 1000);
      });
    }, 1200);
    setTimeout(function () {
      $('.nav-contact').show();
    }, 4000);
    $('.nav-detail>ul>li').hover(function () {
      $('.nav-image').removeClass('active');

      if ($(this).hasClass('profile')) {
        $('.nav-image.profile-image').addClass('active');
      } else if ($(this).hasClass('work')) {
        $('.nav-image.work-image').addClass('active');
      } else if ($(this).hasClass('insights')) {
        $('.nav-image.insights-image').addClass('active');
      } else {
        $('.nav-image.talk-image').addClass('active');
      }
    });
    $('.nav-button-1').toggleClass('rotate-button text-black text-white');
    $('.title').toggleClass('hide-title');

    if (!$('nav').hasClass('active')) {
      $('.nav-image').removeClass('active');
    }
  });
}); // ----------- Navigation example 2 -----------

$('.nav-button-2').click(function () {
  $('.nav-detail-2').addClass('nav-detail-2--start');
  $('.nav-2').toggleClass('active');
  $('.page').toggleClass('title-opacity');
  $('.navigation-2').toggleClass('nav-detail-2--open');
  setTimeout(function () {
    $('.nav-detail-2 ul').toggleClass('hidden');
    $('.nav-detail-2 ul').css('margin-top', '400px');
    $('.nav-detail-2 ul li').each(function (i) {
      $(this).delay(1000 * i).animate({
        'opacity': 1
      }, 2000);
    });
  }, 1500);
  $('.nav-button-2').toggleClass('text-black text-white rotate-button');
}); // ----------- Navigation example 3 -----------

$('.nav-button-3').click(function () {
  $('.nav-3').toggleClass('active');
  $('.page').toggleClass('title-opacity');
  $('.nav-detail-3').addClass('nav-detail-3--start');
  $('.navigation-3').toggleClass('nav-detail-3--open');
  $('.nav-bottom-3').addClass('nav-bottom-3--start');
  $('.nav-bottom-3').toggleClass('nav-bottom-3--open');
  $('.nav-detail-3 ul .nav-3-image-1-block').hover(function () {
    $('.nav-3-image-1').toggleClass('active');
  });
  $('.nav-detail-3 ul .nav-3-image-2-block').hover(function () {
    $('.nav-3-image-2').toggleClass('active');
  });
  $('.nav-detail-3 ul .nav-3-image-3-block').hover(function () {
    $('.nav-3-image-3').toggleClass('active');
  });
  $('.nav-detail-3 ul .nav-3-image-4-block').hover(function () {
    $('.nav-3-image-4').toggleClass('active');
  });
  setTimeout(function () {
    $('.nav-detail-3 ul').fadeIn(800);
    $('.nav-detail-3 ul li').each(function (i) {
      $(this).delay(800 * i).animate({
        'opacity': 1
      }, 1500);
    });
  }, 1200);
  setTimeout(function () {
    $('.nav-contact-3').fadeIn(100);
  }, 4100);
  $('.nav-button-3').toggleClass('rotate-button');
  setTimeout(function () {
    var title_div = $('.hover-title-1');
    var container_div = $('.hover-container-1');
    var title_div_starting_positions = title_div.position();
    var title_div_starting_position_x = title_div_starting_positions.left;
    var title_div_starting_position_y = title_div_starting_positions.top;
    $(container_div).on('mousemove', function (e) {
      //Get Mouse Positions
      var mouse_position_x = e.clientX;
      var mouse_position_y = e.clientY; //Get Container Positions

      var container_position_x = container_div.offset().left;
      var container_position_y = container_div.offset().top; //Mouse Position relative to container

      var mouse_position_relative_to_container_x = mouse_position_x - container_position_x;
      var mouse_position_relative_to_container_y = mouse_position_y - container_position_y; //Get word center offset

      var x_offset = title_div.width() / 2;
      var y_offset = title_div.height() / 2; //New positions

      var new_x = mouse_position_relative_to_container_x - x_offset;
      var new_y = mouse_position_relative_to_container_y - y_offset; //Constrain the new positions

      if (new_x < 0) {
        new_x = title_div_starting_position_x;
        new_y = title_div_starting_position_y;
      }

      if (new_y < 0) {
        new_x = title_div_starting_position_x;
        new_y = title_div_starting_position_y;
      }

      var most_x_position = container_div.width() - title_div.width();
      var most_y_position = container_div.height() - title_div.height();

      if (new_x > most_x_position) {
        new_x = title_div_starting_position_x;
        new_y = title_div_starting_position_y;
      }

      if (new_y > most_y_position) {
        new_x = title_div_starting_position_x;
        new_y = title_div_starting_position_y;
      } //Move to new location


      title_div.css({
        top: new_y + 'px',
        left: new_x + 'px'
      });
    });
  }, 4300);
  setTimeout(function () {
    var title_div = $('.hover-title-2');
    var container_div = $('.hover-container-2');
    var title_div_starting_positions = title_div.position();
    var title_div_starting_position_x = title_div_starting_positions.left;
    var title_div_starting_position_y = title_div_starting_positions.top;
    $(container_div).on('mousemove', function (e) {
      //Get Mouse Positions
      var mouse_position_x = e.clientX;
      var mouse_position_y = e.clientY; //Get Container Positions

      var container_position_x = container_div.offset().left;
      var container_position_y = container_div.offset().top; //Mouse Position relative to container

      var mouse_position_relative_to_container_x = mouse_position_x - container_position_x;
      var mouse_position_relative_to_container_y = mouse_position_y - container_position_y; //Get word center offset

      var x_offset = title_div.width() / 2;
      var y_offset = title_div.height() / 2; //New positions

      var new_x = mouse_position_relative_to_container_x - x_offset;
      var new_y = mouse_position_relative_to_container_y - y_offset; //Constrain the new positions

      if (new_x < 0) {
        new_x = title_div_starting_position_x;
        new_y = title_div_starting_position_y;
      }

      if (new_y < 0) {
        new_x = title_div_starting_position_x;
        new_y = title_div_starting_position_y;
      }

      var most_x_position = container_div.width() - title_div.width();
      var most_y_position = container_div.height() - title_div.height();

      if (new_x > most_x_position) {
        new_x = title_div_starting_position_x;
        new_y = title_div_starting_position_y;
      }

      if (new_y > most_y_position) {
        new_x = title_div_starting_position_x;
        new_y = title_div_starting_position_y;
      } //Move to new location


      title_div.css({
        top: new_y + 'px',
        left: new_x + 'px'
      });
    });
  }, 4300);
  setTimeout(function () {
    var title_div = $('.hover-title-3');
    var container_div = $('.hover-container-3');
    var title_div_starting_positions = title_div.position();
    var title_div_starting_position_x = title_div_starting_positions.left;
    var title_div_starting_position_y = title_div_starting_positions.top;
    $(container_div).on('mousemove', function (e) {
      //Get Mouse Positions
      var mouse_position_x = e.clientX;
      var mouse_position_y = e.clientY; //Get Container Positions

      var container_position_x = container_div.offset().left;
      var container_position_y = container_div.offset().top; //Mouse Position relative to container

      var mouse_position_relative_to_container_x = mouse_position_x - container_position_x;
      var mouse_position_relative_to_container_y = mouse_position_y - container_position_y; //Get word center offset

      var x_offset = title_div.width() / 2;
      var y_offset = title_div.height() / 2; //New positions

      var new_x = mouse_position_relative_to_container_x - x_offset;
      var new_y = mouse_position_relative_to_container_y - y_offset; //Constrain the new positions

      if (new_x < 0) {
        new_x = title_div_starting_position_x;
        new_y = title_div_starting_position_y;
      }

      if (new_y < 0) {
        new_x = title_div_starting_position_x;
        new_y = title_div_starting_position_y;
      }

      var most_x_position = container_div.width() - title_div.width();
      var most_y_position = container_div.height() - title_div.height();

      if (new_x > most_x_position) {
        new_x = title_div_starting_position_x;
        new_y = title_div_starting_position_y;
      }

      if (new_y > most_y_position) {
        new_x = title_div_starting_position_x;
        new_y = title_div_starting_position_y;
      } //Move to new location


      title_div.css({
        top: new_y + 'px',
        left: new_x + 'px'
      });
    });
  }, 4300);
  setTimeout(function () {
    var title_div = $('.hover-title-4');
    var container_div = $('.hover-container-4');
    var title_div_starting_positions = title_div.position();
    var title_div_starting_position_x = title_div_starting_positions.left;
    var title_div_starting_position_y = title_div_starting_positions.top;
    $(container_div).on('mousemove', function (e) {
      //Get Mouse Positions
      var mouse_position_x = e.clientX;
      var mouse_position_y = e.clientY; //Get Container Positions

      var container_position_x = container_div.offset().left;
      var container_position_y = container_div.offset().top; //Mouse Position relative to container

      var mouse_position_relative_to_container_x = mouse_position_x - container_position_x;
      var mouse_position_relative_to_container_y = mouse_position_y - container_position_y; //Get word center offset

      var x_offset = title_div.width() / 2;
      var y_offset = title_div.height() / 2; //New positions

      var new_x = mouse_position_relative_to_container_x - x_offset;
      var new_y = mouse_position_relative_to_container_y - y_offset; //Constrain the new positions

      if (new_x < 0) {
        new_x = title_div_starting_position_x;
        new_y = title_div_starting_position_y;
      }

      if (new_y < 0) {
        new_x = title_div_starting_position_x;
        new_y = title_div_starting_position_y;
      }

      var most_x_position = container_div.width() - title_div.width();
      var most_y_position = container_div.height() - title_div.height();

      if (new_x > most_x_position) {
        new_x = title_div_starting_position_x;
        new_y = title_div_starting_position_y;
      }

      if (new_y > most_y_position) {
        new_x = title_div_starting_position_x;
        new_y = title_div_starting_position_y;
      } //Move to new location


      title_div.css({
        top: new_y + 'px',
        left: new_x + 'px'
      });
    });
  }, 4300);

  if (!$('.nav-3').hasClass('active')) {
    setTimeout(function () {
      $('.navigation-3').removeClass('nav-detail-3--start');
      $('.navigation-3').removeClass('nav-detail-3--start');
    }, 1400);
  }
});

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/sass/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/thomaswcaldwell/Sites/MoT/marm-social/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /Users/thomaswcaldwell/Sites/MoT/marm-social/src/sass/app.scss */"./src/sass/app.scss");


/***/ })

/******/ });