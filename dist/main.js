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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_PlayerJet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/PlayerJet */ \"./src/scripts/PlayerJet.js\");\n\nconst app = new PIXI.Application({\n  width: 800,\n  height: 600,\n  backgroundColor: 0x1099bb\n});\ndocument.getElementById(\"main\").appendChild(app.view);\nconst playerTexture = PIXI.Texture.from(\"./src/picture/jet.png\");\nconst player = new _scripts_PlayerJet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](app.view.width / 2, app.view.height - 50, playerTexture);\napp.stage.addChild(player.sprite);\nconst keys = {};\ndocument.addEventListener(\"keydown\", e => {\n  keys[e.key] = true;\n});\ndocument.addEventListener(\"keyup\", e => {\n  keys[e.key] = false;\n});\napp.ticker.add(() => {\n  player.handleKeyboard(keys);\n});\n// import PlayerJet from \"./scripts/player_jet\";\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//   const canvas = document.getElementById(\"gameCanvas\");\n//   const ctx = canvas.getContext(\"2d\");\n\n//   const player = new PlayerJet(canvas.width / 2, canvas.height - 50, 50, 50, 5);\n\n//   function gameLoop() {\n//     player.update();\n//     draw();\n//     requestAnimationFrame(gameLoop);\n//   }\n\n//   gameLoop();\n\n//   function draw() {\n//     ctx.clearRect(0, 0, canvas.width, canvas.height);\n//     player.draw(ctx);\n//   }\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBNEM7QUFDNUMsTUFBTUMsR0FBRyxHQUFHLElBQUlDLElBQUksQ0FBQ0MsV0FBVyxDQUFDO0VBQy9CQyxLQUFLLEVBQUUsR0FBRztFQUNWQyxNQUFNLEVBQUUsR0FBRztFQUNYQyxlQUFlLEVBQUU7QUFDbkIsQ0FBQyxDQUFDO0FBRUZDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxXQUFXLENBQUNSLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDO0FBRXJELE1BQU1DLGFBQWEsR0FBR1QsSUFBSSxDQUFDVSxPQUFPLENBQUNDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztBQUVoRSxNQUFNQyxNQUFNLEdBQUcsSUFBSWQsMERBQVMsQ0FDMUJDLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDTixLQUFLLEdBQUcsQ0FBQyxFQUNsQkgsR0FBRyxDQUFDUyxJQUFJLENBQUNMLE1BQU0sR0FBRyxFQUFFLEVBQ3BCTSxhQUNGLENBQUM7QUFFRFYsR0FBRyxDQUFDYyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDRyxNQUFNLENBQUM7QUFFakMsTUFBTUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNmWCxRQUFRLENBQUNZLGdCQUFnQixDQUFDLFNBQVMsRUFBR0MsQ0FBQyxJQUFLO0VBQzFDRixJQUFJLENBQUNFLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLEdBQUcsSUFBSTtBQUNwQixDQUFDLENBQUM7QUFDRmQsUUFBUSxDQUFDWSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztFQUN4Q0YsSUFBSSxDQUFDRSxDQUFDLENBQUNDLEdBQUcsQ0FBQyxHQUFHLEtBQUs7QUFDckIsQ0FBQyxDQUFDO0FBRUZwQixHQUFHLENBQUNxQixNQUFNLENBQUNDLEdBQUcsQ0FBQyxNQUFNO0VBQ25CVCxNQUFNLENBQUNVLGNBQWMsQ0FBQ04sSUFBSSxDQUFDO0FBQzdCLENBQUMsQ0FBQztBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVySmV0IGZyb20gXCIuL3NjcmlwdHMvUGxheWVySmV0XCI7XHJcbmNvbnN0IGFwcCA9IG5ldyBQSVhJLkFwcGxpY2F0aW9uKHtcclxuICB3aWR0aDogODAwLFxyXG4gIGhlaWdodDogNjAwLFxyXG4gIGJhY2tncm91bmRDb2xvcjogMHgxMDk5YmIsXHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmFwcGVuZENoaWxkKGFwcC52aWV3KTtcclxuXHJcbmNvbnN0IHBsYXllclRleHR1cmUgPSBQSVhJLlRleHR1cmUuZnJvbShcIi4vc3JjL3BpY3R1cmUvamV0LnBuZ1wiKTtcclxuXHJcbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXJKZXQoXHJcbiAgYXBwLnZpZXcud2lkdGggLyAyLFxyXG4gIGFwcC52aWV3LmhlaWdodCAtIDUwLFxyXG4gIHBsYXllclRleHR1cmVcclxuKTtcclxuXHJcbmFwcC5zdGFnZS5hZGRDaGlsZChwbGF5ZXIuc3ByaXRlKTtcclxuXHJcbmNvbnN0IGtleXMgPSB7fTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICBrZXlzW2Uua2V5XSA9IHRydWU7XHJcbn0pO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcclxuICBrZXlzW2Uua2V5XSA9IGZhbHNlO1xyXG59KTtcclxuXHJcbmFwcC50aWNrZXIuYWRkKCgpID0+IHtcclxuICBwbGF5ZXIuaGFuZGxlS2V5Ym9hcmQoa2V5cyk7XHJcbn0pO1xyXG4vLyBpbXBvcnQgUGxheWVySmV0IGZyb20gXCIuL3NjcmlwdHMvcGxheWVyX2pldFwiO1xyXG5cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4vLyAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZUNhbnZhc1wiKTtcclxuLy8gICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuLy8gICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVySmV0KGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLSA1MCwgNTAsIDUwLCA1KTtcclxuXHJcbi8vICAgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XHJcbi8vICAgICBwbGF5ZXIudXBkYXRlKCk7XHJcbi8vICAgICBkcmF3KCk7XHJcbi8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgZ2FtZUxvb3AoKTtcclxuXHJcbi8vICAgZnVuY3Rpb24gZHJhdygpIHtcclxuLy8gICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuLy8gICAgIHBsYXllci5kcmF3KGN0eCk7XHJcbi8vICAgfVxyXG4vLyB9KTtcclxuIl0sIm5hbWVzIjpbIlBsYXllckpldCIsImFwcCIsIlBJWEkiLCJBcHBsaWNhdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwidmlldyIsInBsYXllclRleHR1cmUiLCJUZXh0dXJlIiwiZnJvbSIsInBsYXllciIsInN0YWdlIiwiYWRkQ2hpbGQiLCJzcHJpdGUiLCJrZXlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiLCJ0aWNrZXIiLCJhZGQiLCJoYW5kbGVLZXlib2FyZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/MovingObject.js":
/*!*************************************!*\
  !*** ./src/scripts/MovingObject.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass MovingObject {\n  constructor(x, y, texture) {\n    this.sprite = new PIXI.Sprite(texture);\n    this.sprite.anchor.set(0.5);\n    this.sprite.x = x;\n    this.sprite.y = y;\n  }\n  setPosition(x, y) {\n    this.sprite.x = x;\n    this.sprite.y = y;\n  }\n  move(dx, dy) {\n    this.sprite.x += dx;\n    this.sprite.y += dy;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9Nb3ZpbmdPYmplY3QuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFlBQVksQ0FBQztFQUNqQkMsV0FBV0EsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLE9BQU8sRUFBRTtJQUN6QixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJQyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDO0lBQ3RDLElBQUksQ0FBQ0MsTUFBTSxDQUFDRyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFDM0IsSUFBSSxDQUFDSixNQUFNLENBQUNILENBQUMsR0FBR0EsQ0FBQztJQUNqQixJQUFJLENBQUNHLE1BQU0sQ0FBQ0YsQ0FBQyxHQUFHQSxDQUFDO0VBQ25CO0VBRUFPLFdBQVdBLENBQUNSLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQ2hCLElBQUksQ0FBQ0UsTUFBTSxDQUFDSCxDQUFDLEdBQUdBLENBQUM7SUFDakIsSUFBSSxDQUFDRyxNQUFNLENBQUNGLENBQUMsR0FBR0EsQ0FBQztFQUNuQjtFQUVBUSxJQUFJQSxDQUFDQyxFQUFFLEVBQUVDLEVBQUUsRUFBRTtJQUNYLElBQUksQ0FBQ1IsTUFBTSxDQUFDSCxDQUFDLElBQUlVLEVBQUU7SUFDbkIsSUFBSSxDQUFDUCxNQUFNLENBQUNGLENBQUMsSUFBSVUsRUFBRTtFQUNyQjtBQUNGO0FBRUEsK0RBQWViLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvc2NyaXB0cy9Nb3ZpbmdPYmplY3QuanM/ZTZlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb3ZpbmdPYmplY3Qge1xyXG4gIGNvbnN0cnVjdG9yKHgsIHksIHRleHR1cmUpIHtcclxuICAgIHRoaXMuc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHRleHR1cmUpO1xyXG4gICAgdGhpcy5zcHJpdGUuYW5jaG9yLnNldCgwLjUpO1xyXG4gICAgdGhpcy5zcHJpdGUueCA9IHg7XHJcbiAgICB0aGlzLnNwcml0ZS55ID0geTtcclxuICB9XHJcblxyXG4gIHNldFBvc2l0aW9uKHgsIHkpIHtcclxuICAgIHRoaXMuc3ByaXRlLnggPSB4O1xyXG4gICAgdGhpcy5zcHJpdGUueSA9IHk7XHJcbiAgfVxyXG5cclxuICBtb3ZlKGR4LCBkeSkge1xyXG4gICAgdGhpcy5zcHJpdGUueCArPSBkeDtcclxuICAgIHRoaXMuc3ByaXRlLnkgKz0gZHk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpbmdPYmplY3Q7XHJcbiJdLCJuYW1lcyI6WyJNb3ZpbmdPYmplY3QiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwidGV4dHVyZSIsInNwcml0ZSIsIlBJWEkiLCJTcHJpdGUiLCJhbmNob3IiLCJzZXQiLCJzZXRQb3NpdGlvbiIsIm1vdmUiLCJkeCIsImR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/MovingObject.js\n");

/***/ }),

/***/ "./src/scripts/PlayerJet.js":
/*!**********************************!*\
  !*** ./src/scripts/PlayerJet.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ \"./src/scripts/MovingObject.js\");\n\nclass PlayerJet extends _MovingObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x, y, texture) {\n    super(x, y, texture);\n    this.speed = 5;\n  }\n  handleKeyboard(keys) {\n    if (keys[\"w\"] || keys[\"W\"]) {\n      this.move(0, -this.speed);\n    }\n    if (keys[\"s\"] || keys[\"S\"]) {\n      this.move(0, this.speed);\n    }\n    if (keys[\"a\"] || keys[\"A\"]) {\n      this.move(-this.speed, 0);\n    }\n    if (keys[\"d\"] || keys[\"D\"]) {\n      this.move(this.speed, 0);\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerJet);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9QbGF5ZXJKZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEM7QUFFMUMsTUFBTUMsU0FBUyxTQUFTRCxxREFBWSxDQUFDO0VBQ25DRSxXQUFXQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsT0FBTyxFQUFFO0lBQ3pCLEtBQUssQ0FBQ0YsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLE9BQU8sQ0FBQztJQUNwQixJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO0VBQ2hCO0VBRUFDLGNBQWNBLENBQUNDLElBQUksRUFBRTtJQUNuQixJQUFJQSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUlBLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtNQUMxQixJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUNILEtBQUssQ0FBQztJQUMzQjtJQUNBLElBQUlFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO01BQzFCLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNILEtBQUssQ0FBQztJQUMxQjtJQUNBLElBQUlFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO01BQzFCLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDSCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzNCO0lBQ0EsSUFBSUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJQSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7TUFDMUIsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDSCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzFCO0VBQ0Y7QUFDRjtBQUVBLCtEQUFlTCxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNwcm9qZWN0Ly4vc3JjL3NjcmlwdHMvUGxheWVySmV0LmpzPzc4ODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9Nb3ZpbmdPYmplY3RcIjtcclxuXHJcbmNsYXNzIFBsYXllckpldCBleHRlbmRzIE1vdmluZ09iamVjdCB7XHJcbiAgY29uc3RydWN0b3IoeCwgeSwgdGV4dHVyZSkge1xyXG4gICAgc3VwZXIoeCwgeSwgdGV4dHVyZSk7XHJcbiAgICB0aGlzLnNwZWVkID0gNTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUtleWJvYXJkKGtleXMpIHtcclxuICAgIGlmIChrZXlzW1wid1wiXSB8fCBrZXlzW1wiV1wiXSkge1xyXG4gICAgICB0aGlzLm1vdmUoMCwgLXRoaXMuc3BlZWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGtleXNbXCJzXCJdIHx8IGtleXNbXCJTXCJdKSB7XHJcbiAgICAgIHRoaXMubW92ZSgwLCB0aGlzLnNwZWVkKTtcclxuICAgIH1cclxuICAgIGlmIChrZXlzW1wiYVwiXSB8fCBrZXlzW1wiQVwiXSkge1xyXG4gICAgICB0aGlzLm1vdmUoLXRoaXMuc3BlZWQsIDApO1xyXG4gICAgfVxyXG4gICAgaWYgKGtleXNbXCJkXCJdIHx8IGtleXNbXCJEXCJdKSB7XHJcbiAgICAgIHRoaXMubW92ZSh0aGlzLnNwZWVkLCAwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllckpldDtcclxuIl0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsIlBsYXllckpldCIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJ0ZXh0dXJlIiwic3BlZWQiLCJoYW5kbGVLZXlib2FyZCIsImtleXMiLCJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/PlayerJet.js\n");

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