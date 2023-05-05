/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_player_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player_jet */ \"./src/scripts/player_jet.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"gameCanvas\");\n  const ctx = canvas.getContext(\"2d\");\n  const player = new _scripts_player_jet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width / 2, canvas.height - 50, 50, 50, 5);\n  function gameLoop() {\n    player.update();\n    draw();\n    requestAnimationFrame(gameLoop);\n  }\n  gameLoop();\n  function draw() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    player.draw(ctx);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBNkM7QUFFN0NDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFlBQVksQ0FBQztFQUNwRCxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUVuQyxNQUFNQyxNQUFNLEdBQUcsSUFBSVAsMkRBQVMsQ0FBQ0csTUFBTSxDQUFDSyxLQUFLLEdBQUcsQ0FBQyxFQUFFTCxNQUFNLENBQUNNLE1BQU0sR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7RUFFN0UsU0FBU0MsUUFBUUEsQ0FBQSxFQUFHO0lBQ2xCSCxNQUFNLENBQUNJLE1BQU0sQ0FBQyxDQUFDO0lBQ2ZDLElBQUksQ0FBQyxDQUFDO0lBQ05DLHFCQUFxQixDQUFDSCxRQUFRLENBQUM7RUFDakM7RUFFQUEsUUFBUSxDQUFDLENBQUM7RUFFVixTQUFTRSxJQUFJQSxDQUFBLEVBQUc7SUFDZFAsR0FBRyxDQUFDUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRVgsTUFBTSxDQUFDSyxLQUFLLEVBQUVMLE1BQU0sQ0FBQ00sTUFBTSxDQUFDO0lBQ2hERixNQUFNLENBQUNLLElBQUksQ0FBQ1AsR0FBRyxDQUFDO0VBQ2xCO0FBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNwcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllckpldCBmcm9tIFwiLi9zY3JpcHRzL3BsYXllcl9qZXRcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVDYW52YXNcIik7XHJcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllckpldChjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC0gNTAsIDUwLCA1MCwgNSk7XHJcblxyXG4gIGZ1bmN0aW9uIGdhbWVMb29wKCkge1xyXG4gICAgcGxheWVyLnVwZGF0ZSgpO1xyXG4gICAgZHJhdygpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcclxuICB9XHJcblxyXG4gIGdhbWVMb29wKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBwbGF5ZXIuZHJhdyhjdHgpO1xyXG4gIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6WyJQbGF5ZXJKZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJwbGF5ZXIiLCJ3aWR0aCIsImhlaWdodCIsImdhbWVMb29wIiwidXBkYXRlIiwiZHJhdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass MovingObject {\n  constructor(x, y, width, height, speed, color) {\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n    this.speed = speed;\n    this.color = color;\n  }\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.x, this.y, this.width, this.height);\n  }\n  move(dx, dy) {\n    this.x += dx * this.speed;\n    this.y += dy * this.speed;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3Zpbmdfb2JqZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxZQUFZLENBQUM7RUFDakJDLFdBQVdBLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUU7SUFDN0MsSUFBSSxDQUFDTCxDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0VBQ3BCO0VBRUFDLElBQUlBLENBQUNDLEdBQUcsRUFBRTtJQUNSQSxHQUFHLENBQUNDLFNBQVMsR0FBRyxJQUFJLENBQUNILEtBQUs7SUFDMUJFLEdBQUcsQ0FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQ1QsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsS0FBSyxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO0VBQ3ZEO0VBRUFPLElBQUlBLENBQUNDLEVBQUUsRUFBRUMsRUFBRSxFQUFFO0lBQ1gsSUFBSSxDQUFDWixDQUFDLElBQUlXLEVBQUUsR0FBRyxJQUFJLENBQUNQLEtBQUs7SUFDekIsSUFBSSxDQUFDSCxDQUFDLElBQUlXLEVBQUUsR0FBRyxJQUFJLENBQUNSLEtBQUs7RUFDM0I7QUFDRjtBQUVBLCtEQUFlTixZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNwcm9qZWN0Ly4vc3JjL3NjcmlwdHMvbW92aW5nX29iamVjdC5qcz9jMjAxIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmluZ09iamVjdCB7XHJcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3BlZWQsIGNvbG9yKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gIH1cclxuXHJcbiAgZHJhdyhjdHgpIHtcclxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlKGR4LCBkeSkge1xyXG4gICAgdGhpcy54ICs9IGR4ICogdGhpcy5zcGVlZDtcclxuICAgIHRoaXMueSArPSBkeSAqIHRoaXMuc3BlZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpbmdPYmplY3Q7XHJcbiJdLCJuYW1lcyI6WyJNb3ZpbmdPYmplY3QiLCJjb25zdHJ1Y3RvciIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJzcGVlZCIsImNvbG9yIiwiZHJhdyIsImN0eCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwibW92ZSIsImR4IiwiZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/moving_object.js\n");

/***/ }),

/***/ "./src/scripts/player_jet.js":
/*!***********************************!*\
  !*** ./src/scripts/player_jet.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/scripts/moving_object.js\");\n\nclass PlayerJet extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x, y, width, height, speed) {\n    super(x, y, width, height, speed, \"blue\");\n    this.pressedKeys = {\n      w: false,\n      a: false,\n      s: false,\n      d: false\n    };\n    this.addKeydownEventListener();\n    this.addKeyupEventListener();\n  }\n\n  // Add any player-specific functionality here\n\n  addKeydownEventListener() {\n    document.addEventListener(\"keydown\", event => {\n      if (event.key.toLowerCase() === \"a\") {\n        this.pressedKeys.a = true;\n      } else if (event.key.toLowerCase() === \"d\") {\n        this.pressedKeys.d = true;\n      } else if (event.key.toLowerCase() === \"w\") {\n        this.pressedKeys.w = true;\n      } else if (event.key.toLowerCase() === \"s\") {\n        this.pressedKeys.s = true;\n      }\n    });\n  }\n  addKeyupEventListener() {\n    document.addEventListener(\"keyup\", event => {\n      if (event.key.toLowerCase() === \"a\") {\n        this.pressedKeys.a = false;\n      } else if (event.key.toLowerCase() === \"d\") {\n        this.pressedKeys.d = false;\n      } else if (event.key.toLowerCase() === \"w\") {\n        this.pressedKeys.w = false;\n      } else if (event.key.toLowerCase() === \"s\") {\n        this.pressedKeys.s = false;\n      }\n    });\n  }\n  update() {\n    if (this.pressedKeys.a) {\n      this.move(-1, 0);\n    }\n    if (this.pressedKeys.d) {\n      this.move(1, 0);\n    }\n    if (this.pressedKeys.w) {\n      this.move(0, -1);\n    }\n    if (this.pressedKeys.s) {\n      this.move(0, 1);\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerJet);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksSUFBSSxDQUFDYixXQUFXLENBQUNDLENBQUMsRUFBRTtNQUN0QixJQUFJLENBQUNZLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEI7SUFDQSxJQUFJLElBQUksQ0FBQ2IsV0FBVyxDQUFDRyxDQUFDLEVBQUU7TUFDdEIsSUFBSSxDQUFDVSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqQjtFQUNGO0FBQ0Y7QUFFQSwrREFBZXBCLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvc2NyaXB0cy9wbGF5ZXJfamV0LmpzP2QwNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XHJcblxyXG5jbGFzcyBQbGF5ZXJKZXQgZXh0ZW5kcyBNb3ZpbmdPYmplY3Qge1xyXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHNwZWVkKSB7XHJcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzcGVlZCwgXCJibHVlXCIpO1xyXG4gICAgdGhpcy5wcmVzc2VkS2V5cyA9IHtcclxuICAgICAgdzogZmFsc2UsXHJcbiAgICAgIGE6IGZhbHNlLFxyXG4gICAgICBzOiBmYWxzZSxcclxuICAgICAgZDogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5hZGRLZXlkb3duRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgdGhpcy5hZGRLZXl1cEV2ZW50TGlzdGVuZXIoKTtcclxuICB9XHJcblxyXG4gIC8vIEFkZCBhbnkgcGxheWVyLXNwZWNpZmljIGZ1bmN0aW9uYWxpdHkgaGVyZVxyXG5cclxuICBhZGRLZXlkb3duRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiYVwiKSB7XHJcbiAgICAgICAgdGhpcy5wcmVzc2VkS2V5cy5hID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJkXCIpIHtcclxuICAgICAgICB0aGlzLnByZXNzZWRLZXlzLmQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpID09PSBcIndcIikge1xyXG4gICAgICAgIHRoaXMucHJlc3NlZEtleXMudyA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwic1wiKSB7XHJcbiAgICAgICAgdGhpcy5wcmVzc2VkS2V5cy5zID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRLZXl1cEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJhXCIpIHtcclxuICAgICAgICB0aGlzLnByZXNzZWRLZXlzLmEgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJkXCIpIHtcclxuICAgICAgICB0aGlzLnByZXNzZWRLZXlzLmQgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJ3XCIpIHtcclxuICAgICAgICB0aGlzLnByZXNzZWRLZXlzLncgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJzXCIpIHtcclxuICAgICAgICB0aGlzLnByZXNzZWRLZXlzLnMgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5wcmVzc2VkS2V5cy5hKSB7XHJcbiAgICAgIHRoaXMubW92ZSgtMSwgMCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcmVzc2VkS2V5cy5kKSB7XHJcbiAgICAgIHRoaXMubW92ZSgxLCAwKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByZXNzZWRLZXlzLncpIHtcclxuICAgICAgdGhpcy5tb3ZlKDAsIC0xKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByZXNzZWRLZXlzLnMpIHtcclxuICAgICAgdGhpcy5tb3ZlKDAsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVySmV0O1xyXG4iXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiUGxheWVySmV0IiwiY29uc3RydWN0b3IiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0Iiwic3BlZWQiLCJwcmVzc2VkS2V5cyIsInciLCJhIiwicyIsImQiLCJhZGRLZXlkb3duRXZlbnRMaXN0ZW5lciIsImFkZEtleXVwRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5IiwidG9Mb3dlckNhc2UiLCJ1cGRhdGUiLCJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player_jet.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;