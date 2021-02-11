(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_2__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _context_NewContentProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/NewContentProvider */ "./assets/context/NewContentProvider.js");
/* harmony import */ var _components_ContentTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ContentTable */ "./assets/components/ContentTable.js");
/* harmony import */ var _components_LeftSide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/LeftSide */ "./assets/components/LeftSide.js");
/* harmony import */ var _components_Contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Contacts */ "./assets/components/Contacts.js");
/* harmony import */ var _components_RightSide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/RightSide */ "./assets/components/RightSide.js");
/* harmony import */ var _components_PersonForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/PersonForm */ "./assets/components/PersonForm.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Login */ "./assets/components/Login.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }













var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_context_NewContentProvider__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_PersonForm__WEBPACK_IMPORTED_MODULE_9__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ContentTable__WEBPACK_IMPORTED_MODULE_5__.default, null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

if (document.getElementById('left')) {
  react_dom__WEBPACK_IMPORTED_MODULE_3__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_LeftSide__WEBPACK_IMPORTED_MODULE_6__.default, null), document.getElementById('left'));
}

if (document.getElementById('contacts')) {
  react_dom__WEBPACK_IMPORTED_MODULE_3__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_Contacts__WEBPACK_IMPORTED_MODULE_7__.default, null), document.getElementById('contacts'));
}

if (document.getElementById('right')) {
  react_dom__WEBPACK_IMPORTED_MODULE_3__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_RightSide__WEBPACK_IMPORTED_MODULE_8__.default, null), document.getElementById('right'));
}

if (document.getElementById('Login')) {
  react_dom__WEBPACK_IMPORTED_MODULE_3__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_Login__WEBPACK_IMPORTED_MODULE_10__.default, null), document.getElementById('Login'));
}

react_dom__WEBPACK_IMPORTED_MODULE_3__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$"));

/***/ }),

/***/ "./assets/components/Contacts.js":
/*!***************************************!*\
  !*** ./assets/components/Contacts.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function Contacts() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "middle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "topSearch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    id: "search",
    name: "search",
    className: "search white",
    placeholder: "Zoek",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "me"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row pt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col col-2 ml-3 mr-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "profileImage",
    src: "/Images/Profile/pf1.png",
    alt: "Logo Main"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "status"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col col-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "MeName"
  }, "Dylan Spin"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "smallT gray"
  }, "#474637")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-microphone MeIcon gray",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "info heebo topInfo"
  }, "Mute Mic")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-headphones MeIcon gray",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "info heebo topInfo"
  }, "Mute Sound")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-cog MeIcon gray",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "info heebo topInfo"
  }, "Settings"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: "contactLine"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "contactRow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col col-1 ml-3 mr-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-user icon",
    "aria-hidden": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "name"
  }, "Vrienden")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "contactRow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col col-1 ml-3 mr-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-calendar-o",
    "aria-hidden": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "name"
  }, "Agenda")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    className: "BerichText mt-4 mb-2 ml-4"
  }, "Berichten :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "contactRow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row pt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col col-1 ml-3 mr-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "profileImage",
    src: "/Images/Profile/pf1.png",
    alt: "Logo Main"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "status"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "name pt-03"
  }, "Dylan Spin")))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contacts);

/***/ }),

/***/ "./assets/components/ContentTable.js":
/*!*******************************************!*\
  !*** ./assets/components/ContentTable.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_NewContentProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/NewContentProvider */ "./assets/context/NewContentProvider.js");



function ContentTable() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_NewContentProvider__WEBPACK_IMPORTED_MODULE_1__.NewContent);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Table komt hier", context.FirstName);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentTable);

/***/ }),

/***/ "./assets/components/LeftSide.js":
/*!***************************************!*\
  !*** ./assets/components/LeftSide.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LeftSide() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "group m-3 first"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "circle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "mainImage",
    src: "/Images/logo.png",
    alt: "Logo Main"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: "leftLine"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "group m-3 blue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "circle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "group m-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "circle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "groupImage",
    src: "/Images/Profile/pf1.png",
    alt: "Logo Main"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "group m-3 add"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "circle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-plus groupIcon",
    "aria-hidden": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "group m-3 add"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "circle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-compass groupIcon",
    "aria-hidden": "true"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeftSide);

/***/ }),

/***/ "./assets/components/Login.js":
/*!************************************!*\
  !*** ./assets/components/Login.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function Login() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "vak"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row p-2 ml-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col col-6 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row row-3 text-center white mb-4 ml-3 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "welkom Bij Crud Discord"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    className: "d-inline ml-3 gray"
  }, "Welkom Terug")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row row-9 ml-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "gray"
  }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    id: "Username",
    name: "Username",
    className: "mb-2 loginInput",
    placeholder: "Username",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "gray"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "password",
    id: "Password",
    name: "Password",
    className: "loginInput",
    placeholder: "Password",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    className: "forgot"
  }, "Wachtwoord Vergeten"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "submit",
    id: "Login",
    name: "Login",
    className: "mb-2 mt-4 loginInput blue white p-1",
    value: "Login",
    required: true
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "qrCode",
    src: "/Images/QR.png",
    alt: "Logo Main"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "ocean"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "wave"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "wave"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./assets/components/Message.js":
/*!**************************************!*\
  !*** ./assets/components/Message.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Message = /*#__PURE__*/function (_React$Component) {
  _inherits(Message, _React$Component);

  var _super = _createSuper(Message);

  function Message(props) {
    var _this;

    _classCallCheck(this, Message);

    _this = _super.call(this, props);
    _this.state = {
      name: "Dylan Spin",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed lectus eu justo malesuada congue. Proin blandit, erat ac tempor semper",
      date: "11-2-2021 14:40",
      image: ""
    };
    return _this;
  }

  _createClass(Message, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: "message white heebo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("img", {
        className: "messageImage",
        src: "/Images/Profile/pf1.png",
        alt: "Logo Main"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: "messageIfo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h5", {
        className: "d-inline"
      }, this.state.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
        className: "smallT d-inline ml-3 gray"
      }, this.state.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: " messageText dWhite"
      }, this.state.message)));
    }
  }]);

  return Message;
}(react__WEBPACK_IMPORTED_MODULE_3__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);

/***/ }),

/***/ "./assets/components/PersonForm.js":
/*!*****************************************!*\
  !*** ./assets/components/PersonForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PersonForm() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "registerForm m-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "FirstName",
    className: "sr-only"
  }, "FirstName"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    id: "FirstName",
    className: "form-control",
    placeholder: "FirstName",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "LastName",
    className: "sr-only"
  }, "LastName"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    id: "LastName",
    className: "form-control",
    placeholder: "LastName",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "inputEmail",
    className: "sr-only"
  }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "email",
    id: "inputEmail",
    className: "form-control",
    placeholder: "Email address",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "Password",
    className: "sr-only"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "password",
    id: "Password",
    className: "form-control",
    placeholder: "Password",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "RepeatPassword",
    className: "sr-only"
  }, "Repeat Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "password",
    id: "RepeatPassword",
    className: "form-control",
    placeholder: "Password",
    required: true
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonForm);

/***/ }),

/***/ "./assets/components/RightSide.js":
/*!****************************************!*\
  !*** ./assets/components/RightSide.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Message */ "./assets/components/Message.js");



function RightSide() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "topHeader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "versions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "leftHeader pt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "gray d-inline ml-3"
  }, "@"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "white d-inline ml-1 "
  }, "Dylan Spin")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "RightHeader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-phone MeIcon gray ml-3",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "info heebo bottomInfo"
  }, "Start Spraakoproep")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-video-camera MeIcon gray ml-4",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "info heebo bottomInfo"
  }, "Start Videogesprek")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-thumb-tack MeIcon gray ml-4",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "info heebo bottomInfo"
  }, "Vast gemaakte berichten")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-user MeIcon gray ml-4",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "info heebo bottomInfo"
  }, "Nodig vrienden uit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-question-circle MeIcon gray ml-4",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "info heebo bottomInfo"
  }, "Hulp")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "versions"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "messages"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Message__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Message__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Message__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Message__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Message__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Message__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Message__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Message__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Message__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Message__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Message__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Message__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Message__WEBPACK_IMPORTED_MODULE_1__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "writeBar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col col-11 mt-1 ml-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-plus-circle barIcon m-1 mr-2 gray",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    className: "barInput white",
    type: "text",
    id: "message",
    name: "message",
    placeholder: "Bericht versturen",
    rows: "1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-file-video-o barIcon m-1 mr-3 gray",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-smile-o barIcon m-1 mr-2 gray",
    "aria-hidden": "true"
  })))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RightSide);

/***/ }),

/***/ "./assets/context/NewContentProvider.js":
/*!**********************************************!*\
  !*** ./assets/context/NewContentProvider.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewContent": () => (/* binding */ NewContent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var NewContent = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();

var NewContentProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(NewContentProvider, _React$Component);

  var _super = _createSuper(NewContentProvider);

  function NewContentProvider(props) {
    var _this;

    _classCallCheck(this, NewContentProvider);

    _this = _super.call(this, props);
    _this.state = {
      FirstName: "Dylan",
      LastName: "Spin",
      Age: "18",
      email: "dylanspin100@hotmail.com"
    };
    return _this;
  }

  _createClass(NewContentProvider, [{
    key: "createList",
    value: function createList() {}
  }, {
    key: "showList",
    value: function showList() {}
  }, {
    key: "updateList",
    value: function updateList() {}
  }, {
    key: "deleteList",
    value: function deleteList() {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(NewContent.Provider, {
        value: _objectSpread(_objectSpread({}, this.state), {}, {
          createList: this.createList.bind(this),
          updateList: this.updateList.bind(this),
          deleteList: this.deleteList.bind(this)
        })
      }, this.props.children);
    }
  }]);

  return NewContentProvider;
}(react__WEBPACK_IMPORTED_MODULE_3__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewContentProvider);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
0,[["./assets/app.js","runtime","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_fu-3a0fb7"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db250YWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db250ZW50VGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTGVmdFNpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9QZXJzb25Gb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1JpZ2h0U2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udGV4dC9OZXdDb250ZW50UHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlYWN0RE9NIiwiYXBwIiwic3RhcnRTdGltdWx1c0FwcCIsInJlcXVpcmUiLCJDb250YWN0cyIsIkNvbnRlbnRUYWJsZSIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTmV3Q29udGVudCIsIkZpcnN0TmFtZSIsIkxlZnRTaWRlIiwiTG9naW4iLCJNZXNzYWdlIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJtZXNzYWdlIiwiZGF0ZSIsImltYWdlIiwiUGVyc29uRm9ybSIsIlJpZ2h0U2lkZSIsImNyZWF0ZUNvbnRleHQiLCJOZXdDb250ZW50UHJvdmlkZXIiLCJMYXN0TmFtZSIsIkFnZSIsImVtYWlsIiwiY3JlYXRlTGlzdCIsImJpbmQiLCJ1cGRhdGVMaXN0IiwiZGVsZXRlTGlzdCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBJOzs7Ozs7Ozs7Ozs7Ozs7QUN0QkEsaUVBQWU7QUFDZixDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREQsdUJBQXVCLDJCQUEyQiwyRUFBMkUsa0NBQWtDLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxrQ0FBa0MsOEhBQThILEdBQUcsRUFBRSxxQkFBcUI7O0FBRWpVO0FBQ0E7O0FBRXZELGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJOLDBDQUEwQywrREFBK0QsMkVBQTJFLEVBQUUseUVBQXlFLGVBQWUsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQ7O0FBRS9YLGdDQUFnQyw0RUFBNEUsaUJBQWlCLFVBQVUsR0FBRyw4QkFBOEI7O0FBRXhLLGdDQUFnQyw2REFBNkQseUNBQXlDLDhDQUE4QyxpQ0FBaUMsbURBQW1ELHlEQUF5RCxFQUFFLE9BQU8sdUNBQXVDLEVBQUUsaURBQWlELEdBQUc7O0FBRXZhLGlEQUFpRCwwRUFBMEUsYUFBYSxFQUFFLHFDQUFxQzs7QUFFL0ssdUNBQXVDLHVCQUF1Qix1RkFBdUYsRUFBRSxhQUFhOztBQUVwSyxzQ0FBc0Msd0VBQXdFLDBDQUEwQyw4Q0FBOEMsTUFBTSx3RUFBd0UsR0FBRyxhQUFhLEVBQUUsWUFBWSxjQUFjLEVBQUU7O0FBRWxVLDZC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Ozs7V0FFRCxvQkFDQSxDQUVDOzs7V0FFRCxzQkFDQSxDQUVDOzs7V0FFRCxzQkFDQSxDQUVDOzs7V0FFRCxrQkFDQTtBQUNJLDBCQUNJLGlEQUFDLFVBQUQsQ0FBWSxRQUFaO0FBQXFCLGFBQUssa0NBQ25CLEtBQUtYLEtBRGM7QUFFdEJZLG9CQUFVLEVBQUUsS0FBS0EsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FGVTtBQUd0QkMsb0JBQVUsRUFBRSxLQUFLQSxVQUFMLENBQWdCRCxJQUFoQixDQUFxQixJQUFyQixDQUhVO0FBSXRCRSxvQkFBVSxFQUFFLEtBQUtBLFVBQUwsQ0FBZ0JGLElBQWhCLENBQXFCLElBQXJCO0FBSlU7QUFBMUIsU0FNSyxLQUFLZCxLQUFMLENBQVdpQixRQU5oQixDQURKO0FBVUg7Ozs7RUE3QzRCakMsNEM7O0FBZ0RqQyxpRUFBZXlCLGtCQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BEQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXCI7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cblxudmFyIF9kZWZhdWx0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29udHJvbGxlcikge1xuICBfaW5oZXJpdHMoX2RlZmF1bHQsIF9Db250cm9sbGVyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKF9kZWZhdWx0KTtcblxuICBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKF9kZWZhdWx0LCBbe1xuICAgIGtleTogXCJjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7IF9kZWZhdWx0IGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IE5ld0NvbnRlbnRQcm92aWRlciBmcm9tICcuL2NvbnRleHQvTmV3Q29udGVudFByb3ZpZGVyJztcclxuaW1wb3J0IENvbnRlbnRUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvQ29udGVudFRhYmxlJztcclxuaW1wb3J0IExlZnRTaWRlIGZyb20gJy4vY29tcG9uZW50cy9MZWZ0U2lkZSc7XHJcbmltcG9ydCBDb250YWN0cyBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFjdHMnO1xyXG5pbXBvcnQgUmlnaHRTaWRlIGZyb20gJy4vY29tcG9uZW50cy9SaWdodFNpZGUnO1xyXG5pbXBvcnQgUGVyc29uRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvUGVyc29uRm9ybSc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4nO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgXHJcbntcclxuICAgIHJlbmRlcigpIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxOZXdDb250ZW50UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8UGVyc29uRm9ybT48L1BlcnNvbkZvcm0+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudFRhYmxlPjwvQ29udGVudFRhYmxlPlxyXG4gICAgICAgICAgICA8L05ld0NvbnRlbnRQcm92aWRlcj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKSkgXHJcbntcclxuICAgIFJlYWN0RE9NLnJlbmRlcig8TGVmdFNpZGUvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKSk7XHJcbn1cclxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0cycpKSBcclxue1xyXG4gICAgUmVhY3RET00ucmVuZGVyKDxDb250YWN0cy8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdHMnKSk7XHJcbn1cclxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodCcpKSBcclxue1xyXG4gICAgUmVhY3RET00ucmVuZGVyKDxSaWdodFNpZGUvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0JykpO1xyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvZ2luJykpIFxyXG57XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoPExvZ2luLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdMb2dpbicpKTtcclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC4oanx0KXN4PyQvXHJcbikpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gQ29udGFjdHMoKVxyXG57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInRvcFNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2hcIiBuYW1lPVwic2VhcmNoXCIgY2xhc3NOYW1lPVwic2VhcmNoIHdoaXRlXCIgcGxhY2Vob2xkZXI9XCJab2VrXCIgcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLTIgbWwtMyBtci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZmlsZUltYWdlXCIgc3JjPVwiL0ltYWdlcy9Qcm9maWxlL3BmMS5wbmdcIiBhbHQ9XCJMb2dvIE1haW5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIk1lTmFtZVwiPkR5bGFuIFNwaW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzbWFsbFQgZ3JheVwiPiM0NzQ2Mzc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1pY3JvcGhvbmUgTWVJY29uIGdyYXlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mbyBoZWVibyB0b3BJbmZvXCI+TXV0ZSBNaWM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1oZWFkcGhvbmVzIE1lSWNvbiBncmF5XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gaGVlYm8gdG9wSW5mb1wiPk11dGUgU291bmQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb2cgTWVJY29uIGdyYXlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mbyBoZWVibyB0b3BJbmZvXCI+U2V0dGluZ3M8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImNvbnRhY3RMaW5lXCIvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0Um93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLTEgbWwtMyBtci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXIgaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuYW1lXCI+VnJpZW5kZW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC0xIG1sLTMgbXItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jYWxlbmRhci1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj5BZ2VuZGE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiQmVyaWNoVGV4dCBtdC00IG1iLTIgbWwtNFwiPkJlcmljaHRlbiA6PC9oNj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC0xIG1sLTMgbXItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2ZpbGVJbWFnZVwiIHNyYz1cIi9JbWFnZXMvUHJvZmlsZS9wZjEucG5nXCIgYWx0PVwiTG9nbyBNYWluXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXR1c1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWUgcHQtMDNcIj5EeWxhbiBTcGluPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdHM7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5ld0NvbnRlbnQgfSBmcm9tICcuLi9jb250ZXh0L05ld0NvbnRlbnRQcm92aWRlcic7XHJcblxyXG5mdW5jdGlvbiBDb250ZW50VGFibGUoKVxyXG57XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChOZXdDb250ZW50KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgVGFibGUga29tdCBoaWVyIFxyXG4gICAgICAgICAgICB7IGNvbnRleHQuRmlyc3ROYW1lIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRUYWJsZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gTGVmdFNpZGUoKVxyXG57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIG0tMyBmaXJzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWFpbkltYWdlXCIgc3JjPVwiL0ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIkxvZ28gTWFpblwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJsZWZ0TGluZVwiLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgbS0zIGJsdWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIG0tM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JvdXBJbWFnZVwiIHNyYz1cIi9JbWFnZXMvUHJvZmlsZS9wZjEucG5nXCIgYWx0PVwiTG9nbyBNYWluXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgbS0zIGFkZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXMgZ3JvdXBJY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCBtLTMgYWRkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29tcGFzcyBncm91cEljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVmdFNpZGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIExvZ2luKClcclxue1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZha1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcC0yIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtNiBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0zIHRleHQtY2VudGVyIHdoaXRlIG1iLTQgbWwtMyBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+d2Vsa29tIEJpaiBDcnVkIERpc2NvcmQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImQtaW5saW5lIG1sLTMgZ3JheVwiPldlbGtvbSBUZXJ1ZzwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctOSBtbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncmF5XCI+VXNlcm5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJVc2VybmFtZVwiIG5hbWU9XCJVc2VybmFtZVwiIGNsYXNzTmFtZT1cIm1iLTIgbG9naW5JbnB1dFwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiAgcmVxdWlyZWQvPjxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdyYXlcIj5QYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJQYXNzd29yZFwiIG5hbWU9XCJQYXNzd29yZFwiIGNsYXNzTmFtZT1cImxvZ2luSW5wdXRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9yZ290XCI+V2FjaHR3b29yZCBWZXJnZXRlbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGlkPVwiTG9naW5cIiBuYW1lPVwiTG9naW5cIiBjbGFzc05hbWU9XCJtYi0yIG10LTQgbG9naW5JbnB1dCBibHVlIHdoaXRlIHAtMVwiIHZhbHVlPVwiTG9naW5cIiByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIHFyQ29kZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJxckNvZGVcIiBzcmM9XCIvSW1hZ2VzL1FSLnBuZ1wiIGFsdD1cIkxvZ28gTWFpblwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9jZWFuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2F2ZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndhdmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSBcclxuICAgIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdG5hbWUgOiBcIkR5bGFuIFNwaW5cIixcclxuXHRcdFx0bWVzc2FnZSA6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTnVsbGFtIHNlZCBsZWN0dXMgZXUganVzdG8gbWFsZXN1YWRhIGNvbmd1ZS4gUHJvaW4gYmxhbmRpdCwgZXJhdCBhYyB0ZW1wb3Igc2VtcGVyXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMTEtMi0yMDIxIDE0OjQwXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiAgICByZW5kZXIoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2Ugd2hpdGUgaGVlYm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1lc3NhZ2VJbWFnZVwiIHNyYz1cIi9JbWFnZXMvUHJvZmlsZS9wZjEucG5nXCIgYWx0PVwiTG9nbyBNYWluXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZUlmb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZC1pbmxpbmVcIj57dGhpcy5zdGF0ZS5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNtYWxsVCBkLWlubGluZSBtbC0zIGdyYXlcIj57dGhpcy5zdGF0ZS5kYXRlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtZXNzYWdlVGV4dCBkV2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBQZXJzb25Gb3JtKClcclxue1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicmVnaXN0ZXJGb3JtIG0tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiRmlyc3ROYW1lXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPkZpcnN0TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJGaXJzdE5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkZpcnN0TmFtZVwiIHJlcXVpcmVkLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJMYXN0TmFtZVwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5MYXN0TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJMYXN0TmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiTGFzdE5hbWVcIiByZXF1aXJlZC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRFbWFpbFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJpbnB1dEVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCIgcmVxdWlyZWQvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlBhc3N3b3JkXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJQYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZXF1aXJlZC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiUmVwZWF0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UmVwZWF0IFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJSZXBlYXRQYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uRm9ybTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL01lc3NhZ2UnO1xyXG5cclxuZnVuY3Rpb24gUmlnaHRTaWRlKClcclxue1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wSGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnNpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0SGVhZGVyIHB0LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImdyYXkgZC1pbmxpbmUgbWwtM1wiPkA8L2gzPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIndoaXRlIGQtaW5saW5lIG1sLTEgXCI+RHlsYW4gU3BpbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSaWdodEhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1waG9uZSBNZUljb24gZ3JheSBtbC0zXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gaGVlYm8gYm90dG9tSW5mb1wiPlN0YXJ0IFNwcmFha29wcm9lcDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXZpZGVvLWNhbWVyYSBNZUljb24gZ3JheSBtbC00XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gaGVlYm8gYm90dG9tSW5mb1wiPlN0YXJ0IFZpZGVvZ2VzcHJlazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRodW1iLXRhY2sgTWVJY29uIGdyYXkgbWwtNFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIGhlZWJvIGJvdHRvbUluZm9cIj5WYXN0IGdlbWFha3RlIGJlcmljaHRlbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXIgTWVJY29uIGdyYXkgbWwtNFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIGhlZWJvIGJvdHRvbUluZm9cIj5Ob2RpZyB2cmllbmRlbiB1aXQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1xdWVzdGlvbi1jaXJjbGUgTWVJY29uIGdyYXkgbWwtNFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIGhlZWJvIGJvdHRvbUluZm9cIj5IdWxwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJzaW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlPjwvTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZT48L01lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2U+PC9NZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlPjwvTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZT48L01lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2U+PC9NZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlPjwvTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZT48L01lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2U+PC9NZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlPjwvTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZT48L01lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2U+PC9NZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlPjwvTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cml0ZUJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLTExIG10LTEgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXMtY2lyY2xlIGJhckljb24gbS0xIG1yLTIgZ3JheVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiYmFySW5wdXQgd2hpdGVcIiB0eXBlPVwidGV4dFwiIGlkPVwibWVzc2FnZVwiIG5hbWU9XCJtZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJCZXJpY2h0IHZlcnN0dXJlblwiIHJvd3M9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZS12aWRlby1vIGJhckljb24gbS0xIG1yLTMgZ3JheVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zbWlsZS1vIGJhckljb24gbS0xIG1yLTIgZ3JheVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSaWdodFNpZGU7IiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgTmV3Q29udGVudCA9IGNyZWF0ZUNvbnRleHQoKTsgXHJcblxyXG5jbGFzcyBOZXdDb250ZW50UHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSBcclxuICAgIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgRmlyc3ROYW1lOiBcIkR5bGFuXCIsXHJcbiAgICAgICAgICAgIExhc3ROYW1lOiBcIlNwaW5cIixcclxuICAgICAgICAgICAgQWdlOiBcIjE4XCIsXHJcbiAgICAgICAgICAgIGVtYWlsOiBcImR5bGFuc3BpbjEwMEBob3RtYWlsLmNvbVwiLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNyZWF0ZUxpc3QoKVxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93TGlzdCgpXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUxpc3QoKVxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVMaXN0KClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TmV3Q29udGVudC5Qcm92aWRlciB2YWx1ZSA9IHt7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlTGlzdDogdGhpcy5jcmVhdGVMaXN0LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVMaXN0OiB0aGlzLnVwZGF0ZUxpc3QuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUxpc3Q6IHRoaXMuZGVsZXRlTGlzdC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L05ld0NvbnRlbnQuUHJvdmlkZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdDb250ZW50UHJvdmlkZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==