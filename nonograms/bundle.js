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
  --w : clamp(10rem, 90%, 35rem);
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
}`, "",{"version":3,"sources":["webpack://./src/components/score/score.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,WAAW;EACX,WAAW;EACX,cAAc;EACd,QAAQ;;EAER,oCAAoC;AACtC;;AAEA;EACE,8BAA8B;EAC9B,eAAe;EACf,UAAU;EACV,SAAS;EACT,UAAU;EACV,eAAe;EACf,iBAAiB;;EAEjB,+BAA+B;EAC/B,qBAAqB;EACrB,0CAA0C;EAC1C,qCAAqC;EACrC,6DAA6D;EAC7D,uBAAuB;EACvB,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,mBAAmB;EACnB,WAAW;EACX,YAAY;;EAEZ,iBAAiB;EACjB,qBAAqB;EACrB,0CAA0C;EAC1C,qCAAqC;EACrC,kBAAkB;EAClB,0BAA0B;EAC1B,6BAA6B;AAC/B;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;EAC5B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,YAAY;EACZ,WAAW;;EAEX,gBAAgB;;EAEhB,qCAAqC;EACrC,qBAAqB;;EAErB;IACE,4CAA4C;EAC9C;;EAEA;IACE,oBAAoB;EACtB;;EAEA;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE,uCAAuC;AACzC","sourcesContent":[".dialog {\r\n  left: -10rem;\r\n  border: none;\r\n}\r\n\r\n.dialog:has(div.score_show) {\r\n  position: fixed;\r\n  z-index: 10;\r\n  width: 100%;\r\n  height: 100dvh;\r\n  inset: 0;\r\n\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.container {\r\n  --w : clamp(10rem, 90%, 35rem);\r\n  position: fixed;\r\n  z-index: 2;\r\n  top: 2rem;\r\n  left: 100%;\r\n  width: var(--w);\r\n  min-height: 10rem;\r\n\r\n  color: var(--common-text-color);\r\n  border-radius: 0.5rem;\r\n  background-color: var(--blocks-background);\r\n  border: 2px solid var(--border-color);\r\n  filter: drop-shadow(0.5rem 0.5rem 0.5rem var(--score-shadow));\r\n  transition-delay: 100ms;\r\n  transition-duration: 200ms;\r\n}\r\n\r\n.container::before {\r\n  content: '⬌';\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 1rem;\r\n  left: -2.1rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  padding-bottom: 5px;\r\n  width: 2rem;\r\n  height: 3rem;\r\n\r\n  font-size: 1.5rem;\r\n  border-radius: 0.5rem;\r\n  background-color: var(--blocks-background);\r\n  border: 2px solid var(--border-color);\r\n  border-right: none;\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n@media (hover) {\r\n  .container:hover {\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.score_h1 {\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1.2rem;\r\n  text-align: center;\r\n}\r\n\r\n.score_show {\r\n  transform: translateX(-100%);\r\n  pointer-events: all;\r\n}\r\n\r\n.container__records {\r\n  display: grid;\r\n  grid-template-columns: 3fr 1fr 2fr;\r\n  margin: 1rem;\r\n  gap: 0.2rem;\r\n\r\n  min-height: 1rem;\r\n\r\n  border: 1ps solid var(--border-color);\r\n  border-radius: 0.3rem;\r\n\r\n  & div:nth-child(-n+3) {\r\n    border-bottom: 1px solid var(--border-color);\r\n  }\r\n\r\n  & div:nth-child(3n-1) {\r\n    justify-self: center;\r\n  }\r\n\r\n  & div:nth-child(3n) {\r\n    justify-self: end;\r\n  }\r\n}\r\n\r\n.record_last-game {\r\n  background-color: var(--score-lastgame);\r\n}"],"sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,oCAAoC;EACpC,uCAAuC;EACvC,qCAAqC;EACrC,oCAAoC;EACpC,uCAAuC;EACvC,4BAA4B;EAC5B,oCAAoC;EACpC,iCAAiC;EACjC,kCAAkC;EAClC,4BAA4B;EAC5B,+BAA+B;EAC/B,uBAAuB;EACvB,qCAAqC;EACrC,2CAA2C;EAC3C,yCAAyC;;EAEzC,qCAAqC;EACrC,uCAAuC;EACvC,4CAA4C;EAC5C,uCAAuC;AACzC;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,aAAa;;EAEb,YAAY;;EAEZ,wEAAwE;EACxE,+BAA+B;EAC/B,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;;EAEX,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,2BAA2B;;EAE3B,aAAa;EACb,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;;EAEzB,0BAA0B;EAC1B,iBAAiB;EACjB,+BAA+B;EAC/B,cAAc;EACd,iDAAiD;EACjD,qCAAqC;EACrC,qBAAqB;EACrB,0CAA0C;EAC1C,iBAAiB;EACjB,qGAAqG;;EAErG;IACE,aAAa;IACb,YAAY;EACd;AACF;;;;AAIA;EACE,oBAAoB;EACpB,8BAA8B;AAChC;;AAEA;;;EAGE,iCAAiC;EACjC,oBAAoB;EACpB,4CAA4C;EAC5C,qBAAqB;;EAErB;IACE,gCAAgC;EAClC;AACF;;AAEA;EACE;IACE,eAAe;IACf,uBAAuB;;IAEvB;MACE,2BAA2B;IAC7B;EACF;AACF;;AAEA;EACE;IACE;MACE,aAAa;IACf;;IAEA;MACE,WAAW;IACb;EACF;AACF;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,4BAA4B;IAC5B,yBAAyB;AAC7B;;AAEA;EACE;IACE,yBAAyB;EAC3B;EACA;IACE,wBAAwB;IACxB,+BAA+B;EACjC;EACA;IACE,0BAA0B;IAC1B,+BAA+B;EACjC;EACA;IACE,0BAA0B;IAC1B,yBAAyB;EAC3B;AACF","sourcesContent":[":root {\r\n  --opacity-cell-text: 0;\r\n  --hover-invert: 0.2;\r\n  --body-bacground: rgb(230, 255, 230);\r\n  --blocks-background: rgb(231, 255, 255);\r\n  --cell-background: rgb(240, 240, 240);\r\n  --cell-background-fill: rgb(0, 0, 0);\r\n  --cell-border-color: rgb(200, 200, 200);\r\n  --border-color: rgb(0, 0, 0);\r\n  --score-lastgame: rgb(165, 245, 140);\r\n  --common-text-color: rgb(0, 0, 0);\r\n  --score-shadow: rgb(125, 125, 125);\r\n  --color-warning: 255, 80, 80;\r\n  --color-warning-shadow: 0, 0, 0;\r\n  --border-radius: 0.2rem;\r\n  --btn-icon-hover: rgba(90, 0, 255, 1);\r\n  --container-width: clamp(1rem, 100%, 25rem);\r\n  --btn-disabled-border: rgb(170, 170, 170);\r\n\r\n  --notice-background: rgba(90, 0, 255);\r\n  --notice-text-color: rgb(255, 255, 255);\r\n  --notice-background-error: rgba(255, 174, 0);\r\n  --notice-text-color-error: rgb(0, 0, 0);\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100dvh;\r\n}\r\n\r\n.body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding: 1rem;\r\n\r\n  height: 100%;\r\n\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  color: var(--common-text-color);;\r\n  background-color: var(--body-bacground);\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n\r\n  flex: 1 0 auto;\r\n}\r\n\r\n.button-container {\r\n  container-name: buttons;\r\n  container-type: inline-size;\r\n\r\n  display: flex;\r\n  flex: 1 0 2rem;\r\n  height: 100%;\r\n}\r\n\r\n.button {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: clamp(5px, 5%, 10px);\r\n\r\n  transition-duration: 200ms;\r\n  user-select: none;\r\n  color: var(--common-text-color);\r\n  color: inherit;\r\n  padding: clamp(4px, 1%, 8px) clamp(5px, 1%, 10px);\r\n  border: 2px solid var(--border-color);\r\n  border-radius: 0.3rem;\r\n  background-color: var(--blocks-background);\r\n  font-weight: bold;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\r\n  & svg {\r\n    width: 1.5rem;\r\n    height: auto;\r\n  }\r\n}\r\n\r\n\r\n\r\n.gameover {\r\n  pointer-events: none;\r\n  filter: blur(1px) opacity(0.8);\r\n}\r\n\r\n.gameover~footer button[data-role=\"cavein\"],\r\n.gameover~footer button[data-role=\"save\"],\r\n.button_disabled button {\r\n  color: var(--btn-disabled-border);\r\n  pointer-events: none;\r\n  border: 2px solid var(--btn-disabled-border);\r\n  border-radius: 0.3rem;\r\n\r\n  & svg {\r\n    fill: var(--btn-disabled-border);\r\n  }\r\n}\r\n\r\n@media (hover: hover) {\r\n  .button:hover {\r\n    cursor: pointer;\r\n    filter: brightness(1.2);\r\n\r\n    & svg {\r\n      fill: var(--btn-icon-hover);\r\n    }\r\n  }\r\n}\r\n\r\n@container buttons (max-width: 110px) {\r\n  .button {\r\n    & span {\r\n      display: none;\r\n    }\r\n\r\n    & svg {\r\n      width: 2rem;\r\n    }\r\n  }\r\n}\r\n\r\n.animation {\r\n    animation-name: roll;\r\n    animation-duration: 5s;\r\n    animation-iteration-count: 1;\r\n    animation-fill-mode: none;\r\n}\r\n\r\n@keyframes roll {\r\n  0% {\r\n    fill: var(--border-color);\r\n  }\r\n  20% {\r\n    transform: rotateY(0deg);\r\n    fill: rgb(var(--color-warning));\r\n  }\r\n  80% {\r\n    transform: rotateY(360deg);\r\n    fill: rgb(var(--color-warning));\r\n  }\r\n  100% {\r\n    transform: rotateY(360deg);\r\n    fill: var(--border-color);\r\n  }\r\n}"],"sourceRoot":""}]);
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
      'cell-background-fill': 'rgb(0, 0, 0)',
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
/* harmony import */ var _sound_win_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sound/win.mp3 */ "./src/components/plotContainer/sound/win.mp3");
/* harmony import */ var _utils_gameRecord__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/gameRecord */ "./src/utils/gameRecord.js");
/* harmony import */ var _score_score__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../score/score */ "./src/components/score/score.js");
/* harmony import */ var _renderDesk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./renderDesk */ "./src/components/plotContainer/renderDesk.js");




// import { parseTimer, startTimer } from '../timer/timer';







const sndFillCell = new Audio(_sound_soundFillCell_mp3__WEBPACK_IMPORTED_MODULE_4__);
const sndFillCross = new Audio(_sound_soundFillCross_mp3__WEBPACK_IMPORTED_MODULE_5__);
const sndClear = new Audio(_sound_soundClear_mp3__WEBPACK_IMPORTED_MODULE_6__);
const sndWin = new Audio(_sound_win_mp3__WEBPACK_IMPORTED_MODULE_7__);
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
    const cellState = clickedCell.state;
    if (Number.isFinite(cellState)) {
      markX(clickedCell, index, false);
      return;
    }

    checkGameStart();
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
    const cellState = clickedCell.state;
    if (Number.isFinite(cellState)) {
      markX(clickedCell, index);
      return;
    }

    checkGameStart();
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
  (0,_renderDesk__WEBPACK_IMPORTED_MODULE_10__.updateDesk)();
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
  sndWin.play();
  const msg = `Great! You have solved the nonogram in ${_state_state__WEBPACK_IMPORTED_MODULE_1__["default"].game.timer} seconds!`;
  // const msg = `Great! You have solved the nonogram in ${parseTimer(
  //   state.game.timer
  // )} seconds!`;
  (0,_utils_gameRecord__WEBPACK_IMPORTED_MODULE_8__.saveRecords)();
  (0,_score_score__WEBPACK_IMPORTED_MODULE_9__.updateScore)(msg);
  _state_state__WEBPACK_IMPORTED_MODULE_1__["default"].html.score.classList.add('score_show');

  // state.game.timer = 0;
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

module.exports = __webpack_require__.p + "262d62d92898a123d982.mp3";

/***/ }),

/***/ "./src/components/plotContainer/sound/soundFillCell.mp3":
/*!**************************************************************!*\
  !*** ./src/components/plotContainer/sound/soundFillCell.mp3 ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "540fda44b8228f68acd7.mp3";

/***/ }),

/***/ "./src/components/plotContainer/sound/soundFillCross.mp3":
/*!***************************************************************!*\
  !*** ./src/components/plotContainer/sound/soundFillCross.mp3 ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cd79eecd33d93b6c351a.mp3";

/***/ }),

/***/ "./src/components/plotContainer/sound/win.mp3":
/*!****************************************************!*\
  !*** ./src/components/plotContainer/sound/win.mp3 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44bc080a34d1704bc4c8.mp3";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxXQUFXLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFVBQVUsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLFVBQVUsVUFBVSxLQUFLLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGNBQWMsTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxhQUFhLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sZ0NBQWdDLDZCQUE2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QUNmO0FBQ3FCO0FBQ2xCO0FBQ0Q7QUFDRDtBQUNtQjtBQUNSO0FBQ1o7QUFDRjtBQUNjO0FBQzVEO0FBQ0E7QUFDQSxFQUFFLDREQUFTO0FBQ1gsRUFBRSxvREFBSyxhQUFhLGdFQUFhLEdBQUcsMEJBQTBCO0FBQzlELEVBQUUsb0RBQUssa0JBQWtCLG1GQUFhO0FBQ3RDLEVBQUUsb0RBQUssa0JBQWtCLG1GQUFhO0FBQ3RDLEVBQUUsb0RBQUs7QUFDUCxTQUFTLG9EQUFLO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNFQUFNLElBQUksOERBQUssWUFBWSxxRUFBTSxJQUFJLCtEQUFLO0FBQy9ELGdGQUFVO0FBQ1YsZ0VBQWEsQ0FBQyxvREFBSyxrQkFBa0Isb0RBQUs7QUFDMUMsMEVBQXVCO0FBQ3ZCLG9DQUFvQywyREFBWTtBQUNoRCwrREFBVztBQUNYLDBFQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9jYXZlaW4vYnRuQ2F2ZWluLmNzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2xvYWQvYnRuTG9hZC5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9tb2RlL2J0blN3aXRjaE1vZGUuY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvcmFuZG9tL2J0blJhbmRvbS5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9yZXNldC9idG5SZXNldC5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9zYXZlL2J0blNhdmUuY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9nYW1lU2VsZWN0b3IvZ2FtZVNlbGVjdG9yLmNzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvbXV0ZVNvdW5kL211dGVTb3VuZC5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3NjaGVtZVNlbGVjdG9yL3NjaGVtZVNlbGVjdG9yLmNzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9ub3RpY2Uvc2hvd05vdGljZS5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvcGxvdENvbnRhaW5lci9jZWxsL2NlbGwuY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvcGxvdENvbnRhaW5lci5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvc2NvcmUvc2NvcmUuY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3RpbWVyL3RpbWVyLmNzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvY2F2ZWluL2J0bkNhdmVpbi5jc3M/NWNkOSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2xvYWQvYnRuTG9hZC5jc3M/MTVhMyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL21vZGUvYnRuU3dpdGNoTW9kZS5jc3M/ODE5OSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL3JhbmRvbS9idG5SYW5kb20uY3NzPzQxYWEiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9yZXNldC9idG5SZXNldC5jc3M/Njc0MCIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL3NhdmUvYnRuU2F2ZS5jc3M/MDNmOSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNzcz9iNzg5Iiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9nYW1lU2VsZWN0b3IvZ2FtZVNlbGVjdG9yLmNzcz9jMzMzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY3NzP2Y3ZmEiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL211dGVTb3VuZC9tdXRlU291bmQuY3NzP2RkYjgiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3NjaGVtZVNlbGVjdG9yL3NjaGVtZVNlbGVjdG9yLmNzcz82N2ZlIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL25vdGljZS9zaG93Tm90aWNlLmNzcz84MGIyIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvY2VsbC9jZWxsLmNzcz8yZDg3Iiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvcGxvdENvbnRhaW5lci5jc3M/NWM5ZCIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9zY29yZS9zY29yZS5jc3M/ZmVhZSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy90aW1lci90aW1lci5jc3M/YThlOSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL25vbm9ncmFtcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2Fzc2V0cy9zY2hlbWVzL2NvbG9yU2NoZW1lcy5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2NhdmVpbi9idG5DYXZlaW4uanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9sb2FkL2J0bkxvYWQuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9tb2RlL2J0blN3aXRjaE1vZGUuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9yYW5kb20vYnRuUmFuZG9tLi5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL3Jlc2V0L2J0blJlc2V0LmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvc2F2ZS9idG5TYXZlLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2dhbWVTZWxlY3Rvci9nYW1lU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvbXV0ZVNvdW5kL211dGVTb3VuZC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvc2NoZW1lU2VsZWN0b3Ivc2NoZW1lU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvbm90aWNlL3Nob3dOb3RpY2UuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvcGxvdENvbnRhaW5lci9jZWxsL25ld0NlbGwuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvcGxvdENvbnRhaW5lci9wbG90Q29udGFpbmVyLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvcmVuZGVyRGVzay5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9zY29yZS9zY29yZS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy90aW1lci90aW1lci5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvc3RhdGUvaW5pdFN0YXRlLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvdXRpbHMvYW5pbWF0aW9uLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9jcmVhdGVOb2RlLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9jcmVhdGVPcHRpb25zLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9nYW1lUmVjb3JkLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9nZXRQbG90LmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL3V0aWxzL3JvdGF0ZU1hdHJpeC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvdXRpbHMvc2hvd1dlbGNvbWUuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL3V0aWxzL3dpbmRvd0hhbmRsZS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25vbm9ncmFtcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL25vbm9ncmFtcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5idG4tc3dpdGNoLWNvbnRhaW5lciB7XHJcbiAgY29udGFpbmVyLW5hbWU6IGJ0bi1zd2l0Y2g7XHJcbiAgY29udGFpbmVyLXR5cGU6IGlubGluZS1zaXplO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgLyogbWFyZ2luOiAwIGF1dG87ICovXHJcblxyXG4gICYgc3BhbiB7XHJcbiAgICAgIGZsZXg6IDEgMSA2MCU7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmIHN2ZyB7XHJcbiAgICBmbGV4OiAxIDEgMjAlO1xyXG4gIH1cclxufVxyXG5cclxuQGNvbnRhaW5lciBidG4tc3dpdGNoIChtaW4td2lkdGg6IDEwcmVtKSB7XHJcbiAgLmJ0bi1zd2l0Y2gtY29udGFpbmVyIHtcclxuICAgICYgc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxuICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvbW9kZS9idG5Td2l0Y2hNb2RlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQiwyQkFBMkI7O0VBRTNCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7O0VBRVgsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7O0VBRXBCO01BQ0ksYUFBYTtNQUNiLGFBQWE7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYnRuLXN3aXRjaC1jb250YWluZXIge1xcclxcbiAgY29udGFpbmVyLW5hbWU6IGJ0bi1zd2l0Y2g7XFxyXFxuICBjb250YWluZXItdHlwZTogaW5saW5lLXNpemU7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcblxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cXHJcXG5cXHJcXG4gICYgc3BhbiB7XFxyXFxuICAgICAgZmxleDogMSAxIDYwJTtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiBzdmcge1xcclxcbiAgICBmbGV4OiAxIDEgMjAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AY29udGFpbmVyIGJ0bi1zd2l0Y2ggKG1pbi13aWR0aDogMTByZW0pIHtcXHJcXG4gIC5idG4tc3dpdGNoLWNvbnRhaW5lciB7XFxyXFxuICAgICYgc3BhbiB7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogY2xhbXAoMzIwcHgsIDEwMCUsIDEwMjRweCk7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IGNsYW1wKDVweCwgMiUsIDIwcHgpO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzMjBweCwgMTAwJSwgMTAyNHB4KTtcXHJcXG4gIGZsZXg6IDAgMCBhdXRvO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiBjbGFtcCg1cHgsIDIlLCAyMHB4KTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29udGFpbmVyLWdhbWUtc2VsZWN0IHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICB3aWR0aDogdmFyKC0tY29udGFpbmVyLXdpZHRoKTtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uZ2FtZS1zZWxlY3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5nYW1lLXNlbGVjdF9maWVsZHNldCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGdhcDogMC4yNXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG5cclxuICAmIC5maWVsZHNldF9sYWJlbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MXJlbTtcclxuICB9XHJcblxyXG4gICYgLmZpZWxkc2V0X2xlZ2VuZCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICB9XHJcblxyXG4gICYgaW5wdXQge1xyXG4gICAgYWNjZW50LWNvbG9yOiB2YXIoLS1idG4taWNvbi1ob3Zlcik7XHJcbiAgfVxyXG59XHJcblxyXG4uZ2FtZS1zZWxlY3Rfc2VsZWN0b3Ige1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogdmFyKC0tY29tbW9uLXRleHQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcclxuICAuZ2FtZS1zZWxlY3RfZmllbGRzZXQge1xyXG4gICAgJj4gaW5wdXQ6aG92ZXIsXHJcbiAgICAmPiBsYWJlbDpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgLmdhbWUtc2VsZWN0X3NlbGVjdG9yOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9nYW1lU2VsZWN0b3IvZ2FtZVNlbGVjdG9yLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixxQ0FBcUM7RUFDckMsbUNBQW1DOztFQUVuQztJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUNBQW1DO0VBQ3JDO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFO0lBQ0U7O01BRUUsZUFBZTtJQUNqQjtFQUNGO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lci1nYW1lLXNlbGVjdCB7XFxyXFxuICBmbGV4OiAwIDAgYXV0bztcXHJcXG4gIHdpZHRoOiB2YXIoLS1jb250YWluZXItd2lkdGgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtc2VsZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5nYW1lLXNlbGVjdF9maWVsZHNldCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBnYXA6IDAuMjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG5cXHJcXG4gICYgLmZpZWxkc2V0X2xhYmVsIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIC5maWVsZHNldF9sZWdlbmQge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiBpbnB1dCB7XFxyXFxuICAgIGFjY2VudC1jb2xvcjogdmFyKC0tYnRuLWljb24taG92ZXIpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1zZWxlY3Rfc2VsZWN0b3Ige1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbW1vbi10ZXh0LWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXHJcXG4gIC5nYW1lLXNlbGVjdF9maWVsZHNldCB7XFxyXFxuICAgICY+IGlucHV0OmhvdmVyLFxcclxcbiAgICAmPiBsYWJlbDpob3ZlciB7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuZ2FtZS1zZWxlY3Rfc2VsZWN0b3I6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcblxyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWdhbWUtb3B0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMS41cmVtO1xyXG5cclxuICB3aWR0aDogdmFyKC0tY29udGFpbmVyLXdpZHRoKTtcclxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFdBQVc7RUFDWCxzQkFBc0I7O0VBRXRCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7O0VBRVgsNkJBQTZCO0VBQzdCLHNCQUFzQjs7RUFFdEIsbUNBQW1DO0VBQ25DLHFDQUFxQztBQUN2Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXg6IDAgMCBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcclxcblxcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZ2FtZS1vcHRpb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG5cXHJcXG4gIHdpZHRoOiB2YXIoLS1jb250YWluZXItd2lkdGgpO1xcclxcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXHJcXG5cXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29udGFpbmVyLW11dGUge1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcclxuXHJcbiAgJiBzdmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmaWxsOiB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcclxuICAuY29udGFpbmVyLW11dGU6aG92ZXIge1xyXG4gICAgJiBzdmcge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZpbGw6IHZhcigtLWJ0bi1pY29uLWhvdmVyKTtcclxuICAgIH1cclxuICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tdXRlU291bmQvbXV0ZVNvdW5kLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQTBCOztFQUUxQjtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFO01BQ0UsZUFBZTtNQUNmLDJCQUEyQjtJQUM3QjtFQUNGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lci1tdXRlIHtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxyXFxuXFxyXFxuICAmIHN2ZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZpbGw6IHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxyXFxuICAuY29udGFpbmVyLW11dGU6aG92ZXIge1xcclxcbiAgICAmIHN2ZyB7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIGZpbGw6IHZhcigtLWJ0bi1pY29uLWhvdmVyKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zY2hlbWUtc2VsZWN0IHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICBjb2xvcjogdmFyKC0tY29tbW9uLXRleHQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcclxuICAuc2NoZW1lLXNlbGVjdDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvc2NoZW1lU2VsZWN0b3Ivc2NoZW1lU2VsZWN0b3IuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNjaGVtZS1zZWxlY3Qge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb21tb24tdGV4dC1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibG9ja3MtYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxyXFxuICAuc2NoZW1lLXNlbGVjdDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubm90aWNlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG5cclxuICB3aWR0aDogY2xhbXAoNXJlbSwgMTAwdncsIDYwcmVtKTtcclxuICBtaW4taGVpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuXHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1ub3RpY2UtdGV4dC1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90aWNlLWJhY2tncm91bmQpO1xyXG5cclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuM3JlbTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xyXG5cclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG59XHJcblxyXG4ubm90aWNlLWNvbnRhaW5lcl92aXNhYmxlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG59XHJcblxyXG4ubm90aWNlX2Vycm9yIHtcclxuICBjb2xvcjogdmFyKC0tbm90aWNlLXRleHQtY29sb3ItZXJyb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGljZS1iYWNrZ3JvdW5kLWVycm9yKTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvbm90aWNlL3Nob3dOb3RpY2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTiw0QkFBNEI7O0VBRTVCLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsa0JBQWtCOztFQUVsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQiwwQ0FBMEM7O0VBRTFDLHFDQUFxQztFQUNyQyxpQ0FBaUM7RUFDakMsa0NBQWtDOztFQUVsQyw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxnREFBZ0Q7QUFDbERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5vdGljZS1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXHJcXG5cXHJcXG4gIHdpZHRoOiBjbGFtcCg1cmVtLCAxMDB2dywgNjByZW0pO1xcclxcbiAgbWluLWhlaWdodDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHZhcigtLW5vdGljZS10ZXh0LWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGljZS1iYWNrZ3JvdW5kKTtcXHJcXG5cXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjNyZW07XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxyXFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5ub3RpY2UtY29udGFpbmVyX3Zpc2FibGUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGljZV9lcnJvciB7XFxyXFxuICBjb2xvcjogdmFyKC0tbm90aWNlLXRleHQtY29sb3ItZXJyb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90aWNlLWJhY2tncm91bmQtZXJyb3IpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jZWxsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLmNlbGxbcm9sZT1cImdhbWVcIl0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtYmFja2dyb3VuZCk7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tb3BhY2l0eS1jZWxsLXRleHQpKTtcclxuICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tY2VsbC1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4uY2VsbF9maWxsW3JvbGU9XCJnYW1lXCJdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWJhY2tncm91bmQtZmlsbCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2VsbC1iYWNrZ3JvdW5kLWZpbGwpO1xyXG59XHJcblxyXG4uY2VsbFtyb2xlPVwiZW1wdHlcIl0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcclxuICBncmlkLXJvdzogMSAvIHNwYW4gdmFyKC0tcm93LWNvdW50KTtcclxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gdmFyKC0tY29sdW1uLWNvdW50KTtcclxufVxyXG5cclxuLmNlbGxbcm93XSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5jZWxsW2ZpcnN0LXJvd10ge1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4uY2VsbFtjb2xdIHtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4uY2VsbFtmaXJzdC1jb2xdIHtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5jZWxsX2NoZWNrZWRbcm9sZT1cImdhbWVcIl0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNlbGxfY2hlY2tlZFtyb2xlPVwiZ2FtZVwiXTo6YWZ0ZXIsXHJcbi5jZWxsX2NoZWNrZWRbcm9sZT1cImdhbWVcIl06OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMjAlO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGluc2V0OiAwO1xyXG4gIHRvcDogNDUlO1xyXG4gIGxlZnQ6IC0xMCU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNlbGxfY2hlY2tlZFtyb2xlPVwiZ2FtZVwiXTo6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVooLTQ1ZGVnKTtcclxufVxyXG5cclxuQG1lZGlhIChob3ZlcjogaG92ZXIpICB7XHJcbi5jZWxsW3JvbGU9XCJnYW1lXCJdOmhvdmVyLFxyXG4uY2VsbFtyb2xlPVwiY2x1ZVwiXTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4uY2VsbFtyb2xlPVwiZ2FtZVwiXTpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGludmVydCh2YXIoLS1ob3Zlci1pbnZlcnQpKTtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9wbG90Q29udGFpbmVyL2NlbGwvY2VsbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsaUJBQWlCO0VBQ2pCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHdDQUF3QztFQUN4Qyw4Q0FBOEM7RUFDOUMsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxtQ0FBbUM7RUFDbkMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gsUUFBUTtFQUNSLFFBQVE7RUFDUixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtBQUNBOztJQUVJLGVBQWU7RUFDakI7QUFDRjtJQUNJLG1DQUFtQztFQUNyQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jZWxsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxbcm9sZT1cXFwiZ2FtZVxcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtYmFja2dyb3VuZCk7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS1vcGFjaXR5LWNlbGwtdGV4dCkpO1xcclxcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWNlbGwtYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfZmlsbFtyb2xlPVxcXCJnYW1lXFxcIl0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1iYWNrZ3JvdW5kLWZpbGwpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2VsbC1iYWNrZ3JvdW5kLWZpbGwpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbFtyb2xlPVxcXCJlbXB0eVxcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcXHJcXG4gIGdyaWQtcm93OiAxIC8gc3BhbiB2YXIoLS1yb3ctY291bnQpO1xcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIHZhcigtLWNvbHVtbi1jb3VudCk7XFxyXFxufVxcclxcblxcclxcbi5jZWxsW3Jvd10ge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsW2ZpcnN0LXJvd10ge1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsW2NvbF0ge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxbZmlyc3QtY29sXSB7XFxyXFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsX2NoZWNrZWRbcm9sZT1cXFwiZ2FtZVxcXCJdIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfY2hlY2tlZFtyb2xlPVxcXCJnYW1lXFxcIl06OmFmdGVyLFxcclxcbi5jZWxsX2NoZWNrZWRbcm9sZT1cXFwiZ2FtZVxcXCJdOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMjAlO1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxuICBpbnNldDogMDtcXHJcXG4gIHRvcDogNDUlO1xcclxcbiAgbGVmdDogLTEwJTtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfY2hlY2tlZFtyb2xlPVxcXCJnYW1lXFxcIl06OmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZVooLTQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpICB7XFxyXFxuLmNlbGxbcm9sZT1cXFwiZ2FtZVxcXCJdOmhvdmVyLFxcclxcbi5jZWxsW3JvbGU9XFxcImNsdWVcXFwiXTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4uY2VsbFtyb2xlPVxcXCJnYW1lXFxcIl06aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGludmVydCh2YXIoLS1ob3Zlci1pbnZlcnQpKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAgIC5nYW1lLWNvbnRhaW5lciB7XHJcbiAgICAtLWNvbHVtbnMtY291bnQ6IDIwO1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1jb2x1bW5zLWNvdW50KSwgMWZyKTtcclxuXHJcbiAgICBmb250LXNpemU6IGNsYW1wKDE0cHgsIDMwMHB4IC8gdmFyKC0tY29sdW1ucy1jb3VudCksIDIwcHgpO1xyXG5cclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xyXG4gIH1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9wbG90Q29udGFpbmVyL3Bsb3RDb250YWluZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJFQUFFO0lBQ0UsbUJBQW1COztJQUVuQixhQUFhO0lBQ2Isd0RBQXdEOztJQUV4RCwwREFBMEQ7O0lBRTFELHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9DQUFvQztFQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIgIC5nYW1lLWNvbnRhaW5lciB7XFxyXFxuICAgIC0tY29sdW1ucy1jb3VudDogMjA7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWNvbHVtbnMtY291bnQpLCAxZnIpO1xcclxcblxcclxcbiAgICBmb250LXNpemU6IGNsYW1wKDE0cHgsIDMwMHB4IC8gdmFyKC0tY29sdW1ucy1jb3VudCksIDIwcHgpO1xcclxcblxcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcXHJcXG4gIH1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5kaWFsb2cge1xyXG4gIGxlZnQ6IC0xMHJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5kaWFsb2c6aGFzKGRpdi5zY29yZV9zaG93KSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwZHZoO1xyXG4gIGluc2V0OiAwO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIC0tdyA6IGNsYW1wKDEwcmVtLCA5MCUsIDM1cmVtKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMjtcclxuICB0b3A6IDJyZW07XHJcbiAgbGVmdDogMTAwJTtcclxuICB3aWR0aDogdmFyKC0tdyk7XHJcbiAgbWluLWhlaWdodDogMTByZW07XHJcblxyXG4gIGNvbG9yOiB2YXIoLS1jb21tb24tdGV4dC1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMC41cmVtIDAuNXJlbSAwLjVyZW0gdmFyKC0tc2NvcmUtc2hhZG93KSk7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMTAwbXM7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XHJcbn1cclxuXHJcbi5jb250YWluZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ+KsjCc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAxcmVtO1xyXG4gIGxlZnQ6IC0yLjFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogM3JlbTtcclxuXHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG5cclxuQG1lZGlhIChob3Zlcikge1xyXG4gIC5jb250YWluZXI6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLnNjb3JlX2gxIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zY29yZV9zaG93IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbn1cclxuXHJcbi5jb250YWluZXJfX3JlY29yZHMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyIDJmcjtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgZ2FwOiAwLjJyZW07XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDFyZW07XHJcblxyXG4gIGJvcmRlcjogMXBzIHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG5cclxuICAmIGRpdjpudGgtY2hpbGQoLW4rMykge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAmIGRpdjpudGgtY2hpbGQoM24tMSkge1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmIGRpdjpudGgtY2hpbGQoM24pIHtcclxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIH1cclxufVxyXG5cclxuLnJlY29yZF9sYXN0LWdhbWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjb3JlLWxhc3RnYW1lKTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvc2NvcmUvc2NvcmUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxRQUFROztFQUVSLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjs7RUFFakIsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQiwwQ0FBMEM7RUFDMUMscUNBQXFDO0VBQ3JDLDZEQUE2RDtFQUM3RCx1QkFBdUI7RUFDdkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZOztFQUVaLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsMENBQTBDO0VBQzFDLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osV0FBVzs7RUFFWCxnQkFBZ0I7O0VBRWhCLHFDQUFxQztFQUNyQyxxQkFBcUI7O0VBRXJCO0lBQ0UsNENBQTRDO0VBQzlDOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmRpYWxvZyB7XFxyXFxuICBsZWZ0OiAtMTByZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2c6aGFzKGRpdi5zY29yZV9zaG93KSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDBkdmg7XFxyXFxuICBpbnNldDogMDtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAtLXcgOiBjbGFtcCgxMHJlbSwgOTAlLCAzNXJlbSk7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgdG9wOiAycmVtO1xcclxcbiAgbGVmdDogMTAwJTtcXHJcXG4gIHdpZHRoOiB2YXIoLS13KTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xcclxcblxcclxcbiAgY29sb3I6IHZhcigtLWNvbW1vbi10ZXh0LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuNXJlbSAwLjVyZW0gMC41cmVtIHZhcigtLXNjb3JlLXNoYWRvdykpO1xcclxcbiAgdHJhbnNpdGlvbi1kZWxheTogMTAwbXM7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lcjo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICfirIwnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHRvcDogMXJlbTtcXHJcXG4gIGxlZnQ6IC0yLjFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibG9ja3MtYmFja2dyb3VuZCk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChob3Zlcikge1xcclxcbiAgLmNvbnRhaW5lcjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlX2gxIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zY29yZV9zaG93IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyX19yZWNvcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgMmZyO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbiAgZ2FwOiAwLjJyZW07XFxyXFxuXFxyXFxuICBtaW4taGVpZ2h0OiAxcmVtO1xcclxcblxcclxcbiAgYm9yZGVyOiAxcHMgc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG5cXHJcXG4gICYgZGl2Om50aC1jaGlsZCgtbiszKSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiBkaXY6bnRoLWNoaWxkKDNuLTEpIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIGRpdjpudGgtY2hpbGQoM24pIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5yZWNvcmRfbGFzdC1nYW1lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjb3JlLWxhc3RnYW1lKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudGltZXIge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy90aW1lci90aW1lci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRpbWVyIHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAtLW9wYWNpdHktY2VsbC10ZXh0OiAwO1xyXG4gIC0taG92ZXItaW52ZXJ0OiAwLjI7XHJcbiAgLS1ib2R5LWJhY2dyb3VuZDogcmdiKDIzMCwgMjU1LCAyMzApO1xyXG4gIC0tYmxvY2tzLWJhY2tncm91bmQ6IHJnYigyMzEsIDI1NSwgMjU1KTtcclxuICAtLWNlbGwtYmFja2dyb3VuZDogcmdiKDI0MCwgMjQwLCAyNDApO1xyXG4gIC0tY2VsbC1iYWNrZ3JvdW5kLWZpbGw6IHJnYigwLCAwLCAwKTtcclxuICAtLWNlbGwtYm9yZGVyLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XHJcbiAgLS1ib3JkZXItY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAtLXNjb3JlLWxhc3RnYW1lOiByZ2IoMTY1LCAyNDUsIDE0MCk7XHJcbiAgLS1jb21tb24tdGV4dC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIC0tc2NvcmUtc2hhZG93OiByZ2IoMTI1LCAxMjUsIDEyNSk7XHJcbiAgLS1jb2xvci13YXJuaW5nOiAyNTUsIDgwLCA4MDtcclxuICAtLWNvbG9yLXdhcm5pbmctc2hhZG93OiAwLCAwLCAwO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIC0tYnRuLWljb24taG92ZXI6IHJnYmEoOTAsIDAsIDI1NSwgMSk7XHJcbiAgLS1jb250YWluZXItd2lkdGg6IGNsYW1wKDFyZW0sIDEwMCUsIDI1cmVtKTtcclxuICAtLWJ0bi1kaXNhYmxlZC1ib3JkZXI6IHJnYigxNzAsIDE3MCwgMTcwKTtcclxuXHJcbiAgLS1ub3RpY2UtYmFja2dyb3VuZDogcmdiYSg5MCwgMCwgMjU1KTtcclxuICAtLW5vdGljZS10ZXh0LWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgLS1ub3RpY2UtYmFja2dyb3VuZC1lcnJvcjogcmdiYSgyNTUsIDE3NCwgMCk7XHJcbiAgLS1ub3RpY2UtdGV4dC1jb2xvci1lcnJvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4qIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sIHtcclxuICBoZWlnaHQ6IDEwMGR2aDtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB2YXIoLS1jb21tb24tdGV4dC1jb2xvcik7O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFjZ3JvdW5kKTtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuNXJlbTtcclxuXHJcbiAgZmxleDogMSAwIGF1dG87XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICBjb250YWluZXItbmFtZTogYnV0dG9ucztcclxuICBjb250YWluZXItdHlwZTogaW5saW5lLXNpemU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMSAwIDJyZW07XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogY2xhbXAoNXB4LCA1JSwgMTBweCk7XHJcblxyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1jb21tb24tdGV4dC1jb2xvcik7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgcGFkZGluZzogY2xhbXAoNHB4LCAxJSwgOHB4KSBjbGFtcCg1cHgsIDElLCAxMHB4KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibG9ja3MtYmFja2dyb3VuZCk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4gICYgc3ZnIHtcclxuICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi5nYW1lb3ZlciB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgZmlsdGVyOiBibHVyKDFweCkgb3BhY2l0eSgwLjgpO1xyXG59XHJcblxyXG4uZ2FtZW92ZXJ+Zm9vdGVyIGJ1dHRvbltkYXRhLXJvbGU9XCJjYXZlaW5cIl0sXHJcbi5nYW1lb3Zlcn5mb290ZXIgYnV0dG9uW2RhdGEtcm9sZT1cInNhdmVcIl0sXHJcbi5idXR0b25fZGlzYWJsZWQgYnV0dG9uIHtcclxuICBjb2xvcjogdmFyKC0tYnRuLWRpc2FibGVkLWJvcmRlcik7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYnRuLWRpc2FibGVkLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG5cclxuICAmIHN2ZyB7XHJcbiAgICBmaWxsOiB2YXIoLS1idG4tZGlzYWJsZWQtYm9yZGVyKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XHJcbiAgLmJ1dHRvbjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuXHJcbiAgICAmIHN2ZyB7XHJcbiAgICAgIGZpbGw6IHZhcigtLWJ0bi1pY29uLWhvdmVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBjb250YWluZXIgYnV0dG9ucyAobWF4LXdpZHRoOiAxMTBweCkge1xyXG4gIC5idXR0b24ge1xyXG4gICAgJiBzcGFuIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmIHN2ZyB7XHJcbiAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFuaW1hdGlvbiB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogcm9sbDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogbm9uZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb2xsIHtcclxuICAwJSB7XHJcbiAgICBmaWxsOiB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgZmlsbDogcmdiKHZhcigtLWNvbG9yLXdhcm5pbmcpKTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xyXG4gICAgZmlsbDogcmdiKHZhcigtLWNvbG9yLXdhcm5pbmcpKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcclxuICAgIGZpbGw6IHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLHVDQUF1QztFQUN2QyxxQ0FBcUM7RUFDckMsb0NBQW9DO0VBQ3BDLHVDQUF1QztFQUN2Qyw0QkFBNEI7RUFDNUIsb0NBQW9DO0VBQ3BDLGlDQUFpQztFQUNqQyxrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDLDJDQUEyQztFQUMzQyx5Q0FBeUM7O0VBRXpDLHFDQUFxQztFQUNyQyx1Q0FBdUM7RUFDdkMsNENBQTRDO0VBQzVDLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhOztFQUViLFlBQVk7O0VBRVosd0VBQXdFO0VBQ3hFLCtCQUErQjtFQUMvQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7O0VBRVgsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwyQkFBMkI7O0VBRTNCLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5QkFBeUI7O0VBRXpCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGNBQWM7RUFDZCxpREFBaUQ7RUFDakQscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQiwwQ0FBMEM7RUFDMUMsaUJBQWlCO0VBQ2pCLHFHQUFxRzs7RUFFckc7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkO0FBQ0Y7Ozs7QUFJQTtFQUNFLG9CQUFvQjtFQUNwQiw4QkFBOEI7QUFDaEM7O0FBRUE7OztFQUdFLGlDQUFpQztFQUNqQyxvQkFBb0I7RUFDcEIsNENBQTRDO0VBQzVDLHFCQUFxQjs7RUFFckI7SUFDRSxnQ0FBZ0M7RUFDbEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLHVCQUF1Qjs7SUFFdkI7TUFDRSwyQkFBMkI7SUFDN0I7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRTtNQUNFLGFBQWE7SUFDZjs7SUFFQTtNQUNFLFdBQVc7SUFDYjtFQUNGO0FBQ0Y7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qix5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLHlCQUF5QjtFQUMzQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tb3BhY2l0eS1jZWxsLXRleHQ6IDA7XFxyXFxuICAtLWhvdmVyLWludmVydDogMC4yO1xcclxcbiAgLS1ib2R5LWJhY2dyb3VuZDogcmdiKDIzMCwgMjU1LCAyMzApO1xcclxcbiAgLS1ibG9ja3MtYmFja2dyb3VuZDogcmdiKDIzMSwgMjU1LCAyNTUpO1xcclxcbiAgLS1jZWxsLWJhY2tncm91bmQ6IHJnYigyNDAsIDI0MCwgMjQwKTtcXHJcXG4gIC0tY2VsbC1iYWNrZ3JvdW5kLWZpbGw6IHJnYigwLCAwLCAwKTtcXHJcXG4gIC0tY2VsbC1ib3JkZXItY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcXHJcXG4gIC0tYm9yZGVyLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICAtLXNjb3JlLWxhc3RnYW1lOiByZ2IoMTY1LCAyNDUsIDE0MCk7XFxyXFxuICAtLWNvbW1vbi10ZXh0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICAtLXNjb3JlLXNoYWRvdzogcmdiKDEyNSwgMTI1LCAxMjUpO1xcclxcbiAgLS1jb2xvci13YXJuaW5nOiAyNTUsIDgwLCA4MDtcXHJcXG4gIC0tY29sb3Itd2FybmluZy1zaGFkb3c6IDAsIDAsIDA7XFxyXFxuICAtLWJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXHJcXG4gIC0tYnRuLWljb24taG92ZXI6IHJnYmEoOTAsIDAsIDI1NSwgMSk7XFxyXFxuICAtLWNvbnRhaW5lci13aWR0aDogY2xhbXAoMXJlbSwgMTAwJSwgMjVyZW0pO1xcclxcbiAgLS1idG4tZGlzYWJsZWQtYm9yZGVyOiByZ2IoMTcwLCAxNzAsIDE3MCk7XFxyXFxuXFxyXFxuICAtLW5vdGljZS1iYWNrZ3JvdW5kOiByZ2JhKDkwLCAwLCAyNTUpO1xcclxcbiAgLS1ub3RpY2UtdGV4dC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgLS1ub3RpY2UtYmFja2dyb3VuZC1lcnJvcjogcmdiYSgyNTUsIDE3NCwgMCk7XFxyXFxuICAtLW5vdGljZS10ZXh0LWNvbG9yLWVycm9yOiByZ2IoMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgaGVpZ2h0OiAxMDBkdmg7XFxyXFxufVxcclxcblxcclxcbi5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb21tb24tdGV4dC1jb2xvcik7O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iYWNncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcblxcclxcbiAgZmxleDogMSAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tY29udGFpbmVyIHtcXHJcXG4gIGNvbnRhaW5lci1uYW1lOiBidXR0b25zO1xcclxcbiAgY29udGFpbmVyLXR5cGU6IGlubGluZS1zaXplO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDEgMCAycmVtO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogY2xhbXAoNXB4LCA1JSwgMTBweCk7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbW1vbi10ZXh0LWNvbG9yKTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgcGFkZGluZzogY2xhbXAoNHB4LCAxJSwgOHB4KSBjbGFtcCg1cHgsIDElLCAxMHB4KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibG9ja3MtYmFja2dyb3VuZCk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcclxcbiAgJiBzdmcge1xcclxcbiAgICB3aWR0aDogMS41cmVtO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5nYW1lb3ZlciB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIGZpbHRlcjogYmx1cigxcHgpIG9wYWNpdHkoMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVvdmVyfmZvb3RlciBidXR0b25bZGF0YS1yb2xlPVxcXCJjYXZlaW5cXFwiXSxcXHJcXG4uZ2FtZW92ZXJ+Zm9vdGVyIGJ1dHRvbltkYXRhLXJvbGU9XFxcInNhdmVcXFwiXSxcXHJcXG4uYnV0dG9uX2Rpc2FibGVkIGJ1dHRvbiB7XFxyXFxuICBjb2xvcjogdmFyKC0tYnRuLWRpc2FibGVkLWJvcmRlcik7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJ0bi1kaXNhYmxlZC1ib3JkZXIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcblxcclxcbiAgJiBzdmcge1xcclxcbiAgICBmaWxsOiB2YXIoLS1idG4tZGlzYWJsZWQtYm9yZGVyKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXHJcXG4gIC5idXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcclxcblxcclxcbiAgICAmIHN2ZyB7XFxyXFxuICAgICAgZmlsbDogdmFyKC0tYnRuLWljb24taG92ZXIpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBjb250YWluZXIgYnV0dG9ucyAobWF4LXdpZHRoOiAxMTBweCkge1xcclxcbiAgLmJ1dHRvbiB7XFxyXFxuICAgICYgc3BhbiB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmIHN2ZyB7XFxyXFxuICAgICAgd2lkdGg6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFuaW1hdGlvbiB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiByb2xsO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJvbGwge1xcclxcbiAgMCUge1xcclxcbiAgICBmaWxsOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbiAgfVxcclxcbiAgMjAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcclxcbiAgICBmaWxsOiByZ2IodmFyKC0tY29sb3Itd2FybmluZykpO1xcclxcbiAgfVxcclxcbiAgODAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XFxyXFxuICAgIGZpbGw6IHJnYih2YXIoLS1jb2xvci13YXJuaW5nKSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XFxyXFxuICAgIGZpbGw6IHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0bkNhdmVpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0bkNhdmVpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnRuTG9hZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0bkxvYWQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0blN3aXRjaE1vZGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idG5Td2l0Y2hNb2RlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idG5SYW5kb20uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idG5SYW5kb20uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0blJlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnRuUmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0blNhdmUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idG5TYXZlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVTZWxlY3Rvci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVTZWxlY3Rvci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tdXRlU291bmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tdXRlU291bmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NjaGVtZVNlbGVjdG9yLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2NoZW1lU2VsZWN0b3IuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Nob3dOb3RpY2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaG93Tm90aWNlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jZWxsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2VsbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGxvdENvbnRhaW5lci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Bsb3RDb250YWluZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Njb3JlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2NvcmUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RpbWVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGltZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICfRhtCy0LXRgtC90LDRjycsXHJcbiAgICBuYW1lOiAnY29sb3InLFxyXG4gICAgY29sb3JzOiB7XHJcbiAgICAgICdib2R5LWJhY2dyb3VuZCc6ICdyZ2IoMjMwLCAyNTUsIDIzMCknLFxyXG4gICAgICAnYmxvY2tzLWJhY2tncm91bmQnOiAncmdiKDIzMSwgMjU1LCAyNTUpJyxcclxuICAgICAgJ2NlbGwtYmFja2dyb3VuZCc6ICdyZ2IoMjQwLCAyNDAsIDI0MCknLFxyXG4gICAgICAnY2VsbC1iYWNrZ3JvdW5kLWZpbGwnOiAncmdiKDAsIDAsIDApJyxcclxuICAgICAgJ2NlbGwtYm9yZGVyLWNvbG9yJzogJ3JnYigyMDAsIDIwMCwgMjAwKScsXHJcbiAgICAgICdib3JkZXItY29sb3InOiAncmdiKDAsIDAsIDApJyxcclxuICAgICAgJ3Njb3JlLWxhc3RnYW1lJzogJ3JnYigxNjUsIDI0NSwgMTQwKScsXHJcbiAgICAgICdjb21tb24tdGV4dC1jb2xvcic6ICdyZ2IoMCwgMCwgMCknLFxyXG4gICAgICAnaG92ZXItaW52ZXJ0JzogJzAuMicsXHJcbiAgICAgICdzY29yZS1zaGFkb3cnOiAncmdiKDEyNSwgMTI1LCAxMjUpJyxcclxuICAgICAgJ2NvbG9yLXdhcm5pbmcnOiAnMjU1LCA4MCwgODAnLFxyXG4gICAgICAnYnRuLWljb24taG92ZXInOiAncmdiYSg5MCwgMCwgMjU1LCAxKScsXHJcbiAgICAgICdidG4tZGlzYWJsZWQtYm9yZGVyJzogJ3JnYigxNzAsIDE3MCwgMTcwKScsXHJcbiAgICAgICdub3RpY2UtYmFja2dyb3VuZCc6ICdyZ2JhKDkwLCAwLCAyNTUpJyxcclxuICAgICAgJ25vdGljZS10ZXh0LWNvbG9yJzogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICAgICdub3RpY2UtYmFja2dyb3VuZC1lcnJvcic6ICdyZ2JhKDI1NSwgMTc0LCAwKScsXHJcbiAgICAgICdub3RpY2UtdGV4dC1jb2xvci1lcnJvcic6ICdyZ2IoMCwgMCwgMCknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAn0YLRkdC80L3QsNGPJyxcclxuICAgIG5hbWU6ICdkYXJrJyxcclxuICAgIGNvbG9yczoge1xyXG4gICAgICAnYm9keS1iYWNncm91bmQnOiAncmdiKDUwLCA1MCwgNTApJyxcclxuICAgICAgJ2Jsb2Nrcy1iYWNrZ3JvdW5kJzogJ3JnYig4MCwgODAsIDgwKScsXHJcbiAgICAgICdjZWxsLWJhY2tncm91bmQnOiAncmdiKDEzMCwgMTMwLCAxMzApJyxcclxuICAgICAgJ2NlbGwtYmFja2dyb3VuZC1maWxsJzogJ3JnYig2MCwgNjAsIDYwKScsXHJcbiAgICAgICdjZWxsLWJvcmRlci1jb2xvcic6ICdyZ2IoMTYwLCAxNjAsIDE2MCknLFxyXG4gICAgICAnYm9yZGVyLWNvbG9yJzogJ3JnYigxNTEsIDE1MSwgMTUxKScsXHJcbiAgICAgICdzY29yZS1sYXN0Z2FtZSc6ICdyZ2IoMzAsIDIwLCA0MCknLFxyXG4gICAgICAnY29tbW9uLXRleHQtY29sb3InOiAncmdiKDIzMCwgMjMwLCAyMzApJyxcclxuICAgICAgJ2hvdmVyLWludmVydCc6ICcwLjcnLFxyXG4gICAgICAnc2NvcmUtc2hhZG93JzogJ3JnYigwLCAwLCAwKScsXHJcbiAgICAgICdjb2xvci13YXJuaW5nJzogJzI1NSwgODAsIDgwJyxcclxuICAgICAgJ2J0bi1pY29uLWhvdmVyJzogJ3JnYmEoMTYwLCAxNjAsIDQwLCAxKScsXHJcbiAgICAgICdidG4tZGlzYWJsZWQtYm9yZGVyJzogJ3JnYigyMCwgMjAsIDIwKScsXHJcbiAgICAgICdub3RpY2UtYmFja2dyb3VuZCc6ICdyZ2JhKDQwLCAwLCAxMTApJyxcclxuICAgICAgJ25vdGljZS10ZXh0LWNvbG9yJzogJ3JnYigyMDAsIDIwMCwgMjAwKScsXHJcbiAgICAgICdub3RpY2UtYmFja2dyb3VuZC1lcnJvcic6ICdyZ2JhKDE4MCwgODAsIDgwKScsXHJcbiAgICAgICdub3RpY2UtdGV4dC1jb2xvci1lcnJvcic6ICdyZ2IoMjQwLCAyNDAsIDI0MCknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAn0YHQstC10YLQu9Cw0Y8nLFxyXG4gICAgbmFtZTogJ2xpZ2h0JyxcclxuICAgIGNvbG9yczoge1xyXG4gICAgICAnYm9keS1iYWNncm91bmQnOiAncmdiKDIzMCwgMjMwLCAyMzApJyxcclxuICAgICAgJ2Jsb2Nrcy1iYWNrZ3JvdW5kJzogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICAgICdjZWxsLWJhY2tncm91bmQnOiAncmdiKDI0MCwgMjQwLCAyNDApJyxcclxuICAgICAgJ2NlbGwtYmFja2dyb3VuZC1maWxsJzogJ3JnYig0MCwgNzAsIDEyMCknLFxyXG4gICAgICAnY2VsbC1ib3JkZXItY29sb3InOiAncmdiKDIwMCwgMjAwLCAyMDApJyxcclxuICAgICAgJ2JvcmRlci1jb2xvcic6ICdyZ2IoMTQwLCAxNDAsIDE0MCknLFxyXG4gICAgICAnc2NvcmUtbGFzdGdhbWUnOiAncmdiKDI1NSwgMjIwLCAyMjApJyxcclxuICAgICAgJ2NvbW1vbi10ZXh0LWNvbG9yJzogJ3JnYigxMDAsIDEwMCwgMTAwKScsXHJcbiAgICAgICdob3Zlci1pbnZlcnQnOiAnMC4yJyxcclxuICAgICAgJ3Njb3JlLXNoYWRvdyc6ICdyZ2IoMTUwLCAxNTAsIDE1MCknLFxyXG4gICAgICAnY29sb3Itd2FybmluZyc6ICcyNTUsIDgwLCA4MCcsXHJcbiAgICAgICdidG4taWNvbi1ob3Zlcic6ICdyZ2JhKDQwLCA3MCwgMTIwLCAxKScsXHJcbiAgICAgICdidG4tZGlzYWJsZWQtYm9yZGVyJzogJ3JnYigyMDAsIDE4MCwgMTgwKScsXHJcbiAgICAgICdub3RpY2UtYmFja2dyb3VuZCc6ICdyZ2JhKDQwLCA3MCwgMTIwKScsXHJcbiAgICAgICdub3RpY2UtYmFja2dyb3VuZC1lcnJvcic6ICdyZ2JhKDI1NSwgMTcwLCAxNzApJyxcclxuICAgICAgJ25vdGljZS10ZXh0LWNvbG9yLWVycm9yJzogJ3JnYigwLCAwLCAwKScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9zdGF0ZSc7XHJcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NyZWF0ZU5vZGUnO1xyXG5pbXBvcnQgeyBzdGFydFRpbWVyIH0gZnJvbSAnLi4vLi4vdGltZXIvdGltZXInO1xyXG5pbXBvcnQgc3ZnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9zb2x1dGlvbi5zdmcnO1xyXG5pbXBvcnQgJy4vYnRuQ2F2ZWluLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgYnRuID0gY3JlYXRlQnV0dG9uKHtcclxuICAgIHR4dDogJ1NvbHV0aW9uJyxcclxuICAgIGljb246IHN2ZyxcclxuICAgIGF0dHI6IFtbJ2RhdGEtcm9sZScsICdjYXZlaW4nXV0sXHJcbiAgfSk7XHJcbiAgYnRuLmZpcnN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDYXZlaW4pO1xyXG4gIHJldHVybiBidG47XHJcbn07XHJcblxyXG5jb25zdCBjbGlja0NhdmVpbiA9ICgpID0+IHtcclxuICBzdGF0ZS5nYW1lLnNob3dDZWxsc1ZhbHVlID0gdHJ1ZTtcclxuICBzdGF0ZS5nYW1lLmlzR2FtZVN0YXJ0ZWQgPSBmYWxzZTtcclxuICBzdGFydFRpbWVyKGZhbHNlKTtcclxuICBjb25zdCBvcGFjaXR5ID0gJzEnO1xyXG4gIHN0YXRlLmdhbWUuc2hvd0NlbGxzVmFsdWUgPSB0cnVlO1xyXG4gIHN0YXRlLmh0bWwucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1vcGFjaXR5LWNlbGwtdGV4dCcsIG9wYWNpdHkpO1xyXG4gIHN0YXRlLmh0bWwubWFpbi5jbGFzc0xpc3QuYWRkKCdnYW1lb3ZlcicpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi91dGlscy9jcmVhdGVOb2RlJztcclxuaW1wb3J0IHsgaXNTYXZlZEdhbWUsIGxvYWRTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2xvY2FsU3RvcmFnZSc7XHJcbmltcG9ydCBzdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2xvYWQuc3ZnJztcclxuaW1wb3J0ICcuL2J0bkxvYWQuY3NzJztcclxuaW1wb3J0IHN0YXRlIGZyb20gJy4uLy4uLy4uL3N0YXRlL3N0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBidG5Mb2FkID0gY3JlYXRlQnV0dG9uKHtcclxuICAgIGNsczogJ2J1dHRvbl9kaXNhYmxlZCcsXHJcbiAgICB0eHQ6ICdDb250aW51ZSBsYXN0IGdhbWUnLFxyXG4gICAgaWNvbjogc3ZnLFxyXG4gIH0pO1xyXG4gIHN0YXRlLmh0bWwuYnRuTG9hZCA9IGJ0bkxvYWQ7XHJcbiAgYnRuTG9hZC5maXJzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRTdGF0ZSk7XHJcbiAgaWYgKGlzU2F2ZWRHYW1lKCkpIHtcclxuICAgIHN0YXRlLmh0bWwuYnRuTG9hZC5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b25fZGlzYWJsZWQnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc3RhdGUuaHRtbC5idG5Mb2FkLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbl9kaXNhYmxlZCcpO1xyXG4gIH1cclxuICByZXR1cm4gYnRuTG9hZDtcclxufTtcclxuIiwiaW1wb3J0IHN0YXRlIGZyb20gJy4uLy4uLy4uL3N0YXRlL3N0YXRlJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NyZWF0ZU5vZGUnO1xyXG5pbXBvcnQgc3ZnX2Nyb3NzIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9jcm9zcy5zdmcnO1xyXG5pbXBvcnQgc3ZnX2ZpbGwgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2ZpbGwuc3ZnJztcclxuaW1wb3J0IHN2Z0JydXNoIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9icnVzaC5zdmcnO1xyXG5pbXBvcnQgJy4vYnRuU3dpdGNoTW9kZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnYnV0dG9uJyxcclxuICAgIGNsczogJ2J1dHRvbiBidG4tc3dpdGNoLWNvbnRhaW5lcicsXHJcbiAgICBhdHRyOiBbWyd0aXRsZScsICfQv9C10YDQtdC60LvRjtGH0LjRgtGMINC00LXQudGB0YLQstC40LUg0L/QviDQm9Ca0JwnXV0sXHJcbiAgfSk7XHJcbiAgY29uc3QgaWNvbiA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdzdmcnIH0pO1xyXG4gIGljb24uaW5uZXJIVE1MID0gc3ZnQnJ1c2g7XHJcbiAgY29udGFpbmVyLmFwcGVuZChpY29uKTtcclxuXHJcbiAgY29uc3Qgc3BhbiA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdzcGFuJywgdHh0OiAnc3dpdGNoIGJydXNoJyB9KTtcclxuICBjb250YWluZXIuYXBwZW5kKHNwYW4pO1xyXG5cclxuICBjb25zdCBpY29uQnJ1c2hNb2RlID0gY3JlYXRlRWxlbWVudCh7IHRhZzogJ3N2ZycgfSk7XHJcbiAgaWNvbkJydXNoTW9kZS5pbm5lckhUTUwgPSBzdmdfZmlsbDtcclxuICBzdGF0ZS5odG1sLmljb25CcnVzaE1vZGUgPSBpY29uQnJ1c2hNb2RlO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kKGljb25CcnVzaE1vZGUpO1xyXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaEJydXNoTW9kZSk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBzd2l0Y2hCcnVzaE1vZGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBicnVzaCB9ID0gc3RhdGUuZ2FtZTtcclxuXHJcbiAgc3dpdGNoIChicnVzaCkge1xyXG4gICAgY2FzZSAnZmlsbCc6XHJcbiAgICAgIHN0YXRlLmdhbWUuYnJ1c2ggPSAnY3Jvc3MnO1xyXG4gICAgICBzdGF0ZS5odG1sLmljb25CcnVzaE1vZGUuaW5uZXJIVE1MID0gc3ZnX2Nyb3NzO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2Nyb3NzJzpcclxuICAgICAgc3RhdGUuZ2FtZS5icnVzaCA9ICdmaWxsJztcclxuICAgICAgc3RhdGUuaHRtbC5pY29uQnJ1c2hNb2RlLmlubmVySFRNTCA9IHN2Z19maWxsO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9zdGF0ZSc7XHJcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NyZWF0ZU5vZGUnO1xyXG5pbXBvcnQgeyBzd2l0Y2hHYW1lIH0gZnJvbSAnLi4vLi4vaGVhZGVyL2dhbWVTZWxlY3Rvci9nYW1lU2VsZWN0b3InO1xyXG5pbXBvcnQgcmVuZGVyRGVzayBmcm9tICcuLi8uLi9wbG90Q29udGFpbmVyL3JlbmRlckRlc2snO1xyXG5pbXBvcnQgeyBzdGFydFRpbWVyIH0gZnJvbSAnLi4vLi4vdGltZXIvdGltZXInO1xyXG5pbXBvcnQgc3ZnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9yYW5kb20uc3ZnJztcclxuaW1wb3J0ICcuL2J0blJhbmRvbS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbih7IGljb246IHN2ZywgdHh0OiAnUmFuZG9tIGdhbWUnIH0pO1xyXG4gIGJ1dHRvbi5maXJzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJhbmRvbUdhbWUpO1xyXG5cclxuICByZXR1cm4gYnV0dG9uO1xyXG59O1xyXG5cclxuY29uc3QgcmFuZG9tR2FtZSA9ICgpID0+IHtcclxuICBsZXQgY291bnRHYW1lcyA9IDA7XHJcbiAgY29uc3QgeyBmaWVsZHMgfSA9IHN0YXRlO1xyXG5cclxuICBmb3IgKGNvbnN0IGZpZWxkIGluIGZpZWxkcykge1xyXG4gICAgY291bnRHYW1lcyArPSBmaWVsZHNbZmllbGRdPy5sZW5ndGggfHwgMDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJhbmRvbUlEID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGNvdW50R2FtZXMgLSAxKSk7XHJcbiAgc3RhdGUuZ2FtZS5jdXJyZW50R2FtZSA9IHJhbmRvbUlEO1xyXG4gIHJlbmRlckRlc2socmFuZG9tSUQpO1xyXG4gIHN3aXRjaEdhbWUocmFuZG9tSUQpO1xyXG4gIHN0YXRlLmdhbWUudGltZXIgPSAwO1xyXG4gIHN0YXJ0VGltZXIoZmFsc2UpO1xyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi4vLi4vLi4vc3RhdGUvc3RhdGUnO1xyXG5pbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi91dGlscy9jcmVhdGVOb2RlJztcclxuaW1wb3J0IHJlbmRlckRlc2sgZnJvbSAnLi4vLi4vcGxvdENvbnRhaW5lci9yZW5kZXJEZXNrJztcclxuaW1wb3J0IHsgc3RhcnRUaW1lciB9IGZyb20gJy4uLy4uL3RpbWVyL3RpbWVyJztcclxuaW1wb3J0IHN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvcmVzZXQuc3ZnJztcclxuaW1wb3J0ICcuL2J0blJlc2V0LmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgYnRuUmVzZXQgPSBjcmVhdGVCdXR0b24oe1xyXG4gICAgdHh0OiAnUmVzZXQgZ2FtZScsXHJcbiAgICBpY29uOiBzdmcsXHJcbiAgfSk7XHJcbiAgYnRuUmVzZXQuZmlyc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEdhbWUpO1xyXG4gIHJldHVybiBidG5SZXNldDtcclxufTtcclxuXHJcbmNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcclxuICByZW5kZXJEZXNrKHN0YXRlLmdhbWUuY3VycmVudEdhbWUpO1xyXG4gIHN0YXRlLmdhbWUudGltZXIgPSAwO1xyXG4gIGNvbnN0IG9wYWNpdHkgPSAnMCc7XHJcbiAgc3RhdGUuZ2FtZS5zaG93Q2VsbHNWYWx1ZSA9IGZhbHNlO1xyXG4gIHN0YXRlLmh0bWwucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1vcGFjaXR5LWNlbGwtdGV4dCcsIG9wYWNpdHkpO1xyXG4gIHN0YXRlLmh0bWwubWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdnYW1lb3ZlcicpO1xyXG4gIHN0YXJ0VGltZXIoZmFsc2UpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi91dGlscy9jcmVhdGVOb2RlJztcclxuaW1wb3J0IHsgc2F2ZVN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbG9jYWxTdG9yYWdlJztcclxuaW1wb3J0IHN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvYm9va21hcmtzLnN2Zyc7XHJcbmltcG9ydCAnLi9idG5TYXZlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgYnRuU2F2ZSA9IGNyZWF0ZUJ1dHRvbih7XHJcbiAgICB0eHQ6ICdTYXZlIGdhbWUnLFxyXG4gICAgaWNvbjogc3ZnLFxyXG4gICAgYXR0cjogW1snZGF0YS1yb2xlJywgJ3NhdmUnXV0sXHJcbiAgfSk7XHJcbiAgYnRuU2F2ZS5maXJzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVTdGF0ZSk7XHJcbiAgcmV0dXJuIGJ0blNhdmU7XHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi91dGlscy9jcmVhdGVOb2RlJztcclxuaW1wb3J0IGJ0bkNhdmVpbiBmcm9tICcuLi9idXR0b25zL2NhdmVpbi9idG5DYXZlaW4nO1xyXG5pbXBvcnQgYnRuTG9hZCBmcm9tICcuLi9idXR0b25zL2xvYWQvYnRuTG9hZCc7XHJcbmltcG9ydCBidG5SYW5kb20gZnJvbSAnLi4vYnV0dG9ucy9yYW5kb20vYnRuUmFuZG9tLic7XHJcbmltcG9ydCBidG5SZXNldCBmcm9tICcuLi9idXR0b25zL3Jlc2V0L2J0blJlc2V0JztcclxuaW1wb3J0IGJ0blNhdmUgZnJvbSAnLi4vYnV0dG9ucy9zYXZlL2J0blNhdmUnO1xyXG5pbXBvcnQgJy4vZm9vdGVyLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlRWxlbWVudCh7IHRhZzogJ2Zvb3RlcicsIGNsczogJ2Zvb3RlcicgfSk7XHJcbiAgY29uc3QgY2F2ZWluID0gYnRuQ2F2ZWluKCk7XHJcbiAgY29uc3QgcmVzZXQgPSBidG5SZXNldCgpO1xyXG4gIGNvbnN0IHNhdmUgPSBidG5TYXZlKCk7XHJcbiAgY29uc3QgbG9hZCA9IGJ0bkxvYWQoKTtcclxuICBjb25zdCByYW5kb20gPSBidG5SYW5kb20oKTtcclxuXHJcbiAgZm9vdGVyLmFwcGVuZChjYXZlaW4sIHJlc2V0LCBzYXZlLCBsb2FkLCByYW5kb20pO1xyXG4gIHJldHVybiBmb290ZXI7XHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9zdGF0ZSc7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jcmVhdGVOb2RlJztcclxuaW1wb3J0IGNyZWF0ZU9wdGlvbnMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY3JlYXRlT3B0aW9ucyc7XHJcbmltcG9ydCByZW5kZXJEZXNrLCB7IHVwZGF0ZURlc2sgfSBmcm9tICcuLi8uLi9wbG90Q29udGFpbmVyL3JlbmRlckRlc2snO1xyXG5pbXBvcnQgeyBzdGFydFRpbWVyIH0gZnJvbSAnLi4vLi4vdGltZXIvdGltZXInO1xyXG5pbXBvcnQgJy4vZ2FtZVNlbGVjdG9yLmNzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZVNlbGVjdG9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoeyBjbHM6ICdjb250YWluZXItZ2FtZS1zZWxlY3QnIH0pO1xyXG4gIGNvbnN0IGZvcm0gPSBjcmVhdGVFbGVtZW50KHsgdGFnOiAnZm9ybScsIGNsczogJ2Zvcm0nIH0pO1xyXG4gIGNvbnN0IGdhbWVTZWxlY3RDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHsgY2xzOiAnZ2FtZS1zZWxlY3QnIH0pO1xyXG5cclxuICBjb25zdCBmaWVsZFNldCA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnZmllbGRzZXQnLFxyXG4gICAgY2xzOiAnZ2FtZS1zZWxlY3RfZmllbGRzZXQnLFxyXG4gIH0pO1xyXG4gIHN0YXRlLmh0bWwuZmllbGRTZXQgPSBmaWVsZFNldDtcclxuICBjb25zdCBsZWdlbmQgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ2xlZ2VuZCcsXHJcbiAgICBjbHM6ICdmaWVsZHNldF9sZWdlbmQnLFxyXG4gICAgdHh0OiAn0YHQu9C+0LbQvdC+0YHRgtGMJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ2FtZVNlbGVjdExhYmVsID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdsYWJlbCcsXHJcbiAgICB0eHQ6ICfQktGL0LHQvtGAINC40LPRgNGLJyxcclxuICAgIGF0dHI6IFtbJ2ZvcicsICdnYW1lLXNlbGVjdCddXSxcclxuICB9KTtcclxuICBjb25zdCBnYW1lU2VsZWN0ID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdzZWxlY3QnLFxyXG4gICAgY2xzOiAnZ2FtZS1zZWxlY3Rfc2VsZWN0b3InLFxyXG4gICAgYXR0cjogW1snaWQnLCAnZ2FtZS1zZWxlY3QnXV0sXHJcbiAgfSk7XHJcbiAgc3RhdGUuaHRtbC5nYW1lU2VsZWN0ID0gZ2FtZVNlbGVjdDtcclxuXHJcbiAgY29uc3QgZ2FtZUZpbHRlckxhYmVsNSA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnbGFiZWwnLFxyXG4gICAgdHh0OiAnNXg1JyxcclxuICAgIGNsczogJ2ZpZWxkc2V0X2xhYmVsJyxcclxuICAgIGF0dHI6IFtbJ2ZvcicsICdnYW1lLWZpbHRlci01eDUnXV0sXHJcbiAgfSk7XHJcbiAgY29uc3QgZ2FtZUZpbHRlcjUgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ2lucHV0JyxcclxuICAgIGF0dHI6IFtcclxuICAgICAgWyd0eXBlJywgJ3JhZGlvJ10sXHJcbiAgICAgIFsnbmFtZScsICdnYW1lLWZpbHRlciddLFxyXG4gICAgICBbJ3ZhbHVlJywgJzV4NSddLFxyXG4gICAgICBbJ2lkJywgJ2dhbWUtZmlsdGVyLTV4NSddLFxyXG4gICAgICBbJ2NoZWNrZWQnLCAnJ10sXHJcbiAgICAgIFsnYXV0b2ZvY3VzJywgJyddLFxyXG4gICAgXSxcclxuICB9KTtcclxuICBjb25zdCBnYW1lRmlsdGVyTGFiZWwxMCA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnbGFiZWwnLFxyXG4gICAgdHh0OiAnMTB4MTAnLFxyXG4gICAgY2xzOiAnZmllbGRzZXRfbGFiZWwnLFxyXG4gICAgYXR0cjogW1snZm9yJywgJ2dhbWUtZmlsdGVyLTEweDEwJ11dLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGdhbWVGaWx0ZXIxMCA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnaW5wdXQnLFxyXG4gICAgYXR0cjogW1xyXG4gICAgICBbJ3R5cGUnLCAncmFkaW8nXSxcclxuICAgICAgWyduYW1lJywgJ2dhbWUtZmlsdGVyJ10sXHJcbiAgICAgIFsndmFsdWUnLCAnMTB4MTAnXSxcclxuICAgICAgWydpZCcsICdnYW1lLWZpbHRlci0xMHgxMCddLFxyXG4gICAgXSxcclxuICB9KTtcclxuICBjb25zdCBnYW1lRmlsdGVyTGFiZWwxNSA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnbGFiZWwnLFxyXG4gICAgdHh0OiAnMTV4MTUnLFxyXG4gICAgY2xzOiAnZmllbGRzZXRfbGFiZWwnLFxyXG4gICAgYXR0cjogW1snZm9yJywgJ2dhbWUtZmlsdGVyLTE1eDE1J11dLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGdhbWVGaWx0ZXIxNSA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnaW5wdXQnLFxyXG4gICAgYXR0cjogW1xyXG4gICAgICBbJ3R5cGUnLCAncmFkaW8nXSxcclxuICAgICAgWyduYW1lJywgJ2dhbWUtZmlsdGVyJ10sXHJcbiAgICAgIFsndmFsdWUnLCAnMTV4MTUnXSxcclxuICAgICAgWydpZCcsICdnYW1lLWZpbHRlci0xNXgxNSddLFxyXG4gICAgXSxcclxuICB9KTtcclxuXHJcbiAgZmllbGRTZXQuYXBwZW5kKFxyXG4gICAgbGVnZW5kLFxyXG4gICAgZ2FtZUZpbHRlcjUsXHJcbiAgICBnYW1lRmlsdGVyTGFiZWw1LFxyXG4gICAgZ2FtZUZpbHRlcjEwLFxyXG4gICAgZ2FtZUZpbHRlckxhYmVsMTAsXHJcbiAgICBnYW1lRmlsdGVyMTUsXHJcbiAgICBnYW1lRmlsdGVyTGFiZWwxNVxyXG4gICk7XHJcbiAgZm9ybS5hcHBlbmQoZmllbGRTZXQsIGdhbWVTZWxlY3RDb250YWluZXIpO1xyXG4gIGhlYWRlci5hcHBlbmQoZm9ybSk7XHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VGaWx0ZXIpO1xyXG4gIGdhbWVTZWxlY3RDb250YWluZXIuYXBwZW5kKGdhbWVTZWxlY3RMYWJlbCwgZ2FtZVNlbGVjdCk7XHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzd2l0Y2hHYW1lID0gKGlkKSA9PiB7XHJcbiAgY29uc3QgeyBmaWVsZHMgfSA9IHN0YXRlO1xyXG4gIGxldCBnYW1lID0gbnVsbDtcclxuXHJcbiAgZm9yIChjb25zdCBkaWZmaWN1bHR5IGluIGZpZWxkcykge1xyXG4gICAgZ2FtZSA9IGZpZWxkc1tkaWZmaWN1bHR5XS5maWx0ZXIoKGcpID0+IGcuaWQgPT09ICtpZCk7XHJcbiAgICBpZiAoZ2FtZS5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgcmFkaW8gPSBzdGF0ZS5odG1sLmZpZWxkU2V0LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYGlucHV0W3ZhbHVlPVwiJHtkaWZmaWN1bHR5fVwiXWBcclxuICAgICAgKTtcclxuICAgICAgcmFkaW8gJiYgKHJhZGlvLmNoZWNrZWQgPSB0cnVlKTtcclxuICAgICAgY2hhbmdlRmlsdGVyKGRpZmZpY3VsdHksIGlkKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNoYW5nZUZpbHRlciA9IChlLCBpZCkgPT4ge1xyXG4gIGNvbnN0IHZhbHVlID0gZS50YXJnZXQ/LnZhbHVlIHx8IGU7XHJcblxyXG4gIGNvbnN0IHsgZmllbGRzIH0gPSBzdGF0ZTtcclxuICBjb25zdCBmaWx0ZXJzID0gT2JqZWN0LmtleXMoc3RhdGUuZmllbGRzKTtcclxuICBjb25zdCBpc0ZpbHRlciA9IGZpbHRlcnMuaW5jbHVkZXModmFsdWUpO1xyXG4gIGlmIChpc0ZpbHRlcikge1xyXG4gICAgY29uc3QgbGlzdEdhbWVzID0gZmllbGRzW3ZhbHVlXTtcclxuICAgIHN0YXRlLmdhbWUuY3VycmVudEdhbWUgPSBpZCB8fCBsaXN0R2FtZXNbMF0uaWQ7XHJcbiAgICBzdGF0ZS5nYW1lLmRpZmZpY3VsdHkgPSB2YWx1ZTtcclxuICAgIGNyZWF0ZU9wdGlvbnMoc3RhdGUuaHRtbC5nYW1lU2VsZWN0LCBsaXN0R2FtZXMpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzdGF0ZS5nYW1lLmN1cnJlbnRHYW1lID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcGFjaXR5ID0gJzAnO1xyXG4gIHN0YXRlLmdhbWUuc2hvd0NlbGxzVmFsdWUgPSBmYWxzZTtcclxuICBzdGF0ZS5odG1sLnJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tb3BhY2l0eS1jZWxsLXRleHQnLCBvcGFjaXR5KTtcclxuICBzdGF0ZS5odG1sLm1haW4uY2xhc3NMaXN0LnJlbW92ZSgnZ2FtZW92ZXInKTtcclxuICBpZiAoZS50YXJnZXQ/LnZhbHVlKSB7XHJcbiAgICBzdGF0ZS5nYW1lLnRpbWVyID0gMDtcclxuICAgIHN0YXJ0VGltZXIoZmFsc2UpO1xyXG4gICAgcmVuZGVyRGVzayhzdGF0ZS5nYW1lLmN1cnJlbnRHYW1lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdXBkYXRlRGVzayhzdGF0ZS5nYW1lLmN1cnJlbnRHYW1lKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi91dGlscy9jcmVhdGVOb2RlJztcclxuaW1wb3J0IHsgZ2FtZVNlbGVjdG9yIH0gZnJvbSAnLi9nYW1lU2VsZWN0b3IvZ2FtZVNlbGVjdG9yJztcclxuaW1wb3J0ICcuL2hlYWRlci5jc3MnO1xyXG5pbXBvcnQgbXV0ZVNvdW5kIGZyb20gJy4vbXV0ZVNvdW5kL211dGVTb3VuZCc7XHJcbmltcG9ydCBzY2hlbWVTZWxlY3RvciBmcm9tICcuL3NjaGVtZVNlbGVjdG9yL3NjaGVtZVNlbGVjdG9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjcmVhdGVFbGVtZW50O1xyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdoZWFkZXInLCBjbHM6ICdoZWFkZXInIH0pO1xyXG4gIGNvbnN0IGNvbnRhaW5lckdhbWVPcHRpb25zID0gY3JlYXRlRWxlbWVudCh7IGNsczogJ2NvbnRhaW5lci1nYW1lLW9wdGlvbnMnIH0pO1xyXG4gIGNvbnRhaW5lckdhbWVPcHRpb25zLmFwcGVuZChzY2hlbWVTZWxlY3RvcigpKTtcclxuICBjb250YWluZXJHYW1lT3B0aW9ucy5hcHBlbmQobXV0ZVNvdW5kKCkpO1xyXG5cclxuICBoZWFkZXIuYXBwZW5kKGNvbnRhaW5lckdhbWVPcHRpb25zKTtcclxuICBoZWFkZXIuYXBwZW5kKGdhbWVTZWxlY3RvcigpKTtcclxuICByZXR1cm4gaGVhZGVyO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY3JlYXRlTm9kZSc7XHJcbmltcG9ydCAnLi9tdXRlU291bmQuY3NzJztcclxuaW1wb3J0IHN2Z1NvdW5kT24gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL3NvdW5kLW9uLnN2Zyc7XHJcbmltcG9ydCBzdmdTb3VuZE9GRiBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvc291bmQtb2ZmLnN2Zyc7XHJcbmltcG9ydCBzdGF0ZSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9zdGF0ZSc7XHJcblxyXG5sZXQgaW5pdFZvbHVtZSA9IHN0YXRlLmdhbWUuc291bmRWb2x1bWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7IGNsczogJ2NvbnRhaW5lci1tdXRlJyB9KTtcclxuICBjb25zdCBzb3VuZCA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdzdmcnIH0pO1xyXG4gIHN0YXRlLmh0bWwuc291bmRJY29uID0gc291bmQ7XHJcbiAgc291bmQuaW5uZXJIVE1MID0gc3ZnU291bmRPbjtcclxuXHJcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbXV0ZVNvdW5kQ2xpY2spO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQoc291bmQpO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBtdXRlU291bmRDbGljayA9ICgpID0+IHtcclxuICBjb25zdCB7IHNvdW5kVm9sdW1lOiB2b2x1bWUgfSA9IHN0YXRlLmdhbWU7XHJcblxyXG4gIGlmICh2b2x1bWUgPiAwKSB7XHJcbiAgICBzdGF0ZS5nYW1lLnNvdW5kVm9sdW1lID0gMDtcclxuICAgIHN0YXRlLmh0bWwuc291bmRJY29uLmlubmVySFRNTCA9IHN2Z1NvdW5kT0ZGO1xyXG4gICAgc3RhdGUuaHRtbC5zb3VuZHMuZm9yRWFjaCgoc291bmQpID0+IChzb3VuZC52b2x1bWUgPSAwKSk7XHJcbiAgfVxyXG4gIGlmICh2b2x1bWUgPT09IDApIHtcclxuICAgIHN0YXRlLmdhbWUuc291bmRWb2x1bWUgPSBpbml0Vm9sdW1lO1xyXG4gICAgc3RhdGUuaHRtbC5zb3VuZEljb24uaW5uZXJIVE1MID0gc3ZnU291bmRPbjtcclxuICAgIHN0YXRlLmh0bWwuc291bmRzLmZvckVhY2goKHNvdW5kKSA9PiAoc291bmQudm9sdW1lID0gaW5pdFZvbHVtZSkpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0ICcuL3NjaGVtZVNlbGVjdG9yLmNzcyc7XHJcbmltcG9ydCBjb2xvclNjaGVtZXMgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL3NjaGVtZXMvY29sb3JTY2hlbWVzJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NyZWF0ZU5vZGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNyZWF0ZUVsZW1lbnQ7XHJcbiAgbGV0IG9wdGlvbnMgPSBbXTtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHsgY2xzOiAnc2NoZW1lLWNvbnRhaW5lcicgfSk7XHJcbiAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ2xhYmVsJyxcclxuICAgIHR4dDogJ9Cm0LLQtdGC0L7QstCw0Y8g0YHRhdC10LzQsCcsXHJcbiAgICBhdHRyOiBbWydmb3InLCAnc2NoZW1lX3NlbGVjdCddXSxcclxuICB9KTtcclxuICBjb25zdCBzZWxlY3QgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ3NlbGVjdCcsXHJcbiAgICBjbHM6ICdzY2hlbWUtc2VsZWN0JyxcclxuICAgIGF0dHI6IFtbJ2lkJywgJ3NjaGVtZV9zZWxlY3QnXV0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbG9yU2NoZW1lcy5mb3JFYWNoKChzY2hlbWUpID0+XHJcbiAgICBvcHRpb25zLnB1c2goXHJcbiAgICAgIGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgIHRhZzogJ29wdGlvbicsXHJcbiAgICAgICAgdHh0OiBzY2hlbWUudGl0bGUsXHJcbiAgICAgICAgYXR0cjogW1sndmFsdWUnLCBzY2hlbWUubmFtZV1dLFxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VTY2hlbWUpO1xyXG4gIHNlbGVjdC5hcHBlbmQoLi4ub3B0aW9ucyk7XHJcbiAgY29udGFpbmVyLmFwcGVuZChsYWJlbCwgc2VsZWN0KTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgY2hhbmdlU2NoZW1lID0gKGUpID0+IHtcclxuICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICBjb25zdCBzY2hlbWUgPSBjb2xvclNjaGVtZXMuZmlsdGVyKChzKSA9PiBzLm5hbWUgPT09IHZhbHVlKTtcclxuICBhcHBseVNjaGVtZShzY2hlbWUpO1xyXG59O1xyXG5cclxuY29uc3QgYXBwbHlTY2hlbWUgPSAoc2NoZW1lKSA9PiB7XHJcbiAgaWYgKCFzY2hlbWUpIHJldHVybjtcclxuXHJcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XHJcblxyXG4gIGNvbnN0IGNvbG9ycyA9IHNjaGVtZVswXS5jb2xvcnM7XHJcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbG9ycyk7XHJcbiAga2V5cy5mb3JFYWNoKChjb2xvcikgPT4ge1xyXG4gICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke2NvbG9yfWAsIGNvbG9yc1tjb2xvcl0pO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi4vLi4vc3RhdGUvc3RhdGUnO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlTm9kZSc7XHJcbmltcG9ydCAnLi9zaG93Tm90aWNlLmNzcyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd05vdGljZSA9IChub3RpY2UsIGVycm9yID0gZmFsc2UpID0+IHtcclxuICBzdGF0ZS5odG1sLm5vdGljZS5pbm5lclRleHQgPSBub3RpY2U7XHJcbiAgc3RhdGUuaHRtbC5ub3RpY2UuY2xhc3NMaXN0LmFkZCgnbm90aWNlLWNvbnRhaW5lcl92aXNhYmxlJyk7XHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICBzdGF0ZS5odG1sLm5vdGljZS5jbGFzc0xpc3QuYWRkKCdub3RpY2VfZXJyb3InKTtcclxuICB9IGVsc2Ugc3RhdGUuaHRtbC5ub3RpY2UuY2xhc3NMaXN0LnJlbW92ZSgnbm90aWNlX2Vycm9yJyk7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBzdGF0ZS5odG1sLm5vdGljZS5jbGFzc0xpc3QucmVtb3ZlKCdub3RpY2UtY29udGFpbmVyX3Zpc2FibGUnKTtcclxuICB9LCBzdGF0ZS5nYW1lLm5vdGljZURlbGF5IHx8IDIwMDApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXROb3RpY2UgPSAoKSA9PiB7XHJcbiAgaWYgKCFzdGF0ZS5odG1sLm5vdGljZSkge1xyXG4gICAgY29uc3Qgbm90aWNlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7IGNsczogJ25vdGljZS1jb250YWluZXInIH0pO1xyXG4gICAgc3RhdGUuaHRtbC5ub3RpY2UgPSBub3RpY2VDb250YWluZXI7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChzdGF0ZS5odG1sLm5vdGljZSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY3JlYXRlTm9kZSc7XHJcbmltcG9ydCAnLi9jZWxsLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgY2VsbCA9IGNyZWF0ZUVsZW1lbnQoeyBjbHM6ICdjZWxsJyB9KTtcclxuICByZXR1cm4gY2VsbDtcclxufTtcclxuIiwiaW1wb3J0ICcuL3Bsb3RDb250YWluZXIuY3NzJztcclxuaW1wb3J0IHN0YXRlIGZyb20gJy4uLy4uL3N0YXRlL3N0YXRlJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZU5vZGUnO1xyXG5pbXBvcnQgeyBzdGFydFRpbWVyIH0gZnJvbSAnLi4vdGltZXIvdGltZXInO1xyXG4vLyBpbXBvcnQgeyBwYXJzZVRpbWVyLCBzdGFydFRpbWVyIH0gZnJvbSAnLi4vdGltZXIvdGltZXInO1xyXG5pbXBvcnQgc291bmRGaWxsQ2VsbCBmcm9tICcuL3NvdW5kL3NvdW5kRmlsbENlbGwubXAzJztcclxuaW1wb3J0IHNvdW5kRmlsbENyb3NzIGZyb20gJy4vc291bmQvc291bmRGaWxsQ3Jvc3MubXAzJztcclxuaW1wb3J0IHNvdW5kQ2xlYXIgZnJvbSAnLi9zb3VuZC9zb3VuZENsZWFyLm1wMyc7XHJcbmltcG9ydCBzb3VuZFdpbiBmcm9tICcuL3NvdW5kL3dpbi5tcDMnO1xyXG5pbXBvcnQgeyBzYXZlUmVjb3JkcyB9IGZyb20gJy4uLy4uL3V0aWxzL2dhbWVSZWNvcmQnO1xyXG5pbXBvcnQgeyB1cGRhdGVTY29yZSB9IGZyb20gJy4uL3Njb3JlL3Njb3JlJztcclxuaW1wb3J0IHsgdXBkYXRlRGVzayB9IGZyb20gJy4vcmVuZGVyRGVzayc7XHJcbmNvbnN0IHNuZEZpbGxDZWxsID0gbmV3IEF1ZGlvKHNvdW5kRmlsbENlbGwpO1xyXG5jb25zdCBzbmRGaWxsQ3Jvc3MgPSBuZXcgQXVkaW8oc291bmRGaWxsQ3Jvc3MpO1xyXG5jb25zdCBzbmRDbGVhciA9IG5ldyBBdWRpbyhzb3VuZENsZWFyKTtcclxuY29uc3Qgc25kV2luID0gbmV3IEF1ZGlvKHNvdW5kV2luKTtcclxuc3RhdGUuaHRtbC5zb3VuZHMgPSBbXTtcclxuc3RhdGUuaHRtbC5zb3VuZHMucHVzaChzbmRGaWxsQ2VsbCwgc25kRmlsbENyb3NzLCBzbmRDbGVhcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGNsczogJ2dhbWUtY29udGFpbmVyJyB9KTtcclxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGNvbnRleHRNZW51SGFuZGxlcik7XHJcbiAgc3RhdGUuaHRtbC5wbG90Q29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBjaGVja0dhbWVTdGFydCA9ICgpID0+IHtcclxuICBpZiAoIXN0YXRlLmdhbWUuaXNHYW1lU3RhcnRlZCkge1xyXG4gICAgc3RhdGUuZ2FtZS5pc0dhbWVTdGFydGVkID0gdHJ1ZTtcclxuICAgIHN0YXJ0VGltZXIoKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRDbGlja2VkQ2VsbCA9ICh0YXJnZXQpID0+IHtcclxuICBjb25zdCB7IHBsb3QgfSA9IHN0YXRlLmdhbWU7XHJcbiAgbGV0IGluZGV4ID0gbnVsbDtcclxuICBjb25zdCBjZWxsID0gcGxvdC5mbGF0KDEpLmZpbHRlcigoY2VsbCwgaSkgPT4ge1xyXG4gICAgaWYgKGNlbGwuZWxlbWVudCA9PT0gdGFyZ2V0KSB7XHJcbiAgICAgIGluZGV4ID0gaTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfSlbMF07XHJcblxyXG4gIHJldHVybiB7IGNlbGwsIGluZGV4IH07XHJcbn07XHJcblxyXG5jb25zdCBjb250ZXh0TWVudUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCB7IGNlbGw6IGNsaWNrZWRDZWxsLCBpbmRleCB9ID0gZ2V0Q2xpY2tlZENlbGwoZS50YXJnZXQpO1xyXG4gIGlmIChjbGlja2VkQ2VsbCkge1xyXG4gICAgY29uc3QgY2VsbFN0YXRlID0gY2xpY2tlZENlbGwuc3RhdGU7XHJcbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKGNlbGxTdGF0ZSkpIHtcclxuICAgICAgbWFya1goY2xpY2tlZENlbGwsIGluZGV4LCBmYWxzZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0dhbWVTdGFydCgpO1xyXG4gICAgc3dpdGNoIChjZWxsU3RhdGUpIHtcclxuICAgICAgY2FzZSAn4pqqJzpcclxuICAgICAgICBzbmRGaWxsQ3Jvc3MucGxheSgpO1xyXG4gICAgICAgIGNsaWNrZWRDZWxsLnN0YXRlID0gJ3gnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICfimqsnOlxyXG4gICAgICAgIHNuZEZpbGxDcm9zcy5wbGF5KCk7XHJcbiAgICAgICAgY2xpY2tlZENlbGwuc3RhdGUgPSAneCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3gnOlxyXG4gICAgICAgIHNuZENsZWFyLnBsYXkoKTtcclxuICAgICAgICBjbGlja2VkQ2VsbC5zdGF0ZSA9ICfimqonO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrZWRDZWxsLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2VsbF9jaGVja2VkJyk7XHJcbiAgICBjbGlja2VkQ2VsbC5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NlbGxfZmlsbCcpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNsaWNrSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgY29uc3QgeyBicnVzaCB9ID0gc3RhdGUuZ2FtZTtcclxuICBjb25zdCB7IGNlbGw6IGNsaWNrZWRDZWxsLCBpbmRleCB9ID0gZ2V0Q2xpY2tlZENlbGwoZS50YXJnZXQpO1xyXG5cclxuICBjb25zdCBkcmF3RmlsbCA9ICgpID0+IHtcclxuICAgIHNuZEZpbGxDZWxsLnBsYXkoKTtcclxuICAgIGNsaWNrZWRDZWxsLnN0YXRlID0gJ+Kaqyc7XHJcbiAgICBjbGlja2VkQ2VsbC5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NlbGxfZmlsbCcpO1xyXG4gICAgY2xpY2tlZENlbGwuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjZWxsX2NoZWNrZWQnKTtcclxuICB9O1xyXG4gIGNvbnN0IGRyYXdDcm9zcyA9ICgpID0+IHtcclxuICAgIHNuZEZpbGxDcm9zcy5wbGF5KCk7XHJcbiAgICBjbGlja2VkQ2VsbC5zdGF0ZSA9ICd4JztcclxuICAgIGNsaWNrZWRDZWxsLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2VsbF9jaGVja2VkJyk7XHJcbiAgICBjbGlja2VkQ2VsbC5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NlbGxfZmlsbCcpO1xyXG4gIH07XHJcbiAgY29uc3QgZHJhd0VtcHR5ID0gKCkgPT4ge1xyXG4gICAgc25kQ2xlYXIucGxheSgpO1xyXG4gICAgY2xpY2tlZENlbGwuc3RhdGUgPSAn4pqqJztcclxuICAgIGNsaWNrZWRDZWxsLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2VsbF9maWxsJyk7XHJcbiAgICBjbGlja2VkQ2VsbC5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NlbGxfY2hlY2tlZCcpO1xyXG4gIH07XHJcblxyXG4gIGlmIChjbGlja2VkQ2VsbCkge1xyXG4gICAgY29uc3QgY2VsbFN0YXRlID0gY2xpY2tlZENlbGwuc3RhdGU7XHJcbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKGNlbGxTdGF0ZSkpIHtcclxuICAgICAgbWFya1goY2xpY2tlZENlbGwsIGluZGV4KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrR2FtZVN0YXJ0KCk7XHJcbiAgICBzd2l0Y2ggKGNlbGxTdGF0ZSkge1xyXG4gICAgICBjYXNlICfimqonOlxyXG4gICAgICAgIGlmIChicnVzaCA9PT0gJ2ZpbGwnKSB7XHJcbiAgICAgICAgICBkcmF3RmlsbCgpO1xyXG4gICAgICAgIH0gZWxzZSBkcmF3Q3Jvc3MoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAn4pqrJzpcclxuICAgICAgICBpZiAoYnJ1c2ggPT09ICdmaWxsJykge1xyXG4gICAgICAgICAgZHJhd0VtcHR5KCk7XHJcbiAgICAgICAgfSBlbHNlIGRyYXdDcm9zcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd4JzpcclxuICAgICAgICBpZiAoYnJ1c2ggPT09ICdmaWxsJykge1xyXG4gICAgICAgICAgZHJhd0ZpbGwoKTtcclxuICAgICAgICB9IGVsc2UgZHJhd0VtcHR5KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQWxsQ29ycmVjdENoZWNrZWQoKSkgc2V0VGltZW91dCgoKSA9PiBnYW1lT3ZlcigpLCAwKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBtYXJrWCA9IChjZWxsLCBpbmRleENlbGwsIHNldE1hcmsgPSB0cnVlKSA9PiB7XHJcbiAgY29uc3QgbGVuZ3RoID0gc3RhdGUuZ2FtZS5wbG90WzBdLmxlbmd0aDtcclxuICBsZXQgcm93Q2xpY2tlZCA9IC0xO1xyXG4gIGxldCB4ID0gMDtcclxuICB3aGlsZSAoeCA8PSBpbmRleENlbGwpIHtcclxuICAgIHJvd0NsaWNrZWQgKz0gMTtcclxuICAgIHggKz0gbGVuZ3RoO1xyXG4gIH1cclxuICBjb25zdCBjb2x1bW5DbGlrZWQgPSBpbmRleENlbGwgLSBsZW5ndGggKiByb3dDbGlja2VkO1xyXG5cclxuICBzdGF0ZS5nYW1lLnBsb3QuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xyXG4gICAgcm93LmZvckVhY2goKGNlbGwsIGNvbHVtbkluZGV4KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoc2V0TWFyaykge1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgKGNvbHVtbkNsaWtlZCA9PT0gY29sdW1uSW5kZXggfHwgcm93Q2xpY2tlZCA9PT0gcm93SW5kZXgpICYmXHJcbiAgICAgICAgICAgIGNlbGwuc3RhdGUgPT09ICfimqonXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNlbGwuc3RhdGUgPSAneCc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoY29sdW1uQ2xpa2VkID09PSBjb2x1bW5JbmRleCB8fCByb3dDbGlja2VkID09PSByb3dJbmRleCkgJiZcclxuICAgICAgICAgICAgY2VsbC5zdGF0ZSA9PT0gJ3gnXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNlbGwuc3RhdGUgPSAn4pqqJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuICB1cGRhdGVEZXNrKCk7XHJcbn07XHJcblxyXG5jb25zdCBpc0FsbENvcnJlY3RDaGVja2VkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgcGxvdCB9ID0gc3RhdGUuZ2FtZTtcclxuICBjb25zdCBwbG90V2l0aG91dFggPSBwbG90LmZsYXQoMSkubWFwKChjZWxsKSA9PiB7XHJcbiAgICBpZiAoY2VsbC5zdGF0ZSA9PT0gJ3gnKSByZXR1cm4geyAuLi5jZWxsLCBzdGF0ZTogJ+KaqicgfTtcclxuICAgIHJldHVybiBjZWxsO1xyXG4gIH0pO1xyXG4gIHJldHVybiAhcGxvdFdpdGhvdXRYLnNvbWUoKGNlbGwpID0+IGNlbGwuc3RhdGUgIT09IGNlbGwudmFsdWUpO1xyXG59O1xyXG5cclxuY29uc3QgZ2FtZU92ZXIgPSAoKSA9PiB7XHJcbiAgc25kV2luLnBsYXkoKTtcclxuICBjb25zdCBtc2cgPSBgR3JlYXQhIFlvdSBoYXZlIHNvbHZlZCB0aGUgbm9ub2dyYW0gaW4gJHtzdGF0ZS5nYW1lLnRpbWVyfSBzZWNvbmRzIWA7XHJcbiAgLy8gY29uc3QgbXNnID0gYEdyZWF0ISBZb3UgaGF2ZSBzb2x2ZWQgdGhlIG5vbm9ncmFtIGluICR7cGFyc2VUaW1lcihcclxuICAvLyAgIHN0YXRlLmdhbWUudGltZXJcclxuICAvLyApfSBzZWNvbmRzIWA7XHJcbiAgc2F2ZVJlY29yZHMoKTtcclxuICB1cGRhdGVTY29yZShtc2cpO1xyXG4gIHN0YXRlLmh0bWwuc2NvcmUuY2xhc3NMaXN0LmFkZCgnc2NvcmVfc2hvdycpO1xyXG5cclxuICAvLyBzdGF0ZS5nYW1lLnRpbWVyID0gMDtcclxuICBzdGF0ZS5odG1sLm1haW4uY2xhc3NMaXN0LmFkZCgnZ2FtZW92ZXInKTtcclxuICBzdGFydFRpbWVyKGZhbHNlKTtcclxufTtcclxuIiwiaW1wb3J0IHN0YXRlIGZyb20gJy4uLy4uL3N0YXRlL3N0YXRlJztcclxuaW1wb3J0IGdldFBsb3QgZnJvbSAnLi4vLi4vdXRpbHMvZ2V0UGxvdCc7XHJcbmltcG9ydCByb3RhdGVNYXRyaXggZnJvbSAnLi4vLi4vdXRpbHMvcm90YXRlTWF0cml4JztcclxuaW1wb3J0IG5ld0NlbGwgZnJvbSAnLi9jZWxsL25ld0NlbGwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGlkID0gMCkgPT4ge1xyXG4gIGNvbnN0IHBsb3QgPSBbLi4uZ2V0UGxvdChpZCldO1xyXG4gIGlmICghcGxvdCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgcm90YXRlZFBsb3QgPSByb3RhdGVNYXRyaXgocGxvdCk7XHJcbiAgY29uc3QgY2x1ZVRvcFJvdGF0ZWQgPSBjcmVhdGVDbHVlQXJyYXkocm90YXRlZFBsb3QpO1xyXG4gIC8vINCy0YvRgNCw0LLQvdC40LLQsNC10Lwg0LLQtdGA0YXQvdC40Lgg0L/QvtC00YHQutCw0LfQutC4INCyINCy0YvRgdC+0YLRg1xyXG4gIGNvbnN0IGNsdWVUb3BSb3dzID0gTWF0aC5tYXgoLi4uY2x1ZVRvcFJvdGF0ZWQubWFwKChyb3cpID0+IHJvdy5sZW5ndGgpKTtcclxuICBjbHVlVG9wUm90YXRlZC5mb3JFYWNoKChyb3cpID0+IHtcclxuICAgIHdoaWxlIChyb3cubGVuZ3RoIDwgY2x1ZVRvcFJvd3MpIHJvdy5wdXNoKDApO1xyXG4gIH0pO1xyXG4gIGNvbnN0IGNsdWVUb3AgPSByb3RhdGVNYXRyaXgoY2x1ZVRvcFJvdGF0ZWQsICdsZWZ0Jyk7XHJcblxyXG4gIGNvbnN0IGNsdWVMZWZ0ID0gY3JlYXRlQ2x1ZUFycmF5KHBsb3QpO1xyXG4gIC8vINCy0YvRgNCw0LLQvdC40LLQsNC10Lwg0LvQtdCy0YvQtSDQv9C+0LTRgdC60LDQt9C60Lgg0LIg0YjQuNGA0LjQvdGDXHJcbiAgY29uc3QgY2x1ZUxlZnRDb2x1bW5zID0gTWF0aC5tYXgoLi4uY2x1ZUxlZnQubWFwKChyb3cpID0+IHJvdy5sZW5ndGgpKTtcclxuICBjbHVlTGVmdC5mb3JFYWNoKChyb3cpID0+IHtcclxuICAgIHdoaWxlIChyb3cubGVuZ3RoIDwgY2x1ZUxlZnRDb2x1bW5zKSByb3cudW5zaGlmdCgwKTtcclxuICB9KTtcclxuXHJcbiAgLy8g0L7QsdGK0LXQtNC10L3QuNGC0Ywg0L/QvtC00YHQutCw0LfQutC4INGB0LvQtdCy0LAg0YEg0LjQs9GA0L7QstGL0Lwg0L/QvtC70LXQvFxyXG4gIGNvbnN0IGNsdWVMZWZ0QW5kUGxvdCA9IHBsb3QubWFwKChyb3csIGkpID0+IHtcclxuICAgIHJldHVybiBbLi4uY2x1ZUxlZnRbaV0sIC4uLnJvd107XHJcbiAgfSk7XHJcblxyXG4gIC8vINC4INCy0YvRgNCw0LLQvdC40LLQsNC10Lwg0LIg0YjQuNGA0LjQvdGDINC/0L7RgdC60LDQt9C60Lgg0YHQstC10YDRhdGDXHJcbiAgY29uc3Qg0YFvbHVtbnNDb3VudFRvdGFsID0gY2x1ZUxlZnRBbmRQbG90WzBdLmxlbmd0aDtcclxuICBjbHVlVG9wLmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgd2hpbGUgKHJvdy5sZW5ndGggPCDRgW9sdW1uc0NvdW50VG90YWwpIHJvdy51bnNoaWZ0KCcnKTtcclxuICB9KTtcclxuXHJcbiAgLy8g0L7QsdGK0LXQtNC10L3QuNGC0Ywg0L/QvtC00YHQutCw0LfQutC4INGB0LLQtdGA0YXRgyDRgSDQuNCz0YDQvtCy0YvQvCDQv9C+0LvQtdC8XHJcbiAgY29uc3QgZ2FtZURlc2sgPSBbLi4uY2x1ZVRvcCwgLi4uY2x1ZUxlZnRBbmRQbG90XTtcclxuXHJcbiAgLy/RgdGE0L7RgNC80LjRgNGD0LXQvCDRjdC70LXQvNC10L3RgtGLINC40LPRgNC+0LLQvtCz0L4g0L/QvtC70Y9cclxuICBzdGF0ZS5odG1sLnBsb3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgZ2FtZURlc2suZm9yRWFjaCgocm93LCBpKSA9PiB7XHJcbiAgICByb3cuZm9yRWFjaCgoZWwsIGopID0+IHtcclxuICAgICAgY29uc3QgY2VsbCA9IG5ld0NlbGwoKTtcclxuICAgICAgaWYgKGVsID09PSAn4pqrJyB8fCBlbCA9PT0gJ+KaqicpIHtcclxuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncm9sZScsICdnYW1lJyk7XHJcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGVsO1xyXG4gICAgICAgIGdhbWVEZXNrW2ldW2pdID0ge1xyXG4gICAgICAgICAgc3RhdGU6ICfimqonLFxyXG4gICAgICAgICAgdmFsdWU6IGVsLFxyXG4gICAgICAgICAgZWxlbWVudDogY2VsbCxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUoZWwpKSB7XHJcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnY2x1ZScpO1xyXG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBlbCA+IDAgPyBlbCA6ICcnO1xyXG4gICAgICAgIGdhbWVEZXNrW2ldW2pdID0ge1xyXG4gICAgICAgICAgc3RhdGU6IGVsLFxyXG4gICAgICAgICAgdmFsdWU6IGVsLFxyXG4gICAgICAgICAgZWxlbWVudDogY2VsbCxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlbCA9PT0gJycpIHtcclxuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncm9sZScsICdlbXB0eScpO1xyXG4gICAgICAgIGdhbWVEZXNrW2ldW2pdID0ge1xyXG4gICAgICAgICAgc3RhdGU6IGVsLFxyXG4gICAgICAgICAgdmFsdWU6IGVsLFxyXG4gICAgICAgICAgZWxlbWVudDogY2VsbCxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdGF0ZS5odG1sLnBsb3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgc2V0Qm9yZGVycyhnYW1lRGVzayk7XHJcbiAgY29uc3QgY29sdW1uc0NvdW50ID0gZ2FtZURlc2tbMF0ubGVuZ3RoO1xyXG4gIHN0YXRlLmdhbWUucGxvdCA9IGdhbWVEZXNrO1xyXG4gIHN0YXRlLmh0bWwucGxvdENvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jb2x1bW5zLWNvdW50JywgY29sdW1uc0NvdW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVEZXNrID0gKCkgPT4ge1xyXG4gIC8v0YHRhNC+0YDQvNC40YDRg9C10Lwg0Y3Qu9C10LzQtdC90YLRiyDQuNCz0YDQvtCy0L7Qs9C+INC/0L7Qu9GPXHJcbiAgY29uc3QgeyBwbG90IH0gPSBzdGF0ZS5nYW1lO1xyXG5cclxuICBzdGF0ZS5odG1sLnBsb3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgcGxvdC5mb3JFYWNoKChyb3csIGkpID0+IHtcclxuICAgIHJvdy5mb3JFYWNoKChlbCwgaikgPT4ge1xyXG4gICAgICBjb25zdCBjZWxsID0gbmV3Q2VsbCgpO1xyXG4gICAgICBpZiAoZWwuc3RhdGUgPT09ICfimqsnKSB7XHJcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZ2FtZScpO1xyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbF9maWxsJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGVsLnN0YXRlID09PSAn4pqqJykge1xyXG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2dhbWUnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZWwuc3RhdGUgPT09ICd4Jykge1xyXG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2dhbWUnKTtcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGxfY2hlY2tlZCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBlbC52YWx1ZTtcclxuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZShlbC5zdGF0ZSkpIHtcclxuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncm9sZScsICdjbHVlJyk7XHJcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGVsLnN0YXRlID4gMCA/IGVsLnN0YXRlIDogJyc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGVsLnN0YXRlID09PSAnJykge1xyXG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2VtcHR5Jyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBsb3RbaV1bal0gPSB7XHJcbiAgICAgICAgc3RhdGU6IGVsLnN0YXRlLFxyXG4gICAgICAgIHZhbHVlOiBlbC52YWx1ZSxcclxuICAgICAgICBlbGVtZW50OiBjZWxsLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgc3RhdGUuaHRtbC5wbG90Q29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHNldEJvcmRlcnMocGxvdCk7XHJcbiAgY29uc3QgY29sdW1uc0NvdW50ID0gcGxvdFswXS5sZW5ndGg7XHJcbiAgc3RhdGUuaHRtbC5wbG90Q29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KCctLWNvbHVtbnMtY291bnQnLCBjb2x1bW5zQ291bnQpO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlQ2x1ZUFycmF5ID0gKG1hdHJpeCkgPT4ge1xyXG4gIGNvbnN0IGNsdWVzID0gW107XHJcbiAgbWF0cml4LmZvckVhY2goKHJvdywgaSkgPT4ge1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGNsdWVzW2ldID0gW107XHJcblxyXG4gICAgcm93LmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgaWYgKGNlbGwgPT09ICfimqsnKSB7XHJcbiAgICAgICAgY291bnQgKz0gMTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY2VsbCA9PT0gJ+KaqicpIHtcclxuICAgICAgICBpZiAoY291bnQgPiAwKSB7XHJcbiAgICAgICAgICBjbHVlc1tpXS5wdXNoKGNvdW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY291bnQgPSAwO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoY291bnQgPiAwKSB7XHJcbiAgICAgIGNsdWVzW2ldLnB1c2goY291bnQpO1xyXG4gICAgICBjb3VudCA9IDA7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjbHVlcztcclxufTtcclxuXHJcbmNvbnN0IHNldEJvcmRlcnMgPSAobWF0cml4KSA9PiB7XHJcbiAgbGV0IGluZGV4Um93ID0gMDtcclxuXHJcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbWF0cml4Lmxlbmd0aDsgcm93ICs9IDEpIHtcclxuICAgIGxldCBpbmRleENvbCA9IDA7XHJcbiAgICBjb25zdCBsYXN0SW5kZXhSb3cgPSBtYXRyaXhbcm93XS5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgbGFzdEVsZW1Sb3cgPSBtYXRyaXhbcm93XVtsYXN0SW5kZXhSb3ddLnZhbHVlO1xyXG4gICAgaWYgKGxhc3RFbGVtUm93ID09PSAn4pqrJyB8fCBsYXN0RWxlbVJvdyA9PT0gJ+KaqicpIGluZGV4Um93ICs9IDE7XHJcblxyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbWF0cml4W3Jvd10ubGVuZ3RoOyBjb2wgKz0gMSkge1xyXG4gICAgICBjb25zdCBsYXN0Um93SW5kZXggPSBtYXRyaXgubGVuZ3RoIC0gMTtcclxuICAgICAgY29uc3QgbGFzdEVsZW1Db2wgPSBtYXRyaXhbbGFzdFJvd0luZGV4XVtjb2xdLnZhbHVlO1xyXG4gICAgICBpZiAobGFzdEVsZW1Db2wgPT09ICfimqsnIHx8IGxhc3RFbGVtQ29sID09PSAn4pqqJykge1xyXG4gICAgICAgIGluZGV4Q29sICs9IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpbmRleFJvdyAmJiBpbmRleFJvdyA9PT0gMSlcclxuICAgICAgICBtYXRyaXhbcm93XVtjb2xdLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdmaXJzdC1yb3cnLCAnJyk7XHJcbiAgICAgIGlmIChpbmRleFJvdyAmJiBpbmRleFJvdyAlIDUgPT09IDApXHJcbiAgICAgICAgbWF0cml4W3Jvd11bY29sXS5lbGVtZW50LnNldEF0dHJpYnV0ZSgncm93JywgJycpO1xyXG4gICAgICBpZiAoaW5kZXhDb2wgJiYgaW5kZXhDb2wgPT09IDEpXHJcbiAgICAgICAgbWF0cml4W3Jvd11bY29sXS5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZmlyc3QtY29sJywgJycpO1xyXG4gICAgICBpZiAoaW5kZXhDb2wgJiYgaW5kZXhDb2wgJSA1ID09PSAwKVxyXG4gICAgICAgIG1hdHJpeFtyb3ddW2NvbF0uZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbCcsICcnKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZSc7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi91dGlscy9jcmVhdGVOb2RlJztcclxuaW1wb3J0IHsgZ2V0UmVjb3JkcywgcmVzZXRMYXN0R2FtZUZsYWcgfSBmcm9tICcuLi8uLi91dGlscy9nYW1lUmVjb3JkJztcclxuaW1wb3J0IHsgcGFyc2VUaW1lciB9IGZyb20gJy4uL3RpbWVyL3RpbWVyJztcclxuaW1wb3J0ICcuL3Njb3JlLmNzcyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2NvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlhbG9nID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdkaWFsb2cnLFxyXG4gICAgY2xzOiAnZGlhbG9nJyxcclxuICAgIGF0dHI6IFtbJ29wZW4nLCAnJ11dLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgY2xzOiAnY29udGFpbmVyJyxcclxuICB9KTtcclxuICBzdGF0ZS5odG1sLnNjb3JlID0gY29udGFpbmVyO1xyXG4gIHVwZGF0ZVNjb3JlKCk7XHJcbiAgZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGUpO1xyXG4gIGRpYWxvZy5hcHBlbmQoY29udGFpbmVyKTtcclxuICByZXR1cm4gZGlhbG9nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNjb3JlID0gKG1zZykgPT4ge1xyXG4gIHN0YXRlLmh0bWwuc2NvcmUuaW5uZXJIVE1MID0gJyc7XHJcbiAgY29uc3QgdGl0bGUgPSBtc2cgPyBtc2cgOiAnU0NPUkU6JztcclxuICBjb25zdCBoMSA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdoMScsIGNsczogJ3Njb3JlX2gxJywgdHh0OiB0aXRsZSB9KTtcclxuICBzdGF0ZS5odG1sLnNjb3JlLmFwcGVuZChoMSk7XHJcbiAgc3RhdGUuaHRtbC5zY29yZUgxID0gaDE7XHJcbiAgY29uc3QgcmVjb3JkcyA9IGdldENvbnRhaW5lclJlY29yZHMoKTtcclxuICByZWNvcmRzICYmIHN0YXRlLmh0bWwuc2NvcmUuYXBwZW5kKC4uLnJlY29yZHMpO1xyXG59O1xyXG5cclxuY29uc3QgY2xpY2tIYW5kbGUgPSAoKSA9PiB7XHJcbiAgc3RhdGUuaHRtbC5zY29yZUgxLnRleHRDb250ZW50ID0gJ1NDT1JFOic7XHJcbiAgc3RhdGUuaHRtbC5zY29yZS5jbGFzc0xpc3QudG9nZ2xlKCdzY29yZV9zaG93Jyk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDb250YWluZXJSZWNvcmRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlY29yZHMgPSBnZXRSZWNvcmRzKCk7XHJcblxyXG4gIGNvbnN0IGRpZmZpY3VsdHlMaXN0ID0gT2JqZWN0LmtleXMoc3RhdGUuZmllbGRzKTtcclxuICBjb25zdCB0YWJsZXMgPSBkaWZmaWN1bHR5TGlzdC5tYXAoKGRpZikgPT4ge1xyXG4gICAgY29uc3QgcmVjID0gcmVjb3Jkcy5maWx0ZXIoKHIpID0+IHIuZGlmZmljdWx0eSA9PT0gZGlmKS5yZXZlcnNlKCk7XHJcbiAgICBpZiAocmVjLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7IGNsczogJ2NvbnRhaW5lcl9fcmVjb3JkcycgfSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKGNyZWF0ZUVsZW1lbnQoeyB0eHQ6ICfQuNCz0YDQsCcgfSkpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChjcmVhdGVFbGVtZW50KHsgdHh0OiAn0YHQu9C+0LbQvS4nIH0pKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoY3JlYXRlRWxlbWVudCh7IHR4dDogJ9Cy0YDQtdC80Y8nIH0pKTtcclxuICAgIHJlYy5zcGxpY2UoNSk7XHJcbiAgICBjb25zdCBzb3J0ZWQgPSByZWMuc29ydCgoYSwgYikgPT4gYS50aW1lciAtIGIudGltZXIpO1xyXG4gICAgc29ydGVkLmZvckVhY2goKHIsIGkpID0+IHtcclxuICAgICAgY29uc3Qgc3R5bGUgPSByLmxhc3RHYW1lID8gJ3JlY29yZF9sYXN0LWdhbWUnIDogJyc7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudCh7IHR4dDogYCR7aSArIDF9LiAke3IubmFtZX1gLCBjbHM6IHN0eWxlIH0pXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoY3JlYXRlRWxlbWVudCh7IHR4dDogci5kaWZmaWN1bHR5LCBjbHM6IHN0eWxlIH0pKTtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZChjcmVhdGVFbGVtZW50KHsgdHh0OiBwYXJzZVRpbWVyKHIudGltZXIpLCBjbHM6IHN0eWxlIH0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfSk7XHJcblxyXG4gIHJlc2V0TGFzdEdhbWVGbGFnKHJlY29yZHMpO1xyXG4gIHJldHVybiB0YWJsZXM7XHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZSc7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi91dGlscy9jcmVhdGVOb2RlJztcclxuaW1wb3J0ICcuL3RpbWVyLmNzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgdGltZXIgPSAoKSA9PiB7XHJcbiAgbGV0IHNlY29uZHMgPSBwYXJzZUludChzdGF0ZS5nYW1lLnRpbWVyKTtcclxuICBzZWNvbmRzIHx8PSAwO1xyXG4gIGNvbnN0IHRpbWVyU3RyID0gcGFyc2VUaW1lcihzZWNvbmRzKTtcclxuICBjb25zdCB0aW1lciA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnLCBjbHM6ICd0aW1lcicsIHR4dDogdGltZXJTdHIgfSk7XHJcbiAgc3RhdGUuaHRtbC50aW1lciA9IHRpbWVyO1xyXG4gIHJldHVybiB0aW1lcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJUaW1lciA9ICgpID0+IHtcclxuICBsZXQgc2Vjb25kcyA9IHBhcnNlSW50KHN0YXRlLmdhbWUudGltZXIpO1xyXG4gIHNlY29uZHMgfHw9IDA7XHJcbiAgY29uc3QgdGltZSA9IHBhcnNlVGltZXIoc2Vjb25kcyk7XHJcbiAgaWYgKHN0YXRlLmh0bWwudGltZXIuaW5uZXJUZXh0ICE9PSB0aW1lKSBzdGF0ZS5odG1sLnRpbWVyLmlubmVyVGV4dCA9IHRpbWU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc3RhcnRUaW1lciA9IChzdGFydCA9IHRydWUpID0+IHtcclxuICBjb25zdCB0aW1lckhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzdGF0ZS5nYW1lLnRpbWVyICs9IDE7XHJcbiAgICByZW5kZXJUaW1lcigpO1xyXG4gICAgcmV0dXJuIHRpbWVySGFuZGxlcjtcclxuICB9O1xyXG5cclxuICBjbGVhckludGVydmFsKHN0YXRlLmh0bWwudGltZXJJRCk7XHJcbiAgaWYgKHN0YXJ0KSBzdGF0ZS5odG1sLnRpbWVySUQgPSBzZXRJbnRlcnZhbCh0aW1lckhhbmRsZXIoKSwgMTAwMCk7XHJcbiAgaWYgKCFzdGFydCkge1xyXG4gICAgc3RhdGUuZ2FtZS5pc0dhbWVTdGFydGVkID0gZmFsc2U7XHJcbiAgICByZW5kZXJUaW1lcigpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwYXJzZVRpbWVyID0gKHNlY29uZHMpID0+IHtcclxuICBsZXQgaG91cnMgPSBNYXRoLnRydW5jKHNlY29uZHMgLyAzNjAwKTtcclxuICBsZXQgbWludXRlcyA9IE1hdGgudHJ1bmMoKHNlY29uZHMgLSBob3VycyAqIDM2MDApIC8gNjApO1xyXG4gIHNlY29uZHMgPSBgJHtzZWNvbmRzIC0gaG91cnMgKiAzNjAwIC0gbWludXRlcyAqIDYwfWA7XHJcblxyXG4gIGhvdXJzID0gaG91cnMgPiAwID8gYCR7aG91cnN9OmAgOiAnJztcclxuICBob3VycyAmJiAoaG91cnMgPSBob3Vycy5wYWRTdGFydCgzLCAnMCcpKTtcclxuICBtaW51dGVzID0gbWludXRlcyA+IDAgPyBgJHttaW51dGVzfTpgIDogJzAwOic7XHJcbiAgbWludXRlcyA9IG1pbnV0ZXMucGFkU3RhcnQoMywgJzAnKTtcclxuICBzZWNvbmRzID0gc2Vjb25kcy5wYWRTdGFydCgyLCAnMCcpO1xyXG4gIHJldHVybiBgJHtob3Vyc30ke21pbnV0ZXN9JHtzZWNvbmRzfWA7XHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuL3N0YXRlJztcclxuaW1wb3J0IGZpZWxkNXg1IGZyb20gJy4uL2ZpZWxkcy81eDUuanNvbic7XHJcbmltcG9ydCBmaWVsZDEweDEwIGZyb20gJy4uL2ZpZWxkcy8xMHgxMC5qc29uJztcclxuaW1wb3J0IGZpZWxkMTV4MTUgZnJvbSAnLi4vZmllbGRzLzE1eDE1Lmpzb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IGZpZWxkcyA9IGdldEZpZWxkcygpO1xyXG4gIHNldFVuaWNJRChmaWVsZHMpO1xyXG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcclxuICAgIC4uLnN0YXRlLFxyXG4gICAgZmllbGRzOiBmaWVsZHMsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRGaWVsZHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgICc1eDUnOiBmaWVsZDV4NSxcclxuICAgICcxMHgxMCc6IGZpZWxkMTB4MTAsXHJcbiAgICAnMTV4MTUnOiBmaWVsZDE1eDE1LFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBzZXRVbmljSUQgPSAoZmllbGRzKSA9PiB7XHJcbiAgbGV0IGlkID0gMDtcclxuICBmb3IgKGxldCBmaWVsZCBpbiBmaWVsZHMpIHtcclxuICAgIGZpZWxkc1tmaWVsZF0uZm9yRWFjaCgoZ2FtZSkgPT4ge1xyXG4gICAgICBnYW1lLmlkID0gaWQ7XHJcbiAgICAgIGlkICs9IDE7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBnYW1lOiB7XHJcbiAgICBwbG90OiBbXSxcclxuICAgIGN1cnJlbnRHYW1lOiAwLFxyXG4gICAgY3VycmVudEdhbWVOYW1lOiAnJyxcclxuICAgIGRpZmZpY3VsdHk6ICc1eDUnLFxyXG4gICAgc2hvd0NlbGxzVmFsdWU6IGZhbHNlLFxyXG4gICAgdGltZXI6IDAsXHJcbiAgICBpc0dhbWVTdGFydGVkOiBmYWxzZSxcclxuICAgIGJydXNoOiAnZmlsbCcsIC8vIGZpbGwgfCBjcm9zc1xyXG4gICAgYW5pbWVJbnRlcnZhbDogNjAsXHJcbiAgICBzb3VuZFZvbHVtZTogMC41LFxyXG4gICAgbm90aWNlRGVsYXk6IDIwMDAsXHJcbiAgfSxcclxuICBmaWVsZHM6IFtdLFxyXG4gIGh0bWw6IHt9LFxyXG4gIGxzS2V5U3RhdGU6ICdub25vZ3JhbTIwMjQwMTI3MTYxNzAxJyxcclxuICBsc0tleVJlY29yZHM6ICdub25vZ3JhbTIwMjQwMTI4MTgyNjAxJyxcclxufTtcclxuIiwiaW1wb3J0IHN0YXRlIGZyb20gJy4uL3N0YXRlL3N0YXRlJztcclxuXHJcbmV4cG9ydCBjb25zdCBzdGFydFJhbmRvbVNWR2FuaW1hdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBpY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N2ZycpO1xyXG4gIHN0YXRlLmh0bWwuaWNvbnMgPSBpY29ucztcclxuXHJcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpY29ucyB9ID0gc3RhdGUuaHRtbDtcclxuICAgIGNvbnN0IGNvdW50ID0gc3RhdGUuaHRtbC5pY29ucy5sZW5ndGg7XHJcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoY291bnQgLSAxKSk7XHJcbiAgICBpY29uc1tyYW5kb21dLmNsYXNzTGlzdC50b2dnbGUoJ2FuaW1hdGlvbicpO1xyXG4gIH0sIHN0YXRlLmdhbWUuYW5pbWVJbnRlcnZhbCAqIDEwMDApO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudCA9ICh7XHJcbiAgdGFnID0gJ2RpdicsXHJcbiAgY2xzID0gJycsXHJcbiAgdHh0ID0gJycsXHJcbiAgYXR0ciA9IFtdLFxyXG4gIGljb24gPSBudWxsLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuXHJcbiAgaWYgKGljb24pIHtcclxuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xyXG4gICAgc3ZnLmlubmVySFRNTCA9IGljb247XHJcblxyXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHNwYW4udGV4dENvbnRlbnQgPSB0eHQ7XHJcblxyXG4gICAgZWxlbWVudC5hcHBlbmQoc3ZnLCBzcGFuKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZWxlbWVudC5pbm5lclRleHQgPSB0eHQ7XHJcbiAgfVxyXG5cclxuICBjbHMgJiYgKGVsZW1lbnQuY2xhc3NOYW1lID0gY2xzKTtcclxuICBhdHRyLmZvckVhY2goKGF0dHJpYnV0KSA9PiBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dFswXSwgYXR0cmlidXRbMV0pKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVCdXR0b24gPSAoe1xyXG4gIGNscyA9ICcnLFxyXG4gIGljb24gPSBudWxsLFxyXG4gIHR4dCA9ICcnLFxyXG4gIGF0dHIgPSBbXSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoeyBjbHM6IGBidXR0b24tY29udGFpbmVyICR7Y2xzfWAgfSk7XHJcbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlRWxlbWVudCh7IHRhZzogJ2J1dHRvbicsIGNsczogJ2J1dHRvbicsIGF0dHI6IGF0dHIgfSk7XHJcblxyXG4gIGlmIChpY29uKSB7XHJcbiAgICBjb25zdCBzdmcgPSBjcmVhdGVFbGVtZW50KHsgdGFnOiAnc3ZnJywgY2xzOiAnYnV0dG9uX2ljb24nIH0pO1xyXG4gICAgc3ZnLmlubmVySFRNTCA9IGljb247XHJcbiAgICBidXR0b24uYXBwZW5kKHN2Zyk7XHJcbiAgfVxyXG5cclxuICBpZiAodHh0KSB7XHJcbiAgICBjb25zdCBzcGFuID0gY3JlYXRlRWxlbWVudCh7IHRhZzogJ3NwYW4nLCBjbHM6ICdidXR0b25fc3BhbicsIHR4dDogdHh0IH0pO1xyXG4gICAgYnV0dG9uLmFwcGVuZChzcGFuKTtcclxuICB9XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmQoYnV0dG9uKTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi4vc3RhdGUvc3RhdGUnO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9jcmVhdGVOb2RlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzZWxlY3QsIGdhbWVzKSA9PiB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IGdhbWVzLm1hcCgoZ2FtZSkgPT4ge1xyXG4gICAgY29uc3QgeyBsZW5ndGggfSA9IGdhbWUubmFtZTtcclxuICAgIGNvbnN0IE1BWF9MRU5HVEggPSAzMDtcclxuICAgIGNvbnN0IG5hbWVOb3JtYWxpemVkID1cclxuICAgICAgbGVuZ3RoID4gTUFYX0xFTkdUSCA/IGdhbWUubmFtZS5zbGljZSgwLCBNQVhfTEVOR1RIKSArICcuLi4nIDogZ2FtZS5uYW1lO1xyXG4gICAgY29uc3QgY2hlY2tlZCA9XHJcbiAgICAgIHN0YXRlLmdhbWUuY3VycmVudEdhbWUgPT09IGdhbWUuaWQgPyAnc2VsZWN0ZWQnIDogJ3Vuc2VsZWN0ZWQnO1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICB0YWc6ICdvcHRpb24nLFxyXG4gICAgICBhdHRyOiBbXHJcbiAgICAgICAgWyd2YWx1ZScsIGdhbWUuaWRdLFxyXG4gICAgICAgIFtjaGVja2VkLCAnJ10sXHJcbiAgICAgIF0sXHJcbiAgICAgIHR4dDogbmFtZU5vcm1hbGl6ZWQsXHJcbiAgICB9KTtcclxuICB9KTtcclxuICBzZWxlY3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgc2VsZWN0LmFwcGVuZCguLi5vcHRpb25zKTtcclxufTtcclxuIiwiaW1wb3J0IHN0YXRlIGZyb20gJy4uL3N0YXRlL3N0YXRlJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSZWNvcmRzID0gKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RhdGUubHNLZXlSZWNvcmRzKTtcclxuICAgIGNvbnN0IHJlY29yZHMgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgcmV0dXJuIHJlY29yZHMgfHwgW107XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlUmVjb3JkcyA9ICgpID0+IHtcclxuICBjb25zdCByZWNvcmQgPSB7XHJcbiAgICBuYW1lOiBzdGF0ZS5nYW1lLmN1cnJlbnRHYW1lTmFtZSxcclxuICAgIGRpZmZpY3VsdHk6IHN0YXRlLmdhbWUuZGlmZmljdWx0eSxcclxuICAgIHRpbWVyOiBzdGF0ZS5nYW1lLnRpbWVyLFxyXG4gICAgbGFzdEdhbWU6IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb2xkUmVjb3JkcyA9IGdldFJlY29yZHMoKTtcclxuICBjb25zdCBuZXdSZWNvcmRzID0gWy4uLm9sZFJlY29yZHMsIHJlY29yZF07XHJcbiAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KG5ld1JlY29yZHMpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0YXRlLmxzS2V5UmVjb3JkcywgZGF0YSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRMYXN0R2FtZUZsYWcgPSAocmVjb3JkcykgPT4ge1xyXG4gIGNvbnN0IHdvRmxhZyA9IHJlY29yZHMubWFwKChyKSA9PiAoeyAuLi5yLCBsYXN0R2FtZTogZmFsc2UgfSkpO1xyXG4gIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh3b0ZsYWcpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0YXRlLmxzS2V5UmVjb3JkcywgZGF0YSk7XHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi9zdGF0ZS9zdGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoaWQpID0+IHtcclxuICBjb25zdCBJRCA9IE51bWJlcihpZCk7XHJcbiAgZm9yIChsZXQgZmllbGQgaW4gc3RhdGUuZmllbGRzKSB7XHJcbiAgICBjb25zdCBnYW1lID0gc3RhdGUuZmllbGRzW2ZpZWxkXS5maWx0ZXIoKGdhbWUpID0+IGdhbWUuaWQgPT09IElEKVswXTtcclxuICAgIGlmIChnYW1lKSB7XHJcbiAgICAgIHN0YXRlLmdhbWUuY3VycmVudEdhbWUgPSBnYW1lLmlkO1xyXG4gICAgICBzdGF0ZS5nYW1lLmN1cnJlbnRHYW1lTmFtZSA9IGdhbWUubmFtZTtcclxuICAgICAgcmV0dXJuIGdhbWUucGxvdDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcbiIsImltcG9ydCB7IHN3aXRjaEdhbWUgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlci9nYW1lU2VsZWN0b3IvZ2FtZVNlbGVjdG9yJztcclxuaW1wb3J0IHsgdXBkYXRlRGVzayB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGxvdENvbnRhaW5lci9yZW5kZXJEZXNrJztcclxuaW1wb3J0IHsgc2hvd05vdGljZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbm90aWNlL3Nob3dOb3RpY2UnO1xyXG5pbXBvcnQgeyBzdGFydFRpbWVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy90aW1lci90aW1lcic7XHJcbmltcG9ydCBzdmdfY3Jvc3MgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2Nyb3NzLnN2Zyc7XHJcbmltcG9ydCBzdmdfZmlsbCBmcm9tICcuLi9hc3NldHMvaWNvbnMvZmlsbC5zdmcnO1xyXG5pbXBvcnQgc3RhdGUgZnJvbSAnLi4vc3RhdGUvc3RhdGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVTdGF0ZSA9ICgpID0+IHtcclxuICBjb25zdCB7IGdhbWUgfSA9IHN0YXRlO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0YXRlLmxzS2V5U3RhdGUsIEpTT04uc3RyaW5naWZ5KGdhbWUpKTtcclxuICBpZiAoaXNTYXZlZEdhbWUoKSkge1xyXG4gICAgc3RhdGUuaHRtbC5idG5Mb2FkLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbl9kaXNhYmxlZCcpO1xyXG4gICAgc2hvd05vdGljZSgn0JjQs9GA0LAg0YHQvtGF0YDQsNC90LXQvdCwJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0YXRlLmh0bWwuYnRuTG9hZC5jbGFzc0xpc3QuYWRkKCdidXR0b25fZGlzYWJsZWQnKTtcclxuICAgIHNob3dOb3RpY2UoJ9CY0LPRgNCwINC90LUg0YHQvtGF0YDQsNC90LXQvdCwJywgdHJ1ZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRTdGF0ZSA9ICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdGF0ZS5sc0tleVN0YXRlKTtcclxuICAgIGNvbnN0IGdhbWUgPSBKU09OLnBhcnNlKGxzKTtcclxuICAgIGlmIChnYW1lKSB7XHJcbiAgICAgIHN0YXRlLmdhbWUgPSBnYW1lO1xyXG4gICAgICB1cGRhdGVEZXNrKCk7XHJcbiAgICAgIHN3aXRjaEdhbWUoc3RhdGUuZ2FtZS5jdXJyZW50R2FtZSk7XHJcbiAgICAgIHN0YXJ0VGltZXIodHJ1ZSk7XHJcbiAgICAgIGNvbnN0IG9wYWNpdHkgPSBzdGF0ZS5nYW1lLnNob3dDZWxsc1ZhbHVlID8gJzAuNCcgOiAnMCc7XHJcbiAgICAgIHN0YXRlLmh0bWwucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1vcGFjaXR5LWNlbGwtdGV4dCcsIG9wYWNpdHkpO1xyXG5cclxuICAgICAgaWYgKHN0YXRlLmdhbWUuYnJ1c2ggPT09ICdmaWxsJykge1xyXG4gICAgICAgIHN0YXRlLmh0bWwuaWNvbkJydXNoTW9kZS5pbm5lckhUTUwgPSBzdmdfZmlsbDtcclxuICAgICAgfSBlbHNlIHN0YXRlLmh0bWwuaWNvbkJydXNoTW9kZS5pbm5lckhUTUwgPSBzdmdfY3Jvc3M7XHJcbiAgICAgIHNob3dOb3RpY2UoJ9CY0LPRgNCwINC30LDQs9GA0YPQttC10L3QsCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RhdGUuaHRtbC5idG5Mb2FkLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbl9kaXNhYmxlZCcpO1xyXG4gICAgICBzaG93Tm90aWNlKCfQndC10YIg0YHQvtGF0YDQsNC90ZHQvdC90YvRhSDQuNCz0YAnLCB0cnVlKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcign0L7RiNC40LHQutCwINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1INC40LPRgNGLINC40LcgbG9jYWxTdG9yYWdlOicsIGVycm9yKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNTYXZlZEdhbWUgPSAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RhdGUubHNLZXlTdGF0ZSk7XHJcbiAgICBjb25zdCBnYW1lID0gSlNPTi5wYXJzZShscyk7XHJcbiAgICBpZiAoZ2FtZSkgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ9C+0YjQuNCx0LrQsCDQv9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDQuNCz0YDRiyDQuNC3IGxvY2FsU3RvcmFnZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IChtYXRyaXgsIGRpcmVjdGlvbiA9ICdyaWdodCcpID0+IHtcclxuICBjb25zdCB0bXBNYXRyaXggPSBbLi4ubWF0cml4XTtcclxuICBjb25zdCByb3RhdGVkTWF0cml4ID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0bXBNYXRyaXhbMF0ubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIHJvdGF0ZWRNYXRyaXhbaV0gPSBbXTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdG1wTWF0cml4Lmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpXHJcbiAgICAgICAgcm90YXRlZE1hdHJpeFtpXVtqXSA9IHRtcE1hdHJpeFt0bXBNYXRyaXgubGVuZ3RoIC0gMSAtIGpdW2ldO1xyXG4gICAgICBlbHNlIHJvdGF0ZWRNYXRyaXhbaV1bal0gPSB0bXBNYXRyaXhbal1bdG1wTWF0cml4W2ldLmxlbmd0aCAtIDEgLSBpXTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJvdGF0ZWRNYXRyaXg7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zb2xlLmNsZWFyKCk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICAn0J/RgNC40LLQtdGCISVj0JTQu9GPINC+0LHQu9C10LPRh9C10L3QuNGPINC/0YDQvtCy0LXRgNC60Lgg0LrQvtC90LXRh9C90L4g0LbQtSDQtdGB0YLRjCDQutC+0LUt0YfRgtC+LiDQmtC70LDQstC40YjQsFxcbiAlYyBIIFxcbiVj0L3QsNC20LDRgtCw0Y8g0L3QsCDQutC70LDQstC40LDRgtGD0YDQtSDQv9C+0LrQsNC20LXRgiAvINGB0LrRgNC+0LXRgiDQv9C+0LTRgdC60LDQt9C60YMnLFxyXG4gICAgJ2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBwYWRkaW5nOiA4cHggNHB4JyxcclxuICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NTU1OyBjb2xvcjogI2ZmZmYwMDsgbGluZS1oZWlnaHQ6IDI2cHg7IGZvbnQtc2l6ZTogMjBweCcsXHJcbiAgICAnYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IHBhZGRpbmc6IDhweCA0cHg7IGZvbnQtc2l6ZTogMTJweCdcclxuICApO1xyXG5cclxuICBjb25zb2xlLmxvZyhcclxuICAgICfQmNCz0YDQvtCy0L7QtSDQv9C+0LvQtTpcXG4lYyDQm9Ca0Jw6ICVjINC30LDQutGA0LDRgdC40YLRjCDQutC70LXRgtC60YNcXG4lYyDQn9Ca0Jw6ICVjINC/0L7RgdGC0LDQstC40YLRjCDQutGA0LXRgdGC0LjQulxcbtC60L3QvtC/0LrQsCAlYyBzd2l0Y2ggYnJ1c2g6ICVjICDQv9C10YDQtdC60LvRjtGH0LjRgtGMINGA0LXQttC40Lwg0JvQmtCcINC30LDQutGA0LDRgdC40YLRjCAvINC/0L7RgdGC0LDQstC40YLRjCDQutGA0LXRgdGC0LjQuiAo0YPQtNC+0LHQvdC+INC/0L7Qu9GM0LfQvtCy0LDRgtGM0YHRjyDQtdGB0LvQuCDQvdC10YIg0LzRi9GI0LrQuClcXG4nLFxyXG4gICAgJ2JhY2tncm91bmQtY29sb3I6ICM1NTU1NTU7IGNvbG9yOiAjZmZmZmZmJyxcclxuICAgICdiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCcsXHJcbiAgICAnYmFja2dyb3VuZC1jb2xvcjogIzU1NTU1NTsgY29sb3I6ICNmZmZmZmYnLFxyXG4gICAgJ2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50JyxcclxuICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NTU1OyBjb2xvcjogI2ZmZmZmZicsXHJcbiAgICAnYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQnXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgICfQn9C+0LvQtSDRgSDQv9C+0LTRgdC60LDQt9C60LDQvNC4OlxcbiVjINCb0JrQnDogJWMg0LfQsNC/0L7Qu9C90LjRgtGMINC60YDQtdGB0YLQuNC60LDQvNC4INCy0YHRjiDRgdGC0YDQvtC60YMgLyDRgdGC0L7Qu9Cx0LXRhlxcbiVjINCf0JrQnDogJWMg0YPQsdGA0LDRgtGMINCy0YHQtSDQutGA0LXRgdGC0LjQutC4INC90LAg0YHRgtGA0L7QutC1IC8g0YHRgtC+0LvQsdGG0LVcXG4nLFxyXG4gICAgJ2JhY2tncm91bmQtY29sb3I6ICM1NTU1NTU7IGNvbG9yOiAjZmZmZmZmJyxcclxuICAgICdiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCcsXHJcbiAgICAnYmFja2dyb3VuZC1jb2xvcjogIzU1NTU1NTsgY29sb3I6ICNmZmZmZmYnLFxyXG4gICAgJ2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50J1xyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi9zdGF0ZS9zdGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZSkgPT4ge1xyXG4gIGNvbnN0IHsgY29kZSB9ID0gZTtcclxuXHJcbiAgaWYgKGNvZGUgPT09ICdLZXlTJykge1xyXG4gICAgY29uc3QgZ2FtZSA9IFsuLi5zdGF0ZS5nYW1lLnBsb3RdO1xyXG4gICAgY29uc3QgZmlsdGVyID0gZ2FtZVxyXG4gICAgICAubWFwKChyb3cpID0+IHJvdy5tYXAoKGNlbGwpID0+IGNlbGwuc3RhdGUpKVxyXG4gICAgICAuZmlsdGVyKChyb3cpID0+IHJvd1swXSAhPT0gJycpXHJcbiAgICAgIC5tYXAoKHJvdykgPT4gcm93LmZpbHRlcigoY2VsbCkgPT4gIU51bWJlci5pc0Zpbml0ZShjZWxsKSkpO1xyXG5cclxuICAgIGNvbnN0IGpzb24gPSB7XHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBwbG90OiBmaWx0ZXIsXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS53YXJuKCdqc29uIGZvciBzYXZlLi4uJywganNvbik7XHJcbiAgfVxyXG5cclxuICBpZiAoY29kZSA9PT0gJ0tleUgnKSB7XHJcbiAgICBzdGF0ZS5nYW1lLnNob3dDZWxsc1ZhbHVlID0gIXN0YXRlLmdhbWUuc2hvd0NlbGxzVmFsdWU7XHJcbiAgICBjb25zdCBvcGFjaXR5ID0gc3RhdGUuZ2FtZS5zaG93Q2VsbHNWYWx1ZSA/ICcwLjQnIDogJzAnO1xyXG4gICAgc3RhdGUuaHRtbC5yb290LnN0eWxlLnNldFByb3BlcnR5KCctLW9wYWNpdHktY2VsbC10ZXh0Jywgb3BhY2l0eSk7XHJcbiAgfVxyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgdGltZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvdGltZXIvdGltZXInO1xyXG5pbXBvcnQgc3RhdGUgZnJvbSAnLi9zdGF0ZS9zdGF0ZSc7XHJcbmltcG9ydCBmb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXInO1xyXG5pbXBvcnQgaW5pdFN0YXRlIGZyb20gJy4vc3RhdGUvaW5pdFN0YXRlJztcclxuaW1wb3J0IHJlbmRlckRlc2sgZnJvbSAnLi9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvcmVuZGVyRGVzayc7XHJcbmltcG9ydCB3aW5kb3dIYW5kbGUgZnJvbSAnLi91dGlscy93aW5kb3dIYW5kbGUnO1xyXG5pbXBvcnQgcGxvdENvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvcGxvdENvbnRhaW5lci9wbG90Q29udGFpbmVyJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vdXRpbHMvY3JlYXRlTm9kZSc7XHJcbmltcG9ydCBjcmVhdGVPcHRpb25zIGZyb20gJy4vdXRpbHMvY3JlYXRlT3B0aW9ucyc7XHJcbmltcG9ydCB7IHNjb3JlIH0gZnJvbSAnLi9jb21wb25lbnRzL3Njb3JlL3Njb3JlJztcclxuaW1wb3J0IGJ0blN3aXRjaE1vZGUgZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbnMvbW9kZS9idG5Td2l0Y2hNb2RlJztcclxuaW1wb3J0IHsgc3RhcnRSYW5kb21TVkdhbmltYXRpb24gfSBmcm9tICcuL3V0aWxzL2FuaW1hdGlvbic7XHJcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgc2hvd1dlbGNvbWUgZnJvbSAnLi91dGlscy9zaG93V2VsY29tZSc7XHJcbmltcG9ydCB7IGluaXROb3RpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvbm90aWNlL3Nob3dOb3RpY2UnO1xyXG5cclxuZnVuY3Rpb24gZ2FtZSgpIHtcclxuICBpbml0U3RhdGUoKTtcclxuICBzdGF0ZS5odG1sLm1haW4gPSBjcmVhdGVFbGVtZW50KHsgdGFnOiAnbWFpbicsIGNsczogJ21haW4nIH0pO1xyXG4gIHN0YXRlLmh0bWwubWFpbi5hcHBlbmQocGxvdENvbnRhaW5lcigpKTtcclxuICBzdGF0ZS5odG1sLm1haW4uYXBwZW5kKGJ0blN3aXRjaE1vZGUoKSk7XHJcbiAgc3RhdGUuaHRtbC5yb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcclxuICByZXR1cm4gc3RhdGUuaHRtbC5tYWluO1xyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHknKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyKCksIHRpbWVyKCksIGdhbWUoKSwgZm9vdGVyKCksIHNjb3JlKCkpO1xyXG5yZW5kZXJEZXNrKDApO1xyXG5jcmVhdGVPcHRpb25zKHN0YXRlLmh0bWwuZ2FtZVNlbGVjdCwgc3RhdGUuZmllbGRzWyc1eDUnXSk7XHJcbnN0YXJ0UmFuZG9tU1ZHYW5pbWF0aW9uKCk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHdpbmRvd0hhbmRsZSk7XHJcbnNob3dXZWxjb21lKCk7XHJcbmluaXROb3RpY2UoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9