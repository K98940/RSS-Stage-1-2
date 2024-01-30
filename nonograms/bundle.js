/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/buttons/cavein/btnCavein.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/buttons/cavein/btnCavein.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.btn_container {
  container-type: inline-size;
  width: 100%;
  height: 100%;
}

.btn_cavein {
  width: 100%;
  height: 100%;
  padding: 0.2rem;

  border-top: 3px solid rgb(200, 200, 200);
  border-right: 3px solid rgb(100, 100, 100);
  border-bottom: 3px solid rgb(70, 70, 70);
  border-left: 3px solid rgb(170, 170, 170);
  background-color: transparent;

  & svg {
    width: clamp(0px, 100%, 2rem);
    aspect-ratio: 1/1;
    transition-duration: 200ms;
    fill: var(--border-color);

    animation-name: roll;
    animation-duration: 60s;
    animation-delay: 60s;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
  }
}

@keyframes roll {
  0% {
    fill: rgb(var(--color-warning));
    transform: rotateY(360deg);
  }
  5% {
    fill: rgb(var(--color-warning));
    transform: rotateY(0deg);
  }
  10% {
    fill: var(--border-color);
  }
  100% {
  }
}

@media (hover: hover) {
  .btn_cavein:hover {
    cursor: pointer;

    & svg {
      fill: rgb(var(--color-warning));
      filter: drop-shadow(0.1rem 0.1rem 0.1rem rgb(var(--color-warning-shadow)));
    }
  }
}

@container (max-width: 2rem) {
  .btn_cavein {
    & svg {
        display: none;
      }
  }

  .btn_cavein:hover {
    background-color: rgb(var(--color-warning));
  }
}`, "",{"version":3,"sources":["webpack://./src/components/buttons/cavein/btnCavein.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;;EAEf,wCAAwC;EACxC,0CAA0C;EAC1C,wCAAwC;EACxC,yCAAyC;EACzC,6BAA6B;;EAE7B;IACE,6BAA6B;IAC7B,iBAAiB;IACjB,0BAA0B;IAC1B,yBAAyB;;IAEzB,oBAAoB;IACpB,uBAAuB;IACvB,oBAAoB;IACpB,mCAAmC;IACnC,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,+BAA+B;IAC/B,0BAA0B;EAC5B;EACA;IACE,+BAA+B;IAC/B,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;EACA;AACF;;AAEA;EACE;IACE,eAAe;;IAEf;MACE,+BAA+B;MAC/B,0EAA0E;IAC5E;EACF;AACF;;AAEA;EACE;IACE;QACI,aAAa;MACf;EACJ;;EAEA;IACE,2CAA2C;EAC7C;AACF","sourcesContent":[".btn_container {\r\n  container-type: inline-size;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.btn_cavein {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0.2rem;\r\n\r\n  border-top: 3px solid rgb(200, 200, 200);\r\n  border-right: 3px solid rgb(100, 100, 100);\r\n  border-bottom: 3px solid rgb(70, 70, 70);\r\n  border-left: 3px solid rgb(170, 170, 170);\r\n  background-color: transparent;\r\n\r\n  & svg {\r\n    width: clamp(0px, 100%, 2rem);\r\n    aspect-ratio: 1/1;\r\n    transition-duration: 200ms;\r\n    fill: var(--border-color);\r\n\r\n    animation-name: roll;\r\n    animation-duration: 60s;\r\n    animation-delay: 60s;\r\n    animation-iteration-count: infinite;\r\n    animation-fill-mode: none;\r\n  }\r\n}\r\n\r\n@keyframes roll {\r\n  0% {\r\n    fill: rgb(var(--color-warning));\r\n    transform: rotateY(360deg);\r\n  }\r\n  5% {\r\n    fill: rgb(var(--color-warning));\r\n    transform: rotateY(0deg);\r\n  }\r\n  10% {\r\n    fill: var(--border-color);\r\n  }\r\n  100% {\r\n  }\r\n}\r\n\r\n@media (hover: hover) {\r\n  .btn_cavein:hover {\r\n    cursor: pointer;\r\n\r\n    & svg {\r\n      fill: rgb(var(--color-warning));\r\n      filter: drop-shadow(0.1rem 0.1rem 0.1rem rgb(var(--color-warning-shadow)));\r\n    }\r\n  }\r\n}\r\n\r\n@container (max-width: 2rem) {\r\n  .btn_cavein {\r\n    & svg {\r\n        display: none;\r\n      }\r\n  }\r\n\r\n  .btn_cavein:hover {\r\n    background-color: rgb(var(--color-warning));\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/buttons/load/btnLoad.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/buttons/load/btnLoad.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/buttons/random/btnRandom.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/buttons/random/btnRandom.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/buttons/reset/btnReset.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/buttons/reset/btnReset.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/buttons/save/btnSave.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/buttons/save/btnSave.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/footer/footer.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/footer/footer.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.footer {
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/components/footer/footer.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX","sourcesContent":[".footer {\r\n  display: flex;\r\n  flex: 0 0 auto;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/gameSelector/gameSelector.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/gameSelector/gameSelector.css ***!
  \********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.header {
  flex: 0 0 auto;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem 0.5rem;
}

.game-select {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.game-select_fieldset {
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(1rem, 100%, 25rem);
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);

  & .fieldset_label {
    margin-right:1rem;
  }

  & .fieldset_legend {
    margin: 0 auto;
    padding: 0 1rem;
  }
}

.game-select_selector {
  color: var(--common-text-color);
  background-color: var(--blocks-background);
}`, "",{"version":3,"sources":["webpack://./src/components/gameSelector/gameSelector.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,WAAW;EACX,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,+BAA+B;EAC/B,YAAY;EACZ,oBAAoB;EACpB,mCAAmC;;EAEnC;IACE,iBAAiB;EACnB;;EAEA;IACE,cAAc;IACd,eAAe;EACjB;AACF;;AAEA;EACE,+BAA+B;EAC/B,0CAA0C;AAC5C","sourcesContent":[".header {\r\n  flex: 0 0 auto;\r\n  width: 100%;\r\n  border-bottom: 1px solid var(--border-color);\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding: 0 1rem 0.5rem;\r\n}\r\n\r\n.game-select {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.game-select_fieldset {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: clamp(1rem, 100%, 25rem);\r\n  gap: 0.25rem;\r\n  padding: 0.5rem 1rem;\r\n  border-radius: var(--border-radius);\r\n\r\n  & .fieldset_label {\r\n    margin-right:1rem;\r\n  }\r\n\r\n  & .fieldset_legend {\r\n    margin: 0 auto;\r\n    padding: 0 1rem;\r\n  }\r\n}\r\n\r\n.game-select_selector {\r\n  color: var(--common-text-color);\r\n  background-color: var(--blocks-background);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/plotContainer/cell/cell.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/plotContainer/cell/cell.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cell {
  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;
  background-color: var(--blocks-background);
}

.cell[role="game"] {
  background-color: var(--cell-background);
  color: rgba(0, 0, 0, var(--opacity-cell-text));
  border: 1px dashed var(--cell-border-color);
}

.cell_fill[role="game"] {
  background-color: var(--cell-background-fill);
  border: none;
}

.cell[role="empty"] {
  background-color: var(--blocks-background);
  grid-row: 1 / span var(--row-count);
  grid-column: 1 / span var(--column-count);
}

.cell[row] {
  border-bottom: 2px solid var(--border-color);
}

.cell[first-row] {
  border-top: 2px solid var(--border-color);
}

.cell[col] {
  border-right: 2px solid var(--border-color);
}

.cell[first-col] {
  border-left: 2px solid var(--border-color);
}

.cell_checked[role="game"] {
  position: relative;
}

.cell_checked[role="game"]::after,
.cell_checked[role="game"]::before {
  content: '';
  position: absolute;
  display: block;
  width: 120%;
  height: 1px;
  inset: 0;
  top: 45%;
  left: -10%;
  transform: rotateZ(45deg);
  background-color: black;
}

.cell_checked[role="game"]::before {
  transform: rotateZ(-45deg);
}

@media (hover: hover)  {
.cell[role="game"]:hover {
    cursor: pointer;
    filter: invert(var(--hover-invert));
  }
}
`, "",{"version":3,"sources":["webpack://./src/components/plotContainer/cell/cell.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,iBAAiB;EACjB,0CAA0C;AAC5C;;AAEA;EACE,wCAAwC;EACxC,8CAA8C;EAC9C,2CAA2C;AAC7C;;AAEA;EACE,6CAA6C;EAC7C,YAAY;AACd;;AAEA;EACE,0CAA0C;EAC1C,mCAAmC;EACnC,yCAAyC;AAC3C;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,WAAW;EACX,QAAQ;EACR,QAAQ;EACR,UAAU;EACV,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;AACA;IACI,eAAe;IACf,mCAAmC;EACrC;AACF","sourcesContent":[".cell {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  user-select: none;\r\n  background-color: var(--blocks-background);\r\n}\r\n\r\n.cell[role=\"game\"] {\r\n  background-color: var(--cell-background);\r\n  color: rgba(0, 0, 0, var(--opacity-cell-text));\r\n  border: 1px dashed var(--cell-border-color);\r\n}\r\n\r\n.cell_fill[role=\"game\"] {\r\n  background-color: var(--cell-background-fill);\r\n  border: none;\r\n}\r\n\r\n.cell[role=\"empty\"] {\r\n  background-color: var(--blocks-background);\r\n  grid-row: 1 / span var(--row-count);\r\n  grid-column: 1 / span var(--column-count);\r\n}\r\n\r\n.cell[row] {\r\n  border-bottom: 2px solid var(--border-color);\r\n}\r\n\r\n.cell[first-row] {\r\n  border-top: 2px solid var(--border-color);\r\n}\r\n\r\n.cell[col] {\r\n  border-right: 2px solid var(--border-color);\r\n}\r\n\r\n.cell[first-col] {\r\n  border-left: 2px solid var(--border-color);\r\n}\r\n\r\n.cell_checked[role=\"game\"] {\r\n  position: relative;\r\n}\r\n\r\n.cell_checked[role=\"game\"]::after,\r\n.cell_checked[role=\"game\"]::before {\r\n  content: '';\r\n  position: absolute;\r\n  display: block;\r\n  width: 120%;\r\n  height: 1px;\r\n  inset: 0;\r\n  top: 45%;\r\n  left: -10%;\r\n  transform: rotateZ(45deg);\r\n  background-color: black;\r\n}\r\n\r\n.cell_checked[role=\"game\"]::before {\r\n  transform: rotateZ(-45deg);\r\n}\r\n\r\n@media (hover: hover)  {\r\n.cell[role=\"game\"]:hover {\r\n    cursor: pointer;\r\n    filter: invert(var(--hover-invert));\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/plotContainer/plotContainer.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/plotContainer/plotContainer.css ***!
  \**********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `  .game-container {
    --columns-count: 20;

    display: grid;
    grid-template-columns: repeat(var(--columns-count), 1fr);
    grid-template-rows: repeat(5, auto);

    width: clamp(0px, 96%, calc(1.5rem * var(--columns-count)));
    margin: 0 auto;
    aspect-ratio: 1/1;

    border: 2px solid var(--border-color);
    border-bottom: none;
    border-right: none;
    background-color: rgb(200, 200, 200);
  }
`, "",{"version":3,"sources":["webpack://./src/components/plotContainer/plotContainer.css"],"names":[],"mappings":"EAAE;IACE,mBAAmB;;IAEnB,aAAa;IACb,wDAAwD;IACxD,mCAAmC;;IAEnC,2DAA2D;IAC3D,cAAc;IACd,iBAAiB;;IAEjB,qCAAqC;IACrC,mBAAmB;IACnB,kBAAkB;IAClB,oCAAoC;EACtC","sourcesContent":["  .game-container {\r\n    --columns-count: 20;\r\n\r\n    display: grid;\r\n    grid-template-columns: repeat(var(--columns-count), 1fr);\r\n    grid-template-rows: repeat(5, auto);\r\n\r\n    width: clamp(0px, 96%, calc(1.5rem * var(--columns-count)));\r\n    margin: 0 auto;\r\n    aspect-ratio: 1/1;\r\n\r\n    border: 2px solid var(--border-color);\r\n    border-bottom: none;\r\n    border-right: none;\r\n    background-color: rgb(200, 200, 200);\r\n  }\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/schemeSelector/schemeSelector.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/schemeSelector/schemeSelector.css ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.scheme-container {
  display: flex;
  flex: 0 0 auto;
  gap: 0.5rem;
  padding: 0.5rem 1rem;

  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}

.scheme-select {
  color: var(--common-text-color);
  background-color: var(--blocks-background);
}
`, "",{"version":3,"sources":["webpack://./src/components/schemeSelector/schemeSelector.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,cAAc;EACd,WAAW;EACX,oBAAoB;;EAEpB,mCAAmC;EACnC,qCAAqC;AACvC;;AAEA;EACE,+BAA+B;EAC/B,0CAA0C;AAC5C","sourcesContent":[".scheme-container {\r\n  display: flex;\r\n  flex: 0 0 auto;\r\n  gap: 0.5rem;\r\n  padding: 0.5rem 1rem;\r\n\r\n  border-radius: var(--border-radius);\r\n  border: 1px solid var(--border-color);\r\n}\r\n\r\n.scheme-select {\r\n  color: var(--common-text-color);\r\n  background-color: var(--blocks-background);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/score/score.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/score/score.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dialog {
  left: -10rem;
  border: none;
}

.dialog:has(div.score_show) {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100dvh;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.5);
}

.container {
  --w : clamp(10rem, 90%, 25rem);
  position: fixed;
  z-index: 2;
  top: 2rem;
  left: 100%;
  width: var(--w);
  min-height: 10rem;

  color: var(--common-text-color);
  border-radius: 0.5rem;
  background-color: var(--blocks-background);
  border: 2px solid var(--border-color);
  filter: drop-shadow(0.5rem 0.5rem 0.5rem var(--score-shadow));
  transition-delay: 100ms;
  transition-duration: 200ms;
}

.container::before {
  content: '⬌';
  position: absolute;
  z-index: 1;
  top: 1rem;
  left: -2.1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 5px;
  width: 2rem;
  height: 3rem;

  font-size: 1.5rem;
  border-radius: 0.5rem;
  background-color: var(--blocks-background);
  border: 2px solid var(--border-color);
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

@media (hover) {
  .container:hover {
    cursor: pointer;
  }
}

.score_h1 {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  text-align: center;
}

.score_show {
  transform: translateX(-100%);
  pointer-events: all;
}

.container__records {
  display: grid;
  grid-template-columns: 3fr 1fr 2fr;
  margin: 1rem;
  gap: 0.2rem;

  min-height: 1rem;

  border: 1ps solid var(--border-color);
  border-radius: 0.3rem;

  & div:nth-child(-n+3) {
    border-bottom: 1px solid var(--border-color);
  }

  & div:nth-child(3n-1) {
    justify-self: center;
  }

  & div:nth-child(3n) {
    justify-self: end;
  }
}

.record_last-game {
  background-color: var(--score-lastgame);
}`, "",{"version":3,"sources":["webpack://./src/components/score/score.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,WAAW;EACX,WAAW;EACX,cAAc;EACd,QAAQ;;EAER,oCAAoC;AACtC;;AAEA;EACE,8BAA8B;EAC9B,eAAe;EACf,UAAU;EACV,SAAS;EACT,UAAU;EACV,eAAe;EACf,iBAAiB;;EAEjB,+BAA+B;EAC/B,qBAAqB;EACrB,0CAA0C;EAC1C,qCAAqC;EACrC,6DAA6D;EAC7D,uBAAuB;EACvB,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,mBAAmB;EACnB,WAAW;EACX,YAAY;;EAEZ,iBAAiB;EACjB,qBAAqB;EACrB,0CAA0C;EAC1C,qCAAqC;EACrC,kBAAkB;EAClB,0BAA0B;EAC1B,6BAA6B;AAC/B;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;EAC5B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,YAAY;EACZ,WAAW;;EAEX,gBAAgB;;EAEhB,qCAAqC;EACrC,qBAAqB;;EAErB;IACE,4CAA4C;EAC9C;;EAEA;IACE,oBAAoB;EACtB;;EAEA;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE,uCAAuC;AACzC","sourcesContent":[".dialog {\r\n  left: -10rem;\r\n  border: none;\r\n}\r\n\r\n.dialog:has(div.score_show) {\r\n  position: fixed;\r\n  z-index: 10;\r\n  width: 100%;\r\n  height: 100dvh;\r\n  inset: 0;\r\n\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.container {\r\n  --w : clamp(10rem, 90%, 25rem);\r\n  position: fixed;\r\n  z-index: 2;\r\n  top: 2rem;\r\n  left: 100%;\r\n  width: var(--w);\r\n  min-height: 10rem;\r\n\r\n  color: var(--common-text-color);\r\n  border-radius: 0.5rem;\r\n  background-color: var(--blocks-background);\r\n  border: 2px solid var(--border-color);\r\n  filter: drop-shadow(0.5rem 0.5rem 0.5rem var(--score-shadow));\r\n  transition-delay: 100ms;\r\n  transition-duration: 200ms;\r\n}\r\n\r\n.container::before {\r\n  content: '⬌';\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 1rem;\r\n  left: -2.1rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  padding-bottom: 5px;\r\n  width: 2rem;\r\n  height: 3rem;\r\n\r\n  font-size: 1.5rem;\r\n  border-radius: 0.5rem;\r\n  background-color: var(--blocks-background);\r\n  border: 2px solid var(--border-color);\r\n  border-right: none;\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n@media (hover) {\r\n  .container:hover {\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.score_h1 {\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1.2rem;\r\n  text-align: center;\r\n}\r\n\r\n.score_show {\r\n  transform: translateX(-100%);\r\n  pointer-events: all;\r\n}\r\n\r\n.container__records {\r\n  display: grid;\r\n  grid-template-columns: 3fr 1fr 2fr;\r\n  margin: 1rem;\r\n  gap: 0.2rem;\r\n\r\n  min-height: 1rem;\r\n\r\n  border: 1ps solid var(--border-color);\r\n  border-radius: 0.3rem;\r\n\r\n  & div:nth-child(-n+3) {\r\n    border-bottom: 1px solid var(--border-color);\r\n  }\r\n\r\n  & div:nth-child(3n-1) {\r\n    justify-self: center;\r\n  }\r\n\r\n  & div:nth-child(3n) {\r\n    justify-self: end;\r\n  }\r\n}\r\n\r\n.record_last-game {\r\n  background-color: var(--score-lastgame);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/timer/timer.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/timer/timer.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.timer {
  width: auto;
}`, "",{"version":3,"sources":["webpack://./src/components/timer/timer.css"],"names":[],"mappings":"AAAA;EACE,WAAW;AACb","sourcesContent":[".timer {\r\n  width: auto;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --opacity-cell-text: 0;
  --hover-invert: 0.2;

  --body-bacground: rgb(230, 255, 230);
  --blocks-background: rgb(231, 255, 255);

  --cell-background: rgb(240, 240, 240);
  --cell-background-fill: rgb(0, 0, 0);
  --cell-border-color: rgb(200, 200, 200);

  --border-color: rgb(0, 0, 0);
  --score-lastgame: rgb(165, 245, 140);
  --common-text-color: rgb(0, 0, 0);
  --score-shadow: rgb(125, 125, 125);

  --color-warning: 255, 80, 80;
  --color-warning-shadow: 0, 0, 0;

  --border-radius: 0.2rem;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  height: 100dvh;
}

.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;

  height: 100%;

  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: var(--common-text-color);;
  background-color: var(--body-bacground);
}

.main {
  flex: 1 0 auto;
}

.button {
  color: var(--common-text-color);
  padding: 0.5rem;
  border-radius: 0.3rem;
  background-color: var(--blocks-background);
  font-weight: bold;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  user-select: none;
}

@media (hover: hover) {
  .button:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
}

.gameover {
  pointer-events: none;
  filter: blur(1px) opacity(0.8);
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,mBAAmB;;EAEnB,oCAAoC;EACpC,uCAAuC;;EAEvC,qCAAqC;EACrC,oCAAoC;EACpC,uCAAuC;;EAEvC,4BAA4B;EAC5B,oCAAoC;EACpC,iCAAiC;EACjC,kCAAkC;;EAElC,4BAA4B;EAC5B,+BAA+B;;EAE/B,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,aAAa;;EAEb,YAAY;;EAEZ,wEAAwE;EACxE,+BAA+B;EAC/B,uCAAuC;AACzC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,+BAA+B;EAC/B,eAAe;EACf,qBAAqB;EACrB,0CAA0C;EAC1C,iBAAiB;EACjB,qGAAqG;EACrG,iBAAiB;AACnB;;AAEA;EACE;IACE,eAAe;IACf,uBAAuB;EACzB;AACF;;AAEA;EACE,oBAAoB;EACpB,8BAA8B;AAChC","sourcesContent":[":root {\r\n  --opacity-cell-text: 0;\r\n  --hover-invert: 0.2;\r\n\r\n  --body-bacground: rgb(230, 255, 230);\r\n  --blocks-background: rgb(231, 255, 255);\r\n\r\n  --cell-background: rgb(240, 240, 240);\r\n  --cell-background-fill: rgb(0, 0, 0);\r\n  --cell-border-color: rgb(200, 200, 200);\r\n\r\n  --border-color: rgb(0, 0, 0);\r\n  --score-lastgame: rgb(165, 245, 140);\r\n  --common-text-color: rgb(0, 0, 0);\r\n  --score-shadow: rgb(125, 125, 125);\r\n\r\n  --color-warning: 255, 80, 80;\r\n  --color-warning-shadow: 0, 0, 0;\r\n\r\n  --border-radius: 0.2rem;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100dvh;\r\n}\r\n\r\n.body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding: 1rem;\r\n\r\n  height: 100%;\r\n\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  color: var(--common-text-color);;\r\n  background-color: var(--body-bacground);\r\n}\r\n\r\n.main {\r\n  flex: 1 0 auto;\r\n}\r\n\r\n.button {\r\n  color: var(--common-text-color);\r\n  padding: 0.5rem;\r\n  border-radius: 0.3rem;\r\n  background-color: var(--blocks-background);\r\n  font-weight: bold;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n  user-select: none;\r\n}\r\n\r\n@media (hover: hover) {\r\n  .button:hover {\r\n    cursor: pointer;\r\n    filter: brightness(1.2);\r\n  }\r\n}\r\n\r\n.gameover {\r\n  pointer-events: none;\r\n  filter: blur(1px) opacity(0.8);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/buttons/cavein/btnCavein.css":
/*!*****************************************************!*\
  !*** ./src/components/buttons/cavein/btnCavein.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_btnCavein_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./btnCavein.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/buttons/cavein/btnCavein.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_btnCavein_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_btnCavein_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_btnCavein_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_btnCavein_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/buttons/load/btnLoad.css":
/*!*************************************************!*\
  !*** ./src/components/buttons/load/btnLoad.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_btnLoad_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./btnLoad.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/buttons/load/btnLoad.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_btnLoad_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_btnLoad_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_btnLoad_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_btnLoad_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/buttons/random/btnRandom.css":
/*!*****************************************************!*\
  !*** ./src/components/buttons/random/btnRandom.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_btnRandom_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./btnRandom.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/buttons/random/btnRandom.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_btnRandom_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_btnRandom_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_btnRandom_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_btnRandom_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/buttons/reset/btnReset.css":
/*!***************************************************!*\
  !*** ./src/components/buttons/reset/btnReset.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_btnReset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./btnReset.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/buttons/reset/btnReset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_btnReset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_btnReset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_btnReset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_btnReset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/buttons/save/btnSave.css":
/*!*************************************************!*\
  !*** ./src/components/buttons/save/btnSave.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_btnSave_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./btnSave.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/buttons/save/btnSave.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_btnSave_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_btnSave_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_btnSave_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_btnSave_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/footer/footer.css":
/*!******************************************!*\
  !*** ./src/components/footer/footer.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/footer/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/gameSelector/gameSelector.css":
/*!******************************************************!*\
  !*** ./src/components/gameSelector/gameSelector.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameSelector_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./gameSelector.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/gameSelector/gameSelector.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_gameSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_gameSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/plotContainer/cell/cell.css":
/*!****************************************************!*\
  !*** ./src/components/plotContainer/cell/cell.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_cell_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./cell.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/plotContainer/cell/cell.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_cell_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_cell_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_cell_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_cell_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/plotContainer/plotContainer.css":
/*!********************************************************!*\
  !*** ./src/components/plotContainer/plotContainer.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_plotContainer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./plotContainer.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/plotContainer/plotContainer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_plotContainer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_plotContainer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_plotContainer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_plotContainer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/schemeSelector/schemeSelector.css":
/*!**********************************************************!*\
  !*** ./src/components/schemeSelector/schemeSelector.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_schemeSelector_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./schemeSelector.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/schemeSelector/schemeSelector.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_schemeSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_schemeSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_schemeSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_schemeSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/score/score.css":
/*!****************************************!*\
  !*** ./src/components/score/score.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_score_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./score.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/score/score.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_score_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_score_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_score_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_score_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/timer/timer.css":
/*!****************************************!*\
  !*** ./src/components/timer/timer.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_timer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./timer.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/timer/timer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_timer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_timer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_timer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_timer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/schemes/colorSchemes.js":
/*!********************************************!*\
  !*** ./src/assets/schemes/colorSchemes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
  {
    title: 'цветная',
    name: 'color',
    colors: {
      'body-bacground': 'rgb(230, 255, 230)',
      'blocks-background': 'rgb(231, 255, 255)',
      'cell-background': 'rgb(240, 240, 240)',
      'cell-background-fill': 'rgb(0, 0, 0)',
      'cell-border-color': 'rgb(200, 200, 200)',
      'border-color': 'rgb(0, 0, 0)',
      'score-lastgame': 'rgb(165, 245, 140)',
      'common-text-color': 'rgb(0, 0, 0)',
      'hover-invert': '0.2',
      'score-shadow': 'rgb(125, 125, 125)',
      'color-warning': '255, 80, 80',
    },
  },
  {
    title: 'тёмная',
    name: 'dark',
    colors: {
      'body-bacground': 'rgb(50, 50, 50)',
      'blocks-background': 'rgb(80, 80, 80)',
      'cell-background': 'rgb(130, 130, 130)',
      'cell-background-fill': 'rgb(60, 60, 60)',
      'cell-border-color': 'rgb(160, 160, 160)',
      'border-color': 'rgb(151, 151, 151)',
      'score-lastgame': 'rgb(30, 20, 40)',
      'common-text-color': 'rgb(230, 230, 230)',
      'hover-invert': '0.7',
      'score-shadow': 'rgb(0, 0, 0)',
      'color-warning': '255, 80, 80',
    },
  },
  {
    title: 'светлая',
    name: 'light',
    colors: {
      'body-bacground': 'rgb(230, 230, 230)',
      'blocks-background': 'rgb(255, 255, 255)',
      'cell-background': 'rgb(240, 240, 240)',
      'cell-background-fill': 'rgb(90, 90, 90)',
      'cell-border-color': 'rgb(200, 200, 200)',
      'border-color': 'rgb(140, 140, 140)',
      'score-lastgame': 'rgb(255, 220, 220)',
      'common-text-color': 'rgb(100, 100, 100)',
      'hover-invert': '0.2',
      'score-shadow': 'rgb(150, 150, 150)',
      'color-warning': '255, 80, 80',
    },
  },
]);


/***/ }),

/***/ "./src/components/buttons/cavein/btnCavein.js":
/*!****************************************************!*\
  !*** ./src/components/buttons/cavein/btnCavein.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../state/state */ "./src/state/state.js");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/createElement */ "./src/utils/createElement.js");
/* harmony import */ var _timer_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../timer/timer */ "./src/components/timer/timer.js");
/* harmony import */ var _btnCavein_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./btnCavein.css */ "./src/components/buttons/cavein/btnCavein.css");




const icon = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-60q61.013 0 117.506-20.5Q654-181 699-220L220-699q-38 46-59 102.169T140-480q0 142.375 98.812 241.188Q337.625-140 480-140Zm259-121q37-45 59-101.493Q820-418.987 820-480q0-142.375-98.812-241.188Q622.375-820 480-820q-60.662 0-116.831 21Q307-778 261-739l478 478Z"/></svg>`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const container = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({ cls: 'btn_container' });
  const btn = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
    tag: 'button',
    cls: 'btn_cavein',
    attr: [['title', 'Сдаюсь! Показать решение.']],
  });
  btn.innerHTML = icon;
  btn.addEventListener('click', clickCavein);
  container.append(btn);

  return container;
});

const clickCavein = () => {
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.showCellsValue = true;
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.isGameStarted = false;
  (0,_timer_timer__WEBPACK_IMPORTED_MODULE_2__.startTimer)(false);
  // state.game.timer = 0;
  const opacity = '1';
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.root.style.setProperty('--opacity-cell-text', opacity);
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.main.classList.add('gameover');
};


/***/ }),

/***/ "./src/components/buttons/load/btnLoad.js":
/*!************************************************!*\
  !*** ./src/components/buttons/load/btnLoad.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/createElement */ "./src/utils/createElement.js");
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/localStorage */ "./src/utils/localStorage.js");
/* harmony import */ var _btnLoad_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btnLoad.css */ "./src/components/buttons/load/btnLoad.css");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const btnLoad = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
    tag: 'button',
    txt: 'Continue last game',
    cls: 'button',
  });
  btnLoad.addEventListener('click', _utils_localStorage__WEBPACK_IMPORTED_MODULE_1__.loadState);
  return btnLoad;
});


/***/ }),

/***/ "./src/components/buttons/random/btnRandom..js":
/*!*****************************************************!*\
  !*** ./src/components/buttons/random/btnRandom..js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../state/state */ "./src/state/state.js");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/createElement */ "./src/utils/createElement.js");
/* harmony import */ var _gameSelector_gameSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gameSelector/gameSelector */ "./src/components/gameSelector/gameSelector.js");
/* harmony import */ var _plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../plotContainer/renderDesk */ "./src/components/plotContainer/renderDesk.js");
/* harmony import */ var _timer_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../timer/timer */ "./src/components/timer/timer.js");
/* harmony import */ var _btnRandom_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./btnRandom.css */ "./src/components/buttons/random/btnRandom.css");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const button = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
    tag: 'button',
    txt: 'Random game',
    cls: 'button',
  });
  button.addEventListener('click', randomGame);

  return button;
});

const randomGame = () => {
  let countGames = 0;
  const { fields } = _state_state__WEBPACK_IMPORTED_MODULE_0__["default"];

  for (const field in fields) {
    countGames += fields[field]?.length || 0;
  }

  const randomID = Math.round(Math.random() * (countGames - 1));
  const error = 'randomID должен быть меньше countGames';
  console.assert(randomID < countGames, { randomID, countGames, error });

  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.currentGame = randomID;
  (0,_plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_3__["default"])(randomID);
  (0,_gameSelector_gameSelector__WEBPACK_IMPORTED_MODULE_2__.switchGame)(randomID);
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.timer = 0;
  (0,_timer_timer__WEBPACK_IMPORTED_MODULE_4__.startTimer)(false);
};


/***/ }),

/***/ "./src/components/buttons/reset/btnReset.js":
/*!**************************************************!*\
  !*** ./src/components/buttons/reset/btnReset.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../state/state */ "./src/state/state.js");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/createElement */ "./src/utils/createElement.js");
/* harmony import */ var _plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../plotContainer/renderDesk */ "./src/components/plotContainer/renderDesk.js");
/* harmony import */ var _timer_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../timer/timer */ "./src/components/timer/timer.js");
/* harmony import */ var _btnReset_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./btnReset.css */ "./src/components/buttons/reset/btnReset.css");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const btnReset = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
    tag: 'button',
    txt: 'Reset game',
    cls: 'button',
  });
  btnReset.addEventListener('click', resetGame);

  return btnReset;
});

const resetGame = () => {
  (0,_plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_2__["default"])(_state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.currentGame);
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.timer = 0;
  const opacity = '0';
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.root.style.setProperty('--opacity-cell-text', opacity);
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.main.classList.remove('gameover');
  (0,_timer_timer__WEBPACK_IMPORTED_MODULE_3__.startTimer)(false);
};


/***/ }),

/***/ "./src/components/buttons/save/btnSave.js":
/*!************************************************!*\
  !*** ./src/components/buttons/save/btnSave.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/createElement */ "./src/utils/createElement.js");
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/localStorage */ "./src/utils/localStorage.js");
/* harmony import */ var _btnSave_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btnSave.css */ "./src/components/buttons/save/btnSave.css");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const btnSave = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
    tag: 'button',
    txt: 'Save game',
    cls: 'button',
  });
  btnSave.addEventListener('click', _utils_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveState);
  return btnSave;
});


/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/createElement */ "./src/utils/createElement.js");
/* harmony import */ var _buttons_load_btnLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buttons/load/btnLoad */ "./src/components/buttons/load/btnLoad.js");
/* harmony import */ var _buttons_random_btnRandom___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buttons/random/btnRandom. */ "./src/components/buttons/random/btnRandom..js");
/* harmony import */ var _buttons_reset_btnReset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buttons/reset/btnReset */ "./src/components/buttons/reset/btnReset.js");
/* harmony import */ var _buttons_save_btnSave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buttons/save/btnSave */ "./src/components/buttons/save/btnSave.js");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer.css */ "./src/components/footer/footer.css");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const footer = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({ tag: 'footer', cls: 'footer' });
  const reset = (0,_buttons_reset_btnReset__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const save = (0,_buttons_save_btnSave__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const load = (0,_buttons_load_btnLoad__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const random = (0,_buttons_random_btnRandom___WEBPACK_IMPORTED_MODULE_2__["default"])();

  footer.append(reset, save, load, random);
  return footer;
});


/***/ }),

/***/ "./src/components/gameSelector/gameSelector.js":
/*!*****************************************************!*\
  !*** ./src/components/gameSelector/gameSelector.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameSelector: () => (/* binding */ gameSelector),
/* harmony export */   switchGame: () => (/* binding */ switchGame)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/state */ "./src/state/state.js");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createElement */ "./src/utils/createElement.js");
/* harmony import */ var _utils_createOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/createOptions */ "./src/utils/createOptions.js");
/* harmony import */ var _plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plotContainer/renderDesk */ "./src/components/plotContainer/renderDesk.js");
/* harmony import */ var _timer_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../timer/timer */ "./src/components/timer/timer.js");
/* harmony import */ var _gameSelector_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameSelector.css */ "./src/components/gameSelector/gameSelector.css");







const gameSelector = () => {
  const header = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({ tag: 'header', cls: 'header' });
  const form = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({ tag: 'form', cls: 'form' });
  const gameSelectContainer = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({ cls: 'game-select' });

  const fieldSet = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
    tag: 'fieldset',
    cls: 'game-select_fieldset',
  });
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.fieldSet = fieldSet;
  const legend = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
    tag: 'legend',
    cls: 'fieldset_legend',
    txt: 'сложность',
  });

  const gameSelectLabel = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
    tag: 'label',
    txt: 'Выбор игры',
    attr: [['for', 'game-select']],
  });
  const gameSelect = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
    tag: 'select',
    cls: 'game-select_selector',
    attr: [['id', 'game-select']],
  });
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.gameSelect = gameSelect;

  const gameFilterLabel5 = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
    tag: 'label',
    txt: '5x5',
    cls: 'fieldset_label',
    attr: [['for', 'game-filter-5x5']],
  });
  const gameFilter5 = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
    tag: 'input',
    attr: [
      ['type', 'radio'],
      ['name', 'game-filter'],
      ['value', '5x5'],
      ['id', 'game-filter-5x5'],
      ['checked', ''],
      ['autofocus', ''],
    ],
  });
  const gameFilterLabel10 = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
    tag: 'label',
    txt: '10x10',
    cls: 'fieldset_label',
    attr: [['for', 'game-filter-10x10']],
  });
  const gameFilter10 = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
    tag: 'input',
    attr: [
      ['type', 'radio'],
      ['name', 'game-filter'],
      ['value', '10x10'],
      ['id', 'game-filter-10x10'],
    ],
  });
  const gameFilterLabel15 = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
    tag: 'label',
    txt: '15x15',
    cls: 'fieldset_label',
    attr: [['for', 'game-filter-15x15']],
  });
  const gameFilter15 = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
    tag: 'input',
    attr: [
      ['type', 'radio'],
      ['name', 'game-filter'],
      ['value', '15x15'],
      ['id', 'game-filter-15x15'],
    ],
  });

  fieldSet.append(
    legend,
    gameFilter5,
    gameFilterLabel5,
    gameFilter10,
    gameFilterLabel10,
    gameFilter15,
    gameFilterLabel15
  );
  form.append(fieldSet, gameSelectContainer);
  header.append(form);
  form.addEventListener('change', changeFilter);
  gameSelectContainer.append(gameSelectLabel, gameSelect);
  return header;
};

const switchGame = (id) => {
  const { fields } = _state_state__WEBPACK_IMPORTED_MODULE_0__["default"];
  let game = null;

  for (const difficulty in fields) {
    game = fields[difficulty].filter((g) => g.id === +id);
    if (game.length) {
      const radio = _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.fieldSet.querySelector(
        `input[value="${difficulty}"]`
      );
      radio && (radio.checked = true);
      changeFilter(difficulty, id);
      return;
    }
  }
};

const changeFilter = (e, id) => {
  const value = e.target?.value || e;

  const { fields } = _state_state__WEBPACK_IMPORTED_MODULE_0__["default"];
  const filters = Object.keys(_state_state__WEBPACK_IMPORTED_MODULE_0__["default"].fields);
  const isFilter = filters.includes(value);
  if (isFilter) {
    const listGames = fields[value];
    _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.currentGame = id || listGames[0].id;
    _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.difficulty = value;
    (0,_utils_createOptions__WEBPACK_IMPORTED_MODULE_2__["default"])(_state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.gameSelect, listGames);
  } else {
    _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.currentGame = value;
  }
  const opacity = '0';
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.root.style.setProperty('--opacity-cell-text', opacity);
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.main.classList.remove('gameover');
  if (e.target?.value) {
    _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.timer = 0;
    (0,_timer_timer__WEBPACK_IMPORTED_MODULE_4__.startTimer)(false);
    (0,_plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_3__["default"])(_state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.currentGame);
  } else {
    (0,_plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_3__.updateDesk)(_state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.currentGame);
  }
};


/***/ }),

/***/ "./src/components/plotContainer/cell/newCell.js":
/*!******************************************************!*\
  !*** ./src/components/plotContainer/cell/newCell.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/createElement */ "./src/utils/createElement.js");
/* harmony import */ var _cell_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell.css */ "./src/components/plotContainer/cell/cell.css");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const cell = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({ cls: 'cell' });
  return cell;
});


/***/ }),

/***/ "./src/components/plotContainer/plotContainer.js":
/*!*******************************************************!*\
  !*** ./src/components/plotContainer/plotContainer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plotContainer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plotContainer.css */ "./src/components/plotContainer/plotContainer.css");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/state */ "./src/state/state.js");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/createElement */ "./src/utils/createElement.js");
/* harmony import */ var _timer_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timer/timer */ "./src/components/timer/timer.js");
/* harmony import */ var _sound_soundFillCell_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sound/soundFillCell.mp3 */ "./src/components/plotContainer/sound/soundFillCell.mp3");
/* harmony import */ var _sound_soundFillCross_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sound/soundFillCross.mp3 */ "./src/components/plotContainer/sound/soundFillCross.mp3");
/* harmony import */ var _sound_soundClear_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sound/soundClear.mp3 */ "./src/components/plotContainer/sound/soundClear.mp3");
/* harmony import */ var _utils_gameRecord__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/gameRecord */ "./src/utils/gameRecord.js");
/* harmony import */ var _score_score__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../score/score */ "./src/components/score/score.js");









const sndFillCell = new Audio(_sound_soundFillCell_mp3__WEBPACK_IMPORTED_MODULE_4__);
const sndFillCross = new Audio(_sound_soundFillCross_mp3__WEBPACK_IMPORTED_MODULE_5__);
const sndClear = new Audio(_sound_soundClear_mp3__WEBPACK_IMPORTED_MODULE_6__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const container = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({ tag: 'div', cls: 'game-container' });
  container.addEventListener('click', clickHandler);
  container.addEventListener('contextmenu', contextMenuHandler);
  _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].html.plotContainer = container;
  return container;
});

const checkGameStart = () => {
  if (!_state_state__WEBPACK_IMPORTED_MODULE_1__["default"].game.isGameStarted) {
    _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].game.isGameStarted = true;
    (0,_timer_timer__WEBPACK_IMPORTED_MODULE_3__.startTimer)();
  }
};

const getClickedCell = (target) => {
  const { plot } = _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].game;
  return plot.flat(1).filter((cell) => cell.element === target)[0];
};

const contextMenuHandler = (e) => {
  e.preventDefault();
  const clickedCell = getClickedCell(e.target);
  if (clickedCell) {
    const cellState = clickedCell.state;
    switch (cellState) {
      case '⚪':
        sndFillCross.play();
        clickedCell.state = 'x';
        clickedCell.element.classList.toggle('cell_checked');
        clickedCell.element.classList.remove('cell_fill');
        checkGameStart();
        break;
      case '⚫':
        sndFillCross.play();
        clickedCell.state = 'x';
        clickedCell.element.classList.toggle('cell_checked');
        clickedCell.element.classList.remove('cell_fill');
        checkGameStart();
        break;
      case 'x':
        sndClear.play();
        clickedCell.state = '⚪';
        clickedCell.element.classList.toggle('cell_checked');
        clickedCell.element.classList.remove('cell_fill');
        checkGameStart();
        break;

      default:
        break;
    }
  }
};

const clickHandler = (e) => {
  const clickedCell = getClickedCell(e.target);
  if (clickedCell) {
    const cellState = clickedCell.state;
    switch (cellState) {
      case '⚪':
        sndFillCell.play();
        clickedCell.state = '⚫';
        clickedCell.element.classList.add('cell_fill');
        clickedCell.element.classList.remove('cell_checked');
        checkGameStart();
        break;
      case '⚫':
        sndClear.play();
        clickedCell.state = '⚪';
        clickedCell.element.classList.remove('cell_fill');
        clickedCell.element.classList.remove('cell_checked');
        checkGameStart();
        break;
      case 'x':
        sndFillCell.play();
        clickedCell.state = '⚫';
        clickedCell.element.classList.add('cell_fill');
        clickedCell.element.classList.remove('cell_checked');
        checkGameStart();
        break;

      default:
        break;
    }

    if (isAllCorrectChecked()) setTimeout(() => gameOver(), 0);
  }
};

const isAllCorrectChecked = () => {
  const { plot } = _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].game;
  const plotWithoutX = plot.flat(1).map((cell) => {
    if (cell.state === 'x') return { ...cell, state: '⚪' };
    return cell;
  });
  return !plotWithoutX.some((cell) => cell.state !== cell.value);
};

const gameOver = () => {
  const msg = `Great! You have solved the nonogram in ${(0,_timer_timer__WEBPACK_IMPORTED_MODULE_3__.parseTimer)(
    _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].game.timer
  )} seconds!`;
  (0,_utils_gameRecord__WEBPACK_IMPORTED_MODULE_7__.saveRecords)();
  (0,_score_score__WEBPACK_IMPORTED_MODULE_8__.updateScore)(msg);
  _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].html.score.classList.add('score_show');

  _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].game.timer = 0;
  _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].html.main.classList.add('gameover');
  (0,_timer_timer__WEBPACK_IMPORTED_MODULE_3__.startTimer)(false);
};


/***/ }),

/***/ "./src/components/plotContainer/renderDesk.js":
/*!****************************************************!*\
  !*** ./src/components/plotContainer/renderDesk.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   updateDesk: () => (/* binding */ updateDesk)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/state */ "./src/state/state.js");
/* harmony import */ var _utils_getPlot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/getPlot */ "./src/utils/getPlot.js");
/* harmony import */ var _utils_rotateMatrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/rotateMatrix */ "./src/utils/rotateMatrix.js");
/* harmony import */ var _buttons_cavein_btnCavein__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buttons/cavein/btnCavein */ "./src/components/buttons/cavein/btnCavein.js");
/* harmony import */ var _cell_newCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cell/newCell */ "./src/components/plotContainer/cell/newCell.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((id = 0) => {
  const plot = [...(0,_utils_getPlot__WEBPACK_IMPORTED_MODULE_1__["default"])(id)];
  if (!plot) {
    return;
  }

  const rotatedPlot = (0,_utils_rotateMatrix__WEBPACK_IMPORTED_MODULE_2__["default"])(plot);
  const clueTopRotated = createClueArray(rotatedPlot);
  // выравниваем верхнии подсказки в высоту
  const clueTopRows = Math.max(...clueTopRotated.map((row) => row.length));
  clueTopRotated.forEach((row) => {
    while (row.length < clueTopRows) row.push(0);
  });
  const clueTop = (0,_utils_rotateMatrix__WEBPACK_IMPORTED_MODULE_2__["default"])(clueTopRotated, 'left');

  const clueLeft = createClueArray(plot);
  // выравниваем левые подсказки в ширину
  const clueLeftColumns = Math.max(...clueLeft.map((row) => row.length));
  clueLeft.forEach((row) => {
    while (row.length < clueLeftColumns) row.unshift(0);
  });

  // объеденить подсказки слева с игровым полем
  const clueLeftAndPlot = plot.map((row, i) => {
    return [...clueLeft[i], ...row];
  });

  // и выравниваем в ширину посказки сверху
  const сolumnsCountTotal = clueLeftAndPlot[0].length;
  clueTop.forEach((row) => {
    while (row.length < сolumnsCountTotal) row.unshift('');
  });

  // объеденить подсказки сверху с игровым полем
  const gameDesk = [...clueTop, ...clueLeftAndPlot];

  const col = clueLeft[0].length;
  const row = clueTop.length;

  //сформируем элементы игрового поля
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.plotContainer.innerHTML = '';
  gameDesk.forEach((row, i) => {
    row.forEach((el, j) => {
      const cell = (0,_cell_newCell__WEBPACK_IMPORTED_MODULE_4__["default"])();
      if (el === '⚫' || el === '⚪') {
        cell.setAttribute('role', 'game');
        cell.textContent = el;
        gameDesk[i][j] = {
          state: '⚪',
          value: el,
          element: cell,
        };
      }
      if (Number.isFinite(el)) {
        cell.setAttribute('role', 'clue');
        cell.textContent = el > 0 ? el : '';
        gameDesk[i][j] = {
          state: el,
          value: el,
          element: cell,
        };
      }
      if (el === '') {
        cell.setAttribute('role', 'empty');
        gameDesk[i][j] = {
          state: el,
          value: el,
          element: cell,
        };
      }

      _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.plotContainer.appendChild(cell);
    });
  });

  setBorders(gameDesk);
  const columnsCount = gameDesk[0].length;
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.plot = gameDesk;
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.emptyCell = _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.plotContainer.children[0];
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.emptyCell.style.zIndex = 2;

  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.emptyCell.append((0,_buttons_cavein_btnCavein__WEBPACK_IMPORTED_MODULE_3__["default"])());
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.plotContainer.style.setProperty('--columns-count', columnsCount);
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.plotContainer.style.setProperty('--row-count', row);
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.plotContainer.style.setProperty('--column-count', col);
});

const updateDesk = () => {
  //сформируем элементы игрового поля
  const { plot } = _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game;

  const row = plot.reduce((count, r) => {
    if (r[0].value === '') return count + 1;
    return count;
  }, 0);
  const col = plot[0].reduce((count, cell) => {
    if (cell.value === '') return count + 1;
    return count;
  }, 0);

  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.plotContainer.innerHTML = '';
  plot.forEach((row, i) => {
    row.forEach((el, j) => {
      const cell = (0,_cell_newCell__WEBPACK_IMPORTED_MODULE_4__["default"])();
      if (el.state === '⚫') {
        cell.setAttribute('role', 'game');
        cell.classList.add('cell_fill');
      }
      if (el.state === '⚪') {
        cell.setAttribute('role', 'game');
      }
      if (el.state === 'x') {
        cell.setAttribute('role', 'game');
        cell.classList.add('cell_checked');
      }
      cell.textContent = el.value;
      if (Number.isFinite(el.state)) {
        cell.setAttribute('role', 'clue');
        cell.textContent = el.state > 0 ? el.state : '';
      }
      if (el.state === '') {
        cell.setAttribute('role', 'empty');
      }

      plot[i][j] = {
        state: el.state,
        value: el.value,
        element: cell,
      };

      _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.plotContainer.appendChild(cell);
    });
  });

  setBorders(plot);
  const columnsCount = plot[0].length;
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.emptyCell = _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.plotContainer.children[0];
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.emptyCell.style.zIndex = 2;

  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.emptyCell.append((0,_buttons_cavein_btnCavein__WEBPACK_IMPORTED_MODULE_3__["default"])());
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.plotContainer.style.setProperty('--columns-count', columnsCount);
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.plotContainer.style.setProperty('--row-count', row);
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.plotContainer.style.setProperty('--column-count', col);
};

const createClueArray = (matrix) => {
  const clues = [];
  matrix.forEach((row, i) => {
    let count = 0;
    clues[i] = [];

    row.forEach((cell) => {
      if (cell === '⚫') {
        count += 1;
      }
      if (cell === '⚪') {
        if (count > 0) {
          clues[i].push(count);
        }
        count = 0;
      }
    });

    if (count > 0) {
      clues[i].push(count);
      count = 0;
    }
  });

  return clues;
};

const setBorders = (matrix) => {
  let indexRow = 0;

  for (let row = 0; row < matrix.length; row += 1) {
    let indexCol = 0;
    const lastIndexRow = matrix[row].length - 1;
    const lastElemRow = matrix[row][lastIndexRow].value;
    if (lastElemRow === '⚫' || lastElemRow === '⚪') indexRow += 1;

    for (let col = 0; col < matrix[row].length; col += 1) {
      const lastRowIndex = matrix.length - 1;
      const lastElemCol = matrix[lastRowIndex][col].value;
      if (lastElemCol === '⚫' || lastElemCol === '⚪') {
        indexCol += 1;
      }

      if (indexRow && indexRow === 1)
        matrix[row][col].element.setAttribute('first-row', '');
      if (indexRow && indexRow % 5 === 0)
        matrix[row][col].element.setAttribute('row', '');
      if (indexCol && indexCol === 1)
        matrix[row][col].element.setAttribute('first-col', '');
      if (indexCol && indexCol % 5 === 0)
        matrix[row][col].element.setAttribute('col', '');
    }
  }
};


/***/ }),

/***/ "./src/components/schemeSelector/schemeSelector.js":
/*!*********************************************************!*\
  !*** ./src/components/schemeSelector/schemeSelector.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schemeSelector_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schemeSelector.css */ "./src/components/schemeSelector/schemeSelector.css");
/* harmony import */ var _assets_schemes_colorSchemes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/schemes/colorSchemes */ "./src/assets/schemes/colorSchemes.js");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/createElement */ "./src/utils/createElement.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  let options = [];
  const container = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({ cls: 'scheme-container' });
  const label = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
    tag: 'label',
    txt: 'Цветовая схема',
    attr: [['for', 'scheme_select']],
  });
  const select = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
    tag: 'select',
    cls: 'scheme-select',
    attr: [['id', 'scheme_select']],
  });

  _assets_schemes_colorSchemes__WEBPACK_IMPORTED_MODULE_1__["default"].forEach((scheme) =>
    options.push(
      (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tag: 'option',
        txt: scheme.title,
        attr: [['value', scheme.name]],
      })
    )
  );

  select.addEventListener('change', changeScheme);
  select.append(...options);
  container.append(label, select);
  return container;
});

const changeScheme = (e) => {
  const { value } = e.target;
  const scheme = _assets_schemes_colorSchemes__WEBPACK_IMPORTED_MODULE_1__["default"].filter((s) => s.name === value);
  applyScheme(scheme);
};

const applyScheme = (scheme) => {
  if (!scheme) return;

  const root = document.querySelector(':root');

  const colors = scheme[0].colors;
  const keys = Object.keys(colors);
  keys.forEach((color) => {
    root.style.setProperty(`--${color}`, colors[color]);
  });
};


/***/ }),

/***/ "./src/components/score/score.js":
/*!***************************************!*\
  !*** ./src/components/score/score.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   score: () => (/* binding */ score),
/* harmony export */   updateScore: () => (/* binding */ updateScore)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/state */ "./src/state/state.js");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createElement */ "./src/utils/createElement.js");
/* harmony import */ var _utils_gameRecord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/gameRecord */ "./src/utils/gameRecord.js");
/* harmony import */ var _timer_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timer/timer */ "./src/components/timer/timer.js");
/* harmony import */ var _score_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./score.css */ "./src/components/score/score.css");






const score = () => {
  const dialog = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
    tag: 'dialog',
    cls: 'dialog',
    attr: [['open', '']],
  });
  const container = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
    cls: 'container',
  });
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.score = container;
  updateScore();
  dialog.addEventListener('click', clickHandle);
  dialog.append(container);
  return dialog;
};

const updateScore = (msg) => {
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.score.innerHTML = '';
  const title = msg ? msg : 'SCORE:';
  const h1 = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({ tag: 'h1', cls: 'score_h1', txt: title });
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.score.append(h1);
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.scoreH1 = h1;
  const records = getContainerRecords();
  records && _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.score.append(...records);
};

const clickHandle = () => {
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.scoreH1.textContent = 'SCORE:';
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.score.classList.toggle('score_show');
};

const getContainerRecords = () => {
  const records = (0,_utils_gameRecord__WEBPACK_IMPORTED_MODULE_2__.getRecords)();

  const difficultyList = Object.keys(_state_state__WEBPACK_IMPORTED_MODULE_0__["default"].fields);
  const tables = difficultyList.map((dif) => {
    const rec = records.filter((r) => r.difficulty === dif);
    if (rec.length === 0) return '';
    const container = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({ cls: 'container__records' });
    container.append((0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({ txt: 'игра' }));
    container.append((0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({ txt: 'сложн.' }));
    container.append((0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({ txt: 'время' }));
    const sorted = rec.sort((a, b) => a.timer - b.timer);
    sorted.splice(5);
    sorted.forEach((r, i) => {
      const style = r.lastGame ? 'record_last-game' : '';
      container.append(
        (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({ txt: `${i + 1}. ${r.name}`, cls: style })
      );
      container.append((0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({ txt: r.difficulty, cls: style }));
      container.append((0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({ txt: (0,_timer_timer__WEBPACK_IMPORTED_MODULE_3__.parseTimer)(r.timer), cls: style }));
    });

    return container;
  });

  (0,_utils_gameRecord__WEBPACK_IMPORTED_MODULE_2__.resetLastGameFlag)(records);
  return tables;
};


/***/ }),

/***/ "./src/components/timer/timer.js":
/*!***************************************!*\
  !*** ./src/components/timer/timer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseTimer: () => (/* binding */ parseTimer),
/* harmony export */   renderTimer: () => (/* binding */ renderTimer),
/* harmony export */   startTimer: () => (/* binding */ startTimer),
/* harmony export */   timer: () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/state */ "./src/state/state.js");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createElement */ "./src/utils/createElement.js");
/* harmony import */ var _timer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer.css */ "./src/components/timer/timer.css");




const timer = () => {
  let seconds = parseInt(_state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.timer);
  seconds ||= 0;
  const timerStr = parseTimer(seconds);
  const timer = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({ tag: 'div', cls: 'timer', txt: timerStr });
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.timer = timer;
  return timer;
};

const renderTimer = () => {
  let seconds = parseInt(_state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.timer);
  seconds ||= 0;
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.timer.innerText = parseTimer(seconds);
};

const startTimer = (start = true) => {
  const timerHandler = () => {
    _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.timer += 1;
    renderTimer();
    return timerHandler;
  };

  clearInterval(_state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.timerID);
  if (start) _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.timerID = setInterval(timerHandler(), 1000);
  if (!start) {
    _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.isGameStarted = false;
    renderTimer();
  }
};

const parseTimer = (seconds) => {
  let hours = Math.trunc(seconds / 3600);
  let minutes = Math.trunc((seconds - hours * 3600) / 60);
  seconds = `${seconds - hours * 3600 - minutes * 60}`;

  hours = hours > 0 ? `${hours}:` : '';
  hours && (hours = hours.padStart(3, '0'));
  minutes = minutes > 0 ? `${minutes}:` : '00:';
  minutes = minutes.padStart(3, '0');
  seconds = seconds.padStart(2, '0');
  return `${hours}${minutes}${seconds}`;
};


/***/ }),

/***/ "./src/state/initState.js":
/*!********************************!*\
  !*** ./src/state/initState.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state/state.js");
/* harmony import */ var _fields_5x5_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fields/5x5.json */ "./src/fields/5x5.json");
/* harmony import */ var _fields_10x10_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fields/10x10.json */ "./src/fields/10x10.json");
/* harmony import */ var _fields_15x15_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fields/15x15.json */ "./src/fields/15x15.json");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const fields = getFields();
  setUnicID(fields);
  Object.assign(_state__WEBPACK_IMPORTED_MODULE_0__["default"], {
    ..._state__WEBPACK_IMPORTED_MODULE_0__["default"],
    fields: fields,
  });
});

const getFields = () => {
  return {
    '5x5': _fields_5x5_json__WEBPACK_IMPORTED_MODULE_1__,
    '10x10': _fields_10x10_json__WEBPACK_IMPORTED_MODULE_2__,
    '15x15': _fields_15x15_json__WEBPACK_IMPORTED_MODULE_3__,
  };
};

const setUnicID = (fields) => {
  let id = 0;
  for (let field in fields) {
    fields[field].forEach((game) => {
      game.id = id;
      id += 1;
    });
  }
};


/***/ }),

/***/ "./src/state/state.js":
/*!****************************!*\
  !*** ./src/state/state.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  game: {
    plot: [],
    currentGame: 0,
    currentGameName: '',
    difficulty: '5x5',
    showCellsValue: false,
    timer: 0,
    isGameStarted: false,
  },
  fields: [],
  html: {},
  lsKeyState: 'nonogram20240127161701',
  lsKeyRecords: 'nonogram20240128182601',
});


/***/ }),

/***/ "./src/utils/createElement.js":
/*!************************************!*\
  !*** ./src/utils/createElement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ tag = 'div', cls = '', txt = '', attr = [] }) => {
  const element = document.createElement(tag);
  cls && (element.className = cls);
  element.innerText = txt;
  attr.forEach((attribut) => element.setAttribute(attribut[0], attribut[1]));

  return element;
});


/***/ }),

/***/ "./src/utils/createOptions.js":
/*!************************************!*\
  !*** ./src/utils/createOptions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/state */ "./src/state/state.js");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "./src/utils/createElement.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((select, games) => {
  const options = games.map((game) => {
    const { length } = game.name;
    const MAX_LENGTH = 30;
    const nameNormalized =
      length > MAX_LENGTH ? game.name.slice(0, MAX_LENGTH) + '...' : game.name;
    const checked =
      _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.currentGame === game.id ? 'selected' : 'unselected';
    return (0,_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
      tag: 'option',
      attr: [
        ['value', game.id],
        [checked, ''],
      ],
      txt: nameNormalized,
    });
  });
  select.innerHTML = '';
  select.append(...options);
});


/***/ }),

/***/ "./src/utils/gameRecord.js":
/*!*********************************!*\
  !*** ./src/utils/gameRecord.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRecords: () => (/* binding */ getRecords),
/* harmony export */   resetLastGameFlag: () => (/* binding */ resetLastGameFlag),
/* harmony export */   saveRecords: () => (/* binding */ saveRecords)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/state */ "./src/state/state.js");


const getRecords = () => {
  try {
    const data = localStorage.getItem(_state_state__WEBPACK_IMPORTED_MODULE_0__["default"].lsKeyRecords);
    const records = JSON.parse(data);
    return records || [];
  } catch (error) {
    console.error(error);
  }
};

const saveRecords = () => {
  const record = {
    name: _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.currentGameName,
    difficulty: _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.difficulty,
    timer: _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.timer,
    lastGame: true,
  };

  const oldRecords = getRecords();
  const newRecords = [...oldRecords, record];
  const data = JSON.stringify(newRecords);
  localStorage.setItem(_state_state__WEBPACK_IMPORTED_MODULE_0__["default"].lsKeyRecords, data);
};

const resetLastGameFlag = (records) => {
  const woFlag = records.map((r) => ({ ...r, lastGame: false }));
  const data = JSON.stringify(woFlag);
  localStorage.setItem(_state_state__WEBPACK_IMPORTED_MODULE_0__["default"].lsKeyRecords, data);
};


/***/ }),

/***/ "./src/utils/getPlot.js":
/*!******************************!*\
  !*** ./src/utils/getPlot.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/state */ "./src/state/state.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((id) => {
  const ID = Number(id);
  for (let field in _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].fields) {
    const game = _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].fields[field].filter((game) => game.id === ID)[0];
    if (game) {
      _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.currentGame = game.id;
      _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.currentGameName = game.name;
      return game.plot;
    }
  }
  return null;
});


/***/ }),

/***/ "./src/utils/localStorage.js":
/*!***********************************!*\
  !*** ./src/utils/localStorage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadState: () => (/* binding */ loadState),
/* harmony export */   saveState: () => (/* binding */ saveState)
/* harmony export */ });
/* harmony import */ var _components_gameSelector_gameSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/gameSelector/gameSelector */ "./src/components/gameSelector/gameSelector.js");
/* harmony import */ var _components_plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/plotContainer/renderDesk */ "./src/components/plotContainer/renderDesk.js");
/* harmony import */ var _components_timer_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/timer/timer */ "./src/components/timer/timer.js");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/state */ "./src/state/state.js");





const saveState = () => {
  const { game } = _state_state__WEBPACK_IMPORTED_MODULE_3__["default"];
  localStorage.setItem(_state_state__WEBPACK_IMPORTED_MODULE_3__["default"].lsKeyState, JSON.stringify(game));
};

const loadState = () => {
  try {
    const ls = localStorage.getItem(_state_state__WEBPACK_IMPORTED_MODULE_3__["default"].lsKeyState);
    const game = JSON.parse(ls);
    if (game) {
      _state_state__WEBPACK_IMPORTED_MODULE_3__["default"].game = game;
      (0,_components_plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_1__.updateDesk)();
      (0,_components_gameSelector_gameSelector__WEBPACK_IMPORTED_MODULE_0__.switchGame)(_state_state__WEBPACK_IMPORTED_MODULE_3__["default"].game.currentGame);
      (0,_components_timer_timer__WEBPACK_IMPORTED_MODULE_2__.startTimer)(true);
      const opacity = _state_state__WEBPACK_IMPORTED_MODULE_3__["default"].game.showCellsValue ? '0.4' : '0';
      _state_state__WEBPACK_IMPORTED_MODULE_3__["default"].html.main.style.setProperty('--opacity-cell-text', opacity);
    }
  } catch (error) {
    console.error('ошибка при загрузке игры из секректного хранилища:', error);
    return;
  }
};


/***/ }),

/***/ "./src/utils/rotateMatrix.js":
/*!***********************************!*\
  !*** ./src/utils/rotateMatrix.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((matrix, direction = 'right') => {
  const tmpMatrix = [...matrix];
  const rotatedMatrix = [];
  for (let i = 0; i < tmpMatrix[0].length; i += 1) {
    rotatedMatrix[i] = [];
    for (let j = 0; j < tmpMatrix.length; j += 1) {
      if (direction === 'right')
        rotatedMatrix[i][j] = tmpMatrix[tmpMatrix.length - 1 - j][i];
      else rotatedMatrix[i][j] = tmpMatrix[j][tmpMatrix[i].length - 1 - i];
    }
  }
  return rotatedMatrix;
});


/***/ }),

/***/ "./src/utils/windowHandle.js":
/*!***********************************!*\
  !*** ./src/utils/windowHandle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/state */ "./src/state/state.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((e) => {
  const { code } = e;

  if (code === 'KeyS') {
    const game = [..._state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.plot];
    const filter = game
      .map((row) => row.map((cell) => cell.state))
      .filter((row) => row[0] !== '')
      .map((row) => row.filter((cell) => !Number.isFinite(cell)));

    const json = {
      name: '',
      plot: filter,
    };
    console.warn('json for save...', json);
  }

  if (code === 'KeyH') {
    _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.showCellsValue = !_state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.showCellsValue;
    const opacity = _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.showCellsValue ? '0.4' : '0';
    _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.root.style.setProperty('--opacity-cell-text', opacity);
  }
});


/***/ }),

/***/ "./src/components/plotContainer/sound/soundClear.mp3":
/*!***********************************************************!*\
  !*** ./src/components/plotContainer/sound/soundClear.mp3 ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "061f618f82be34f5cc23.mp3";

/***/ }),

/***/ "./src/components/plotContainer/sound/soundFillCell.mp3":
/*!**************************************************************!*\
  !*** ./src/components/plotContainer/sound/soundFillCell.mp3 ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32ad3a455cd26de8ffe1.mp3";

/***/ }),

/***/ "./src/components/plotContainer/sound/soundFillCross.mp3":
/*!***************************************************************!*\
  !*** ./src/components/plotContainer/sound/soundFillCross.mp3 ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c6c8691fbb1b9c28f23.mp3";

/***/ }),

/***/ "./src/fields/10x10.json":
/*!*******************************!*\
  !*** ./src/fields/10x10.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"зонт","plot":[["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪"],["⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]},{"name":"кораблик","plot":[["⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚪","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚪","⚫","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚪"],["⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]},{"name":"гриб","plot":[["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪","⚪"],["⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚫","⚪","⚪"],["⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚪"],["⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]}]');

/***/ }),

/***/ "./src/fields/15x15.json":
/*!*******************************!*\
  !*** ./src/fields/15x15.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"микки-маус","plot":[["⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚫"],["⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚪","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚫"],["⚪","⚪","⚫","⚪","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪","⚪","⚫","⚫"],["⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚪","⚫","⚫"],["⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚫"],["⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚪","⚪","⚫","⚫"],["⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚫","⚪","⚪","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫"]]},{"name":"вишня","plot":[["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]},{"name":"catwoman","plot":[["⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪"],["⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪"],["⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚪"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚫","⚪"],["⚪","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚪"],["⚪","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚪"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪"],["⚪","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚪"],["⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪"],["⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]},{"name":"привидение","plot":[["⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚪","⚫","⚪","⚫","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚪"],["⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪"],["⚪","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚪","⚪"],["⚪","⚪","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚪","⚪","⚪"],["⚪","⚪","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚪","⚪","⚫","⚫","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪"]]},{"name":"улитка","plot":[["⚫","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚫","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚫","⚫","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪"],["⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚫","⚪"],["⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚫","⚪","⚪","⚪","⚫","⚪","⚪","⚫"],["⚪","⚪","⚫","⚪","⚫","⚪","⚪","⚫","⚫","⚪","⚪","⚫","⚪","⚪","⚫"],["⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚫"],["⚪","⚪","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚪"],["⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚫"],["⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚫"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]},{"name":"кот или кошка","plot":[["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪"],["⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪"],["⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫"],["⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]}]');

/***/ }),

/***/ "./src/fields/5x5.json":
/*!*****************************!*\
  !*** ./src/fields/5x5.json ***!
  \*****************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"буквы","plot":[["⚪","⚫","⚪","⚫","⚫"],["⚪","⚫","⚪","⚫","⚪"],["⚪","⚫","⚪","⚫","⚫"],["⚪","⚫","⚪","⚪","⚫"],["⚫","⚫","⚪","⚫","⚫"]]},{"name":"смайлик","plot":[["⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚪","⚫","⚫"],["⚪","⚪","⚫","⚪","⚪"],["⚫","⚪","⚪","⚪","⚫"],["⚫","⚫","⚫","⚫","⚫"]]},{"name":"помидорка","plot":[["⚪","⚪","⚪","⚪","⚫"],["⚪","⚫","⚫","⚫","⚪"],["⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫"],["⚪","⚫","⚫","⚫","⚪"]]},{"name":"алтарь","plot":[["⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚫"],["⚪","⚫","⚪","⚫","⚪"],["⚫","⚪","⚪","⚪","⚫"],["⚪","⚪","⚪","⚪","⚪"]]},{"name":"магический меч","plot":[["⚪","⚪","⚪","⚪","⚫"],["⚪","⚪","⚪","⚫","⚪"],["⚫","⚪","⚫","⚪","⚪"],["⚪","⚫","⚪","⚪","⚪"],["⚫","⚪","⚫","⚪","⚪"]]}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _components_timer_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/timer/timer */ "./src/components/timer/timer.js");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/state */ "./src/state/state.js");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer */ "./src/components/footer/footer.js");
/* harmony import */ var _state_initState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/initState */ "./src/state/initState.js");
/* harmony import */ var _components_plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/plotContainer/renderDesk */ "./src/components/plotContainer/renderDesk.js");
/* harmony import */ var _utils_windowHandle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/windowHandle */ "./src/utils/windowHandle.js");
/* harmony import */ var _components_plotContainer_plotContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/plotContainer/plotContainer */ "./src/components/plotContainer/plotContainer.js");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/createElement */ "./src/utils/createElement.js");
/* harmony import */ var _utils_createOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/createOptions */ "./src/utils/createOptions.js");
/* harmony import */ var _components_schemeSelector_schemeSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/schemeSelector/schemeSelector */ "./src/components/schemeSelector/schemeSelector.js");
/* harmony import */ var _components_score_score__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/score/score */ "./src/components/score/score.js");
/* harmony import */ var _components_gameSelector_gameSelector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/gameSelector/gameSelector */ "./src/components/gameSelector/gameSelector.js");














function game() {
  (0,_state_initState__WEBPACK_IMPORTED_MODULE_4__["default"])();
  console.log(_state_state__WEBPACK_IMPORTED_MODULE_2__["default"]);
  _state_state__WEBPACK_IMPORTED_MODULE_2__["default"].html.main = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_8__["default"])({ tag: 'main', cls: 'main' });
  _state_state__WEBPACK_IMPORTED_MODULE_2__["default"].html.main.append((0,_components_plotContainer_plotContainer__WEBPACK_IMPORTED_MODULE_7__["default"])());
  _state_state__WEBPACK_IMPORTED_MODULE_2__["default"].html.root = document.querySelector(':root');
  return _state_state__WEBPACK_IMPORTED_MODULE_2__["default"].html.main;
}

document.body.classList.add('body');
document.body.append((0,_components_schemeSelector_schemeSelector__WEBPACK_IMPORTED_MODULE_10__["default"])());
document.body.append((0,_components_gameSelector_gameSelector__WEBPACK_IMPORTED_MODULE_12__.gameSelector)());
document.body.append((0,_components_timer_timer__WEBPACK_IMPORTED_MODULE_1__.timer)());
document.body.append(game());
document.body.append((0,_components_footer_footer__WEBPACK_IMPORTED_MODULE_3__["default"])());
document.body.append((0,_components_score_score__WEBPACK_IMPORTED_MODULE_11__.score)());
(0,_components_plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_5__["default"])(0);
(0,_utils_createOptions__WEBPACK_IMPORTED_MODULE_9__["default"])(_state_state__WEBPACK_IMPORTED_MODULE_2__["default"].html.gameSelect, _state_state__WEBPACK_IMPORTED_MODULE_2__["default"].fields['5x5']);
window.addEventListener('keypress', _utils_windowHandle__WEBPACK_IMPORTED_MODULE_6__["default"]);

// implement "Solution" button

// добавить чекбокс для ПКМ
// добавить заполнение Х по клику на подсказки

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNxQjtBQUNmO0FBQ2M7QUFDTjtBQUNxQjtBQUNmO0FBQ3FCO0FBQ25CO0FBQ0E7QUFDc0I7QUFDdkI7QUFDcUI7QUFDdEU7QUFDQTtBQUNBLEVBQUUsNERBQVM7QUFDWCxjQUFjLG9EQUFLO0FBQ25CLEVBQUUsb0RBQUssYUFBYSxnRUFBYSxHQUFHLDBCQUEwQjtBQUM5RCxFQUFFLG9EQUFLLGtCQUFrQixtRkFBYTtBQUN0QyxFQUFFLG9EQUFLO0FBQ1AsU0FBUyxvREFBSztBQUNkO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzRkFBYztBQUNuQyxxQkFBcUIsb0ZBQVk7QUFDakMscUJBQXFCLDhEQUFLO0FBQzFCO0FBQ0EscUJBQXFCLHFFQUFNO0FBQzNCLHFCQUFxQiwrREFBSztBQUMxQixnRkFBVTtBQUNWLGdFQUFhLENBQUMsb0RBQUssa0JBQWtCLG9EQUFLO0FBQzFDLG9DQUFvQywyREFBWTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9jYXZlaW4vYnRuQ2F2ZWluLmNzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2xvYWQvYnRuTG9hZC5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9yYW5kb20vYnRuUmFuZG9tLmNzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL3Jlc2V0L2J0blJlc2V0LmNzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL3NhdmUvYnRuU2F2ZS5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvZ2FtZVNlbGVjdG9yL2dhbWVTZWxlY3Rvci5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvcGxvdENvbnRhaW5lci9jZWxsL2NlbGwuY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvcGxvdENvbnRhaW5lci5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvc2NoZW1lU2VsZWN0b3Ivc2NoZW1lU2VsZWN0b3IuY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3Njb3JlL3Njb3JlLmNzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy90aW1lci90aW1lci5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2NhdmVpbi9idG5DYXZlaW4uY3NzPzVjZDkiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9sb2FkL2J0bkxvYWQuY3NzPzE1YTMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9yYW5kb20vYnRuUmFuZG9tLmNzcz80MWFhIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvcmVzZXQvYnRuUmVzZXQuY3NzPzY3NDAiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9zYXZlL2J0blNhdmUuY3NzPzAzZjkiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jc3M/Yjc4OSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9nYW1lU2VsZWN0b3IvZ2FtZVNlbGVjdG9yLmNzcz9kYTg2Iiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvY2VsbC9jZWxsLmNzcz8yZDg3Iiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvcGxvdENvbnRhaW5lci5jc3M/NWM5ZCIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9zY2hlbWVTZWxlY3Rvci9zY2hlbWVTZWxlY3Rvci5jc3M/NzVhYSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9zY29yZS9zY29yZS5jc3M/ZmVhZSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy90aW1lci90aW1lci5jc3M/YThlOSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL25vbm9ncmFtcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zY2hlbWVzL2NvbG9yU2NoZW1lcy5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2NhdmVpbi9idG5DYXZlaW4uanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9sb2FkL2J0bkxvYWQuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9yYW5kb20vYnRuUmFuZG9tLi5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL3Jlc2V0L2J0blJlc2V0LmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvc2F2ZS9idG5TYXZlLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvZ2FtZVNlbGVjdG9yL2dhbWVTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9wbG90Q29udGFpbmVyL2NlbGwvbmV3Q2VsbC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9wbG90Q29udGFpbmVyL3Bsb3RDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvcGxvdENvbnRhaW5lci9yZW5kZXJEZXNrLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3NjaGVtZVNlbGVjdG9yL3NjaGVtZVNlbGVjdG9yLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3Njb3JlL3Njb3JlLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3RpbWVyL3RpbWVyLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9zdGF0ZS9pbml0U3RhdGUuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL3N0YXRlL3N0YXRlLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9jcmVhdGVPcHRpb25zLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9nYW1lUmVjb3JkLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9nZXRQbG90LmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL3V0aWxzL3JvdGF0ZU1hdHJpeC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvdXRpbHMvd2luZG93SGFuZGxlLmpzIiwid2VicGFjazovL25vbm9ncmFtcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5idG5fY29udGFpbmVyIHtcclxuICBjb250YWluZXItdHlwZTogaW5saW5lLXNpemU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYnRuX2NhdmVpbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuMnJlbTtcclxuXHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHJnYigyMDAsIDIwMCwgMjAwKTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCByZ2IoMTAwLCAxMDAsIDEwMCk7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYig3MCwgNzAsIDcwKTtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJnYigxNzAsIDE3MCwgMTcwKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgJiBzdmcge1xyXG4gICAgd2lkdGg6IGNsYW1wKDBweCwgMTAwJSwgMnJlbSk7XHJcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xyXG4gICAgZmlsbDogdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuXHJcbiAgICBhbmltYXRpb24tbmFtZTogcm9sbDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNjBzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiA2MHM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvbGwge1xyXG4gIDAlIHtcclxuICAgIGZpbGw6IHJnYih2YXIoLS1jb2xvci13YXJuaW5nKSk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcclxuICB9XHJcbiAgNSUge1xyXG4gICAgZmlsbDogcmdiKHZhcigtLWNvbG9yLXdhcm5pbmcpKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICB9XHJcbiAgMTAlIHtcclxuICAgIGZpbGw6IHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcclxuICAuYnRuX2NhdmVpbjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJiBzdmcge1xyXG4gICAgICBmaWxsOiByZ2IodmFyKC0tY29sb3Itd2FybmluZykpO1xyXG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuMXJlbSAwLjFyZW0gMC4xcmVtIHJnYih2YXIoLS1jb2xvci13YXJuaW5nLXNoYWRvdykpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBjb250YWluZXIgKG1heC13aWR0aDogMnJlbSkge1xyXG4gIC5idG5fY2F2ZWluIHtcclxuICAgICYgc3ZnIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRuX2NhdmVpbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tY29sb3Itd2FybmluZykpO1xyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9jYXZlaW4vYnRuQ2F2ZWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlOztFQUVmLHdDQUF3QztFQUN4QywwQ0FBMEM7RUFDMUMsd0NBQXdDO0VBQ3hDLHlDQUF5QztFQUN6Qyw2QkFBNkI7O0VBRTdCO0lBQ0UsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIseUJBQXlCOztJQUV6QixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLCtCQUErQjtJQUMvQiwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLCtCQUErQjtJQUMvQix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0VBQ0E7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTs7SUFFZjtNQUNFLCtCQUErQjtNQUMvQiwwRUFBMEU7SUFDNUU7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRTtRQUNJLGFBQWE7TUFDZjtFQUNKOztFQUVBO0lBQ0UsMkNBQTJDO0VBQzdDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJ0bl9jb250YWluZXIge1xcclxcbiAgY29udGFpbmVyLXR5cGU6IGlubGluZS1zaXplO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5idG5fY2F2ZWluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZzogMC4ycmVtO1xcclxcblxcclxcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHJnYigyMDAsIDIwMCwgMjAwKTtcXHJcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHJnYigxMDAsIDEwMCwgMTAwKTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoNzAsIDcwLCA3MCk7XFxyXFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJnYigxNzAsIDE3MCwgMTcwKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcclxcbiAgJiBzdmcge1xcclxcbiAgICB3aWR0aDogY2xhbXAoMHB4LCAxMDAlLCAycmVtKTtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xcclxcbiAgICBmaWxsOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcblxcclxcbiAgICBhbmltYXRpb24tbmFtZTogcm9sbDtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA2MHM7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogNjBzO1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyByb2xsIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgZmlsbDogcmdiKHZhcigtLWNvbG9yLXdhcm5pbmcpKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxuICA1JSB7XFxyXFxuICAgIGZpbGw6IHJnYih2YXIoLS1jb2xvci13YXJuaW5nKSk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDEwJSB7XFxyXFxuICAgIGZpbGw6IHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXHJcXG4gIC5idG5fY2F2ZWluOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgICAmIHN2ZyB7XFxyXFxuICAgICAgZmlsbDogcmdiKHZhcigtLWNvbG9yLXdhcm5pbmcpKTtcXHJcXG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuMXJlbSAwLjFyZW0gMC4xcmVtIHJnYih2YXIoLS1jb2xvci13YXJuaW5nLXNoYWRvdykpKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AY29udGFpbmVyIChtYXgtd2lkdGg6IDJyZW0pIHtcXHJcXG4gIC5idG5fY2F2ZWluIHtcXHJcXG4gICAgJiBzdmcge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnRuX2NhdmVpbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1jb2xvci13YXJuaW5nKSk7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiAwIDAgYXV0bztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVhZGVyIHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDAgMXJlbSAwLjVyZW07XHJcbn1cclxuXHJcbi5nYW1lLXNlbGVjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmdhbWUtc2VsZWN0X2ZpZWxkc2V0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IGNsYW1wKDFyZW0sIDEwMCUsIDI1cmVtKTtcclxuICBnYXA6IDAuMjVyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcblxyXG4gICYgLmZpZWxkc2V0X2xhYmVsIHtcclxuICAgIG1hcmdpbi1yaWdodDoxcmVtO1xyXG4gIH1cclxuXHJcbiAgJiAuZmllbGRzZXRfbGVnZW5kIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmdhbWUtc2VsZWN0X3NlbGVjdG9yIHtcclxuICBjb2xvcjogdmFyKC0tY29tbW9uLXRleHQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvZ2FtZVNlbGVjdG9yL2dhbWVTZWxlY3Rvci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixtQ0FBbUM7O0VBRW5DO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiwwQ0FBMEM7QUFDNUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxyXFxuICBmbGV4OiAwIDAgYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMCAxcmVtIDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtc2VsZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5nYW1lLXNlbGVjdF9maWVsZHNldCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IGNsYW1wKDFyZW0sIDEwMCUsIDI1cmVtKTtcXHJcXG4gIGdhcDogMC4yNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuXFxyXFxuICAmIC5maWVsZHNldF9sYWJlbCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDoxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiAuZmllbGRzZXRfbGVnZW5kIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtc2VsZWN0X3NlbGVjdG9yIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb21tb24tdGV4dC1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibG9ja3MtYmFja2dyb3VuZCk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNlbGwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2tzLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4uY2VsbFtyb2xlPVwiZ2FtZVwiXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1iYWNrZ3JvdW5kKTtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS1vcGFjaXR5LWNlbGwtdGV4dCkpO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1jZWxsLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5jZWxsX2ZpbGxbcm9sZT1cImdhbWVcIl0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtYmFja2dyb3VuZC1maWxsKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jZWxsW3JvbGU9XCJlbXB0eVwiXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2tzLWJhY2tncm91bmQpO1xyXG4gIGdyaWQtcm93OiAxIC8gc3BhbiB2YXIoLS1yb3ctY291bnQpO1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiB2YXIoLS1jb2x1bW4tY291bnQpO1xyXG59XHJcblxyXG4uY2VsbFtyb3ddIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxufVxyXG5cclxuLmNlbGxbZmlyc3Qtcm93XSB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5jZWxsW2NvbF0ge1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5jZWxsW2ZpcnN0LWNvbF0ge1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxufVxyXG5cclxuLmNlbGxfY2hlY2tlZFtyb2xlPVwiZ2FtZVwiXSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2VsbF9jaGVja2VkW3JvbGU9XCJnYW1lXCJdOjphZnRlcixcclxuLmNlbGxfY2hlY2tlZFtyb2xlPVwiZ2FtZVwiXTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEyMCU7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgdG9wOiA0NSU7XHJcbiAgbGVmdDogLTEwJTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY2VsbF9jaGVja2VkW3JvbGU9XCJnYW1lXCJdOjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWigtNDVkZWcpO1xyXG59XHJcblxyXG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgIHtcclxuLmNlbGxbcm9sZT1cImdhbWVcIl06aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmlsdGVyOiBpbnZlcnQodmFyKC0taG92ZXItaW52ZXJ0KSk7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvcGxvdENvbnRhaW5lci9jZWxsL2NlbGwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLGlCQUFpQjtFQUNqQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsOENBQThDO0VBQzlDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsbUNBQW1DO0VBQ25DLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLFFBQVE7RUFDUixRQUFRO0VBQ1IsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7QUFDQTtJQUNJLGVBQWU7SUFDZixtQ0FBbUM7RUFDckM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2VsbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibG9ja3MtYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5jZWxsW3JvbGU9XFxcImdhbWVcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWJhY2tncm91bmQpO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tb3BhY2l0eS1jZWxsLXRleHQpKTtcXHJcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1jZWxsLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsX2ZpbGxbcm9sZT1cXFwiZ2FtZVxcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtYmFja2dyb3VuZC1maWxsKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxbcm9sZT1cXFwiZW1wdHlcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibG9ja3MtYmFja2dyb3VuZCk7XFxyXFxuICBncmlkLXJvdzogMSAvIHNwYW4gdmFyKC0tcm93LWNvdW50KTtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiB2YXIoLS1jb2x1bW4tY291bnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbFtyb3ddIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbFtmaXJzdC1yb3ddIHtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbFtjb2xdIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsW2ZpcnN0LWNvbF0ge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbF9jaGVja2VkW3JvbGU9XFxcImdhbWVcXFwiXSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jZWxsX2NoZWNrZWRbcm9sZT1cXFwiZ2FtZVxcXCJdOjphZnRlcixcXHJcXG4uY2VsbF9jaGVja2VkW3JvbGU9XFxcImdhbWVcXFwiXTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTIwJTtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICB0b3A6IDQ1JTtcXHJcXG4gIGxlZnQ6IC0xMCU7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jZWxsX2NoZWNrZWRbcm9sZT1cXFwiZ2FtZVxcXCJdOjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGVaKC00NWRlZyk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSAge1xcclxcbi5jZWxsW3JvbGU9XFxcImdhbWVcXFwiXTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQodmFyKC0taG92ZXItaW52ZXJ0KSk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgICAuZ2FtZS1jb250YWluZXIge1xyXG4gICAgLS1jb2x1bW5zLWNvdW50OiAyMDtcclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tY29sdW1ucy1jb3VudCksIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCBhdXRvKTtcclxuXHJcbiAgICB3aWR0aDogY2xhbXAoMHB4LCA5NiUsIGNhbGMoMS41cmVtICogdmFyKC0tY29sdW1ucy1jb3VudCkpKTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XHJcblxyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XHJcbiAgfVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvcGxvdENvbnRhaW5lci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkVBQUU7SUFDRSxtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYix3REFBd0Q7SUFDeEQsbUNBQW1DOztJQUVuQywyREFBMkQ7SUFDM0QsY0FBYztJQUNkLGlCQUFpQjs7SUFFakIscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0NBQW9DO0VBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiAgLmdhbWUtY29udGFpbmVyIHtcXHJcXG4gICAgLS1jb2x1bW5zLWNvdW50OiAyMDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tY29sdW1ucy1jb3VudCksIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIGF1dG8pO1xcclxcblxcclxcbiAgICB3aWR0aDogY2xhbXAoMHB4LCA5NiUsIGNhbGMoMS41cmVtICogdmFyKC0tY29sdW1ucy1jb3VudCkpKTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcclxcblxcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcXHJcXG4gIH1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zY2hlbWUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4uc2NoZW1lLXNlbGVjdCB7XHJcbiAgY29sb3I6IHZhcigtLWNvbW1vbi10ZXh0LWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibG9ja3MtYmFja2dyb3VuZCk7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9zY2hlbWVTZWxlY3Rvci9zY2hlbWVTZWxlY3Rvci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLFdBQVc7RUFDWCxvQkFBb0I7O0VBRXBCLG1DQUFtQztFQUNuQyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsMENBQTBDO0FBQzVDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zY2hlbWUtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiAwIDAgYXV0bztcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuXFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zY2hlbWUtc2VsZWN0IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb21tb24tdGV4dC1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibG9ja3MtYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmRpYWxvZyB7XHJcbiAgbGVmdDogLTEwcmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmRpYWxvZzpoYXMoZGl2LnNjb3JlX3Nob3cpIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBkdmg7XHJcbiAgaW5zZXQ6IDA7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgLS13IDogY2xhbXAoMTByZW0sIDkwJSwgMjVyZW0pO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHRvcDogMnJlbTtcclxuICBsZWZ0OiAxMDAlO1xyXG4gIHdpZHRoOiB2YXIoLS13KTtcclxuICBtaW4taGVpZ2h0OiAxMHJlbTtcclxuXHJcbiAgY29sb3I6IHZhcigtLWNvbW1vbi10ZXh0LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2tzLWJhY2tncm91bmQpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjVyZW0gMC41cmVtIDAuNXJlbSB2YXIoLS1zY29yZS1zaGFkb3cpKTtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAxMDBtcztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcclxufVxyXG5cclxuLmNvbnRhaW5lcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAn4qyMJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDFyZW07XHJcbiAgbGVmdDogLTIuMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG5cclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2tzLWJhY2tncm91bmQpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKGhvdmVyKSB7XHJcbiAgLmNvbnRhaW5lcjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uc2NvcmVfaDEge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNjb3JlX3Nob3cge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxufVxyXG5cclxuLmNvbnRhaW5lcl9fcmVjb3JkcyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgMmZyO1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBnYXA6IDAuMnJlbTtcclxuXHJcbiAgbWluLWhlaWdodDogMXJlbTtcclxuXHJcbiAgYm9yZGVyOiAxcHMgc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcblxyXG4gICYgZGl2Om50aC1jaGlsZCgtbiszKSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICB9XHJcblxyXG4gICYgZGl2Om50aC1jaGlsZCgzbi0xKSB7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICYgZGl2Om50aC1jaGlsZCgzbikge1xyXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVjb3JkX2xhc3QtZ2FtZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NvcmUtbGFzdGdhbWUpO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9zY29yZS9zY29yZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLFFBQVE7O0VBRVIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCOztFQUVqQiwrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLDBDQUEwQztFQUMxQyxxQ0FBcUM7RUFDckMsNkRBQTZEO0VBQzdELHVCQUF1QjtFQUN2QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7O0VBRVosaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQiwwQ0FBMEM7RUFDMUMscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixXQUFXOztFQUVYLGdCQUFnQjs7RUFFaEIscUNBQXFDO0VBQ3JDLHFCQUFxQjs7RUFFckI7SUFDRSw0Q0FBNEM7RUFDOUM7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZGlhbG9nIHtcXHJcXG4gIGxlZnQ6IC0xMHJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZzpoYXMoZGl2LnNjb3JlX3Nob3cpIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMGR2aDtcXHJcXG4gIGluc2V0OiAwO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIC0tdyA6IGNsYW1wKDEwcmVtLCA5MCUsIDI1cmVtKTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICB0b3A6IDJyZW07XFxyXFxuICBsZWZ0OiAxMDAlO1xcclxcbiAgd2lkdGg6IHZhcigtLXcpO1xcclxcbiAgbWluLWhlaWdodDogMTByZW07XFxyXFxuXFxyXFxuICBjb2xvcjogdmFyKC0tY29tbW9uLXRleHQtY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2tzLWJhY2tncm91bmQpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMC41cmVtIDAuNXJlbSAwLjVyZW0gdmFyKC0tc2NvcmUtc2hhZG93KSk7XFxyXFxuICB0cmFuc2l0aW9uLWRlbGF5OiAxMDBtcztcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJ+KsjCc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgdG9wOiAxcmVtO1xcclxcbiAgbGVmdDogLTIuMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKGhvdmVyKSB7XFxyXFxuICAuY29udGFpbmVyOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVfaDEge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlX3Nob3cge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXJfX3JlY29yZHMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmciAyZnI7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBnYXA6IDAuMnJlbTtcXHJcXG5cXHJcXG4gIG1pbi1oZWlnaHQ6IDFyZW07XFxyXFxuXFxyXFxuICBib3JkZXI6IDFwcyBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcblxcclxcbiAgJiBkaXY6bnRoLWNoaWxkKC1uKzMpIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIGRpdjpudGgtY2hpbGQoM24tMSkge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgZGl2Om50aC1jaGlsZCgzbikge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnJlY29yZF9sYXN0LWdhbWUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NvcmUtbGFzdGdhbWUpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50aW1lciB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3RpbWVyL3RpbWVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGltZXIge1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIC0tb3BhY2l0eS1jZWxsLXRleHQ6IDA7XHJcbiAgLS1ob3Zlci1pbnZlcnQ6IDAuMjtcclxuXHJcbiAgLS1ib2R5LWJhY2dyb3VuZDogcmdiKDIzMCwgMjU1LCAyMzApO1xyXG4gIC0tYmxvY2tzLWJhY2tncm91bmQ6IHJnYigyMzEsIDI1NSwgMjU1KTtcclxuXHJcbiAgLS1jZWxsLWJhY2tncm91bmQ6IHJnYigyNDAsIDI0MCwgMjQwKTtcclxuICAtLWNlbGwtYmFja2dyb3VuZC1maWxsOiByZ2IoMCwgMCwgMCk7XHJcbiAgLS1jZWxsLWJvcmRlci1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xyXG5cclxuICAtLWJvcmRlci1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIC0tc2NvcmUtbGFzdGdhbWU6IHJnYigxNjUsIDI0NSwgMTQwKTtcclxuICAtLWNvbW1vbi10ZXh0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgLS1zY29yZS1zaGFkb3c6IHJnYigxMjUsIDEyNSwgMTI1KTtcclxuXHJcbiAgLS1jb2xvci13YXJuaW5nOiAyNTUsIDgwLCA4MDtcclxuICAtLWNvbG9yLXdhcm5pbmctc2hhZG93OiAwLCAwLCAwO1xyXG5cclxuICAtLWJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxufVxyXG5cclxuKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgaGVpZ2h0OiAxMDBkdmg7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG5cclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogdmFyKC0tY29tbW9uLXRleHQtY29sb3IpOztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJhY2dyb3VuZCk7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBmbGV4OiAxIDAgYXV0bztcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgY29sb3I6IHZhcigtLWNvbW1vbi10ZXh0LWNvbG9yKTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcclxuICAuYnV0dG9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gIH1cclxufVxyXG5cclxuLmdhbWVvdmVyIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBmaWx0ZXI6IGJsdXIoMXB4KSBvcGFjaXR5KDAuOCk7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjs7RUFFbkIsb0NBQW9DO0VBQ3BDLHVDQUF1Qzs7RUFFdkMscUNBQXFDO0VBQ3JDLG9DQUFvQztFQUNwQyx1Q0FBdUM7O0VBRXZDLDRCQUE0QjtFQUM1QixvQ0FBb0M7RUFDcEMsaUNBQWlDO0VBQ2pDLGtDQUFrQzs7RUFFbEMsNEJBQTRCO0VBQzVCLCtCQUErQjs7RUFFL0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7O0VBRWIsWUFBWTs7RUFFWix3RUFBd0U7RUFDeEUsK0JBQStCO0VBQy9CLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiwwQ0FBMEM7RUFDMUMsaUJBQWlCO0VBQ2pCLHFHQUFxRztFQUNyRyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZix1QkFBdUI7RUFDekI7QUFDRjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiw4QkFBOEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1vcGFjaXR5LWNlbGwtdGV4dDogMDtcXHJcXG4gIC0taG92ZXItaW52ZXJ0OiAwLjI7XFxyXFxuXFxyXFxuICAtLWJvZHktYmFjZ3JvdW5kOiByZ2IoMjMwLCAyNTUsIDIzMCk7XFxyXFxuICAtLWJsb2Nrcy1iYWNrZ3JvdW5kOiByZ2IoMjMxLCAyNTUsIDI1NSk7XFxyXFxuXFxyXFxuICAtLWNlbGwtYmFja2dyb3VuZDogcmdiKDI0MCwgMjQwLCAyNDApO1xcclxcbiAgLS1jZWxsLWJhY2tncm91bmQtZmlsbDogcmdiKDAsIDAsIDApO1xcclxcbiAgLS1jZWxsLWJvcmRlci1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xcclxcblxcclxcbiAgLS1ib3JkZXItY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gIC0tc2NvcmUtbGFzdGdhbWU6IHJnYigxNjUsIDI0NSwgMTQwKTtcXHJcXG4gIC0tY29tbW9uLXRleHQtY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gIC0tc2NvcmUtc2hhZG93OiByZ2IoMTI1LCAxMjUsIDEyNSk7XFxyXFxuXFxyXFxuICAtLWNvbG9yLXdhcm5pbmc6IDI1NSwgODAsIDgwO1xcclxcbiAgLS1jb2xvci13YXJuaW5nLXNoYWRvdzogMCwgMCwgMDtcXHJcXG5cXHJcXG4gIC0tYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGhlaWdodDogMTAwZHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogdmFyKC0tY29tbW9uLXRleHQtY29sb3IpOztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFjZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgZmxleDogMSAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbW1vbi10ZXh0LWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXHJcXG4gIC5idXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZW92ZXIge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICBmaWx0ZXI6IGJsdXIoMXB4KSBvcGFjaXR5KDAuOCk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0bkNhdmVpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0bkNhdmVpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnRuTG9hZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0bkxvYWQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0blJhbmRvbS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0blJhbmRvbS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnRuUmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idG5SZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnRuU2F2ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0blNhdmUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZVNlbGVjdG9yLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZVNlbGVjdG9yLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jZWxsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2VsbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGxvdENvbnRhaW5lci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Bsb3RDb250YWluZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NjaGVtZVNlbGVjdG9yLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2NoZW1lU2VsZWN0b3IuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Njb3JlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2NvcmUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RpbWVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGltZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICfRhtCy0LXRgtC90LDRjycsXHJcbiAgICBuYW1lOiAnY29sb3InLFxyXG4gICAgY29sb3JzOiB7XHJcbiAgICAgICdib2R5LWJhY2dyb3VuZCc6ICdyZ2IoMjMwLCAyNTUsIDIzMCknLFxyXG4gICAgICAnYmxvY2tzLWJhY2tncm91bmQnOiAncmdiKDIzMSwgMjU1LCAyNTUpJyxcclxuICAgICAgJ2NlbGwtYmFja2dyb3VuZCc6ICdyZ2IoMjQwLCAyNDAsIDI0MCknLFxyXG4gICAgICAnY2VsbC1iYWNrZ3JvdW5kLWZpbGwnOiAncmdiKDAsIDAsIDApJyxcclxuICAgICAgJ2NlbGwtYm9yZGVyLWNvbG9yJzogJ3JnYigyMDAsIDIwMCwgMjAwKScsXHJcbiAgICAgICdib3JkZXItY29sb3InOiAncmdiKDAsIDAsIDApJyxcclxuICAgICAgJ3Njb3JlLWxhc3RnYW1lJzogJ3JnYigxNjUsIDI0NSwgMTQwKScsXHJcbiAgICAgICdjb21tb24tdGV4dC1jb2xvcic6ICdyZ2IoMCwgMCwgMCknLFxyXG4gICAgICAnaG92ZXItaW52ZXJ0JzogJzAuMicsXHJcbiAgICAgICdzY29yZS1zaGFkb3cnOiAncmdiKDEyNSwgMTI1LCAxMjUpJyxcclxuICAgICAgJ2NvbG9yLXdhcm5pbmcnOiAnMjU1LCA4MCwgODAnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAn0YLRkdC80L3QsNGPJyxcclxuICAgIG5hbWU6ICdkYXJrJyxcclxuICAgIGNvbG9yczoge1xyXG4gICAgICAnYm9keS1iYWNncm91bmQnOiAncmdiKDUwLCA1MCwgNTApJyxcclxuICAgICAgJ2Jsb2Nrcy1iYWNrZ3JvdW5kJzogJ3JnYig4MCwgODAsIDgwKScsXHJcbiAgICAgICdjZWxsLWJhY2tncm91bmQnOiAncmdiKDEzMCwgMTMwLCAxMzApJyxcclxuICAgICAgJ2NlbGwtYmFja2dyb3VuZC1maWxsJzogJ3JnYig2MCwgNjAsIDYwKScsXHJcbiAgICAgICdjZWxsLWJvcmRlci1jb2xvcic6ICdyZ2IoMTYwLCAxNjAsIDE2MCknLFxyXG4gICAgICAnYm9yZGVyLWNvbG9yJzogJ3JnYigxNTEsIDE1MSwgMTUxKScsXHJcbiAgICAgICdzY29yZS1sYXN0Z2FtZSc6ICdyZ2IoMzAsIDIwLCA0MCknLFxyXG4gICAgICAnY29tbW9uLXRleHQtY29sb3InOiAncmdiKDIzMCwgMjMwLCAyMzApJyxcclxuICAgICAgJ2hvdmVyLWludmVydCc6ICcwLjcnLFxyXG4gICAgICAnc2NvcmUtc2hhZG93JzogJ3JnYigwLCAwLCAwKScsXHJcbiAgICAgICdjb2xvci13YXJuaW5nJzogJzI1NSwgODAsIDgwJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ9GB0LLQtdGC0LvQsNGPJyxcclxuICAgIG5hbWU6ICdsaWdodCcsXHJcbiAgICBjb2xvcnM6IHtcclxuICAgICAgJ2JvZHktYmFjZ3JvdW5kJzogJ3JnYigyMzAsIDIzMCwgMjMwKScsXHJcbiAgICAgICdibG9ja3MtYmFja2dyb3VuZCc6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxyXG4gICAgICAnY2VsbC1iYWNrZ3JvdW5kJzogJ3JnYigyNDAsIDI0MCwgMjQwKScsXHJcbiAgICAgICdjZWxsLWJhY2tncm91bmQtZmlsbCc6ICdyZ2IoOTAsIDkwLCA5MCknLFxyXG4gICAgICAnY2VsbC1ib3JkZXItY29sb3InOiAncmdiKDIwMCwgMjAwLCAyMDApJyxcclxuICAgICAgJ2JvcmRlci1jb2xvcic6ICdyZ2IoMTQwLCAxNDAsIDE0MCknLFxyXG4gICAgICAnc2NvcmUtbGFzdGdhbWUnOiAncmdiKDI1NSwgMjIwLCAyMjApJyxcclxuICAgICAgJ2NvbW1vbi10ZXh0LWNvbG9yJzogJ3JnYigxMDAsIDEwMCwgMTAwKScsXHJcbiAgICAgICdob3Zlci1pbnZlcnQnOiAnMC4yJyxcclxuICAgICAgJ3Njb3JlLXNoYWRvdyc6ICdyZ2IoMTUwLCAxNTAsIDE1MCknLFxyXG4gICAgICAnY29sb3Itd2FybmluZyc6ICcyNTUsIDgwLCA4MCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9zdGF0ZSc7XHJcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NyZWF0ZUVsZW1lbnQnO1xyXG5pbXBvcnQgeyBzdGFydFRpbWVyIH0gZnJvbSAnLi4vLi4vdGltZXIvdGltZXInO1xyXG5pbXBvcnQgJy4vYnRuQ2F2ZWluLmNzcyc7XHJcbmNvbnN0IGljb24gPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiNDhcIiB2aWV3Qm94PVwiMCAtOTYwIDk2MCA5NjBcIiB3aWR0aD1cIjQ4XCI+PHBhdGggZD1cIk00ODAtODBxLTgzIDAtMTU2LTMxLjVUMTk3LTE5N3EtNTQtNTQtODUuNS0xMjdUODAtNDgwcTAtODMgMzEuNS0xNTZUMTk3LTc2M3E1NC01NCAxMjctODUuNVQ0ODAtODgwcTgzIDAgMTU2IDMxLjVUNzYzLTc2M3E1NCA1NCA4NS41IDEyN1Q4ODAtNDgwcTAgODMtMzEuNSAxNTZUNzYzLTE5N3EtNTQgNTQtMTI3IDg1LjVUNDgwLTgwWm0wLTYwcTYxLjAxMyAwIDExNy41MDYtMjAuNVE2NTQtMTgxIDY5OS0yMjBMMjIwLTY5OXEtMzggNDYtNTkgMTAyLjE2OVQxNDAtNDgwcTAgMTQyLjM3NSA5OC44MTIgMjQxLjE4OFEzMzcuNjI1LTE0MCA0ODAtMTQwWm0yNTktMTIxcTM3LTQ1IDU5LTEwMS40OTNRODIwLTQxOC45ODcgODIwLTQ4MHEwLTE0Mi4zNzUtOTguODEyLTI0MS4xODhRNjIyLjM3NS04MjAgNDgwLTgyMHEtNjAuNjYyIDAtMTE2LjgzMSAyMVEzMDctNzc4IDI2MS03MzlsNDc4IDQ3OFpcIi8+PC9zdmc+YDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHsgY2xzOiAnYnRuX2NvbnRhaW5lcicgfSk7XHJcbiAgY29uc3QgYnRuID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdidXR0b24nLFxyXG4gICAgY2xzOiAnYnRuX2NhdmVpbicsXHJcbiAgICBhdHRyOiBbWyd0aXRsZScsICfQodC00LDRjtGB0YwhINCf0L7QutCw0LfQsNGC0Ywg0YDQtdGI0LXQvdC40LUuJ11dLFxyXG4gIH0pO1xyXG4gIGJ0bi5pbm5lckhUTUwgPSBpY29uO1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQ2F2ZWluKTtcclxuICBjb250YWluZXIuYXBwZW5kKGJ0bik7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBjbGlja0NhdmVpbiA9ICgpID0+IHtcclxuICBzdGF0ZS5nYW1lLnNob3dDZWxsc1ZhbHVlID0gdHJ1ZTtcclxuICBzdGF0ZS5nYW1lLmlzR2FtZVN0YXJ0ZWQgPSBmYWxzZTtcclxuICBzdGFydFRpbWVyKGZhbHNlKTtcclxuICAvLyBzdGF0ZS5nYW1lLnRpbWVyID0gMDtcclxuICBjb25zdCBvcGFjaXR5ID0gJzEnO1xyXG4gIHN0YXRlLmh0bWwucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1vcGFjaXR5LWNlbGwtdGV4dCcsIG9wYWNpdHkpO1xyXG4gIHN0YXRlLmh0bWwubWFpbi5jbGFzc0xpc3QuYWRkKCdnYW1lb3ZlcicpO1xyXG59O1xyXG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuLi8uLi8uLi91dGlscy9jcmVhdGVFbGVtZW50JztcclxuaW1wb3J0IHsgbG9hZFN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbG9jYWxTdG9yYWdlJztcclxuaW1wb3J0ICcuL2J0bkxvYWQuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBidG5Mb2FkID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdidXR0b24nLFxyXG4gICAgdHh0OiAnQ29udGludWUgbGFzdCBnYW1lJyxcclxuICAgIGNsczogJ2J1dHRvbicsXHJcbiAgfSk7XHJcbiAgYnRuTG9hZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRTdGF0ZSk7XHJcbiAgcmV0dXJuIGJ0bkxvYWQ7XHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9zdGF0ZSc7XHJcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NyZWF0ZUVsZW1lbnQnO1xyXG5pbXBvcnQgeyBzd2l0Y2hHYW1lIH0gZnJvbSAnLi4vLi4vZ2FtZVNlbGVjdG9yL2dhbWVTZWxlY3Rvcic7XHJcbmltcG9ydCByZW5kZXJEZXNrIGZyb20gJy4uLy4uL3Bsb3RDb250YWluZXIvcmVuZGVyRGVzayc7XHJcbmltcG9ydCB7IHN0YXJ0VGltZXIgfSBmcm9tICcuLi8uLi90aW1lci90aW1lcic7XHJcbmltcG9ydCAnLi9idG5SYW5kb20uY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ2J1dHRvbicsXHJcbiAgICB0eHQ6ICdSYW5kb20gZ2FtZScsXHJcbiAgICBjbHM6ICdidXR0b24nLFxyXG4gIH0pO1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJhbmRvbUdhbWUpO1xyXG5cclxuICByZXR1cm4gYnV0dG9uO1xyXG59O1xyXG5cclxuY29uc3QgcmFuZG9tR2FtZSA9ICgpID0+IHtcclxuICBsZXQgY291bnRHYW1lcyA9IDA7XHJcbiAgY29uc3QgeyBmaWVsZHMgfSA9IHN0YXRlO1xyXG5cclxuICBmb3IgKGNvbnN0IGZpZWxkIGluIGZpZWxkcykge1xyXG4gICAgY291bnRHYW1lcyArPSBmaWVsZHNbZmllbGRdPy5sZW5ndGggfHwgMDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJhbmRvbUlEID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGNvdW50R2FtZXMgLSAxKSk7XHJcbiAgY29uc3QgZXJyb3IgPSAncmFuZG9tSUQg0LTQvtC70LbQtdC9INCx0YvRgtGMINC80LXQvdGM0YjQtSBjb3VudEdhbWVzJztcclxuICBjb25zb2xlLmFzc2VydChyYW5kb21JRCA8IGNvdW50R2FtZXMsIHsgcmFuZG9tSUQsIGNvdW50R2FtZXMsIGVycm9yIH0pO1xyXG5cclxuICBzdGF0ZS5nYW1lLmN1cnJlbnRHYW1lID0gcmFuZG9tSUQ7XHJcbiAgcmVuZGVyRGVzayhyYW5kb21JRCk7XHJcbiAgc3dpdGNoR2FtZShyYW5kb21JRCk7XHJcbiAgc3RhdGUuZ2FtZS50aW1lciA9IDA7XHJcbiAgc3RhcnRUaW1lcihmYWxzZSk7XHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9zdGF0ZSc7XHJcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NyZWF0ZUVsZW1lbnQnO1xyXG5pbXBvcnQgcmVuZGVyRGVzayBmcm9tICcuLi8uLi9wbG90Q29udGFpbmVyL3JlbmRlckRlc2snO1xyXG5pbXBvcnQgeyBzdGFydFRpbWVyIH0gZnJvbSAnLi4vLi4vdGltZXIvdGltZXInO1xyXG5pbXBvcnQgJy4vYnRuUmVzZXQuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBidG5SZXNldCA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnYnV0dG9uJyxcclxuICAgIHR4dDogJ1Jlc2V0IGdhbWUnLFxyXG4gICAgY2xzOiAnYnV0dG9uJyxcclxuICB9KTtcclxuICBidG5SZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0R2FtZSk7XHJcblxyXG4gIHJldHVybiBidG5SZXNldDtcclxufTtcclxuXHJcbmNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcclxuICByZW5kZXJEZXNrKHN0YXRlLmdhbWUuY3VycmVudEdhbWUpO1xyXG4gIHN0YXRlLmdhbWUudGltZXIgPSAwO1xyXG4gIGNvbnN0IG9wYWNpdHkgPSAnMCc7XHJcbiAgc3RhdGUuaHRtbC5yb290LnN0eWxlLnNldFByb3BlcnR5KCctLW9wYWNpdHktY2VsbC10ZXh0Jywgb3BhY2l0eSk7XHJcbiAgc3RhdGUuaHRtbC5tYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2dhbWVvdmVyJyk7XHJcbiAgc3RhcnRUaW1lcihmYWxzZSk7XHJcbn07XHJcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NyZWF0ZUVsZW1lbnQnO1xyXG5pbXBvcnQgeyBzYXZlU3RhdGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9sb2NhbFN0b3JhZ2UnO1xyXG5pbXBvcnQgJy4vYnRuU2F2ZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IGJ0blNhdmUgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ2J1dHRvbicsXHJcbiAgICB0eHQ6ICdTYXZlIGdhbWUnLFxyXG4gICAgY2xzOiAnYnV0dG9uJyxcclxuICB9KTtcclxuICBidG5TYXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZVN0YXRlKTtcclxuICByZXR1cm4gYnRuU2F2ZTtcclxufTtcclxuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlRWxlbWVudCc7XHJcbmltcG9ydCBidG5Mb2FkIGZyb20gJy4uL2J1dHRvbnMvbG9hZC9idG5Mb2FkJztcclxuaW1wb3J0IGJ0blJhbmRvbSBmcm9tICcuLi9idXR0b25zL3JhbmRvbS9idG5SYW5kb20uJztcclxuaW1wb3J0IGJ0blJlc2V0IGZyb20gJy4uL2J1dHRvbnMvcmVzZXQvYnRuUmVzZXQnO1xyXG5pbXBvcnQgYnRuU2F2ZSBmcm9tICcuLi9idXR0b25zL3NhdmUvYnRuU2F2ZSc7XHJcbmltcG9ydCAnLi9mb290ZXIuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBmb290ZXIgPSBjcmVhdGVFbGVtZW50KHsgdGFnOiAnZm9vdGVyJywgY2xzOiAnZm9vdGVyJyB9KTtcclxuICBjb25zdCByZXNldCA9IGJ0blJlc2V0KCk7XHJcbiAgY29uc3Qgc2F2ZSA9IGJ0blNhdmUoKTtcclxuICBjb25zdCBsb2FkID0gYnRuTG9hZCgpO1xyXG4gIGNvbnN0IHJhbmRvbSA9IGJ0blJhbmRvbSgpO1xyXG5cclxuICBmb290ZXIuYXBwZW5kKHJlc2V0LCBzYXZlLCBsb2FkLCByYW5kb20pO1xyXG4gIHJldHVybiBmb290ZXI7XHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZSc7XHJcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZUVsZW1lbnQnO1xyXG5pbXBvcnQgY3JlYXRlT3B0aW9ucyBmcm9tICcuLi8uLi91dGlscy9jcmVhdGVPcHRpb25zJztcclxuaW1wb3J0IHJlbmRlckRlc2ssIHsgdXBkYXRlRGVzayB9IGZyb20gJy4uL3Bsb3RDb250YWluZXIvcmVuZGVyRGVzayc7XHJcbmltcG9ydCB7IHN0YXJ0VGltZXIgfSBmcm9tICcuLi90aW1lci90aW1lcic7XHJcbmltcG9ydCAnLi9nYW1lU2VsZWN0b3IuY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lU2VsZWN0b3IgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudCh7IHRhZzogJ2hlYWRlcicsIGNsczogJ2hlYWRlcicgfSk7XHJcbiAgY29uc3QgZm9ybSA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdmb3JtJywgY2xzOiAnZm9ybScgfSk7XHJcbiAgY29uc3QgZ2FtZVNlbGVjdENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoeyBjbHM6ICdnYW1lLXNlbGVjdCcgfSk7XHJcblxyXG4gIGNvbnN0IGZpZWxkU2V0ID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdmaWVsZHNldCcsXHJcbiAgICBjbHM6ICdnYW1lLXNlbGVjdF9maWVsZHNldCcsXHJcbiAgfSk7XHJcbiAgc3RhdGUuaHRtbC5maWVsZFNldCA9IGZpZWxkU2V0O1xyXG4gIGNvbnN0IGxlZ2VuZCA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnbGVnZW5kJyxcclxuICAgIGNsczogJ2ZpZWxkc2V0X2xlZ2VuZCcsXHJcbiAgICB0eHQ6ICfRgdC70L7QttC90L7RgdGC0YwnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBnYW1lU2VsZWN0TGFiZWwgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ2xhYmVsJyxcclxuICAgIHR4dDogJ9CS0YvQsdC+0YAg0LjQs9GA0YsnLFxyXG4gICAgYXR0cjogW1snZm9yJywgJ2dhbWUtc2VsZWN0J11dLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGdhbWVTZWxlY3QgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ3NlbGVjdCcsXHJcbiAgICBjbHM6ICdnYW1lLXNlbGVjdF9zZWxlY3RvcicsXHJcbiAgICBhdHRyOiBbWydpZCcsICdnYW1lLXNlbGVjdCddXSxcclxuICB9KTtcclxuICBzdGF0ZS5odG1sLmdhbWVTZWxlY3QgPSBnYW1lU2VsZWN0O1xyXG5cclxuICBjb25zdCBnYW1lRmlsdGVyTGFiZWw1ID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdsYWJlbCcsXHJcbiAgICB0eHQ6ICc1eDUnLFxyXG4gICAgY2xzOiAnZmllbGRzZXRfbGFiZWwnLFxyXG4gICAgYXR0cjogW1snZm9yJywgJ2dhbWUtZmlsdGVyLTV4NSddXSxcclxuICB9KTtcclxuICBjb25zdCBnYW1lRmlsdGVyNSA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnaW5wdXQnLFxyXG4gICAgYXR0cjogW1xyXG4gICAgICBbJ3R5cGUnLCAncmFkaW8nXSxcclxuICAgICAgWyduYW1lJywgJ2dhbWUtZmlsdGVyJ10sXHJcbiAgICAgIFsndmFsdWUnLCAnNXg1J10sXHJcbiAgICAgIFsnaWQnLCAnZ2FtZS1maWx0ZXItNXg1J10sXHJcbiAgICAgIFsnY2hlY2tlZCcsICcnXSxcclxuICAgICAgWydhdXRvZm9jdXMnLCAnJ10sXHJcbiAgICBdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGdhbWVGaWx0ZXJMYWJlbDEwID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdsYWJlbCcsXHJcbiAgICB0eHQ6ICcxMHgxMCcsXHJcbiAgICBjbHM6ICdmaWVsZHNldF9sYWJlbCcsXHJcbiAgICBhdHRyOiBbWydmb3InLCAnZ2FtZS1maWx0ZXItMTB4MTAnXV0sXHJcbiAgfSk7XHJcbiAgY29uc3QgZ2FtZUZpbHRlcjEwID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdpbnB1dCcsXHJcbiAgICBhdHRyOiBbXHJcbiAgICAgIFsndHlwZScsICdyYWRpbyddLFxyXG4gICAgICBbJ25hbWUnLCAnZ2FtZS1maWx0ZXInXSxcclxuICAgICAgWyd2YWx1ZScsICcxMHgxMCddLFxyXG4gICAgICBbJ2lkJywgJ2dhbWUtZmlsdGVyLTEweDEwJ10sXHJcbiAgICBdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGdhbWVGaWx0ZXJMYWJlbDE1ID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdsYWJlbCcsXHJcbiAgICB0eHQ6ICcxNXgxNScsXHJcbiAgICBjbHM6ICdmaWVsZHNldF9sYWJlbCcsXHJcbiAgICBhdHRyOiBbWydmb3InLCAnZ2FtZS1maWx0ZXItMTV4MTUnXV0sXHJcbiAgfSk7XHJcbiAgY29uc3QgZ2FtZUZpbHRlcjE1ID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdpbnB1dCcsXHJcbiAgICBhdHRyOiBbXHJcbiAgICAgIFsndHlwZScsICdyYWRpbyddLFxyXG4gICAgICBbJ25hbWUnLCAnZ2FtZS1maWx0ZXInXSxcclxuICAgICAgWyd2YWx1ZScsICcxNXgxNSddLFxyXG4gICAgICBbJ2lkJywgJ2dhbWUtZmlsdGVyLTE1eDE1J10sXHJcbiAgICBdLFxyXG4gIH0pO1xyXG5cclxuICBmaWVsZFNldC5hcHBlbmQoXHJcbiAgICBsZWdlbmQsXHJcbiAgICBnYW1lRmlsdGVyNSxcclxuICAgIGdhbWVGaWx0ZXJMYWJlbDUsXHJcbiAgICBnYW1lRmlsdGVyMTAsXHJcbiAgICBnYW1lRmlsdGVyTGFiZWwxMCxcclxuICAgIGdhbWVGaWx0ZXIxNSxcclxuICAgIGdhbWVGaWx0ZXJMYWJlbDE1XHJcbiAgKTtcclxuICBmb3JtLmFwcGVuZChmaWVsZFNldCwgZ2FtZVNlbGVjdENvbnRhaW5lcik7XHJcbiAgaGVhZGVyLmFwcGVuZChmb3JtKTtcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZUZpbHRlcik7XHJcbiAgZ2FtZVNlbGVjdENvbnRhaW5lci5hcHBlbmQoZ2FtZVNlbGVjdExhYmVsLCBnYW1lU2VsZWN0KTtcclxuICByZXR1cm4gaGVhZGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN3aXRjaEdhbWUgPSAoaWQpID0+IHtcclxuICBjb25zdCB7IGZpZWxkcyB9ID0gc3RhdGU7XHJcbiAgbGV0IGdhbWUgPSBudWxsO1xyXG5cclxuICBmb3IgKGNvbnN0IGRpZmZpY3VsdHkgaW4gZmllbGRzKSB7XHJcbiAgICBnYW1lID0gZmllbGRzW2RpZmZpY3VsdHldLmZpbHRlcigoZykgPT4gZy5pZCA9PT0gK2lkKTtcclxuICAgIGlmIChnYW1lLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCByYWRpbyA9IHN0YXRlLmh0bWwuZmllbGRTZXQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBgaW5wdXRbdmFsdWU9XCIke2RpZmZpY3VsdHl9XCJdYFxyXG4gICAgICApO1xyXG4gICAgICByYWRpbyAmJiAocmFkaW8uY2hlY2tlZCA9IHRydWUpO1xyXG4gICAgICBjaGFuZ2VGaWx0ZXIoZGlmZmljdWx0eSwgaWQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY2hhbmdlRmlsdGVyID0gKGUsIGlkKSA9PiB7XHJcbiAgY29uc3QgdmFsdWUgPSBlLnRhcmdldD8udmFsdWUgfHwgZTtcclxuXHJcbiAgY29uc3QgeyBmaWVsZHMgfSA9IHN0YXRlO1xyXG4gIGNvbnN0IGZpbHRlcnMgPSBPYmplY3Qua2V5cyhzdGF0ZS5maWVsZHMpO1xyXG4gIGNvbnN0IGlzRmlsdGVyID0gZmlsdGVycy5pbmNsdWRlcyh2YWx1ZSk7XHJcbiAgaWYgKGlzRmlsdGVyKSB7XHJcbiAgICBjb25zdCBsaXN0R2FtZXMgPSBmaWVsZHNbdmFsdWVdO1xyXG4gICAgc3RhdGUuZ2FtZS5jdXJyZW50R2FtZSA9IGlkIHx8IGxpc3RHYW1lc1swXS5pZDtcclxuICAgIHN0YXRlLmdhbWUuZGlmZmljdWx0eSA9IHZhbHVlO1xyXG4gICAgY3JlYXRlT3B0aW9ucyhzdGF0ZS5odG1sLmdhbWVTZWxlY3QsIGxpc3RHYW1lcyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0YXRlLmdhbWUuY3VycmVudEdhbWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgY29uc3Qgb3BhY2l0eSA9ICcwJztcclxuICBzdGF0ZS5odG1sLnJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tb3BhY2l0eS1jZWxsLXRleHQnLCBvcGFjaXR5KTtcclxuICBzdGF0ZS5odG1sLm1haW4uY2xhc3NMaXN0LnJlbW92ZSgnZ2FtZW92ZXInKTtcclxuICBpZiAoZS50YXJnZXQ/LnZhbHVlKSB7XHJcbiAgICBzdGF0ZS5nYW1lLnRpbWVyID0gMDtcclxuICAgIHN0YXJ0VGltZXIoZmFsc2UpO1xyXG4gICAgcmVuZGVyRGVzayhzdGF0ZS5nYW1lLmN1cnJlbnRHYW1lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdXBkYXRlRGVzayhzdGF0ZS5nYW1lLmN1cnJlbnRHYW1lKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NyZWF0ZUVsZW1lbnQnO1xyXG5pbXBvcnQgJy4vY2VsbC5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IGNlbGwgPSBjcmVhdGVFbGVtZW50KHsgY2xzOiAnY2VsbCcgfSk7XHJcbiAgcmV0dXJuIGNlbGw7XHJcbn07XHJcbiIsImltcG9ydCAnLi9wbG90Q29udGFpbmVyLmNzcyc7XHJcbmltcG9ydCBzdGF0ZSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZSc7XHJcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZUVsZW1lbnQnO1xyXG5pbXBvcnQgeyBwYXJzZVRpbWVyLCBzdGFydFRpbWVyIH0gZnJvbSAnLi4vdGltZXIvdGltZXInO1xyXG5pbXBvcnQgc291bmRGaWxsQ2VsbCBmcm9tICcuL3NvdW5kL3NvdW5kRmlsbENlbGwubXAzJztcclxuaW1wb3J0IHNvdW5kRmlsbENyb3NzIGZyb20gJy4vc291bmQvc291bmRGaWxsQ3Jvc3MubXAzJztcclxuaW1wb3J0IHNvdW5kQ2xlYXIgZnJvbSAnLi9zb3VuZC9zb3VuZENsZWFyLm1wMyc7XHJcbmltcG9ydCB7IHNhdmVSZWNvcmRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2FtZVJlY29yZCc7XHJcbmltcG9ydCB7IHVwZGF0ZVNjb3JlIH0gZnJvbSAnLi4vc2NvcmUvc2NvcmUnO1xyXG5jb25zdCBzbmRGaWxsQ2VsbCA9IG5ldyBBdWRpbyhzb3VuZEZpbGxDZWxsKTtcclxuY29uc3Qgc25kRmlsbENyb3NzID0gbmV3IEF1ZGlvKHNvdW5kRmlsbENyb3NzKTtcclxuY29uc3Qgc25kQ2xlYXIgPSBuZXcgQXVkaW8oc291bmRDbGVhcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGNsczogJ2dhbWUtY29udGFpbmVyJyB9KTtcclxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGNvbnRleHRNZW51SGFuZGxlcik7XHJcbiAgc3RhdGUuaHRtbC5wbG90Q29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBjaGVja0dhbWVTdGFydCA9ICgpID0+IHtcclxuICBpZiAoIXN0YXRlLmdhbWUuaXNHYW1lU3RhcnRlZCkge1xyXG4gICAgc3RhdGUuZ2FtZS5pc0dhbWVTdGFydGVkID0gdHJ1ZTtcclxuICAgIHN0YXJ0VGltZXIoKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRDbGlja2VkQ2VsbCA9ICh0YXJnZXQpID0+IHtcclxuICBjb25zdCB7IHBsb3QgfSA9IHN0YXRlLmdhbWU7XHJcbiAgcmV0dXJuIHBsb3QuZmxhdCgxKS5maWx0ZXIoKGNlbGwpID0+IGNlbGwuZWxlbWVudCA9PT0gdGFyZ2V0KVswXTtcclxufTtcclxuXHJcbmNvbnN0IGNvbnRleHRNZW51SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGNsaWNrZWRDZWxsID0gZ2V0Q2xpY2tlZENlbGwoZS50YXJnZXQpO1xyXG4gIGlmIChjbGlja2VkQ2VsbCkge1xyXG4gICAgY29uc3QgY2VsbFN0YXRlID0gY2xpY2tlZENlbGwuc3RhdGU7XHJcbiAgICBzd2l0Y2ggKGNlbGxTdGF0ZSkge1xyXG4gICAgICBjYXNlICfimqonOlxyXG4gICAgICAgIHNuZEZpbGxDcm9zcy5wbGF5KCk7XHJcbiAgICAgICAgY2xpY2tlZENlbGwuc3RhdGUgPSAneCc7XHJcbiAgICAgICAgY2xpY2tlZENlbGwuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjZWxsX2NoZWNrZWQnKTtcclxuICAgICAgICBjbGlja2VkQ2VsbC5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NlbGxfZmlsbCcpO1xyXG4gICAgICAgIGNoZWNrR2FtZVN0YXJ0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ+Kaqyc6XHJcbiAgICAgICAgc25kRmlsbENyb3NzLnBsYXkoKTtcclxuICAgICAgICBjbGlja2VkQ2VsbC5zdGF0ZSA9ICd4JztcclxuICAgICAgICBjbGlja2VkQ2VsbC5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NlbGxfY2hlY2tlZCcpO1xyXG4gICAgICAgIGNsaWNrZWRDZWxsLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2VsbF9maWxsJyk7XHJcbiAgICAgICAgY2hlY2tHYW1lU3RhcnQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAneCc6XHJcbiAgICAgICAgc25kQ2xlYXIucGxheSgpO1xyXG4gICAgICAgIGNsaWNrZWRDZWxsLnN0YXRlID0gJ+Kaqic7XHJcbiAgICAgICAgY2xpY2tlZENlbGwuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjZWxsX2NoZWNrZWQnKTtcclxuICAgICAgICBjbGlja2VkQ2VsbC5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NlbGxfZmlsbCcpO1xyXG4gICAgICAgIGNoZWNrR2FtZVN0YXJ0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNsaWNrSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgY29uc3QgY2xpY2tlZENlbGwgPSBnZXRDbGlja2VkQ2VsbChlLnRhcmdldCk7XHJcbiAgaWYgKGNsaWNrZWRDZWxsKSB7XHJcbiAgICBjb25zdCBjZWxsU3RhdGUgPSBjbGlja2VkQ2VsbC5zdGF0ZTtcclxuICAgIHN3aXRjaCAoY2VsbFN0YXRlKSB7XHJcbiAgICAgIGNhc2UgJ+Kaqic6XHJcbiAgICAgICAgc25kRmlsbENlbGwucGxheSgpO1xyXG4gICAgICAgIGNsaWNrZWRDZWxsLnN0YXRlID0gJ+Kaqyc7XHJcbiAgICAgICAgY2xpY2tlZENlbGwuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjZWxsX2ZpbGwnKTtcclxuICAgICAgICBjbGlja2VkQ2VsbC5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NlbGxfY2hlY2tlZCcpO1xyXG4gICAgICAgIGNoZWNrR2FtZVN0YXJ0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ+Kaqyc6XHJcbiAgICAgICAgc25kQ2xlYXIucGxheSgpO1xyXG4gICAgICAgIGNsaWNrZWRDZWxsLnN0YXRlID0gJ+Kaqic7XHJcbiAgICAgICAgY2xpY2tlZENlbGwuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjZWxsX2ZpbGwnKTtcclxuICAgICAgICBjbGlja2VkQ2VsbC5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NlbGxfY2hlY2tlZCcpO1xyXG4gICAgICAgIGNoZWNrR2FtZVN0YXJ0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3gnOlxyXG4gICAgICAgIHNuZEZpbGxDZWxsLnBsYXkoKTtcclxuICAgICAgICBjbGlja2VkQ2VsbC5zdGF0ZSA9ICfimqsnO1xyXG4gICAgICAgIGNsaWNrZWRDZWxsLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2VsbF9maWxsJyk7XHJcbiAgICAgICAgY2xpY2tlZENlbGwuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjZWxsX2NoZWNrZWQnKTtcclxuICAgICAgICBjaGVja0dhbWVTdGFydCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNBbGxDb3JyZWN0Q2hlY2tlZCgpKSBzZXRUaW1lb3V0KCgpID0+IGdhbWVPdmVyKCksIDApO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGlzQWxsQ29ycmVjdENoZWNrZWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBwbG90IH0gPSBzdGF0ZS5nYW1lO1xyXG4gIGNvbnN0IHBsb3RXaXRob3V0WCA9IHBsb3QuZmxhdCgxKS5tYXAoKGNlbGwpID0+IHtcclxuICAgIGlmIChjZWxsLnN0YXRlID09PSAneCcpIHJldHVybiB7IC4uLmNlbGwsIHN0YXRlOiAn4pqqJyB9O1xyXG4gICAgcmV0dXJuIGNlbGw7XHJcbiAgfSk7XHJcbiAgcmV0dXJuICFwbG90V2l0aG91dFguc29tZSgoY2VsbCkgPT4gY2VsbC5zdGF0ZSAhPT0gY2VsbC52YWx1ZSk7XHJcbn07XHJcblxyXG5jb25zdCBnYW1lT3ZlciA9ICgpID0+IHtcclxuICBjb25zdCBtc2cgPSBgR3JlYXQhIFlvdSBoYXZlIHNvbHZlZCB0aGUgbm9ub2dyYW0gaW4gJHtwYXJzZVRpbWVyKFxyXG4gICAgc3RhdGUuZ2FtZS50aW1lclxyXG4gICl9IHNlY29uZHMhYDtcclxuICBzYXZlUmVjb3JkcygpO1xyXG4gIHVwZGF0ZVNjb3JlKG1zZyk7XHJcbiAgc3RhdGUuaHRtbC5zY29yZS5jbGFzc0xpc3QuYWRkKCdzY29yZV9zaG93Jyk7XHJcblxyXG4gIHN0YXRlLmdhbWUudGltZXIgPSAwO1xyXG4gIHN0YXRlLmh0bWwubWFpbi5jbGFzc0xpc3QuYWRkKCdnYW1lb3ZlcicpO1xyXG4gIHN0YXJ0VGltZXIoZmFsc2UpO1xyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi4vLi4vc3RhdGUvc3RhdGUnO1xyXG5pbXBvcnQgZ2V0UGxvdCBmcm9tICcuLi8uLi91dGlscy9nZXRQbG90JztcclxuaW1wb3J0IHJvdGF0ZU1hdHJpeCBmcm9tICcuLi8uLi91dGlscy9yb3RhdGVNYXRyaXgnO1xyXG5pbXBvcnQgYnRuQ2F2ZWluIGZyb20gJy4uL2J1dHRvbnMvY2F2ZWluL2J0bkNhdmVpbic7XHJcbmltcG9ydCBuZXdDZWxsIGZyb20gJy4vY2VsbC9uZXdDZWxsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChpZCA9IDApID0+IHtcclxuICBjb25zdCBwbG90ID0gWy4uLmdldFBsb3QoaWQpXTtcclxuICBpZiAoIXBsb3QpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJvdGF0ZWRQbG90ID0gcm90YXRlTWF0cml4KHBsb3QpO1xyXG4gIGNvbnN0IGNsdWVUb3BSb3RhdGVkID0gY3JlYXRlQ2x1ZUFycmF5KHJvdGF0ZWRQbG90KTtcclxuICAvLyDQstGL0YDQsNCy0L3QuNCy0LDQtdC8INCy0LXRgNGF0L3QuNC4INC/0L7QtNGB0LrQsNC30LrQuCDQsiDQstGL0YHQvtGC0YNcclxuICBjb25zdCBjbHVlVG9wUm93cyA9IE1hdGgubWF4KC4uLmNsdWVUb3BSb3RhdGVkLm1hcCgocm93KSA9PiByb3cubGVuZ3RoKSk7XHJcbiAgY2x1ZVRvcFJvdGF0ZWQuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICB3aGlsZSAocm93Lmxlbmd0aCA8IGNsdWVUb3BSb3dzKSByb3cucHVzaCgwKTtcclxuICB9KTtcclxuICBjb25zdCBjbHVlVG9wID0gcm90YXRlTWF0cml4KGNsdWVUb3BSb3RhdGVkLCAnbGVmdCcpO1xyXG5cclxuICBjb25zdCBjbHVlTGVmdCA9IGNyZWF0ZUNsdWVBcnJheShwbG90KTtcclxuICAvLyDQstGL0YDQsNCy0L3QuNCy0LDQtdC8INC70LXQstGL0LUg0L/QvtC00YHQutCw0LfQutC4INCyINGI0LjRgNC40L3Rg1xyXG4gIGNvbnN0IGNsdWVMZWZ0Q29sdW1ucyA9IE1hdGgubWF4KC4uLmNsdWVMZWZ0Lm1hcCgocm93KSA9PiByb3cubGVuZ3RoKSk7XHJcbiAgY2x1ZUxlZnQuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICB3aGlsZSAocm93Lmxlbmd0aCA8IGNsdWVMZWZ0Q29sdW1ucykgcm93LnVuc2hpZnQoMCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vINC+0LHRitC10LTQtdC90LjRgtGMINC/0L7QtNGB0LrQsNC30LrQuCDRgdC70LXQstCwINGBINC40LPRgNC+0LLRi9C8INC/0L7Qu9C10LxcclxuICBjb25zdCBjbHVlTGVmdEFuZFBsb3QgPSBwbG90Lm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICByZXR1cm4gWy4uLmNsdWVMZWZ0W2ldLCAuLi5yb3ddO1xyXG4gIH0pO1xyXG5cclxuICAvLyDQuCDQstGL0YDQsNCy0L3QuNCy0LDQtdC8INCyINGI0LjRgNC40L3RgyDQv9C+0YHQutCw0LfQutC4INGB0LLQtdGA0YXRg1xyXG4gIGNvbnN0INGBb2x1bW5zQ291bnRUb3RhbCA9IGNsdWVMZWZ0QW5kUGxvdFswXS5sZW5ndGg7XHJcbiAgY2x1ZVRvcC5mb3JFYWNoKChyb3cpID0+IHtcclxuICAgIHdoaWxlIChyb3cubGVuZ3RoIDwg0YFvbHVtbnNDb3VudFRvdGFsKSByb3cudW5zaGlmdCgnJyk7XHJcbiAgfSk7XHJcblxyXG4gIC8vINC+0LHRitC10LTQtdC90LjRgtGMINC/0L7QtNGB0LrQsNC30LrQuCDRgdCy0LXRgNGF0YMg0YEg0LjQs9GA0L7QstGL0Lwg0L/QvtC70LXQvFxyXG4gIGNvbnN0IGdhbWVEZXNrID0gWy4uLmNsdWVUb3AsIC4uLmNsdWVMZWZ0QW5kUGxvdF07XHJcblxyXG4gIGNvbnN0IGNvbCA9IGNsdWVMZWZ0WzBdLmxlbmd0aDtcclxuICBjb25zdCByb3cgPSBjbHVlVG9wLmxlbmd0aDtcclxuXHJcbiAgLy/RgdGE0L7RgNC80LjRgNGD0LXQvCDRjdC70LXQvNC10L3RgtGLINC40LPRgNC+0LLQvtCz0L4g0L/QvtC70Y9cclxuICBzdGF0ZS5odG1sLnBsb3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgZ2FtZURlc2suZm9yRWFjaCgocm93LCBpKSA9PiB7XHJcbiAgICByb3cuZm9yRWFjaCgoZWwsIGopID0+IHtcclxuICAgICAgY29uc3QgY2VsbCA9IG5ld0NlbGwoKTtcclxuICAgICAgaWYgKGVsID09PSAn4pqrJyB8fCBlbCA9PT0gJ+KaqicpIHtcclxuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncm9sZScsICdnYW1lJyk7XHJcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGVsO1xyXG4gICAgICAgIGdhbWVEZXNrW2ldW2pdID0ge1xyXG4gICAgICAgICAgc3RhdGU6ICfimqonLFxyXG4gICAgICAgICAgdmFsdWU6IGVsLFxyXG4gICAgICAgICAgZWxlbWVudDogY2VsbCxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUoZWwpKSB7XHJcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnY2x1ZScpO1xyXG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBlbCA+IDAgPyBlbCA6ICcnO1xyXG4gICAgICAgIGdhbWVEZXNrW2ldW2pdID0ge1xyXG4gICAgICAgICAgc3RhdGU6IGVsLFxyXG4gICAgICAgICAgdmFsdWU6IGVsLFxyXG4gICAgICAgICAgZWxlbWVudDogY2VsbCxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlbCA9PT0gJycpIHtcclxuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncm9sZScsICdlbXB0eScpO1xyXG4gICAgICAgIGdhbWVEZXNrW2ldW2pdID0ge1xyXG4gICAgICAgICAgc3RhdGU6IGVsLFxyXG4gICAgICAgICAgdmFsdWU6IGVsLFxyXG4gICAgICAgICAgZWxlbWVudDogY2VsbCxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdGF0ZS5odG1sLnBsb3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgc2V0Qm9yZGVycyhnYW1lRGVzayk7XHJcbiAgY29uc3QgY29sdW1uc0NvdW50ID0gZ2FtZURlc2tbMF0ubGVuZ3RoO1xyXG4gIHN0YXRlLmdhbWUucGxvdCA9IGdhbWVEZXNrO1xyXG4gIHN0YXRlLmh0bWwuZW1wdHlDZWxsID0gc3RhdGUuaHRtbC5wbG90Q29udGFpbmVyLmNoaWxkcmVuWzBdO1xyXG4gIHN0YXRlLmh0bWwuZW1wdHlDZWxsLnN0eWxlLnpJbmRleCA9IDI7XHJcblxyXG4gIHN0YXRlLmh0bWwuZW1wdHlDZWxsLmFwcGVuZChidG5DYXZlaW4oKSk7XHJcbiAgc3RhdGUuaHRtbC5wbG90Q29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KCctLWNvbHVtbnMtY291bnQnLCBjb2x1bW5zQ291bnQpO1xyXG4gIHN0YXRlLmh0bWwucGxvdENvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1yb3ctY291bnQnLCByb3cpO1xyXG4gIHN0YXRlLmh0bWwucGxvdENvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jb2x1bW4tY291bnQnLCBjb2wpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZURlc2sgPSAoKSA9PiB7XHJcbiAgLy/RgdGE0L7RgNC80LjRgNGD0LXQvCDRjdC70LXQvNC10L3RgtGLINC40LPRgNC+0LLQvtCz0L4g0L/QvtC70Y9cclxuICBjb25zdCB7IHBsb3QgfSA9IHN0YXRlLmdhbWU7XHJcblxyXG4gIGNvbnN0IHJvdyA9IHBsb3QucmVkdWNlKChjb3VudCwgcikgPT4ge1xyXG4gICAgaWYgKHJbMF0udmFsdWUgPT09ICcnKSByZXR1cm4gY291bnQgKyAxO1xyXG4gICAgcmV0dXJuIGNvdW50O1xyXG4gIH0sIDApO1xyXG4gIGNvbnN0IGNvbCA9IHBsb3RbMF0ucmVkdWNlKChjb3VudCwgY2VsbCkgPT4ge1xyXG4gICAgaWYgKGNlbGwudmFsdWUgPT09ICcnKSByZXR1cm4gY291bnQgKyAxO1xyXG4gICAgcmV0dXJuIGNvdW50O1xyXG4gIH0sIDApO1xyXG5cclxuICBzdGF0ZS5odG1sLnBsb3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgcGxvdC5mb3JFYWNoKChyb3csIGkpID0+IHtcclxuICAgIHJvdy5mb3JFYWNoKChlbCwgaikgPT4ge1xyXG4gICAgICBjb25zdCBjZWxsID0gbmV3Q2VsbCgpO1xyXG4gICAgICBpZiAoZWwuc3RhdGUgPT09ICfimqsnKSB7XHJcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZ2FtZScpO1xyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbF9maWxsJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGVsLnN0YXRlID09PSAn4pqqJykge1xyXG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2dhbWUnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZWwuc3RhdGUgPT09ICd4Jykge1xyXG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2dhbWUnKTtcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGxfY2hlY2tlZCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBlbC52YWx1ZTtcclxuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZShlbC5zdGF0ZSkpIHtcclxuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncm9sZScsICdjbHVlJyk7XHJcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGVsLnN0YXRlID4gMCA/IGVsLnN0YXRlIDogJyc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGVsLnN0YXRlID09PSAnJykge1xyXG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2VtcHR5Jyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBsb3RbaV1bal0gPSB7XHJcbiAgICAgICAgc3RhdGU6IGVsLnN0YXRlLFxyXG4gICAgICAgIHZhbHVlOiBlbC52YWx1ZSxcclxuICAgICAgICBlbGVtZW50OiBjZWxsLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgc3RhdGUuaHRtbC5wbG90Q29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHNldEJvcmRlcnMocGxvdCk7XHJcbiAgY29uc3QgY29sdW1uc0NvdW50ID0gcGxvdFswXS5sZW5ndGg7XHJcbiAgc3RhdGUuaHRtbC5lbXB0eUNlbGwgPSBzdGF0ZS5odG1sLnBsb3RDb250YWluZXIuY2hpbGRyZW5bMF07XHJcbiAgc3RhdGUuaHRtbC5lbXB0eUNlbGwuc3R5bGUuekluZGV4ID0gMjtcclxuXHJcbiAgc3RhdGUuaHRtbC5lbXB0eUNlbGwuYXBwZW5kKGJ0bkNhdmVpbigpKTtcclxuICBzdGF0ZS5odG1sLnBsb3RDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tY29sdW1ucy1jb3VudCcsIGNvbHVtbnNDb3VudCk7XHJcbiAgc3RhdGUuaHRtbC5wbG90Q29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KCctLXJvdy1jb3VudCcsIHJvdyk7XHJcbiAgc3RhdGUuaHRtbC5wbG90Q29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KCctLWNvbHVtbi1jb3VudCcsIGNvbCk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVDbHVlQXJyYXkgPSAobWF0cml4KSA9PiB7XHJcbiAgY29uc3QgY2x1ZXMgPSBbXTtcclxuICBtYXRyaXguZm9yRWFjaCgocm93LCBpKSA9PiB7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgY2x1ZXNbaV0gPSBbXTtcclxuXHJcbiAgICByb3cuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICBpZiAoY2VsbCA9PT0gJ+KaqycpIHtcclxuICAgICAgICBjb3VudCArPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjZWxsID09PSAn4pqqJykge1xyXG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcclxuICAgICAgICAgIGNsdWVzW2ldLnB1c2goY291bnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChjb3VudCA+IDApIHtcclxuICAgICAgY2x1ZXNbaV0ucHVzaChjb3VudCk7XHJcbiAgICAgIGNvdW50ID0gMDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNsdWVzO1xyXG59O1xyXG5cclxuY29uc3Qgc2V0Qm9yZGVycyA9IChtYXRyaXgpID0+IHtcclxuICBsZXQgaW5kZXhSb3cgPSAwO1xyXG5cclxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBtYXRyaXgubGVuZ3RoOyByb3cgKz0gMSkge1xyXG4gICAgbGV0IGluZGV4Q29sID0gMDtcclxuICAgIGNvbnN0IGxhc3RJbmRleFJvdyA9IG1hdHJpeFtyb3ddLmxlbmd0aCAtIDE7XHJcbiAgICBjb25zdCBsYXN0RWxlbVJvdyA9IG1hdHJpeFtyb3ddW2xhc3RJbmRleFJvd10udmFsdWU7XHJcbiAgICBpZiAobGFzdEVsZW1Sb3cgPT09ICfimqsnIHx8IGxhc3RFbGVtUm93ID09PSAn4pqqJykgaW5kZXhSb3cgKz0gMTtcclxuXHJcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBtYXRyaXhbcm93XS5sZW5ndGg7IGNvbCArPSAxKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RSb3dJbmRleCA9IG1hdHJpeC5sZW5ndGggLSAxO1xyXG4gICAgICBjb25zdCBsYXN0RWxlbUNvbCA9IG1hdHJpeFtsYXN0Um93SW5kZXhdW2NvbF0udmFsdWU7XHJcbiAgICAgIGlmIChsYXN0RWxlbUNvbCA9PT0gJ+KaqycgfHwgbGFzdEVsZW1Db2wgPT09ICfimqonKSB7XHJcbiAgICAgICAgaW5kZXhDb2wgKz0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGluZGV4Um93ICYmIGluZGV4Um93ID09PSAxKVxyXG4gICAgICAgIG1hdHJpeFtyb3ddW2NvbF0uZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZpcnN0LXJvdycsICcnKTtcclxuICAgICAgaWYgKGluZGV4Um93ICYmIGluZGV4Um93ICUgNSA9PT0gMClcclxuICAgICAgICBtYXRyaXhbcm93XVtjb2xdLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb3cnLCAnJyk7XHJcbiAgICAgIGlmIChpbmRleENvbCAmJiBpbmRleENvbCA9PT0gMSlcclxuICAgICAgICBtYXRyaXhbcm93XVtjb2xdLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdmaXJzdC1jb2wnLCAnJyk7XHJcbiAgICAgIGlmIChpbmRleENvbCAmJiBpbmRleENvbCAlIDUgPT09IDApXHJcbiAgICAgICAgbWF0cml4W3Jvd11bY29sXS5lbGVtZW50LnNldEF0dHJpYnV0ZSgnY29sJywgJycpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0ICcuL3NjaGVtZVNlbGVjdG9yLmNzcyc7XHJcbmltcG9ydCBjb2xvclNjaGVtZXMgZnJvbSAnLi4vLi4vYXNzZXRzL3NjaGVtZXMvY29sb3JTY2hlbWVzJztcclxuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlRWxlbWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgbGV0IG9wdGlvbnMgPSBbXTtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHsgY2xzOiAnc2NoZW1lLWNvbnRhaW5lcicgfSk7XHJcbiAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ2xhYmVsJyxcclxuICAgIHR4dDogJ9Cm0LLQtdGC0L7QstCw0Y8g0YHRhdC10LzQsCcsXHJcbiAgICBhdHRyOiBbWydmb3InLCAnc2NoZW1lX3NlbGVjdCddXSxcclxuICB9KTtcclxuICBjb25zdCBzZWxlY3QgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ3NlbGVjdCcsXHJcbiAgICBjbHM6ICdzY2hlbWUtc2VsZWN0JyxcclxuICAgIGF0dHI6IFtbJ2lkJywgJ3NjaGVtZV9zZWxlY3QnXV0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbG9yU2NoZW1lcy5mb3JFYWNoKChzY2hlbWUpID0+XHJcbiAgICBvcHRpb25zLnB1c2goXHJcbiAgICAgIGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgIHRhZzogJ29wdGlvbicsXHJcbiAgICAgICAgdHh0OiBzY2hlbWUudGl0bGUsXHJcbiAgICAgICAgYXR0cjogW1sndmFsdWUnLCBzY2hlbWUubmFtZV1dLFxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VTY2hlbWUpO1xyXG4gIHNlbGVjdC5hcHBlbmQoLi4ub3B0aW9ucyk7XHJcbiAgY29udGFpbmVyLmFwcGVuZChsYWJlbCwgc2VsZWN0KTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgY2hhbmdlU2NoZW1lID0gKGUpID0+IHtcclxuICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICBjb25zdCBzY2hlbWUgPSBjb2xvclNjaGVtZXMuZmlsdGVyKChzKSA9PiBzLm5hbWUgPT09IHZhbHVlKTtcclxuICBhcHBseVNjaGVtZShzY2hlbWUpO1xyXG59O1xyXG5cclxuY29uc3QgYXBwbHlTY2hlbWUgPSAoc2NoZW1lKSA9PiB7XHJcbiAgaWYgKCFzY2hlbWUpIHJldHVybjtcclxuXHJcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XHJcblxyXG4gIGNvbnN0IGNvbG9ycyA9IHNjaGVtZVswXS5jb2xvcnM7XHJcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbG9ycyk7XHJcbiAga2V5cy5mb3JFYWNoKChjb2xvcikgPT4ge1xyXG4gICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke2NvbG9yfWAsIGNvbG9yc1tjb2xvcl0pO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi4vLi4vc3RhdGUvc3RhdGUnO1xyXG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuLi8uLi91dGlscy9jcmVhdGVFbGVtZW50JztcclxuaW1wb3J0IHsgZ2V0UmVjb3JkcywgcmVzZXRMYXN0R2FtZUZsYWcgfSBmcm9tICcuLi8uLi91dGlscy9nYW1lUmVjb3JkJztcclxuaW1wb3J0IHsgcGFyc2VUaW1lciB9IGZyb20gJy4uL3RpbWVyL3RpbWVyJztcclxuaW1wb3J0ICcuL3Njb3JlLmNzcyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2NvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlhbG9nID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdkaWFsb2cnLFxyXG4gICAgY2xzOiAnZGlhbG9nJyxcclxuICAgIGF0dHI6IFtbJ29wZW4nLCAnJ11dLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgY2xzOiAnY29udGFpbmVyJyxcclxuICB9KTtcclxuICBzdGF0ZS5odG1sLnNjb3JlID0gY29udGFpbmVyO1xyXG4gIHVwZGF0ZVNjb3JlKCk7XHJcbiAgZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGUpO1xyXG4gIGRpYWxvZy5hcHBlbmQoY29udGFpbmVyKTtcclxuICByZXR1cm4gZGlhbG9nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNjb3JlID0gKG1zZykgPT4ge1xyXG4gIHN0YXRlLmh0bWwuc2NvcmUuaW5uZXJIVE1MID0gJyc7XHJcbiAgY29uc3QgdGl0bGUgPSBtc2cgPyBtc2cgOiAnU0NPUkU6JztcclxuICBjb25zdCBoMSA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdoMScsIGNsczogJ3Njb3JlX2gxJywgdHh0OiB0aXRsZSB9KTtcclxuICBzdGF0ZS5odG1sLnNjb3JlLmFwcGVuZChoMSk7XHJcbiAgc3RhdGUuaHRtbC5zY29yZUgxID0gaDE7XHJcbiAgY29uc3QgcmVjb3JkcyA9IGdldENvbnRhaW5lclJlY29yZHMoKTtcclxuICByZWNvcmRzICYmIHN0YXRlLmh0bWwuc2NvcmUuYXBwZW5kKC4uLnJlY29yZHMpO1xyXG59O1xyXG5cclxuY29uc3QgY2xpY2tIYW5kbGUgPSAoKSA9PiB7XHJcbiAgc3RhdGUuaHRtbC5zY29yZUgxLnRleHRDb250ZW50ID0gJ1NDT1JFOic7XHJcbiAgc3RhdGUuaHRtbC5zY29yZS5jbGFzc0xpc3QudG9nZ2xlKCdzY29yZV9zaG93Jyk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDb250YWluZXJSZWNvcmRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlY29yZHMgPSBnZXRSZWNvcmRzKCk7XHJcblxyXG4gIGNvbnN0IGRpZmZpY3VsdHlMaXN0ID0gT2JqZWN0LmtleXMoc3RhdGUuZmllbGRzKTtcclxuICBjb25zdCB0YWJsZXMgPSBkaWZmaWN1bHR5TGlzdC5tYXAoKGRpZikgPT4ge1xyXG4gICAgY29uc3QgcmVjID0gcmVjb3Jkcy5maWx0ZXIoKHIpID0+IHIuZGlmZmljdWx0eSA9PT0gZGlmKTtcclxuICAgIGlmIChyZWMubGVuZ3RoID09PSAwKSByZXR1cm4gJyc7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHsgY2xzOiAnY29udGFpbmVyX19yZWNvcmRzJyB9KTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoY3JlYXRlRWxlbWVudCh7IHR4dDogJ9C40LPRgNCwJyB9KSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKGNyZWF0ZUVsZW1lbnQoeyB0eHQ6ICfRgdC70L7QttC9LicgfSkpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChjcmVhdGVFbGVtZW50KHsgdHh0OiAn0LLRgNC10LzRjycgfSkpO1xyXG4gICAgY29uc3Qgc29ydGVkID0gcmVjLnNvcnQoKGEsIGIpID0+IGEudGltZXIgLSBiLnRpbWVyKTtcclxuICAgIHNvcnRlZC5zcGxpY2UoNSk7XHJcbiAgICBzb3J0ZWQuZm9yRWFjaCgociwgaSkgPT4ge1xyXG4gICAgICBjb25zdCBzdHlsZSA9IHIubGFzdEdhbWUgPyAncmVjb3JkX2xhc3QtZ2FtZScgOiAnJztcclxuICAgICAgY29udGFpbmVyLmFwcGVuZChcclxuICAgICAgICBjcmVhdGVFbGVtZW50KHsgdHh0OiBgJHtpICsgMX0uICR7ci5uYW1lfWAsIGNsczogc3R5bGUgfSlcclxuICAgICAgKTtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZChjcmVhdGVFbGVtZW50KHsgdHh0OiByLmRpZmZpY3VsdHksIGNsczogc3R5bGUgfSkpO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kKGNyZWF0ZUVsZW1lbnQoeyB0eHQ6IHBhcnNlVGltZXIoci50aW1lciksIGNsczogc3R5bGUgfSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9KTtcclxuXHJcbiAgcmVzZXRMYXN0R2FtZUZsYWcocmVjb3Jkcyk7XHJcbiAgcmV0dXJuIHRhYmxlcztcclxufTtcclxuIiwiaW1wb3J0IHN0YXRlIGZyb20gJy4uLy4uL3N0YXRlL3N0YXRlJztcclxuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlRWxlbWVudCc7XHJcbmltcG9ydCAnLi90aW1lci5jc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRpbWVyID0gKCkgPT4ge1xyXG4gIGxldCBzZWNvbmRzID0gcGFyc2VJbnQoc3RhdGUuZ2FtZS50aW1lcik7XHJcbiAgc2Vjb25kcyB8fD0gMDtcclxuICBjb25zdCB0aW1lclN0ciA9IHBhcnNlVGltZXIoc2Vjb25kcyk7XHJcbiAgY29uc3QgdGltZXIgPSBjcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgY2xzOiAndGltZXInLCB0eHQ6IHRpbWVyU3RyIH0pO1xyXG4gIHN0YXRlLmh0bWwudGltZXIgPSB0aW1lcjtcclxuICByZXR1cm4gdGltZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyVGltZXIgPSAoKSA9PiB7XHJcbiAgbGV0IHNlY29uZHMgPSBwYXJzZUludChzdGF0ZS5nYW1lLnRpbWVyKTtcclxuICBzZWNvbmRzIHx8PSAwO1xyXG4gIHN0YXRlLmh0bWwudGltZXIuaW5uZXJUZXh0ID0gcGFyc2VUaW1lcihzZWNvbmRzKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdGFydFRpbWVyID0gKHN0YXJ0ID0gdHJ1ZSkgPT4ge1xyXG4gIGNvbnN0IHRpbWVySGFuZGxlciA9ICgpID0+IHtcclxuICAgIHN0YXRlLmdhbWUudGltZXIgKz0gMTtcclxuICAgIHJlbmRlclRpbWVyKCk7XHJcbiAgICByZXR1cm4gdGltZXJIYW5kbGVyO1xyXG4gIH07XHJcblxyXG4gIGNsZWFySW50ZXJ2YWwoc3RhdGUuaHRtbC50aW1lcklEKTtcclxuICBpZiAoc3RhcnQpIHN0YXRlLmh0bWwudGltZXJJRCA9IHNldEludGVydmFsKHRpbWVySGFuZGxlcigpLCAxMDAwKTtcclxuICBpZiAoIXN0YXJ0KSB7XHJcbiAgICBzdGF0ZS5nYW1lLmlzR2FtZVN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgIHJlbmRlclRpbWVyKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhcnNlVGltZXIgPSAoc2Vjb25kcykgPT4ge1xyXG4gIGxldCBob3VycyA9IE1hdGgudHJ1bmMoc2Vjb25kcyAvIDM2MDApO1xyXG4gIGxldCBtaW51dGVzID0gTWF0aC50cnVuYygoc2Vjb25kcyAtIGhvdXJzICogMzYwMCkgLyA2MCk7XHJcbiAgc2Vjb25kcyA9IGAke3NlY29uZHMgLSBob3VycyAqIDM2MDAgLSBtaW51dGVzICogNjB9YDtcclxuXHJcbiAgaG91cnMgPSBob3VycyA+IDAgPyBgJHtob3Vyc306YCA6ICcnO1xyXG4gIGhvdXJzICYmIChob3VycyA9IGhvdXJzLnBhZFN0YXJ0KDMsICcwJykpO1xyXG4gIG1pbnV0ZXMgPSBtaW51dGVzID4gMCA/IGAke21pbnV0ZXN9OmAgOiAnMDA6JztcclxuICBtaW51dGVzID0gbWludXRlcy5wYWRTdGFydCgzLCAnMCcpO1xyXG4gIHNlY29uZHMgPSBzZWNvbmRzLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgcmV0dXJuIGAke2hvdXJzfSR7bWludXRlc30ke3NlY29uZHN9YDtcclxufTtcclxuIiwiaW1wb3J0IHN0YXRlIGZyb20gJy4vc3RhdGUnO1xyXG5pbXBvcnQgZmllbGQ1eDUgZnJvbSAnLi4vZmllbGRzLzV4NS5qc29uJztcclxuaW1wb3J0IGZpZWxkMTB4MTAgZnJvbSAnLi4vZmllbGRzLzEweDEwLmpzb24nO1xyXG5pbXBvcnQgZmllbGQxNXgxNSBmcm9tICcuLi9maWVsZHMvMTV4MTUuanNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgZmllbGRzID0gZ2V0RmllbGRzKCk7XHJcbiAgc2V0VW5pY0lEKGZpZWxkcyk7XHJcbiAgT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBmaWVsZHM6IGZpZWxkcyxcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEZpZWxkcyA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgJzV4NSc6IGZpZWxkNXg1LFxyXG4gICAgJzEweDEwJzogZmllbGQxMHgxMCxcclxuICAgICcxNXgxNSc6IGZpZWxkMTV4MTUsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHNldFVuaWNJRCA9IChmaWVsZHMpID0+IHtcclxuICBsZXQgaWQgPSAwO1xyXG4gIGZvciAobGV0IGZpZWxkIGluIGZpZWxkcykge1xyXG4gICAgZmllbGRzW2ZpZWxkXS5mb3JFYWNoKChnYW1lKSA9PiB7XHJcbiAgICAgIGdhbWUuaWQgPSBpZDtcclxuICAgICAgaWQgKz0gMTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdhbWU6IHtcclxuICAgIHBsb3Q6IFtdLFxyXG4gICAgY3VycmVudEdhbWU6IDAsXHJcbiAgICBjdXJyZW50R2FtZU5hbWU6ICcnLFxyXG4gICAgZGlmZmljdWx0eTogJzV4NScsXHJcbiAgICBzaG93Q2VsbHNWYWx1ZTogZmFsc2UsXHJcbiAgICB0aW1lcjogMCxcclxuICAgIGlzR2FtZVN0YXJ0ZWQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAgZmllbGRzOiBbXSxcclxuICBodG1sOiB7fSxcclxuICBsc0tleVN0YXRlOiAnbm9ub2dyYW0yMDI0MDEyNzE2MTcwMScsXHJcbiAgbHNLZXlSZWNvcmRzOiAnbm9ub2dyYW0yMDI0MDEyODE4MjYwMScsXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0ICh7IHRhZyA9ICdkaXYnLCBjbHMgPSAnJywgdHh0ID0gJycsIGF0dHIgPSBbXSB9KSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICBjbHMgJiYgKGVsZW1lbnQuY2xhc3NOYW1lID0gY2xzKTtcclxuICBlbGVtZW50LmlubmVyVGV4dCA9IHR4dDtcclxuICBhdHRyLmZvckVhY2goKGF0dHJpYnV0KSA9PiBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dFswXSwgYXR0cmlidXRbMV0pKTtcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi9zdGF0ZS9zdGF0ZSc7XHJcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc2VsZWN0LCBnYW1lcykgPT4ge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBnYW1lcy5tYXAoKGdhbWUpID0+IHtcclxuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBnYW1lLm5hbWU7XHJcbiAgICBjb25zdCBNQVhfTEVOR1RIID0gMzA7XHJcbiAgICBjb25zdCBuYW1lTm9ybWFsaXplZCA9XHJcbiAgICAgIGxlbmd0aCA+IE1BWF9MRU5HVEggPyBnYW1lLm5hbWUuc2xpY2UoMCwgTUFYX0xFTkdUSCkgKyAnLi4uJyA6IGdhbWUubmFtZTtcclxuICAgIGNvbnN0IGNoZWNrZWQgPVxyXG4gICAgICBzdGF0ZS5nYW1lLmN1cnJlbnRHYW1lID09PSBnYW1lLmlkID8gJ3NlbGVjdGVkJyA6ICd1bnNlbGVjdGVkJztcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgdGFnOiAnb3B0aW9uJyxcclxuICAgICAgYXR0cjogW1xyXG4gICAgICAgIFsndmFsdWUnLCBnYW1lLmlkXSxcclxuICAgICAgICBbY2hlY2tlZCwgJyddLFxyXG4gICAgICBdLFxyXG4gICAgICB0eHQ6IG5hbWVOb3JtYWxpemVkLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgc2VsZWN0LmlubmVySFRNTCA9ICcnO1xyXG4gIHNlbGVjdC5hcHBlbmQoLi4ub3B0aW9ucyk7XHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi9zdGF0ZS9zdGF0ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UmVjb3JkcyA9ICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0YXRlLmxzS2V5UmVjb3Jkcyk7XHJcbiAgICBjb25zdCByZWNvcmRzID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIHJldHVybiByZWNvcmRzIHx8IFtdO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZVJlY29yZHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVjb3JkID0ge1xyXG4gICAgbmFtZTogc3RhdGUuZ2FtZS5jdXJyZW50R2FtZU5hbWUsXHJcbiAgICBkaWZmaWN1bHR5OiBzdGF0ZS5nYW1lLmRpZmZpY3VsdHksXHJcbiAgICB0aW1lcjogc3RhdGUuZ2FtZS50aW1lcixcclxuICAgIGxhc3RHYW1lOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9sZFJlY29yZHMgPSBnZXRSZWNvcmRzKCk7XHJcbiAgY29uc3QgbmV3UmVjb3JkcyA9IFsuLi5vbGRSZWNvcmRzLCByZWNvcmRdO1xyXG4gIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShuZXdSZWNvcmRzKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdGF0ZS5sc0tleVJlY29yZHMsIGRhdGEpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0TGFzdEdhbWVGbGFnID0gKHJlY29yZHMpID0+IHtcclxuICBjb25zdCB3b0ZsYWcgPSByZWNvcmRzLm1hcCgocikgPT4gKHsgLi4uciwgbGFzdEdhbWU6IGZhbHNlIH0pKTtcclxuICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkod29GbGFnKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdGF0ZS5sc0tleVJlY29yZHMsIGRhdGEpO1xyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi4vc3RhdGUvc3RhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGlkKSA9PiB7XHJcbiAgY29uc3QgSUQgPSBOdW1iZXIoaWQpO1xyXG4gIGZvciAobGV0IGZpZWxkIGluIHN0YXRlLmZpZWxkcykge1xyXG4gICAgY29uc3QgZ2FtZSA9IHN0YXRlLmZpZWxkc1tmaWVsZF0uZmlsdGVyKChnYW1lKSA9PiBnYW1lLmlkID09PSBJRClbMF07XHJcbiAgICBpZiAoZ2FtZSkge1xyXG4gICAgICBzdGF0ZS5nYW1lLmN1cnJlbnRHYW1lID0gZ2FtZS5pZDtcclxuICAgICAgc3RhdGUuZ2FtZS5jdXJyZW50R2FtZU5hbWUgPSBnYW1lLm5hbWU7XHJcbiAgICAgIHJldHVybiBnYW1lLnBsb3Q7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBzd2l0Y2hHYW1lIH0gZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lU2VsZWN0b3IvZ2FtZVNlbGVjdG9yJztcclxuaW1wb3J0IHsgdXBkYXRlRGVzayB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGxvdENvbnRhaW5lci9yZW5kZXJEZXNrJztcclxuaW1wb3J0IHsgc3RhcnRUaW1lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGltZXIvdGltZXInO1xyXG5pbXBvcnQgc3RhdGUgZnJvbSAnLi4vc3RhdGUvc3RhdGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVTdGF0ZSA9ICgpID0+IHtcclxuICBjb25zdCB7IGdhbWUgfSA9IHN0YXRlO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0YXRlLmxzS2V5U3RhdGUsIEpTT04uc3RyaW5naWZ5KGdhbWUpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkU3RhdGUgPSAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RhdGUubHNLZXlTdGF0ZSk7XHJcbiAgICBjb25zdCBnYW1lID0gSlNPTi5wYXJzZShscyk7XHJcbiAgICBpZiAoZ2FtZSkge1xyXG4gICAgICBzdGF0ZS5nYW1lID0gZ2FtZTtcclxuICAgICAgdXBkYXRlRGVzaygpO1xyXG4gICAgICBzd2l0Y2hHYW1lKHN0YXRlLmdhbWUuY3VycmVudEdhbWUpO1xyXG4gICAgICBzdGFydFRpbWVyKHRydWUpO1xyXG4gICAgICBjb25zdCBvcGFjaXR5ID0gc3RhdGUuZ2FtZS5zaG93Q2VsbHNWYWx1ZSA/ICcwLjQnIDogJzAnO1xyXG4gICAgICBzdGF0ZS5odG1sLm1haW4uc3R5bGUuc2V0UHJvcGVydHkoJy0tb3BhY2l0eS1jZWxsLXRleHQnLCBvcGFjaXR5KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcign0L7RiNC40LHQutCwINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1INC40LPRgNGLINC40Lcg0YHQtdC60YDQtdC60YLQvdC+0LPQviDRhdGA0LDQvdC40LvQuNGJ0LA6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKG1hdHJpeCwgZGlyZWN0aW9uID0gJ3JpZ2h0JykgPT4ge1xyXG4gIGNvbnN0IHRtcE1hdHJpeCA9IFsuLi5tYXRyaXhdO1xyXG4gIGNvbnN0IHJvdGF0ZWRNYXRyaXggPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRtcE1hdHJpeFswXS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgcm90YXRlZE1hdHJpeFtpXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0bXBNYXRyaXgubGVuZ3RoOyBqICs9IDEpIHtcclxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JylcclxuICAgICAgICByb3RhdGVkTWF0cml4W2ldW2pdID0gdG1wTWF0cml4W3RtcE1hdHJpeC5sZW5ndGggLSAxIC0gal1baV07XHJcbiAgICAgIGVsc2Ugcm90YXRlZE1hdHJpeFtpXVtqXSA9IHRtcE1hdHJpeFtqXVt0bXBNYXRyaXhbaV0ubGVuZ3RoIC0gMSAtIGldO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcm90YXRlZE1hdHJpeDtcclxufTtcclxuIiwiaW1wb3J0IHN0YXRlIGZyb20gJy4uL3N0YXRlL3N0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChlKSA9PiB7XHJcbiAgY29uc3QgeyBjb2RlIH0gPSBlO1xyXG5cclxuICBpZiAoY29kZSA9PT0gJ0tleVMnKSB7XHJcbiAgICBjb25zdCBnYW1lID0gWy4uLnN0YXRlLmdhbWUucGxvdF07XHJcbiAgICBjb25zdCBmaWx0ZXIgPSBnYW1lXHJcbiAgICAgIC5tYXAoKHJvdykgPT4gcm93Lm1hcCgoY2VsbCkgPT4gY2VsbC5zdGF0ZSkpXHJcbiAgICAgIC5maWx0ZXIoKHJvdykgPT4gcm93WzBdICE9PSAnJylcclxuICAgICAgLm1hcCgocm93KSA9PiByb3cuZmlsdGVyKChjZWxsKSA9PiAhTnVtYmVyLmlzRmluaXRlKGNlbGwpKSk7XHJcblxyXG4gICAgY29uc3QganNvbiA9IHtcclxuICAgICAgbmFtZTogJycsXHJcbiAgICAgIHBsb3Q6IGZpbHRlcixcclxuICAgIH07XHJcbiAgICBjb25zb2xlLndhcm4oJ2pzb24gZm9yIHNhdmUuLi4nLCBqc29uKTtcclxuICB9XHJcblxyXG4gIGlmIChjb2RlID09PSAnS2V5SCcpIHtcclxuICAgIHN0YXRlLmdhbWUuc2hvd0NlbGxzVmFsdWUgPSAhc3RhdGUuZ2FtZS5zaG93Q2VsbHNWYWx1ZTtcclxuICAgIGNvbnN0IG9wYWNpdHkgPSBzdGF0ZS5nYW1lLnNob3dDZWxsc1ZhbHVlID8gJzAuNCcgOiAnMCc7XHJcbiAgICBzdGF0ZS5odG1sLnJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tb3BhY2l0eS1jZWxsLXRleHQnLCBvcGFjaXR5KTtcclxuICB9XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyB0aW1lciB9IGZyb20gJy4vY29tcG9uZW50cy90aW1lci90aW1lcic7XHJcbmltcG9ydCBzdGF0ZSBmcm9tICcuL3N0YXRlL3N0YXRlJztcclxuaW1wb3J0IGZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlcic7XHJcbmltcG9ydCBpbml0U3RhdGUgZnJvbSAnLi9zdGF0ZS9pbml0U3RhdGUnO1xyXG5pbXBvcnQgcmVuZGVyRGVzayBmcm9tICcuL2NvbXBvbmVudHMvcGxvdENvbnRhaW5lci9yZW5kZXJEZXNrJztcclxuaW1wb3J0IHdpbmRvd0hhbmRsZSBmcm9tICcuL3V0aWxzL3dpbmRvd0hhbmRsZSc7XHJcbmltcG9ydCBwbG90Q29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9wbG90Q29udGFpbmVyL3Bsb3RDb250YWluZXInO1xyXG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL3V0aWxzL2NyZWF0ZUVsZW1lbnQnO1xyXG5pbXBvcnQgY3JlYXRlT3B0aW9ucyBmcm9tICcuL3V0aWxzL2NyZWF0ZU9wdGlvbnMnO1xyXG5pbXBvcnQgc2NoZW1lU2VsZWN0b3IgZnJvbSAnLi9jb21wb25lbnRzL3NjaGVtZVNlbGVjdG9yL3NjaGVtZVNlbGVjdG9yJztcclxuaW1wb3J0IHsgc2NvcmUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2NvcmUvc2NvcmUnO1xyXG5pbXBvcnQgeyBnYW1lU2VsZWN0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FtZVNlbGVjdG9yL2dhbWVTZWxlY3Rvcic7XHJcblxyXG5mdW5jdGlvbiBnYW1lKCkge1xyXG4gIGluaXRTdGF0ZSgpO1xyXG4gIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICBzdGF0ZS5odG1sLm1haW4gPSBjcmVhdGVFbGVtZW50KHsgdGFnOiAnbWFpbicsIGNsczogJ21haW4nIH0pO1xyXG4gIHN0YXRlLmh0bWwubWFpbi5hcHBlbmQocGxvdENvbnRhaW5lcigpKTtcclxuICBzdGF0ZS5odG1sLnJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xyXG4gIHJldHVybiBzdGF0ZS5odG1sLm1haW47XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keScpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChzY2hlbWVTZWxlY3RvcigpKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQoZ2FtZVNlbGVjdG9yKCkpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZCh0aW1lcigpKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQoZ2FtZSgpKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQoZm9vdGVyKCkpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChzY29yZSgpKTtcclxucmVuZGVyRGVzaygwKTtcclxuY3JlYXRlT3B0aW9ucyhzdGF0ZS5odG1sLmdhbWVTZWxlY3QsIHN0YXRlLmZpZWxkc1snNXg1J10pO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB3aW5kb3dIYW5kbGUpO1xyXG5cclxuLy8gaW1wbGVtZW50IFwiU29sdXRpb25cIiBidXR0b25cclxuXHJcbi8vINC00L7QsdCw0LLQuNGC0Ywg0YfQtdC60LHQvtC60YEg0LTQu9GPINCf0JrQnFxyXG4vLyDQtNC+0LHQsNCy0LjRgtGMINC30LDQv9C+0LvQvdC10L3QuNC1INClINC/0L4g0LrQu9C40LrRgyDQvdCwINC/0L7QtNGB0LrQsNC30LrQuFxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=