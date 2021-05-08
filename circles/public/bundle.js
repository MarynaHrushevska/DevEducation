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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box; }\\n\\n.container {\\n  position: relative;\\n  width: 100vw;\\n  height: 100vh;\\n  background-color: #f3f3f3; }\\n  .container__svg {\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    width: 1024px;\\n    height: 768px;\\n    border: 1px dashed #ccc;\\n    background-color: #fff;\\n    box-shadow: 3px 3px 10px #ccc; }\\n  .container svg {\\n    position: absolute;\\n    transform: translate(-50%, -50%);\\n    pointer-events: none; }\\n\\ncanvas {\\n  display: block;\\n  width: 100%;\\n  height: 100%; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Physics.js":
/*!************************!*\
  !*** ./src/Physics.js ***!
  \************************/
/*! exports provided: Physics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Physics\", function() { return Physics; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Physics = /*#__PURE__*/function () {\n  function Physics() {\n    _classCallCheck(this, Physics);\n  }\n\n  _createClass(Physics, [{\n    key: \"getDistance\",\n    value: function getDistance(circleA, circleB) {\n      var distX = circleA.x - circleB.x;\n      var distY = circleA.y - circleB.y;\n      return Math.sqrt(distX * distX + distY * distY);\n    }\n  }, {\n    key: \"detectCirclesCollision\",\n    value: function detectCirclesCollision(circleA, circleB) {\n      var distance = this.getDistance(circleA, circleB);\n\n      if (distance <= circleA.radius + circleB.radius) {\n        return true;\n      }\n\n      return false;\n    }\n  }, {\n    key: \"detectCircleAndPointCollision\",\n    value: function detectCircleAndPointCollision(circle, point) {\n      var circleX = circle.x,\n          circleY = circle.y,\n          radius = circle.radius;\n\n      if (Math.abs(circleX - point.x) <= radius * 1.25 && Math.abs(circleY - point.y) <= radius * 1.25) {\n        return true;\n      }\n\n      return false;\n    }\n  }, {\n    key: \"getCollisionVector\",\n    value: function getCollisionVector(circleA, circleB) {\n      return {\n        x: circleB.x - circleA.x,\n        y: circleB.y - circleA.y\n      };\n    }\n  }, {\n    key: \"getVelocityVector\",\n    value: function getVelocityVector(circleA, circleB) {\n      return {\n        x: circleA.dx - circleB.dx,\n        y: circleA.dy - circleB.dy\n      };\n    }\n  }, {\n    key: \"handleCirclesCollision\",\n    value: function handleCirclesCollision(circleA, circleB) {\n      var collisionVector = this.getCollisionVector(circleA, circleB);\n      var distance = this.getDistance(circleA, circleB);\n      var collisionVectorNorm = {\n        x: collisionVector.x / distance,\n        y: collisionVector.y / distance\n      };\n      var relativeVelVector = this.getVelocityVector(circleA, circleB);\n      var speed = relativeVelVector.x * collisionVectorNorm.x + relativeVelVector.y * collisionVectorNorm.y;\n\n      if (speed < 0) {\n        return;\n      }\n\n      var impulse = 1.7 * speed / (circleA.radius + circleB.radius);\n      circleA.dx -= impulse * circleA.radius * collisionVectorNorm.x;\n      circleA.dy -= impulse * circleA.radius * collisionVectorNorm.y;\n      circleB.dx += impulse * circleB.radius * collisionVectorNorm.x;\n      circleB.dy += impulse * circleB.radius * collisionVectorNorm.y;\n    }\n  }]);\n\n  return Physics;\n}();\n\n//# sourceURL=webpack:///./src/Physics.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: FULL_WIDTH, FULL_HEIGHT, MAX_RADIUS, MIN_RADIUS, MAX_SPEED, MIN_SPEED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FULL_WIDTH\", function() { return FULL_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FULL_HEIGHT\", function() { return FULL_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAX_RADIUS\", function() { return MAX_RADIUS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MIN_RADIUS\", function() { return MIN_RADIUS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAX_SPEED\", function() { return MAX_SPEED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MIN_SPEED\", function() { return MIN_SPEED; });\nvar FULL_WIDTH = 1024;\nvar FULL_HEIGHT = 768;\nvar MAX_RADIUS = 50;\nvar MIN_RADIUS = 10;\nvar MAX_SPEED = 50;\nvar MIN_SPEED = 10;\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/controller/Controller.js":
/*!**************************************!*\
  !*** ./src/controller/Controller.js ***!
  \**************************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Controller\", function() { return Controller; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model */ \"./src/model/index.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Controller = /*#__PURE__*/function () {\n  function Controller(view, physics) {\n    var _this = this;\n\n    _classCallCheck(this, Controller);\n\n    _defineProperty(this, \"draw\", function (model) {\n      _this.view.drawCircle(model.circle);\n    });\n\n    _defineProperty(this, \"play\", function () {\n      var lastTime = null;\n\n      var render = function render(time) {\n        if (!lastTime) {\n          lastTime = time;\n        }\n\n        var timeDelta = time - lastTime;\n\n        _this.models.forEach(function (model) {\n          _this.move(model, timeDelta);\n\n          _this.draw(model);\n\n          _this.handleCollisions();\n        });\n\n        requestAnimationFrame(render);\n        lastTime = time;\n      };\n\n      requestAnimationFrame(render);\n    });\n\n    _defineProperty(this, \"move\", function (model, timeDelta) {\n      var circle = model.circle;\n      var newX = circle.x + circle.speed * timeDelta / 1000 * circle.dx;\n      var newY = circle.y + circle.speed * timeDelta / 1000 * circle.dy;\n      circle.setX(newX);\n\n      _this.fixHorizontal(circle);\n\n      circle.setY(newY);\n\n      _this.fixVertical(circle);\n    });\n\n    _defineProperty(this, \"fixHorizontal\", function (circle) {\n      var x = circle.x,\n          dx = circle.dx,\n          radius = circle.radius;\n      var maxX = _constants__WEBPACK_IMPORTED_MODULE_0__[\"FULL_WIDTH\"] - radius;\n      var minX = radius;\n      var offset = 3;\n\n      if (x <= minX) {\n        circle.setX(minX + offset);\n        circle.setDx(-dx);\n      }\n\n      if (x >= maxX) {\n        circle.setX(maxX - offset);\n        circle.setDx(-dx);\n      }\n    });\n\n    _defineProperty(this, \"fixVertical\", function (circle) {\n      var y = circle.y,\n          dy = circle.dy,\n          radius = circle.radius;\n      var maxY = _constants__WEBPACK_IMPORTED_MODULE_0__[\"FULL_HEIGHT\"] - radius;\n      var minY = radius;\n      var offset = 3;\n\n      if (y <= minY) {\n        circle.setY(minY + offset);\n        circle.setDy(-dy);\n      }\n\n      if (y >= maxY) {\n        circle.setY(maxY - offset);\n        circle.setDy(-dy);\n      }\n    });\n\n    _defineProperty(this, \"onClickCircle\", function (clickX, clickY) {\n      var anyCollision = false;\n\n      var _iterator = _createForOfIteratorHelper(_this.models),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var model = _step.value;\n\n          if (_this.physics.detectCircleAndPointCollision(model.circle, {\n            x: clickX,\n            y: clickY\n          })) {\n            anyCollision = true;\n            break;\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      if (!anyCollision && _this.models.length < 10) {\n        _this.models.push(new _model__WEBPACK_IMPORTED_MODULE_1__[\"Model\"](clickX, clickY));\n      }\n    });\n\n    this.view = view;\n    this.physics = physics;\n    this.view.setOnClickCanvas(this.onClickCircle);\n    this.models = [];\n  }\n\n  _createClass(Controller, [{\n    key: \"handleCollisions\",\n    value: function handleCollisions() {\n      this.models.forEach(function (model) {\n        return model.circle.setIsColliding(false);\n      });\n\n      for (var i = 0; i < this.models.length; i++) {\n        var targetCircle = this.models[i].circle;\n\n        for (var j = i + 1; j < this.models.length; j++) {\n          var circle = this.models[j].circle;\n\n          if (circle.id === targetCircle.id || circle.isColliding) {\n            return;\n          }\n\n          if (this.physics.detectCirclesCollision(targetCircle, circle)) {\n            circle.setIsColliding(true);\n            targetCircle.setIsColliding(true);\n            this.physics.handleCirclesCollision(targetCircle, circle);\n          }\n        }\n      }\n    }\n  }]);\n\n  return Controller;\n}();\n\n//# sourceURL=webpack:///./src/controller/Controller.js?");

/***/ }),

/***/ "./src/controller/index.js":
/*!*********************************!*\
  !*** ./src/controller/index.js ***!
  \*********************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller */ \"./src/controller/Controller.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Controller\", function() { return _Controller__WEBPACK_IMPORTED_MODULE_0__[\"Controller\"]; });\n\n\n\n//# sourceURL=webpack:///./src/controller/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/view/index.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ \"./src/controller/index.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _Physics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Physics */ \"./src/Physics.js\");\n\n\n\n\n\nvar init = function init() {\n  var view = new _view__WEBPACK_IMPORTED_MODULE_0__[\"View\"]();\n  var physics = new _Physics__WEBPACK_IMPORTED_MODULE_3__[\"Physics\"]();\n  var controller = new _controller__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"](view, physics);\n  controller.play();\n};\n\ninit();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/model/Circle.js":
/*!*****************************!*\
  !*** ./src/model/Circle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Circle; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Circle = /*#__PURE__*/function () {\n  //  center x\n  //  center y\n  // speed by x\n  // speed by y\n  function Circle(startCircle) {\n    var _this = this;\n\n    _classCallCheck(this, Circle);\n\n    _defineProperty(this, \"x\", 0);\n\n    _defineProperty(this, \"y\", 0);\n\n    _defineProperty(this, \"dx\", 0);\n\n    _defineProperty(this, \"dy\", 0);\n\n    _defineProperty(this, \"radius\", 0);\n\n    _defineProperty(this, \"color\", 'black');\n\n    _defineProperty(this, \"speed\", 0);\n\n    _defineProperty(this, \"setDx\", function (dx) {\n      _this.dx = dx;\n    });\n\n    _defineProperty(this, \"setDy\", function (dy) {\n      _this.dy = dy;\n    });\n\n    _defineProperty(this, \"setX\", function (x) {\n      return _this.x = x;\n    });\n\n    _defineProperty(this, \"setY\", function (y) {\n      return _this.y = y;\n    });\n\n    var _x = startCircle.x,\n        _y = startCircle.y,\n        _dx = startCircle.dx,\n        _dy = startCircle.dy,\n        radius = startCircle.radius,\n        color = startCircle.color,\n        speed = startCircle.speed,\n        id = startCircle.id;\n    this.x = _x;\n    this.y = _y;\n    this.dx = _dx;\n    this.dy = _dy;\n    this.radius = radius;\n    this.color = color;\n    this.speed = speed;\n    this.id = id;\n    this.isColliding = false;\n  }\n\n  _createClass(Circle, [{\n    key: \"setIsColliding\",\n    value: function setIsColliding(isColliding) {\n      this.isColliding = isColliding;\n    }\n  }]);\n\n  return Circle;\n}();\n\n\n\n//# sourceURL=webpack:///./src/model/Circle.js?");

/***/ }),

/***/ "./src/model/Model.js":
/*!****************************!*\
  !*** ./src/model/Model.js ***!
  \****************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Model\", function() { return Model; });\n/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Circle */ \"./src/model/Circle.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Model = /*#__PURE__*/function () {\n  function Model(_x, _y) {\n    var _this = this;\n\n    _classCallCheck(this, Model);\n\n    _defineProperty(this, \"createCircle\", function (x, y) {\n      var radius = Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_1__[\"MAX_RADIUS\"] + _constants__WEBPACK_IMPORTED_MODULE_1__[\"MIN_RADIUS\"]);\n      var angle = Math.random() * 2 * Math.PI;\n      var dx = Math.cos(angle);\n      var dy = Math.sin(angle);\n      var speed = Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_1__[\"MAX_SPEED\"] + _constants__WEBPACK_IMPORTED_MODULE_1__[\"MIN_SPEED\"]);\n      var color = \"rgb(\".concat(Math.floor(Math.random() * 255), \", \").concat(Math.floor(Math.random() * 255), \", \").concat(Math.floor(Math.random() * 255), \")\");\n\n      var id = _this.getRandomId(10);\n\n      return {\n        id: id,\n        x: x,\n        y: y,\n        dx: dx,\n        dy: dy,\n        radius: radius,\n        color: color,\n        speed: speed\n      };\n    });\n\n    var circle = this.createCircle(_x, _y);\n    this.circle = new _Circle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](circle);\n  }\n\n  _createClass(Model, [{\n    key: \"getRandomId\",\n    value: function getRandomId(length) {\n      var result = [];\n      var symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n      var symbolsLength = symbols.length;\n\n      for (var i = 0; i < length; i++) {\n        result.push(symbols.charAt(Math.floor(Math.random() * symbolsLength)));\n      }\n\n      return result.join('');\n    }\n  }]);\n\n  return Model;\n}();\n\n//# sourceURL=webpack:///./src/model/Model.js?");

/***/ }),

/***/ "./src/model/index.js":
/*!****************************!*\
  !*** ./src/model/index.js ***!
  \****************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ \"./src/model/Model.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Model\", function() { return _Model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"]; });\n\n\n\n//# sourceURL=webpack:///./src/model/index.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/styles/style.scss?");

/***/ }),

/***/ "./src/view/View.js":
/*!**************************!*\
  !*** ./src/view/View.js ***!
  \**************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return View; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar View = /*#__PURE__*/function () {\n  function View() {\n    var _this = this;\n\n    _classCallCheck(this, View);\n\n    _defineProperty(this, \"init\", function () {\n      _this.root = document.getElementById('root');\n\n      _this.root.addEventListener('click', function (event) {\n        var clientX = event.clientX,\n            clientY = event.clientY;\n\n        var rect = _this.root.getBoundingClientRect();\n\n        var clickX = clientX - rect.x;\n        var clickY = clientY - rect.y;\n        _this.onClickCanvas && _this.onClickCanvas(clickX, clickY);\n      });\n    });\n\n    _defineProperty(this, \"drawCircle\", function (circle) {\n      var x = circle.x,\n          y = circle.y,\n          radius = circle.radius,\n          color = circle.color,\n          id = circle.id;\n\n      if (_this.circles.has(id)) {\n        var svg = _this.circles.get(id);\n\n        svg.style = \"top: \".concat(y, \"px; left: \").concat(x, \"px;\");\n        svg.setAttributeNS(null, 'fill', color);\n      } else {\n        var _svg = _this.createSvgElement('svg');\n\n        _svg.setAttribute('width', radius * 2);\n\n        _svg.setAttribute('height', radius * 2);\n\n        _svg.style = \"top: \".concat(y, \"px; left: \").concat(x, \"px;\");\n\n        _svg.setAttributeNS(null, 'fill', color);\n\n        var circleSvg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');\n        circleSvg.setAttributeNS(null, 'r', radius);\n        circleSvg.setAttributeNS(null, 'cx', radius);\n        circleSvg.setAttributeNS(null, 'cy', radius);\n\n        _svg.appendChild(circleSvg);\n\n        _this.root.appendChild(_svg);\n\n        _this.circles.set(id, _svg);\n      }\n    });\n\n    _defineProperty(this, \"setOnClickCanvas\", function (callback) {\n      _this.onClickCanvas = callback;\n    });\n\n    this.root = null;\n    this.onClickCanvas = null;\n    this.circles = new Map();\n    this.init();\n  }\n\n  _createClass(View, [{\n    key: \"createSvgElement\",\n    value: function createSvgElement(elemName) {\n      return document.createElementNS('http://www.w3.org/2000/svg', elemName);\n    }\n  }]);\n\n  return View;\n}();\n\n//# sourceURL=webpack:///./src/view/View.js?");

/***/ }),

/***/ "./src/view/index.js":
/*!***************************!*\
  !*** ./src/view/index.js ***!
  \***************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ \"./src/view/View.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return _View__WEBPACK_IMPORTED_MODULE_0__[\"View\"]; });\n\n\n\n//# sourceURL=webpack:///./src/view/index.js?");

/***/ })

/******/ });