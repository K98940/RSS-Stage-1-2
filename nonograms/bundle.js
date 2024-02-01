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

  & input {
    accent-color: var(--btn-icon-hover);
  }
}

.game-select_selector {
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
}`, "",{"version":3,"sources":["webpack://./src/components/gameSelector/gameSelector.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,WAAW;EACX,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,+BAA+B;EAC/B,YAAY;EACZ,oBAAoB;EACpB,mCAAmC;;EAEnC;IACE,iBAAiB;EACnB;;EAEA;IACE,cAAc;IACd,eAAe;EACjB;;EAEA;IACE,mCAAmC;EACrC;AACF;;AAEA;EACE,+BAA+B;EAC/B,0CAA0C;AAC5C;;AAEA;EACE;IACE;;MAEE,eAAe;IACjB;EACF;EACA;IACE,eAAe;EACjB;AACF","sourcesContent":[".header {\r\n  flex: 0 0 auto;\r\n  width: 100%;\r\n  border-bottom: 1px solid var(--border-color);\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding: 0 1rem 0.5rem;\r\n}\r\n\r\n.game-select {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.game-select_fieldset {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: clamp(1rem, 100%, 25rem);\r\n  gap: 0.25rem;\r\n  padding: 0.5rem 1rem;\r\n  border-radius: var(--border-radius);\r\n\r\n  & .fieldset_label {\r\n    margin-right:1rem;\r\n  }\r\n\r\n  & .fieldset_legend {\r\n    margin: 0 auto;\r\n    padding: 0 1rem;\r\n  }\r\n\r\n  & input {\r\n    accent-color: var(--btn-icon-hover);\r\n  }\r\n}\r\n\r\n.game-select_selector {\r\n  color: var(--common-text-color);\r\n  background-color: var(--blocks-background);\r\n}\r\n\r\n@media (hover: hover) {\r\n  .game-select_fieldset {\r\n    &> input:hover,\r\n    &> label:hover {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n  .game-select_selector:hover {\r\n    cursor: pointer;\r\n  }\r\n}"],"sourceRoot":""}]);
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


@media (hover: hover) {
  .scheme-select:hover {
    cursor: pointer;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/schemeSelector/schemeSelector.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,cAAc;EACd,WAAW;EACX,oBAAoB;;EAEpB,mCAAmC;EACnC,qCAAqC;AACvC;;AAEA;EACE,+BAA+B;EAC/B,0CAA0C;AAC5C;;;AAGA;EACE;IACE,eAAe;EACjB;AACF","sourcesContent":[".scheme-container {\r\n  display: flex;\r\n  flex: 0 0 auto;\r\n  gap: 0.5rem;\r\n  padding: 0.5rem 1rem;\r\n\r\n  border-radius: var(--border-radius);\r\n  border: 1px solid var(--border-color);\r\n}\r\n\r\n.scheme-select {\r\n  color: var(--common-text-color);\r\n  background-color: var(--blocks-background);\r\n}\r\n\r\n\r\n@media (hover: hover) {\r\n  .scheme-select:hover {\r\n    cursor: pointer;\r\n  }\r\n}"],"sourceRoot":""}]);
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
  --btn-icon-hover: rgba(90, 0, 255, 1);
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
  padding: clamp(4px, 1%, 8px) clamp(5px, 1%, 10px);
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
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,mBAAmB;;EAEnB,oCAAoC;EACpC,uCAAuC;;EAEvC,qCAAqC;EACrC,oCAAoC;EACpC,uCAAuC;;EAEvC,4BAA4B;EAC5B,oCAAoC;EACpC,iCAAiC;EACjC,kCAAkC;;EAElC,4BAA4B;EAC5B,+BAA+B;;EAE/B,uBAAuB;EACvB,qCAAqC;AACvC;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,aAAa;;EAEb,YAAY;;EAEZ,wEAAwE;EACxE,+BAA+B;EAC/B,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;;EAEX,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,2BAA2B;;EAE3B,aAAa;EACb,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;;EAEzB,0BAA0B;EAC1B,iBAAiB;EACjB,+BAA+B;EAC/B,iDAAiD;EACjD,qBAAqB;EACrB,0CAA0C;EAC1C,iBAAiB;EACjB,qGAAqG;;EAErG;IACE,aAAa;IACb,YAAY;EACd;AACF;;AAEA;EACE,oBAAoB;EACpB,8BAA8B;AAChC;;AAEA;EACE;IACE,eAAe;IACf,uBAAuB;;IAEvB;MACE,2BAA2B;IAC7B;EACF;AACF;;AAEA;EACE;IACE;MACE,aAAa;IACf;;IAEA;MACE,WAAW;IACb;EACF;AACF;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,4BAA4B;IAC5B,yBAAyB;AAC7B;;AAEA;EACE;IACE,yBAAyB;EAC3B;EACA;IACE,wBAAwB;IACxB,+BAA+B;EACjC;EACA;IACE,0BAA0B;IAC1B,+BAA+B;EACjC;EACA;IACE,0BAA0B;IAC1B,yBAAyB;EAC3B;AACF","sourcesContent":[":root {\r\n  --opacity-cell-text: 0;\r\n  --hover-invert: 0.2;\r\n\r\n  --body-bacground: rgb(230, 255, 230);\r\n  --blocks-background: rgb(231, 255, 255);\r\n\r\n  --cell-background: rgb(240, 240, 240);\r\n  --cell-background-fill: rgb(0, 0, 0);\r\n  --cell-border-color: rgb(200, 200, 200);\r\n\r\n  --border-color: rgb(0, 0, 0);\r\n  --score-lastgame: rgb(165, 245, 140);\r\n  --common-text-color: rgb(0, 0, 0);\r\n  --score-shadow: rgb(125, 125, 125);\r\n\r\n  --color-warning: 255, 80, 80;\r\n  --color-warning-shadow: 0, 0, 0;\r\n\r\n  --border-radius: 0.2rem;\r\n  --btn-icon-hover: rgba(90, 0, 255, 1);\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  height: 100dvh;\r\n}\r\n\r\n.body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding: 1rem;\r\n\r\n  height: 100%;\r\n\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  color: var(--common-text-color);;\r\n  background-color: var(--body-bacground);\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n\r\n  flex: 1 0 auto;\r\n}\r\n\r\n.button-container {\r\n  container-name: buttons;\r\n  container-type: inline-size;\r\n\r\n  display: flex;\r\n  flex: 1 0 2rem;\r\n  height: 100%;\r\n}\r\n\r\n.button {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: clamp(5px, 5%, 10px);\r\n\r\n  transition-duration: 200ms;\r\n  user-select: none;\r\n  color: var(--common-text-color);\r\n  padding: clamp(4px, 1%, 8px) clamp(5px, 1%, 10px);\r\n  border-radius: 0.3rem;\r\n  background-color: var(--blocks-background);\r\n  font-weight: bold;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\r\n  & svg {\r\n    width: 1.5rem;\r\n    height: auto;\r\n  }\r\n}\r\n\r\n.gameover {\r\n  pointer-events: none;\r\n  filter: blur(1px) opacity(0.8);\r\n}\r\n\r\n@media (hover: hover) {\r\n  .button:hover {\r\n    cursor: pointer;\r\n    filter: brightness(1.2);\r\n\r\n    & svg {\r\n      fill: var(--btn-icon-hover);\r\n    }\r\n  }\r\n}\r\n\r\n@container buttons (max-width: 110px) {\r\n  .button {\r\n    & span {\r\n      display: none;\r\n    }\r\n\r\n    & svg {\r\n      width: 2rem;\r\n    }\r\n  }\r\n}\r\n\r\n.animation {\r\n    animation-name: roll;\r\n    animation-duration: 5s;\r\n    animation-iteration-count: 1;\r\n    animation-fill-mode: none;\r\n}\r\n\r\n@keyframes roll {\r\n  0% {\r\n    fill: var(--border-color);\r\n  }\r\n  20% {\r\n    transform: rotateY(0deg);\r\n    fill: rgb(var(--color-warning));\r\n  }\r\n  80% {\r\n    transform: rotateY(360deg);\r\n    fill: rgb(var(--color-warning));\r\n  }\r\n  100% {\r\n    transform: rotateY(360deg);\r\n    fill: var(--border-color);\r\n  }\r\n}"],"sourceRoot":""}]);
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
      'btn-icon-hover': 'rgba(90, 0, 255, 1)',
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
      'btn-icon-hover': 'rgba(40, 70, 120, 1)',
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
  });
  btn.addEventListener('click', clickCavein);
  return btn;
});

const clickCavein = () => {
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.showCellsValue = true;
  _state_state__WEBPACK_IMPORTED_MODULE_0__["default"].game.isGameStarted = false;
  (0,_timer_timer__WEBPACK_IMPORTED_MODULE_2__.startTimer)(false);
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
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/createNode */ "./src/utils/createNode.js");
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/localStorage */ "./src/utils/localStorage.js");
/* harmony import */ var _assets_icons_load_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/icons/load.svg */ "./src/assets/icons/load.svg");
/* harmony import */ var _btnLoad_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./btnLoad.css */ "./src/components/buttons/load/btnLoad.css");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const btnLoad = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_0__.createButton)({
    txt: 'Continue last game',
    icon: _assets_icons_load_svg__WEBPACK_IMPORTED_MODULE_2__,
  });
  btnLoad.addEventListener('click', _utils_localStorage__WEBPACK_IMPORTED_MODULE_1__.loadState);
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
/* harmony import */ var _gameSelector_gameSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gameSelector/gameSelector */ "./src/components/gameSelector/gameSelector.js");
/* harmony import */ var _plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../plotContainer/renderDesk */ "./src/components/plotContainer/renderDesk.js");
/* harmony import */ var _timer_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../timer/timer */ "./src/components/timer/timer.js");
/* harmony import */ var _assets_icons_random_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/icons/random.svg */ "./src/assets/icons/random.svg");
/* harmony import */ var _btnRandom_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./btnRandom.css */ "./src/components/buttons/random/btnRandom.css");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const button = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createButton)({ icon: _assets_icons_random_svg__WEBPACK_IMPORTED_MODULE_5__, txt: 'Random game' });
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
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/createNode */ "./src/utils/createNode.js");
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/localStorage */ "./src/utils/localStorage.js");
/* harmony import */ var _assets_icons_bookmarks_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/icons/bookmarks.svg */ "./src/assets/icons/bookmarks.svg");
/* harmony import */ var _btnSave_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./btnSave.css */ "./src/components/buttons/save/btnSave.css");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const btnSave = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_0__.createButton)({
    txt: 'Save game',
    icon: _assets_icons_bookmarks_svg__WEBPACK_IMPORTED_MODULE_2__,
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
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createNode */ "./src/utils/createNode.js");
/* harmony import */ var _utils_createOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/createOptions */ "./src/utils/createOptions.js");
/* harmony import */ var _plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plotContainer/renderDesk */ "./src/components/plotContainer/renderDesk.js");
/* harmony import */ var _timer_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../timer/timer */ "./src/components/timer/timer.js");
/* harmony import */ var _gameSelector_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameSelector.css */ "./src/components/gameSelector/gameSelector.css");







const gameSelector = () => {
  const header = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_1__.createElement)({ tag: 'header', cls: 'header' });
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
/* harmony import */ var _utils_createNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/createNode */ "./src/utils/createNode.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
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
    const error = 'random должен быть меньше count';
    console.assert(random < count, { random, count, error });

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
/* harmony export */   loadState: () => (/* binding */ loadState),
/* harmony export */   saveState: () => (/* binding */ saveState)
/* harmony export */ });
/* harmony import */ var _components_gameSelector_gameSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/gameSelector/gameSelector */ "./src/components/gameSelector/gameSelector.js");
/* harmony import */ var _components_plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/plotContainer/renderDesk */ "./src/components/plotContainer/renderDesk.js");
/* harmony import */ var _components_timer_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/timer/timer */ "./src/components/timer/timer.js");
/* harmony import */ var _assets_icons_cross_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/cross.svg */ "./src/assets/icons/cross.svg");
/* harmony import */ var _assets_icons_fill_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/fill.svg */ "./src/assets/icons/fill.svg");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/state */ "./src/state/state.js");








const saveState = () => {
  const { game } = _state_state__WEBPACK_IMPORTED_MODULE_5__["default"];
  localStorage.setItem(_state_state__WEBPACK_IMPORTED_MODULE_5__["default"].lsKeyState, JSON.stringify(game));
};

const loadState = () => {
  try {
    const ls = localStorage.getItem(_state_state__WEBPACK_IMPORTED_MODULE_5__["default"].lsKeyState);
    const game = JSON.parse(ls);
    if (game) {
      _state_state__WEBPACK_IMPORTED_MODULE_5__["default"].game = game;
      (0,_components_plotContainer_renderDesk__WEBPACK_IMPORTED_MODULE_1__.updateDesk)();
      (0,_components_gameSelector_gameSelector__WEBPACK_IMPORTED_MODULE_0__.switchGame)(_state_state__WEBPACK_IMPORTED_MODULE_5__["default"].game.currentGame);
      (0,_components_timer_timer__WEBPACK_IMPORTED_MODULE_2__.startTimer)(true);
      const opacity = _state_state__WEBPACK_IMPORTED_MODULE_5__["default"].game.showCellsValue ? '0.4' : '0';
      _state_state__WEBPACK_IMPORTED_MODULE_5__["default"].html.main.style.setProperty('--opacity-cell-text', opacity);

      if (_state_state__WEBPACK_IMPORTED_MODULE_5__["default"].game.brush === 'fill') {
        _state_state__WEBPACK_IMPORTED_MODULE_5__["default"].html.iconBrushMode.innerHTML = _assets_icons_fill_svg__WEBPACK_IMPORTED_MODULE_4__;
      } else _state_state__WEBPACK_IMPORTED_MODULE_5__["default"].html.iconBrushMode.innerHTML = _assets_icons_cross_svg__WEBPACK_IMPORTED_MODULE_3__;
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

module.exports = JSON.parse('[{"name":"сумка","plot":[["⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"]]},{"name":"троллейбус","plot":[["⚪","⚪","⚪","⚪","⚫","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪"],["⚫","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚪","⚪","⚫","⚫","⚪","⚫","⚫","⚫","⚪","⚫","⚫","⚪","⚪","⚫"],["⚫","⚪","⚫","⚫","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚫","⚫","⚪","⚫"],["⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪"],["⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]},{"name":"весы правосудия","plot":[["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚪"],["⚪","⚪","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚪","⚪"],["⚪","⚫","⚪","⚫","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚫","⚪","⚫","⚪"],["⚫","⚪","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪","⚪","⚫"],["⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚫"],["⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪"]]},{"name":"храм","plot":[["⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪"],["⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚫","⚪"],["⚫","⚪","⚪","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚪","⚪","⚫","⚪"],["⚪","⚪","⚪","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪"],["⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪"],["⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪"],["⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪"],["⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪"],["⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪"],["⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"]]},{"name":"микки-маус","plot":[["⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫"],["⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚫"],["⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚪","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚫"],["⚪","⚪","⚫","⚪","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪","⚪","⚫","⚫"],["⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚪","⚫","⚫"],["⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚫"],["⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚪","⚪","⚫","⚫"],["⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚫","⚪","⚪","⚫","⚫","⚫"],["⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫"]]},{"name":"вишня","plot":[["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚫","⚪","⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]},{"name":"catwoman","plot":[["⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪"],["⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪"],["⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚪"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚫","⚪"],["⚪","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚪"],["⚪","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚪"],["⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪"],["⚪","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚪"],["⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪"],["⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]},{"name":"привидение","plot":[["⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚪","⚫","⚪","⚫","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚪"],["⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪"],["⚪","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚪","⚪"],["⚪","⚪","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚪","⚪","⚪"],["⚪","⚪","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚫","⚪","⚪","⚫","⚫","⚪","⚪","⚫","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪"]]},{"name":"улитка","plot":[["⚫","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚫","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪"],["⚪","⚪","⚫","⚫","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪"],["⚪","⚪","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚫","⚪"],["⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚫","⚪","⚪","⚪","⚫","⚪","⚪","⚫"],["⚪","⚪","⚫","⚪","⚫","⚪","⚪","⚫","⚫","⚪","⚪","⚫","⚪","⚪","⚫"],["⚪","⚪","⚫","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚫"],["⚪","⚪","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚫","⚪"],["⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚫"],["⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚫"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]},{"name":"кот или кошка","plot":[["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪"],["⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪"],["⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫"],["⚫","⚫","⚪","⚫","⚪","⚫","⚫","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫"],["⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚫"],["⚪","⚫","⚫","⚫","⚫","⚫","⚪","⚫","⚫","⚫","⚫","⚫","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚪","⚪","⚪","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚫","⚫","⚫","⚪","⚪","⚫","⚫","⚫","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"],["⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪","⚪"]]}]');

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
/* harmony import */ var _components_schemeSelector_schemeSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/schemeSelector/schemeSelector */ "./src/components/schemeSelector/schemeSelector.js");
/* harmony import */ var _components_score_score__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/score/score */ "./src/components/score/score.js");
/* harmony import */ var _components_gameSelector_gameSelector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/gameSelector/gameSelector */ "./src/components/gameSelector/gameSelector.js");
/* harmony import */ var _components_buttons_mode_btnSwitchMode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/buttons/mode/btnSwitchMode */ "./src/components/buttons/mode/btnSwitchMode.js");
/* harmony import */ var _utils_animation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/animation */ "./src/utils/animation.js");
















function game() {
  (0,_state_initState__WEBPACK_IMPORTED_MODULE_4__["default"])();
  console.log(_state_state__WEBPACK_IMPORTED_MODULE_2__["default"]);
  _state_state__WEBPACK_IMPORTED_MODULE_2__["default"].html.main = (0,_utils_createNode__WEBPACK_IMPORTED_MODULE_8__.createElement)({ tag: 'main', cls: 'main' });
  _state_state__WEBPACK_IMPORTED_MODULE_2__["default"].html.main.append((0,_components_plotContainer_plotContainer__WEBPACK_IMPORTED_MODULE_7__["default"])());
  _state_state__WEBPACK_IMPORTED_MODULE_2__["default"].html.main.append((0,_components_buttons_mode_btnSwitchMode__WEBPACK_IMPORTED_MODULE_13__["default"])());
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
(0,_utils_animation__WEBPACK_IMPORTED_MODULE_14__.startRandomSVGanimation)();
window.addEventListener('keypress', _utils_windowHandle__WEBPACK_IMPORTED_MODULE_6__["default"]);

// добавить чекбокс отключения звуков
// добавить заполнение "нажал и потащил"
// добавить favicon

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFlBQVksY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxXQUFXLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFVBQVUsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEs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Q0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNxQjtBQUNmO0FBQ2M7QUFDTjtBQUNxQjtBQUNmO0FBQ3FCO0FBQ2xCO0FBQ0Q7QUFDc0I7QUFDdkI7QUFDcUI7QUFDRjtBQUNSO0FBQzVEO0FBQ0E7QUFDQSxFQUFFLDREQUFTO0FBQ1gsY0FBYyxvREFBSztBQUNuQixFQUFFLG9EQUFLLGFBQWEsZ0VBQWEsR0FBRywwQkFBMEI7QUFDOUQsRUFBRSxvREFBSyxrQkFBa0IsbUZBQWE7QUFDdEMsRUFBRSxvREFBSyxrQkFBa0IsbUZBQWE7QUFDdEMsRUFBRSxvREFBSztBQUNQLFNBQVMsb0RBQUs7QUFDZDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0ZBQWM7QUFDbkMscUJBQXFCLG9GQUFZO0FBQ2pDLHFCQUFxQiw4REFBSztBQUMxQjtBQUNBLHFCQUFxQixxRUFBTTtBQUMzQixxQkFBcUIsK0RBQUs7QUFDMUIsZ0ZBQVU7QUFDVixnRUFBYSxDQUFDLG9EQUFLLGtCQUFrQixvREFBSztBQUMxQywwRUFBdUI7QUFDdkIsb0NBQW9DLDJEQUFZO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9jYXZlaW4vYnRuQ2F2ZWluLmNzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2xvYWQvYnRuTG9hZC5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9tb2RlL2J0blN3aXRjaE1vZGUuY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvcmFuZG9tL2J0blJhbmRvbS5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9yZXNldC9idG5SZXNldC5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9zYXZlL2J0blNhdmUuY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2dhbWVTZWxlY3Rvci9nYW1lU2VsZWN0b3IuY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvY2VsbC9jZWxsLmNzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9wbG90Q29udGFpbmVyL3Bsb3RDb250YWluZXIuY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3NjaGVtZVNlbGVjdG9yL3NjaGVtZVNlbGVjdG9yLmNzcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9zY29yZS9zY29yZS5jc3MiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvdGltZXIvdGltZXIuY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL25vbm9ncmFtcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9jYXZlaW4vYnRuQ2F2ZWluLmNzcz81Y2Q5Iiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvbG9hZC9idG5Mb2FkLmNzcz8xNWEzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvbW9kZS9idG5Td2l0Y2hNb2RlLmNzcz84MTk5Iiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvcmFuZG9tL2J0blJhbmRvbS5jc3M/NDFhYSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL3Jlc2V0L2J0blJlc2V0LmNzcz82NzQwIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvc2F2ZS9idG5TYXZlLmNzcz8wM2Y5Iiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY3NzP2I3ODkiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvZ2FtZVNlbGVjdG9yL2dhbWVTZWxlY3Rvci5jc3M/ZGE4NiIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9wbG90Q29udGFpbmVyL2NlbGwvY2VsbC5jc3M/MmQ4NyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9wbG90Q29udGFpbmVyL3Bsb3RDb250YWluZXIuY3NzPzVjOWQiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvc2NoZW1lU2VsZWN0b3Ivc2NoZW1lU2VsZWN0b3IuY3NzPzc1YWEiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvc2NvcmUvc2NvcmUuY3NzP2ZlYWUiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvdGltZXIvdGltZXIuY3NzP2E4ZTkiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hc3NldHMvc2NoZW1lcy9jb2xvclNjaGVtZXMuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9jYXZlaW4vYnRuQ2F2ZWluLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvbG9hZC9idG5Mb2FkLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvbW9kZS9idG5Td2l0Y2hNb2RlLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvcmFuZG9tL2J0blJhbmRvbS4uanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9yZXNldC9idG5SZXNldC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL3NhdmUvYnRuU2F2ZS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL2dhbWVTZWxlY3Rvci9nYW1lU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvcGxvdENvbnRhaW5lci9jZWxsL25ld0NlbGwuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2NvbXBvbmVudHMvcGxvdENvbnRhaW5lci9wbG90Q29udGFpbmVyLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvcmVuZGVyRGVzay5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9zY2hlbWVTZWxlY3Rvci9zY2hlbWVTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy9zY29yZS9zY29yZS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvY29tcG9uZW50cy90aW1lci90aW1lci5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvc3RhdGUvaW5pdFN0YXRlLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvdXRpbHMvYW5pbWF0aW9uLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9jcmVhdGVOb2RlLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9jcmVhdGVPcHRpb25zLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9nYW1lUmVjb3JkLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9nZXRQbG90LmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL3V0aWxzL3JvdGF0ZU1hdHJpeC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvdXRpbHMvd2luZG93SGFuZGxlLmpzIiwid2VicGFjazovL25vbm9ncmFtcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmJ0bi1zd2l0Y2gtY29udGFpbmVyIHtcclxuICBjb250YWluZXItbmFtZTogYnRuLXN3aXRjaDtcclxuICBjb250YWluZXItdHlwZTogaW5saW5lLXNpemU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cclxuXHJcbiAgJiBzcGFuIHtcclxuICAgICAgZmxleDogMSAxIDYwJTtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICYgc3ZnIHtcclxuICAgIGZsZXg6IDEgMSAyMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AY29udGFpbmVyIGJ0bi1zd2l0Y2ggKG1pbi13aWR0aDogMTByZW0pIHtcclxuICAuYnRuLXN3aXRjaC1jb250YWluZXIge1xyXG4gICAgJiBzcGFuIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgfVxyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9tb2RlL2J0blN3aXRjaE1vZGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUEyQjs7RUFFM0IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVzs7RUFFWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjs7RUFFcEI7TUFDSSxhQUFhO01BQ2IsYUFBYTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRTtNQUNFLGVBQWU7SUFDakI7RUFDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5idG4tc3dpdGNoLWNvbnRhaW5lciB7XFxyXFxuICBjb250YWluZXItbmFtZTogYnRuLXN3aXRjaDtcXHJcXG4gIGNvbnRhaW5lci10eXBlOiBpbmxpbmUtc2l6ZTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xcclxcblxcclxcbiAgJiBzcGFuIHtcXHJcXG4gICAgICBmbGV4OiAxIDEgNjAlO1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIHN2ZyB7XFxyXFxuICAgIGZsZXg6IDEgMSAyMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBjb250YWluZXIgYnRuLXN3aXRjaCAobWluLXdpZHRoOiAxMHJlbSkge1xcclxcbiAgLmJ0bi1zd2l0Y2gtY29udGFpbmVyIHtcXHJcXG4gICAgJiBzcGFuIHtcXHJcXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiBjbGFtcCgzMjBweCwgMTAwJSwgMTAyNHB4KTtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogY2xhbXAoNXB4LCAyJSwgMjBweCk7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IGNsYW1wKDMyMHB4LCAxMDAlLCAxMDI0cHgpO1xcclxcbiAgZmxleDogMCAwIGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IGNsYW1wKDVweCwgMiUsIDIwcHgpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5oZWFkZXIge1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgcGFkZGluZzogMCAxcmVtIDAuNXJlbTtcclxufVxyXG5cclxuLmdhbWUtc2VsZWN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uZ2FtZS1zZWxlY3RfZmllbGRzZXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogY2xhbXAoMXJlbSwgMTAwJSwgMjVyZW0pO1xyXG4gIGdhcDogMC4yNXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuXHJcbiAgJiAuZmllbGRzZXRfbGFiZWwge1xyXG4gICAgbWFyZ2luLXJpZ2h0OjFyZW07XHJcbiAgfVxyXG5cclxuICAmIC5maWVsZHNldF9sZWdlbmQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgfVxyXG5cclxuICAmIGlucHV0IHtcclxuICAgIGFjY2VudC1jb2xvcjogdmFyKC0tYnRuLWljb24taG92ZXIpO1xyXG4gIH1cclxufVxyXG5cclxuLmdhbWUtc2VsZWN0X3NlbGVjdG9yIHtcclxuICBjb2xvcjogdmFyKC0tY29tbW9uLXRleHQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcclxuICAuZ2FtZS1zZWxlY3RfZmllbGRzZXQge1xyXG4gICAgJj4gaW5wdXQ6aG92ZXIsXHJcbiAgICAmPiBsYWJlbDpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgLmdhbWUtc2VsZWN0X3NlbGVjdG9yOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2dhbWVTZWxlY3Rvci9nYW1lU2VsZWN0b3IuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsbUNBQW1DOztFQUVuQztJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUNBQW1DO0VBQ3JDO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0U7SUFDRTs7TUFFRSxlQUFlO0lBQ2pCO0VBQ0Y7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXHJcXG4gIGZsZXg6IDAgMCBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwIDFyZW0gMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1zZWxlY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtc2VsZWN0X2ZpZWxkc2V0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogY2xhbXAoMXJlbSwgMTAwJSwgMjVyZW0pO1xcclxcbiAgZ2FwOiAwLjI1cmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG5cXHJcXG4gICYgLmZpZWxkc2V0X2xhYmVsIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OjFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIC5maWVsZHNldF9sZWdlbmQge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiBpbnB1dCB7XFxyXFxuICAgIGFjY2VudC1jb2xvcjogdmFyKC0tYnRuLWljb24taG92ZXIpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1zZWxlY3Rfc2VsZWN0b3Ige1xcclxcbiAgY29sb3I6IHZhcigtLWNvbW1vbi10ZXh0LWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXHJcXG4gIC5nYW1lLXNlbGVjdF9maWVsZHNldCB7XFxyXFxuICAgICY+IGlucHV0OmhvdmVyLFxcclxcbiAgICAmPiBsYWJlbDpob3ZlciB7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuZ2FtZS1zZWxlY3Rfc2VsZWN0b3I6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNlbGwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2tzLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4uY2VsbFtyb2xlPVwiZ2FtZVwiXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1iYWNrZ3JvdW5kKTtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS1vcGFjaXR5LWNlbGwtdGV4dCkpO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1jZWxsLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5jZWxsX2ZpbGxbcm9sZT1cImdhbWVcIl0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtYmFja2dyb3VuZC1maWxsKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jZWxsLWJhY2tncm91bmQtZmlsbCk7XHJcbn1cclxuXHJcbi5jZWxsW3JvbGU9XCJlbXB0eVwiXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2tzLWJhY2tncm91bmQpO1xyXG4gIGdyaWQtcm93OiAxIC8gc3BhbiB2YXIoLS1yb3ctY291bnQpO1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiB2YXIoLS1jb2x1bW4tY291bnQpO1xyXG59XHJcblxyXG4uY2VsbFtyb3ddIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxufVxyXG5cclxuLmNlbGxbZmlyc3Qtcm93XSB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5jZWxsW2NvbF0ge1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5jZWxsW2ZpcnN0LWNvbF0ge1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxufVxyXG5cclxuLmNlbGxfY2hlY2tlZFtyb2xlPVwiZ2FtZVwiXSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2VsbF9jaGVja2VkW3JvbGU9XCJnYW1lXCJdOjphZnRlcixcclxuLmNlbGxfY2hlY2tlZFtyb2xlPVwiZ2FtZVwiXTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEyMCU7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgdG9wOiA0NSU7XHJcbiAgbGVmdDogLTEwJTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY2VsbF9jaGVja2VkW3JvbGU9XCJnYW1lXCJdOjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWigtNDVkZWcpO1xyXG59XHJcblxyXG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgIHtcclxuLmNlbGxbcm9sZT1cImdhbWVcIl06aG92ZXIsXHJcbi5jZWxsW3JvbGU9XCJjbHVlXCJdOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbi5jZWxsW3JvbGU9XCJnYW1lXCJdOmhvdmVyIHtcclxuICAgIGZpbHRlcjogaW52ZXJ0KHZhcigtLWhvdmVyLWludmVydCkpO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvY2VsbC9jZWxsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixpQkFBaUI7RUFDakIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLDhDQUE4QztFQUM5QywyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSw2Q0FBNkM7RUFDN0MsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLG1DQUFtQztFQUNuQyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxRQUFRO0VBQ1IsUUFBUTtFQUNSLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0FBQ0E7O0lBRUksZUFBZTtFQUNqQjtBQUNGO0lBQ0ksbUNBQW1DO0VBQ3JDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNlbGwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2tzLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbFtyb2xlPVxcXCJnYW1lXFxcIl0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1iYWNrZ3JvdW5kKTtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIHZhcigtLW9wYWNpdHktY2VsbC10ZXh0KSk7XFxyXFxuICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tY2VsbC1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbF9maWxsW3JvbGU9XFxcImdhbWVcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWJhY2tncm91bmQtZmlsbCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jZWxsLWJhY2tncm91bmQtZmlsbCk7XFxyXFxufVxcclxcblxcclxcbi5jZWxsW3JvbGU9XFxcImVtcHR5XFxcIl0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2tzLWJhY2tncm91bmQpO1xcclxcbiAgZ3JpZC1yb3c6IDEgLyBzcGFuIHZhcigtLXJvdy1jb3VudCk7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gdmFyKC0tY29sdW1uLWNvdW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxbcm93XSB7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxbZmlyc3Qtcm93XSB7XFxyXFxuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxbY29sXSB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbFtmaXJzdC1jb2xdIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxfY2hlY2tlZFtyb2xlPVxcXCJnYW1lXFxcIl0ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbF9jaGVja2VkW3JvbGU9XFxcImdhbWVcXFwiXTo6YWZ0ZXIsXFxyXFxuLmNlbGxfY2hlY2tlZFtyb2xlPVxcXCJnYW1lXFxcIl06OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEyMCU7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIGluc2V0OiAwO1xcclxcbiAgdG9wOiA0NSU7XFxyXFxuICBsZWZ0OiAtMTAlO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbF9jaGVja2VkW3JvbGU9XFxcImdhbWVcXFwiXTo6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlWigtNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgIHtcXHJcXG4uY2VsbFtyb2xlPVxcXCJnYW1lXFxcIl06aG92ZXIsXFxyXFxuLmNlbGxbcm9sZT1cXFwiY2x1ZVxcXCJdOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbi5jZWxsW3JvbGU9XFxcImdhbWVcXFwiXTpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KHZhcigtLWhvdmVyLWludmVydCkpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCAgLmdhbWUtY29udGFpbmVyIHtcclxuICAgIC0tY29sdW1ucy1jb3VudDogMjA7XHJcblxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWNvbHVtbnMtY291bnQpLCAxZnIpO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTRweCwgMzAwcHggLyB2YXIoLS1jb2x1bW5zLWNvdW50KSwgMjBweCk7XHJcblxyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XHJcbiAgfVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvcGxvdENvbnRhaW5lci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkVBQUU7SUFDRSxtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYix3REFBd0Q7O0lBRXhELDBEQUEwRDs7SUFFMUQscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0NBQW9DO0VBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiAgLmdhbWUtY29udGFpbmVyIHtcXHJcXG4gICAgLS1jb2x1bW5zLWNvdW50OiAyMDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tY29sdW1ucy1jb3VudCksIDFmcik7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTRweCwgMzAwcHggLyB2YXIoLS1jb2x1bW5zLWNvdW50KSwgMjBweCk7XFxyXFxuXFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xcclxcbiAgfVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNjaGVtZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5zY2hlbWUtc2VsZWN0IHtcclxuICBjb2xvcjogdmFyKC0tY29tbW9uLXRleHQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XHJcbiAgLnNjaGVtZS1zZWxlY3Q6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvc2NoZW1lU2VsZWN0b3Ivc2NoZW1lU2VsZWN0b3IuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXO0VBQ1gsb0JBQW9COztFQUVwQixtQ0FBbUM7RUFDbkMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDBDQUEwQztBQUM1Qzs7O0FBR0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2NoZW1lLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMCAwIGF1dG87XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcblxcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NoZW1lLXNlbGVjdCB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29tbW9uLXRleHQtY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2tzLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcclxcbiAgLnNjaGVtZS1zZWxlY3Q6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmRpYWxvZyB7XHJcbiAgbGVmdDogLTEwcmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmRpYWxvZzpoYXMoZGl2LnNjb3JlX3Nob3cpIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBkdmg7XHJcbiAgaW5zZXQ6IDA7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgLS13IDogY2xhbXAoMTByZW0sIDkwJSwgMjVyZW0pO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHRvcDogMnJlbTtcclxuICBsZWZ0OiAxMDAlO1xyXG4gIHdpZHRoOiB2YXIoLS13KTtcclxuICBtaW4taGVpZ2h0OiAxMHJlbTtcclxuXHJcbiAgY29sb3I6IHZhcigtLWNvbW1vbi10ZXh0LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2tzLWJhY2tncm91bmQpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjVyZW0gMC41cmVtIDAuNXJlbSB2YXIoLS1zY29yZS1zaGFkb3cpKTtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAxMDBtcztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcclxufVxyXG5cclxuLmNvbnRhaW5lcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAn4qyMJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDFyZW07XHJcbiAgbGVmdDogLTIuMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG5cclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2tzLWJhY2tncm91bmQpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKGhvdmVyKSB7XHJcbiAgLmNvbnRhaW5lcjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uc2NvcmVfaDEge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNjb3JlX3Nob3cge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxufVxyXG5cclxuLmNvbnRhaW5lcl9fcmVjb3JkcyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgMmZyO1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBnYXA6IDAuMnJlbTtcclxuXHJcbiAgbWluLWhlaWdodDogMXJlbTtcclxuXHJcbiAgYm9yZGVyOiAxcHMgc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcblxyXG4gICYgZGl2Om50aC1jaGlsZCgtbiszKSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICB9XHJcblxyXG4gICYgZGl2Om50aC1jaGlsZCgzbi0xKSB7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICYgZGl2Om50aC1jaGlsZCgzbikge1xyXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVjb3JkX2xhc3QtZ2FtZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NvcmUtbGFzdGdhbWUpO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9zY29yZS9zY29yZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLFFBQVE7O0VBRVIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCOztFQUVqQiwrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLDBDQUEwQztFQUMxQyxxQ0FBcUM7RUFDckMsNkRBQTZEO0VBQzdELHVCQUF1QjtFQUN2QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7O0VBRVosaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQiwwQ0FBMEM7RUFDMUMscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixXQUFXOztFQUVYLGdCQUFnQjs7RUFFaEIscUNBQXFDO0VBQ3JDLHFCQUFxQjs7RUFFckI7SUFDRSw0Q0FBNEM7RUFDOUM7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZGlhbG9nIHtcXHJcXG4gIGxlZnQ6IC0xMHJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZzpoYXMoZGl2LnNjb3JlX3Nob3cpIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMGR2aDtcXHJcXG4gIGluc2V0OiAwO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIC0tdyA6IGNsYW1wKDEwcmVtLCA5MCUsIDI1cmVtKTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICB0b3A6IDJyZW07XFxyXFxuICBsZWZ0OiAxMDAlO1xcclxcbiAgd2lkdGg6IHZhcigtLXcpO1xcclxcbiAgbWluLWhlaWdodDogMTByZW07XFxyXFxuXFxyXFxuICBjb2xvcjogdmFyKC0tY29tbW9uLXRleHQtY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2tzLWJhY2tncm91bmQpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMC41cmVtIDAuNXJlbSAwLjVyZW0gdmFyKC0tc2NvcmUtc2hhZG93KSk7XFxyXFxuICB0cmFuc2l0aW9uLWRlbGF5OiAxMDBtcztcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJ+KsjCc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgdG9wOiAxcmVtO1xcclxcbiAgbGVmdDogLTIuMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2Nrcy1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKGhvdmVyKSB7XFxyXFxuICAuY29udGFpbmVyOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVfaDEge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlX3Nob3cge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXJfX3JlY29yZHMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmciAyZnI7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBnYXA6IDAuMnJlbTtcXHJcXG5cXHJcXG4gIG1pbi1oZWlnaHQ6IDFyZW07XFxyXFxuXFxyXFxuICBib3JkZXI6IDFwcyBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcblxcclxcbiAgJiBkaXY6bnRoLWNoaWxkKC1uKzMpIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIGRpdjpudGgtY2hpbGQoM24tMSkge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgZGl2Om50aC1jaGlsZCgzbikge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnJlY29yZF9sYXN0LWdhbWUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NvcmUtbGFzdGdhbWUpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50aW1lciB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3RpbWVyL3RpbWVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGltZXIge1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIC0tb3BhY2l0eS1jZWxsLXRleHQ6IDA7XHJcbiAgLS1ob3Zlci1pbnZlcnQ6IDAuMjtcclxuXHJcbiAgLS1ib2R5LWJhY2dyb3VuZDogcmdiKDIzMCwgMjU1LCAyMzApO1xyXG4gIC0tYmxvY2tzLWJhY2tncm91bmQ6IHJnYigyMzEsIDI1NSwgMjU1KTtcclxuXHJcbiAgLS1jZWxsLWJhY2tncm91bmQ6IHJnYigyNDAsIDI0MCwgMjQwKTtcclxuICAtLWNlbGwtYmFja2dyb3VuZC1maWxsOiByZ2IoMCwgMCwgMCk7XHJcbiAgLS1jZWxsLWJvcmRlci1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xyXG5cclxuICAtLWJvcmRlci1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIC0tc2NvcmUtbGFzdGdhbWU6IHJnYigxNjUsIDI0NSwgMTQwKTtcclxuICAtLWNvbW1vbi10ZXh0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgLS1zY29yZS1zaGFkb3c6IHJnYigxMjUsIDEyNSwgMTI1KTtcclxuXHJcbiAgLS1jb2xvci13YXJuaW5nOiAyNTUsIDgwLCA4MDtcclxuICAtLWNvbG9yLXdhcm5pbmctc2hhZG93OiAwLCAwLCAwO1xyXG5cclxuICAtLWJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICAtLWJ0bi1pY29uLWhvdmVyOiByZ2JhKDkwLCAwLCAyNTUsIDEpO1xyXG59XHJcblxyXG4qIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sIHtcclxuICBoZWlnaHQ6IDEwMGR2aDtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB2YXIoLS1jb21tb24tdGV4dC1jb2xvcik7O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFjZ3JvdW5kKTtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuNXJlbTtcclxuXHJcbiAgZmxleDogMSAwIGF1dG87XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICBjb250YWluZXItbmFtZTogYnV0dG9ucztcclxuICBjb250YWluZXItdHlwZTogaW5saW5lLXNpemU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMSAwIDJyZW07XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogY2xhbXAoNXB4LCA1JSwgMTBweCk7XHJcblxyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1jb21tb24tdGV4dC1jb2xvcik7XHJcbiAgcGFkZGluZzogY2xhbXAoNHB4LCAxJSwgOHB4KSBjbGFtcCg1cHgsIDElLCAxMHB4KTtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2tzLWJhY2tncm91bmQpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuICAmIHN2ZyB7XHJcbiAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLmdhbWVvdmVyIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBmaWx0ZXI6IGJsdXIoMXB4KSBvcGFjaXR5KDAuOCk7XHJcbn1cclxuXHJcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XHJcbiAgLmJ1dHRvbjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuXHJcbiAgICAmIHN2ZyB7XHJcbiAgICAgIGZpbGw6IHZhcigtLWJ0bi1pY29uLWhvdmVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBjb250YWluZXIgYnV0dG9ucyAobWF4LXdpZHRoOiAxMTBweCkge1xyXG4gIC5idXR0b24ge1xyXG4gICAgJiBzcGFuIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmIHN2ZyB7XHJcbiAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFuaW1hdGlvbiB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogcm9sbDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogbm9uZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb2xsIHtcclxuICAwJSB7XHJcbiAgICBmaWxsOiB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgZmlsbDogcmdiKHZhcigtLWNvbG9yLXdhcm5pbmcpKTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xyXG4gICAgZmlsbDogcmdiKHZhcigtLWNvbG9yLXdhcm5pbmcpKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcclxuICAgIGZpbGw6IHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7O0VBRW5CLG9DQUFvQztFQUNwQyx1Q0FBdUM7O0VBRXZDLHFDQUFxQztFQUNyQyxvQ0FBb0M7RUFDcEMsdUNBQXVDOztFQUV2Qyw0QkFBNEI7RUFDNUIsb0NBQW9DO0VBQ3BDLGlDQUFpQztFQUNqQyxrQ0FBa0M7O0VBRWxDLDRCQUE0QjtFQUM1QiwrQkFBK0I7O0VBRS9CLHVCQUF1QjtFQUN2QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTs7RUFFYixZQUFZOztFQUVaLHdFQUF3RTtFQUN4RSwrQkFBK0I7RUFDL0IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXOztFQUVYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsMkJBQTJCOztFQUUzQixhQUFhO0VBQ2IsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCOztFQUV6QiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixpREFBaUQ7RUFDakQscUJBQXFCO0VBQ3JCLDBDQUEwQztFQUMxQyxpQkFBaUI7RUFDakIscUdBQXFHOztFQUVyRztJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZix1QkFBdUI7O0lBRXZCO01BQ0UsMkJBQTJCO0lBQzdCO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0U7TUFDRSxhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxXQUFXO0lBQ2I7RUFDRjtBQUNGOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QiwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQiwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQix5QkFBeUI7RUFDM0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLW9wYWNpdHktY2VsbC10ZXh0OiAwO1xcclxcbiAgLS1ob3Zlci1pbnZlcnQ6IDAuMjtcXHJcXG5cXHJcXG4gIC0tYm9keS1iYWNncm91bmQ6IHJnYigyMzAsIDI1NSwgMjMwKTtcXHJcXG4gIC0tYmxvY2tzLWJhY2tncm91bmQ6IHJnYigyMzEsIDI1NSwgMjU1KTtcXHJcXG5cXHJcXG4gIC0tY2VsbC1iYWNrZ3JvdW5kOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxyXFxuICAtLWNlbGwtYmFja2dyb3VuZC1maWxsOiByZ2IoMCwgMCwgMCk7XFxyXFxuICAtLWNlbGwtYm9yZGVyLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XFxyXFxuXFxyXFxuICAtLWJvcmRlci1jb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbiAgLS1zY29yZS1sYXN0Z2FtZTogcmdiKDE2NSwgMjQ1LCAxNDApO1xcclxcbiAgLS1jb21tb24tdGV4dC1jb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbiAgLS1zY29yZS1zaGFkb3c6IHJnYigxMjUsIDEyNSwgMTI1KTtcXHJcXG5cXHJcXG4gIC0tY29sb3Itd2FybmluZzogMjU1LCA4MCwgODA7XFxyXFxuICAtLWNvbG9yLXdhcm5pbmctc2hhZG93OiAwLCAwLCAwO1xcclxcblxcclxcbiAgLS1ib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICAtLWJ0bi1pY29uLWhvdmVyOiByZ2JhKDkwLCAwLCAyNTUsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGhlaWdodDogMTAwZHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogdmFyKC0tY29tbW9uLXRleHQtY29sb3IpOztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFjZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG5cXHJcXG4gIGZsZXg6IDEgMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuICBjb250YWluZXItbmFtZTogYnV0dG9ucztcXHJcXG4gIGNvbnRhaW5lci10eXBlOiBpbmxpbmUtc2l6ZTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiAxIDAgMnJlbTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IGNsYW1wKDVweCwgNSUsIDEwcHgpO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb21tb24tdGV4dC1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiBjbGFtcCg0cHgsIDElLCA4cHgpIGNsYW1wKDVweCwgMSUsIDEwcHgpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2tzLWJhY2tncm91bmQpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4gICYgc3ZnIHtcXHJcXG4gICAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZW92ZXIge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICBmaWx0ZXI6IGJsdXIoMXB4KSBvcGFjaXR5KDAuOCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxyXFxuICAuYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXHJcXG5cXHJcXG4gICAgJiBzdmcge1xcclxcbiAgICAgIGZpbGw6IHZhcigtLWJ0bi1pY29uLWhvdmVyKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AY29udGFpbmVyIGJ1dHRvbnMgKG1heC13aWR0aDogMTEwcHgpIHtcXHJcXG4gIC5idXR0b24ge1xcclxcbiAgICAmIHNwYW4ge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJiBzdmcge1xcclxcbiAgICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5hbmltYXRpb24ge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogcm9sbDtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyByb2xsIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgZmlsbDogdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIDIwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXHJcXG4gICAgZmlsbDogcmdiKHZhcigtLWNvbG9yLXdhcm5pbmcpKTtcXHJcXG4gIH1cXHJcXG4gIDgwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xcclxcbiAgICBmaWxsOiByZ2IodmFyKC0tY29sb3Itd2FybmluZykpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xcclxcbiAgICBmaWxsOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idG5DYXZlaW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idG5DYXZlaW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0bkxvYWQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idG5Mb2FkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idG5Td2l0Y2hNb2RlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnRuU3dpdGNoTW9kZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnRuUmFuZG9tLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnRuUmFuZG9tLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idG5SZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J0blJlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idG5TYXZlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnRuU2F2ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lU2VsZWN0b3IuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lU2VsZWN0b3IuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NlbGwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jZWxsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wbG90Q29udGFpbmVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGxvdENvbnRhaW5lci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2NoZW1lU2VsZWN0b3IuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zY2hlbWVTZWxlY3Rvci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2NvcmUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zY29yZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGltZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90aW1lci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ9GG0LLQtdGC0L3QsNGPJyxcclxuICAgIG5hbWU6ICdjb2xvcicsXHJcbiAgICBjb2xvcnM6IHtcclxuICAgICAgJ2JvZHktYmFjZ3JvdW5kJzogJ3JnYigyMzAsIDI1NSwgMjMwKScsXHJcbiAgICAgICdibG9ja3MtYmFja2dyb3VuZCc6ICdyZ2IoMjMxLCAyNTUsIDI1NSknLFxyXG4gICAgICAnY2VsbC1iYWNrZ3JvdW5kJzogJ3JnYigyNDAsIDI0MCwgMjQwKScsXHJcbiAgICAgICdjZWxsLWJhY2tncm91bmQtZmlsbCc6ICdyZ2IoMCwgMCwgMCknLFxyXG4gICAgICAnY2VsbC1ib3JkZXItY29sb3InOiAncmdiKDIwMCwgMjAwLCAyMDApJyxcclxuICAgICAgJ2JvcmRlci1jb2xvcic6ICdyZ2IoMCwgMCwgMCknLFxyXG4gICAgICAnc2NvcmUtbGFzdGdhbWUnOiAncmdiKDE2NSwgMjQ1LCAxNDApJyxcclxuICAgICAgJ2NvbW1vbi10ZXh0LWNvbG9yJzogJ3JnYigwLCAwLCAwKScsXHJcbiAgICAgICdob3Zlci1pbnZlcnQnOiAnMC4yJyxcclxuICAgICAgJ3Njb3JlLXNoYWRvdyc6ICdyZ2IoMTI1LCAxMjUsIDEyNSknLFxyXG4gICAgICAnY29sb3Itd2FybmluZyc6ICcyNTUsIDgwLCA4MCcsXHJcbiAgICAgICdidG4taWNvbi1ob3Zlcic6ICdyZ2JhKDkwLCAwLCAyNTUsIDEpJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ9GC0ZHQvNC90LDRjycsXHJcbiAgICBuYW1lOiAnZGFyaycsXHJcbiAgICBjb2xvcnM6IHtcclxuICAgICAgJ2JvZHktYmFjZ3JvdW5kJzogJ3JnYig1MCwgNTAsIDUwKScsXHJcbiAgICAgICdibG9ja3MtYmFja2dyb3VuZCc6ICdyZ2IoODAsIDgwLCA4MCknLFxyXG4gICAgICAnY2VsbC1iYWNrZ3JvdW5kJzogJ3JnYigxMzAsIDEzMCwgMTMwKScsXHJcbiAgICAgICdjZWxsLWJhY2tncm91bmQtZmlsbCc6ICdyZ2IoNjAsIDYwLCA2MCknLFxyXG4gICAgICAnY2VsbC1ib3JkZXItY29sb3InOiAncmdiKDE2MCwgMTYwLCAxNjApJyxcclxuICAgICAgJ2JvcmRlci1jb2xvcic6ICdyZ2IoMTUxLCAxNTEsIDE1MSknLFxyXG4gICAgICAnc2NvcmUtbGFzdGdhbWUnOiAncmdiKDMwLCAyMCwgNDApJyxcclxuICAgICAgJ2NvbW1vbi10ZXh0LWNvbG9yJzogJ3JnYigyMzAsIDIzMCwgMjMwKScsXHJcbiAgICAgICdob3Zlci1pbnZlcnQnOiAnMC43JyxcclxuICAgICAgJ3Njb3JlLXNoYWRvdyc6ICdyZ2IoMCwgMCwgMCknLFxyXG4gICAgICAnY29sb3Itd2FybmluZyc6ICcyNTUsIDgwLCA4MCcsXHJcbiAgICAgICdidG4taWNvbi1ob3Zlcic6ICdyZ2JhKDE2MCwgMTYwLCA0MCwgMSknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAn0YHQstC10YLQu9Cw0Y8nLFxyXG4gICAgbmFtZTogJ2xpZ2h0JyxcclxuICAgIGNvbG9yczoge1xyXG4gICAgICAnYm9keS1iYWNncm91bmQnOiAncmdiKDIzMCwgMjMwLCAyMzApJyxcclxuICAgICAgJ2Jsb2Nrcy1iYWNrZ3JvdW5kJzogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICAgICdjZWxsLWJhY2tncm91bmQnOiAncmdiKDI0MCwgMjQwLCAyNDApJyxcclxuICAgICAgJ2NlbGwtYmFja2dyb3VuZC1maWxsJzogJ3JnYig5MCwgOTAsIDkwKScsXHJcbiAgICAgICdjZWxsLWJvcmRlci1jb2xvcic6ICdyZ2IoMjAwLCAyMDAsIDIwMCknLFxyXG4gICAgICAnYm9yZGVyLWNvbG9yJzogJ3JnYigxNDAsIDE0MCwgMTQwKScsXHJcbiAgICAgICdzY29yZS1sYXN0Z2FtZSc6ICdyZ2IoMjU1LCAyMjAsIDIyMCknLFxyXG4gICAgICAnY29tbW9uLXRleHQtY29sb3InOiAncmdiKDEwMCwgMTAwLCAxMDApJyxcclxuICAgICAgJ2hvdmVyLWludmVydCc6ICcwLjInLFxyXG4gICAgICAnc2NvcmUtc2hhZG93JzogJ3JnYigxNTAsIDE1MCwgMTUwKScsXHJcbiAgICAgICdjb2xvci13YXJuaW5nJzogJzI1NSwgODAsIDgwJyxcclxuICAgICAgJ2J0bi1pY29uLWhvdmVyJzogJ3JnYmEoNDAsIDcwLCAxMjAsIDEpJyxcclxuICAgIH0sXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IHN0YXRlIGZyb20gJy4uLy4uLy4uL3N0YXRlL3N0YXRlJztcclxuaW1wb3J0IHsgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY3JlYXRlTm9kZSc7XHJcbmltcG9ydCB7IHN0YXJ0VGltZXIgfSBmcm9tICcuLi8uLi90aW1lci90aW1lcic7XHJcbmltcG9ydCBzdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL3NvbHV0aW9uLnN2Zyc7XHJcbmltcG9ydCAnLi9idG5DYXZlaW4uY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBidG4gPSBjcmVhdGVCdXR0b24oe1xyXG4gICAgdHh0OiAnU29sdXRpb24nLFxyXG4gICAgaWNvbjogc3ZnLFxyXG4gIH0pO1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQ2F2ZWluKTtcclxuICByZXR1cm4gYnRuO1xyXG59O1xyXG5cclxuY29uc3QgY2xpY2tDYXZlaW4gPSAoKSA9PiB7XHJcbiAgc3RhdGUuZ2FtZS5zaG93Q2VsbHNWYWx1ZSA9IHRydWU7XHJcbiAgc3RhdGUuZ2FtZS5pc0dhbWVTdGFydGVkID0gZmFsc2U7XHJcbiAgc3RhcnRUaW1lcihmYWxzZSk7XHJcbiAgY29uc3Qgb3BhY2l0eSA9ICcxJztcclxuICBzdGF0ZS5odG1sLnJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tb3BhY2l0eS1jZWxsLXRleHQnLCBvcGFjaXR5KTtcclxuICBzdGF0ZS5odG1sLm1haW4uY2xhc3NMaXN0LmFkZCgnZ2FtZW92ZXInKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY3JlYXRlTm9kZSc7XHJcbmltcG9ydCB7IGxvYWRTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2xvY2FsU3RvcmFnZSc7XHJcbmltcG9ydCBzdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2xvYWQuc3ZnJztcclxuaW1wb3J0ICcuL2J0bkxvYWQuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBidG5Mb2FkID0gY3JlYXRlQnV0dG9uKHtcclxuICAgIHR4dDogJ0NvbnRpbnVlIGxhc3QgZ2FtZScsXHJcbiAgICBpY29uOiBzdmcsXHJcbiAgfSk7XHJcbiAgYnRuTG9hZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRTdGF0ZSk7XHJcbiAgcmV0dXJuIGJ0bkxvYWQ7XHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9zdGF0ZSc7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jcmVhdGVOb2RlJztcclxuaW1wb3J0IHN2Z19jcm9zcyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvY3Jvc3Muc3ZnJztcclxuaW1wb3J0IHN2Z19maWxsIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9maWxsLnN2Zyc7XHJcbmltcG9ydCBzdmdCcnVzaCBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvYnJ1c2guc3ZnJztcclxuaW1wb3J0ICcuL2J0blN3aXRjaE1vZGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ2J1dHRvbicsXHJcbiAgICBjbHM6ICdidXR0b24gYnRuLXN3aXRjaC1jb250YWluZXInLFxyXG4gICAgYXR0cjogW1sndGl0bGUnLCAn0L/QtdGA0LXQutC70Y7Rh9C40YLRjCDQtNC10LnRgdGC0LLQuNC1INC/0L4g0JvQmtCcJ11dLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGljb24gPSBjcmVhdGVFbGVtZW50KHsgdGFnOiAnc3ZnJyB9KTtcclxuICBpY29uLmlubmVySFRNTCA9IHN2Z0JydXNoO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQoaWNvbik7XHJcblxyXG4gIGNvbnN0IHNwYW4gPSBjcmVhdGVFbGVtZW50KHsgdGFnOiAnc3BhbicsIHR4dDogJ3N3aXRjaCBicnVzaCcgfSk7XHJcbiAgY29udGFpbmVyLmFwcGVuZChzcGFuKTtcclxuXHJcbiAgY29uc3QgaWNvbkJydXNoTW9kZSA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdzdmcnIH0pO1xyXG4gIGljb25CcnVzaE1vZGUuaW5uZXJIVE1MID0gc3ZnX2ZpbGw7XHJcbiAgc3RhdGUuaHRtbC5pY29uQnJ1c2hNb2RlID0gaWNvbkJydXNoTW9kZTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZChpY29uQnJ1c2hNb2RlKTtcclxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hCcnVzaE1vZGUpO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3Qgc3dpdGNoQnJ1c2hNb2RlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgYnJ1c2ggfSA9IHN0YXRlLmdhbWU7XHJcblxyXG4gIHN3aXRjaCAoYnJ1c2gpIHtcclxuICAgIGNhc2UgJ2ZpbGwnOlxyXG4gICAgICBzdGF0ZS5nYW1lLmJydXNoID0gJ2Nyb3NzJztcclxuICAgICAgc3RhdGUuaHRtbC5pY29uQnJ1c2hNb2RlLmlubmVySFRNTCA9IHN2Z19jcm9zcztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdjcm9zcyc6XHJcbiAgICAgIHN0YXRlLmdhbWUuYnJ1c2ggPSAnZmlsbCc7XHJcbiAgICAgIHN0YXRlLmh0bWwuaWNvbkJydXNoTW9kZS5pbm5lckhUTUwgPSBzdmdfZmlsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi4vLi4vLi4vc3RhdGUvc3RhdGUnO1xyXG5pbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi91dGlscy9jcmVhdGVOb2RlJztcclxuaW1wb3J0IHsgc3dpdGNoR2FtZSB9IGZyb20gJy4uLy4uL2dhbWVTZWxlY3Rvci9nYW1lU2VsZWN0b3InO1xyXG5pbXBvcnQgcmVuZGVyRGVzayBmcm9tICcuLi8uLi9wbG90Q29udGFpbmVyL3JlbmRlckRlc2snO1xyXG5pbXBvcnQgeyBzdGFydFRpbWVyIH0gZnJvbSAnLi4vLi4vdGltZXIvdGltZXInO1xyXG5pbXBvcnQgc3ZnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9yYW5kb20uc3ZnJztcclxuaW1wb3J0ICcuL2J0blJhbmRvbS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbih7IGljb246IHN2ZywgdHh0OiAnUmFuZG9tIGdhbWUnIH0pO1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJhbmRvbUdhbWUpO1xyXG5cclxuICByZXR1cm4gYnV0dG9uO1xyXG59O1xyXG5cclxuY29uc3QgcmFuZG9tR2FtZSA9ICgpID0+IHtcclxuICBsZXQgY291bnRHYW1lcyA9IDA7XHJcbiAgY29uc3QgeyBmaWVsZHMgfSA9IHN0YXRlO1xyXG5cclxuICBmb3IgKGNvbnN0IGZpZWxkIGluIGZpZWxkcykge1xyXG4gICAgY291bnRHYW1lcyArPSBmaWVsZHNbZmllbGRdPy5sZW5ndGggfHwgMDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJhbmRvbUlEID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGNvdW50R2FtZXMgLSAxKSk7XHJcbiAgY29uc3QgZXJyb3IgPSAncmFuZG9tSUQg0LTQvtC70LbQtdC9INCx0YvRgtGMINC80LXQvdGM0YjQtSBjb3VudEdhbWVzJztcclxuICBjb25zb2xlLmFzc2VydChyYW5kb21JRCA8IGNvdW50R2FtZXMsIHsgcmFuZG9tSUQsIGNvdW50R2FtZXMsIGVycm9yIH0pO1xyXG5cclxuICBzdGF0ZS5nYW1lLmN1cnJlbnRHYW1lID0gcmFuZG9tSUQ7XHJcbiAgcmVuZGVyRGVzayhyYW5kb21JRCk7XHJcbiAgc3dpdGNoR2FtZShyYW5kb21JRCk7XHJcbiAgc3RhdGUuZ2FtZS50aW1lciA9IDA7XHJcbiAgc3RhcnRUaW1lcihmYWxzZSk7XHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9zdGF0ZSc7XHJcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NyZWF0ZU5vZGUnO1xyXG5pbXBvcnQgcmVuZGVyRGVzayBmcm9tICcuLi8uLi9wbG90Q29udGFpbmVyL3JlbmRlckRlc2snO1xyXG5pbXBvcnQgeyBzdGFydFRpbWVyIH0gZnJvbSAnLi4vLi4vdGltZXIvdGltZXInO1xyXG5pbXBvcnQgc3ZnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9yZXNldC5zdmcnO1xyXG5pbXBvcnQgJy4vYnRuUmVzZXQuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBidG5SZXNldCA9IGNyZWF0ZUJ1dHRvbih7XHJcbiAgICB0eHQ6ICdSZXNldCBnYW1lJyxcclxuICAgIGljb246IHN2ZyxcclxuICB9KTtcclxuICBidG5SZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0R2FtZSk7XHJcbiAgcmV0dXJuIGJ0blJlc2V0O1xyXG59O1xyXG5cclxuY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xyXG4gIHJlbmRlckRlc2soc3RhdGUuZ2FtZS5jdXJyZW50R2FtZSk7XHJcbiAgc3RhdGUuZ2FtZS50aW1lciA9IDA7XHJcbiAgY29uc3Qgb3BhY2l0eSA9ICcwJztcclxuICBzdGF0ZS5odG1sLnJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tb3BhY2l0eS1jZWxsLXRleHQnLCBvcGFjaXR5KTtcclxuICBzdGF0ZS5odG1sLm1haW4uY2xhc3NMaXN0LnJlbW92ZSgnZ2FtZW92ZXInKTtcclxuICBzdGFydFRpbWVyKGZhbHNlKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY3JlYXRlTm9kZSc7XHJcbmltcG9ydCB7IHNhdmVTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2xvY2FsU3RvcmFnZSc7XHJcbmltcG9ydCBzdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2Jvb2ttYXJrcy5zdmcnO1xyXG5pbXBvcnQgJy4vYnRuU2F2ZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IGJ0blNhdmUgPSBjcmVhdGVCdXR0b24oe1xyXG4gICAgdHh0OiAnU2F2ZSBnYW1lJyxcclxuICAgIGljb246IHN2ZyxcclxuICB9KTtcclxuICBidG5TYXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZVN0YXRlKTtcclxuICByZXR1cm4gYnRuU2F2ZTtcclxufTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZU5vZGUnO1xyXG5pbXBvcnQgYnRuQ2F2ZWluIGZyb20gJy4uL2J1dHRvbnMvY2F2ZWluL2J0bkNhdmVpbic7XHJcbmltcG9ydCBidG5Mb2FkIGZyb20gJy4uL2J1dHRvbnMvbG9hZC9idG5Mb2FkJztcclxuaW1wb3J0IGJ0blJhbmRvbSBmcm9tICcuLi9idXR0b25zL3JhbmRvbS9idG5SYW5kb20uJztcclxuaW1wb3J0IGJ0blJlc2V0IGZyb20gJy4uL2J1dHRvbnMvcmVzZXQvYnRuUmVzZXQnO1xyXG5pbXBvcnQgYnRuU2F2ZSBmcm9tICcuLi9idXR0b25zL3NhdmUvYnRuU2F2ZSc7XHJcbmltcG9ydCAnLi9mb290ZXIuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBmb290ZXIgPSBjcmVhdGVFbGVtZW50KHsgdGFnOiAnZm9vdGVyJywgY2xzOiAnZm9vdGVyJyB9KTtcclxuICBjb25zdCBjYXZlaW4gPSBidG5DYXZlaW4oKTtcclxuICBjb25zdCByZXNldCA9IGJ0blJlc2V0KCk7XHJcbiAgY29uc3Qgc2F2ZSA9IGJ0blNhdmUoKTtcclxuICBjb25zdCBsb2FkID0gYnRuTG9hZCgpO1xyXG4gIGNvbnN0IHJhbmRvbSA9IGJ0blJhbmRvbSgpO1xyXG5cclxuICBmb290ZXIuYXBwZW5kKGNhdmVpbiwgcmVzZXQsIHNhdmUsIGxvYWQsIHJhbmRvbSk7XHJcbiAgcmV0dXJuIGZvb3RlcjtcclxufTtcclxuIiwiaW1wb3J0IHN0YXRlIGZyb20gJy4uLy4uL3N0YXRlL3N0YXRlJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZU5vZGUnO1xyXG5pbXBvcnQgY3JlYXRlT3B0aW9ucyBmcm9tICcuLi8uLi91dGlscy9jcmVhdGVPcHRpb25zJztcclxuaW1wb3J0IHJlbmRlckRlc2ssIHsgdXBkYXRlRGVzayB9IGZyb20gJy4uL3Bsb3RDb250YWluZXIvcmVuZGVyRGVzayc7XHJcbmltcG9ydCB7IHN0YXJ0VGltZXIgfSBmcm9tICcuLi90aW1lci90aW1lcic7XHJcbmltcG9ydCAnLi9nYW1lU2VsZWN0b3IuY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lU2VsZWN0b3IgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudCh7IHRhZzogJ2hlYWRlcicsIGNsczogJ2hlYWRlcicgfSk7XHJcbiAgY29uc3QgZm9ybSA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdmb3JtJywgY2xzOiAnZm9ybScgfSk7XHJcbiAgY29uc3QgZ2FtZVNlbGVjdENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoeyBjbHM6ICdnYW1lLXNlbGVjdCcgfSk7XHJcblxyXG4gIGNvbnN0IGZpZWxkU2V0ID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdmaWVsZHNldCcsXHJcbiAgICBjbHM6ICdnYW1lLXNlbGVjdF9maWVsZHNldCcsXHJcbiAgfSk7XHJcbiAgc3RhdGUuaHRtbC5maWVsZFNldCA9IGZpZWxkU2V0O1xyXG4gIGNvbnN0IGxlZ2VuZCA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnbGVnZW5kJyxcclxuICAgIGNsczogJ2ZpZWxkc2V0X2xlZ2VuZCcsXHJcbiAgICB0eHQ6ICfRgdC70L7QttC90L7RgdGC0YwnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBnYW1lU2VsZWN0TGFiZWwgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ2xhYmVsJyxcclxuICAgIHR4dDogJ9CS0YvQsdC+0YAg0LjQs9GA0YsnLFxyXG4gICAgYXR0cjogW1snZm9yJywgJ2dhbWUtc2VsZWN0J11dLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGdhbWVTZWxlY3QgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ3NlbGVjdCcsXHJcbiAgICBjbHM6ICdnYW1lLXNlbGVjdF9zZWxlY3RvcicsXHJcbiAgICBhdHRyOiBbWydpZCcsICdnYW1lLXNlbGVjdCddXSxcclxuICB9KTtcclxuICBzdGF0ZS5odG1sLmdhbWVTZWxlY3QgPSBnYW1lU2VsZWN0O1xyXG5cclxuICBjb25zdCBnYW1lRmlsdGVyTGFiZWw1ID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdsYWJlbCcsXHJcbiAgICB0eHQ6ICc1eDUnLFxyXG4gICAgY2xzOiAnZmllbGRzZXRfbGFiZWwnLFxyXG4gICAgYXR0cjogW1snZm9yJywgJ2dhbWUtZmlsdGVyLTV4NSddXSxcclxuICB9KTtcclxuICBjb25zdCBnYW1lRmlsdGVyNSA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnaW5wdXQnLFxyXG4gICAgYXR0cjogW1xyXG4gICAgICBbJ3R5cGUnLCAncmFkaW8nXSxcclxuICAgICAgWyduYW1lJywgJ2dhbWUtZmlsdGVyJ10sXHJcbiAgICAgIFsndmFsdWUnLCAnNXg1J10sXHJcbiAgICAgIFsnaWQnLCAnZ2FtZS1maWx0ZXItNXg1J10sXHJcbiAgICAgIFsnY2hlY2tlZCcsICcnXSxcclxuICAgICAgWydhdXRvZm9jdXMnLCAnJ10sXHJcbiAgICBdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGdhbWVGaWx0ZXJMYWJlbDEwID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdsYWJlbCcsXHJcbiAgICB0eHQ6ICcxMHgxMCcsXHJcbiAgICBjbHM6ICdmaWVsZHNldF9sYWJlbCcsXHJcbiAgICBhdHRyOiBbWydmb3InLCAnZ2FtZS1maWx0ZXItMTB4MTAnXV0sXHJcbiAgfSk7XHJcbiAgY29uc3QgZ2FtZUZpbHRlcjEwID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdpbnB1dCcsXHJcbiAgICBhdHRyOiBbXHJcbiAgICAgIFsndHlwZScsICdyYWRpbyddLFxyXG4gICAgICBbJ25hbWUnLCAnZ2FtZS1maWx0ZXInXSxcclxuICAgICAgWyd2YWx1ZScsICcxMHgxMCddLFxyXG4gICAgICBbJ2lkJywgJ2dhbWUtZmlsdGVyLTEweDEwJ10sXHJcbiAgICBdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGdhbWVGaWx0ZXJMYWJlbDE1ID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdsYWJlbCcsXHJcbiAgICB0eHQ6ICcxNXgxNScsXHJcbiAgICBjbHM6ICdmaWVsZHNldF9sYWJlbCcsXHJcbiAgICBhdHRyOiBbWydmb3InLCAnZ2FtZS1maWx0ZXItMTV4MTUnXV0sXHJcbiAgfSk7XHJcbiAgY29uc3QgZ2FtZUZpbHRlcjE1ID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdpbnB1dCcsXHJcbiAgICBhdHRyOiBbXHJcbiAgICAgIFsndHlwZScsICdyYWRpbyddLFxyXG4gICAgICBbJ25hbWUnLCAnZ2FtZS1maWx0ZXInXSxcclxuICAgICAgWyd2YWx1ZScsICcxNXgxNSddLFxyXG4gICAgICBbJ2lkJywgJ2dhbWUtZmlsdGVyLTE1eDE1J10sXHJcbiAgICBdLFxyXG4gIH0pO1xyXG5cclxuICBmaWVsZFNldC5hcHBlbmQoXHJcbiAgICBsZWdlbmQsXHJcbiAgICBnYW1lRmlsdGVyNSxcclxuICAgIGdhbWVGaWx0ZXJMYWJlbDUsXHJcbiAgICBnYW1lRmlsdGVyMTAsXHJcbiAgICBnYW1lRmlsdGVyTGFiZWwxMCxcclxuICAgIGdhbWVGaWx0ZXIxNSxcclxuICAgIGdhbWVGaWx0ZXJMYWJlbDE1XHJcbiAgKTtcclxuICBmb3JtLmFwcGVuZChmaWVsZFNldCwgZ2FtZVNlbGVjdENvbnRhaW5lcik7XHJcbiAgaGVhZGVyLmFwcGVuZChmb3JtKTtcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZUZpbHRlcik7XHJcbiAgZ2FtZVNlbGVjdENvbnRhaW5lci5hcHBlbmQoZ2FtZVNlbGVjdExhYmVsLCBnYW1lU2VsZWN0KTtcclxuICByZXR1cm4gaGVhZGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN3aXRjaEdhbWUgPSAoaWQpID0+IHtcclxuICBjb25zdCB7IGZpZWxkcyB9ID0gc3RhdGU7XHJcbiAgbGV0IGdhbWUgPSBudWxsO1xyXG5cclxuICBmb3IgKGNvbnN0IGRpZmZpY3VsdHkgaW4gZmllbGRzKSB7XHJcbiAgICBnYW1lID0gZmllbGRzW2RpZmZpY3VsdHldLmZpbHRlcigoZykgPT4gZy5pZCA9PT0gK2lkKTtcclxuICAgIGlmIChnYW1lLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCByYWRpbyA9IHN0YXRlLmh0bWwuZmllbGRTZXQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBgaW5wdXRbdmFsdWU9XCIke2RpZmZpY3VsdHl9XCJdYFxyXG4gICAgICApO1xyXG4gICAgICByYWRpbyAmJiAocmFkaW8uY2hlY2tlZCA9IHRydWUpO1xyXG4gICAgICBjaGFuZ2VGaWx0ZXIoZGlmZmljdWx0eSwgaWQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY2hhbmdlRmlsdGVyID0gKGUsIGlkKSA9PiB7XHJcbiAgY29uc3QgdmFsdWUgPSBlLnRhcmdldD8udmFsdWUgfHwgZTtcclxuXHJcbiAgY29uc3QgeyBmaWVsZHMgfSA9IHN0YXRlO1xyXG4gIGNvbnN0IGZpbHRlcnMgPSBPYmplY3Qua2V5cyhzdGF0ZS5maWVsZHMpO1xyXG4gIGNvbnN0IGlzRmlsdGVyID0gZmlsdGVycy5pbmNsdWRlcyh2YWx1ZSk7XHJcbiAgaWYgKGlzRmlsdGVyKSB7XHJcbiAgICBjb25zdCBsaXN0R2FtZXMgPSBmaWVsZHNbdmFsdWVdO1xyXG4gICAgc3RhdGUuZ2FtZS5jdXJyZW50R2FtZSA9IGlkIHx8IGxpc3RHYW1lc1swXS5pZDtcclxuICAgIHN0YXRlLmdhbWUuZGlmZmljdWx0eSA9IHZhbHVlO1xyXG4gICAgY3JlYXRlT3B0aW9ucyhzdGF0ZS5odG1sLmdhbWVTZWxlY3QsIGxpc3RHYW1lcyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0YXRlLmdhbWUuY3VycmVudEdhbWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgY29uc3Qgb3BhY2l0eSA9ICcwJztcclxuICBzdGF0ZS5odG1sLnJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tb3BhY2l0eS1jZWxsLXRleHQnLCBvcGFjaXR5KTtcclxuICBzdGF0ZS5odG1sLm1haW4uY2xhc3NMaXN0LnJlbW92ZSgnZ2FtZW92ZXInKTtcclxuICBpZiAoZS50YXJnZXQ/LnZhbHVlKSB7XHJcbiAgICBzdGF0ZS5nYW1lLnRpbWVyID0gMDtcclxuICAgIHN0YXJ0VGltZXIoZmFsc2UpO1xyXG4gICAgcmVuZGVyRGVzayhzdGF0ZS5nYW1lLmN1cnJlbnRHYW1lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdXBkYXRlRGVzayhzdGF0ZS5nYW1lLmN1cnJlbnRHYW1lKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jcmVhdGVOb2RlJztcclxuaW1wb3J0ICcuL2NlbGwuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBjZWxsID0gY3JlYXRlRWxlbWVudCh7IGNsczogJ2NlbGwnIH0pO1xyXG4gIHJldHVybiBjZWxsO1xyXG59O1xyXG4iLCJpbXBvcnQgJy4vcGxvdENvbnRhaW5lci5jc3MnO1xyXG5pbXBvcnQgc3RhdGUgZnJvbSAnLi4vLi4vc3RhdGUvc3RhdGUnO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlTm9kZSc7XHJcbmltcG9ydCB7IHBhcnNlVGltZXIsIHN0YXJ0VGltZXIgfSBmcm9tICcuLi90aW1lci90aW1lcic7XHJcbmltcG9ydCBzb3VuZEZpbGxDZWxsIGZyb20gJy4vc291bmQvc291bmRGaWxsQ2VsbC5tcDMnO1xyXG5pbXBvcnQgc291bmRGaWxsQ3Jvc3MgZnJvbSAnLi9zb3VuZC9zb3VuZEZpbGxDcm9zcy5tcDMnO1xyXG5pbXBvcnQgc291bmRDbGVhciBmcm9tICcuL3NvdW5kL3NvdW5kQ2xlYXIubXAzJztcclxuaW1wb3J0IHsgc2F2ZVJlY29yZHMgfSBmcm9tICcuLi8uLi91dGlscy9nYW1lUmVjb3JkJztcclxuaW1wb3J0IHsgdXBkYXRlU2NvcmUgfSBmcm9tICcuLi9zY29yZS9zY29yZSc7XHJcbmltcG9ydCB7IHVwZGF0ZURlc2sgfSBmcm9tICcuL3JlbmRlckRlc2snO1xyXG5jb25zdCBzbmRGaWxsQ2VsbCA9IG5ldyBBdWRpbyhzb3VuZEZpbGxDZWxsKTtcclxuY29uc3Qgc25kRmlsbENyb3NzID0gbmV3IEF1ZGlvKHNvdW5kRmlsbENyb3NzKTtcclxuY29uc3Qgc25kQ2xlYXIgPSBuZXcgQXVkaW8oc291bmRDbGVhcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGNsczogJ2dhbWUtY29udGFpbmVyJyB9KTtcclxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGNvbnRleHRNZW51SGFuZGxlcik7XHJcbiAgc3RhdGUuaHRtbC5wbG90Q29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBjaGVja0dhbWVTdGFydCA9ICgpID0+IHtcclxuICBpZiAoIXN0YXRlLmdhbWUuaXNHYW1lU3RhcnRlZCkge1xyXG4gICAgc3RhdGUuZ2FtZS5pc0dhbWVTdGFydGVkID0gdHJ1ZTtcclxuICAgIHN0YXJ0VGltZXIoKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRDbGlja2VkQ2VsbCA9ICh0YXJnZXQpID0+IHtcclxuICBjb25zdCB7IHBsb3QgfSA9IHN0YXRlLmdhbWU7XHJcbiAgbGV0IGluZGV4ID0gbnVsbDtcclxuICBjb25zdCBjZWxsID0gcGxvdC5mbGF0KDEpLmZpbHRlcigoY2VsbCwgaSkgPT4ge1xyXG4gICAgaWYgKGNlbGwuZWxlbWVudCA9PT0gdGFyZ2V0KSB7XHJcbiAgICAgIGluZGV4ID0gaTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfSlbMF07XHJcblxyXG4gIHJldHVybiB7IGNlbGwsIGluZGV4IH07XHJcbn07XHJcblxyXG5jb25zdCBjb250ZXh0TWVudUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCB7IGNlbGw6IGNsaWNrZWRDZWxsLCBpbmRleCB9ID0gZ2V0Q2xpY2tlZENlbGwoZS50YXJnZXQpO1xyXG4gIGlmIChjbGlja2VkQ2VsbCkge1xyXG4gICAgY2hlY2tHYW1lU3RhcnQoKTtcclxuICAgIGNvbnN0IGNlbGxTdGF0ZSA9IGNsaWNrZWRDZWxsLnN0YXRlO1xyXG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShjZWxsU3RhdGUpKSB7XHJcbiAgICAgIG1hcmtYKGNsaWNrZWRDZWxsLCBpbmRleCwgZmFsc2UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChjZWxsU3RhdGUpIHtcclxuICAgICAgY2FzZSAn4pqqJzpcclxuICAgICAgICBzbmRGaWxsQ3Jvc3MucGxheSgpO1xyXG4gICAgICAgIGNsaWNrZWRDZWxsLnN0YXRlID0gJ3gnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICfimqsnOlxyXG4gICAgICAgIHNuZEZpbGxDcm9zcy5wbGF5KCk7XHJcbiAgICAgICAgY2xpY2tlZENlbGwuc3RhdGUgPSAneCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3gnOlxyXG4gICAgICAgIHNuZENsZWFyLnBsYXkoKTtcclxuICAgICAgICBjbGlja2VkQ2VsbC5zdGF0ZSA9ICfimqonO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrZWRDZWxsLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2VsbF9jaGVja2VkJyk7XHJcbiAgICBjbGlja2VkQ2VsbC5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NlbGxfZmlsbCcpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNsaWNrSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgY29uc3QgeyBicnVzaCB9ID0gc3RhdGUuZ2FtZTtcclxuICBjb25zdCB7IGNlbGw6IGNsaWNrZWRDZWxsLCBpbmRleCB9ID0gZ2V0Q2xpY2tlZENlbGwoZS50YXJnZXQpO1xyXG5cclxuICBjb25zdCBkcmF3RmlsbCA9ICgpID0+IHtcclxuICAgIHNuZEZpbGxDZWxsLnBsYXkoKTtcclxuICAgIGNsaWNrZWRDZWxsLnN0YXRlID0gJ+Kaqyc7XHJcbiAgICBjbGlja2VkQ2VsbC5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NlbGxfZmlsbCcpO1xyXG4gICAgY2xpY2tlZENlbGwuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjZWxsX2NoZWNrZWQnKTtcclxuICB9O1xyXG4gIGNvbnN0IGRyYXdDcm9zcyA9ICgpID0+IHtcclxuICAgIHNuZEZpbGxDcm9zcy5wbGF5KCk7XHJcbiAgICBjbGlja2VkQ2VsbC5zdGF0ZSA9ICd4JztcclxuICAgIGNsaWNrZWRDZWxsLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2VsbF9jaGVja2VkJyk7XHJcbiAgICBjbGlja2VkQ2VsbC5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NlbGxfZmlsbCcpO1xyXG4gIH07XHJcbiAgY29uc3QgZHJhd0VtcHR5ID0gKCkgPT4ge1xyXG4gICAgc25kQ2xlYXIucGxheSgpO1xyXG4gICAgY2xpY2tlZENlbGwuc3RhdGUgPSAn4pqqJztcclxuICAgIGNsaWNrZWRDZWxsLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2VsbF9maWxsJyk7XHJcbiAgICBjbGlja2VkQ2VsbC5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NlbGxfY2hlY2tlZCcpO1xyXG4gIH07XHJcblxyXG4gIGlmIChjbGlja2VkQ2VsbCkge1xyXG4gICAgY2hlY2tHYW1lU3RhcnQoKTtcclxuICAgIGNvbnN0IGNlbGxTdGF0ZSA9IGNsaWNrZWRDZWxsLnN0YXRlO1xyXG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShjZWxsU3RhdGUpKSB7XHJcbiAgICAgIG1hcmtYKGNsaWNrZWRDZWxsLCBpbmRleCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHN3aXRjaCAoY2VsbFN0YXRlKSB7XHJcbiAgICAgIGNhc2UgJ+Kaqic6XHJcbiAgICAgICAgaWYgKGJydXNoID09PSAnZmlsbCcpIHtcclxuICAgICAgICAgIGRyYXdGaWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIGRyYXdDcm9zcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICfimqsnOlxyXG4gICAgICAgIGlmIChicnVzaCA9PT0gJ2ZpbGwnKSB7XHJcbiAgICAgICAgICBkcmF3RW1wdHkoKTtcclxuICAgICAgICB9IGVsc2UgZHJhd0Nyb3NzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3gnOlxyXG4gICAgICAgIGlmIChicnVzaCA9PT0gJ2ZpbGwnKSB7XHJcbiAgICAgICAgICBkcmF3RmlsbCgpO1xyXG4gICAgICAgIH0gZWxzZSBkcmF3RW1wdHkoKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNBbGxDb3JyZWN0Q2hlY2tlZCgpKSBzZXRUaW1lb3V0KCgpID0+IGdhbWVPdmVyKCksIDApO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IG1hcmtYID0gKGNlbGwsIGluZGV4Q2VsbCwgc2V0TWFyayA9IHRydWUpID0+IHtcclxuICBjb25zdCBsZW5ndGggPSBzdGF0ZS5nYW1lLnBsb3RbMF0ubGVuZ3RoO1xyXG4gIGxldCByb3dDbGlja2VkID0gLTE7XHJcbiAgbGV0IHggPSAwO1xyXG4gIHdoaWxlICh4IDw9IGluZGV4Q2VsbCkge1xyXG4gICAgcm93Q2xpY2tlZCArPSAxO1xyXG4gICAgeCArPSBsZW5ndGg7XHJcbiAgfVxyXG4gIGNvbnN0IGNvbHVtbkNsaWtlZCA9IGluZGV4Q2VsbCAtIGxlbmd0aCAqIHJvd0NsaWNrZWQ7XHJcblxyXG4gIHN0YXRlLmdhbWUucGxvdC5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XHJcbiAgICByb3cuZm9yRWFjaCgoY2VsbCwgY29sdW1uSW5kZXgpID0+IHtcclxuICAgICAgc3dpdGNoIChzZXRNYXJrKSB7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoY29sdW1uQ2xpa2VkID09PSBjb2x1bW5JbmRleCB8fCByb3dDbGlja2VkID09PSByb3dJbmRleCkgJiZcclxuICAgICAgICAgICAgY2VsbC5zdGF0ZSA9PT0gJ+KaqidcclxuICAgICAgICAgIClcclxuICAgICAgICAgICAgY2VsbC5zdGF0ZSA9ICd4JztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIChjb2x1bW5DbGlrZWQgPT09IGNvbHVtbkluZGV4IHx8IHJvd0NsaWNrZWQgPT09IHJvd0luZGV4KSAmJlxyXG4gICAgICAgICAgICBjZWxsLnN0YXRlID09PSAneCdcclxuICAgICAgICAgIClcclxuICAgICAgICAgICAgY2VsbC5zdGF0ZSA9ICfimqonO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHVwZGF0ZURlc2soKTtcclxufTtcclxuXHJcbmNvbnN0IGlzQWxsQ29ycmVjdENoZWNrZWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBwbG90IH0gPSBzdGF0ZS5nYW1lO1xyXG4gIGNvbnN0IHBsb3RXaXRob3V0WCA9IHBsb3QuZmxhdCgxKS5tYXAoKGNlbGwpID0+IHtcclxuICAgIGlmIChjZWxsLnN0YXRlID09PSAneCcpIHJldHVybiB7IC4uLmNlbGwsIHN0YXRlOiAn4pqqJyB9O1xyXG4gICAgcmV0dXJuIGNlbGw7XHJcbiAgfSk7XHJcbiAgcmV0dXJuICFwbG90V2l0aG91dFguc29tZSgoY2VsbCkgPT4gY2VsbC5zdGF0ZSAhPT0gY2VsbC52YWx1ZSk7XHJcbn07XHJcblxyXG5jb25zdCBnYW1lT3ZlciA9ICgpID0+IHtcclxuICBjb25zdCBtc2cgPSBgR3JlYXQhIFlvdSBoYXZlIHNvbHZlZCB0aGUgbm9ub2dyYW0gaW4gJHtwYXJzZVRpbWVyKFxyXG4gICAgc3RhdGUuZ2FtZS50aW1lclxyXG4gICl9IHNlY29uZHMhYDtcclxuICBzYXZlUmVjb3JkcygpO1xyXG4gIHVwZGF0ZVNjb3JlKG1zZyk7XHJcbiAgc3RhdGUuaHRtbC5zY29yZS5jbGFzc0xpc3QuYWRkKCdzY29yZV9zaG93Jyk7XHJcblxyXG4gIHN0YXRlLmdhbWUudGltZXIgPSAwO1xyXG4gIHN0YXRlLmh0bWwubWFpbi5jbGFzc0xpc3QuYWRkKCdnYW1lb3ZlcicpO1xyXG4gIHN0YXJ0VGltZXIoZmFsc2UpO1xyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi4vLi4vc3RhdGUvc3RhdGUnO1xyXG5pbXBvcnQgZ2V0UGxvdCBmcm9tICcuLi8uLi91dGlscy9nZXRQbG90JztcclxuaW1wb3J0IHJvdGF0ZU1hdHJpeCBmcm9tICcuLi8uLi91dGlscy9yb3RhdGVNYXRyaXgnO1xyXG5pbXBvcnQgbmV3Q2VsbCBmcm9tICcuL2NlbGwvbmV3Q2VsbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoaWQgPSAwKSA9PiB7XHJcbiAgY29uc3QgcGxvdCA9IFsuLi5nZXRQbG90KGlkKV07XHJcbiAgaWYgKCFwbG90KSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCByb3RhdGVkUGxvdCA9IHJvdGF0ZU1hdHJpeChwbG90KTtcclxuICBjb25zdCBjbHVlVG9wUm90YXRlZCA9IGNyZWF0ZUNsdWVBcnJheShyb3RhdGVkUGxvdCk7XHJcbiAgLy8g0LLRi9GA0LDQstC90LjQstCw0LXQvCDQstC10YDRhdC90LjQuCDQv9C+0LTRgdC60LDQt9C60Lgg0LIg0LLRi9GB0L7RgtGDXHJcbiAgY29uc3QgY2x1ZVRvcFJvd3MgPSBNYXRoLm1heCguLi5jbHVlVG9wUm90YXRlZC5tYXAoKHJvdykgPT4gcm93Lmxlbmd0aCkpO1xyXG4gIGNsdWVUb3BSb3RhdGVkLmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgd2hpbGUgKHJvdy5sZW5ndGggPCBjbHVlVG9wUm93cykgcm93LnB1c2goMCk7XHJcbiAgfSk7XHJcbiAgY29uc3QgY2x1ZVRvcCA9IHJvdGF0ZU1hdHJpeChjbHVlVG9wUm90YXRlZCwgJ2xlZnQnKTtcclxuXHJcbiAgY29uc3QgY2x1ZUxlZnQgPSBjcmVhdGVDbHVlQXJyYXkocGxvdCk7XHJcbiAgLy8g0LLRi9GA0LDQstC90LjQstCw0LXQvCDQu9C10LLRi9C1INC/0L7QtNGB0LrQsNC30LrQuCDQsiDRiNC40YDQuNC90YNcclxuICBjb25zdCBjbHVlTGVmdENvbHVtbnMgPSBNYXRoLm1heCguLi5jbHVlTGVmdC5tYXAoKHJvdykgPT4gcm93Lmxlbmd0aCkpO1xyXG4gIGNsdWVMZWZ0LmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgd2hpbGUgKHJvdy5sZW5ndGggPCBjbHVlTGVmdENvbHVtbnMpIHJvdy51bnNoaWZ0KDApO1xyXG4gIH0pO1xyXG5cclxuICAvLyDQvtCx0YrQtdC00LXQvdC40YLRjCDQv9C+0LTRgdC60LDQt9C60Lgg0YHQu9C10LLQsCDRgSDQuNCz0YDQvtCy0YvQvCDQv9C+0LvQtdC8XHJcbiAgY29uc3QgY2x1ZUxlZnRBbmRQbG90ID0gcGxvdC5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgcmV0dXJuIFsuLi5jbHVlTGVmdFtpXSwgLi4ucm93XTtcclxuICB9KTtcclxuXHJcbiAgLy8g0Lgg0LLRi9GA0LDQstC90LjQstCw0LXQvCDQsiDRiNC40YDQuNC90YMg0L/QvtGB0LrQsNC30LrQuCDRgdCy0LXRgNGF0YNcclxuICBjb25zdCDRgW9sdW1uc0NvdW50VG90YWwgPSBjbHVlTGVmdEFuZFBsb3RbMF0ubGVuZ3RoO1xyXG4gIGNsdWVUb3AuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICB3aGlsZSAocm93Lmxlbmd0aCA8INGBb2x1bW5zQ291bnRUb3RhbCkgcm93LnVuc2hpZnQoJycpO1xyXG4gIH0pO1xyXG5cclxuICAvLyDQvtCx0YrQtdC00LXQvdC40YLRjCDQv9C+0LTRgdC60LDQt9C60Lgg0YHQstC10YDRhdGDINGBINC40LPRgNC+0LLRi9C8INC/0L7Qu9C10LxcclxuICBjb25zdCBnYW1lRGVzayA9IFsuLi5jbHVlVG9wLCAuLi5jbHVlTGVmdEFuZFBsb3RdO1xyXG5cclxuICAvL9GB0YTQvtGA0LzQuNGA0YPQtdC8INGN0LvQtdC80LXQvdGC0Ysg0LjQs9GA0L7QstC+0LPQviDQv9C+0LvRj1xyXG4gIHN0YXRlLmh0bWwucGxvdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICBnYW1lRGVzay5mb3JFYWNoKChyb3csIGkpID0+IHtcclxuICAgIHJvdy5mb3JFYWNoKChlbCwgaikgPT4ge1xyXG4gICAgICBjb25zdCBjZWxsID0gbmV3Q2VsbCgpO1xyXG4gICAgICBpZiAoZWwgPT09ICfimqsnIHx8IGVsID09PSAn4pqqJykge1xyXG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2dhbWUnKTtcclxuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gZWw7XHJcbiAgICAgICAgZ2FtZURlc2tbaV1bal0gPSB7XHJcbiAgICAgICAgICBzdGF0ZTogJ+KaqicsXHJcbiAgICAgICAgICB2YWx1ZTogZWwsXHJcbiAgICAgICAgICBlbGVtZW50OiBjZWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZShlbCkpIHtcclxuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncm9sZScsICdjbHVlJyk7XHJcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGVsID4gMCA/IGVsIDogJyc7XHJcbiAgICAgICAgZ2FtZURlc2tbaV1bal0gPSB7XHJcbiAgICAgICAgICBzdGF0ZTogZWwsXHJcbiAgICAgICAgICB2YWx1ZTogZWwsXHJcbiAgICAgICAgICBlbGVtZW50OiBjZWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGVsID09PSAnJykge1xyXG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2VtcHR5Jyk7XHJcbiAgICAgICAgZ2FtZURlc2tbaV1bal0gPSB7XHJcbiAgICAgICAgICBzdGF0ZTogZWwsXHJcbiAgICAgICAgICB2YWx1ZTogZWwsXHJcbiAgICAgICAgICBlbGVtZW50OiBjZWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN0YXRlLmh0bWwucGxvdENvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBzZXRCb3JkZXJzKGdhbWVEZXNrKTtcclxuICBjb25zdCBjb2x1bW5zQ291bnQgPSBnYW1lRGVza1swXS5sZW5ndGg7XHJcbiAgc3RhdGUuZ2FtZS5wbG90ID0gZ2FtZURlc2s7XHJcbiAgc3RhdGUuaHRtbC5wbG90Q29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KCctLWNvbHVtbnMtY291bnQnLCBjb2x1bW5zQ291bnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZURlc2sgPSAoKSA9PiB7XHJcbiAgLy/RgdGE0L7RgNC80LjRgNGD0LXQvCDRjdC70LXQvNC10L3RgtGLINC40LPRgNC+0LLQvtCz0L4g0L/QvtC70Y9cclxuICBjb25zdCB7IHBsb3QgfSA9IHN0YXRlLmdhbWU7XHJcblxyXG4gIHN0YXRlLmh0bWwucGxvdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICBwbG90LmZvckVhY2goKHJvdywgaSkgPT4ge1xyXG4gICAgcm93LmZvckVhY2goKGVsLCBqKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSBuZXdDZWxsKCk7XHJcbiAgICAgIGlmIChlbC5zdGF0ZSA9PT0gJ+KaqycpIHtcclxuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgncm9sZScsICdnYW1lJyk7XHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsX2ZpbGwnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZWwuc3RhdGUgPT09ICfimqonKSB7XHJcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZ2FtZScpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlbC5zdGF0ZSA9PT0gJ3gnKSB7XHJcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZ2FtZScpO1xyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbF9jaGVja2VkJyk7XHJcbiAgICAgIH1cclxuICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGVsLnZhbHVlO1xyXG4gICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKGVsLnN0YXRlKSkge1xyXG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2NsdWUnKTtcclxuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gZWwuc3RhdGUgPiAwID8gZWwuc3RhdGUgOiAnJztcclxuICAgICAgfVxyXG4gICAgICBpZiAoZWwuc3RhdGUgPT09ICcnKSB7XHJcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZW1wdHknKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcGxvdFtpXVtqXSA9IHtcclxuICAgICAgICBzdGF0ZTogZWwuc3RhdGUsXHJcbiAgICAgICAgdmFsdWU6IGVsLnZhbHVlLFxyXG4gICAgICAgIGVsZW1lbnQ6IGNlbGwsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzdGF0ZS5odG1sLnBsb3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgc2V0Qm9yZGVycyhwbG90KTtcclxuICBjb25zdCBjb2x1bW5zQ291bnQgPSBwbG90WzBdLmxlbmd0aDtcclxuICBzdGF0ZS5odG1sLnBsb3RDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tY29sdW1ucy1jb3VudCcsIGNvbHVtbnNDb3VudCk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVDbHVlQXJyYXkgPSAobWF0cml4KSA9PiB7XHJcbiAgY29uc3QgY2x1ZXMgPSBbXTtcclxuICBtYXRyaXguZm9yRWFjaCgocm93LCBpKSA9PiB7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgY2x1ZXNbaV0gPSBbXTtcclxuXHJcbiAgICByb3cuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICBpZiAoY2VsbCA9PT0gJ+KaqycpIHtcclxuICAgICAgICBjb3VudCArPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjZWxsID09PSAn4pqqJykge1xyXG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcclxuICAgICAgICAgIGNsdWVzW2ldLnB1c2goY291bnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChjb3VudCA+IDApIHtcclxuICAgICAgY2x1ZXNbaV0ucHVzaChjb3VudCk7XHJcbiAgICAgIGNvdW50ID0gMDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNsdWVzO1xyXG59O1xyXG5cclxuY29uc3Qgc2V0Qm9yZGVycyA9IChtYXRyaXgpID0+IHtcclxuICBsZXQgaW5kZXhSb3cgPSAwO1xyXG5cclxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBtYXRyaXgubGVuZ3RoOyByb3cgKz0gMSkge1xyXG4gICAgbGV0IGluZGV4Q29sID0gMDtcclxuICAgIGNvbnN0IGxhc3RJbmRleFJvdyA9IG1hdHJpeFtyb3ddLmxlbmd0aCAtIDE7XHJcbiAgICBjb25zdCBsYXN0RWxlbVJvdyA9IG1hdHJpeFtyb3ddW2xhc3RJbmRleFJvd10udmFsdWU7XHJcbiAgICBpZiAobGFzdEVsZW1Sb3cgPT09ICfimqsnIHx8IGxhc3RFbGVtUm93ID09PSAn4pqqJykgaW5kZXhSb3cgKz0gMTtcclxuXHJcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBtYXRyaXhbcm93XS5sZW5ndGg7IGNvbCArPSAxKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RSb3dJbmRleCA9IG1hdHJpeC5sZW5ndGggLSAxO1xyXG4gICAgICBjb25zdCBsYXN0RWxlbUNvbCA9IG1hdHJpeFtsYXN0Um93SW5kZXhdW2NvbF0udmFsdWU7XHJcbiAgICAgIGlmIChsYXN0RWxlbUNvbCA9PT0gJ+KaqycgfHwgbGFzdEVsZW1Db2wgPT09ICfimqonKSB7XHJcbiAgICAgICAgaW5kZXhDb2wgKz0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGluZGV4Um93ICYmIGluZGV4Um93ID09PSAxKVxyXG4gICAgICAgIG1hdHJpeFtyb3ddW2NvbF0uZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZpcnN0LXJvdycsICcnKTtcclxuICAgICAgaWYgKGluZGV4Um93ICYmIGluZGV4Um93ICUgNSA9PT0gMClcclxuICAgICAgICBtYXRyaXhbcm93XVtjb2xdLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb3cnLCAnJyk7XHJcbiAgICAgIGlmIChpbmRleENvbCAmJiBpbmRleENvbCA9PT0gMSlcclxuICAgICAgICBtYXRyaXhbcm93XVtjb2xdLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdmaXJzdC1jb2wnLCAnJyk7XHJcbiAgICAgIGlmIChpbmRleENvbCAmJiBpbmRleENvbCAlIDUgPT09IDApXHJcbiAgICAgICAgbWF0cml4W3Jvd11bY29sXS5lbGVtZW50LnNldEF0dHJpYnV0ZSgnY29sJywgJycpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0ICcuL3NjaGVtZVNlbGVjdG9yLmNzcyc7XHJcbmltcG9ydCBjb2xvclNjaGVtZXMgZnJvbSAnLi4vLi4vYXNzZXRzL3NjaGVtZXMvY29sb3JTY2hlbWVzJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZU5vZGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGxldCBvcHRpb25zID0gW107XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7IGNsczogJ3NjaGVtZS1jb250YWluZXInIH0pO1xyXG4gIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdsYWJlbCcsXHJcbiAgICB0eHQ6ICfQptCy0LXRgtC+0LLQsNGPINGB0YXQtdC80LAnLFxyXG4gICAgYXR0cjogW1snZm9yJywgJ3NjaGVtZV9zZWxlY3QnXV0sXHJcbiAgfSk7XHJcbiAgY29uc3Qgc2VsZWN0ID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdzZWxlY3QnLFxyXG4gICAgY2xzOiAnc2NoZW1lLXNlbGVjdCcsXHJcbiAgICBhdHRyOiBbWydpZCcsICdzY2hlbWVfc2VsZWN0J11dLFxyXG4gIH0pO1xyXG5cclxuICBjb2xvclNjaGVtZXMuZm9yRWFjaCgoc2NoZW1lKSA9PlxyXG4gICAgb3B0aW9ucy5wdXNoKFxyXG4gICAgICBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgICB0YWc6ICdvcHRpb24nLFxyXG4gICAgICAgIHR4dDogc2NoZW1lLnRpdGxlLFxyXG4gICAgICAgIGF0dHI6IFtbJ3ZhbHVlJywgc2NoZW1lLm5hbWVdXSxcclxuICAgICAgfSlcclxuICAgIClcclxuICApO1xyXG5cclxuICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlU2NoZW1lKTtcclxuICBzZWxlY3QuYXBwZW5kKC4uLm9wdGlvbnMpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQobGFiZWwsIHNlbGVjdCk7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IGNoYW5nZVNjaGVtZSA9IChlKSA9PiB7XHJcbiAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgY29uc3Qgc2NoZW1lID0gY29sb3JTY2hlbWVzLmZpbHRlcigocykgPT4gcy5uYW1lID09PSB2YWx1ZSk7XHJcbiAgYXBwbHlTY2hlbWUoc2NoZW1lKTtcclxufTtcclxuXHJcbmNvbnN0IGFwcGx5U2NoZW1lID0gKHNjaGVtZSkgPT4ge1xyXG4gIGlmICghc2NoZW1lKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xyXG5cclxuICBjb25zdCBjb2xvcnMgPSBzY2hlbWVbMF0uY29sb3JzO1xyXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb2xvcnMpO1xyXG4gIGtleXMuZm9yRWFjaCgoY29sb3IpID0+IHtcclxuICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtjb2xvcn1gLCBjb2xvcnNbY29sb3JdKTtcclxuICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHN0YXRlIGZyb20gJy4uLy4uL3N0YXRlL3N0YXRlJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZU5vZGUnO1xyXG5pbXBvcnQgeyBnZXRSZWNvcmRzLCByZXNldExhc3RHYW1lRmxhZyB9IGZyb20gJy4uLy4uL3V0aWxzL2dhbWVSZWNvcmQnO1xyXG5pbXBvcnQgeyBwYXJzZVRpbWVyIH0gZnJvbSAnLi4vdGltZXIvdGltZXInO1xyXG5pbXBvcnQgJy4vc2NvcmUuY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBzY29yZSA9ICgpID0+IHtcclxuICBjb25zdCBkaWFsb2cgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ2RpYWxvZycsXHJcbiAgICBjbHM6ICdkaWFsb2cnLFxyXG4gICAgYXR0cjogW1snb3BlbicsICcnXV0sXHJcbiAgfSk7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICBjbHM6ICdjb250YWluZXInLFxyXG4gIH0pO1xyXG4gIHN0YXRlLmh0bWwuc2NvcmUgPSBjb250YWluZXI7XHJcbiAgdXBkYXRlU2NvcmUoKTtcclxuICBkaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZSk7XHJcbiAgZGlhbG9nLmFwcGVuZChjb250YWluZXIpO1xyXG4gIHJldHVybiBkaWFsb2c7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlU2NvcmUgPSAobXNnKSA9PiB7XHJcbiAgc3RhdGUuaHRtbC5zY29yZS5pbm5lckhUTUwgPSAnJztcclxuICBjb25zdCB0aXRsZSA9IG1zZyA/IG1zZyA6ICdTQ09SRTonO1xyXG4gIGNvbnN0IGgxID0gY3JlYXRlRWxlbWVudCh7IHRhZzogJ2gxJywgY2xzOiAnc2NvcmVfaDEnLCB0eHQ6IHRpdGxlIH0pO1xyXG4gIHN0YXRlLmh0bWwuc2NvcmUuYXBwZW5kKGgxKTtcclxuICBzdGF0ZS5odG1sLnNjb3JlSDEgPSBoMTtcclxuICBjb25zdCByZWNvcmRzID0gZ2V0Q29udGFpbmVyUmVjb3JkcygpO1xyXG4gIHJlY29yZHMgJiYgc3RhdGUuaHRtbC5zY29yZS5hcHBlbmQoLi4ucmVjb3Jkcyk7XHJcbn07XHJcblxyXG5jb25zdCBjbGlja0hhbmRsZSA9ICgpID0+IHtcclxuICBzdGF0ZS5odG1sLnNjb3JlSDEudGV4dENvbnRlbnQgPSAnU0NPUkU6JztcclxuICBzdGF0ZS5odG1sLnNjb3JlLmNsYXNzTGlzdC50b2dnbGUoJ3Njb3JlX3Nob3cnKTtcclxufTtcclxuXHJcbmNvbnN0IGdldENvbnRhaW5lclJlY29yZHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVjb3JkcyA9IGdldFJlY29yZHMoKTtcclxuXHJcbiAgY29uc3QgZGlmZmljdWx0eUxpc3QgPSBPYmplY3Qua2V5cyhzdGF0ZS5maWVsZHMpO1xyXG4gIGNvbnN0IHRhYmxlcyA9IGRpZmZpY3VsdHlMaXN0Lm1hcCgoZGlmKSA9PiB7XHJcbiAgICBjb25zdCByZWMgPSByZWNvcmRzLmZpbHRlcigocikgPT4gci5kaWZmaWN1bHR5ID09PSBkaWYpLnJldmVyc2UoKTtcclxuICAgIGlmIChyZWMubGVuZ3RoID09PSAwKSByZXR1cm4gJyc7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHsgY2xzOiAnY29udGFpbmVyX19yZWNvcmRzJyB9KTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoY3JlYXRlRWxlbWVudCh7IHR4dDogJ9C40LPRgNCwJyB9KSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKGNyZWF0ZUVsZW1lbnQoeyB0eHQ6ICfRgdC70L7QttC9LicgfSkpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChjcmVhdGVFbGVtZW50KHsgdHh0OiAn0LLRgNC10LzRjycgfSkpO1xyXG4gICAgcmVjLnNwbGljZSg1KTtcclxuICAgIGNvbnN0IHNvcnRlZCA9IHJlYy5zb3J0KChhLCBiKSA9PiBhLnRpbWVyIC0gYi50aW1lcik7XHJcbiAgICBzb3J0ZWQuZm9yRWFjaCgociwgaSkgPT4ge1xyXG4gICAgICBjb25zdCBzdHlsZSA9IHIubGFzdEdhbWUgPyAncmVjb3JkX2xhc3QtZ2FtZScgOiAnJztcclxuICAgICAgY29udGFpbmVyLmFwcGVuZChcclxuICAgICAgICBjcmVhdGVFbGVtZW50KHsgdHh0OiBgJHtpICsgMX0uICR7ci5uYW1lfWAsIGNsczogc3R5bGUgfSlcclxuICAgICAgKTtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZChjcmVhdGVFbGVtZW50KHsgdHh0OiByLmRpZmZpY3VsdHksIGNsczogc3R5bGUgfSkpO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kKGNyZWF0ZUVsZW1lbnQoeyB0eHQ6IHBhcnNlVGltZXIoci50aW1lciksIGNsczogc3R5bGUgfSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9KTtcclxuXHJcbiAgcmVzZXRMYXN0R2FtZUZsYWcocmVjb3Jkcyk7XHJcbiAgcmV0dXJuIHRhYmxlcztcclxufTtcclxuIiwiaW1wb3J0IHN0YXRlIGZyb20gJy4uLy4uL3N0YXRlL3N0YXRlJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZU5vZGUnO1xyXG5pbXBvcnQgJy4vdGltZXIuY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCB0aW1lciA9ICgpID0+IHtcclxuICBsZXQgc2Vjb25kcyA9IHBhcnNlSW50KHN0YXRlLmdhbWUudGltZXIpO1xyXG4gIHNlY29uZHMgfHw9IDA7XHJcbiAgY29uc3QgdGltZXJTdHIgPSBwYXJzZVRpbWVyKHNlY29uZHMpO1xyXG4gIGNvbnN0IHRpbWVyID0gY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGNsczogJ3RpbWVyJywgdHh0OiB0aW1lclN0ciB9KTtcclxuICBzdGF0ZS5odG1sLnRpbWVyID0gdGltZXI7XHJcbiAgcmV0dXJuIHRpbWVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlclRpbWVyID0gKCkgPT4ge1xyXG4gIGxldCBzZWNvbmRzID0gcGFyc2VJbnQoc3RhdGUuZ2FtZS50aW1lcik7XHJcbiAgc2Vjb25kcyB8fD0gMDtcclxuICBjb25zdCB0aW1lID0gcGFyc2VUaW1lcihzZWNvbmRzKTtcclxuICBpZiAoc3RhdGUuaHRtbC50aW1lci5pbm5lclRleHQgIT09IHRpbWUpIHN0YXRlLmh0bWwudGltZXIuaW5uZXJUZXh0ID0gdGltZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdGFydFRpbWVyID0gKHN0YXJ0ID0gdHJ1ZSkgPT4ge1xyXG4gIGNvbnN0IHRpbWVySGFuZGxlciA9ICgpID0+IHtcclxuICAgIHN0YXRlLmdhbWUudGltZXIgKz0gMTtcclxuICAgIHJlbmRlclRpbWVyKCk7XHJcbiAgICByZXR1cm4gdGltZXJIYW5kbGVyO1xyXG4gIH07XHJcblxyXG4gIGNsZWFySW50ZXJ2YWwoc3RhdGUuaHRtbC50aW1lcklEKTtcclxuICBpZiAoc3RhcnQpIHN0YXRlLmh0bWwudGltZXJJRCA9IHNldEludGVydmFsKHRpbWVySGFuZGxlcigpLCAxMDAwKTtcclxuICBpZiAoIXN0YXJ0KSB7XHJcbiAgICBzdGF0ZS5nYW1lLmlzR2FtZVN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgIHJlbmRlclRpbWVyKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhcnNlVGltZXIgPSAoc2Vjb25kcykgPT4ge1xyXG4gIGxldCBob3VycyA9IE1hdGgudHJ1bmMoc2Vjb25kcyAvIDM2MDApO1xyXG4gIGxldCBtaW51dGVzID0gTWF0aC50cnVuYygoc2Vjb25kcyAtIGhvdXJzICogMzYwMCkgLyA2MCk7XHJcbiAgc2Vjb25kcyA9IGAke3NlY29uZHMgLSBob3VycyAqIDM2MDAgLSBtaW51dGVzICogNjB9YDtcclxuXHJcbiAgaG91cnMgPSBob3VycyA+IDAgPyBgJHtob3Vyc306YCA6ICcnO1xyXG4gIGhvdXJzICYmIChob3VycyA9IGhvdXJzLnBhZFN0YXJ0KDMsICcwJykpO1xyXG4gIG1pbnV0ZXMgPSBtaW51dGVzID4gMCA/IGAke21pbnV0ZXN9OmAgOiAnMDA6JztcclxuICBtaW51dGVzID0gbWludXRlcy5wYWRTdGFydCgzLCAnMCcpO1xyXG4gIHNlY29uZHMgPSBzZWNvbmRzLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgcmV0dXJuIGAke2hvdXJzfSR7bWludXRlc30ke3NlY29uZHN9YDtcclxufTtcclxuIiwiaW1wb3J0IHN0YXRlIGZyb20gJy4vc3RhdGUnO1xyXG5pbXBvcnQgZmllbGQ1eDUgZnJvbSAnLi4vZmllbGRzLzV4NS5qc29uJztcclxuaW1wb3J0IGZpZWxkMTB4MTAgZnJvbSAnLi4vZmllbGRzLzEweDEwLmpzb24nO1xyXG5pbXBvcnQgZmllbGQxNXgxNSBmcm9tICcuLi9maWVsZHMvMTV4MTUuanNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgZmllbGRzID0gZ2V0RmllbGRzKCk7XHJcbiAgc2V0VW5pY0lEKGZpZWxkcyk7XHJcbiAgT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBmaWVsZHM6IGZpZWxkcyxcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEZpZWxkcyA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgJzV4NSc6IGZpZWxkNXg1LFxyXG4gICAgJzEweDEwJzogZmllbGQxMHgxMCxcclxuICAgICcxNXgxNSc6IGZpZWxkMTV4MTUsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHNldFVuaWNJRCA9IChmaWVsZHMpID0+IHtcclxuICBsZXQgaWQgPSAwO1xyXG4gIGZvciAobGV0IGZpZWxkIGluIGZpZWxkcykge1xyXG4gICAgZmllbGRzW2ZpZWxkXS5mb3JFYWNoKChnYW1lKSA9PiB7XHJcbiAgICAgIGdhbWUuaWQgPSBpZDtcclxuICAgICAgaWQgKz0gMTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdhbWU6IHtcclxuICAgIHBsb3Q6IFtdLFxyXG4gICAgY3VycmVudEdhbWU6IDAsXHJcbiAgICBjdXJyZW50R2FtZU5hbWU6ICcnLFxyXG4gICAgZGlmZmljdWx0eTogJzV4NScsXHJcbiAgICBzaG93Q2VsbHNWYWx1ZTogZmFsc2UsXHJcbiAgICB0aW1lcjogMCxcclxuICAgIGlzR2FtZVN0YXJ0ZWQ6IGZhbHNlLFxyXG4gICAgYnJ1c2g6ICdmaWxsJywgLy8gZmlsbCB8IGNyb3NzXHJcbiAgICBhbmltZUludGVydmFsOiA2MCxcclxuICB9LFxyXG4gIGZpZWxkczogW10sXHJcbiAgaHRtbDoge30sXHJcbiAgbHNLZXlTdGF0ZTogJ25vbm9ncmFtMjAyNDAxMjcxNjE3MDEnLFxyXG4gIGxzS2V5UmVjb3JkczogJ25vbm9ncmFtMjAyNDAxMjgxODI2MDEnLFxyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi4vc3RhdGUvc3RhdGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXJ0UmFuZG9tU1ZHYW5pbWF0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3ZnJyk7XHJcbiAgc3RhdGUuaHRtbC5pY29ucyA9IGljb25zO1xyXG5cclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IGljb25zIH0gPSBzdGF0ZS5odG1sO1xyXG4gICAgY29uc3QgY291bnQgPSBzdGF0ZS5odG1sLmljb25zLmxlbmd0aDtcclxuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChjb3VudCAtIDEpKTtcclxuICAgIGNvbnN0IGVycm9yID0gJ3JhbmRvbSDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LzQtdC90YzRiNC1IGNvdW50JztcclxuICAgIGNvbnNvbGUuYXNzZXJ0KHJhbmRvbSA8IGNvdW50LCB7IHJhbmRvbSwgY291bnQsIGVycm9yIH0pO1xyXG5cclxuICAgIGljb25zW3JhbmRvbV0uY2xhc3NMaXN0LnRvZ2dsZSgnYW5pbWF0aW9uJyk7XHJcbiAgfSwgc3RhdGUuZ2FtZS5hbmltZUludGVydmFsICogMTAwMCk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50ID0gKHtcclxuICB0YWcgPSAnZGl2JyxcclxuICBjbHMgPSAnJyxcclxuICB0eHQgPSAnJyxcclxuICBhdHRyID0gW10sXHJcbiAgaWNvbiA9IG51bGwsXHJcbn0pID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG5cclxuICBpZiAoaWNvbikge1xyXG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XHJcbiAgICBzdmcuaW5uZXJIVE1MID0gaWNvbjtcclxuXHJcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IHR4dDtcclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZChzdmcsIHNwYW4pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbGVtZW50LmlubmVyVGV4dCA9IHR4dDtcclxuICB9XHJcblxyXG4gIGNscyAmJiAoZWxlbWVudC5jbGFzc05hbWUgPSBjbHMpO1xyXG4gIGF0dHIuZm9yRWFjaCgoYXR0cmlidXQpID0+IGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0WzBdLCBhdHRyaWJ1dFsxXSkpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJ1dHRvbiA9ICh7XHJcbiAgY2xzID0gJycsXHJcbiAgaWNvbiA9IG51bGwsXHJcbiAgdHh0ID0gJycsXHJcbiAgYXR0ciA9IFtdLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7IGNsczogYGJ1dHRvbi1jb250YWluZXIgJHtjbHN9YCB9KTtcclxuICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KHsgdGFnOiAnYnV0dG9uJywgY2xzOiAnYnV0dG9uJywgYXR0cjogYXR0ciB9KTtcclxuXHJcbiAgaWYgKGljb24pIHtcclxuICAgIGNvbnN0IHN2ZyA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdzdmcnLCBjbHM6ICdidXR0b25faWNvbicgfSk7XHJcbiAgICBzdmcuaW5uZXJIVE1MID0gaWNvbjtcclxuICAgIGJ1dHRvbi5hcHBlbmQoc3ZnKTtcclxuICB9XHJcblxyXG4gIGlmICh0eHQpIHtcclxuICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVFbGVtZW50KHsgdGFnOiAnc3BhbicsIGNsczogJ2J1dHRvbl9zcGFuJywgdHh0OiB0eHQgfSk7XHJcbiAgICBidXR0b24uYXBwZW5kKHNwYW4pO1xyXG4gIH1cclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZChidXR0b24pO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tICcuLi9zdGF0ZS9zdGF0ZSc7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2NyZWF0ZU5vZGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHNlbGVjdCwgZ2FtZXMpID0+IHtcclxuICBjb25zdCBvcHRpb25zID0gZ2FtZXMubWFwKChnYW1lKSA9PiB7XHJcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gZ2FtZS5uYW1lO1xyXG4gICAgY29uc3QgTUFYX0xFTkdUSCA9IDMwO1xyXG4gICAgY29uc3QgbmFtZU5vcm1hbGl6ZWQgPVxyXG4gICAgICBsZW5ndGggPiBNQVhfTEVOR1RIID8gZ2FtZS5uYW1lLnNsaWNlKDAsIE1BWF9MRU5HVEgpICsgJy4uLicgOiBnYW1lLm5hbWU7XHJcbiAgICBjb25zdCBjaGVja2VkID1cclxuICAgICAgc3RhdGUuZ2FtZS5jdXJyZW50R2FtZSA9PT0gZ2FtZS5pZCA/ICdzZWxlY3RlZCcgOiAndW5zZWxlY3RlZCc7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgIHRhZzogJ29wdGlvbicsXHJcbiAgICAgIGF0dHI6IFtcclxuICAgICAgICBbJ3ZhbHVlJywgZ2FtZS5pZF0sXHJcbiAgICAgICAgW2NoZWNrZWQsICcnXSxcclxuICAgICAgXSxcclxuICAgICAgdHh0OiBuYW1lTm9ybWFsaXplZCxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHNlbGVjdC5pbm5lckhUTUwgPSAnJztcclxuICBzZWxlY3QuYXBwZW5kKC4uLm9wdGlvbnMpO1xyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi4vc3RhdGUvc3RhdGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJlY29yZHMgPSAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdGF0ZS5sc0tleVJlY29yZHMpO1xyXG4gICAgY29uc3QgcmVjb3JkcyA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICByZXR1cm4gcmVjb3JkcyB8fCBbXTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVSZWNvcmRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlY29yZCA9IHtcclxuICAgIG5hbWU6IHN0YXRlLmdhbWUuY3VycmVudEdhbWVOYW1lLFxyXG4gICAgZGlmZmljdWx0eTogc3RhdGUuZ2FtZS5kaWZmaWN1bHR5LFxyXG4gICAgdGltZXI6IHN0YXRlLmdhbWUudGltZXIsXHJcbiAgICBsYXN0R2FtZTogdHJ1ZSxcclxuICB9O1xyXG5cclxuICBjb25zdCBvbGRSZWNvcmRzID0gZ2V0UmVjb3JkcygpO1xyXG4gIGNvbnN0IG5ld1JlY29yZHMgPSBbLi4ub2xkUmVjb3JkcywgcmVjb3JkXTtcclxuICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkobmV3UmVjb3Jkcyk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RhdGUubHNLZXlSZWNvcmRzLCBkYXRhKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXNldExhc3RHYW1lRmxhZyA9IChyZWNvcmRzKSA9PiB7XHJcbiAgY29uc3Qgd29GbGFnID0gcmVjb3Jkcy5tYXAoKHIpID0+ICh7IC4uLnIsIGxhc3RHYW1lOiBmYWxzZSB9KSk7XHJcbiAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHdvRmxhZyk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RhdGUubHNLZXlSZWNvcmRzLCBkYXRhKTtcclxufTtcclxuIiwiaW1wb3J0IHN0YXRlIGZyb20gJy4uL3N0YXRlL3N0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChpZCkgPT4ge1xyXG4gIGNvbnN0IElEID0gTnVtYmVyKGlkKTtcclxuICBmb3IgKGxldCBmaWVsZCBpbiBzdGF0ZS5maWVsZHMpIHtcclxuICAgIGNvbnN0IGdhbWUgPSBzdGF0ZS5maWVsZHNbZmllbGRdLmZpbHRlcigoZ2FtZSkgPT4gZ2FtZS5pZCA9PT0gSUQpWzBdO1xyXG4gICAgaWYgKGdhbWUpIHtcclxuICAgICAgc3RhdGUuZ2FtZS5jdXJyZW50R2FtZSA9IGdhbWUuaWQ7XHJcbiAgICAgIHN0YXRlLmdhbWUuY3VycmVudEdhbWVOYW1lID0gZ2FtZS5uYW1lO1xyXG4gICAgICByZXR1cm4gZ2FtZS5wbG90O1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuIiwiaW1wb3J0IHsgc3dpdGNoR2FtZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZVNlbGVjdG9yL2dhbWVTZWxlY3Rvcic7XHJcbmltcG9ydCB7IHVwZGF0ZURlc2sgfSBmcm9tICcuLi9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvcmVuZGVyRGVzayc7XHJcbmltcG9ydCB7IHN0YXJ0VGltZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL3RpbWVyL3RpbWVyJztcclxuaW1wb3J0IHN2Z19jcm9zcyBmcm9tICcuLi9hc3NldHMvaWNvbnMvY3Jvc3Muc3ZnJztcclxuaW1wb3J0IHN2Z19maWxsIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9maWxsLnN2Zyc7XHJcblxyXG5pbXBvcnQgc3RhdGUgZnJvbSAnLi4vc3RhdGUvc3RhdGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVTdGF0ZSA9ICgpID0+IHtcclxuICBjb25zdCB7IGdhbWUgfSA9IHN0YXRlO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0YXRlLmxzS2V5U3RhdGUsIEpTT04uc3RyaW5naWZ5KGdhbWUpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkU3RhdGUgPSAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RhdGUubHNLZXlTdGF0ZSk7XHJcbiAgICBjb25zdCBnYW1lID0gSlNPTi5wYXJzZShscyk7XHJcbiAgICBpZiAoZ2FtZSkge1xyXG4gICAgICBzdGF0ZS5nYW1lID0gZ2FtZTtcclxuICAgICAgdXBkYXRlRGVzaygpO1xyXG4gICAgICBzd2l0Y2hHYW1lKHN0YXRlLmdhbWUuY3VycmVudEdhbWUpO1xyXG4gICAgICBzdGFydFRpbWVyKHRydWUpO1xyXG4gICAgICBjb25zdCBvcGFjaXR5ID0gc3RhdGUuZ2FtZS5zaG93Q2VsbHNWYWx1ZSA/ICcwLjQnIDogJzAnO1xyXG4gICAgICBzdGF0ZS5odG1sLm1haW4uc3R5bGUuc2V0UHJvcGVydHkoJy0tb3BhY2l0eS1jZWxsLXRleHQnLCBvcGFjaXR5KTtcclxuXHJcbiAgICAgIGlmIChzdGF0ZS5nYW1lLmJydXNoID09PSAnZmlsbCcpIHtcclxuICAgICAgICBzdGF0ZS5odG1sLmljb25CcnVzaE1vZGUuaW5uZXJIVE1MID0gc3ZnX2ZpbGw7XHJcbiAgICAgIH0gZWxzZSBzdGF0ZS5odG1sLmljb25CcnVzaE1vZGUuaW5uZXJIVE1MID0gc3ZnX2Nyb3NzO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCfQvtGI0LjQsdC60LAg0L/RgNC4INC30LDQs9GA0YPQt9C60LUg0LjQs9GA0Ysg0LjQtyDRgdC10LrRgNC10LrRgtC90L7Qs9C+INGF0YDQsNC90LjQu9C40YnQsDonLCBlcnJvcik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAobWF0cml4LCBkaXJlY3Rpb24gPSAncmlnaHQnKSA9PiB7XHJcbiAgY29uc3QgdG1wTWF0cml4ID0gWy4uLm1hdHJpeF07XHJcbiAgY29uc3Qgcm90YXRlZE1hdHJpeCA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG1wTWF0cml4WzBdLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICByb3RhdGVkTWF0cml4W2ldID0gW107XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRtcE1hdHJpeC5sZW5ndGg7IGogKz0gMSkge1xyXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKVxyXG4gICAgICAgIHJvdGF0ZWRNYXRyaXhbaV1bal0gPSB0bXBNYXRyaXhbdG1wTWF0cml4Lmxlbmd0aCAtIDEgLSBqXVtpXTtcclxuICAgICAgZWxzZSByb3RhdGVkTWF0cml4W2ldW2pdID0gdG1wTWF0cml4W2pdW3RtcE1hdHJpeFtpXS5sZW5ndGggLSAxIC0gaV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByb3RhdGVkTWF0cml4O1xyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi4vc3RhdGUvc3RhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGUpID0+IHtcclxuICBjb25zdCB7IGNvZGUgfSA9IGU7XHJcblxyXG4gIGlmIChjb2RlID09PSAnS2V5UycpIHtcclxuICAgIGNvbnN0IGdhbWUgPSBbLi4uc3RhdGUuZ2FtZS5wbG90XTtcclxuICAgIGNvbnN0IGZpbHRlciA9IGdhbWVcclxuICAgICAgLm1hcCgocm93KSA9PiByb3cubWFwKChjZWxsKSA9PiBjZWxsLnN0YXRlKSlcclxuICAgICAgLmZpbHRlcigocm93KSA9PiByb3dbMF0gIT09ICcnKVxyXG4gICAgICAubWFwKChyb3cpID0+IHJvdy5maWx0ZXIoKGNlbGwpID0+ICFOdW1iZXIuaXNGaW5pdGUoY2VsbCkpKTtcclxuXHJcbiAgICBjb25zdCBqc29uID0ge1xyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgcGxvdDogZmlsdGVyLFxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUud2FybignanNvbiBmb3Igc2F2ZS4uLicsIGpzb24pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvZGUgPT09ICdLZXlIJykge1xyXG4gICAgc3RhdGUuZ2FtZS5zaG93Q2VsbHNWYWx1ZSA9ICFzdGF0ZS5nYW1lLnNob3dDZWxsc1ZhbHVlO1xyXG4gICAgY29uc3Qgb3BhY2l0eSA9IHN0YXRlLmdhbWUuc2hvd0NlbGxzVmFsdWUgPyAnMC40JyA6ICcwJztcclxuICAgIHN0YXRlLmh0bWwucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1vcGFjaXR5LWNlbGwtdGV4dCcsIG9wYWNpdHkpO1xyXG4gIH1cclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3RpbWVyL3RpbWVyJztcclxuaW1wb3J0IHN0YXRlIGZyb20gJy4vc3RhdGUvc3RhdGUnO1xyXG5pbXBvcnQgZm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyJztcclxuaW1wb3J0IGluaXRTdGF0ZSBmcm9tICcuL3N0YXRlL2luaXRTdGF0ZSc7XHJcbmltcG9ydCByZW5kZXJEZXNrIGZyb20gJy4vY29tcG9uZW50cy9wbG90Q29udGFpbmVyL3JlbmRlckRlc2snO1xyXG5pbXBvcnQgd2luZG93SGFuZGxlIGZyb20gJy4vdXRpbHMvd2luZG93SGFuZGxlJztcclxuaW1wb3J0IHBsb3RDb250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL3Bsb3RDb250YWluZXIvcGxvdENvbnRhaW5lcic7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxzL2NyZWF0ZU5vZGUnO1xyXG5pbXBvcnQgY3JlYXRlT3B0aW9ucyBmcm9tICcuL3V0aWxzL2NyZWF0ZU9wdGlvbnMnO1xyXG5pbXBvcnQgc2NoZW1lU2VsZWN0b3IgZnJvbSAnLi9jb21wb25lbnRzL3NjaGVtZVNlbGVjdG9yL3NjaGVtZVNlbGVjdG9yJztcclxuaW1wb3J0IHsgc2NvcmUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2NvcmUvc2NvcmUnO1xyXG5pbXBvcnQgeyBnYW1lU2VsZWN0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FtZVNlbGVjdG9yL2dhbWVTZWxlY3Rvcic7XHJcbmltcG9ydCBidG5Td2l0Y2hNb2RlIGZyb20gJy4vY29tcG9uZW50cy9idXR0b25zL21vZGUvYnRuU3dpdGNoTW9kZSc7XHJcbmltcG9ydCB7IHN0YXJ0UmFuZG9tU1ZHYW5pbWF0aW9uIH0gZnJvbSAnLi91dGlscy9hbmltYXRpb24nO1xyXG5cclxuZnVuY3Rpb24gZ2FtZSgpIHtcclxuICBpbml0U3RhdGUoKTtcclxuICBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgc3RhdGUuaHRtbC5tYWluID0gY3JlYXRlRWxlbWVudCh7IHRhZzogJ21haW4nLCBjbHM6ICdtYWluJyB9KTtcclxuICBzdGF0ZS5odG1sLm1haW4uYXBwZW5kKHBsb3RDb250YWluZXIoKSk7XHJcbiAgc3RhdGUuaHRtbC5tYWluLmFwcGVuZChidG5Td2l0Y2hNb2RlKCkpO1xyXG4gIHN0YXRlLmh0bWwucm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XHJcbiAgcmV0dXJuIHN0YXRlLmh0bWwubWFpbjtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5Jyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHNjaGVtZVNlbGVjdG9yKCkpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChnYW1lU2VsZWN0b3IoKSk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHRpbWVyKCkpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChnYW1lKCkpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChmb290ZXIoKSk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHNjb3JlKCkpO1xyXG5yZW5kZXJEZXNrKDApO1xyXG5jcmVhdGVPcHRpb25zKHN0YXRlLmh0bWwuZ2FtZVNlbGVjdCwgc3RhdGUuZmllbGRzWyc1eDUnXSk7XHJcbnN0YXJ0UmFuZG9tU1ZHYW5pbWF0aW9uKCk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHdpbmRvd0hhbmRsZSk7XHJcblxyXG4vLyDQtNC+0LHQsNCy0LjRgtGMINGH0LXQutCx0L7QutGBINC+0YLQutC70Y7Rh9C10L3QuNGPINC30LLRg9C60L7QslxyXG4vLyDQtNC+0LHQsNCy0LjRgtGMINC30LDQv9C+0LvQvdC10L3QuNC1IFwi0L3QsNC20LDQuyDQuCDQv9C+0YLQsNGJ0LjQu1wiXHJcbi8vINC00L7QsdCw0LLQuNGC0YwgZmF2aWNvblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=