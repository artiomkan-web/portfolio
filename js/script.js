 (function(modules) { 
 	var installedModules = {};
 	function __webpack_require__(moduleId) {
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
 		module.l = true;
 		return module.exports;
 	}
 	__webpack_require__.m = modules;
 	__webpack_require__.c = installedModules;
 	__webpack_require__.d = function(exports, name, getter) {
 		if(!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
 		}
 	};
 	__webpack_require__.r = function(exports) {
 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 		}
 		Object.defineProperty(exports, '__esModule', { value: true });
 	};
 	__webpack_require__.t = function(value, mode) {
 		if(mode & 1) value = __webpack_require__(value);
 		if(mode & 8) return value;
 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
 		var ns = Object.create(null);
 		__webpack_require__.r(ns);
 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
 		return ns;
 	};
 	__webpack_require__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};
 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
 	__webpack_require__.p = "";
 	return __webpack_require__(__webpack_require__.s = "./#src/js/script.js");
 })
 ({

 "./#src/js/script.js":
 (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction testWebP(callback) {\n  var webP = new Image();\n\n  webP.onload = webP.onerror = function () {\n    callback(webP.height == 2);\n  };\n\n  webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\n}\n\ntestWebP(function (support) {\n  if (support == true) {\n    document.querySelector('body').classList.add('webp');\n  } else {\n    document.querySelector('body').classList.add('no-webp');\n  }\n}); // Burger\n\nvar burgerBtn = document.querySelector('.header__burger'),\n    burgerMenu = document.querySelector('.header__list');\nburgerBtn.addEventListener('click', function (e) {\n  if (burgerMenu.classList.contains('active')) {\n    burgerMenu.classList.remove('active');\n    burgerBtn.classList.remove('active');\n  } else {\n    burgerMenu.classList.add('active');\n    burgerBtn.classList.add('active');\n  }\n}); // Skills\n\nvar skillsElement = document.querySelectorAll('.skills__element'),\n    skillsItem = document.querySelectorAll('.skills__item'),\n    skillsLoader = document.querySelectorAll('.skills__item-loader'),\n    skillsLeftSide = document.querySelectorAll('.skills__item-left'),\n    skillsRightSide = document.querySelectorAll('.skills__item-right'),\n    skillsSpinner = document.querySelectorAll('.skills__item-spinner'),\n    skillsListChilds = document.querySelectorAll('.skills__list-childs'),\n    skillsChild = document.querySelectorAll('.skills__child');\n\nvar _loop = function _loop(n) {\n  skillsItem[n].addEventListener('mouseover', function (e) {\n    skillsLoader[n].classList.add('active');\n    skillsLeftSide[n].classList.add('active');\n    skillsRightSide[n].classList.add('active');\n    skillsSpinner[n].classList.add('active');\n    setTimeout(function () {\n      if (skillsSpinner[n].classList.contains('active')) {\n        skillsListChilds[n].classList.add('active');\n        skillsChild.forEach(function (i) {\n          i.classList.add('active');\n        });\n      }\n    }, 300);\n  });\n  skillsElement[n].addEventListener('mouseleave', function (e) {\n    skillsLoader[n].classList.remove('active');\n    skillsLeftSide[n].classList.remove('active');\n    skillsRightSide[n].classList.remove('active');\n    skillsSpinner[n].classList.remove('active');\n    setTimeout(function () {\n      skillsChild.forEach(function (i) {\n        i.classList.remove('active');\n      });\n      setTimeout(function () {\n        skillsListChilds[n].classList.remove('active');\n      }, 150);\n    }, 300);\n  });\n};\n\nfor (var n = 0; n < skillsItem.length; n++) {\n  _loop(n);\n} // Contact\n\n\nvar contactBtn = document.querySelector('.contact__form'),\n    contactWindow = document.querySelector('.contact__modal');\n\ncontactBtn.onsubmit = function () {\n  contactWindow.classList.add('active');\n  setTimeout(function () {\n    contactWindow.classList.remove('active');\n  }, 6000);\n  return false;\n};\n\n//# sourceURL=webpack:///./#src/js/script.js?");

 })

 });