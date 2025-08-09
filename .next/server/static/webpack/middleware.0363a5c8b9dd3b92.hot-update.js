"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(request) {\n    const token = request.cookies.get(\"token\");\n    console.log(token, \"dsfghj\");\n    if (!token) {\n        console.log(\"Redirecting to /auth/login\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/auth/login\", request.url));\n    }\n    console.log(\"Token found, proceeding to next response\");\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\nconst config = {\n    matcher: [\n        \"/cms/list\",\n        \"/cms/update/:slug\",\n        \"/cms/create\",\n        \"/auth/profile\",\n        \"/auth/update\",\n        \"/cms/cart\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFHcEMsU0FBU0MsV0FBV0MsT0FBWTtJQUNyQyxNQUFNQyxRQUFRRCxRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUNsQ0MsUUFBUUMsR0FBRyxDQUFDSixPQUFPO0lBQ25CLElBQUksQ0FBQ0EsT0FBTztRQUNWRyxRQUFRQyxHQUFHLENBQUM7UUFDWixPQUFPUCxxREFBWUEsQ0FBQ1EsUUFBUSxDQUFDLElBQUlDLElBQUksZUFBZVAsUUFBUVEsR0FBRztJQUNqRTtJQUVBSixRQUFRQyxHQUFHLENBQUM7SUFFWixPQUFPUCxxREFBWUEsQ0FBQ1csSUFBSTtBQUMxQjtBQUVPLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztRQUFZO1FBQW9CO1FBQWM7UUFBZ0I7UUFBZTtLQUFZO0FBQ3JHLEVBQUUiLCJzb3VyY2VzIjpbIkQ6XFxDb2RlXFxXZWJTa2l0dGVyc19SZWFjdF9DbGFzc1xcU1RVRFlcXG5leHQyXFxtaWRkbGV3YXJlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogYW55KSB7XHJcbiAgY29uc3QgdG9rZW4gPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KFwidG9rZW5cIik7XHJcbiAgY29uc29sZS5sb2codG9rZW4sIFwiZHNmZ2hqXCIpO1xyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIGNvbnNvbGUubG9nKFwiUmVkaXJlY3RpbmcgdG8gL2F1dGgvbG9naW5cIik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoXCIvYXV0aC9sb2dpblwiLCByZXF1ZXN0LnVybCkpO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coXCJUb2tlbiBmb3VuZCwgcHJvY2VlZGluZyB0byBuZXh0IHJlc3BvbnNlXCIpO1xyXG5cclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBtYXRjaGVyOiBbXCIvY21zL2xpc3RcIixcIi9jbXMvdXBkYXRlLzpzbHVnXCIsXCIvY21zL2NyZWF0ZVwiLFwiL2F1dGgvcHJvZmlsZVwiLFwiL2F1dGgvdXBkYXRlXCIsXCIvY21zL2NhcnRcIl0sXHJcbn07Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwidG9rZW4iLCJjb29raWVzIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwibmV4dCIsImNvbmZpZyIsIm1hdGNoZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});