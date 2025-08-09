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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(request) {\n    const token = request.cookies.get(\"token\");\n    console.log(token, \"dsfghj\");\n    if (!token) {\n        console.log(\"Redirecting to /auth/login\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/auth/login\", request.url));\n    }\n    console.log(\"Token found, proceeding to next response\");\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\nconst config = {\n    matcher: [\n        \"/cms/list\",\n        \"/cms/update/:slug\",\n        \"/cms/create\",\n        \"/auth/profile\",\n        \"/auth/update\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFHcEMsU0FBU0MsV0FBV0MsT0FBWTtJQUNyQyxNQUFNQyxRQUFRRCxRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUNsQ0MsUUFBUUMsR0FBRyxDQUFDSixPQUFPO0lBQ25CLElBQUksQ0FBQ0EsT0FBTztRQUNWRyxRQUFRQyxHQUFHLENBQUM7UUFDWixPQUFPUCxxREFBWUEsQ0FBQ1EsUUFBUSxDQUFDLElBQUlDLElBQUksZUFBZVAsUUFBUVEsR0FBRztJQUNqRTtJQUVBSixRQUFRQyxHQUFHLENBQUM7SUFFWixPQUFPUCxxREFBWUEsQ0FBQ1csSUFBSTtBQUMxQjtBQUVPLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztRQUFZO1FBQW9CO1FBQWM7UUFBZ0I7S0FBZ0I7QUFDMUYsRUFBRSIsInNvdXJjZXMiOlsiRDpcXENvZGVcXFdlYlNraXR0ZXJzX1JlYWN0X0NsYXNzXFxTVFVEWVxcbmV4dDJcXG1pZGRsZXdhcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBhbnkpIHtcclxuICBjb25zdCB0b2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoXCJ0b2tlblwiKTtcclxuICBjb25zb2xlLmxvZyh0b2tlbiwgXCJkc2ZnaGpcIik7XHJcbiAgaWYgKCF0b2tlbikge1xyXG4gICAgY29uc29sZS5sb2coXCJSZWRpcmVjdGluZyB0byAvYXV0aC9sb2dpblwiKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9hdXRoL2xvZ2luXCIsIHJlcXVlc3QudXJsKSk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhcIlRva2VuIGZvdW5kLCBwcm9jZWVkaW5nIHRvIG5leHQgcmVzcG9uc2VcIik7XHJcblxyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIG1hdGNoZXI6IFtcIi9jbXMvbGlzdFwiLFwiL2Ntcy91cGRhdGUvOnNsdWdcIixcIi9jbXMvY3JlYXRlXCIsXCIvYXV0aC9wcm9maWxlXCIsXCIvYXV0aC91cGRhdGVcIixdLFxyXG59OyJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsInRva2VuIiwiY29va2llcyIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsIm5leHQiLCJjb25maWciLCJtYXRjaGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});