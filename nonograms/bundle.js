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
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/buttons/mode/btnSwitchMode.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/buttons/mode/btnSwitchMode.css ***!
  \*********************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.btn-switch-container {
  container-name: btn-switch;
  container-type: inline-size;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
  height: auto;
  /* margin: 0 auto; */

  & span {
      flex: 1 1 60%;
      display: none;
  }

  & svg {
    flex: 1 1 20%;
  }
}

@container btn-switch (min-width: 10rem) {
  .btn-switch-container {
    & span {
      display: inline;
    }
  }
}`, "",{"version":3,"sources":["webpack://./src/components/buttons/mode/btnSwitchMode.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,2BAA2B;;EAE3B,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;;EAEX,WAAW;EACX,YAAY;EACZ,oBAAoB;;EAEpB;MACI,aAAa;MACb,aAAa;EACjB;;EAEA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE;MACE,eAAe;IACjB;EACF;AACF","sourcesContent":[".btn-switch-container {\r\n  container-name: btn-switch;\r\n  container-type: inline-size;\r\n\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n\r\n  width: 100%;\r\n  height: auto;\r\n  /* margin: 0 auto; */\r\n\r\n  & span {\r\n      flex: 1 1 60%;\r\n      display: none;\r\n  }\r\n\r\n  & svg {\r\n    flex: 1 1 20%;\r\n  }\r\n}\r\n\r\n@container btn-switch (min-width: 10rem) {\r\n  .btn-switch-container {\r\n    & span {\r\n      display: inline;\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
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
  width: clamp(320px, 100%, 1024px);
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  gap: clamp(5px, 2%, 20px);
}`, "",{"version":3,"sources":["webpack://./src/components/footer/footer.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,iCAAiC;EACjC,cAAc;EACd,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;AAC3B","sourcesContent":[".footer {\r\n  display: flex;\r\n  width: clamp(320px, 100%, 1024px);\r\n  flex: 0 0 auto;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: clamp(5px, 2%, 20px);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/header/gameSelector/gameSelector.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/header/gameSelector/gameSelector.css ***!
  \***************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.container-game-select {
  flex: 0 0 auto;
  width: var(--container-width);
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
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
  width: 100%;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);

  & .fieldset_label {
    margin-right:1rem;
  }

  & .fieldset_legend {
    margin: 0 auto;
    padding: 0 1rem;
  }

  & input {
    accent-color: var(--btn-icon-hover);
  }
}

.game-select_selector {
  font-size: 1rem;
  color: var(--common-text-color);
  background-color: var(--blocks-background);
}

@media (hover: hover) {
  .game-select_fieldset {
    &> input:hover,
    &> label:hover {
      cursor: pointer;
    }
  }
  .game-select_selector:hover {
    cursor: pointer;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/header/gameSelector/gameSelector.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,qCAAqC;EACrC,mCAAmC;;EAEnC;IACE,iBAAiB;EACnB;;EAEA;IACE,cAAc;IACd,eAAe;EACjB;;EAEA;IACE,mCAAmC;EACrC;AACF;;AAEA;EACE,eAAe;EACf,+BAA+B;EAC/B,0CAA0C;AAC5C;;AAEA;EACE;IACE;;MAEE,eAAe;IACjB;EACF;EACA;IACE,eAAe;EACjB;AACF","sourcesContent":[".container-game-select {\r\n  flex: 0 0 auto;\r\n  width: var(--container-width);\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.game-select {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.game-select_fieldset {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  gap: 0.25rem;\r\n  padding: 0.5rem 1rem;\r\n  border: 1px solid var(--border-color);\r\n  border-radius: var(--border-radius);\r\n\r\n  & .fieldset_label {\r\n    margin-right:1rem;\r\n  }\r\n\r\n  & .fieldset_legend {\r\n    margin: 0 auto;\r\n    padding: 0 1rem;\r\n  }\r\n\r\n  & input {\r\n    accent-color: var(--btn-icon-hover);\r\n  }\r\n}\r\n\r\n.game-select_selector {\r\n  font-size: 1rem;\r\n  color: var(--common-text-color);\r\n  background-color: var(--blocks-background);\r\n}\r\n\r\n@media (hover: hover) {\r\n  .game-select_fieldset {\r\n    &> input:hover,\r\n    &> label:hover {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n  .game-select_selector:hover {\r\n    cursor: pointer;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/header/header.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/header/header.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 0 0 auto;
  width: 100%;
  padding-bottom: 0.5rem;

  border-bottom: 1px solid var(--border-color);
}

.container-game-options {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  width: var(--container-width);
  padding: 0.3rem 0.5rem;

  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}
`, "",{"version":3,"sources":["webpack://./src/components/header/header.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,cAAc;EACd,WAAW;EACX,sBAAsB;;EAEtB,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;;EAEX,6BAA6B;EAC7B,sBAAsB;;EAEtB,mCAAmC;EACnC,qCAAqC;AACvC","sourcesContent":[".header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex: 0 0 auto;\r\n  width: 100%;\r\n  padding-bottom: 0.5rem;\r\n\r\n  border-bottom: 1px solid var(--border-color);\r\n}\r\n\r\n.container-game-options {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1.5rem;\r\n\r\n  width: var(--container-width);\r\n  padding: 0.3rem 0.5rem;\r\n\r\n  border-radius: var(--border-radius);\r\n  border: 1px solid var(--border-color);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/header/muteSound/muteSound.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/header/muteSound/muteSound.css ***!
  \*********************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.container-mute {
  width: 2rem;
  height: 2rem;
  transition-duration: 200ms;

  & svg {
    width: 100%;
    height: 100%;
    fill: var(--border-color);
  }
}

@media (hover: hover) {
  .container-mute:hover {
    & svg {
      cursor: pointer;
      fill: var(--btn-icon-hover);
    }
  }
}`, "",{"version":3,"sources":["webpack://./src/components/header/muteSound/muteSound.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,0BAA0B;;EAE1B;IACE,WAAW;IACX,YAAY;IACZ,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE;MACE,eAAe;MACf,2BAA2B;IAC7B;EACF;AACF","sourcesContent":[".container-mute {\r\n  width: 2rem;\r\n  height: 2rem;\r\n  transition-duration: 200ms;\r\n\r\n  & svg {\r\n    width: 100%;\r\n    height: 100%;\r\n    fill: var(--border-color);\r\n  }\r\n}\r\n\r\n@media (hover: hover) {\r\n  .container-mute:hover {\r\n    & svg {\r\n      cursor: pointer;\r\n      fill: var(--btn-icon-hover);\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/header/schemeSelector/schemeSelector.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/header/schemeSelector/schemeSelector.css ***!
  \*******************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.scheme-select {
  font-size: 1rem;
  margin-left: 0.5rem;
  color: var(--common-text-color);
  background-color: var(--blocks-background);
}

@media (hover: hover) {
  .scheme-select:hover {
    cursor: pointer;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/header/schemeSelector/schemeSelector.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,mBAAmB;EACnB,+BAA+B;EAC/B,0CAA0C;AAC5C;;AAEA;EACE;IACE,eAAe;EACjB;AACF","sourcesContent":[".scheme-select {\r\n  font-size: 1rem;\r\n  margin-left: 0.5rem;\r\n  color: var(--common-text-color);\r\n  background-color: var(--blocks-background);\r\n}\r\n\r\n@media (hover: hover) {\r\n  .scheme-select:hover {\r\n    cursor: pointer;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/notice/showNotice.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/notice/showNotice.css ***!
  \************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.notice-container {
  position: fixed;
  top: 0;
  transform: translateY(-100%);

  width: clamp(5rem, 100vw, 60rem);
  min-height: 2rem;
  padding: 1rem 2rem;

  font-size: 1.2rem;
  text-align: center;
  color: var(--notice-text-color);
  background-color: var(--notice-background);

  border: 2px solid var(--border-color);
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;

  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: ease-out;
}

.notice-container_visable {
  transform: translateY(0%);
}

.notice_error {
  color: var(--notice-text-color-error);
  background-color: var(--notice-background-error);
}`, "",{"version":3,"sources":["webpack://./src/components/notice/showNotice.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,MAAM;EACN,4BAA4B;;EAE5B,gCAAgC;EAChC,gBAAgB;EAChB,kBAAkB;;EAElB,iBAAiB;EACjB,kBAAkB;EAClB,+BAA+B;EAC/B,0CAA0C;;EAE1C,qCAAqC;EACrC,iCAAiC;EACjC,kCAAkC;;EAElC,8BAA8B;EAC9B,0BAA0B;EAC1B,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,qCAAqC;EACrC,gDAAgD;AAClD","sourcesContent":[".notice-container {\r\n  position: fixed;\r\n  top: 0;\r\n  transform: translateY(-100%);\r\n\r\n  width: clamp(5rem, 100vw, 60rem);\r\n  min-height: 2rem;\r\n  padding: 1rem 2rem;\r\n\r\n  font-size: 1.2rem;\r\n  text-align: center;\r\n  color: var(--notice-text-color);\r\n  background-color: var(--notice-background);\r\n\r\n  border: 2px solid var(--border-color);\r\n  border-bottom-left-radius: 0.3rem;\r\n  border-bottom-right-radius: 0.3rem;\r\n\r\n  transition-property: transform;\r\n  transition-duration: 300ms;\r\n  transition-timing-function: ease-out;\r\n}\r\n\r\n.notice-container_visable {\r\n  transform: translateY(0%);\r\n}\r\n\r\n.notice_error {\r\n  color: var(--notice-text-color-error);\r\n  background-color: var(--notice-background-error);\r\n}"],"sourceRoot":""}]);
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
  border: 1px solid var(--cell-background-fill);
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
.cell[role="game"]:hover,
.cell[role="clue"]:hover {
    cursor: pointer;
  }
.cell[role="game"]:hover {
    filter: invert(var(--hover-invert));
  }
}
`, "",{"version":3,"sources":["webpack://./src/components/plotContainer/cell/cell.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,iBAAiB;EACjB,0CAA0C;AAC5C;;AAEA;EACE,wCAAwC;EACxC,8CAA8C;EAC9C,2CAA2C;AAC7C;;AAEA;EACE,6CAA6C;EAC7C,6CAA6C;AAC/C;;AAEA;EACE,0CAA0C;EAC1C,mCAAmC;EACnC,yCAAyC;AAC3C;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,WAAW;EACX,QAAQ;EACR,QAAQ;EACR,UAAU;EACV,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;AACA;;IAEI,eAAe;EACjB;AACF;IACI,mCAAmC;EACrC;AACF","sourcesContent":[".cell {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  user-select: none;\r\n  background-color: var(--blocks-background);\r\n}\r\n\r\n.cell[role=\"game\"] {\r\n  background-color: var(--cell-background);\r\n  color: rgba(0, 0, 0, var(--opacity-cell-text));\r\n  border: 1px dashed var(--cell-border-color);\r\n}\r\n\r\n.cell_fill[role=\"game\"] {\r\n  background-color: var(--cell-background-fill);\r\n  border: 1px solid var(--cell-background-fill);\r\n}\r\n\r\n.cell[role=\"empty\"] {\r\n  background-color: var(--blocks-background);\r\n  grid-row: 1 / span var(--row-count);\r\n  grid-column: 1 / span var(--column-count);\r\n}\r\n\r\n.cell[row] {\r\n  border-bottom: 2px solid var(--border-color);\r\n}\r\n\r\n.cell[first-row] {\r\n  border-top: 2px solid var(--border-color);\r\n}\r\n\r\n.cell[col] {\r\n  border-right: 2px solid var(--border-color);\r\n}\r\n\r\n.cell[first-col] {\r\n  border-left: 2px solid var(--border-color);\r\n}\r\n\r\n.cell_checked[role=\"game\"] {\r\n  position: relative;\r\n}\r\n\r\n.cell_checked[role=\"game\"]::after,\r\n.cell_checked[role=\"game\"]::before {\r\n  content: '';\r\n  position: absolute;\r\n  display: block;\r\n  width: 120%;\r\n  height: 1px;\r\n  inset: 0;\r\n  top: 45%;\r\n  left: -10%;\r\n  transform: rotateZ(45deg);\r\n  background-color: black;\r\n}\r\n\r\n.cell_checked[role=\"game\"]::before {\r\n  transform: rotateZ(-45deg);\r\n}\r\n\r\n@media (hover: hover)  {\r\n.cell[role=\"game\"]:hover,\r\n.cell[role=\"clue\"]:hover {\r\n    cursor: pointer;\r\n  }\r\n.cell[role=\"game\"]:hover {\r\n    filter: invert(var(--hover-invert));\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

    font-size: clamp(14px, 300px / var(--columns-count), 20px);

    border: 2px solid var(--border-color);
    border-bottom: none;
    border-right: none;
    background-color: rgb(200, 200, 200);
  }
`, "",{"version":3,"sources":["webpack://./src/components/plotContainer/plotContainer.css"],"names":[],"mappings":"EAAE;IACE,mBAAmB;;IAEnB,aAAa;IACb,wDAAwD;;IAExD,0DAA0D;;IAE1D,qCAAqC;IACrC,mBAAmB;IACnB,kBAAkB;IAClB,oCAAoC;EACtC","sourcesContent":["  .game-container {\r\n    --columns-count: 20;\r\n\r\n    display: grid;\r\n    grid-template-columns: repeat(var(--columns-count), 1fr);\r\n\r\n    font-size: clamp(14px, 300px / var(--columns-count), 20px);\r\n\r\n    border: 2px solid var(--border-color);\r\n    border-bottom: none;\r\n    border-right: none;\r\n    background-color: rgb(200, 200, 200);\r\n  }\r\n"],"sourceRoot":""}]);
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
  --cell-background-fill: rgb(90, 0, 255);
  --cell-border-color: rgb(200, 200, 200);
  --border-color: rgb(0, 0, 0);
  --score-lastgame: rgb(165, 245, 140);
  --common-text-color: rgb(0, 0, 0);
  --score-shadow: rgb(125, 125, 125);
  --color-warning: 255, 80, 80;
  --color-warning-shadow: 0, 0, 0;
  --border-radius: 0.2rem;
  --btn-icon-hover: rgba(90, 0, 255, 1);
  --container-width: clamp(1rem, 100%, 25rem);
  --btn-disabled-border: rgb(170, 170, 170);

  --notice-background: rgba(90, 0, 255);
  --notice-text-color: rgb(255, 255, 255);
  --notice-background-error: rgba(255, 174, 0);
  --notice-text-color-error: rgb(0, 0, 0);
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
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  flex: 1 0 auto;
}

.button-container {
  container-name: buttons;
  container-type: inline-size;

  display: flex;
  flex: 1 0 2rem;
  height: 100%;
}

.button {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: clamp(5px, 5%, 10px);

  transition-duration: 200ms;
  user-select: none;
  color: var(--common-text-color);
  color: inherit;
  padding: clamp(4px, 1%, 8px) clamp(5px, 1%, 10px);
  border: 2px solid var(--border-color);
  border-radius: 0.3rem;
  background-color: var(--blocks-background);
  font-weight: bold;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  & svg {
    width: 1.5rem;
    height: auto;
  }
}



.gameover {
  pointer-events: none;
  filter: blur(1px) opacity(0.8);
}

.gameover~footer button[data-role="cavein"],
.gameover~footer button[data-role="save"],
.button_disabled button {
  color: var(--btn-disabled-border);
  pointer-events: none;
  border: 2px solid var(--btn-disabled-border);
  border-radius: 0.3rem;

  & svg {
    fill: var(--btn-disabled-border);
  }
}

@media (hover: hover) {
  .button:hover {
    cursor: pointer;
    filter: brightness(1.2);

    & svg {
      fill: var(--btn-icon-hover);
    }
  }
}

@container buttons (max-width: 110px) {
  .button {
    & span {
      display: none;
    }

    & svg {
      width: 2rem;
    }
  }
}

.animation {
    animation-name: roll;
    animation-duration: 5s;
    animation-iteration-count: 1;
    animation-fill-mode: none;
}

@keyframes roll {
  0% {
    fill: var(--border-color);
  }
  20% {
    transform: rotateY(0deg);
    fill: rgb(var(--color-warning));
  }
  80% {
    transform: rotateY(360deg);
    fill: rgb(var(--color-warning));
  }
  100% {
    transform: rotateY(360deg);
    fill: var(--border-color);
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,oCAAoC;EACpC,uCAAuC;EACvC,qCAAqC;EACrC,uCAAuC;EACvC,uCAAuC;EACvC,4BAA4B;EAC5B,oCAAoC;EACpC,iCAAiC;EACjC,kCAAkC;EAClC,4BAA4B;EAC5B,+BAA+B;EAC/B,uBAAuB;EACvB,qCAAqC;EACrC,2CAA2C;EAC3C,yCAAyC;;EAEzC,qCAAqC;EACrC,uCAAuC;EACvC,4CAA4C;EAC5C,uCAAuC;AACzC;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,aAAa;;EAEb,YAAY;;EAEZ,wEAAwE;EACxE,+BAA+B;EAC/B,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;;EAEX,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,2BAA2B;;EAE3B,aAAa;EACb,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;;EAEzB,0BAA0B;EAC1B,iBAAiB;EACjB,+BAA+B;EAC/B,cAAc;EACd,iDAAiD;EACjD,qCAAqC;EACrC,qBAAqB;EACrB,0CAA0C;EAC1C,iBAAiB;EACjB,qGAAqG;;EAErG;IACE,aAAa;IACb,YAAY;EACd;AACF;;;;AAIA;EACE,oBAAoB;EACpB,8BAA8B;AAChC;;AAEA;;;EAGE,iCAAiC;EACjC,oBAAoB;EACpB,4CAA4C;EAC5C,qBAAqB;;EAErB;IACE,gCAAgC;EAClC;AACF;;AAEA;EACE;IACE,eAAe;IACf,uBAAuB;;IAEvB;MACE,2BAA2B;IAC7B;EACF;AACF;;AAEA;EACE;IACE;MACE,aAAa;IACf;;IAEA;MACE,WAAW;IACb;EACF;AACF;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,4BAA4B;IAC5B,yBAAyB;AAC7B;;AAEA;EACE;IACE,yBAAyB;EAC3B;EACA;IACE,wBAAwB;IACxB,+BAA+B;EACjC;EACA;IACE,0BAA0B;IAC1B,+BAA+B;EACjC;EACA;IACE,0BAA0B;IAC1B,yBAAyB;EAC3B;AACF","sourcesContent":[":root {\r\n  --opacity-cell-text: 0;\r\n  --hover-invert: 0.2;\r\n  --body-bacground: rgb(230, 255, 230);\r\n  --blocks-background: rgb(231, 255, 255);\r\n  --cell-background: rgb(240, 240, 240);\r\n  --cell-background-fill: rgb(90, 0, 255);\r\n  --cell-border-color: rgb(200, 200, 200);\r\n  --border-color: rgb(0, 0, 0);\r\n  --score-lastgame: rgb(165, 245, 140);\r\n  --common-text-color: rgb(0, 0, 0);\r\n  --score-shadow: rgb(125, 125, 125);\r\n  --color-warning: 255, 80, 80;\r\n  --color-warning-shadow: 0, 0, 0;\r\n  --border-radius: 0.2rem;\r\n  --btn-icon-hover: rgba(90, 0, 255, 1);\r\n  --container-width: clamp(1rem, 100%, 25rem);\r\n  --btn-disabled-border: rgb(170, 170, 170);\r\n\r\n  --notice-background: rgba(90, 0, 255);\r\n  --notice-text-color: rgb(255, 255, 255);\r\n  --notice-background-error: rgba(255, 174, 0);\r\n  --notice-text-color-error: rgb(0, 0, 0);\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100dvh;\r\n}\r\n\r\n.body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding: 1rem;\r\n\r\n  height: 100%;\r\n\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  color: var(--common-text-color);;\r\n  background-color: var(--body-bacground);\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n\r\n  flex: 1 0 auto;\r\n}\r\n\r\n.button-container {\r\n  container-name: buttons;\r\n  container-type: inline-size;\r\n\r\n  display: flex;\r\n  flex: 1 0 2rem;\r\n  height: 100%;\r\n}\r\n\r\n.button {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: clamp(5px, 5%, 10px);\r\n\r\n  transition-duration: 200ms;\r\n  user-select: none;\r\n  color: var(--common-text-color);\r\n  color: inherit;\r\n  padding: clamp(4px, 1%, 8px) clamp(5px, 1%, 10px);\r\n  border: 2px solid var(--border-color);\r\n  border-radius: 0.3rem;\r\n  background-color: var(--blocks-background);\r\n  font-weight: bold;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\r\n  & svg {\r\n    width: 1.5rem;\r\n    height: auto;\r\n  }\r\n}\r\n\r\n\r\n\r\n.gameover {\r\n  pointer-events: none;\r\n  filter: blur(1px) opacity(0.8);\r\n}\r\n\r\n.gameover~footer button[data-role=\"cavein\"],\r\n.gameover~footer button[data-role=\"save\"],\r\n.button_disabled button {\r\n  color: var(--btn-disabled-border);\r\n  pointer-events: none;\r\n  border: 2px solid var(--btn-disabled-border);\r\n  border-radius: 0.3rem;\r\n\r\n  & svg {\r\n    fill: var(--btn-disabled-border);\r\n  }\r\n}\r\n\r\n@media (hover: hover) {\r\n  .button:hover {\r\n    cursor: pointer;\r\n    filter: brightness(1.2);\r\n\r\n    & svg {\r\n      fill: var(--btn-icon-hover);\r\n    }\r\n  }\r\n}\r\n\r\n@container buttons (max-width: 110px) {\r\n  .button {\r\n    & span {\r\n      display: none;\r\n    }\r\n\r\n    & svg {\r\n      width: 2rem;\r\n    }\r\n  }\r\n}\r\n\r\n.animation {\r\n    animation-name: roll;\r\n    animation-duration: 5s;\r\n    animation-iteration-count: 1;\r\n    animation-fill-mode: none;\r\n}\r\n\r\n@keyframes roll {\r\n  0% {\r\n    fill: var(--border-color);\r\n  }\r\n  20% {\r\n    transform: rotateY(0deg);\r\n    fill: rgb(var(--color-warning));\r\n  }\r\n  80% {\r\n    transform: rotateY(360deg);\r\n    fill: rgb(var(--color-warning));\r\n  }\r\n  100% {\r\n    transform: rotateY(360deg);\r\n    fill: var(--border-color);\r\n  }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/components/buttons/mode/btnSwitchMode.css":
/*!*******************************************************!*\
  !*** ./src/components/buttons/mode/btnSwitchMode.css ***!
  \*******************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_btnSwitchMode_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./btnSwitchMode.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/buttons/mode/btnSwitchMode.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_btnSwitchMode_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_btnSwitchMode_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_btnSwitchMode_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_btnSwitchMode_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/header/gameSelector/gameSelector.css":
/*!*************************************************************!*\
  !*** ./src/components/header/gameSelector/gameSelector.css ***!
  \*************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameSelector_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./gameSelector.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/header/gameSelector/gameSelector.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_gameSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_gameSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/header/header.css":
/*!******************************************!*\
  !*** ./src/components/header/header.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/header/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/header/muteSound/muteSound.css":
/*!*******************************************************!*\
  !*** ./src/components/header/muteSound/muteSound.css ***!
  \*******************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_muteSound_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./muteSound.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/header/muteSound/muteSound.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_muteSound_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_muteSound_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_muteSound_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_muteSound_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/header/schemeSelector/schemeSelector.css":
/*!*****************************************************************!*\
  !*** ./src/components/header/schemeSelector/schemeSelector.css ***!
  \*****************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_schemeSelector_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./schemeSelector.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/header/schemeSelector/schemeSelector.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_schemeSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_schemeSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_schemeSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_schemeSelector_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/notice/showNotice.css":
/*!**********************************************!*\
  !*** ./src/components/notice/showNotice.css ***!
  \**********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_showNotice_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./showNotice.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/notice/showNotice.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_showNotice_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_showNotice_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_showNotice_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_showNotice_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
      'cell-background-fill': 'rgb(90, 0, 255)',
      'cell-border-color': 'rgb(200, 200, 200)',
      'border-color': 'rgb(0, 0, 0)',
      'score-lastgame': 'rgb(165, 245, 140)',
      'common-text-color': 'rgb(0, 0, 0)',
      'hover-invert': '0.2',
      'score-shadow': 'rgb(125, 125, 125)',
      'color-warning': '255, 80, 80',
      'btn-icon-hover': 'rgba(90, 0, 255, 1)',
      'btn-disabled-border': 'rgb(170, 170, 170)',
      'notice-background': 'rgba(90, 0, 255)',
      'notice-text-color': 'rgb(255, 255, 255)',
      'notice-background-error': 'rgba(255, 174, 0)',
      'notice-text-color-error': 'rgb(0, 0, 0)',
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
      'btn-icon-hover': 'rgba(160, 160, 40, 1)',
      'btn-disabled-border': 'rgb(20, 20, 20)',
      'notice-background': 'rgba(40, 0, 110)',
      'notice-text-color': 'rgb(200, 200, 200)',
      'notice-background-error': 'rgba(180, 80, 80)',
      'notice-text-color-error': 'rgb(240, 240, 240)',
    },
  },
  {
    title: 'светлая',
    name: 'light',
    colors: {
      'body-bacground': 'rgb(230, 230, 230)',
      'blocks-background': 'rgb(255, 255, 255)',
      'cell-background': 'rgb(240, 240, 240)',
      'cell-background-fill': 'rgb(40, 70, 120)',
      'cell-border-color': 'rgb(200, 200, 200)',
      'border-color': 'rgb(140, 140, 140)',
      'score-lastgame': 'rgb(255, 220, 220)',
      'common-text-color': 'rgb(100, 100, 100)',
      'hover-invert': '0.2',
      'score-shadow': 'rgb(150, 150, 150)',
      'color-warning': '255, 80, 80',
      'btn-icon-hover': 'rgba(40, 70, 120, 1)',
      'btn-disabled-border': 'rgb(200, 180, 180)',
      'notice-background': 'rgba(40, 70, 120)',
      'notice-background-error': 'rgba(255, 170, 170)',
      'notice-text-color-error': 'rgb(0, 0, 0)',
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
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/createNode */ "./src/utils/createNode.js");
/* harmony import */ var _timer_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../timer/timer */ "./src/components/timer/timer.js");
/* harmony import */ var _assets_icons_solution_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/icons/solution.svg */ "./src/assets/icons/solution.svg");
/* harmony import */ var _btnCavein_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./btnCavein.css */ "./src/components/buttons/cavein/btnCavein.css");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const btn = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createButton)({
    txt: 'Solution',
    icon: _assets_icons_solution_svg__WEBPACK_IMPORTED_MODULE_3__,
    attr: [['data-role', 'cavein']],
  });
  btn.firstElementChild.addEventListener('click', clickCavein);
  return btn;
});

const clickCavein = () => {
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.showCellsValue = true;
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.isGameStarted = false;
  (0,_timer_timer__WEBPACK_IMPORTED_MODULE_2__.startTimer)(false);
  const opacity = '1';
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.showCellsValue = true;
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
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/createNode */ "./src/utils/createNode.js");
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/localStorage */ "./src/utils/localStorage.js");
/* harmony import */ var _assets_icons_load_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/icons/load.svg */ "./src/assets/icons/load.svg");
/* harmony import */ var _btnLoad_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./btnLoad.css */ "./src/components/buttons/load/btnLoad.css");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../state/state */ "./src/state/state.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const btnLoad = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_0__.createButton)({
    cls: 'button_disabled',
    txt: 'Continue last game',
    icon: _assets_icons_load_svg__WEBPACK_IMPORTED_MODULE_2__,
  });
  _state_state__WEBPACK_IMPORTED_MODULE_4__["default"].html.btnLoad = btnLoad;
  btnLoad.firstElementChild.addEventListener('click', _utils_localStorage__WEBPACK_IMPORTED_MODULE_1__.loadState);
  if ((0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_1__.isSavedGame)()) {
    _state_state__WEBPACK_IMPORTED_MODULE_4__["default"].html.btnLoad.classList.remove('button_disabled');
  } else {
    _state_state__WEBPACK_IMPORTED_MODULE_4__["default"].html.btnLoad.classList.add('button_disabled');
  }
  return btnLoad;
});


/***/ }),

/***/ "./src/components/buttons/mode/btnSwitchMode.js":
/*!******************************************************!*\
  !*** ./src/components/buttons/mode/btnSwitchMode.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../state/state */ "./src/state/state.js");
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/createNode */ "./src/utils/createNode.js");
/* harmony import */ var _assets_icons_cross_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/icons/cross.svg */ "./src/assets/icons/cross.svg");
/* harmony import */ var _assets_icons_fill_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/icons/fill.svg */ "./src/assets/icons/fill.svg");
/* harmony import */ var _assets_icons_brush_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/icons/brush.svg */ "./src/assets/icons/brush.svg");
/* harmony import */ var _btnSwitchMode_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./btnSwitchMode.css */ "./src/components/buttons/mode/btnSwitchMode.css");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const container = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    tag: 'button',
    cls: 'button btn-switch-container',
    attr: [['title', 'переключить действие по ЛКМ']],
  });
  const icon = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({ tag: 'svg' });
  icon.innerHTML = _assets_icons_brush_svg__WEBPACK_IMPORTED_MODULE_4__;
  container.append(icon);

  const span = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({ tag: 'span', txt: 'switch brush' });
  container.append(span);

  const iconBrushMode = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({ tag: 'svg' });
  iconBrushMode.innerHTML = _assets_icons_fill_svg__WEBPACK_IMPORTED_MODULE_3__;
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.iconBrushMode = iconBrushMode;

  container.append(iconBrushMode);
  container.addEventListener('click', switchBrushMode);

  return container;
});

const switchBrushMode = () => {
  const { brush } = _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game;

  switch (brush) {
    case 'fill':
      _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.brush = 'cross';
      _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.iconBrushMode.innerHTML = _assets_icons_cross_svg__WEBPACK_IMPORTED_MODULE_2__;
      break;
    case 'cross':
      _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.brush = 'fill';
      _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.iconBrushMode.innerHTML = _assets_icons_fill_svg__WEBPACK_IMPORTED_MODULE_3__;
      break;
  }
};


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
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/createNode */ "./src/utils/createNode.js");
/* harmony import */ var _header_gameSelector_gameSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../header/gameSelector/gameSelector */ "./src/components/header/gameSelector/gameSelector.js");
/* harmony import */ var _plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../plotContainer/renderDesk */ "./src/components/plotContainer/renderDesk.js");
/* harmony import */ var _timer_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../timer/timer */ "./src/components/timer/timer.js");
/* harmony import */ var _assets_icons_random_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/icons/random.svg */ "./src/assets/icons/random.svg");
/* harmony import */ var _btnRandom_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./btnRandom.css */ "./src/components/buttons/random/btnRandom.css");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const button = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createButton)({ icon: _assets_icons_random_svg__WEBPACK_IMPORTED_MODULE_5__, txt: 'Random game' });
  button.firstElementChild.addEventListener('click', randomGame);

  return button;
});

const randomGame = () => {
  let countGames = 0;
  const { fields } = _state_state__WEBPACK_IMPORTED_MODULE_0__["default"];

  for (const field in fields) {
    countGames += fields[field]?.length || 0;
  }

  const randomID = Math.round(Math.random() * (countGames - 1));
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.currentGame = randomID;
  (0,_plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_3__["default"])(randomID);
  (0,_header_gameSelector_gameSelector__WEBPACK_IMPORTED_MODULE_2__.switchGame)(randomID);
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
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/createNode */ "./src/utils/createNode.js");
/* harmony import */ var _plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../plotContainer/renderDesk */ "./src/components/plotContainer/renderDesk.js");
/* harmony import */ var _timer_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../timer/timer */ "./src/components/timer/timer.js");
/* harmony import */ var _assets_icons_reset_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/icons/reset.svg */ "./src/assets/icons/reset.svg");
/* harmony import */ var _btnReset_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./btnReset.css */ "./src/components/buttons/reset/btnReset.css");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const btnReset = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createButton)({
    txt: 'Reset game',
    icon: _assets_icons_reset_svg__WEBPACK_IMPORTED_MODULE_4__,
  });
  btnReset.firstElementChild.addEventListener('click', resetGame);
  return btnReset;
});

const resetGame = () => {
  (0,_plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_2__["default"])(_state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.currentGame);
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.timer = 0;
  const opacity = '0';
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.showCellsValue = false;
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
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/createNode */ "./src/utils/createNode.js");
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/localStorage */ "./src/utils/localStorage.js");
/* harmony import */ var _assets_icons_bookmarks_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/icons/bookmarks.svg */ "./src/assets/icons/bookmarks.svg");
/* harmony import */ var _btnSave_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./btnSave.css */ "./src/components/buttons/save/btnSave.css");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const btnSave = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_0__.createButton)({
    txt: 'Save game',
    icon: _assets_icons_bookmarks_svg__WEBPACK_IMPORTED_MODULE_2__,
    attr: [['data-role', 'save']],
  });
  btnSave.firstElementChild.addEventListener('click', _utils_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveState);
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
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/createNode */ "./src/utils/createNode.js");
/* harmony import */ var _buttons_cavein_btnCavein__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buttons/cavein/btnCavein */ "./src/components/buttons/cavein/btnCavein.js");
/* harmony import */ var _buttons_load_btnLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buttons/load/btnLoad */ "./src/components/buttons/load/btnLoad.js");
/* harmony import */ var _buttons_random_btnRandom___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buttons/random/btnRandom. */ "./src/components/buttons/random/btnRandom..js");
/* harmony import */ var _buttons_reset_btnReset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buttons/reset/btnReset */ "./src/components/buttons/reset/btnReset.js");
/* harmony import */ var _buttons_save_btnSave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buttons/save/btnSave */ "./src/components/buttons/save/btnSave.js");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer.css */ "./src/components/footer/footer.css");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const footer = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'footer', cls: 'footer' });
  const cavein = (0,_buttons_cavein_btnCavein__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const reset = (0,_buttons_reset_btnReset__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const save = (0,_buttons_save_btnSave__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const load = (0,_buttons_load_btnLoad__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const random = (0,_buttons_random_btnRandom___WEBPACK_IMPORTED_MODULE_3__["default"])();

  footer.append(cavein, reset, save, load, random);
  return footer;
});


/***/ }),

/***/ "./src/components/header/gameSelector/gameSelector.js":
/*!************************************************************!*\
  !*** ./src/components/header/gameSelector/gameSelector.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameSelector: () => (/* binding */ gameSelector),
/* harmony export */   switchGame: () => (/* binding */ switchGame)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../state/state */ "./src/state/state.js");
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/createNode */ "./src/utils/createNode.js");
/* harmony import */ var _utils_createOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/createOptions */ "./src/utils/createOptions.js");
/* harmony import */ var _plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../plotContainer/renderDesk */ "./src/components/plotContainer/renderDesk.js");
/* harmony import */ var _timer_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../timer/timer */ "./src/components/timer/timer.js");
/* harmony import */ var _gameSelector_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameSelector.css */ "./src/components/header/gameSelector/gameSelector.css");







const gameSelector = () => {
  const header = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({ cls: 'container-game-select' });
  const form = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({ tag: 'form', cls: 'form' });
  const gameSelectContainer = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({ cls: 'game-select' });

  const fieldSet = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    tag: 'fieldset',
    cls: 'game-select_fieldset',
  });
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.fieldSet = fieldSet;
  const legend = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    tag: 'legend',
    cls: 'fieldset_legend',
    txt: 'сложность',
  });

  const gameSelectLabel = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    tag: 'label',
    txt: 'Выбор игры',
    attr: [['for', 'game-select']],
  });
  const gameSelect = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    tag: 'select',
    cls: 'game-select_selector',
    attr: [['id', 'game-select']],
  });
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.gameSelect = gameSelect;

  const gameFilterLabel5 = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    tag: 'label',
    txt: '5x5',
    cls: 'fieldset_label',
    attr: [['for', 'game-filter-5x5']],
  });
  const gameFilter5 = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({
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
  const gameFilterLabel10 = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    tag: 'label',
    txt: '10x10',
    cls: 'fieldset_label',
    attr: [['for', 'game-filter-10x10']],
  });
  const gameFilter10 = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    tag: 'input',
    attr: [
      ['type', 'radio'],
      ['name', 'game-filter'],
      ['value', '10x10'],
      ['id', 'game-filter-10x10'],
    ],
  });
  const gameFilterLabel15 = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    tag: 'label',
    txt: '15x15',
    cls: 'fieldset_label',
    attr: [['for', 'game-filter-15x15']],
  });
  const gameFilter15 = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({
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
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.showCellsValue = false;
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

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/createNode */ "./src/utils/createNode.js");
/* harmony import */ var _gameSelector_gameSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameSelector/gameSelector */ "./src/components/header/gameSelector/gameSelector.js");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.css */ "./src/components/header/header.css");
/* harmony import */ var _muteSound_muteSound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./muteSound/muteSound */ "./src/components/header/muteSound/muteSound.js");
/* harmony import */ var _schemeSelector_schemeSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemeSelector/schemeSelector */ "./src/components/header/schemeSelector/schemeSelector.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  _utils_createNode__WEBPACK_IMPORTED_MODULE_0__.createElement;
  const header = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'header', cls: 'header' });
  const containerGameOptions = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_0__.createElement)({ cls: 'container-game-options' });
  containerGameOptions.append((0,_schemeSelector_schemeSelector__WEBPACK_IMPORTED_MODULE_4__["default"])());
  containerGameOptions.append((0,_muteSound_muteSound__WEBPACK_IMPORTED_MODULE_3__["default"])());

  header.append(containerGameOptions);
  header.append((0,_gameSelector_gameSelector__WEBPACK_IMPORTED_MODULE_1__.gameSelector)());
  return header;
});


/***/ }),

/***/ "./src/components/header/muteSound/muteSound.js":
/*!******************************************************!*\
  !*** ./src/components/header/muteSound/muteSound.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/createNode */ "./src/utils/createNode.js");
/* harmony import */ var _muteSound_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./muteSound.css */ "./src/components/header/muteSound/muteSound.css");
/* harmony import */ var _assets_icons_sound_on_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/icons/sound-on.svg */ "./src/assets/icons/sound-on.svg");
/* harmony import */ var _assets_icons_sound_off_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/icons/sound-off.svg */ "./src/assets/icons/sound-off.svg");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../state/state */ "./src/state/state.js");






let initVolume = _state_state__WEBPACK_IMPORTED_MODULE_4__["default"].game.soundVolume;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const container = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_0__.createElement)({ cls: 'container-mute' });
  const sound = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'svg' });
  _state_state__WEBPACK_IMPORTED_MODULE_4__["default"].html.soundIcon = sound;
  sound.innerHTML = _assets_icons_sound_on_svg__WEBPACK_IMPORTED_MODULE_2__;

  container.addEventListener('click', muteSoundClick);
  container.append(sound);
  return container;
});

const muteSoundClick = () => {
  const { soundVolume: volume } = _state_state__WEBPACK_IMPORTED_MODULE_4__["default"].game;

  if (volume > 0) {
    _state_state__WEBPACK_IMPORTED_MODULE_4__["default"].game.soundVolume = 0;
    _state_state__WEBPACK_IMPORTED_MODULE_4__["default"].html.soundIcon.innerHTML = _assets_icons_sound_off_svg__WEBPACK_IMPORTED_MODULE_3__;
    _state_state__WEBPACK_IMPORTED_MODULE_4__["default"].html.sounds.forEach((sound) => (sound.volume = 0));
  }
  if (volume === 0) {
    _state_state__WEBPACK_IMPORTED_MODULE_4__["default"].game.soundVolume = initVolume;
    _state_state__WEBPACK_IMPORTED_MODULE_4__["default"].html.soundIcon.innerHTML = _assets_icons_sound_on_svg__WEBPACK_IMPORTED_MODULE_2__;
    _state_state__WEBPACK_IMPORTED_MODULE_4__["default"].html.sounds.forEach((sound) => (sound.volume = initVolume));
  }
};


/***/ }),

/***/ "./src/components/header/schemeSelector/schemeSelector.js":
/*!****************************************************************!*\
  !*** ./src/components/header/schemeSelector/schemeSelector.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schemeSelector_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schemeSelector.css */ "./src/components/header/schemeSelector/schemeSelector.css");
/* harmony import */ var _assets_schemes_colorSchemes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/schemes/colorSchemes */ "./src/assets/schemes/colorSchemes.js");
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/createNode */ "./src/utils/createNode.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  _utils_createNode__WEBPACK_IMPORTED_MODULE_2__.createElement;
  let options = [];
  const container = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_2__.createElement)({ cls: 'scheme-container' });
  const label = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_2__.createElement)({
    tag: 'label',
    txt: 'Цветовая схема',
    attr: [['for', 'scheme_select']],
  });
  const select = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_2__.createElement)({
    tag: 'select',
    cls: 'scheme-select',
    attr: [['id', 'scheme_select']],
  });

  _assets_schemes_colorSchemes__WEBPACK_IMPORTED_MODULE_1__["default"].forEach((scheme) =>
    options.push(
      (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_2__.createElement)({
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

/***/ "./src/components/notice/showNotice.js":
/*!*********************************************!*\
  !*** ./src/components/notice/showNotice.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initNotice: () => (/* binding */ initNotice),
/* harmony export */   showNotice: () => (/* binding */ showNotice)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/state */ "./src/state/state.js");
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createNode */ "./src/utils/createNode.js");
/* harmony import */ var _showNotice_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showNotice.css */ "./src/components/notice/showNotice.css");




const showNotice = (notice, error = false) => {
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.notice.innerText = notice;
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.notice.classList.add('notice-container_visable');
  if (error) {
    _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.notice.classList.add('notice_error');
  } else _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.notice.classList.remove('notice_error');
  setTimeout(() => {
    _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.notice.classList.remove('notice-container_visable');
  }, _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.noticeDelay || 2000);
};

const initNotice = () => {
  if (!_state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.notice) {
    const noticeContainer = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({ cls: 'notice-container' });
    _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.notice = noticeContainer;
    document.body.append(_state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.notice);
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
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/createNode */ "./src/utils/createNode.js");
/* harmony import */ var _cell_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell.css */ "./src/components/plotContainer/cell/cell.css");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const cell = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_0__.createElement)({ cls: 'cell' });
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
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/createNode */ "./src/utils/createNode.js");
/* harmony import */ var _timer_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timer/timer */ "./src/components/timer/timer.js");
/* harmony import */ var _sound_soundFillCell_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sound/soundFillCell.mp3 */ "./src/components/plotContainer/sound/soundFillCell.mp3");
/* harmony import */ var _sound_soundFillCross_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sound/soundFillCross.mp3 */ "./src/components/plotContainer/sound/soundFillCross.mp3");
/* harmony import */ var _sound_soundClear_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sound/soundClear.mp3 */ "./src/components/plotContainer/sound/soundClear.mp3");
/* harmony import */ var _utils_gameRecord__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/gameRecord */ "./src/utils/gameRecord.js");
/* harmony import */ var _score_score__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../score/score */ "./src/components/score/score.js");
/* harmony import */ var _renderDesk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./renderDesk */ "./src/components/plotContainer/renderDesk.js");










const sndFillCell = new Audio(_sound_soundFillCell_mp3__WEBPACK_IMPORTED_MODULE_4__);
const sndFillCross = new Audio(_sound_soundFillCross_mp3__WEBPACK_IMPORTED_MODULE_5__);
const sndClear = new Audio(_sound_soundClear_mp3__WEBPACK_IMPORTED_MODULE_6__);
_state_state__WEBPACK_IMPORTED_MODULE_1__["default"].html.sounds = [];
_state_state__WEBPACK_IMPORTED_MODULE_1__["default"].html.sounds.push(sndFillCell, sndFillCross, sndClear);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const container = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_2__.createElement)({ tag: 'div', cls: 'game-container' });
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
  let index = null;
  const cell = plot.flat(1).filter((cell, i) => {
    if (cell.element === target) {
      index = i;
      return true;
    }
  })[0];

  return { cell, index };
};

const contextMenuHandler = (e) => {
  e.preventDefault();
  const { cell: clickedCell, index } = getClickedCell(e.target);
  if (clickedCell) {
    checkGameStart();
    const cellState = clickedCell.state;
    if (Number.isFinite(cellState)) {
      markX(clickedCell, index, false);
      return;
    }

    switch (cellState) {
      case '⚪':
        sndFillCross.play();
        clickedCell.state = 'x';
        break;
      case '⚫':
        sndFillCross.play();
        clickedCell.state = 'x';
        break;
      case 'x':
        sndClear.play();
        clickedCell.state = '⚪';
        break;
    }

    clickedCell.element.classList.toggle('cell_checked');
    clickedCell.element.classList.remove('cell_fill');
  }
};

const clickHandler = (e) => {
  const { brush } = _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].game;
  const { cell: clickedCell, index } = getClickedCell(e.target);

  const drawFill = () => {
    sndFillCell.play();
    clickedCell.state = '⚫';
    clickedCell.element.classList.add('cell_fill');
    clickedCell.element.classList.remove('cell_checked');
  };
  const drawCross = () => {
    sndFillCross.play();
    clickedCell.state = 'x';
    clickedCell.element.classList.toggle('cell_checked');
    clickedCell.element.classList.remove('cell_fill');
  };
  const drawEmpty = () => {
    sndClear.play();
    clickedCell.state = '⚪';
    clickedCell.element.classList.remove('cell_fill');
    clickedCell.element.classList.remove('cell_checked');
  };

  if (clickedCell) {
    checkGameStart();
    const cellState = clickedCell.state;
    if (Number.isFinite(cellState)) {
      markX(clickedCell, index);
      return;
    }
    switch (cellState) {
      case '⚪':
        if (brush === 'fill') {
          drawFill();
        } else drawCross();
        break;
      case '⚫':
        if (brush === 'fill') {
          drawEmpty();
        } else drawCross();
        break;
      case 'x':
        if (brush === 'fill') {
          drawFill();
        } else drawEmpty();
        break;
    }

    if (isAllCorrectChecked()) setTimeout(() => gameOver(), 0);
  }
};

const markX = (cell, indexCell, setMark = true) => {
  const length = _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].game.plot[0].length;
  let rowClicked = -1;
  let x = 0;
  while (x <= indexCell) {
    rowClicked += 1;
    x += length;
  }
  const columnCliked = indexCell - length * rowClicked;

  _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].game.plot.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      switch (setMark) {
        case true:
          if (
            (columnCliked === columnIndex || rowClicked === rowIndex) &&
            cell.state === '⚪'
          )
            cell.state = 'x';
          break;
        case false:
          if (
            (columnCliked === columnIndex || rowClicked === rowIndex) &&
            cell.state === 'x'
          )
            cell.state = '⚪';
          break;
      }
    });
  });
  (0,_renderDesk__WEBPACK_IMPORTED_MODULE_9__.updateDesk)();
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
/* harmony import */ var _cell_newCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cell/newCell */ "./src/components/plotContainer/cell/newCell.js");





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

  //сформируем элементы игрового поля
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.plotContainer.innerHTML = '';
  gameDesk.forEach((row, i) => {
    row.forEach((el, j) => {
      const cell = (0,_cell_newCell__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.plotContainer.style.setProperty('--columns-count', columnsCount);
});

const updateDesk = () => {
  //сформируем элементы игрового поля
  const { plot } = _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game;

  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.plotContainer.innerHTML = '';
  plot.forEach((row, i) => {
    row.forEach((el, j) => {
      const cell = (0,_cell_newCell__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.plotContainer.style.setProperty('--columns-count', columnsCount);
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
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createNode */ "./src/utils/createNode.js");
/* harmony import */ var _utils_gameRecord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/gameRecord */ "./src/utils/gameRecord.js");
/* harmony import */ var _timer_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timer/timer */ "./src/components/timer/timer.js");
/* harmony import */ var _score_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./score.css */ "./src/components/score/score.css");






const score = () => {
  const dialog = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    tag: 'dialog',
    cls: 'dialog',
    attr: [['open', '']],
  });
  const container = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({
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
  const h1 = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({ tag: 'h1', cls: 'score_h1', txt: title });
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
    const rec = records.filter((r) => r.difficulty === dif).reverse();
    if (rec.length === 0) return '';
    const container = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({ cls: 'container__records' });
    container.append((0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({ txt: 'игра' }));
    container.append((0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({ txt: 'сложн.' }));
    container.append((0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({ txt: 'время' }));
    rec.splice(5);
    const sorted = rec.sort((a, b) => a.timer - b.timer);
    sorted.forEach((r, i) => {
      const style = r.lastGame ? 'record_last-game' : '';
      container.append(
        (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({ txt: `${i + 1}. ${r.name}`, cls: style })
      );
      container.append((0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({ txt: r.difficulty, cls: style }));
      container.append((0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({ txt: (0,_timer_timer__WEBPACK_IMPORTED_MODULE_3__.parseTimer)(r.timer), cls: style }));
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
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createNode */ "./src/utils/createNode.js");
/* harmony import */ var _timer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer.css */ "./src/components/timer/timer.css");




const timer = () => {
  let seconds = parseInt(_state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.timer);
  seconds ||= 0;
  const timerStr = parseTimer(seconds);
  const timer = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({ tag: 'div', cls: 'timer', txt: timerStr });
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.timer = timer;
  return timer;
};

const renderTimer = () => {
  let seconds = parseInt(_state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.timer);
  seconds ||= 0;
  const time = parseTimer(seconds);
  if (_state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.timer.innerText !== time) _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.timer.innerText = time;
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
    brush: 'fill', // fill | cross
    animeInterval: 60,
    soundVolume: 0.5,
    noticeDelay: 2000,
  },
  fields: [],
  html: {},
  lsKeyState: 'nonogram20240127161701',
  lsKeyRecords: 'nonogram20240128182601',
});


/***/ }),

/***/ "./src/utils/animation.js":
/*!********************************!*\
  !*** ./src/utils/animation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startRandomSVGanimation: () => (/* binding */ startRandomSVGanimation)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/state */ "./src/state/state.js");


const startRandomSVGanimation = () => {
  const icons = document.querySelectorAll('svg');
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.icons = icons;

  setInterval(() => {
    const { icons } = _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html;
    const count = _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].html.icons.length;
    const random = Math.round(Math.random() * (count - 1));
    icons[random].classList.toggle('animation');
  }, _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.animeInterval * 1000);
};


/***/ }),

/***/ "./src/utils/createNode.js":
/*!*********************************!*\
  !*** ./src/utils/createNode.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createButton: () => (/* binding */ createButton),
/* harmony export */   createElement: () => (/* binding */ createElement)
/* harmony export */ });
const createElement = ({
  tag = 'div',
  cls = '',
  txt = '',
  attr = [],
  icon = null,
}) => {
  const element = document.createElement(tag);

  if (icon) {
    const svg = document.createElement('svg');
    svg.innerHTML = icon;

    const span = document.createElement('span');
    span.textContent = txt;

    element.append(svg, span);
  } else {
    element.innerText = txt;
  }

  cls && (element.className = cls);
  attr.forEach((attribut) => element.setAttribute(attribut[0], attribut[1]));
  return element;
};

const createButton = ({
  cls = '',
  icon = null,
  txt = '',
  attr = [],
}) => {
  const container = createElement({ cls: `button-container ${cls}` });
  const button = createElement({ tag: 'button', cls: 'button', attr: attr });

  if (icon) {
    const svg = createElement({ tag: 'svg', cls: 'button_icon' });
    svg.innerHTML = icon;
    button.append(svg);
  }

  if (txt) {
    const span = createElement({ tag: 'span', cls: 'button_span', txt: txt });
    button.append(span);
  }

  container.append(button);
  return container;
};


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
/* harmony import */ var _createNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNode */ "./src/utils/createNode.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((select, games) => {
  const options = games.map((game) => {
    const { length } = game.name;
    const MAX_LENGTH = 30;
    const nameNormalized =
      length > MAX_LENGTH ? game.name.slice(0, MAX_LENGTH) + '...' : game.name;
    const checked =
      _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.currentGame === game.id ? 'selected' : 'unselected';
    return (0,_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({
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
/* harmony export */   isSavedGame: () => (/* binding */ isSavedGame),
/* harmony export */   loadState: () => (/* binding */ loadState),
/* harmony export */   saveState: () => (/* binding */ saveState)
/* harmony export */ });
/* harmony import */ var _components_header_gameSelector_gameSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header/gameSelector/gameSelector */ "./src/components/header/gameSelector/gameSelector.js");
/* harmony import */ var _components_plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/plotContainer/renderDesk */ "./src/components/plotContainer/renderDesk.js");
/* harmony import */ var _components_notice_showNotice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/notice/showNotice */ "./src/components/notice/showNotice.js");
/* harmony import */ var _components_timer_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/timer/timer */ "./src/components/timer/timer.js");
/* harmony import */ var _assets_icons_cross_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/cross.svg */ "./src/assets/icons/cross.svg");
/* harmony import */ var _assets_icons_fill_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/fill.svg */ "./src/assets/icons/fill.svg");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/state */ "./src/state/state.js");








const saveState = () => {
  const { game } = _state_state__WEBPACK_IMPORTED_MODULE_6__["default"];
  localStorage.setItem(_state_state__WEBPACK_IMPORTED_MODULE_6__["default"].lsKeyState, JSON.stringify(game));
  if (isSavedGame()) {
    _state_state__WEBPACK_IMPORTED_MODULE_6__["default"].html.btnLoad.classList.remove('button_disabled');
    (0,_components_notice_showNotice__WEBPACK_IMPORTED_MODULE_2__.showNotice)('Игра сохранена');
  } else {
    _state_state__WEBPACK_IMPORTED_MODULE_6__["default"].html.btnLoad.classList.add('button_disabled');
    (0,_components_notice_showNotice__WEBPACK_IMPORTED_MODULE_2__.showNotice)('Игра не сохранена', true);
  }
};

const loadState = () => {
  try {
    const ls = localStorage.getItem(_state_state__WEBPACK_IMPORTED_MODULE_6__["default"].lsKeyState);
    const game = JSON.parse(ls);
    if (game) {
      _state_state__WEBPACK_IMPORTED_MODULE_6__["default"].game = game;
      (0,_components_plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_1__.updateDesk)();
      (0,_components_header_gameSelector_gameSelector__WEBPACK_IMPORTED_MODULE_0__.switchGame)(_state_state__WEBPACK_IMPORTED_MODULE_6__["default"].game.currentGame);
      (0,_components_timer_timer__WEBPACK_IMPORTED_MODULE_3__.startTimer)(true);
      const opacity = _state_state__WEBPACK_IMPORTED_MODULE_6__["default"].game.showCellsValue ? '0.4' : '0';
      _state_state__WEBPACK_IMPORTED_MODULE_6__["default"].html.root.style.setProperty('--opacity-cell-text', opacity);

      if (_state_state__WEBPACK_IMPORTED_MODULE_6__["default"].game.brush === 'fill') {
        _state_state__WEBPACK_IMPORTED_MODULE_6__["default"].html.iconBrushMode.innerHTML = _assets_icons_fill_svg__WEBPACK_IMPORTED_MODULE_5__;
      } else _state_state__WEBPACK_IMPORTED_MODULE_6__["default"].html.iconBrushMode.innerHTML = _assets_icons_cross_svg__WEBPACK_IMPORTED_MODULE_4__;
      (0,_components_notice_showNotice__WEBPACK_IMPORTED_MODULE_2__.showNotice)('Игра загружена');
    } else {
      _state_state__WEBPACK_IMPORTED_MODULE_6__["default"].html.btnLoad.classList.add('button_disabled');
      (0,_components_notice_showNotice__WEBPACK_IMPORTED_MODULE_2__.showNotice)('Нет сохранённых игр', true);
    }
  } catch (error) {
    console.error('ошибка при загрузке игры из localStorage:', error);
    return;
  }
};

const isSavedGame = () => {
  try {
    const ls = localStorage.getItem(_state_state__WEBPACK_IMPORTED_MODULE_6__["default"].lsKeyState);
    const game = JSON.parse(ls);
    if (game) return true;
  } catch (error) {
    console.error('ошибка при загрузке игры из localStorage:', error);
    return false;
  }

  return false;
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

/***/ "./src/utils/showWelcome.js":
/*!**********************************!*\
  !*** ./src/utils/showWelcome.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  console.clear();
  console.log(
    'Привет!%cДля облегчения проверки конечно же есть кое-что. Клавиша\n %c H \n%cнажатая на клавиатуре покажет / скроет подсказку',
    'background-color: transparent; padding: 8px 4px',
    'background-color: #555555; color: #ffff00; line-height: 26px; font-size: 20px',
    'background-color: transparent; padding: 8px 4px; font-size: 12px'
  );

  console.log(
    'Игровое поле:\n%c ЛКМ: %c закрасить клетку\n%c ПКМ: %c поставить крестик\nкнопка %c switch brush: %c  переключить режим ЛКМ закрасить / поставить крестик (удобно пользоваться если нет мышки)\n',
    'background-color: #555555; color: #ffffff',
    'background-color: transparent',
    'background-color: #555555; color: #ffffff',
    'background-color: transparent',
    'background-color: #555555; color: #ffffff',
    'background-color: transparent'
  );
  console.log(
    'Поле с подсказками:\n%c ЛКМ: %c заполнить крестиками всю строку / столбец\n%c ПКМ: %c убрать все крестики на строке / столбце\n',
    'background-color: #555555; color: #ffffff',
    'background-color: transparent',
    'background-color: #555555; color: #ffffff',
    'background-color: transparent'
  );
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

module.exports = __webpack_require__.p + "56bba9daeac9f91c4526.mp3";

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

/***/ "./src/assets/icons/bookmarks.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/bookmarks.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" viewBox=\"0 -960 960 960\" width=\"48\"><path d=\"M250-160q-86 0-148-62T40-370q0-78 49.5-137.5T217-579q20-97 94-158.5T482-799q113 0 189.5 81.5T748-522v24q72-2 122 46.5T920-329q0 69-50 119t-119 50H510q-24 0-42-18t-18-42v-258l-83 83-43-43 156-156 156 156-43 43-83-83v258h241q45 0 77-32t32-77q0-45-32-77t-77-32h-63v-84q0-89-60.5-153T478-739q-89 0-150 64t-61 153h-19q-62 0-105 43.5T100-371q0 62 43.929 106.5Q187.857-220 250-220h140v60H250Zm230-290Z\"/></svg>";

/***/ }),

/***/ "./src/assets/icons/brush.svg":
/*!************************************!*\
  !*** ./src/assets/icons/brush.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" viewBox=\"0 -960 960 960\" width=\"48\"><path d=\"M437-80q-24 0-42-17.625T377-140v-200H220q-24 0-42-18t-18-42v-303q0-55 39.656-96T295-840h505v440q0 24-18 42t-42 18H583v200q0 24.75-18 42.375T523-80h-86ZM220-554h520v-226h-56v171h-60v-171h-71v85h-60v-85H295q-32 0-53.5 23T220-703v149Zm0 154h520v-94H220v94Zm0 0v-94 94Z\"/></svg>";

/***/ }),

/***/ "./src/assets/icons/cross.svg":
/*!************************************!*\
  !*** ./src/assets/icons/cross.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" viewBox=\"0 -960 960 960\" width=\"48\"><path d=\"m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z\"/></svg>";

/***/ }),

/***/ "./src/assets/icons/fill.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/fill.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" viewBox=\"0 -960 960 960\" width=\"48\"><path d=\"M264-264h432v-432H264v432Zm-84 144q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z\"/></svg>";

/***/ }),

/***/ "./src/assets/icons/load.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/load.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" viewBox=\"0 -960 960 960\" width=\"48\"><path d=\"M251-160q-88 0-149.5-61.5T40-371q0-79 50.5-137.5T217-579q15-84 82-148.5T451-792q24 0 42 13.5t18 36.5v294l83-83 43 43-156 156-156-156 43-43 83 83v-289q-86 11-135 75.5T267-522h-19q-61 0-104.5 43T100-371q0 65 45 108t106 43h500q45 0 77-32t32-77q0-45-32-77t-77-32h-63v-84q0-68-33-117.5T570-718v-65q81 29 129.5 101T748-522v24q72-2 122 46t50 123q0 69-50 119t-119 50H251Zm229-347Z\"/></svg>";

/***/ }),

/***/ "./src/assets/icons/random.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/random.svg ***!
  \*************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" viewBox=\"0 -960 960 960\" width=\"48\"><path d=\"M576-160v-60h120L522-393l42-43 176 174v-121h60v223H576Zm-374 0-42-43 538-537H576v-60h224v223h-60v-120L202-160Zm193-363L160-757l43-43 235 234-43 43Z\"/></svg>";

/***/ }),

/***/ "./src/assets/icons/reset.svg":
/*!************************************!*\
  !*** ./src/assets/icons/reset.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" viewBox=\"0 -960 960 960\" width=\"48\"><path d=\"M451-122q-123-10-207-101t-84-216q0-77 35.5-145T295-695l43 43q-56 33-87 90.5T220-439q0 100 66 173t165 84v60Zm60 0v-60q100-12 165-84.5T741-439q0-109-75.5-184.5T481-699h-20l60 60-43 43-133-133 133-133 43 43-60 60h20q134 0 227 93.5T801-439q0 125-83.5 216T511-122Z\"/></svg>";

/***/ }),

/***/ "./src/assets/icons/solution.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/solution.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" viewBox=\"0 -960 960 960\" width=\"48\"><path d=\"M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-60q61.013 0 117.506-20.5Q654-181 699-220L220-699q-38 46-59 102.169T140-480q0 142.375 98.812 241.188Q337.625-140 480-140Zm259-121q37-45 59-101.493Q820-418.987 820-480q0-142.375-98.812-241.188Q622.375-820 480-820q-60.662 0-116.831 21Q307-778 261-739l478 478Z\"/></svg>";

/***/ }),

/***/ "./src/assets/icons/sound-off.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/sound-off.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" viewBox=\"0 -960 960 960\" width=\"48\"><path d=\"m611-323-43-43 114-113-114-113 43-43 113 114 113-114 43 43-114 113 114 113-43 43-113-114-113 114Zm-491-37v-240h160l200-200v640L280-360H120Zm300-288L307-540H180v120h127l113 109v-337ZM311-481Z\"/></svg>";

/***/ }),

/***/ "./src/assets/icons/sound-on.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/sound-on.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" viewBox=\"0 -960 960 960\" width=\"48\"><path d=\"M200-360v-240h160l200-200v640L360-360H200Zm420 48v-337q54 17 87 64t33 105q0 59-33 105t-87 63ZM500-648 387-540H260v120h127l113 109v-337ZM378-480Z\"/>";

/***/ }),

/***/ "./src/fields/10x10.json":
/*!*******************************!*\
  !*** ./src/fields/10x10.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"лейка","plot":[["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪"],["⚪","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫"],["⚪","⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚪","⚫"],["⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪"]]},{"name":"щит","plot":[["⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚫","⚪","⚪"],["⚪","⚫","⚪","⚫","⚫","⚫","⚫","⚪","⚫","⚪"],["⚪","⚫","⚪","⚫","⚫","⚫","⚫","⚪","⚫","⚪"],["⚪","⚫","⚪","⚫","⚪","⚪","⚫","⚪","⚫","⚪"],["⚪","⚫","⚪","⚫","⚫","⚫","⚫","⚪","⚫","⚪"],["⚪","⚫","⚪","⚫","⚫","⚫","⚫","⚪","⚫","⚪"],["⚪","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚪"],["⚪","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚪"]]},{"name":"зонт","plot":[["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪"],["⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]},{"name":"кораблик","plot":[["⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚪","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚪","⚫","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚪"],["⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]},{"name":"гриб","plot":[["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪","⚪"],["⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚫","⚪","⚪"],["⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚪"],["⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]}]');

/***/ }),

/***/ "./src/fields/15x15.json":
/*!*******************************!*\
  !*** ./src/fields/15x15.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"весы","plot":[["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚪","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚪","⚪"],["⚪","⚪","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚪","⚪"],["⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚪"],["⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚫"],["⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪"]]},{"name":"привидение","plot":[["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚪","⚫","⚪","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚫"],["⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫"],["⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚫","⚫"],["⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"]]},{"name":"сумка","plot":[["⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"]]},{"name":"троллейбус","plot":[["⚪","⚪","⚪","⚪","⚫","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪"],["⚫","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚪","⚪","⚫","⚫","⚪","⚫","⚫","⚫","⚪","⚫","⚫","⚪","⚪","⚫"],["⚫","⚪","⚫","⚫","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚫","⚫","⚪","⚫"],["⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪"],["⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]},{"name":"храм","plot":[["⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪"],["⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚫","⚪"],["⚫","⚪","⚪","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚪","⚪","⚫","⚪"],["⚪","⚪","⚪","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪"],["⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪"],["⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪"],["⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪"],["⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪"],["⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪"],["⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"]]},{"name":"микки-маус","plot":[["⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚫"],["⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚪","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚫"],["⚪","⚪","⚫","⚪","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪","⚪","⚫","⚫"],["⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚪","⚫","⚫"],["⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚫"],["⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚪","⚪","⚫","⚫"],["⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚫","⚪","⚪","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫"]]},{"name":"вишня","plot":[["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]},{"name":"catwoman","plot":[["⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪"],["⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪"],["⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚪"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚫","⚪"],["⚪","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚪"],["⚪","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚪"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪"],["⚪","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚪"],["⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪"],["⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]},{"name":"улитка","plot":[["⚫","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚫","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚫","⚫","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪"],["⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚫","⚪"],["⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚫","⚪","⚪","⚪","⚫","⚪","⚪","⚫"],["⚪","⚪","⚫","⚪","⚫","⚪","⚪","⚫","⚫","⚪","⚪","⚫","⚪","⚪","⚫"],["⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚫"],["⚪","⚪","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚪"],["⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚫"],["⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚫"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]},{"name":"кот или кошка","plot":[["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪"],["⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪"],["⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫"],["⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]}]');

/***/ }),

/***/ "./src/fields/5x5.json":
/*!*****************************!*\
  !*** ./src/fields/5x5.json ***!
  \*****************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"коктейль с соломинкой","plot":[["⚪","⚫","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚫"],["⚪","⚫","⚪","⚫","⚪"],["⚪","⚪","⚫","⚪","⚪"],["⚫","⚫","⚫","⚫","⚫"]]},{"name":"ёлочка","plot":[["⚪","⚪","⚫","⚪","⚪"],["⚪","⚫","⚫","⚫","⚪"],["⚪","⚪","⚫","⚪","⚪"],["⚫","⚫","⚫","⚫","⚫"],["⚪","⚪","⚫","⚪","⚪"]]},{"name":"метла","plot":[["⚪","⚪","⚫","⚪","⚪"],["⚪","⚪","⚫","⚪","⚪"],["⚪","⚫","⚫","⚫","⚪"],["⚫","⚪","⚫","⚪","⚫"],["⚫","⚪","⚫","⚪","⚫"]]},{"name":"чаша","plot":[["⚫","⚫","⚫","⚫","⚫"],["⚫","⚪","⚪","⚪","⚫"],["⚪","⚫","⚫","⚫","⚪"],["⚪","⚪","⚫","⚪","⚪"],["⚪","⚫","⚫","⚫","⚪"]]},{"name":"буквы","plot":[["⚪","⚫","⚪","⚫","⚫"],["⚪","⚫","⚪","⚫","⚪"],["⚪","⚫","⚪","⚫","⚫"],["⚪","⚫","⚪","⚪","⚫"],["⚫","⚫","⚪","⚫","⚫"]]},{"name":"смайлик","plot":[["⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚪","⚫","⚫"],["⚪","⚪","⚫","⚪","⚪"],["⚫","⚪","⚪","⚪","⚫"],["⚫","⚫","⚫","⚫","⚫"]]},{"name":"помидорка","plot":[["⚪","⚪","⚪","⚪","⚫"],["⚪","⚫","⚫","⚫","⚪"],["⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫"],["⚪","⚫","⚫","⚫","⚪"]]},{"name":"алтарь","plot":[["⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚫"],["⚪","⚫","⚪","⚫","⚪"],["⚫","⚪","⚪","⚪","⚫"],["⚪","⚪","⚪","⚪","⚪"]]},{"name":"магический меч","plot":[["⚪","⚪","⚪","⚪","⚫"],["⚪","⚪","⚪","⚫","⚪"],["⚫","⚪","⚫","⚪","⚪"],["⚪","⚫","⚪","⚪","⚪"],["⚫","⚪","⚫","⚪","⚪"]]}]');

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
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/createNode */ "./src/utils/createNode.js");
/* harmony import */ var _utils_createOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/createOptions */ "./src/utils/createOptions.js");
/* harmony import */ var _components_score_score__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/score/score */ "./src/components/score/score.js");
/* harmony import */ var _components_buttons_mode_btnSwitchMode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/buttons/mode/btnSwitchMode */ "./src/components/buttons/mode/btnSwitchMode.js");
/* harmony import */ var _utils_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/animation */ "./src/utils/animation.js");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/header */ "./src/components/header/header.js");
/* harmony import */ var _utils_showWelcome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/showWelcome */ "./src/utils/showWelcome.js");
/* harmony import */ var _components_notice_showNotice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/notice/showNotice */ "./src/components/notice/showNotice.js");

















function game() {
  (0,_state_initState__WEBPACK_IMPORTED_MODULE_4__["default"])();
  _state_state__WEBPACK_IMPORTED_MODULE_2__["default"].html.main = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_8__.createElement)({ tag: 'main', cls: 'main' });
  _state_state__WEBPACK_IMPORTED_MODULE_2__["default"].html.main.append((0,_components_plotContainer_plotContainer__WEBPACK_IMPORTED_MODULE_7__["default"])());
  _state_state__WEBPACK_IMPORTED_MODULE_2__["default"].html.main.append((0,_components_buttons_mode_btnSwitchMode__WEBPACK_IMPORTED_MODULE_11__["default"])());
  _state_state__WEBPACK_IMPORTED_MODULE_2__["default"].html.root = document.querySelector(':root');
  return _state_state__WEBPACK_IMPORTED_MODULE_2__["default"].html.main;
}

document.body.classList.add('body');
document.body.append((0,_components_header_header__WEBPACK_IMPORTED_MODULE_13__["default"])(), (0,_components_timer_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(), game(), (0,_components_footer_footer__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_components_score_score__WEBPACK_IMPORTED_MODULE_10__.score)());
(0,_components_plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_5__["default"])(0);
(0,_utils_createOptions__WEBPACK_IMPORTED_MODULE_9__["default"])(_state_state__WEBPACK_IMPORTED_MODULE_2__["default"].html.gameSelect, _state_state__WEBPACK_IMPORTED_MODULE_2__["default"].fields['5x5']);
(0,_utils_animation__WEBPACK_IMPORTED_MODULE_12__.startRandomSVGanimation)();
window.addEventListener('keypress', _utils_windowHandle__WEBPACK_IMPORTED_MODULE_6__["default"]);
(0,_utils_showWelcome__WEBPACK_IMPORTED_MODULE_14__["default"])();
(0,_components_notice_showNotice__WEBPACK_IMPORTED_MODULE_15__.initNotice)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ21IO0FBQ2pCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsa0VBQWtFO0FBQ25IO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDbUg7QUFDakI7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGlEQUFpRCxrRUFBa0U7QUFDbkg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUNtSDtBQUNqQjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdIQUFnSCxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsWUFBWSxVQUFVLFVBQVUsYUFBYSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssZ0RBQWdELGlDQUFpQyxrQ0FBa0Msd0JBQXdCLHFDQUFxQywwQkFBMEIsa0JBQWtCLHNCQUFzQixtQkFBbUIseUJBQXlCLG9CQUFvQix3QkFBd0Isd0JBQXdCLE9BQU8saUJBQWlCLHNCQUFzQixPQUFPLEtBQUssa0RBQWtELDZCQUE2QixnQkFBZ0IsMEJBQTBCLFNBQVMsT0FBTyxLQUFLLG1CQUFtQjtBQUMvM0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDdkM7QUFDbUg7QUFDakI7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGlEQUFpRCxrRUFBa0U7QUFDbkg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUNtSDtBQUNqQjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELGtFQUFrRTtBQUNuSDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ21IO0FBQ2pCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsa0VBQWtFO0FBQ25IO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1HQUFtRyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxtQ0FBbUMsb0JBQW9CLHdDQUF3QyxxQkFBcUIsOEJBQThCLDBCQUEwQixnQ0FBZ0MsS0FBSyxtQkFBbUI7QUFDdFo7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2R2QztBQUNtSDtBQUNqQjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxzSEFBc0gsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssTUFBTSxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxpREFBaUQscUJBQXFCLG9DQUFvQyxLQUFLLGVBQWUsb0JBQW9CLDZCQUE2QiwwQkFBMEIsa0JBQWtCLEtBQUssc0JBQXNCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGdCQUFnQixLQUFLLCtCQUErQixvQkFBb0IsOEJBQThCLDBCQUEwQixrQkFBa0IsbUJBQW1CLDJCQUEyQiw0Q0FBNEMsMENBQTBDLDZCQUE2QiwwQkFBMEIsT0FBTyw4QkFBOEIsdUJBQXVCLHdCQUF3QixPQUFPLG1CQUFtQiw0Q0FBNEMsT0FBTyxLQUFLLCtCQUErQixzQkFBc0Isc0NBQXNDLGlEQUFpRCxLQUFLLCtCQUErQiw2QkFBNkIsK0NBQStDLDBCQUEwQixTQUFTLE9BQU8sbUNBQW1DLHdCQUF3QixPQUFPLEtBQUssbUJBQW1CO0FBQ3J1RDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEV2QztBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxtR0FBbUcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksY0FBYyxhQUFhLGFBQWEsbUNBQW1DLG9CQUFvQiw2QkFBNkIsa0NBQWtDLDBCQUEwQixxQkFBcUIsa0JBQWtCLDZCQUE2Qix1REFBdUQsS0FBSyxpQ0FBaUMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsa0JBQWtCLHdDQUF3Qyw2QkFBNkIsOENBQThDLDRDQUE0QyxLQUFLLHVCQUF1QjtBQUNsNEI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CdkM7QUFDbUg7QUFDakI7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdIQUFnSCxVQUFVLFVBQVUsYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLDBDQUEwQyxrQkFBa0IsbUJBQW1CLGlDQUFpQyxpQkFBaUIsb0JBQW9CLHFCQUFxQixrQ0FBa0MsT0FBTyxLQUFLLCtCQUErQiw2QkFBNkIsZUFBZSwwQkFBMEIsc0NBQXNDLFNBQVMsT0FBTyxLQUFLLG1CQUFtQjtBQUN0b0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCdkM7QUFDbUg7QUFDakI7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMEhBQTBILFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLHlDQUF5QyxzQkFBc0IsMEJBQTBCLHNDQUFzQyxpREFBaUQsS0FBSywrQkFBK0IsNEJBQTRCLHdCQUF3QixPQUFPLEtBQUssbUJBQW1CO0FBQzFmO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnZDO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUdBQXVHLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSw2Q0FBNkMsc0JBQXNCLGFBQWEsbUNBQW1DLDJDQUEyQyx1QkFBdUIseUJBQXlCLDRCQUE0Qix5QkFBeUIsc0NBQXNDLGlEQUFpRCxnREFBZ0Qsd0NBQXdDLHlDQUF5Qyx5Q0FBeUMsaUNBQWlDLDJDQUEyQyxLQUFLLG1DQUFtQyxnQ0FBZ0MsS0FBSyx1QkFBdUIsNENBQTRDLHVEQUF1RCxLQUFLLG1CQUFtQjtBQUN4cUM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDdkM7QUFDbUg7QUFDakI7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw2R0FBNkcsVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sZ0NBQWdDLG9CQUFvQiw4QkFBOEIsMEJBQTBCLDRCQUE0QixpREFBaUQsS0FBSyw4QkFBOEIsK0NBQStDLHFEQUFxRCxrREFBa0QsS0FBSyxtQ0FBbUMsb0RBQW9ELG9EQUFvRCxLQUFLLCtCQUErQixpREFBaUQsMENBQTBDLGdEQUFnRCxLQUFLLG9CQUFvQixtREFBbUQsS0FBSywwQkFBMEIsZ0RBQWdELEtBQUssb0JBQW9CLGtEQUFrRCxLQUFLLDBCQUEwQixpREFBaUQsS0FBSyxzQ0FBc0MseUJBQXlCLEtBQUssc0ZBQXNGLGtCQUFrQix5QkFBeUIscUJBQXFCLGtCQUFrQixrQkFBa0IsZUFBZSxlQUFlLGlCQUFpQixnQ0FBZ0MsOEJBQThCLEtBQUssOENBQThDLGlDQUFpQyxLQUFLLGdDQUFnQywrREFBK0Qsd0JBQXdCLE9BQU8sZ0NBQWdDLDRDQUE0QyxPQUFPLEtBQUssdUJBQXVCO0FBQzF4RTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZ2QztBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlIQUFpSCxhQUFhLFdBQVcsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsNkNBQTZDLDRCQUE0QiwwQkFBMEIsaUVBQWlFLHVFQUF1RSxrREFBa0QsNEJBQTRCLDJCQUEyQiw2Q0FBNkMsT0FBTyx1QkFBdUI7QUFDOW5CO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQnZDO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUdBQWlHLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxXQUFXLGFBQWEsYUFBYSxjQUFjLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLG1DQUFtQyxtQkFBbUIsbUJBQW1CLEtBQUsscUNBQXFDLHNCQUFzQixrQkFBa0Isa0JBQWtCLHFCQUFxQixlQUFlLCtDQUErQyxLQUFLLG9CQUFvQixxQ0FBcUMsc0JBQXNCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLHNCQUFzQix3QkFBd0IsMENBQTBDLDRCQUE0QixpREFBaUQsNENBQTRDLG9FQUFvRSw4QkFBOEIsaUNBQWlDLEtBQUssNEJBQTRCLG1CQUFtQix5QkFBeUIsaUJBQWlCLGdCQUFnQixvQkFBb0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsOEJBQThCLGtCQUFrQixtQkFBbUIsNEJBQTRCLDRCQUE0QixpREFBaUQsNENBQTRDLHlCQUF5QixpQ0FBaUMsb0NBQW9DLEtBQUssd0JBQXdCLHdCQUF3Qix3QkFBd0IsT0FBTyxLQUFLLG1CQUFtQiwyQkFBMkIsd0JBQXdCLHlCQUF5QixLQUFLLHFCQUFxQixtQ0FBbUMsMEJBQTBCLEtBQUssNkJBQTZCLG9CQUFvQix5Q0FBeUMsbUJBQW1CLGtCQUFrQiwyQkFBMkIsZ0RBQWdELDRCQUE0QixpQ0FBaUMscURBQXFELE9BQU8saUNBQWlDLDZCQUE2QixPQUFPLCtCQUErQiwwQkFBMEIsT0FBTyxLQUFLLDJCQUEyQiw4Q0FBOEMsS0FBSyxtQkFBbUI7QUFDbDdGO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxR3ZDO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlHQUFpRyxVQUFVLGlDQUFpQyxrQkFBa0IsS0FBSyxtQkFBbUI7QUFDOUw7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxXQUFXLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFVBQVUsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLFVBQVUsVUFBVSxLQUFLLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGNBQWMsTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxhQUFhLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sZ0NBQWdDLDZCQUE2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Q0E7QUFDQSxFQUFFLDREQUFTO0FBQ1gsRUFBRSxvREFBSyxhQUFhLGdFQUFhLEdBQUcsMEJBQTBCO0FBQzlELEVBQUUsb0RBQUssa0JBQWtCLG1GQUFhO0FBQ3RDLEVBQUUsb0RBQUssa0JBQWtCLG1GQUFhO0FBQ3RDLEVBQUUsb0RBQUs7QUFDUCxTQUFTLG9EQUFLO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNFQUFNLElBQUksOERBQUssWUFBWSxxRUFBTSxJQUFJLCtEQUFLO0FBQy9ELGdGQUFVO0FBQ1YsZ0VBQWEsQ0FBQyxvREFBSyxrQkFBa0Isb0RBQUs7QUFDMUMsMEVBQXVCO0FBQ3ZCLG9DQUFvQywyREFBWTtBQUNoRCwrREFBVztBQUNYLDBFQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9jYXZlaW4vYnRuQ2F2ZWluLmNzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2xvYWQvYnRuTG9hZC5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9tb2RlL2J0blN3aXRjaE1vZGUuY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvcmFuZG9tL2J0blJhbmRvbS5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9yZXNldC9idG5SZXNldC5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9zYXZlL2J0blNhdmUuY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9nYW1lU2VsZWN0b3IvZ2FtZVNlbGVjdG9yLmNzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvbXV0ZVNvdW5kL211dGVTb3VuZC5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3NjaGVtZVNlbGVjdG9yL3NjaGVtZVNlbGVjdG9yLmNzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9ub3RpY2Uvc2hvd05vdGljZS5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvcGxvdENvbnRhaW5lci9jZWxsL2NlbGwuY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvcGxvdENvbnRhaW5lci5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvc2NvcmUvc2NvcmUuY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3RpbWVyL3RpbWVyLmNzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvY2F2ZWluL2J0bkNhdmVpbi5jc3M/NWNkOSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2xvYWQvYnRuTG9hZC5jc3M/MTVhMyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL21vZGUvYnRuU3dpdGNoTW9kZS5jc3M/ODE5OSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL3JhbmRvbS9idG5SYW5kb20uY3NzPzQxYWEiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9yZXNldC9idG5SZXNldC5jc3M/Njc0MCIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL3NhdmUvYnRuU2F2ZS5jc3M/MDNmOSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNzcz9iNzg5Iiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9nYW1lU2VsZWN0b3IvZ2FtZVNlbGVjdG9yLmNzcz9jMzMzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY3NzP2Y3ZmEiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL211dGVTb3VuZC9tdXRlU291bmQuY3NzP2RkYjgiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3NjaGVtZVNlbGVjdG9yL3NjaGVtZVNlbGVjdG9yLmNzcz82N2ZlIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL25vdGljZS9zaG93Tm90aWNlLmNzcz84MGIyIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvY2VsbC9jZWxsLmNzcz8yZDg3Iiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvcGxvdENvbnRhaW5lci5jc3M/NWM5ZCIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9zY29yZS9zY29yZS5jc3M/ZmVhZSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy90aW1lci90aW1lci5jc3M/YThlOSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL25vbm9ncmFtcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zY2hlbWVzL2NvbG9yU2NoZW1lcy5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2NhdmVpbi9idG5DYXZlaW4uanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9sb2FkL2J0bkxvYWQuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9tb2RlL2J0blN3aXRjaE1vZGUuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9yYW5kb20vYnRuUmFuZG9tLi5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL3Jlc2V0L2J0blJlc2V0LmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvc2F2ZS9idG5TYXZlLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2dhbWVTZWxlY3Rvci9nYW1lU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvbXV0ZVNvdW5kL211dGVTb3VuZC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvc2NoZW1lU2VsZWN0b3Ivc2NoZW1lU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvbm90aWNlL3Nob3dOb3RpY2UuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvcGxvdENvbnRhaW5lci9jZWxsL25ld0NlbGwuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvcGxvdENvbnRhaW5lci9wbG90Q29udGFpbmVyLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvcmVuZGVyRGVzay5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9zY29yZS9zY29yZS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy90aW1lci90aW1lci5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvc3RhdGUvaW5pdFN0YXRlLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvdXRpbHMvYW5pbWF0aW9uLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9jcmVhdGVOb2RlLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9jcmVhdGVPcHRpb25zLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9nYW1lUmVjb3JkLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9nZXRQbG90LmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL3V0aWxzL3JvdGF0ZU1hdHJpeC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvdXRpbHMvc2hvd1dlbGNvbWUuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL3V0aWxzL3dpbmRvd0hhbmRsZS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25vbm9ncmFtcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL25vbm9ncmFtcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5idG4tc3dpdGNoLWNvbnRhaW5lciB7XHJcbiAgY29udGFpbmVyLW5hbWU6IGJ0bi1zd2l0Y2g7XHJcbiAgY29udGFpbmVyLXR5cGU6IGlubGluZS1zaXplO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgLyogbWFyZ2luOiAwIGF1dG87ICovXHJcblxyXG4gICYgc3BhbiB7XHJcbiAgICAgIGZsZXg6IDEgMSA2MCU7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmIHN2ZyB7XHJcbiAgICBmbGV4OiAxIDEgMjAlO1xyXG4gIH1cclxufVxyXG5cclxuQGNvbnRhaW5lciBidG4tc3dpdGNoIChtaW4td2lkdGg6IDEwcmVtKSB7XHJcbiAgLmJ0bi1zd2l0Y2gtY29udGFpbmVyIHtcclxuICAgICYgc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxuICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvbW9kZS9idG5Td2l0Y2hNb2RlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQiwyQkFBMkI7O0VBRTNCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7O0VBRVgsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7O0VBRXBCO01BQ0ksYUFBYTtNQUNiLGFBQWE7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYnRuLXN3aXRjaC1jb250YWluZXIge1xcclxcbiAgY29udGFpbmVyLW5hbWU6IGJ0bi1zd2l0Y2g7XFxyXFxuICBjb250YWluZXItdHlwZTogaW5saW5lLXNpemU7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcblxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cXHJcXG5cXHJcXG4gICYgc3BhbiB7XFxyXFxuICAgICAgZmxleDogMSAxIDYwJTtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiBzdmcge1xcclxcbiAgICBmbGV4OiAxIDEgMjAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AY29udGFpbmVyIGJ0bi1zd2l0Y2ggKG1pbi13aWR0aDogMTByZW0pIHtcXHJcXG4gIC5idG4tc3dpdGNoLWNvbnRhaW5lciB7XFxyXFxuICAgICYgc3BhbiB7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogY2xhbXAoMzIwcHgsIDEwMCUsIDEwMjRweCk7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IGNsYW1wKDVweCwgMiUsIDIwcHgpO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzMjBweCwgMTAwJSwgMTAyNHB4KTtcXHJcXG4gIGZsZXg6IDAgMCBhdXRvO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiBjbGFtcCg1cHgsIDIlLCAyMHB4KTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29udGFpbmVyLWdhbWUtc2VsZWN0IHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICB3aWR0aDogdmFyKC0tY29udGFpbmVyLXdpZHRoKTtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uZ2FtZS1zZWxlY3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5nYW1lLXNlbGVjdF9maWVsZHNldCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGdhcDogMC4yNXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG5cclxuICAmIC5maWVsZHNldF9sYWJlbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MXJlbTtcclxuICB9XHJcblxyXG4gICYgLmZpZWxkc2V0X2xlZ2VuZCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICB9XHJcblxyXG4gICYgaW5wdXQge1xyXG4gICAgYWNjZW50LWNvbG9yOiB2YXIoLS1idG4taWNvbi1ob3Zlcik7XHJcbiAgfVxyXG59XHJcblxyXG4uZ2FtZS1zZWxlY3Rfc2VsZWN0b3Ige1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogdmFyKC0tY29tbW9uLXRleHQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcclxuICAuZ2FtZS1zZWxlY3RfZmllbGRzZXQge1xyXG4gICAgJj4gaW5wdXQ6aG92ZXIsXHJcbiAgICAmPiBsYWJlbDpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgLmdhbWUtc2VsZWN0X3NlbGVjdG9yOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9nYW1lU2VsZWN0b3IvZ2FtZVNlbGVjdG9yLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixxQ0FBcUM7RUFDckMsbUNBQW1DOztFQUVuQztJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUNBQW1DO0VBQ3JDO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFO0lBQ0U7O01BRUUsZUFBZTtJQUNqQjtFQUNGO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lci1nYW1lLXNlbGVjdCB7XFxyXFxuICBmbGV4OiAwIDAgYXV0bztcXHJcXG4gIHdpZHRoOiB2YXIoLS1jb250YWluZXItd2lkdGgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtc2VsZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5nYW1lLXNlbGVjdF9maWVsZHNldCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBnYXA6IDAuMjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG5cXHJcXG4gICYgLmZpZWxkc2V0X2xhYmVsIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIC5maWVsZHNldF9sZWdlbmQge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiBpbnB1dCB7XFxyXFxuICAgIGFjY2VudC1jb2xvcjogdmFyKC0tYnRuLWljb24taG92ZXIpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1zZWxlY3Rfc2VsZWN0b3Ige1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbW1vbi10ZXh0LWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXHJcXG4gIC5nYW1lLXNlbGVjdF9maWVsZHNldCB7XFxyXFxuICAgICY+IGlucHV0OmhvdmVyLFxcclxcbiAgICAmPiBsYWJlbDpob3ZlciB7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuZ2FtZS1zZWxlY3Rfc2VsZWN0b3I6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcblxyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWdhbWUtb3B0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMS41cmVtO1xyXG5cclxuICB3aWR0aDogdmFyKC0tY29udGFpbmVyLXdpZHRoKTtcclxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFdBQVc7RUFDWCxzQkFBc0I7O0VBRXRCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7O0VBRVgsNkJBQTZCO0VBQzdCLHNCQUFzQjs7RUFFdEIsbUNBQW1DO0VBQ25DLHFDQUFxQztBQUN2Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXg6IDAgMCBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcclxcblxcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZ2FtZS1vcHRpb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG5cXHJcXG4gIHdpZHRoOiB2YXIoLS1jb250YWluZXItd2lkdGgpO1xcclxcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXHJcXG5cXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29udGFpbmVyLW11dGUge1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcclxuXHJcbiAgJiBzdmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmaWxsOiB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcclxuICAuY29udGFpbmVyLW11dGU6aG92ZXIge1xyXG4gICAgJiBzdmcge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZpbGw6IHZhcigtLWJ0bi1pY29uLWhvdmVyKTtcclxuICAgIH1cclxuICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tdXRlU291bmQvbXV0ZVNvdW5kLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQTBCOztFQUUxQjtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFO01BQ0UsZUFBZTtNQUNmLDJCQUEyQjtJQUM3QjtFQUNGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lci1tdXRlIHtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxyXFxuXFxyXFxuICAmIHN2ZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZpbGw6IHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxyXFxuICAuY29udGFpbmVyLW11dGU6aG92ZXIge1xcclxcbiAgICAmIHN2ZyB7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIGZpbGw6IHZhcigtLWJ0bi1pY29uLWhvdmVyKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zY2hlbWUtc2VsZWN0IHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICBjb2xvcjogdmFyKC0tY29tbW9uLXRleHQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcclxuICAuc2NoZW1lLXNlbGVjdDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvc2NoZW1lU2VsZWN0b3Ivc2NoZW1lU2VsZWN0b3IuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNjaGVtZS1zZWxlY3Qge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb21tb24tdGV4dC1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibG9ja3MtYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxyXFxuICAuc2NoZW1lLXNlbGVjdDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubm90aWNlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG5cclxuICB3aWR0aDogY2xhbXAoNXJlbSwgMTAwdncsIDYwcmVtKTtcclxuICBtaW4taGVpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuXHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1ub3RpY2UtdGV4dC1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90aWNlLWJhY2tncm91bmQpO1xyXG5cclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuM3JlbTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xyXG5cclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG59XHJcblxyXG4ubm90aWNlLWNvbnRhaW5lcl92aXNhYmxlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG59XHJcblxyXG4ubm90aWNlX2Vycm9yIHtcclxuICBjb2xvcjogdmFyKC0tbm90aWNlLXRleHQtY29sb3ItZXJyb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGljZS1iYWNrZ3JvdW5kLWVycm9yKTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvbm90aWNlL3Nob3dOb3RpY2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTiw0QkFBNEI7O0VBRTVCLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsa0JBQWtCOztFQUVsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQiwwQ0FBMEM7O0VBRTFDLHFDQUFxQztFQUNyQyxpQ0FBaUM7RUFDakMsa0NBQWtDOztFQUVsQyw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxnREFBZ0Q7QUFDbERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5vdGljZS1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXHJcXG5cXHJcXG4gIHdpZHRoOiBjbGFtcCg1cmVtLCAxMDB2dywgNjByZW0pO1xcclxcbiAgbWluLWhlaWdodDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHZhcigtLW5vdGljZS10ZXh0LWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGljZS1iYWNrZ3JvdW5kKTtcXHJcXG5cXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjNyZW07XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5ub3RpY2UtY29udGFpbmVyX3Zpc2FibGUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGljZV9lcnJvciB7XFxyXFxuICBjb2xvcjogdmFyKC0tbm90aWNlLXRleHQtY29sb3ItZXJyb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90aWNlLWJhY2tncm91bmQtZXJyb3IpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jZWxsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLmNlbGxbcm9sZT1cImdhbWVcIl0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtYmFja2dyb3VuZCk7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tb3BhY2l0eS1jZWxsLXRleHQpKTtcclxuICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tY2VsbC1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4uY2VsbF9maWxsW3JvbGU9XCJnYW1lXCJdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWJhY2tncm91bmQtZmlsbCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2VsbC1iYWNrZ3JvdW5kLWZpbGwpO1xyXG59XHJcblxyXG4uY2VsbFtyb2xlPVwiZW1wdHlcIl0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcclxuICBncmlkLXJvdzogMSAvIHNwYW4gdmFyKC0tcm93LWNvdW50KTtcclxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gdmFyKC0tY29sdW1uLWNvdW50KTtcclxufVxyXG5cclxuLmNlbGxbcm93XSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5jZWxsW2ZpcnN0LXJvd10ge1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4uY2VsbFtjb2xdIHtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4uY2VsbFtmaXJzdC1jb2xdIHtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5jZWxsX2NoZWNrZWRbcm9sZT1cImdhbWVcIl0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNlbGxfY2hlY2tlZFtyb2xlPVwiZ2FtZVwiXTo6YWZ0ZXIsXHJcbi5jZWxsX2NoZWNrZWRbcm9sZT1cImdhbWVcIl06OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMjAlO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGluc2V0OiAwO1xyXG4gIHRvcDogNDUlO1xyXG4gIGxlZnQ6IC0xMCU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNlbGxfY2hlY2tlZFtyb2xlPVwiZ2FtZVwiXTo6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVooLTQ1ZGVnKTtcclxufVxyXG5cclxuQG1lZGlhIChob3ZlcjogaG92ZXIpICB7XHJcbi5jZWxsW3JvbGU9XCJnYW1lXCJdOmhvdmVyLFxyXG4uY2VsbFtyb2xlPVwiY2x1ZVwiXTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4uY2VsbFtyb2xlPVwiZ2FtZVwiXTpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGludmVydCh2YXIoLS1ob3Zlci1pbnZlcnQpKTtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9wbG90Q29udGFpbmVyL2NlbGwvY2VsbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsaUJBQWlCO0VBQ2pCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHdDQUF3QztFQUN4Qyw4Q0FBOEM7RUFDOUMsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxtQ0FBbUM7RUFDbkMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gsUUFBUTtFQUNSLFFBQVE7RUFDUixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtBQUNBOztJQUVJLGVBQWU7RUFDakI7QUFDRjtJQUNJLG1DQUFtQztFQUNyQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jZWxsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxbcm9sZT1cXFwiZ2FtZVxcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtYmFja2dyb3VuZCk7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS1vcGFjaXR5LWNlbGwtdGV4dCkpO1xcclxcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWNlbGwtYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfZmlsbFtyb2xlPVxcXCJnYW1lXFxcIl0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1iYWNrZ3JvdW5kLWZpbGwpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2VsbC1iYWNrZ3JvdW5kLWZpbGwpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbFtyb2xlPVxcXCJlbXB0eVxcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcXHJcXG4gIGdyaWQtcm93OiAxIC8gc3BhbiB2YXIoLS1yb3ctY291bnQpO1xcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIHZhcigtLWNvbHVtbi1jb3VudCk7XFxyXFxufVxcclxcblxcclxcbi5jZWxsW3Jvd10ge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsW2ZpcnN0LXJvd10ge1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsW2NvbF0ge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxbZmlyc3QtY29sXSB7XFxyXFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsX2NoZWNrZWRbcm9sZT1cXFwiZ2FtZVxcXCJdIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfY2hlY2tlZFtyb2xlPVxcXCJnYW1lXFxcIl06OmFmdGVyLFxcclxcbi5jZWxsX2NoZWNrZWRbcm9sZT1cXFwiZ2FtZVxcXCJdOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMjAlO1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxuICBpbnNldDogMDtcXHJcXG4gIHRvcDogNDUlO1xcclxcbiAgbGVmdDogLTEwJTtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfY2hlY2tlZFtyb2xlPVxcXCJnYW1lXFxcIl06OmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZVooLTQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpICB7XFxyXFxuLmNlbGxbcm9sZT1cXFwiZ2FtZVxcXCJdOmhvdmVyLFxcclxcbi5jZWxsW3JvbGU9XFxcImNsdWVcXFwiXTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4uY2VsbFtyb2xlPVxcXCJnYW1lXFxcIl06aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGludmVydCh2YXIoLS1ob3Zlci1pbnZlcnQpKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAgIC5nYW1lLWNvbnRhaW5lciB7XHJcbiAgICAtLWNvbHVtbnMtY291bnQ6IDIwO1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1jb2x1bW5zLWNvdW50KSwgMWZyKTtcclxuXHJcbiAgICBmb250LXNpemU6IGNsYW1wKDE0cHgsIDMwMHB4IC8gdmFyKC0tY29sdW1ucy1jb3VudCksIDIwcHgpO1xyXG5cclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xyXG4gIH1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9wbG90Q29udGFpbmVyL3Bsb3RDb250YWluZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJFQUFFO0lBQ0UsbUJBQW1COztJQUVuQixhQUFhO0lBQ2Isd0RBQXdEOztJQUV4RCwwREFBMEQ7O0lBRTFELHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9DQUFvQztFQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIgIC5nYW1lLWNvbnRhaW5lciB7XFxyXFxuICAgIC0tY29sdW1ucy1jb3VudDogMjA7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWNvbHVtbnMtY291bnQpLCAxZnIpO1xcclxcblxcclxcbiAgICBmb250LXNpemU6IGNsYW1wKDE0cHgsIDMwMHB4IC8gdmFyKC0tY29sdW1ucy1jb3VudCksIDIwcHgpO1xcclxcblxcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcXHJcXG4gIH1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5kaWFsb2cge1xyXG4gIGxlZnQ6IC0xMHJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5kaWFsb2c6aGFzKGRpdi5zY29yZV9zaG93KSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwZHZoO1xyXG4gIGluc2V0OiAwO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIC0tdyA6IGNsYW1wKDEwcmVtLCA5MCUsIDI1cmVtKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMjtcclxuICB0b3A6IDJyZW07XHJcbiAgbGVmdDogMTAwJTtcclxuICB3aWR0aDogdmFyKC0tdyk7XHJcbiAgbWluLWhlaWdodDogMTByZW07XHJcblxyXG4gIGNvbG9yOiB2YXIoLS1jb21tb24tdGV4dC1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMC41cmVtIDAuNXJlbSAwLjVyZW0gdmFyKC0tc2NvcmUtc2hhZG93KSk7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMTAwbXM7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XHJcbn1cclxuXHJcbi5jb250YWluZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ+KsjCc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAxcmVtO1xyXG4gIGxlZnQ6IC0yLjFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogM3JlbTtcclxuXHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG5cclxuQG1lZGlhIChob3Zlcikge1xyXG4gIC5jb250YWluZXI6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLnNjb3JlX2gxIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zY29yZV9zaG93IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbn1cclxuXHJcbi5jb250YWluZXJfX3JlY29yZHMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyIDJmcjtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgZ2FwOiAwLjJyZW07XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDFyZW07XHJcblxyXG4gIGJvcmRlcjogMXBzIHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG5cclxuICAmIGRpdjpudGgtY2hpbGQoLW4rMykge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAmIGRpdjpudGgtY2hpbGQoM24tMSkge1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmIGRpdjpudGgtY2hpbGQoM24pIHtcclxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIH1cclxufVxyXG5cclxuLnJlY29yZF9sYXN0LWdhbWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjb3JlLWxhc3RnYW1lKTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvc2NvcmUvc2NvcmUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxRQUFROztFQUVSLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjs7RUFFakIsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQiwwQ0FBMEM7RUFDMUMscUNBQXFDO0VBQ3JDLDZEQUE2RDtFQUM3RCx1QkFBdUI7RUFDdkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZOztFQUVaLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsMENBQTBDO0VBQzFDLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osV0FBVzs7RUFFWCxnQkFBZ0I7O0VBRWhCLHFDQUFxQztFQUNyQyxxQkFBcUI7O0VBRXJCO0lBQ0UsNENBQTRDO0VBQzlDOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmRpYWxvZyB7XFxyXFxuICBsZWZ0OiAtMTByZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2c6aGFzKGRpdi5zY29yZV9zaG93KSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDBkdmg7XFxyXFxuICBpbnNldDogMDtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAtLXcgOiBjbGFtcCgxMHJlbSwgOTAlLCAyNXJlbSk7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgdG9wOiAycmVtO1xcclxcbiAgbGVmdDogMTAwJTtcXHJcXG4gIHdpZHRoOiB2YXIoLS13KTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xcclxcblxcclxcbiAgY29sb3I6IHZhcigtLWNvbW1vbi10ZXh0LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuNXJlbSAwLjVyZW0gMC41cmVtIHZhcigtLXNjb3JlLXNoYWRvdykpO1xcclxcbiAgdHJhbnNpdGlvbi1kZWxheTogMTAwbXM7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lcjo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICfirIwnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHRvcDogMXJlbTtcXHJcXG4gIGxlZnQ6IC0yLjFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibG9ja3MtYmFja2dyb3VuZCk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChob3Zlcikge1xcclxcbiAgLmNvbnRhaW5lcjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlX2gxIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zY29yZV9zaG93IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyX19yZWNvcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgMmZyO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbiAgZ2FwOiAwLjJyZW07XFxyXFxuXFxyXFxuICBtaW4taGVpZ2h0OiAxcmVtO1xcclxcblxcclxcbiAgYm9yZGVyOiAxcHMgc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG5cXHJcXG4gICYgZGl2Om50aC1jaGlsZCgtbiszKSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiBkaXY6bnRoLWNoaWxkKDNuLTEpIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIGRpdjpudGgtY2hpbGQoM24pIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5yZWNvcmRfbGFzdC1nYW1lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjb3JlLWxhc3RnYW1lKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudGltZXIge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy90aW1lci90aW1lci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRpbWVyIHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAtLW9wYWNpdHktY2VsbC10ZXh0OiAwO1xyXG4gIC0taG92ZXItaW52ZXJ0OiAwLjI7XHJcbiAgLS1ib2R5LWJhY2dyb3VuZDogcmdiKDIzMCwgMjU1LCAyMzApO1xyXG4gIC0tYmxvY2tzLWJhY2tncm91bmQ6IHJnYigyMzEsIDI1NSwgMjU1KTtcclxuICAtLWNlbGwtYmFja2dyb3VuZDogcmdiKDI0MCwgMjQwLCAyNDApO1xyXG4gIC0tY2VsbC1iYWNrZ3JvdW5kLWZpbGw6IHJnYig5MCwgMCwgMjU1KTtcclxuICAtLWNlbGwtYm9yZGVyLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XHJcbiAgLS1ib3JkZXItY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAtLXNjb3JlLWxhc3RnYW1lOiByZ2IoMTY1LCAyNDUsIDE0MCk7XHJcbiAgLS1jb21tb24tdGV4dC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIC0tc2NvcmUtc2hhZG93OiByZ2IoMTI1LCAxMjUsIDEyNSk7XHJcbiAgLS1jb2xvci13YXJuaW5nOiAyNTUsIDgwLCA4MDtcclxuICAtLWNvbG9yLXdhcm5pbmctc2hhZG93OiAwLCAwLCAwO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIC0tYnRuLWljb24taG92ZXI6IHJnYmEoOTAsIDAsIDI1NSwgMSk7XHJcbiAgLS1jb250YWluZXItd2lkdGg6IGNsYW1wKDFyZW0sIDEwMCUsIDI1cmVtKTtcclxuICAtLWJ0bi1kaXNhYmxlZC1ib3JkZXI6IHJnYigxNzAsIDE3MCwgMTcwKTtcclxuXHJcbiAgLS1ub3RpY2UtYmFja2dyb3VuZDogcmdiYSg5MCwgMCwgMjU1KTtcclxuICAtLW5vdGljZS10ZXh0LWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgLS1ub3RpY2UtYmFja2dyb3VuZC1lcnJvcjogcmdiYSgyNTUsIDE3NCwgMCk7XHJcbiAgLS1ub3RpY2UtdGV4dC1jb2xvci1lcnJvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4qIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sIHtcclxuICBoZWlnaHQ6IDEwMGR2aDtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB2YXIoLS1jb21tb24tdGV4dC1jb2xvcik7O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFjZ3JvdW5kKTtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuNXJlbTtcclxuXHJcbiAgZmxleDogMSAwIGF1dG87XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICBjb250YWluZXItbmFtZTogYnV0dG9ucztcclxuICBjb250YWluZXItdHlwZTogaW5saW5lLXNpemU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMSAwIDJyZW07XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogY2xhbXAoNXB4LCA1JSwgMTBweCk7XHJcblxyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1jb21tb24tdGV4dC1jb2xvcik7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgcGFkZGluZzogY2xhbXAoNHB4LCAxJSwgOHB4KSBjbGFtcCg1cHgsIDElLCAxMHB4KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibG9ja3MtYmFja2dyb3VuZCk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4gICYgc3ZnIHtcclxuICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi5nYW1lb3ZlciB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgZmlsdGVyOiBibHVyKDFweCkgb3BhY2l0eSgwLjgpO1xyXG59XHJcblxyXG4uZ2FtZW92ZXJ+Zm9vdGVyIGJ1dHRvbltkYXRhLXJvbGU9XCJjYXZlaW5cIl0sXHJcbi5nYW1lb3Zlcn5mb290ZXIgYnV0dG9uW2RhdGEtcm9sZT1cInNhdmVcIl0sXHJcbi5idXR0b25fZGlzYWJsZWQgYnV0dG9uIHtcclxuICBjb2xvcjogdmFyKC0tYnRuLWRpc2FibGVkLWJvcmRlcik7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYnRuLWRpc2FibGVkLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG5cclxuICAmIHN2ZyB7XHJcbiAgICBmaWxsOiB2YXIoLS1idG4tZGlzYWJsZWQtYm9yZGVyKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XHJcbiAgLmJ1dHRvbjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuXHJcbiAgICAmIHN2ZyB7XHJcbiAgICAgIGZpbGw6IHZhcigtLWJ0bi1pY29uLWhvdmVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBjb250YWluZXIgYnV0dG9ucyAobWF4LXdpZHRoOiAxMTBweCkge1xyXG4gIC5idXR0b24ge1xyXG4gICAgJiBzcGFuIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmIHN2ZyB7XHJcbiAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFuaW1hdGlvbiB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogcm9sbDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogbm9uZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb2xsIHtcclxuICAwJSB7XHJcbiAgICBmaWxsOiB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgZmlsbDogcmdiKHZhcigtLWNvbG9yLXdhcm5pbmcpKTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xyXG4gICAgZmlsbDogcmdiKHZhcigtLWNvbG9yLXdhcm5pbmcpKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcclxuICAgIGZpbGw6IHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLHVDQUF1QztFQUN2QyxxQ0FBcUM7RUFDckMsdUNBQXVDO0VBQ3ZDLHVDQUF1QztFQUN2Qyw0QkFBNEI7RUFDNUIsb0NBQW9DO0VBQ3BDLGlDQUFpQztFQUNqQyxrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDLDJDQUEyQztFQUMzQyx5Q0FBeUM7O0VBRXpDLHFDQUFxQztFQUNyQyx1Q0FBdUM7RUFDdkMsNENBQTRDO0VBQzVDLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhOztFQUViLFlBQVk7O0VBRVosd0VBQXdFO0VBQ3hFLCtCQUErQjtFQUMvQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7O0VBRVgsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwyQkFBMkI7O0VBRTNCLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5QkFBeUI7O0VBRXpCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGNBQWM7RUFDZCxpREFBaUQ7RUFDakQscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQiwwQ0FBMEM7RUFDMUMsaUJBQWlCO0VBQ2pCLHFHQUFxRzs7RUFFckc7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkO0FBQ0Y7Ozs7QUFJQTtFQUNFLG9CQUFvQjtFQUNwQiw4QkFBOEI7QUFDaEM7O0FBRUE7OztFQUdFLGlDQUFpQztFQUNqQyxvQkFBb0I7RUFDcEIsNENBQTRDO0VBQzVDLHFCQUFxQjs7RUFFckI7SUFDRSxnQ0FBZ0M7RUFDbEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLHVCQUF1Qjs7SUFFdkI7TUFDRSwyQkFBMkI7SUFDN0I7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRTtNQUNFLGFBQWE7SUFDZjs7SUFFQTtNQUNFLFdBQVc7SUFDYjtFQUNGO0FBQ0Y7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qix5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLHlCQUF5QjtFQUMzQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tb3BhY2l0eS1jZWxsLXRleHQ6IDA7XFxyXFxuICAtLWhvdmVyLWludmVydDogMC4yO1xcclxcbiAgLS1ib2R5LWJhY2dyb3VuZDogcmdiKDIzMCwgMjU1LCAyMzApO1xcclxcbiAgLS1ibG9ja3MtYmFja2dyb3VuZDogcmdiKDIzMSwgMjU1LCAyNTUpO1xcclxcbiAgLS1jZWxsLWJhY2tncm91bmQ6IHJnYigyNDAsIDI0MCwgMjQwKTtcXHJcXG4gIC0tY2VsbC1iYWNrZ3JvdW5kLWZpbGw6IHJnYig5MCwgMCwgMjU1KTtcXHJcXG4gIC0tY2VsbC1ib3JkZXItY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcXHJcXG4gIC0tYm9yZGVyLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICAtLXNjb3JlLWxhc3RnYW1lOiByZ2IoMTY1LCAyNDUsIDE0MCk7XFxyXFxuICAtLWNvbW1vbi10ZXh0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICAtLXNjb3JlLXNoYWRvdzogcmdiKDEyNSwgMTI1LCAxMjUpO1xcclxcbiAgLS1jb2xvci13YXJuaW5nOiAyNTUsIDgwLCA4MDtcXHJcXG4gIC0tY29sb3Itd2FybmluZy1zaGFkb3c6IDAsIDAsIDA7XFxyXFxuICAtLWJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXHJcXG4gIC0tYnRuLWljb24taG92ZXI6IHJnYmEoOTAsIDAsIDI1NSwgMSk7XFxyXFxuICAtLWNvbnRhaW5lci13aWR0aDogY2xhbXAoMXJlbSwgMTAwJSwgMjVyZW0pO1xcclxcbiAgLS1idG4tZGlzYWJsZWQtYm9yZGVyOiByZ2IoMTcwLCAxNzAsIDE3MCk7XFxyXFxuXFxyXFxuICAtLW5vdGljZS1iYWNrZ3JvdW5kOiByZ2JhKDkwLCAwLCAyNTUpO1xcclxcbiAgLS1ub3RpY2UtdGV4dC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgLS1ub3RpY2UtYmFja2dyb3VuZC1lcnJvcjogcmdiYSgyNTUsIDE3NCwgMCk7XFxyXFxuICAtLW5vdGljZS10ZXh0LWNvbG9yLWVycm9yOiByZ2IoMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgaGVpZ2h0OiAxMDBkdmg7XFxyXFxufVxcclxcblxcclxcbi5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb21tb24tdGV4dC1jb2xvcik7O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iYWNncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcblxcclxcbiAgZmxleDogMSAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tY29udGFpbmVyIHtcXHJcXG4gIGNvbnRhaW5lci1uYW1lOiBidXR0b25zO1xcclxcbiAgY29udGFpbmVyLXR5cGU6IGlubGluZS1zaXplO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDEgMCAycmVtO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogY2xhbXAoNXB4LCA1JSwgMTBweCk7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbW1vbi10ZXh0LWNvbG9yKTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgcGFkZGluZzogY2xhbXAoNHB4LCAxJSwgOHB4KSBjbGFtcCg1cHgsIDElLCAxMHB4KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibG9ja3MtYmFja2dyb3VuZCk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcclxcbiAgJiBzdmcge1xcclxcbiAgICB3aWR0aDogMS41cmVtO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5nYW1lb3ZlciB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIGZpbHRlcjogYmx1cigxcHgpIG9wYWNpdHkoMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVvdmVyfmZvb3RlciBidXR0b25bZGF0YS1yb2xlPVxcXCJjYXZlaW5cXFwiXSxcXHJcXG4uZ2FtZW92ZXJ+Zm9vdGVyIGJ1dHRvbltkYXRhLXJvbGU9XFxcInNhdmVcXFwiXSxcXHJcXG4uYnV0dG9uX2Rpc2FibGVkIGJ1dHRvbiB7XFxyXFxuICBjb2xvcjogdmFyKC0tYnRuLWRpc2FibGVkLWJvcmRlcik7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJ0bi1kaXNhYmxlZC1ib3JkZXIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcblxcclxcbiAgJiBzdmcge1xcclxcbiAgICBmaWxsOiB2YXIoLS1idG4tZGlzYWJsZWQtYm9yZGVyKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXHJcXG4gIC5idXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcclxcblxcclxcbiAgICAmIHN2ZyB7XFxyXFxuICAgICAgZmlsbDogdmFyKC0tYnRuLWljb24taG92ZXIpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBjb250YWluZXIgYnV0dG9ucyAobWF4LXdpZHRoOiAxMTBweCkge1xcclxcbiAgLmJ1dHRvbiB7XFxyXFxuICAgICYgc3BhbiB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmIHN2ZyB7XFxyXFxuICAgICAgd2lkdGg6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFuaW1hdGlvbiB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiByb2xsO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJvbGwge1xcclxcbiAgMCUge1xcclxcbiAgICBmaWxsOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbiAgfVxcclxcbiAgMjAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcclxcbiAgICBmaWxsOiByZ2IodmFyKC0tY29sb3Itd2FybmluZykpO1xcclxcbiAgfVxcclxcbiAgODAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XFxyXFxuICAgIGZpbGw6IHJnYih2YXIoLS1jb2xvci13YXJuaW5nKSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XFxyXFxuICAgIGZpbGw6IHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0bkNhdmVpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0bkNhdmVpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnRuTG9hZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0bkxvYWQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0blN3aXRjaE1vZGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idG5Td2l0Y2hNb2RlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idG5SYW5kb20uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idG5SYW5kb20uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0blJlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnRuUmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0blNhdmUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idG5TYXZlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVTZWxlY3Rvci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVTZWxlY3Rvci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tdXRlU291bmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tdXRlU291bmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NjaGVtZVNlbGVjdG9yLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2NoZW1lU2VsZWN0b3IuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Nob3dOb3RpY2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaG93Tm90aWNlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jZWxsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2VsbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGxvdENvbnRhaW5lci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Bsb3RDb250YWluZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Njb3JlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2NvcmUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RpbWVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGltZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICfRhtCy0LXRgtC90LDRjycsXHJcbiAgICBuYW1lOiAnY29sb3InLFxyXG4gICAgY29sb3JzOiB7XHJcbiAgICAgICdib2R5LWJhY2dyb3VuZCc6ICdyZ2IoMjMwLCAyNTUsIDIzMCknLFxyXG4gICAgICAnYmxvY2tzLWJhY2tncm91bmQnOiAncmdiKDIzMSwgMjU1LCAyNTUpJyxcclxuICAgICAgJ2NlbGwtYmFja2dyb3VuZCc6ICdyZ2IoMjQwLCAyNDAsIDI0MCknLFxyXG4gICAgICAnY2VsbC1iYWNrZ3JvdW5kLWZpbGwnOiAncmdiKDkwLCAwLCAyNTUpJyxcclxuICAgICAgJ2NlbGwtYm9yZGVyLWNvbG9yJzogJ3JnYigyMDAsIDIwMCwgMjAwKScsXHJcbiAgICAgICdib3JkZXItY29sb3InOiAncmdiKDAsIDAsIDApJyxcclxuICAgICAgJ3Njb3JlLWxhc3RnYW1lJzogJ3JnYigxNjUsIDI0NSwgMTQwKScsXHJcbiAgICAgICdjb21tb24tdGV4dC1jb2xvcic6ICdyZ2IoMCwgMCwgMCknLFxyXG4gICAgICAnaG92ZXItaW52ZXJ0JzogJzAuMicsXHJcbiAgICAgICdzY29yZS1zaGFkb3cnOiAncmdiKDEyNSwgMTI1LCAxMjUpJyxcclxuICAgICAgJ2NvbG9yLXdhcm5pbmcnOiAnMjU1LCA4MCwgODAnLFxyXG4gICAgICAnYnRuLWljb24taG92ZXInOiAncmdiYSg5MCwgMCwgMjU1LCAxKScsXHJcbiAgICAgICdidG4tZGlzYWJsZWQtYm9yZGVyJzogJ3JnYigxNzAsIDE3MCwgMTcwKScsXHJcbiAgICAgICdub3RpY2UtYmFja2dyb3VuZCc6ICdyZ2JhKDkwLCAwLCAyNTUpJyxcclxuICAgICAgJ25vdGljZS10ZXh0LWNvbG9yJzogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICAgICdub3RpY2UtYmFja2dyb3VuZC1lcnJvcic6ICdyZ2JhKDI1NSwgMTc0LCAwKScsXHJcbiAgICAgICdub3RpY2UtdGV4dC1jb2xvci1lcnJvcic6ICdyZ2IoMCwgMCwgMCknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAn0YLRkdC80L3QsNGPJyxcclxuICAgIG5hbWU6ICdkYXJrJyxcclxuICAgIGNvbG9yczoge1xyXG4gICAgICAnYm9keS1iYWNncm91bmQnOiAncmdiKDUwLCA1MCwgNTApJyxcclxuICAgICAgJ2Jsb2Nrcy1iYWNrZ3JvdW5kJzogJ3JnYig4MCwgODAsIDgwKScsXHJcbiAgICAgICdjZWxsLWJhY2tncm91bmQnOiAncmdiKDEzMCwgMTMwLCAxMzApJyxcclxuICAgICAgJ2NlbGwtYmFja2dyb3VuZC1maWxsJzogJ3JnYig2MCwgNjAsIDYwKScsXHJcbiAgICAgICdjZWxsLWJvcmRlci1jb2xvcic6ICdyZ2IoMTYwLCAxNjAsIDE2MCknLFxyXG4gICAgICAnYm9yZGVyLWNvbG9yJzogJ3JnYigxNTEsIDE1MSwgMTUxKScsXHJcbiAgICAgICdzY29yZS1sYXN0Z2FtZSc6ICdyZ2IoMzAsIDIwLCA0MCknLFxyXG4gICAgICAnY29tbW9uLXRleHQtY29sb3InOiAncmdiKDIzMCwgMjMwLCAyMzApJyxcclxuICAgICAgJ2hvdmVyLWludmVydCc6ICcwLjcnLFxyXG4gICAgICAnc2NvcmUtc2hhZG93JzogJ3JnYigwLCAwLCAwKScsXHJcbiAgICAgICdjb2xvci13YXJuaW5nJzogJzI1NSwgODAsIDgwJyxcclxuICAgICAgJ2J0bi1pY29uLWhvdmVyJzogJ3JnYmEoMTYwLCAxNjAsIDQwLCAxKScsXHJcbiAgICAgICdidG4tZGlzYWJsZWQtYm9yZGVyJzogJ3JnYigyMCwgMjAsIDIwKScsXHJcbiAgICAgICdub3RpY2UtYmFja2dyb3VuZCc6ICdyZ2JhKDQwLCAwLCAxMTApJyxcclxuICAgICAgJ25vdGljZS10ZXh0LWNvbG9yJzogJ3JnYigyMDAsIDIwMCwgMjAwKScsXHJcbiAgICAgICdub3RpY2UtYmFja2dyb3VuZC1lcnJvcic6ICdyZ2JhKDE4MCwgODAsIDgwKScsXHJcbiAgICAgICdub3RpY2UtdGV4dC1jb2xvci1lcnJvcic6ICdyZ2IoMjQwLCAyNDAsIDI0MCknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAn0YHQstC10YLQu9Cw0Y8nLFxyXG4gICAgbmFtZTogJ2xpZ2h0JyxcclxuICAgIGNvbG9yczoge1xyXG4gICAgICAnYm9keS1iYWNncm91bmQnOiAncmdiKDIzMCwgMjMwLCAyMzApJyxcclxuICAgICAgJ2Jsb2Nrcy1iYWNrZ3JvdW5kJzogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICAgICdjZWxsLWJhY2tncm91bmQnOiAncmdiKDI0MCwgMjQwLCAyNDApJyxcclxuICAgICAgJ2NlbGwtYmFja2dyb3VuZC1maWxsJzogJ3JnYig0MCwgNzAsIDEyMCknLFxyXG4gICAgICAnY2VsbC1ib3JkZXItY29sb3InOiAncmdiKDIwMCwgMjAwLCAyMDApJyxcclxuICAgICAgJ2JvcmRlci1jb2xvcic6ICdyZ2IoMTQwLCAxNDAsIDE0MCknLFxyXG4gICAgICAnc2NvcmUtbGFzdGdhbWUnOiAncmdiKDI1NSwgMjIwLCAyMjApJyxcclxuICAgICAgJ2NvbW1vbi10ZXh0LWNvbG9yJzogJ3JnYigxMDAsIDEwMCwgMTAwKScsXHJcbiAgICAgICdob3Zlci1pbnZlcnQnOiAnMC4yJyxcclxuICAgICAgJ3Njb3JlLXNoYWRvdyc6ICdyZ2IoMTUwLCAxNTAsIDE1MCknLFxyXG4gICAgICAnY29sb3Itd2FybmluZyc6ICcyNTUsIDgwLCA4MCcsXHJcbiAgICAgICdidG4taWNvbi1ob3Zlcic6ICdyZ2JhKDQwLCA3MCwgMTIwLCAxKScsXHJcbiAgICAgICdidG4tZGlzYWJsZWQtYm9yZGVyJzogJ3JnYigyMDAsIDE4MCwgMTgwKScsXHJcbiAgICAgICdub3RpY2UtYmFja2dyb3VuZCc6ICdyZ2JhKDQwLCA3MCwgMTIwKScsXHJcbiAgICAgICdub3RpY2UtYmFja2dyb3VuZC1lcnJvcic6ICdyZ2JhKDI1NSwgMTcwLCAxNzApJyxcclxuICAgICAgJ25vdGljZS10ZXh0LWNvbG9yLWVycm9yJzogJ3JnYigwLCAwLCAwKScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9zdGF0ZSc7XHJcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NyZWF0ZU5vZGUnO1xyXG5pbXBvcnQgeyBzdGFydFRpbWVyIH0gZnJvbSAnLi4vLi4vdGltZXIvdGltZXInO1xyXG5pbXBvcnQgc3ZnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9zb2x1dGlvbi5zdmcnO1xyXG5pbXBvcnQgJy4vYnRuQ2F2ZWluLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgYnRuID0gY3JlYXRlQnV0dG9uKHtcclxuICAgIHR4dDogJ1NvbHV0aW9uJyxcclxuICAgIGljb246IHN2ZyxcclxuICAgIGF0dHI6IFtbJ2RhdGEtcm9sZScsICdjYXZlaW4nXV0sXHJcbiAgfSk7XHJcbiAgYnRuLmZpcnN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDYXZlaW4pO1xyXG4gIHJldHVybiBidG47XHJcbn07XHJcblxyXG5jb25zdCBjbGlja0NhdmVpbiA9ICgpID0+IHtcclxuICBzdGF0ZS5nYW1lLnNob3dDZWxsc1ZhbHVlID0gdHJ1ZTtcclxuICBzdGF0ZS5nYW1lLmlzR2FtZVN0YXJ0ZWQgPSBmYWxzZTtcclxuICBzdGFydFRpbWVyKGZhbHNlKTtcclxuICBjb25zdCBvcGFjaXR5ID0gJzEnO1xyXG4gIHN0YXRlLmdhbWUuc2hvd0NlbGxzVmFsdWUgPSB0cnVlO1xyXG4gIHN0YXRlLmh0bWwucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1vcGFjaXR5LWNlbGwtdGV4dCcsIG9wYWNpdHkpO1xyXG4gIHN0YXRlLmh0bWwubWFpbi5jbGFzc0xpc3QuYWRkKCdnYW1lb3ZlcicpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi91dGlscy9jcmVhdGVOb2RlJztcclxuaW1wb3J0IHsgaXNTYXZlZEdhbWUsIGxvYWRTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2xvY2FsU3RvcmFnZSc7XHJcbmltcG9ydCBzdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2xvYWQuc3ZnJztcclxuaW1wb3J0ICcuL2J0bkxvYWQuY3NzJztcclxuaW1wb3J0IHN0YXRlIGZyb20gJy4uLy4uLy4uL3N0YXRlL3N0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBidG5Mb2FkID0gY3JlYXRlQnV0dG9uKHtcclxuICAgIGNsczogJ2J1dHRvbl9kaXNhYmxlZCcsXHJcbiAgICB0eHQ6ICdDb250aW51ZSBsYXN0IGdhbWUnLFxyXG4gICAgaWNvbjogc3ZnLFxyXG4gIH0pO1xyXG4gIHN0YXRlLmh0bWwuYnRuTG9hZCA9IGJ0bkxvYWQ7XHJcbiAgYnRuTG9hZC5maXJzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRTdGF0ZSk7XHJcbiAgaWYgKGlzU2F2ZWRHYW1lKCkpIHtcclxuICAgIHN0YXRlLmh0bWwuYnRuTG9hZC5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b25fZGlzYWJsZWQnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc3RhdGUuaHRtbC5idG5Mb2FkLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbl9kaXNhYmxlZCcpO1xyXG4gIH1cclxuICByZXR1cm4gYnRuTG9hZDtcclxufTtcclxuIiwiaW1wb3J0IHN0YXRlIGZyb20gJy4uLy4uLy4uL3N0YXRlL3N0YXRlJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NyZWF0ZU5vZGUnO1xyXG5pbXBvcnQgc3ZnX2Nyb3NzIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9jcm9zcy5zdmcnO1xyXG5pbXBvcnQgc3ZnX2ZpbGwgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2ZpbGwuc3ZnJztcclxuaW1wb3J0IHN2Z0JydXNoIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9icnVzaC5zdmcnO1xyXG5pbXBvcnQgJy4vYnRuU3dpdGNoTW9kZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnYnV0dG9uJyxcclxuICAgIGNsczogJ2J1dHRvbiBidG4tc3dpdGNoLWNvbnRhaW5lcicsXHJcbiAgICBhdHRyOiBbWyd0aXRsZScsICfQv9C10YDQtdC60LvRjtGH0LjRgtGMINC00LXQudGB0YLQstC40LUg0L/QviDQm9Ca0JwnXV0sXHJcbiAgfSk7XHJcbiAgY29uc3QgaWNvbiA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdzdmcnIH0pO1xyXG4gIGljb24uaW5uZXJIVE1MID0gc3ZnQnJ1c2g7XHJcbiAgY29udGFpbmVyLmFwcGVuZChpY29uKTtcclxuXHJcbiAgY29uc3Qgc3BhbiA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdzcGFuJywgdHh0OiAnc3dpdGNoIGJydXNoJyB9KTtcclxuICBjb250YWluZXIuYXBwZW5kKHNwYW4pO1xyXG5cclxuICBjb25zdCBpY29uQnJ1c2hNb2RlID0gY3JlYXRlRWxlbWVudCh7IHRhZzogJ3N2ZycgfSk7XHJcbiAgaWNvbkJydXNoTW9kZS5pbm5lckhUTUwgPSBzdmdfZmlsbDtcclxuICBzdGF0ZS5odG1sLmljb25CcnVzaE1vZGUgPSBpY29uQnJ1c2hNb2RlO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kKGljb25CcnVzaE1vZGUpO1xyXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaEJydXNoTW9kZSk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBzd2l0Y2hCcnVzaE1vZGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBicnVzaCB9ID0gc3RhdGUuZ2FtZTtcclxuXHJcbiAgc3dpdGNoIChicnVzaCkge1xyXG4gICAgY2FzZSAnZmlsbCc6XHJcbiAgICAgIHN0YXRlLmdhbWUuYnJ1c2ggPSAnY3Jvc3MnO1xyXG4gICAgICBzdGF0ZS5odG1sLmljb25CcnVzaE1vZGUuaW5uZXJIVE1MID0gc3ZnX2Nyb3NzO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2Nyb3NzJzpcclxuICAgICAgc3RhdGUuZ2FtZS5icnVzaCA9ICdmaWxsJztcclxuICAgICAgc3RhdGUuaHRtbC5pY29uQnJ1c2hNb2RlLmlubmVySFRNTCA9IHN2Z19maWxsO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9zdGF0ZSc7XHJcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NyZWF0ZU5vZGUnO1xyXG5pbXBvcnQgeyBzd2l0Y2hHYW1lIH0gZnJvbSAnLi4vLi4vaGVhZGVyL2dhbWVTZWxlY3Rvci9nYW1lU2VsZWN0b3InO1xyXG5pbXBvcnQgcmVuZGVyRGVzayBmcm9tICcuLi8uLi9wbG90Q29udGFpbmVyL3JlbmRlckRlc2snO1xyXG5pbXBvcnQgeyBzdGFydFRpbWVyIH0gZnJvbSAnLi4vLi4vdGltZXIvdGltZXInO1xyXG5pbXBvcnQgc3ZnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9yYW5kb20uc3ZnJztcclxuaW1wb3J0ICcuL2J0blJhbmRvbS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbih7IGljb246IHN2ZywgdHh0OiAnUmFuZG9tIGdhbWUnIH0pO1xyXG4gIGJ1dHRvbi5maXJzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJhbmRvbUdhbWUpO1xyXG5cclxuICByZXR1cm4gYnV0dG9uO1xyXG59O1xyXG5cclxuY29uc3QgcmFuZG9tR2FtZSA9ICgpID0+IHtcclxuICBsZXQgY291bnRHYW1lcyA9IDA7XHJcbiAgY29uc3QgeyBmaWVsZHMgfSA9IHN0YXRlO1xyXG5cclxuICBmb3IgKGNvbnN0IGZpZWxkIGluIGZpZWxkcykge1xyXG4gICAgY291bnRHYW1lcyArPSBmaWVsZHNbZmllbGRdPy5sZW5ndGggfHwgMDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJhbmRvbUlEID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGNvdW50R2FtZXMgLSAxKSk7XHJcbiAgc3RhdGUuZ2FtZS5jdXJyZW50R2FtZSA9IHJhbmRvbUlEO1xyXG4gIHJlbmRlckRlc2socmFuZG9tSUQpO1xyXG4gIHN3aXRjaEdhbWUocmFuZG9tSUQpO1xyXG4gIHN0YXRlLmdhbWUudGltZXIgPSAwO1xyXG4gIHN0YXJ0VGltZXIoZmFsc2UpO1xyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi4vLi4vLi4vc3RhdGUvc3RhdGUnO1xyXG5pbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi91dGlscy9jcmVhdGVOb2RlJztcclxuaW1wb3J0IHJlbmRlckRlc2sgZnJvbSAnLi4vLi4vcGxvdENvbnRhaW5lci9yZW5kZXJEZXNrJztcclxuaW1wb3J0IHsgc3RhcnRUaW1lciB9IGZyb20gJy4uLy4uL3RpbWVyL3RpbWVyJztcclxuaW1wb3J0IHN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvcmVzZXQuc3ZnJztcclxuaW1wb3J0ICcuL2J0blJlc2V0LmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgYnRuUmVzZXQgPSBjcmVhdGVCdXR0b24oe1xyXG4gICAgdHh0OiAnUmVzZXQgZ2FtZScsXHJcbiAgICBpY29uOiBzdmcsXHJcbiAgfSk7XHJcbiAgYnRuUmVzZXQuZmlyc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEdhbWUpO1xyXG4gIHJldHVybiBidG5SZXNldDtcclxufTtcclxuXHJcbmNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcclxuICByZW5kZXJEZXNrKHN0YXRlLmdhbWUuY3VycmVudEdhbWUpO1xyXG4gIHN0YXRlLmdhbWUudGltZXIgPSAwO1xyXG4gIGNvbnN0IG9wYWNpdHkgPSAnMCc7XHJcbiAgc3RhdGUuZ2FtZS5zaG93Q2VsbHNWYWx1ZSA9IGZhbHNlO1xyXG4gIHN0YXRlLmh0bWwucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1vcGFjaXR5LWNlbGwtdGV4dCcsIG9wYWNpdHkpO1xyXG4gIHN0YXRlLmh0bWwubWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdnYW1lb3ZlcicpO1xyXG4gIHN0YXJ0VGltZXIoZmFsc2UpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi91dGlscy9jcmVhdGVOb2RlJztcclxuaW1wb3J0IHsgc2F2ZVN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbG9jYWxTdG9yYWdlJztcclxuaW1wb3J0IHN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvYm9va21hcmtzLnN2Zyc7XHJcbmltcG9ydCAnLi9idG5TYXZlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgYnRuU2F2ZSA9IGNyZWF0ZUJ1dHRvbih7XHJcbiAgICB0eHQ6ICdTYXZlIGdhbWUnLFxyXG4gICAgaWNvbjogc3ZnLFxyXG4gICAgYXR0cjogW1snZGF0YS1yb2xlJywgJ3NhdmUnXV0sXHJcbiAgfSk7XHJcbiAgYnRuU2F2ZS5maXJzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVTdGF0ZSk7XHJcbiAgcmV0dXJuIGJ0blNhdmU7XHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi91dGlscy9jcmVhdGVOb2RlJztcclxuaW1wb3J0IGJ0bkNhdmVpbiBmcm9tICcuLi9idXR0b25zL2NhdmVpbi9idG5DYXZlaW4nO1xyXG5pbXBvcnQgYnRuTG9hZCBmcm9tICcuLi9idXR0b25zL2xvYWQvYnRuTG9hZCc7XHJcbmltcG9ydCBidG5SYW5kb20gZnJvbSAnLi4vYnV0dG9ucy9yYW5kb20vYnRuUmFuZG9tLic7XHJcbmltcG9ydCBidG5SZXNldCBmcm9tICcuLi9idXR0b25zL3Jlc2V0L2J0blJlc2V0JztcclxuaW1wb3J0IGJ0blNhdmUgZnJvbSAnLi4vYnV0dG9ucy9zYXZlL2J0blNhdmUnO1xyXG5pbXBvcnQgJy4vZm9vdGVyLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlRWxlbWVudCh7IHRhZzogJ2Zvb3RlcicsIGNsczogJ2Zvb3RlcicgfSk7XHJcbiAgY29uc3QgY2F2ZWluID0gYnRuQ2F2ZWluKCk7XHJcbiAgY29uc3QgcmVzZXQgPSBidG5SZXNldCgpO1xyXG4gIGNvbnN0IHNhdmUgPSBidG5TYXZlKCk7XHJcbiAgY29uc3QgbG9hZCA9IGJ0bkxvYWQoKTtcclxuICBjb25zdCByYW5kb20gPSBidG5SYW5kb20oKTtcclxuXHJcbiAgZm9vdGVyLmFwcGVuZChjYXZlaW4sIHJlc2V0LCBzYXZlLCBsb2FkLCByYW5kb20pO1xyXG4gIHJldHVybiBmb290ZXI7XHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9zdGF0ZSc7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jcmVhdGVOb2RlJztcclxuaW1wb3J0IGNyZWF0ZU9wdGlvbnMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY3JlYXRlT3B0aW9ucyc7XHJcbmltcG9ydCByZW5kZXJEZXNrLCB7IHVwZGF0ZURlc2sgfSBmcm9tICcuLi8uLi9wbG90Q29udGFpbmVyL3JlbmRlckRlc2snO1xyXG5pbXBvcnQgeyBzdGFydFRpbWVyIH0gZnJvbSAnLi4vLi4vdGltZXIvdGltZXInO1xyXG5pbXBvcnQgJy4vZ2FtZVNlbGVjdG9yLmNzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZVNlbGVjdG9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoeyBjbHM6ICdjb250YWluZXItZ2FtZS1zZWxlY3QnIH0pO1xyXG4gIGNvbnN0IGZvcm0gPSBjcmVhdGVFbGVtZW50KHsgdGFnOiAnZm9ybScsIGNsczogJ2Zvcm0nIH0pO1xyXG4gIGNvbnN0IGdhbWVTZWxlY3RDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHsgY2xzOiAnZ2FtZS1zZWxlY3QnIH0pO1xyXG5cclxuICBjb25zdCBmaWVsZFNldCA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnZmllbGRzZXQnLFxyXG4gICAgY2xzOiAnZ2FtZS1zZWxlY3RfZmllbGRzZXQnLFxyXG4gIH0pO1xyXG4gIHN0YXRlLmh0bWwuZmllbGRTZXQgPSBmaWVsZFNldDtcclxuICBjb25zdCBsZWdlbmQgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ2xlZ2VuZCcsXHJcbiAgICBjbHM6ICdmaWVsZHNldF9sZWdlbmQnLFxyXG4gICAgdHh0OiAn0YHQu9C+0LbQvdC+0YHRgtGMJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ2FtZVNlbGVjdExhYmVsID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdsYWJlbCcsXHJcbiAgICB0eHQ6ICfQktGL0LHQvtGAINC40LPRgNGLJyxcclxuICAgIGF0dHI6IFtbJ2ZvcicsICdnYW1lLXNlbGVjdCddXSxcclxuICB9KTtcclxuICBjb25zdCBnYW1lU2VsZWN0ID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdzZWxlY3QnLFxyXG4gICAgY2xzOiAnZ2FtZS1zZWxlY3Rfc2VsZWN0b3InLFxyXG4gICAgYXR0cjogW1snaWQnLCAnZ2FtZS1zZWxlY3QnXV0sXHJcbiAgfSk7XHJcbiAgc3RhdGUuaHRtbC5nYW1lU2VsZWN0ID0gZ2FtZVNlbGVjdDtcclxuXHJcbiAgY29uc3QgZ2FtZUZpbHRlckxhYmVsNSA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnbGFiZWwnLFxyXG4gICAgdHh0OiAnNXg1JyxcclxuICAgIGNsczogJ2ZpZWxkc2V0X2xhYmVsJyxcclxuICAgIGF0dHI6IFtbJ2ZvcicsICdnYW1lLWZpbHRlci01eDUnXV0sXHJcbiAgfSk7XHJcbiAgY29uc3QgZ2FtZUZpbHRlcjUgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ2lucHV0JyxcclxuICAgIGF0dHI6IFtcclxuICAgICAgWyd0eXBlJywgJ3JhZGlvJ10sXHJcbiAgICAgIFsnbmFtZScsICdnYW1lLWZpbHRlciddLFxyXG4gICAgICBbJ3ZhbHVlJywgJzV4NSddLFxyXG4gICAgICBbJ2lkJywgJ2dhbWUtZmlsdGVyLTV4NSddLFxyXG4gICAgICBbJ2NoZWNrZWQnLCAnJ10sXHJcbiAgICAgIFsnYXV0b2ZvY3VzJywgJyddLFxyXG4gICAgXSxcclxuICB9KTtcclxuICBjb25zdCBnYW1lRmlsdGVyTGFiZWwxMCA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnbGFiZWwnLFxyXG4gICAgdHh0OiAnMTB4MTAnLFxyXG4gICAgY2xzOiAnZmllbGRzZXRfbGFiZWwnLFxyXG4gICAgYXR0cjogW1snZm9yJywgJ2dhbWUtZmlsdGVyLTEweDEwJ11dLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGdhbWVGaWx0ZXIxMCA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnaW5wdXQnLFxyXG4gICAgYXR0cjogW1xyXG4gICAgICBbJ3R5cGUnLCAncmFkaW8nXSxcclxuICAgICAgWyduYW1lJywgJ2dhbWUtZmlsdGVyJ10sXHJcbiAgICAgIFsndmFsdWUnLCAnMTB4MTAnXSxcclxuICAgICAgWydpZCcsICdnYW1lLWZpbHRlci0xMHgxMCddLFxyXG4gICAgXSxcclxuICB9KTtcclxuICBjb25zdCBnYW1lRmlsdGVyTGFiZWwxNSA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnbGFiZWwnLFxyXG4gICAgdHh0OiAnMTV4MTUnLFxyXG4gICAgY2xzOiAnZmllbGRzZXRfbGFiZWwnLFxyXG4gICAgYXR0cjogW1snZm9yJywgJ2dhbWUtZmlsdGVyLTE1eDE1J11dLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGdhbWVGaWx0ZXIxNSA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnaW5wdXQnLFxyXG4gICAgYXR0cjogW1xyXG4gICAgICBbJ3R5cGUnLCAncmFkaW8nXSxcclxuICAgICAgWyduYW1lJywgJ2dhbWUtZmlsdGVyJ10sXHJcbiAgICAgIFsndmFsdWUnLCAnMTV4MTUnXSxcclxuICAgICAgWydpZCcsICdnYW1lLWZpbHRlci0xNXgxNSddLFxyXG4gICAgXSxcclxuICB9KTtcclxuXHJcbiAgZmllbGRTZXQuYXBwZW5kKFxyXG4gICAgbGVnZW5kLFxyXG4gICAgZ2FtZUZpbHRlcjUsXHJcbiAgICBnYW1lRmlsdGVyTGFiZWw1LFxyXG4gICAgZ2FtZUZpbHRlcjEwLFxyXG4gICAgZ2FtZUZpbHRlckxhYmVsMTAsXHJcbiAgICBnYW1lRmlsdGVyMTUsXHJcbiAgICBnYW1lRmlsdGVyTGFiZWwxNVxyXG4gICk7XHJcbiAgZm9ybS5hcHBlbmQoZmllbGRTZXQsIGdhbWVTZWxlY3RDb250YWluZXIpO1xyXG4gIGhlYWRlci5hcHBlbmQoZm9ybSk7XHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VGaWx0ZXIpO1xyXG4gIGdhbWVTZWxlY3RDb250YWluZXIuYXBwZW5kKGdhbWVTZWxlY3RMYWJlbCwgZ2FtZVNlbGVjdCk7XHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzd2l0Y2hHYW1lID0gKGlkKSA9PiB7XHJcbiAgY29uc3QgeyBmaWVsZHMgfSA9IHN0YXRlO1xyXG4gIGxldCBnYW1lID0gbnVsbDtcclxuXHJcbiAgZm9yIChjb25zdCBkaWZmaWN1bHR5IGluIGZpZWxkcykge1xyXG4gICAgZ2FtZSA9IGZpZWxkc1tkaWZmaWN1bHR5XS5maWx0ZXIoKGcpID0+IGcuaWQgPT09ICtpZCk7XHJcbiAgICBpZiAoZ2FtZS5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgcmFkaW8gPSBzdGF0ZS5odG1sLmZpZWxkU2V0LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYGlucHV0W3ZhbHVlPVwiJHtkaWZmaWN1bHR5fVwiXWBcclxuICAgICAgKTtcclxuICAgICAgcmFkaW8gJiYgKHJhZGlvLmNoZWNrZWQgPSB0cnVlKTtcclxuICAgICAgY2hhbmdlRmlsdGVyKGRpZmZpY3VsdHksIGlkKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNoYW5nZUZpbHRlciA9IChlLCBpZCkgPT4ge1xyXG4gIGNvbnN0IHZhbHVlID0gZS50YXJnZXQ/LnZhbHVlIHx8IGU7XHJcblxyXG4gIGNvbnN0IHsgZmllbGRzIH0gPSBzdGF0ZTtcclxuICBjb25zdCBmaWx0ZXJzID0gT2JqZWN0LmtleXMoc3RhdGUuZmllbGRzKTtcclxuICBjb25zdCBpc0ZpbHRlciA9IGZpbHRlcnMuaW5jbHVkZXModmFsdWUpO1xyXG4gIGlmIChpc0ZpbHRlcikge1xyXG4gICAgY29uc3QgbGlzdEdhbWVzID0gZmllbGRzW3ZhbHVlXTtcclxuICAgIHN0YXRlLmdhbWUuY3VycmVudEdhbWUgPSBpZCB8fCBsaXN0R2FtZXNbMF0uaWQ7XHJcbiAgICBzdGF0ZS5nYW1lLmRpZmZpY3VsdHkgPSB2YWx1ZTtcclxuICAgIGNyZWF0ZU9wdGlvbnMoc3RhdGUuaHRtbC5nYW1lU2VsZWN0LCBsaXN0R2FtZXMpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzdGF0ZS5nYW1lLmN1cnJlbnRHYW1lID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcGFjaXR5ID0gJzAnO1xyXG4gIHN0YXRlLmdhbWUuc2hvd0NlbGxzVmFsdWUgPSBmYWxzZTtcclxuICBzdGF0ZS5odG1sLnJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tb3BhY2l0eS1jZWxsLXRleHQnLCBvcGFjaXR5KTtcclxuICBzdGF0ZS5odG1sLm1haW4uY2xhc3NMaXN0LnJlbW92ZSgnZ2FtZW92ZXInKTtcclxuICBpZiAoZS50YXJnZXQ/LnZhbHVlKSB7XHJcbiAgICBzdGF0ZS5nYW1lLnRpbWVyID0gMDtcclxuICAgIHN0YXJ0VGltZXIoZmFsc2UpO1xyXG4gICAgcmVuZGVyRGVzayhzdGF0ZS5nYW1lLmN1cnJlbnRHYW1lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdXBkYXRlRGVzayhzdGF0ZS5nYW1lLmN1cnJlbnRHYW1lKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi91dGlscy9jcmVhdGVOb2RlJztcclxuaW1wb3J0IHsgZ2FtZVNlbGVjdG9yIH0gZnJvbSAnLi9nYW1lU2VsZWN0b3IvZ2FtZVNlbGVjdG9yJztcclxuaW1wb3J0ICcuL2hlYWRlci5jc3MnO1xyXG5pbXBvcnQgbXV0ZVNvdW5kIGZyb20gJy4vbXV0ZVNvdW5kL211dGVTb3VuZCc7XHJcbmltcG9ydCBzY2hlbWVTZWxlY3RvciBmcm9tICcuL3NjaGVtZVNlbGVjdG9yL3NjaGVtZVNlbGVjdG9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjcmVhdGVFbGVtZW50O1xyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdoZWFkZXInLCBjbHM6ICdoZWFkZXInIH0pO1xyXG4gIGNvbnN0IGNvbnRhaW5lckdhbWVPcHRpb25zID0gY3JlYXRlRWxlbWVudCh7IGNsczogJ2NvbnRhaW5lci1nYW1lLW9wdGlvbnMnIH0pO1xyXG4gIGNvbnRhaW5lckdhbWVPcHRpb25zLmFwcGVuZChzY2hlbWVTZWxlY3RvcigpKTtcclxuICBjb250YWluZXJHYW1lT3B0aW9ucy5hcHBlbmQobXV0ZVNvdW5kKCkpO1xyXG5cclxuICBoZWFkZXIuYXBwZW5kKGNvbnRhaW5lckdhbWVPcHRpb25zKTtcclxuICBoZWFkZXIuYXBwZW5kKGdhbWVTZWxlY3RvcigpKTtcclxuICByZXR1cm4gaGVhZGVyO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY3JlYXRlTm9kZSc7XHJcbmltcG9ydCAnLi9tdXRlU291bmQuY3NzJztcclxuaW1wb3J0IHN2Z1NvdW5kT24gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL3NvdW5kLW9uLnN2Zyc7XHJcbmltcG9ydCBzdmdTb3VuZE9GRiBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvc291bmQtb2ZmLnN2Zyc7XHJcbmltcG9ydCBzdGF0ZSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9zdGF0ZSc7XHJcblxyXG5sZXQgaW5pdFZvbHVtZSA9IHN0YXRlLmdhbWUuc291bmRWb2x1bWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7IGNsczogJ2NvbnRhaW5lci1tdXRlJyB9KTtcclxuICBjb25zdCBzb3VuZCA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdzdmcnIH0pO1xyXG4gIHN0YXRlLmh0bWwuc291bmRJY29uID0gc291bmQ7XHJcbiAgc291bmQuaW5uZXJIVE1MID0gc3ZnU291bmRPbjtcclxuXHJcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbXV0ZVNvdW5kQ2xpY2spO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQoc291bmQpO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBtdXRlU291bmRDbGljayA9ICgpID0+IHtcclxuICBjb25zdCB7IHNvdW5kVm9sdW1lOiB2b2x1bWUgfSA9IHN0YXRlLmdhbWU7XHJcblxyXG4gIGlmICh2b2x1bWUgPiAwKSB7XHJcbiAgICBzdGF0ZS5nYW1lLnNvdW5kVm9sdW1lID0gMDtcclxuICAgIHN0YXRlLmh0bWwuc291bmRJY29uLmlubmVySFRNTCA9IHN2Z1NvdW5kT0ZGO1xyXG4gICAgc3RhdGUuaHRtbC5zb3VuZHMuZm9yRWFjaCgoc291bmQpID0+IChzb3VuZC52b2x1bWUgPSAwKSk7XHJcbiAgfVxyXG4gIGlmICh2b2x1bWUgPT09IDApIHtcclxuICAgIHN0YXRlLmdhbWUuc291bmRWb2x1bWUgPSBpbml0Vm9sdW1lO1xyXG4gICAgc3RhdGUuaHRtbC5zb3VuZEljb24uaW5uZXJIVE1MID0gc3ZnU291bmRPbjtcclxuICAgIHN0YXRlLmh0bWwuc291bmRzLmZvckVhY2goKHNvdW5kKSA9PiAoc291bmQudm9sdW1lID0gaW5pdFZvbHVtZSkpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0ICcuL3NjaGVtZVNlbGVjdG9yLmNzcyc7XHJcbmltcG9ydCBjb2xvclNjaGVtZXMgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL3NjaGVtZXMvY29sb3JTY2hlbWVzJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NyZWF0ZU5vZGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNyZWF0ZUVsZW1lbnQ7XHJcbiAgbGV0IG9wdGlvbnMgPSBbXTtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHsgY2xzOiAnc2NoZW1lLWNvbnRhaW5lcicgfSk7XHJcbiAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ2xhYmVsJyxcclxuICAgIHR4dDogJ9Cm0LLQtdGC0L7QstCw0Y8g0YHRhdC10LzQsCcsXHJcbiAgICBhdHRyOiBbWydmb3InLCAnc2NoZW1lX3NlbGVjdCddXSxcclxuICB9KTtcclxuICBjb25zdCBzZWxlY3QgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ3NlbGVjdCcsXHJcbiAgICBjbHM6ICdzY2hlbWUtc2VsZWN0JyxcclxuICAgIGF0dHI6IFtbJ2lkJywgJ3NjaGVtZV9zZWxlY3QnXV0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbG9yU2NoZW1lcy5mb3JFYWNoKChzY2hlbWUpID0+XHJcbiAgICBvcHRpb25zLnB1c2goXHJcbiAgICAgIGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgIHRhZzogJ29wdGlvbicsXHJcbiAgICAgICAgdHh0OiBzY2hlbWUudGl0bGUsXHJcbiAgICAgICAgYXR0cjogW1sndmFsdWUnLCBzY2hlbWUubmFtZV1dLFxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VTY2hlbWUpO1xyXG4gIHNlbGVjdC5hcHBlbmQoLi4ub3B0aW9ucyk7XHJcbiAgY29udGFpbmVyLmFwcGVuZChsYWJlbCwgc2VsZWN0KTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgY2hhbmdlU2NoZW1lID0gKGUpID0+IHtcclxuICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICBjb25zdCBzY2hlbWUgPSBjb2xvclNjaGVtZXMuZmlsdGVyKChzKSA9PiBzLm5hbWUgPT09IHZhbHVlKTtcclxuICBhcHBseVNjaGVtZShzY2hlbWUpO1xyXG59O1xyXG5cclxuY29uc3QgYXBwbHlTY2hlbWUgPSAoc2NoZW1lKSA9PiB7XHJcbiAgaWYgKCFzY2hlbWUpIHJldHVybjtcclxuXHJcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XHJcblxyXG4gIGNvbnN0IGNvbG9ycyA9IHNjaGVtZVswXS5jb2xvcnM7XHJcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbG9ycyk7XHJcbiAga2V5cy5mb3JFYWNoKChjb2xvcikgPT4ge1xyXG4gICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke2NvbG9yfWAsIGNvbG9yc1tjb2xvcl0pO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi4vLi4vc3RhdGUvc3RhdGUnO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlTm9kZSc7XHJcbmltcG9ydCAnLi9zaG93Tm90aWNlLmNzcyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd05vdGljZSA9IChub3RpY2UsIGVycm9yID0gZmFsc2UpID0+IHtcclxuICBzdGF0ZS5odG1sLm5vdGljZS5pbm5lclRleHQgPSBub3RpY2U7XHJcbiAgc3RhdGUuaHRtbC5ub3RpY2UuY2xhc3NMaXN0LmFkZCgnbm90aWNlLWNvbnRhaW5lcl92aXNhYmxlJyk7XHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICBzdGF0ZS5odG1sLm5vdGljZS5jbGFzc0xpc3QuYWRkKCdub3RpY2VfZXJyb3InKTtcclxuICB9IGVsc2Ugc3RhdGUuaHRtbC5ub3RpY2UuY2xhc3NMaXN0LnJlbW92ZSgnbm90aWNlX2Vycm9yJyk7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBzdGF0ZS5odG1sLm5vdGljZS5jbGFzc0xpc3QucmVtb3ZlKCdub3RpY2UtY29udGFpbmVyX3Zpc2FibGUnKTtcclxuICB9LCBzdGF0ZS5nYW1lLm5vdGljZURlbGF5IHx8IDIwMDApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXROb3RpY2UgPSAoKSA9PiB7XHJcbiAgaWYgKCFzdGF0ZS5odG1sLm5vdGljZSkge1xyXG4gICAgY29uc3Qgbm90aWNlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7IGNsczogJ25vdGljZS1jb250YWluZXInIH0pO1xyXG4gICAgc3RhdGUuaHRtbC5ub3RpY2UgPSBub3RpY2VDb250YWluZXI7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChzdGF0ZS5odG1sLm5vdGljZSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY3JlYXRlTm9kZSc7XHJcbmltcG9ydCAnLi9jZWxsLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgY2VsbCA9IGNyZWF0ZUVsZW1lbnQoeyBjbHM6ICdjZWxsJyB9KTtcclxuICByZXR1cm4gY2VsbDtcclxufTtcclxuIiwiaW1wb3J0ICcuL3Bsb3RDb250YWluZXIuY3NzJztcclxuaW1wb3J0IHN0YXRlIGZyb20gJy4uLy4uL3N0YXRlL3N0YXRlJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZU5vZGUnO1xyXG5pbXBvcnQgeyBwYXJzZVRpbWVyLCBzdGFydFRpbWVyIH0gZnJvbSAnLi4vdGltZXIvdGltZXInO1xyXG5pbXBvcnQgc291bmRGaWxsQ2VsbCBmcm9tICcuL3NvdW5kL3NvdW5kRmlsbENlbGwubXAzJztcclxuaW1wb3J0IHNvdW5kRmlsbENyb3NzIGZyb20gJy4vc291bmQvc291bmRGaWxsQ3Jvc3MubXAzJztcclxuaW1wb3J0IHNvdW5kQ2xlYXIgZnJvbSAnLi9zb3VuZC9zb3VuZENsZWFyLm1wMyc7XHJcbmltcG9ydCB7IHNhdmVSZWNvcmRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2FtZVJlY29yZCc7XHJcbmltcG9ydCB7IHVwZGF0ZVNjb3JlIH0gZnJvbSAnLi4vc2NvcmUvc2NvcmUnO1xyXG5pbXBvcnQgeyB1cGRhdGVEZXNrIH0gZnJvbSAnLi9yZW5kZXJEZXNrJztcclxuY29uc3Qgc25kRmlsbENlbGwgPSBuZXcgQXVkaW8oc291bmRGaWxsQ2VsbCk7XHJcbmNvbnN0IHNuZEZpbGxDcm9zcyA9IG5ldyBBdWRpbyhzb3VuZEZpbGxDcm9zcyk7XHJcbmNvbnN0IHNuZENsZWFyID0gbmV3IEF1ZGlvKHNvdW5kQ2xlYXIpO1xyXG5zdGF0ZS5odG1sLnNvdW5kcyA9IFtdO1xyXG5zdGF0ZS5odG1sLnNvdW5kcy5wdXNoKHNuZEZpbGxDZWxsLCBzbmRGaWxsQ3Jvc3MsIHNuZENsZWFyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgY2xzOiAnZ2FtZS1jb250YWluZXInIH0pO1xyXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XHJcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgY29udGV4dE1lbnVIYW5kbGVyKTtcclxuICBzdGF0ZS5odG1sLnBsb3RDb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IGNoZWNrR2FtZVN0YXJ0ID0gKCkgPT4ge1xyXG4gIGlmICghc3RhdGUuZ2FtZS5pc0dhbWVTdGFydGVkKSB7XHJcbiAgICBzdGF0ZS5nYW1lLmlzR2FtZVN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgc3RhcnRUaW1lcigpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldENsaWNrZWRDZWxsID0gKHRhcmdldCkgPT4ge1xyXG4gIGNvbnN0IHsgcGxvdCB9ID0gc3RhdGUuZ2FtZTtcclxuICBsZXQgaW5kZXggPSBudWxsO1xyXG4gIGNvbnN0IGNlbGwgPSBwbG90LmZsYXQoMSkuZmlsdGVyKChjZWxsLCBpKSA9PiB7XHJcbiAgICBpZiAoY2VsbC5lbGVtZW50ID09PSB0YXJnZXQpIHtcclxuICAgICAgaW5kZXggPSBpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9KVswXTtcclxuXHJcbiAgcmV0dXJuIHsgY2VsbCwgaW5kZXggfTtcclxufTtcclxuXHJcbmNvbnN0IGNvbnRleHRNZW51SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHsgY2VsbDogY2xpY2tlZENlbGwsIGluZGV4IH0gPSBnZXRDbGlja2VkQ2VsbChlLnRhcmdldCk7XHJcbiAgaWYgKGNsaWNrZWRDZWxsKSB7XHJcbiAgICBjaGVja0dhbWVTdGFydCgpO1xyXG4gICAgY29uc3QgY2VsbFN0YXRlID0gY2xpY2tlZENlbGwuc3RhdGU7XHJcbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKGNlbGxTdGF0ZSkpIHtcclxuICAgICAgbWFya1goY2xpY2tlZENlbGwsIGluZGV4LCBmYWxzZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGNlbGxTdGF0ZSkge1xyXG4gICAgICBjYXNlICfimqonOlxyXG4gICAgICAgIHNuZEZpbGxDcm9zcy5wbGF5KCk7XHJcbiAgICAgICAgY2xpY2tlZENlbGwuc3RhdGUgPSAneCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ+Kaqyc6XHJcbiAgICAgICAgc25kRmlsbENyb3NzLnBsYXkoKTtcclxuICAgICAgICBjbGlja2VkQ2VsbC5zdGF0ZSA9ICd4JztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAneCc6XHJcbiAgICAgICAgc25kQ2xlYXIucGxheSgpO1xyXG4gICAgICAgIGNsaWNrZWRDZWxsLnN0YXRlID0gJ+Kaqic7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tlZENlbGwuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjZWxsX2NoZWNrZWQnKTtcclxuICAgIGNsaWNrZWRDZWxsLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2VsbF9maWxsJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY2xpY2tIYW5kbGVyID0gKGUpID0+IHtcclxuICBjb25zdCB7IGJydXNoIH0gPSBzdGF0ZS5nYW1lO1xyXG4gIGNvbnN0IHsgY2VsbDogY2xpY2tlZENlbGwsIGluZGV4IH0gPSBnZXRDbGlja2VkQ2VsbChlLnRhcmdldCk7XHJcblxyXG4gIGNvbnN0IGRyYXdGaWxsID0gKCkgPT4ge1xyXG4gICAgc25kRmlsbENlbGwucGxheSgpO1xyXG4gICAgY2xpY2tlZENlbGwuc3RhdGUgPSAn4pqrJztcclxuICAgIGNsaWNrZWRDZWxsLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2VsbF9maWxsJyk7XHJcbiAgICBjbGlja2VkQ2VsbC5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NlbGxfY2hlY2tlZCcpO1xyXG4gIH07XHJcbiAgY29uc3QgZHJhd0Nyb3NzID0gKCkgPT4ge1xyXG4gICAgc25kRmlsbENyb3NzLnBsYXkoKTtcclxuICAgIGNsaWNrZWRDZWxsLnN0YXRlID0gJ3gnO1xyXG4gICAgY2xpY2tlZENlbGwuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjZWxsX2NoZWNrZWQnKTtcclxuICAgIGNsaWNrZWRDZWxsLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2VsbF9maWxsJyk7XHJcbiAgfTtcclxuICBjb25zdCBkcmF3RW1wdHkgPSAoKSA9PiB7XHJcbiAgICBzbmRDbGVhci5wbGF5KCk7XHJcbiAgICBjbGlja2VkQ2VsbC5zdGF0ZSA9ICfimqonO1xyXG4gICAgY2xpY2tlZENlbGwuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjZWxsX2ZpbGwnKTtcclxuICAgIGNsaWNrZWRDZWxsLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2VsbF9jaGVja2VkJyk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGNsaWNrZWRDZWxsKSB7XHJcbiAgICBjaGVja0dhbWVTdGFydCgpO1xyXG4gICAgY29uc3QgY2VsbFN0YXRlID0gY2xpY2tlZENlbGwuc3RhdGU7XHJcbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKGNlbGxTdGF0ZSkpIHtcclxuICAgICAgbWFya1goY2xpY2tlZENlbGwsIGluZGV4KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoIChjZWxsU3RhdGUpIHtcclxuICAgICAgY2FzZSAn4pqqJzpcclxuICAgICAgICBpZiAoYnJ1c2ggPT09ICdmaWxsJykge1xyXG4gICAgICAgICAgZHJhd0ZpbGwoKTtcclxuICAgICAgICB9IGVsc2UgZHJhd0Nyb3NzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ+Kaqyc6XHJcbiAgICAgICAgaWYgKGJydXNoID09PSAnZmlsbCcpIHtcclxuICAgICAgICAgIGRyYXdFbXB0eSgpO1xyXG4gICAgICAgIH0gZWxzZSBkcmF3Q3Jvc3MoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAneCc6XHJcbiAgICAgICAgaWYgKGJydXNoID09PSAnZmlsbCcpIHtcclxuICAgICAgICAgIGRyYXdGaWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIGRyYXdFbXB0eSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0FsbENvcnJlY3RDaGVja2VkKCkpIHNldFRpbWVvdXQoKCkgPT4gZ2FtZU92ZXIoKSwgMCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgbWFya1ggPSAoY2VsbCwgaW5kZXhDZWxsLCBzZXRNYXJrID0gdHJ1ZSkgPT4ge1xyXG4gIGNvbnN0IGxlbmd0aCA9IHN0YXRlLmdhbWUucGxvdFswXS5sZW5ndGg7XHJcbiAgbGV0IHJvd0NsaWNrZWQgPSAtMTtcclxuICBsZXQgeCA9IDA7XHJcbiAgd2hpbGUgKHggPD0gaW5kZXhDZWxsKSB7XHJcbiAgICByb3dDbGlja2VkICs9IDE7XHJcbiAgICB4ICs9IGxlbmd0aDtcclxuICB9XHJcbiAgY29uc3QgY29sdW1uQ2xpa2VkID0gaW5kZXhDZWxsIC0gbGVuZ3RoICogcm93Q2xpY2tlZDtcclxuXHJcbiAgc3RhdGUuZ2FtZS5wbG90LmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcclxuICAgIHJvdy5mb3JFYWNoKChjZWxsLCBjb2x1bW5JbmRleCkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHNldE1hcmspIHtcclxuICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIChjb2x1bW5DbGlrZWQgPT09IGNvbHVtbkluZGV4IHx8IHJvd0NsaWNrZWQgPT09IHJvd0luZGV4KSAmJlxyXG4gICAgICAgICAgICBjZWxsLnN0YXRlID09PSAn4pqqJ1xyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgICBjZWxsLnN0YXRlID0gJ3gnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgKGNvbHVtbkNsaWtlZCA9PT0gY29sdW1uSW5kZXggfHwgcm93Q2xpY2tlZCA9PT0gcm93SW5kZXgpICYmXHJcbiAgICAgICAgICAgIGNlbGwuc3RhdGUgPT09ICd4J1xyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgICBjZWxsLnN0YXRlID0gJ+Kaqic7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgdXBkYXRlRGVzaygpO1xyXG59O1xyXG5cclxuY29uc3QgaXNBbGxDb3JyZWN0Q2hlY2tlZCA9ICgpID0+IHtcclxuICBjb25zdCB7IHBsb3QgfSA9IHN0YXRlLmdhbWU7XHJcbiAgY29uc3QgcGxvdFdpdGhvdXRYID0gcGxvdC5mbGF0KDEpLm1hcCgoY2VsbCkgPT4ge1xyXG4gICAgaWYgKGNlbGwuc3RhdGUgPT09ICd4JykgcmV0dXJuIHsgLi4uY2VsbCwgc3RhdGU6ICfimqonIH07XHJcbiAgICByZXR1cm4gY2VsbDtcclxuICB9KTtcclxuICByZXR1cm4gIXBsb3RXaXRob3V0WC5zb21lKChjZWxsKSA9PiBjZWxsLnN0YXRlICE9PSBjZWxsLnZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IGdhbWVPdmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1zZyA9IGBHcmVhdCEgWW91IGhhdmUgc29sdmVkIHRoZSBub25vZ3JhbSBpbiAke3BhcnNlVGltZXIoXHJcbiAgICBzdGF0ZS5nYW1lLnRpbWVyXHJcbiAgKX0gc2Vjb25kcyFgO1xyXG4gIHNhdmVSZWNvcmRzKCk7XHJcbiAgdXBkYXRlU2NvcmUobXNnKTtcclxuICBzdGF0ZS5odG1sLnNjb3JlLmNsYXNzTGlzdC5hZGQoJ3Njb3JlX3Nob3cnKTtcclxuXHJcbiAgc3RhdGUuZ2FtZS50aW1lciA9IDA7XHJcbiAgc3RhdGUuaHRtbC5tYWluLmNsYXNzTGlzdC5hZGQoJ2dhbWVvdmVyJyk7XHJcbiAgc3RhcnRUaW1lcihmYWxzZSk7XHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZSc7XHJcbmltcG9ydCBnZXRQbG90IGZyb20gJy4uLy4uL3V0aWxzL2dldFBsb3QnO1xyXG5pbXBvcnQgcm90YXRlTWF0cml4IGZyb20gJy4uLy4uL3V0aWxzL3JvdGF0ZU1hdHJpeCc7XHJcbmltcG9ydCBuZXdDZWxsIGZyb20gJy4vY2VsbC9uZXdDZWxsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChpZCA9IDApID0+IHtcclxuICBjb25zdCBwbG90ID0gWy4uLmdldFBsb3QoaWQpXTtcclxuICBpZiAoIXBsb3QpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJvdGF0ZWRQbG90ID0gcm90YXRlTWF0cml4KHBsb3QpO1xyXG4gIGNvbnN0IGNsdWVUb3BSb3RhdGVkID0gY3JlYXRlQ2x1ZUFycmF5KHJvdGF0ZWRQbG90KTtcclxuICAvLyDQstGL0YDQsNCy0L3QuNCy0LDQtdC8INCy0LXRgNGF0L3QuNC4INC/0L7QtNGB0LrQsNC30LrQuCDQsiDQstGL0YHQvtGC0YNcclxuICBjb25zdCBjbHVlVG9wUm93cyA9IE1hdGgubWF4KC4uLmNsdWVUb3BSb3RhdGVkLm1hcCgocm93KSA9PiByb3cubGVuZ3RoKSk7XHJcbiAgY2x1ZVRvcFJvdGF0ZWQuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICB3aGlsZSAocm93Lmxlbmd0aCA8IGNsdWVUb3BSb3dzKSByb3cucHVzaCgwKTtcclxuICB9KTtcclxuICBjb25zdCBjbHVlVG9wID0gcm90YXRlTWF0cml4KGNsdWVUb3BSb3RhdGVkLCAnbGVmdCcpO1xyXG5cclxuICBjb25zdCBjbHVlTGVmdCA9IGNyZWF0ZUNsdWVBcnJheShwbG90KTtcclxuICAvLyDQstGL0YDQsNCy0L3QuNCy0LDQtdC8INC70LXQstGL0LUg0L/QvtC00YHQutCw0LfQutC4INCyINGI0LjRgNC40L3Rg1xyXG4gIGNvbnN0IGNsdWVMZWZ0Q29sdW1ucyA9IE1hdGgubWF4KC4uLmNsdWVMZWZ0Lm1hcCgocm93KSA9PiByb3cubGVuZ3RoKSk7XHJcbiAgY2x1ZUxlZnQuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICB3aGlsZSAocm93Lmxlbmd0aCA8IGNsdWVMZWZ0Q29sdW1ucykgcm93LnVuc2hpZnQoMCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vINC+0LHRitC10LTQtdC90LjRgtGMINC/0L7QtNGB0LrQsNC30LrQuCDRgdC70LXQstCwINGBINC40LPRgNC+0LLRi9C8INC/0L7Qu9C10LxcclxuICBjb25zdCBjbHVlTGVmdEFuZFBsb3QgPSBwbG90Lm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICByZXR1cm4gWy4uLmNsdWVMZWZ0W2ldLCAuLi5yb3ddO1xyXG4gIH0pO1xyXG5cclxuICAvLyDQuCDQstGL0YDQsNCy0L3QuNCy0LDQtdC8INCyINGI0LjRgNC40L3RgyDQv9C+0YHQutCw0LfQutC4INGB0LLQtdGA0YXRg1xyXG4gIGNvbnN0INGBb2x1bW5zQ291bnRUb3RhbCA9IGNsdWVMZWZ0QW5kUGxvdFswXS5sZW5ndGg7XHJcbiAgY2x1ZVRvcC5mb3JFYWNoKChyb3cpID0+IHtcclxuICAgIHdoaWxlIChyb3cubGVuZ3RoIDwg0YFvbHVtbnNDb3VudFRvdGFsKSByb3cudW5zaGlmdCgnJyk7XHJcbiAgfSk7XHJcblxyXG4gIC8vINC+0LHRitC10LTQtdC90LjRgtGMINC/0L7QtNGB0LrQsNC30LrQuCDRgdCy0LXRgNGF0YMg0YEg0LjQs9GA0L7QstGL0Lwg0L/QvtC70LXQvFxyXG4gIGNvbnN0IGdhbWVEZXNrID0gWy4uLmNsdWVUb3AsIC4uLmNsdWVMZWZ0QW5kUGxvdF07XHJcblxyXG4gIC8v0YHRhNC+0YDQvNC40YDRg9C10Lwg0Y3Qu9C10LzQtdC90YLRiyDQuNCz0YDQvtCy0L7Qs9C+INC/0L7Qu9GPXHJcbiAgc3RhdGUuaHRtbC5wbG90Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIGdhbWVEZXNrLmZvckVhY2goKHJvdywgaSkgPT4ge1xyXG4gICAgcm93LmZvckVhY2goKGVsLCBqKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSBuZXdDZWxsKCk7XHJcbiAgICAgIGlmIChlbCA9PT0gJ+KaqycgfHwgZWwgPT09ICfimqonKSB7XHJcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZ2FtZScpO1xyXG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBlbDtcclxuICAgICAgICBnYW1lRGVza1tpXVtqXSA9IHtcclxuICAgICAgICAgIHN0YXRlOiAn4pqqJyxcclxuICAgICAgICAgIHZhbHVlOiBlbCxcclxuICAgICAgICAgIGVsZW1lbnQ6IGNlbGwsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKGVsKSkge1xyXG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2NsdWUnKTtcclxuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gZWwgPiAwID8gZWwgOiAnJztcclxuICAgICAgICBnYW1lRGVza1tpXVtqXSA9IHtcclxuICAgICAgICAgIHN0YXRlOiBlbCxcclxuICAgICAgICAgIHZhbHVlOiBlbCxcclxuICAgICAgICAgIGVsZW1lbnQ6IGNlbGwsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZWwgPT09ICcnKSB7XHJcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZW1wdHknKTtcclxuICAgICAgICBnYW1lRGVza1tpXVtqXSA9IHtcclxuICAgICAgICAgIHN0YXRlOiBlbCxcclxuICAgICAgICAgIHZhbHVlOiBlbCxcclxuICAgICAgICAgIGVsZW1lbnQ6IGNlbGwsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3RhdGUuaHRtbC5wbG90Q29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHNldEJvcmRlcnMoZ2FtZURlc2spO1xyXG4gIGNvbnN0IGNvbHVtbnNDb3VudCA9IGdhbWVEZXNrWzBdLmxlbmd0aDtcclxuICBzdGF0ZS5nYW1lLnBsb3QgPSBnYW1lRGVzaztcclxuICBzdGF0ZS5odG1sLnBsb3RDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tY29sdW1ucy1jb3VudCcsIGNvbHVtbnNDb3VudCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlRGVzayA9ICgpID0+IHtcclxuICAvL9GB0YTQvtGA0LzQuNGA0YPQtdC8INGN0LvQtdC80LXQvdGC0Ysg0LjQs9GA0L7QstC+0LPQviDQv9C+0LvRj1xyXG4gIGNvbnN0IHsgcGxvdCB9ID0gc3RhdGUuZ2FtZTtcclxuXHJcbiAgc3RhdGUuaHRtbC5wbG90Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIHBsb3QuZm9yRWFjaCgocm93LCBpKSA9PiB7XHJcbiAgICByb3cuZm9yRWFjaCgoZWwsIGopID0+IHtcclxuICAgICAgY29uc3QgY2VsbCA9IG5ld0NlbGwoKTtcclxuICAgICAgaWYgKGVsLnN0YXRlID09PSAn4pqrJykge1xyXG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2dhbWUnKTtcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGxfZmlsbCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlbC5zdGF0ZSA9PT0gJ+KaqicpIHtcclxuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncm9sZScsICdnYW1lJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGVsLnN0YXRlID09PSAneCcpIHtcclxuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncm9sZScsICdnYW1lJyk7XHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsX2NoZWNrZWQnKTtcclxuICAgICAgfVxyXG4gICAgICBjZWxsLnRleHRDb250ZW50ID0gZWwudmFsdWU7XHJcbiAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUoZWwuc3RhdGUpKSB7XHJcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnY2x1ZScpO1xyXG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBlbC5zdGF0ZSA+IDAgPyBlbC5zdGF0ZSA6ICcnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlbC5zdGF0ZSA9PT0gJycpIHtcclxuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncm9sZScsICdlbXB0eScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwbG90W2ldW2pdID0ge1xyXG4gICAgICAgIHN0YXRlOiBlbC5zdGF0ZSxcclxuICAgICAgICB2YWx1ZTogZWwudmFsdWUsXHJcbiAgICAgICAgZWxlbWVudDogY2VsbCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHN0YXRlLmh0bWwucGxvdENvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBzZXRCb3JkZXJzKHBsb3QpO1xyXG4gIGNvbnN0IGNvbHVtbnNDb3VudCA9IHBsb3RbMF0ubGVuZ3RoO1xyXG4gIHN0YXRlLmh0bWwucGxvdENvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jb2x1bW5zLWNvdW50JywgY29sdW1uc0NvdW50KTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNsdWVBcnJheSA9IChtYXRyaXgpID0+IHtcclxuICBjb25zdCBjbHVlcyA9IFtdO1xyXG4gIG1hdHJpeC5mb3JFYWNoKChyb3csIGkpID0+IHtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBjbHVlc1tpXSA9IFtdO1xyXG5cclxuICAgIHJvdy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgIGlmIChjZWxsID09PSAn4pqrJykge1xyXG4gICAgICAgIGNvdW50ICs9IDE7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNlbGwgPT09ICfimqonKSB7XHJcbiAgICAgICAgaWYgKGNvdW50ID4gMCkge1xyXG4gICAgICAgICAgY2x1ZXNbaV0ucHVzaChjb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGNvdW50ID4gMCkge1xyXG4gICAgICBjbHVlc1tpXS5wdXNoKGNvdW50KTtcclxuICAgICAgY291bnQgPSAwO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2x1ZXM7XHJcbn07XHJcblxyXG5jb25zdCBzZXRCb3JkZXJzID0gKG1hdHJpeCkgPT4ge1xyXG4gIGxldCBpbmRleFJvdyA9IDA7XHJcblxyXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IG1hdHJpeC5sZW5ndGg7IHJvdyArPSAxKSB7XHJcbiAgICBsZXQgaW5kZXhDb2wgPSAwO1xyXG4gICAgY29uc3QgbGFzdEluZGV4Um93ID0gbWF0cml4W3Jvd10ubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IGxhc3RFbGVtUm93ID0gbWF0cml4W3Jvd11bbGFzdEluZGV4Um93XS52YWx1ZTtcclxuICAgIGlmIChsYXN0RWxlbVJvdyA9PT0gJ+KaqycgfHwgbGFzdEVsZW1Sb3cgPT09ICfimqonKSBpbmRleFJvdyArPSAxO1xyXG5cclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG1hdHJpeFtyb3ddLmxlbmd0aDsgY29sICs9IDEpIHtcclxuICAgICAgY29uc3QgbGFzdFJvd0luZGV4ID0gbWF0cml4Lmxlbmd0aCAtIDE7XHJcbiAgICAgIGNvbnN0IGxhc3RFbGVtQ29sID0gbWF0cml4W2xhc3RSb3dJbmRleF1bY29sXS52YWx1ZTtcclxuICAgICAgaWYgKGxhc3RFbGVtQ29sID09PSAn4pqrJyB8fCBsYXN0RWxlbUNvbCA9PT0gJ+KaqicpIHtcclxuICAgICAgICBpbmRleENvbCArPSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaW5kZXhSb3cgJiYgaW5kZXhSb3cgPT09IDEpXHJcbiAgICAgICAgbWF0cml4W3Jvd11bY29sXS5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZmlyc3Qtcm93JywgJycpO1xyXG4gICAgICBpZiAoaW5kZXhSb3cgJiYgaW5kZXhSb3cgJSA1ID09PSAwKVxyXG4gICAgICAgIG1hdHJpeFtyb3ddW2NvbF0uZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvdycsICcnKTtcclxuICAgICAgaWYgKGluZGV4Q29sICYmIGluZGV4Q29sID09PSAxKVxyXG4gICAgICAgIG1hdHJpeFtyb3ddW2NvbF0uZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZpcnN0LWNvbCcsICcnKTtcclxuICAgICAgaWYgKGluZGV4Q29sICYmIGluZGV4Q29sICUgNSA9PT0gMClcclxuICAgICAgICBtYXRyaXhbcm93XVtjb2xdLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb2wnLCAnJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi4vLi4vc3RhdGUvc3RhdGUnO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlTm9kZSc7XHJcbmltcG9ydCB7IGdldFJlY29yZHMsIHJlc2V0TGFzdEdhbWVGbGFnIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2FtZVJlY29yZCc7XHJcbmltcG9ydCB7IHBhcnNlVGltZXIgfSBmcm9tICcuLi90aW1lci90aW1lcic7XHJcbmltcG9ydCAnLi9zY29yZS5jc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNjb3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpYWxvZyA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnZGlhbG9nJyxcclxuICAgIGNsczogJ2RpYWxvZycsXHJcbiAgICBhdHRyOiBbWydvcGVuJywgJyddXSxcclxuICB9KTtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIGNsczogJ2NvbnRhaW5lcicsXHJcbiAgfSk7XHJcbiAgc3RhdGUuaHRtbC5zY29yZSA9IGNvbnRhaW5lcjtcclxuICB1cGRhdGVTY29yZSgpO1xyXG4gIGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlKTtcclxuICBkaWFsb2cuYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgcmV0dXJuIGRpYWxvZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTY29yZSA9IChtc2cpID0+IHtcclxuICBzdGF0ZS5odG1sLnNjb3JlLmlubmVySFRNTCA9ICcnO1xyXG4gIGNvbnN0IHRpdGxlID0gbXNnID8gbXNnIDogJ1NDT1JFOic7XHJcbiAgY29uc3QgaDEgPSBjcmVhdGVFbGVtZW50KHsgdGFnOiAnaDEnLCBjbHM6ICdzY29yZV9oMScsIHR4dDogdGl0bGUgfSk7XHJcbiAgc3RhdGUuaHRtbC5zY29yZS5hcHBlbmQoaDEpO1xyXG4gIHN0YXRlLmh0bWwuc2NvcmVIMSA9IGgxO1xyXG4gIGNvbnN0IHJlY29yZHMgPSBnZXRDb250YWluZXJSZWNvcmRzKCk7XHJcbiAgcmVjb3JkcyAmJiBzdGF0ZS5odG1sLnNjb3JlLmFwcGVuZCguLi5yZWNvcmRzKTtcclxufTtcclxuXHJcbmNvbnN0IGNsaWNrSGFuZGxlID0gKCkgPT4ge1xyXG4gIHN0YXRlLmh0bWwuc2NvcmVIMS50ZXh0Q29udGVudCA9ICdTQ09SRTonO1xyXG4gIHN0YXRlLmh0bWwuc2NvcmUuY2xhc3NMaXN0LnRvZ2dsZSgnc2NvcmVfc2hvdycpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q29udGFpbmVyUmVjb3JkcyA9ICgpID0+IHtcclxuICBjb25zdCByZWNvcmRzID0gZ2V0UmVjb3JkcygpO1xyXG5cclxuICBjb25zdCBkaWZmaWN1bHR5TGlzdCA9IE9iamVjdC5rZXlzKHN0YXRlLmZpZWxkcyk7XHJcbiAgY29uc3QgdGFibGVzID0gZGlmZmljdWx0eUxpc3QubWFwKChkaWYpID0+IHtcclxuICAgIGNvbnN0IHJlYyA9IHJlY29yZHMuZmlsdGVyKChyKSA9PiByLmRpZmZpY3VsdHkgPT09IGRpZikucmV2ZXJzZSgpO1xyXG4gICAgaWYgKHJlYy5sZW5ndGggPT09IDApIHJldHVybiAnJztcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoeyBjbHM6ICdjb250YWluZXJfX3JlY29yZHMnIH0pO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChjcmVhdGVFbGVtZW50KHsgdHh0OiAn0LjQs9GA0LAnIH0pKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoY3JlYXRlRWxlbWVudCh7IHR4dDogJ9GB0LvQvtC20L0uJyB9KSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKGNyZWF0ZUVsZW1lbnQoeyB0eHQ6ICfQstGA0LXQvNGPJyB9KSk7XHJcbiAgICByZWMuc3BsaWNlKDUpO1xyXG4gICAgY29uc3Qgc29ydGVkID0gcmVjLnNvcnQoKGEsIGIpID0+IGEudGltZXIgLSBiLnRpbWVyKTtcclxuICAgIHNvcnRlZC5mb3JFYWNoKChyLCBpKSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0gci5sYXN0R2FtZSA/ICdyZWNvcmRfbGFzdC1nYW1lJyA6ICcnO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kKFxyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoeyB0eHQ6IGAke2kgKyAxfS4gJHtyLm5hbWV9YCwgY2xzOiBzdHlsZSB9KVxyXG4gICAgICApO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kKGNyZWF0ZUVsZW1lbnQoeyB0eHQ6IHIuZGlmZmljdWx0eSwgY2xzOiBzdHlsZSB9KSk7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoY3JlYXRlRWxlbWVudCh7IHR4dDogcGFyc2VUaW1lcihyLnRpbWVyKSwgY2xzOiBzdHlsZSB9KSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH0pO1xyXG5cclxuICByZXNldExhc3RHYW1lRmxhZyhyZWNvcmRzKTtcclxuICByZXR1cm4gdGFibGVzO1xyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi4vLi4vc3RhdGUvc3RhdGUnO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlTm9kZSc7XHJcbmltcG9ydCAnLi90aW1lci5jc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRpbWVyID0gKCkgPT4ge1xyXG4gIGxldCBzZWNvbmRzID0gcGFyc2VJbnQoc3RhdGUuZ2FtZS50aW1lcik7XHJcbiAgc2Vjb25kcyB8fD0gMDtcclxuICBjb25zdCB0aW1lclN0ciA9IHBhcnNlVGltZXIoc2Vjb25kcyk7XHJcbiAgY29uc3QgdGltZXIgPSBjcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgY2xzOiAndGltZXInLCB0eHQ6IHRpbWVyU3RyIH0pO1xyXG4gIHN0YXRlLmh0bWwudGltZXIgPSB0aW1lcjtcclxuICByZXR1cm4gdGltZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyVGltZXIgPSAoKSA9PiB7XHJcbiAgbGV0IHNlY29uZHMgPSBwYXJzZUludChzdGF0ZS5nYW1lLnRpbWVyKTtcclxuICBzZWNvbmRzIHx8PSAwO1xyXG4gIGNvbnN0IHRpbWUgPSBwYXJzZVRpbWVyKHNlY29uZHMpO1xyXG4gIGlmIChzdGF0ZS5odG1sLnRpbWVyLmlubmVyVGV4dCAhPT0gdGltZSkgc3RhdGUuaHRtbC50aW1lci5pbm5lclRleHQgPSB0aW1lO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXJ0VGltZXIgPSAoc3RhcnQgPSB0cnVlKSA9PiB7XHJcbiAgY29uc3QgdGltZXJIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc3RhdGUuZ2FtZS50aW1lciArPSAxO1xyXG4gICAgcmVuZGVyVGltZXIoKTtcclxuICAgIHJldHVybiB0aW1lckhhbmRsZXI7XHJcbiAgfTtcclxuXHJcbiAgY2xlYXJJbnRlcnZhbChzdGF0ZS5odG1sLnRpbWVySUQpO1xyXG4gIGlmIChzdGFydCkgc3RhdGUuaHRtbC50aW1lcklEID0gc2V0SW50ZXJ2YWwodGltZXJIYW5kbGVyKCksIDEwMDApO1xyXG4gIGlmICghc3RhcnQpIHtcclxuICAgIHN0YXRlLmdhbWUuaXNHYW1lU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgcmVuZGVyVGltZXIoKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcGFyc2VUaW1lciA9IChzZWNvbmRzKSA9PiB7XHJcbiAgbGV0IGhvdXJzID0gTWF0aC50cnVuYyhzZWNvbmRzIC8gMzYwMCk7XHJcbiAgbGV0IG1pbnV0ZXMgPSBNYXRoLnRydW5jKChzZWNvbmRzIC0gaG91cnMgKiAzNjAwKSAvIDYwKTtcclxuICBzZWNvbmRzID0gYCR7c2Vjb25kcyAtIGhvdXJzICogMzYwMCAtIG1pbnV0ZXMgKiA2MH1gO1xyXG5cclxuICBob3VycyA9IGhvdXJzID4gMCA/IGAke2hvdXJzfTpgIDogJyc7XHJcbiAgaG91cnMgJiYgKGhvdXJzID0gaG91cnMucGFkU3RhcnQoMywgJzAnKSk7XHJcbiAgbWludXRlcyA9IG1pbnV0ZXMgPiAwID8gYCR7bWludXRlc306YCA6ICcwMDonO1xyXG4gIG1pbnV0ZXMgPSBtaW51dGVzLnBhZFN0YXJ0KDMsICcwJyk7XHJcbiAgc2Vjb25kcyA9IHNlY29uZHMucGFkU3RhcnQoMiwgJzAnKTtcclxuICByZXR1cm4gYCR7aG91cnN9JHttaW51dGVzfSR7c2Vjb25kc31gO1xyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi9zdGF0ZSc7XHJcbmltcG9ydCBmaWVsZDV4NSBmcm9tICcuLi9maWVsZHMvNXg1Lmpzb24nO1xyXG5pbXBvcnQgZmllbGQxMHgxMCBmcm9tICcuLi9maWVsZHMvMTB4MTAuanNvbic7XHJcbmltcG9ydCBmaWVsZDE1eDE1IGZyb20gJy4uL2ZpZWxkcy8xNXgxNS5qc29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBmaWVsZHMgPSBnZXRGaWVsZHMoKTtcclxuICBzZXRVbmljSUQoZmllbGRzKTtcclxuICBPYmplY3QuYXNzaWduKHN0YXRlLCB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGZpZWxkczogZmllbGRzLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0RmllbGRzID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICAnNXg1JzogZmllbGQ1eDUsXHJcbiAgICAnMTB4MTAnOiBmaWVsZDEweDEwLFxyXG4gICAgJzE1eDE1JzogZmllbGQxNXgxNSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3Qgc2V0VW5pY0lEID0gKGZpZWxkcykgPT4ge1xyXG4gIGxldCBpZCA9IDA7XHJcbiAgZm9yIChsZXQgZmllbGQgaW4gZmllbGRzKSB7XHJcbiAgICBmaWVsZHNbZmllbGRdLmZvckVhY2goKGdhbWUpID0+IHtcclxuICAgICAgZ2FtZS5pZCA9IGlkO1xyXG4gICAgICBpZCArPSAxO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgZ2FtZToge1xyXG4gICAgcGxvdDogW10sXHJcbiAgICBjdXJyZW50R2FtZTogMCxcclxuICAgIGN1cnJlbnRHYW1lTmFtZTogJycsXHJcbiAgICBkaWZmaWN1bHR5OiAnNXg1JyxcclxuICAgIHNob3dDZWxsc1ZhbHVlOiBmYWxzZSxcclxuICAgIHRpbWVyOiAwLFxyXG4gICAgaXNHYW1lU3RhcnRlZDogZmFsc2UsXHJcbiAgICBicnVzaDogJ2ZpbGwnLCAvLyBmaWxsIHwgY3Jvc3NcclxuICAgIGFuaW1lSW50ZXJ2YWw6IDYwLFxyXG4gICAgc291bmRWb2x1bWU6IDAuNSxcclxuICAgIG5vdGljZURlbGF5OiAyMDAwLFxyXG4gIH0sXHJcbiAgZmllbGRzOiBbXSxcclxuICBodG1sOiB7fSxcclxuICBsc0tleVN0YXRlOiAnbm9ub2dyYW0yMDI0MDEyNzE2MTcwMScsXHJcbiAgbHNLZXlSZWNvcmRzOiAnbm9ub2dyYW0yMDI0MDEyODE4MjYwMScsXHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi9zdGF0ZS9zdGF0ZSc7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RhcnRSYW5kb21TVkdhbmltYXRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzdmcnKTtcclxuICBzdGF0ZS5odG1sLmljb25zID0gaWNvbnM7XHJcblxyXG4gIHNldEludGVydmFsKCgpID0+IHtcclxuICAgIGNvbnN0IHsgaWNvbnMgfSA9IHN0YXRlLmh0bWw7XHJcbiAgICBjb25zdCBjb3VudCA9IHN0YXRlLmh0bWwuaWNvbnMubGVuZ3RoO1xyXG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGNvdW50IC0gMSkpO1xyXG4gICAgaWNvbnNbcmFuZG9tXS5jbGFzc0xpc3QudG9nZ2xlKCdhbmltYXRpb24nKTtcclxuICB9LCBzdGF0ZS5nYW1lLmFuaW1lSW50ZXJ2YWwgKiAxMDAwKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoe1xyXG4gIHRhZyA9ICdkaXYnLFxyXG4gIGNscyA9ICcnLFxyXG4gIHR4dCA9ICcnLFxyXG4gIGF0dHIgPSBbXSxcclxuICBpY29uID0gbnVsbCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcblxyXG4gIGlmIChpY29uKSB7XHJcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcclxuICAgIHN2Zy5pbm5lckhUTUwgPSBpY29uO1xyXG5cclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzcGFuLnRleHRDb250ZW50ID0gdHh0O1xyXG5cclxuICAgIGVsZW1lbnQuYXBwZW5kKHN2Zywgc3Bhbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gdHh0O1xyXG4gIH1cclxuXHJcbiAgY2xzICYmIChlbGVtZW50LmNsYXNzTmFtZSA9IGNscyk7XHJcbiAgYXR0ci5mb3JFYWNoKChhdHRyaWJ1dCkgPT4gZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRbMF0sIGF0dHJpYnV0WzFdKSk7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQnV0dG9uID0gKHtcclxuICBjbHMgPSAnJyxcclxuICBpY29uID0gbnVsbCxcclxuICB0eHQgPSAnJyxcclxuICBhdHRyID0gW10sXHJcbn0pID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHsgY2xzOiBgYnV0dG9uLWNvbnRhaW5lciAke2Nsc31gIH0pO1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdidXR0b24nLCBjbHM6ICdidXR0b24nLCBhdHRyOiBhdHRyIH0pO1xyXG5cclxuICBpZiAoaWNvbikge1xyXG4gICAgY29uc3Qgc3ZnID0gY3JlYXRlRWxlbWVudCh7IHRhZzogJ3N2ZycsIGNsczogJ2J1dHRvbl9pY29uJyB9KTtcclxuICAgIHN2Zy5pbm5lckhUTUwgPSBpY29uO1xyXG4gICAgYnV0dG9uLmFwcGVuZChzdmcpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR4dCkge1xyXG4gICAgY29uc3Qgc3BhbiA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdzcGFuJywgY2xzOiAnYnV0dG9uX3NwYW4nLCB0eHQ6IHR4dCB9KTtcclxuICAgIGJ1dHRvbi5hcHBlbmQoc3Bhbik7XHJcbiAgfVxyXG5cclxuICBjb250YWluZXIuYXBwZW5kKGJ1dHRvbik7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuIiwiaW1wb3J0IHN0YXRlIGZyb20gJy4uL3N0YXRlL3N0YXRlJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vY3JlYXRlTm9kZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc2VsZWN0LCBnYW1lcykgPT4ge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBnYW1lcy5tYXAoKGdhbWUpID0+IHtcclxuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBnYW1lLm5hbWU7XHJcbiAgICBjb25zdCBNQVhfTEVOR1RIID0gMzA7XHJcbiAgICBjb25zdCBuYW1lTm9ybWFsaXplZCA9XHJcbiAgICAgIGxlbmd0aCA+IE1BWF9MRU5HVEggPyBnYW1lLm5hbWUuc2xpY2UoMCwgTUFYX0xFTkdUSCkgKyAnLi4uJyA6IGdhbWUubmFtZTtcclxuICAgIGNvbnN0IGNoZWNrZWQgPVxyXG4gICAgICBzdGF0ZS5nYW1lLmN1cnJlbnRHYW1lID09PSBnYW1lLmlkID8gJ3NlbGVjdGVkJyA6ICd1bnNlbGVjdGVkJztcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgdGFnOiAnb3B0aW9uJyxcclxuICAgICAgYXR0cjogW1xyXG4gICAgICAgIFsndmFsdWUnLCBnYW1lLmlkXSxcclxuICAgICAgICBbY2hlY2tlZCwgJyddLFxyXG4gICAgICBdLFxyXG4gICAgICB0eHQ6IG5hbWVOb3JtYWxpemVkLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgc2VsZWN0LmlubmVySFRNTCA9ICcnO1xyXG4gIHNlbGVjdC5hcHBlbmQoLi4ub3B0aW9ucyk7XHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi9zdGF0ZS9zdGF0ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UmVjb3JkcyA9ICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0YXRlLmxzS2V5UmVjb3Jkcyk7XHJcbiAgICBjb25zdCByZWNvcmRzID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIHJldHVybiByZWNvcmRzIHx8IFtdO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZVJlY29yZHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVjb3JkID0ge1xyXG4gICAgbmFtZTogc3RhdGUuZ2FtZS5jdXJyZW50R2FtZU5hbWUsXHJcbiAgICBkaWZmaWN1bHR5OiBzdGF0ZS5nYW1lLmRpZmZpY3VsdHksXHJcbiAgICB0aW1lcjogc3RhdGUuZ2FtZS50aW1lcixcclxuICAgIGxhc3RHYW1lOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9sZFJlY29yZHMgPSBnZXRSZWNvcmRzKCk7XHJcbiAgY29uc3QgbmV3UmVjb3JkcyA9IFsuLi5vbGRSZWNvcmRzLCByZWNvcmRdO1xyXG4gIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShuZXdSZWNvcmRzKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdGF0ZS5sc0tleVJlY29yZHMsIGRhdGEpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0TGFzdEdhbWVGbGFnID0gKHJlY29yZHMpID0+IHtcclxuICBjb25zdCB3b0ZsYWcgPSByZWNvcmRzLm1hcCgocikgPT4gKHsgLi4uciwgbGFzdEdhbWU6IGZhbHNlIH0pKTtcclxuICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkod29GbGFnKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdGF0ZS5sc0tleVJlY29yZHMsIGRhdGEpO1xyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi4vc3RhdGUvc3RhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGlkKSA9PiB7XHJcbiAgY29uc3QgSUQgPSBOdW1iZXIoaWQpO1xyXG4gIGZvciAobGV0IGZpZWxkIGluIHN0YXRlLmZpZWxkcykge1xyXG4gICAgY29uc3QgZ2FtZSA9IHN0YXRlLmZpZWxkc1tmaWVsZF0uZmlsdGVyKChnYW1lKSA9PiBnYW1lLmlkID09PSBJRClbMF07XHJcbiAgICBpZiAoZ2FtZSkge1xyXG4gICAgICBzdGF0ZS5nYW1lLmN1cnJlbnRHYW1lID0gZ2FtZS5pZDtcclxuICAgICAgc3RhdGUuZ2FtZS5jdXJyZW50R2FtZU5hbWUgPSBnYW1lLm5hbWU7XHJcbiAgICAgIHJldHVybiBnYW1lLnBsb3Q7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBzd2l0Y2hHYW1lIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXIvZ2FtZVNlbGVjdG9yL2dhbWVTZWxlY3Rvcic7XHJcbmltcG9ydCB7IHVwZGF0ZURlc2sgfSBmcm9tICcuLi9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvcmVuZGVyRGVzayc7XHJcbmltcG9ydCB7IHNob3dOb3RpY2UgfSBmcm9tICcuLi9jb21wb25lbnRzL25vdGljZS9zaG93Tm90aWNlJztcclxuaW1wb3J0IHsgc3RhcnRUaW1lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGltZXIvdGltZXInO1xyXG5pbXBvcnQgc3ZnX2Nyb3NzIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9jcm9zcy5zdmcnO1xyXG5pbXBvcnQgc3ZnX2ZpbGwgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2ZpbGwuc3ZnJztcclxuaW1wb3J0IHN0YXRlIGZyb20gJy4uL3N0YXRlL3N0YXRlJztcclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlU3RhdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBnYW1lIH0gPSBzdGF0ZTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdGF0ZS5sc0tleVN0YXRlLCBKU09OLnN0cmluZ2lmeShnYW1lKSk7XHJcbiAgaWYgKGlzU2F2ZWRHYW1lKCkpIHtcclxuICAgIHN0YXRlLmh0bWwuYnRuTG9hZC5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b25fZGlzYWJsZWQnKTtcclxuICAgIHNob3dOb3RpY2UoJ9CY0LPRgNCwINGB0L7RhdGA0LDQvdC10L3QsCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzdGF0ZS5odG1sLmJ0bkxvYWQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uX2Rpc2FibGVkJyk7XHJcbiAgICBzaG93Tm90aWNlKCfQmNCz0YDQsCDQvdC1INGB0L7RhdGA0LDQvdC10L3QsCcsIHRydWUpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkU3RhdGUgPSAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RhdGUubHNLZXlTdGF0ZSk7XHJcbiAgICBjb25zdCBnYW1lID0gSlNPTi5wYXJzZShscyk7XHJcbiAgICBpZiAoZ2FtZSkge1xyXG4gICAgICBzdGF0ZS5nYW1lID0gZ2FtZTtcclxuICAgICAgdXBkYXRlRGVzaygpO1xyXG4gICAgICBzd2l0Y2hHYW1lKHN0YXRlLmdhbWUuY3VycmVudEdhbWUpO1xyXG4gICAgICBzdGFydFRpbWVyKHRydWUpO1xyXG4gICAgICBjb25zdCBvcGFjaXR5ID0gc3RhdGUuZ2FtZS5zaG93Q2VsbHNWYWx1ZSA/ICcwLjQnIDogJzAnO1xyXG4gICAgICBzdGF0ZS5odG1sLnJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tb3BhY2l0eS1jZWxsLXRleHQnLCBvcGFjaXR5KTtcclxuXHJcbiAgICAgIGlmIChzdGF0ZS5nYW1lLmJydXNoID09PSAnZmlsbCcpIHtcclxuICAgICAgICBzdGF0ZS5odG1sLmljb25CcnVzaE1vZGUuaW5uZXJIVE1MID0gc3ZnX2ZpbGw7XHJcbiAgICAgIH0gZWxzZSBzdGF0ZS5odG1sLmljb25CcnVzaE1vZGUuaW5uZXJIVE1MID0gc3ZnX2Nyb3NzO1xyXG4gICAgICBzaG93Tm90aWNlKCfQmNCz0YDQsCDQt9Cw0LPRgNGD0LbQtdC90LAnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YXRlLmh0bWwuYnRuTG9hZC5jbGFzc0xpc3QuYWRkKCdidXR0b25fZGlzYWJsZWQnKTtcclxuICAgICAgc2hvd05vdGljZSgn0J3QtdGCINGB0L7RhdGA0LDQvdGR0L3QvdGL0YUg0LjQs9GAJywgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ9C+0YjQuNCx0LrQsCDQv9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDQuNCz0YDRiyDQuNC3IGxvY2FsU3RvcmFnZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzU2F2ZWRHYW1lID0gKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBscyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0YXRlLmxzS2V5U3RhdGUpO1xyXG4gICAgY29uc3QgZ2FtZSA9IEpTT04ucGFyc2UobHMpO1xyXG4gICAgaWYgKGdhbWUpIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCfQvtGI0LjQsdC60LAg0L/RgNC4INC30LDQs9GA0YPQt9C60LUg0LjQs9GA0Ysg0LjQtyBsb2NhbFN0b3JhZ2U6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAobWF0cml4LCBkaXJlY3Rpb24gPSAncmlnaHQnKSA9PiB7XHJcbiAgY29uc3QgdG1wTWF0cml4ID0gWy4uLm1hdHJpeF07XHJcbiAgY29uc3Qgcm90YXRlZE1hdHJpeCA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG1wTWF0cml4WzBdLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICByb3RhdGVkTWF0cml4W2ldID0gW107XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRtcE1hdHJpeC5sZW5ndGg7IGogKz0gMSkge1xyXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKVxyXG4gICAgICAgIHJvdGF0ZWRNYXRyaXhbaV1bal0gPSB0bXBNYXRyaXhbdG1wTWF0cml4Lmxlbmd0aCAtIDEgLSBqXVtpXTtcclxuICAgICAgZWxzZSByb3RhdGVkTWF0cml4W2ldW2pdID0gdG1wTWF0cml4W2pdW3RtcE1hdHJpeFtpXS5sZW5ndGggLSAxIC0gaV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByb3RhdGVkTWF0cml4O1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc29sZS5jbGVhcigpO1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgJ9Cf0YDQuNCy0LXRgiElY9CU0LvRjyDQvtCx0LvQtdCz0YfQtdC90LjRjyDQv9GA0L7QstC10YDQutC4INC60L7QvdC10YfQvdC+INC20LUg0LXRgdGC0Ywg0LrQvtC1LdGH0YLQvi4g0JrQu9Cw0LLQuNGI0LBcXG4gJWMgSCBcXG4lY9C90LDQttCw0YLQsNGPINC90LAg0LrQu9Cw0LLQuNCw0YLRg9GA0LUg0L/QvtC60LDQttC10YIgLyDRgdC60YDQvtC10YIg0L/QvtC00YHQutCw0LfQutGDJyxcclxuICAgICdiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgcGFkZGluZzogOHB4IDRweCcsXHJcbiAgICAnYmFja2dyb3VuZC1jb2xvcjogIzU1NTU1NTsgY29sb3I6ICNmZmZmMDA7IGxpbmUtaGVpZ2h0OiAyNnB4OyBmb250LXNpemU6IDIwcHgnLFxyXG4gICAgJ2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBwYWRkaW5nOiA4cHggNHB4OyBmb250LXNpemU6IDEycHgnXHJcbiAgKTtcclxuXHJcbiAgY29uc29sZS5sb2coXHJcbiAgICAn0JjQs9GA0L7QstC+0LUg0L/QvtC70LU6XFxuJWMg0JvQmtCcOiAlYyDQt9Cw0LrRgNCw0YHQuNGC0Ywg0LrQu9C10YLQutGDXFxuJWMg0J/QmtCcOiAlYyDQv9C+0YHRgtCw0LLQuNGC0Ywg0LrRgNC10YHRgtC40LpcXG7QutC90L7Qv9C60LAgJWMgc3dpdGNoIGJydXNoOiAlYyAg0L/QtdGA0LXQutC70Y7Rh9C40YLRjCDRgNC10LbQuNC8INCb0JrQnCDQt9Cw0LrRgNCw0YHQuNGC0YwgLyDQv9C+0YHRgtCw0LLQuNGC0Ywg0LrRgNC10YHRgtC40LogKNGD0LTQvtCx0L3QviDQv9C+0LvRjNC30L7QstCw0YLRjNGB0Y8g0LXRgdC70Lgg0L3QtdGCINC80YvRiNC60LgpXFxuJyxcclxuICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NTU1OyBjb2xvcjogI2ZmZmZmZicsXHJcbiAgICAnYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQnLFxyXG4gICAgJ2JhY2tncm91bmQtY29sb3I6ICM1NTU1NTU7IGNvbG9yOiAjZmZmZmZmJyxcclxuICAgICdiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCcsXHJcbiAgICAnYmFja2dyb3VuZC1jb2xvcjogIzU1NTU1NTsgY29sb3I6ICNmZmZmZmYnLFxyXG4gICAgJ2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50J1xyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICAn0J/QvtC70LUg0YEg0L/QvtC00YHQutCw0LfQutCw0LzQuDpcXG4lYyDQm9Ca0Jw6ICVjINC30LDQv9C+0LvQvdC40YLRjCDQutGA0LXRgdGC0LjQutCw0LzQuCDQstGB0Y4g0YHRgtGA0L7QutGDIC8g0YHRgtC+0LvQsdC10YZcXG4lYyDQn9Ca0Jw6ICVjINGD0LHRgNCw0YLRjCDQstGB0LUg0LrRgNC10YHRgtC40LrQuCDQvdCwINGB0YLRgNC+0LrQtSAvINGB0YLQvtC70LHRhtC1XFxuJyxcclxuICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NTU1OyBjb2xvcjogI2ZmZmZmZicsXHJcbiAgICAnYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQnLFxyXG4gICAgJ2JhY2tncm91bmQtY29sb3I6ICM1NTU1NTU7IGNvbG9yOiAjZmZmZmZmJyxcclxuICAgICdiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCdcclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi4vc3RhdGUvc3RhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGUpID0+IHtcclxuICBjb25zdCB7IGNvZGUgfSA9IGU7XHJcblxyXG4gIGlmIChjb2RlID09PSAnS2V5UycpIHtcclxuICAgIGNvbnN0IGdhbWUgPSBbLi4uc3RhdGUuZ2FtZS5wbG90XTtcclxuICAgIGNvbnN0IGZpbHRlciA9IGdhbWVcclxuICAgICAgLm1hcCgocm93KSA9PiByb3cubWFwKChjZWxsKSA9PiBjZWxsLnN0YXRlKSlcclxuICAgICAgLmZpbHRlcigocm93KSA9PiByb3dbMF0gIT09ICcnKVxyXG4gICAgICAubWFwKChyb3cpID0+IHJvdy5maWx0ZXIoKGNlbGwpID0+ICFOdW1iZXIuaXNGaW5pdGUoY2VsbCkpKTtcclxuXHJcbiAgICBjb25zdCBqc29uID0ge1xyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgcGxvdDogZmlsdGVyLFxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUud2FybignanNvbiBmb3Igc2F2ZS4uLicsIGpzb24pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvZGUgPT09ICdLZXlIJykge1xyXG4gICAgc3RhdGUuZ2FtZS5zaG93Q2VsbHNWYWx1ZSA9ICFzdGF0ZS5nYW1lLnNob3dDZWxsc1ZhbHVlO1xyXG4gICAgY29uc3Qgb3BhY2l0eSA9IHN0YXRlLmdhbWUuc2hvd0NlbGxzVmFsdWUgPyAnMC40JyA6ICcwJztcclxuICAgIHN0YXRlLmh0bWwucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1vcGFjaXR5LWNlbGwtdGV4dCcsIG9wYWNpdHkpO1xyXG4gIH1cclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3RpbWVyL3RpbWVyJztcclxuaW1wb3J0IHN0YXRlIGZyb20gJy4vc3RhdGUvc3RhdGUnO1xyXG5pbXBvcnQgZm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyJztcclxuaW1wb3J0IGluaXRTdGF0ZSBmcm9tICcuL3N0YXRlL2luaXRTdGF0ZSc7XHJcbmltcG9ydCByZW5kZXJEZXNrIGZyb20gJy4vY29tcG9uZW50cy9wbG90Q29udGFpbmVyL3JlbmRlckRlc2snO1xyXG5pbXBvcnQgd2luZG93SGFuZGxlIGZyb20gJy4vdXRpbHMvd2luZG93SGFuZGxlJztcclxuaW1wb3J0IHBsb3RDb250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvcGxvdENvbnRhaW5lcic7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxzL2NyZWF0ZU5vZGUnO1xyXG5pbXBvcnQgY3JlYXRlT3B0aW9ucyBmcm9tICcuL3V0aWxzL2NyZWF0ZU9wdGlvbnMnO1xyXG5pbXBvcnQgeyBzY29yZSB9IGZyb20gJy4vY29tcG9uZW50cy9zY29yZS9zY29yZSc7XHJcbmltcG9ydCBidG5Td2l0Y2hNb2RlIGZyb20gJy4vY29tcG9uZW50cy9idXR0b25zL21vZGUvYnRuU3dpdGNoTW9kZSc7XHJcbmltcG9ydCB7IHN0YXJ0UmFuZG9tU1ZHYW5pbWF0aW9uIH0gZnJvbSAnLi91dGlscy9hbmltYXRpb24nO1xyXG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IHNob3dXZWxjb21lIGZyb20gJy4vdXRpbHMvc2hvd1dlbGNvbWUnO1xyXG5pbXBvcnQgeyBpbml0Tm90aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL25vdGljZS9zaG93Tm90aWNlJztcclxuXHJcbmZ1bmN0aW9uIGdhbWUoKSB7XHJcbiAgaW5pdFN0YXRlKCk7XHJcbiAgc3RhdGUuaHRtbC5tYWluID0gY3JlYXRlRWxlbWVudCh7IHRhZzogJ21haW4nLCBjbHM6ICdtYWluJyB9KTtcclxuICBzdGF0ZS5odG1sLm1haW4uYXBwZW5kKHBsb3RDb250YWluZXIoKSk7XHJcbiAgc3RhdGUuaHRtbC5tYWluLmFwcGVuZChidG5Td2l0Y2hNb2RlKCkpO1xyXG4gIHN0YXRlLmh0bWwucm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XHJcbiAgcmV0dXJuIHN0YXRlLmh0bWwubWFpbjtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5Jyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlcigpLCB0aW1lcigpLCBnYW1lKCksIGZvb3RlcigpLCBzY29yZSgpKTtcclxucmVuZGVyRGVzaygwKTtcclxuY3JlYXRlT3B0aW9ucyhzdGF0ZS5odG1sLmdhbWVTZWxlY3QsIHN0YXRlLmZpZWxkc1snNXg1J10pO1xyXG5zdGFydFJhbmRvbVNWR2FuaW1hdGlvbigpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB3aW5kb3dIYW5kbGUpO1xyXG5zaG93V2VsY29tZSgpO1xyXG5pbml0Tm90aWNlKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==