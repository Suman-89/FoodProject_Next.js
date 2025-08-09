"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "/_error";
exports.ids = ["/_error"];
exports.modules = {

/***/ "./context/cartContext.tsx":
/*!*********************************!*\
  !*** ./context/cartContext.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst STORAGE_KEY = \"my-app-cart\";\nconst CartProvider = ({ children })=>{\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CartProvider.useEffect\": ()=>{\n            const stored = localStorage.getItem(STORAGE_KEY);\n            if (stored) {\n                try {\n                    const parsed = JSON.parse(stored);\n                    if (Array.isArray(parsed)) {\n                        setCartItems(parsed);\n                    }\n                } catch (err) {\n                    console.error(\"Failed to parse cart data from localStorage\", err);\n                }\n            }\n        }\n    }[\"CartProvider.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CartProvider.useEffect\": ()=>{\n            localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));\n        }\n    }[\"CartProvider.useEffect\"], [\n        cartItems\n    ]);\n    const addToCart = (item)=>{\n        setCartItems((prev)=>{\n            const existing = prev.find((p)=>p.id === item.id);\n            if (existing) {\n                return prev.map((p)=>p.id === item.id ? {\n                        ...p,\n                        quantity: p.quantity + item.quantity\n                    } : p);\n            }\n            return [\n                ...prev,\n                item\n            ];\n        });\n    };\n    const removeFromCart = (id)=>{\n        setCartItems((prev)=>prev.filter((item)=>item.id !== id));\n    };\n    const clearCart = ()=>{\n        setCartItems([]);\n    };\n    const increaseQuantity = (id)=>{\n        setCartItems((prev)=>prev.map((item)=>item.id === id ? {\n                    ...item,\n                    quantity: item.quantity + 1\n                } : item));\n    };\n    const decreaseQuantity = (id)=>{\n        setCartItems((prev)=>prev.map((item)=>item.id === id && item.quantity > 1 ? {\n                    ...item,\n                    quantity: item.quantity - 1\n                } : item));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cartItems,\n            addToCart,\n            removeFromCart,\n            clearCart,\n            increaseQuantity,\n            decreaseQuantity\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\context\\\\cartContext.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined);\n};\nconst useCart = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    if (!context) {\n        throw new Error(\"useCart must be used within a CartProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2NhcnRDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTWU7QUFtQmYsTUFBTUssNEJBQWNKLG9EQUFhQSxDQUE4Qks7QUFFL0QsTUFBTUMsY0FBYztBQUViLE1BQU1DLGVBQWUsQ0FBQyxFQUFFQyxRQUFRLEVBQTJCO0lBQ2hFLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBYSxFQUFFO0lBRXpEQyxnREFBU0E7a0NBQUM7WUFDUixNQUFNUSxTQUFTQyxhQUFhQyxPQUFPLENBQUNQO1lBQ3BDLElBQUlLLFFBQVE7Z0JBQ1YsSUFBSTtvQkFDRixNQUFNRyxTQUFTQyxLQUFLQyxLQUFLLENBQUNMO29CQUMxQixJQUFJTSxNQUFNQyxPQUFPLENBQUNKLFNBQVM7d0JBQ3pCSixhQUFhSTtvQkFDZjtnQkFDRixFQUFFLE9BQU9LLEtBQUs7b0JBQ1pDLFFBQVFDLEtBQUssQ0FBQywrQ0FBK0NGO2dCQUMvRDtZQUNGO1FBQ0Y7aUNBQUcsRUFBRTtJQUVMaEIsZ0RBQVNBO2tDQUFDO1lBQ1JTLGFBQWFVLE9BQU8sQ0FBQ2hCLGFBQWFTLEtBQUtRLFNBQVMsQ0FBQ2Q7UUFDbkQ7aUNBQUc7UUFBQ0E7S0FBVTtJQUVkLE1BQU1lLFlBQVksQ0FBQ0M7UUFDakJmLGFBQWEsQ0FBQ2dCO1lBQ1osTUFBTUMsV0FBV0QsS0FBS0UsSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVDLEVBQUUsS0FBS0wsS0FBS0ssRUFBRTtZQUNsRCxJQUFJSCxVQUFVO2dCQUNaLE9BQU9ELEtBQUtLLEdBQUcsQ0FBQyxDQUFDRixJQUNmQSxFQUFFQyxFQUFFLEtBQUtMLEtBQUtLLEVBQUUsR0FBRzt3QkFBRSxHQUFHRCxDQUFDO3dCQUFFRyxVQUFVSCxFQUFFRyxRQUFRLEdBQUdQLEtBQUtPLFFBQVE7b0JBQUMsSUFBSUg7WUFFeEU7WUFDQSxPQUFPO21CQUFJSDtnQkFBTUQ7YUFBSztRQUN4QjtJQUNGO0lBRUEsTUFBTVEsaUJBQWlCLENBQUNIO1FBQ3RCcEIsYUFBYSxDQUFDZ0IsT0FBU0EsS0FBS1EsTUFBTSxDQUFDLENBQUNULE9BQVNBLEtBQUtLLEVBQUUsS0FBS0E7SUFDM0Q7SUFFQSxNQUFNSyxZQUFZO1FBQ2hCekIsYUFBYSxFQUFFO0lBQ2pCO0lBQ0EsTUFBTTBCLG1CQUFtQixDQUFDTjtRQUN4QnBCLGFBQWEsQ0FBQ2dCLE9BQ1pBLEtBQUtLLEdBQUcsQ0FBQyxDQUFDTixPQUNSQSxLQUFLSyxFQUFFLEtBQUtBLEtBQUs7b0JBQUUsR0FBR0wsSUFBSTtvQkFBRU8sVUFBVVAsS0FBS08sUUFBUSxHQUFHO2dCQUFFLElBQUlQO0lBR2xFO0lBRUEsTUFBTVksbUJBQW1CLENBQUNQO1FBQ3hCcEIsYUFBYSxDQUFDZ0IsT0FDWkEsS0FBS0ssR0FBRyxDQUFDLENBQUNOLE9BQ1JBLEtBQUtLLEVBQUUsS0FBS0EsTUFBTUwsS0FBS08sUUFBUSxHQUFHLElBQzlCO29CQUFFLEdBQUdQLElBQUk7b0JBQUVPLFVBQVVQLEtBQUtPLFFBQVEsR0FBRztnQkFBRSxJQUN2Q1A7SUFHVjtJQUVBLHFCQUNFLDhEQUFDckIsWUFBWWtDLFFBQVE7UUFDbkJDLE9BQU87WUFDTDlCO1lBQ0FlO1lBQ0FTO1lBQ0FFO1lBQ0FDO1lBQ0FDO1FBQ0Y7a0JBRUM3Qjs7Ozs7O0FBR1AsRUFBRTtBQUVLLE1BQU1nQyxVQUFVO0lBQ3JCLE1BQU1DLFVBQVV4QyxpREFBVUEsQ0FBQ0c7SUFDM0IsSUFBSSxDQUFDcUMsU0FBUztRQUNaLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE9BQU9EO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsiRDpcXENvZGVcXFdlYlNraXR0ZXJzX1JlYWN0X0NsYXNzXFxTVFVEWVxcbmV4dDJcXGNvbnRleHRcXGNhcnRDb250ZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcclxuICBjcmVhdGVDb250ZXh0LFxyXG4gIHVzZUNvbnRleHQsXHJcbiAgdXNlU3RhdGUsXHJcbiAgdXNlRWZmZWN0LFxyXG4gIFJlYWN0Tm9kZSxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FydEl0ZW0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHByaWNlOiBudW1iZXI7XHJcbiAgcXVhbnRpdHk6IG51bWJlcjtcclxuICBpbWFnZT86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIENhcnRDb250ZXh0VHlwZSB7XHJcbiAgY2FydEl0ZW1zOiBDYXJ0SXRlbVtdO1xyXG4gIGFkZFRvQ2FydDogKGl0ZW06IENhcnRJdGVtKSA9PiB2b2lkO1xyXG4gIHJlbW92ZUZyb21DYXJ0OiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcclxuICBpbmNyZWFzZVF1YW50aXR5OiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcclxuICBkZWNyZWFzZVF1YW50aXR5OiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcclxuICBjbGVhckNhcnQ6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxDYXJ0Q29udGV4dFR5cGUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcblxyXG5jb25zdCBTVE9SQUdFX0tFWSA9IFwibXktYXBwLWNhcnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZTxDYXJ0SXRlbVtdPihbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0tFWSk7XHJcbiAgICBpZiAoc3RvcmVkKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShzdG9yZWQpO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcnNlZCkpIHtcclxuICAgICAgICAgIHNldENhcnRJdGVtcyhwYXJzZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBwYXJzZSBjYXJ0IGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2VcIiwgZXJyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpKTtcclxuICB9LCBbY2FydEl0ZW1zXSk7XHJcblxyXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChpdGVtOiBDYXJ0SXRlbSkgPT4ge1xyXG4gICAgc2V0Q2FydEl0ZW1zKChwcmV2KSA9PiB7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gcHJldi5maW5kKChwKSA9PiBwLmlkID09PSBpdGVtLmlkKTtcclxuICAgICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXYubWFwKChwKSA9PlxyXG4gICAgICAgICAgcC5pZCA9PT0gaXRlbS5pZCA/IHsgLi4ucCwgcXVhbnRpdHk6IHAucXVhbnRpdHkgKyBpdGVtLnF1YW50aXR5IH0gOiBwXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gWy4uLnByZXYsIGl0ZW1dO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0Q2FydEl0ZW1zKChwcmV2KSA9PiBwcmV2LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbGVhckNhcnQgPSAoKSA9PiB7XHJcbiAgICBzZXRDYXJ0SXRlbXMoW10pO1xyXG4gIH07XHJcbiAgY29uc3QgaW5jcmVhc2VRdWFudGl0eSA9IChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRDYXJ0SXRlbXMoKHByZXYpID0+XHJcbiAgICAgIHByZXYubWFwKChpdGVtKSA9PlxyXG4gICAgICAgIGl0ZW0uaWQgPT09IGlkID8geyAuLi5pdGVtLCBxdWFudGl0eTogaXRlbS5xdWFudGl0eSArIDEgfSA6IGl0ZW1cclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWNyZWFzZVF1YW50aXR5ID0gKGlkOiBudW1iZXIpID0+IHtcclxuICAgIHNldENhcnRJdGVtcygocHJldikgPT5cclxuICAgICAgcHJldi5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgaXRlbS5pZCA9PT0gaWQgJiYgaXRlbS5xdWFudGl0eSA+IDFcclxuICAgICAgICAgID8geyAuLi5pdGVtLCBxdWFudGl0eTogaXRlbS5xdWFudGl0eSAtIDEgfVxyXG4gICAgICAgICAgOiBpdGVtXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGNhcnRJdGVtcyxcclxuICAgICAgICBhZGRUb0NhcnQsXHJcbiAgICAgICAgcmVtb3ZlRnJvbUNhcnQsXHJcbiAgICAgICAgY2xlYXJDYXJ0LFxyXG4gICAgICAgIGluY3JlYXNlUXVhbnRpdHksXHJcbiAgICAgICAgZGVjcmVhc2VRdWFudGl0eSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNhcnQgPSAoKTogQ2FydENvbnRleHRUeXBlID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcbiAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VDYXJ0IG11c3QgYmUgdXNlZCB3aXRoaW4gYSBDYXJ0UHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FydENvbnRleHQiLCJ1bmRlZmluZWQiLCJTVE9SQUdFX0tFWSIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwic3RvcmVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlZCIsIkpTT04iLCJwYXJzZSIsIkFycmF5IiwiaXNBcnJheSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhZGRUb0NhcnQiLCJpdGVtIiwicHJldiIsImV4aXN0aW5nIiwiZmluZCIsInAiLCJpZCIsIm1hcCIsInF1YW50aXR5IiwicmVtb3ZlRnJvbUNhcnQiLCJmaWx0ZXIiLCJjbGVhckNhcnQiLCJpbmNyZWFzZVF1YW50aXR5IiwiZGVjcmVhc2VRdWFudGl0eSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDYXJ0IiwiY29udGV4dCIsIkVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/cartContext.tsx\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./pages/_document.tsx\");\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./pages/_app.tsx\");\n/* harmony import */ var _node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules\\next\\dist\\pages\\_error.js */ \"./node_modules/next/dist/pages/_error.js\");\n/* harmony import */ var _node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__]);\nprivate_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/_error\",\n        pathname: \"/_error\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    userland: _node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGX2Vycm9yJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGbm9kZV9tb2R1bGVzJTVDbmV4dCU1Q2Rpc3QlNUNwYWdlcyU1Q19lcnJvci5qcyZhYnNvbHV0ZUFwcFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2FwcCZhYnNvbHV0ZURvY3VtZW50UGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZG9jdW1lbnQmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdGO0FBQ2hDO0FBQ0U7QUFDMUQ7QUFDeUQ7QUFDVjtBQUMvQztBQUN5RTtBQUN6RTtBQUNBLGlFQUFlLHdFQUFLLENBQUMsbUVBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sdUJBQXVCLHdFQUFLLENBQUMsbUVBQVE7QUFDckMsdUJBQXVCLHdFQUFLLENBQUMsbUVBQVE7QUFDckMsMkJBQTJCLHdFQUFLLENBQUMsbUVBQVE7QUFDekMsZUFBZSx3RUFBSyxDQUFDLG1FQUFRO0FBQzdCLHdCQUF3Qix3RUFBSyxDQUFDLG1FQUFRO0FBQzdDO0FBQ08sZ0NBQWdDLHdFQUFLLENBQUMsbUVBQVE7QUFDOUMsZ0NBQWdDLHdFQUFLLENBQUMsbUVBQVE7QUFDOUMsaUNBQWlDLHdFQUFLLENBQUMsbUVBQVE7QUFDL0MsZ0NBQWdDLHdFQUFLLENBQUMsbUVBQVE7QUFDOUMsb0NBQW9DLHdFQUFLLENBQUMsbUVBQVE7QUFDekQ7QUFDTyx3QkFBd0Isa0dBQWdCO0FBQy9DO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDhEQUFXO0FBQ3hCLGtCQUFrQixtRUFBZ0I7QUFDbEMsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVELGlDIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgYXBwIGFuZCBkb2N1bWVudCBtb2R1bGVzLlxuaW1wb3J0ICogYXMgZG9jdW1lbnQgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fZG9jdW1lbnRcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHBcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL25vZGVfbW9kdWxlc1xcXFxuZXh0XFxcXGRpc3RcXFxccGFnZXNcXFxcX2Vycm9yLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGNvbXBvbmVudCAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgJ2RlZmF1bHQnKTtcbi8vIFJlLWV4cG9ydCBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsICdnZXRTdGF0aWNQcm9wcycpO1xuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gaG9pc3QodXNlcmxhbmQsICdnZXRTdGF0aWNQYXRocycpO1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U2VydmVyU2lkZVByb3BzJyk7XG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsICdjb25maWcnKTtcbmV4cG9ydCBjb25zdCByZXBvcnRXZWJWaXRhbHMgPSBob2lzdCh1c2VybGFuZCwgJ3JlcG9ydFdlYlZpdGFscycpO1xuLy8gUmUtZXhwb3J0IGxlZ2FjeSBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1BhdGhzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTdGF0aWNQYXRocycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1BhcmFtcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUGFyYW1zJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFNlcnZlclByb3BzJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHMnKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTLFxuICAgICAgICBwYWdlOiBcIi9fZXJyb3JcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL19lcnJvclwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6ICcnLFxuICAgICAgICBmaWxlbmFtZTogJydcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgLy8gZGVmYXVsdCBleHBvcnQgbWlnaHQgbm90IGV4aXN0IHdoZW4gb3B0aW1pemVkIGZvciBkYXRhIG9ubHlcbiAgICAgICAgQXBwOiBhcHAuZGVmYXVsdCxcbiAgICAgICAgRG9jdW1lbnQ6IGRvY3VtZW50LmRlZmF1bHRcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ \"react-cookie\");\n/* harmony import */ var _layout_wrapper_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/wrapper/wrapper */ \"./pages/layout/wrapper/wrapper.tsx\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/esm/styles/index.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ \"./theme/index.ts\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/esm/CssBaseline/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _context_cartContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/cartContext */ \"./context/cartContext.tsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, react_cookie__WEBPACK_IMPORTED_MODULE_2__, _layout_wrapper_wrapper__WEBPACK_IMPORTED_MODULE_3__, _theme__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_8__, _mui_material_styles__WEBPACK_IMPORTED_MODULE_10__, _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_11__]);\n([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, react_cookie__WEBPACK_IMPORTED_MODULE_2__, _layout_wrapper_wrapper__WEBPACK_IMPORTED_MODULE_3__, _theme__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_8__, _mui_material_styles__WEBPACK_IMPORTED_MODULE_10__, _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// import \"@/styles/globals.css\";\n\n\n\n\n\n\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {\n            client: queryClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_cookie__WEBPACK_IMPORTED_MODULE_2__.CookiesProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__.ThemeProvider, {\n                    theme: _theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_cartContext__WEBPACK_IMPORTED_MODULE_7__.CartProvider, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_wrapper_wrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\_app.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                    ...pageProps\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\_app.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_8__.ToastContainer, {\n                                    position: \"top-right\",\n                                    autoClose: 2000,\n                                    hideProgressBar: true,\n                                    newestOnTop: true,\n                                    closeOnClick: true,\n                                    pauseOnFocusLoss: true,\n                                    draggable: true,\n                                    pauseOnHover: true,\n                                    theme: \"colored\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\_app.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\_app.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\_app.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\_app.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\_app.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\_app.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFpQzs7QUFFd0M7QUFDMUI7QUFDQTtBQUNNO0FBQ3hCO0FBQ3VCO0FBQ1o7QUFDTTtBQUNRO0FBQ047QUFDRDtBQUVoQyxTQUFTUyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELE1BQU1DLGNBQWMsSUFBSVosOERBQVdBO0lBQ25DLHFCQUNFO2tCQUNFLDRFQUFDQyxzRUFBbUJBO1lBQUNZLFFBQVFEO3NCQUMzQiw0RUFBQ1YseURBQWVBOzBCQUNkLDRFQUFDRSxnRUFBYUE7b0JBQUNDLE9BQU9BLDhDQUFLQTs4QkFDekIsNEVBQUNFLDhEQUFZQTtrQ0FDWCw0RUFBQ0osK0RBQU9BOzs4Q0FDTiw4REFBQ0csa0VBQVdBOzs7Ozs4Q0FDWiw4REFBQ0k7b0NBQVcsR0FBR0MsU0FBUzs7Ozs7OzhDQUN4Qiw4REFBQ0gsMERBQWNBO29DQUNiTSxVQUFTO29DQUNUQyxXQUFXO29DQUNYQyxlQUFlO29DQUNmQyxXQUFXO29DQUNYQyxZQUFZO29DQUNaQyxnQkFBZ0I7b0NBQ2hCQyxTQUFTO29DQUNUQyxZQUFZO29DQUNaaEIsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3hCIiwic291cmNlcyI6WyJEOlxcQ29kZVxcV2ViU2tpdHRlcnNfUmVhY3RfQ2xhc3NcXFNUVURZXFxuZXh0MlxccGFnZXNcXF9hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IENvb2tpZXNQcm92aWRlciB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcbmltcG9ydCBXcmFwcGVyIGZyb20gXCIuL2xheW91dC93cmFwcGVyL3dyYXBwZXJcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vdGhlbWVcIjtcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZVwiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcbmltcG9ydCB7IENhcnRQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L2NhcnRDb250ZXh0XCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgICAgPENvb2tpZXNQcm92aWRlcj5cbiAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgPENhcnRQcm92aWRlcj5cbiAgICAgICAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJ0b3AtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlPXsyMDAwfVxuICAgICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyXG4gICAgICAgICAgICAgICAgICBuZXdlc3RPblRvcFxuICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrXG4gICAgICAgICAgICAgICAgICBwYXVzZU9uRm9jdXNMb3NzXG4gICAgICAgICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlclxuICAgICAgICAgICAgICAgICAgdGhlbWU9XCJjb2xvcmVkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgICAgICA8L0NhcnRQcm92aWRlcj5cbiAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgIDwvQ29va2llc1Byb3ZpZGVyPlxuICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIkNvb2tpZXNQcm92aWRlciIsIldyYXBwZXIiLCJUaGVtZVByb3ZpZGVyIiwidGhlbWUiLCJDc3NCYXNlbGluZSIsIkNhcnRQcm92aWRlciIsIlRvYXN0Q29udGFpbmVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicXVlcnlDbGllbnQiLCJjbGllbnQiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsIm5ld2VzdE9uVG9wIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkZvY3VzTG9zcyIsImRyYWdnYWJsZSIsInBhdXNlT25Ib3ZlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Document() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\_document.tsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                        fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\_document.tsx\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                        fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\_document.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\_document.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\_document.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2RDtBQUU5QyxTQUFTSTtJQUN0QixxQkFDRSw4REFBQ0osK0NBQUlBO1FBQUNLLE1BQUs7OzBCQUNULDhEQUFDSiwrQ0FBSUE7Ozs7OzBCQUNMLDhEQUFDSzs7a0NBQ0MsOERBQUNKLCtDQUFJQTs7Ozs7a0NBQ0wsOERBQUNDLHFEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkIiLCJzb3VyY2VzIjpbIkQ6XFxDb2RlXFxXZWJTa2l0dGVyc19SZWFjdF9DbGFzc1xcU1RVRFlcXG5leHQyXFxwYWdlc1xcX2RvY3VtZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jdW1lbnQoKSB7XG4gIHJldHVybiAoXG4gICAgPEh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8SGVhZCAvPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxNYWluIC8+XG4gICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9IdG1sPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJEb2N1bWVudCIsImxhbmciLCJib2R5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_document.tsx\n");

/***/ }),

/***/ "./pages/layout/footer/index.tsx":
/*!***************************************!*\
  !*** ./pages/layout/footer/index.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Container,Divider,Grid,IconButton,Link,Stack,Typography!=!@mui/material */ \"__barrel_optimize__?names=Box,Container,Divider,Grid,IconButton,Link,Stack,Typography!=!./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Facebook */ \"./node_modules/@mui/icons-material/esm/Facebook.js\");\n/* harmony import */ var _mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Twitter */ \"./node_modules/@mui/icons-material/esm/Twitter.js\");\n/* harmony import */ var _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/LinkedIn */ \"./node_modules/@mui/icons-material/esm/LinkedIn.js\");\n/* harmony import */ var _mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Instagram */ \"./node_modules/@mui/icons-material/esm/Instagram.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__, _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_3__, _mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_4__, _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_5__, _mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_6__]);\n([_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__, _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_3__, _mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_4__, _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_5__, _mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nfunction Footer() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        component: \"footer\",\n        sx: {\n            mt: 8,\n            pt: 6,\n            pb: 3,\n            backgroundColor: \"#68aa10\",\n            borderTop: \"1px solid #e0e0e0\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {\n            maxWidth: \"lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                    container: true,\n                    spacing: 4,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            sm: 6,\n                            md: 3,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                    variant: \"h6\",\n                                    fontWeight: 600,\n                                    gutterBottom: true,\n                                    children: \"YourCompany\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                    variant: \"body2\",\n                                    color: \"text.secondary\",\n                                    children: \"Building modern solutions with a focus on performance and design.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            sm: 6,\n                            md: 3,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                    variant: \"h6\",\n                                    fontWeight: 600,\n                                    gutterBottom: true,\n                                    children: \"Quick Links\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                                    spacing: 1,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                            href: \"/about\",\n                                            underline: \"hover\",\n                                            color: \"inherit\",\n                                            children: \"About Us\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                            href: \"/contact\",\n                                            underline: \"hover\",\n                                            color: \"inherit\",\n                                            children: \"Contact\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                            href: \"/faq\",\n                                            underline: \"hover\",\n                                            color: \"inherit\",\n                                            children: \"FAQ\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                            href: \"/privacy\",\n                                            underline: \"hover\",\n                                            color: \"inherit\",\n                                            children: \"Privacy Policy\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            sm: 6,\n                            md: 3,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                    variant: \"h6\",\n                                    fontWeight: 600,\n                                    gutterBottom: true,\n                                    children: \"Resources\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                                    spacing: 1,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                            href: \"/blog\",\n                                            underline: \"hover\",\n                                            color: \"inherit\",\n                                            children: \"Blog\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                            href: \"/support\",\n                                            underline: \"hover\",\n                                            color: \"inherit\",\n                                            children: \"Support\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                            href: \"/docs\",\n                                            underline: \"hover\",\n                                            color: \"inherit\",\n                                            children: \"Documentation\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            sm: 6,\n                            md: 3,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                    variant: \"h6\",\n                                    fontWeight: 600,\n                                    gutterBottom: true,\n                                    children: \"Connect with us\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                                    direction: \"row\",\n                                    spacing: 1,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n                                            color: \"inherit\",\n                                            href: \"#\",\n                                            \"aria-label\": \"Facebook\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                                fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n                                            color: \"inherit\",\n                                            href: \"#\",\n                                            \"aria-label\": \"Twitter\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                                fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n                                            color: \"inherit\",\n                                            href: \"#\",\n                                            \"aria-label\": \"LinkedIn\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                                fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n                                            color: \"inherit\",\n                                            href: \"#\",\n                                            \"aria-label\": \"Instagram\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                                fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {\n                    sx: {\n                        my: 4\n                    }\n                }, void 0, false, {\n                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    textAlign: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_Grid_IconButton_Link_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        variant: \"body2\",\n                        color: \"text.secondary\",\n                        children: [\n                            \"\\xa9 \",\n                            new Date().getFullYear(),\n                            \" YourCompany. All rights reserved.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\footer\\\\index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYXlvdXQvZm9vdGVyL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQVVIO0FBQ2lDO0FBQ0Y7QUFDRTtBQUNFO0FBRTNDLFNBQVNhO0lBQ3RCLHFCQUNFLDhEQUFDWixnSUFBR0E7UUFDRmEsV0FBVTtRQUNWQyxJQUFJO1lBQ0ZDLElBQUk7WUFDSkMsSUFBSTtZQUNKQyxJQUFJO1lBQ0pDLGlCQUFpQjtZQUNqQkMsV0FBVztRQUNiO2tCQUVBLDRFQUFDbEIsc0lBQVNBO1lBQUNtQixVQUFTOzs4QkFDbEIsOERBQUNsQixpSUFBSUE7b0JBQUNtQixTQUFTO29CQUFDQyxTQUFTOztzQ0FFdkIsOERBQUNwQixpSUFBSUE7NEJBQUNxQixJQUFJOzRCQUFDQyxJQUFJOzRCQUFJQyxJQUFJOzRCQUFHQyxJQUFJOzs4Q0FDNUIsOERBQUN2Qix1SUFBVUE7b0NBQUN3QixTQUFRO29DQUFLQyxZQUFZO29DQUFLQyxZQUFZOzhDQUFDOzs7Ozs7OENBR3ZELDhEQUFDMUIsdUlBQVVBO29DQUFDd0IsU0FBUTtvQ0FBUUcsT0FBTTs4Q0FBaUI7Ozs7Ozs7Ozs7OztzQ0FNckQsOERBQUM1QixpSUFBSUE7NEJBQUNxQixJQUFJOzRCQUFDQyxJQUFJOzRCQUFJQyxJQUFJOzRCQUFHQyxJQUFJOzs4Q0FDNUIsOERBQUN2Qix1SUFBVUE7b0NBQUN3QixTQUFRO29DQUFLQyxZQUFZO29DQUFLQyxZQUFZOzhDQUFDOzs7Ozs7OENBR3ZELDhEQUFDeEIsa0lBQUtBO29DQUFDaUIsU0FBUzs7c0RBQ2QsOERBQUNsQixpSUFBSUE7NENBQUMyQixNQUFLOzRDQUFTQyxXQUFVOzRDQUFRRixPQUFNO3NEQUFVOzs7Ozs7c0RBR3RELDhEQUFDMUIsaUlBQUlBOzRDQUFDMkIsTUFBSzs0Q0FBV0MsV0FBVTs0Q0FBUUYsT0FBTTtzREFBVTs7Ozs7O3NEQUd4RCw4REFBQzFCLGlJQUFJQTs0Q0FBQzJCLE1BQUs7NENBQU9DLFdBQVU7NENBQVFGLE9BQU07c0RBQVU7Ozs7OztzREFHcEQsOERBQUMxQixpSUFBSUE7NENBQUMyQixNQUFLOzRDQUFXQyxXQUFVOzRDQUFRRixPQUFNO3NEQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBTzVELDhEQUFDNUIsaUlBQUlBOzRCQUFDcUIsSUFBSTs0QkFBQ0MsSUFBSTs0QkFBSUMsSUFBSTs0QkFBR0MsSUFBSTs7OENBQzVCLDhEQUFDdkIsdUlBQVVBO29DQUFDd0IsU0FBUTtvQ0FBS0MsWUFBWTtvQ0FBS0MsWUFBWTs4Q0FBQzs7Ozs7OzhDQUd2RCw4REFBQ3hCLGtJQUFLQTtvQ0FBQ2lCLFNBQVM7O3NEQUNkLDhEQUFDbEIsaUlBQUlBOzRDQUFDMkIsTUFBSzs0Q0FBUUMsV0FBVTs0Q0FBUUYsT0FBTTtzREFBVTs7Ozs7O3NEQUdyRCw4REFBQzFCLGlJQUFJQTs0Q0FBQzJCLE1BQUs7NENBQVdDLFdBQVU7NENBQVFGLE9BQU07c0RBQVU7Ozs7OztzREFHeEQsOERBQUMxQixpSUFBSUE7NENBQUMyQixNQUFLOzRDQUFRQyxXQUFVOzRDQUFRRixPQUFNO3NEQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBT3pELDhEQUFDNUIsaUlBQUlBOzRCQUFDcUIsSUFBSTs0QkFBQ0MsSUFBSTs0QkFBSUMsSUFBSTs0QkFBR0MsSUFBSTs7OENBQzVCLDhEQUFDdkIsdUlBQVVBO29DQUFDd0IsU0FBUTtvQ0FBS0MsWUFBWTtvQ0FBS0MsWUFBWTs4Q0FBQzs7Ozs7OzhDQUd2RCw4REFBQ3hCLGtJQUFLQTtvQ0FBQzRCLFdBQVU7b0NBQU1YLFNBQVM7O3NEQUM5Qiw4REFBQ2YsdUlBQVVBOzRDQUFDdUIsT0FBTTs0Q0FBVUMsTUFBSzs0Q0FBSUcsY0FBVztzREFDOUMsNEVBQUMxQixvRUFBWUE7Ozs7Ozs7Ozs7c0RBRWYsOERBQUNELHVJQUFVQTs0Q0FBQ3VCLE9BQU07NENBQVVDLE1BQUs7NENBQUlHLGNBQVc7c0RBQzlDLDRFQUFDekIsbUVBQVdBOzs7Ozs7Ozs7O3NEQUVkLDhEQUFDRix1SUFBVUE7NENBQUN1QixPQUFNOzRDQUFVQyxNQUFLOzRDQUFJRyxjQUFXO3NEQUM5Qyw0RUFBQ3hCLG9FQUFZQTs7Ozs7Ozs7OztzREFFZiw4REFBQ0gsdUlBQVVBOzRDQUFDdUIsT0FBTTs0Q0FBVUMsTUFBSzs0Q0FBSUcsY0FBVztzREFDOUMsNEVBQUN2QixxRUFBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTXRCLDhEQUFDTCxvSUFBT0E7b0JBQUNRLElBQUk7d0JBQUVxQixJQUFJO29CQUFFOzs7Ozs7OEJBRXJCLDhEQUFDbkMsZ0lBQUdBO29CQUFDb0MsV0FBVTs4QkFDYiw0RUFBQ2pDLHVJQUFVQTt3QkFBQ3dCLFNBQVE7d0JBQVFHLE9BQU07OzRCQUFpQjs0QkFDOUMsSUFBSU8sT0FBT0MsV0FBVzs0QkFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEMiLCJzb3VyY2VzIjpbIkQ6XFxDb2RlXFxXZWJTa2l0dGVyc19SZWFjdF9DbGFzc1xcU1RVRFlcXG5leHQyXFxwYWdlc1xcbGF5b3V0XFxmb290ZXJcXGluZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgTGluayxcclxuICBTdGFjayxcclxuICBEaXZpZGVyLFxyXG4gIEljb25CdXR0b24sXHJcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9GYWNlYm9va1wiO1xyXG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvVHdpdHRlclwiO1xyXG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xpbmtlZEluXCI7XHJcbmltcG9ydCBJbnN0YWdyYW1JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0luc3RhZ3JhbVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIGNvbXBvbmVudD1cImZvb3RlclwiXHJcbiAgICAgIHN4PXt7XHJcbiAgICAgICAgbXQ6IDgsXHJcbiAgICAgICAgcHQ6IDYsXHJcbiAgICAgICAgcGI6IDMsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM2OGFhMTBcIixcclxuICAgICAgICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkICNlMGUwZTBcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxyXG4gICAgICAgICAgey8qIENvbXBhbnkgKi99XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXszfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgZm9udFdlaWdodD17NjAwfSBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAgWW91ckNvbXBhbnlcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgQnVpbGRpbmcgbW9kZXJuIHNvbHV0aW9ucyB3aXRoIGEgZm9jdXMgb24gcGVyZm9ybWFuY2UgYW5kIGRlc2lnbi5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIHsvKiBRdWljayBMaW5rcyAqL31cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezN9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBmb250V2VpZ2h0PXs2MDB9IGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICBRdWljayBMaW5rc1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgdW5kZXJsaW5lPVwiaG92ZXJcIiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICAgIEFib3V0IFVzXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHVuZGVybGluZT1cImhvdmVyXCIgY29sb3I9XCJpbmhlcml0XCI+XHJcbiAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmFxXCIgdW5kZXJsaW5lPVwiaG92ZXJcIiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICAgIEZBUVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3ByaXZhY3lcIiB1bmRlcmxpbmU9XCJob3ZlclwiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgICAgUHJpdmFjeSBQb2xpY3lcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgey8qIFJlc291cmNlcyAqL31cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezN9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBmb250V2VpZ2h0PXs2MDB9IGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICBSZXNvdXJjZXNcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCIgdW5kZXJsaW5lPVwiaG92ZXJcIiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICAgIEJsb2dcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdXBwb3J0XCIgdW5kZXJsaW5lPVwiaG92ZXJcIiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICAgIFN1cHBvcnRcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kb2NzXCIgdW5kZXJsaW5lPVwiaG92ZXJcIiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICAgIERvY3VtZW50YXRpb25cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgey8qIFNvY2lhbCBNZWRpYSAqL31cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezN9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBmb250V2VpZ2h0PXs2MDB9IGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICBDb25uZWN0IHdpdGggdXNcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cIiNcIiBhcmlhLWxhYmVsPVwiRmFjZWJvb2tcIj5cclxuICAgICAgICAgICAgICAgIDxGYWNlYm9va0ljb24gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cIiNcIiBhcmlhLWxhYmVsPVwiVHdpdHRlclwiPlxyXG4gICAgICAgICAgICAgICAgPFR3aXR0ZXJJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCIjXCIgYXJpYS1sYWJlbD1cIkxpbmtlZEluXCI+XHJcbiAgICAgICAgICAgICAgICA8TGlua2VkSW5JY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCIjXCIgYXJpYS1sYWJlbD1cIkluc3RhZ3JhbVwiPlxyXG4gICAgICAgICAgICAgICAgPEluc3RhZ3JhbUljb24gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICA8RGl2aWRlciBzeD17eyBteTogNCB9fSAvPlxyXG5cclxuICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICDCqSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBZb3VyQ29tcGFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkNvbnRhaW5lciIsIkdyaWQiLCJUeXBvZ3JhcGh5IiwiTGluayIsIlN0YWNrIiwiRGl2aWRlciIsIkljb25CdXR0b24iLCJGYWNlYm9va0ljb24iLCJUd2l0dGVySWNvbiIsIkxpbmtlZEluSWNvbiIsIkluc3RhZ3JhbUljb24iLCJGb290ZXIiLCJjb21wb25lbnQiLCJzeCIsIm10IiwicHQiLCJwYiIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclRvcCIsIm1heFdpZHRoIiwiY29udGFpbmVyIiwic3BhY2luZyIsIml0ZW0iLCJ4cyIsInNtIiwibWQiLCJ2YXJpYW50IiwiZm9udFdlaWdodCIsImd1dHRlckJvdHRvbSIsImNvbG9yIiwiaHJlZiIsInVuZGVybGluZSIsImRpcmVjdGlvbiIsImFyaWEtbGFiZWwiLCJteSIsInRleHRBbGlnbiIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/layout/footer/index.tsx\n");

/***/ }),

/***/ "./pages/layout/header/index.tsx":
/*!***************************************!*\
  !*** ./pages/layout/header/index.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Avatar,Badge,Box,Button,Container,Grid,IconButton,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"__barrel_optimize__?names=AppBar,Avatar,Badge,Box,Button,Container,Grid,IconButton,Menu,MenuItem,Toolbar,Typography!=!./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_icons_material_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Login */ \"./node_modules/@mui/icons-material/esm/Login.js\");\n/* harmony import */ var _mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ShoppingCart */ \"./node_modules/@mui/icons-material/esm/ShoppingCart.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookie */ \"react-cookie\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ \"sweetalert2\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_cartContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../context/cartContext */ \"./context/cartContext.tsx\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/colors */ \"./node_modules/@mui/material/esm/colors/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_cookie__WEBPACK_IMPORTED_MODULE_3__, _barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__, _mui_icons_material_Login__WEBPACK_IMPORTED_MODULE_7__, _mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_9__]);\n([react_cookie__WEBPACK_IMPORTED_MODULE_3__, _barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__, _mui_icons_material_Login__WEBPACK_IMPORTED_MODULE_7__, _mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [cookies, , removeCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_3__.useCookies)([\n        \"token\",\n        \"id\"\n    ]);\n    const { cartItems } = (0,_context_cartContext__WEBPACK_IMPORTED_MODULE_5__.useCart)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Avatar menu state\n    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const open = Boolean(anchorEl);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Header.useEffect\": ()=>{\n            setIsClient(true);\n        }\n    }[\"Header.useEffect\"], []);\n    const handleAvatarClick = (event)=>{\n        setAnchorEl(event.currentTarget);\n    };\n    const handleMenuClose = ()=>{\n        setAnchorEl(null);\n    };\n    const handleLogout = async ()=>{\n        handleMenuClose(); // close menu first\n        const result = await sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({\n            title: \"Confirm Logout?\",\n            icon: \"warning\",\n            showCancelButton: true,\n            confirmButtonColor: \"#d33\",\n            cancelButtonColor: \"#3085d6\",\n            confirmButtonText: \"Confirm\"\n        });\n        if (result.isConfirmed) {\n            removeCookie(\"token\", {\n                path: \"/\"\n            });\n            removeCookie(\"id\", {\n                path: \"/auth\"\n            });\n            setTimeout(()=>{\n                router.push(\"/main\");\n            }, 800);\n        }\n    };\n    const cartCount = cartItems.length;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                sx: {\n                    width: \"100%\",\n                    borderBottom: \"1px solid #ccc\",\n                    backgroundColor: \"#fff\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                    maxWidth: \"xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                        container: true,\n                        alignItems: \"center\",\n                        justifyContent: \"space-between\",\n                        sx: {\n                            minHeight: \"140px\",\n                            px: 2\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                                item: true,\n                                xs: 12,\n                                md: 6,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                    sx: {\n                                        py: 3,\n                                        display: \"flex\",\n                                        alignItems: \"center\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/assets/food/logo1.png\",\n                                        alt: \"Food Recipes Logo\",\n                                        style: {\n                                            height: \"60px\",\n                                            marginRight: \"1rem\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                                item: true,\n                                xs: 12,\n                                md: 6,\n                                sx: {\n                                    display: \"flex\",\n                                    justifyContent: \"flex-end\",\n                                    alignItems: \"center\",\n                                    minHeight: \"140px\",\n                                    px: 2\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/assets/food/header_image.png\",\n                                        alt: \"Header Illustration\",\n                                        style: {\n                                            height: \"100px\",\n                                            marginRight: \"1rem\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    isClient && !cookies.token ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        startIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Login__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                                            lineNumber: 120,\n                                            columnNumber: 30\n                                        }, void 0),\n                                        href: \"/auth/login\",\n                                        variant: \"outlined\",\n                                        sx: {\n                                            color: \"green\",\n                                            borderColor: \"green\",\n                                            \"&:hover\": {\n                                                borderColor: \"darkgreen\",\n                                                color: \"darkgreen\"\n                                            }\n                                        },\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 17\n                                    }, undefined) : isClient && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                                                onClick: handleAvatarClick,\n                                                sx: {\n                                                    p: 0\n                                                },\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Avatar, {\n                                                    sx: {\n                                                        bgcolor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__.deepOrange[500]\n                                                    },\n                                                    children: \"U\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                                                    lineNumber: 138,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                                                lineNumber: 137,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Menu, {\n                                                anchorEl: anchorEl,\n                                                open: open,\n                                                onClose: handleMenuClose,\n                                                anchorOrigin: {\n                                                    vertical: \"bottom\",\n                                                    horizontal: \"right\"\n                                                },\n                                                transformOrigin: {\n                                                    vertical: \"top\",\n                                                    horizontal: \"right\"\n                                                },\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {\n                                                        onClick: ()=>{\n                                                            handleMenuClose();\n                                                            router.push(\"/auth/profile\");\n                                                        },\n                                                        children: \"My Profile\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                                                        lineNumber: 154,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {\n                                                        onClick: ()=>{\n                                                            handleMenuClose();\n                                                            router.push(\"/auth/update\");\n                                                        },\n                                                        children: \"Update Password\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                                                        lineNumber: 162,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {\n                                                        onClick: handleLogout,\n                                                        children: \"Logout\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                                                        lineNumber: 170,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                                                lineNumber: 141,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.AppBar, {\n                position: \"static\",\n                color: \"primary\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Toolbar, {\n                    sx: {\n                        display: \"flex\",\n                        justifyContent: \"space-between\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                            variant: \"h6\",\n                            sx: {\n                                fontWeight: 600\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                            lineNumber: 183,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            gap: 2,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                    color: \"inherit\",\n                                    href: \"/cms/list\",\n                                    children: \"Products\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                                    lineNumber: 188,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                    color: \"inherit\",\n                                    href: \"/cms/cart\",\n                                    startIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Badge_Box_Button_Container_Grid_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Badge, {\n                                        badgeContent: cartCount,\n                                        color: \"error\",\n                                        max: 9,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                                            lineNumber: 197,\n                                            columnNumber: 19\n                                        }, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                                        lineNumber: 196,\n                                        columnNumber: 17\n                                    }, void 0),\n                                    children: \"My Cart\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                                    lineNumber: 192,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                            lineNumber: 187,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                    lineNumber: 182,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\header\\\\index.tsx\",\n                lineNumber: 181,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYXlvdXQvaGVhZGVyL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBYzVCO0FBQzJCO0FBQ2M7QUFDeEI7QUFDRTtBQUNYO0FBQ3dCO0FBQ0w7QUFFbEQsTUFBTXNCLFNBQW1CO0lBQ3ZCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHdEIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDdUIsV0FBV0MsYUFBYSxHQUFHUix3REFBVUEsQ0FBQztRQUFDO1FBQVM7S0FBSztJQUM1RCxNQUFNLEVBQUVTLFNBQVMsRUFBRSxHQUFHUCw2REFBT0E7SUFDN0IsTUFBTVEsU0FBU1gsc0RBQVNBO0lBRXhCLG9CQUFvQjtJQUNwQixNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBRzVCLCtDQUFRQSxDQUFxQjtJQUM3RCxNQUFNNkIsT0FBT0MsUUFBUUg7SUFFckI1QixnREFBU0E7NEJBQUM7WUFDUnVCLFlBQVk7UUFDZDsyQkFBRyxFQUFFO0lBRUwsTUFBTVMsb0JBQW9CLENBQUNDO1FBQ3pCSixZQUFZSSxNQUFNQyxhQUFhO0lBQ2pDO0lBRUEsTUFBTUMsa0JBQWtCO1FBQ3RCTixZQUFZO0lBQ2Q7SUFFQSxNQUFNTyxlQUFlO1FBQ25CRCxtQkFBbUIsbUJBQW1CO1FBQ3RDLE1BQU1FLFNBQVMsTUFBTW5CLHVEQUFTLENBQUM7WUFDN0JxQixPQUFPO1lBQ1BDLE1BQU07WUFDTkMsa0JBQWtCO1lBQ2xCQyxvQkFBb0I7WUFDcEJDLG1CQUFtQjtZQUNuQkMsbUJBQW1CO1FBQ3JCO1FBRUEsSUFBSVAsT0FBT1EsV0FBVyxFQUFFO1lBQ3RCcEIsYUFBYSxTQUFTO2dCQUFFcUIsTUFBTTtZQUFJO1lBQ2xDckIsYUFBYSxNQUFNO2dCQUFFcUIsTUFBTTtZQUFRO1lBQ25DQyxXQUFXO2dCQUNUcEIsT0FBT3FCLElBQUksQ0FBQztZQUNkLEdBQUc7UUFDTDtJQUNGO0lBRUEsTUFBTUMsWUFBWXZCLFVBQVV3QixNQUFNO0lBRWxDLHFCQUNFOzswQkFFRSw4REFBQzVDLDhKQUFHQTtnQkFDRjZDLElBQUk7b0JBQ0ZDLE9BQU87b0JBQ1BDLGNBQWM7b0JBQ2RDLGlCQUFpQjtnQkFDbkI7MEJBRUEsNEVBQUMvQyxvS0FBU0E7b0JBQUNnRCxVQUFTOzhCQUNsQiw0RUFBQy9DLCtKQUFJQTt3QkFDSGdELFNBQVM7d0JBQ1RDLFlBQVc7d0JBQ1hDLGdCQUFlO3dCQUNmUCxJQUFJOzRCQUNGUSxXQUFXOzRCQUNYQyxJQUFJO3dCQUNOOzswQ0FHQSw4REFBQ3BELCtKQUFJQTtnQ0FBQ3FELElBQUk7Z0NBQUNDLElBQUk7Z0NBQUlDLElBQUk7MENBQ3JCLDRFQUFDekQsOEpBQUdBO29DQUFDNkMsSUFBSTt3Q0FBRWEsSUFBSTt3Q0FBR0MsU0FBUzt3Q0FBUVIsWUFBWTtvQ0FBUzs4Q0FDdEQsNEVBQUNTO3dDQUNDQyxLQUFJO3dDQUNKQyxLQUFJO3dDQUNKQyxPQUFPOzRDQUFFQyxRQUFROzRDQUFRQyxhQUFhO3dDQUFPOzs7Ozs7Ozs7Ozs7Ozs7OzBDQU1uRCw4REFBQy9ELCtKQUFJQTtnQ0FDSHFELElBQUk7Z0NBQ0pDLElBQUk7Z0NBQ0pDLElBQUk7Z0NBQ0paLElBQUk7b0NBQ0ZjLFNBQVM7b0NBQ1RQLGdCQUFnQjtvQ0FDaEJELFlBQVk7b0NBQ1pFLFdBQVc7b0NBQ1hDLElBQUk7Z0NBQ047O2tEQUVBLDhEQUFDTTt3Q0FDQ0MsS0FBSTt3Q0FDSkMsS0FBSTt3Q0FDSkMsT0FBTzs0Q0FBRUMsUUFBUTs0Q0FBU0MsYUFBYTt3Q0FBTzs7Ozs7O29DQUcvQ2pELFlBQVksQ0FBQ0UsUUFBUWdELEtBQUssaUJBQ3pCLDhEQUFDbkUsaUtBQU1BO3dDQUNMb0UseUJBQVcsOERBQUMzRCxpRUFBU0E7Ozs7O3dDQUNyQjRELE1BQUs7d0NBQ0xDLFNBQVE7d0NBQ1J4QixJQUFJOzRDQUNGeUIsT0FBTzs0Q0FDUEMsYUFBYTs0Q0FDYixXQUFXO2dEQUNUQSxhQUFhO2dEQUNiRCxPQUFPOzRDQUNUO3dDQUNGO2tEQUNEOzs7OztvREFJRHRELDBCQUNFOzswREFDRSw4REFBQ1QscUtBQVVBO2dEQUFDaUUsU0FBUzlDO2dEQUFtQm1CLElBQUk7b0RBQUU0QixHQUFHO2dEQUFFOzBEQUNuRCw0RUFBQ3JFLGlLQUFNQTtvREFBQ3lDLElBQUk7d0RBQUU2QixTQUFTNUQsNERBQVUsQ0FBQyxJQUFJO29EQUFDOzhEQUFHOzs7Ozs7Ozs7OzswREFHMUMsOERBQUNULCtKQUFJQTtnREFDSGlCLFVBQVVBO2dEQUNWRSxNQUFNQTtnREFDTm1ELFNBQVM5QztnREFDVCtDLGNBQWM7b0RBQ1pDLFVBQVU7b0RBQ1ZDLFlBQVk7Z0RBQ2Q7Z0RBQ0FDLGlCQUFpQjtvREFDZkYsVUFBVTtvREFDVkMsWUFBWTtnREFDZDs7a0VBRUEsOERBQUN4RSxtS0FBUUE7d0RBQ1BrRSxTQUFTOzREQUNQM0M7NERBQ0FSLE9BQU9xQixJQUFJLENBQUM7d0RBQ2Q7a0VBQ0Q7Ozs7OztrRUFHRCw4REFBQ3BDLG1LQUFRQTt3REFDUGtFLFNBQVM7NERBQ1AzQzs0REFDQVIsT0FBT3FCLElBQUksQ0FBQzt3REFDZDtrRUFDRDs7Ozs7O2tFQUdELDhEQUFDcEMsbUtBQVFBO3dEQUFDa0UsU0FBUzFDO2tFQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBV2pELDhEQUFDbEMsaUtBQU1BO2dCQUFDb0YsVUFBUztnQkFBU1YsT0FBTTswQkFDOUIsNEVBQUN6RSxrS0FBT0E7b0JBQUNnRCxJQUFJO3dCQUFFYyxTQUFTO3dCQUFRUCxnQkFBZ0I7b0JBQWdCOztzQ0FDOUQsOERBQUN0RCxxS0FBVUE7NEJBQUN1RSxTQUFROzRCQUFLeEIsSUFBSTtnQ0FBRW9DLFlBQVk7NEJBQUk7Ozs7OztzQ0FJL0MsOERBQUNqRiw4SkFBR0E7NEJBQUMyRCxTQUFROzRCQUFPUixZQUFXOzRCQUFTK0IsS0FBSzs7OENBQzNDLDhEQUFDbkYsaUtBQU1BO29DQUFDdUUsT0FBTTtvQ0FBVUYsTUFBSzs4Q0FBWTs7Ozs7OzhDQUl6Qyw4REFBQ3JFLGlLQUFNQTtvQ0FDTHVFLE9BQU07b0NBQ05GLE1BQUs7b0NBQ0xELHlCQUNFLDhEQUFDaEUsZ0tBQUtBO3dDQUFDZ0YsY0FBY3hDO3dDQUFXMkIsT0FBTTt3Q0FBUWMsS0FBSztrREFDakQsNEVBQUMzRSx3RUFBZ0JBOzs7Ozs7Ozs7OzhDQUd0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0FBRUEsaUVBQWVNLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxDb2RlXFxXZWJTa2l0dGVyc19SZWFjdF9DbGFzc1xcU1RVRFlcXG5leHQyXFxwYWdlc1xcbGF5b3V0XFxoZWFkZXJcXGluZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEFwcEJhcixcclxuICBUb29sYmFyLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgQnV0dG9uLFxyXG4gIEJveCxcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBCYWRnZSxcclxuICBBdmF0YXIsXHJcbiAgTWVudSxcclxuICBNZW51SXRlbSxcclxuICBJY29uQnV0dG9uLFxyXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBMb2dpbkljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTG9naW5cIjtcclxuaW1wb3J0IFNob3BwaW5nQ2FydEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L2NhcnRDb250ZXh0XCI7XHJcbmltcG9ydCB7IGRlZXBPcmFuZ2UgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9jb2xvcnNcIjtcclxuXHJcbmNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzQ2xpZW50LCBzZXRJc0NsaWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Nvb2tpZXMsICwgcmVtb3ZlQ29va2llXSA9IHVzZUNvb2tpZXMoW1widG9rZW5cIiwgXCJpZFwiXSk7XHJcbiAgY29uc3QgeyBjYXJ0SXRlbXMgfSA9IHVzZUNhcnQoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gQXZhdGFyIG1lbnUgc3RhdGVcclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IHVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3Qgb3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXNDbGllbnQodHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVBdmF0YXJDbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1lbnVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgIGhhbmRsZU1lbnVDbG9zZSgpOyAvLyBjbG9zZSBtZW51IGZpcnN0XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBTd2FsLmZpcmUoe1xyXG4gICAgICB0aXRsZTogXCJDb25maXJtIExvZ291dD9cIixcclxuICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXHJcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjZDMzXCIsXHJcbiAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcclxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiQ29uZmlybVwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICByZW1vdmVDb29raWUoXCJ0b2tlblwiLCB7IHBhdGg6IFwiL1wiIH0pO1xyXG4gICAgICByZW1vdmVDb29raWUoXCJpZFwiLCB7IHBhdGg6IFwiL2F1dGhcIiB9KTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbWFpblwiKTtcclxuICAgICAgfSwgODAwKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjYXJ0Q291bnQgPSBjYXJ0SXRlbXMubGVuZ3RoO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIExvZ28gJiBIZWFkZXIgU2VjdGlvbiAqL31cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNjY2NcIixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4bFwiPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogXCIxNDBweFwiLFxyXG4gICAgICAgICAgICAgIHB4OiAyLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7LyogTG9nbyAqL31cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICA8Qm94IHN4PXt7IHB5OiAzLCBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9mb29kL2xvZ28xLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkZvb2QgUmVjaXBlcyBMb2dvXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjYwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiMXJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICB7LyogSGVhZGVyIEltYWdlICYgQXV0aCBCdXR0b24gKi99XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogXCIxNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgcHg6IDIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvZm9vZC9oZWFkZXJfaW1hZ2UucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIkhlYWRlciBJbGx1c3RyYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHB4XCIsIG1hcmdpblJpZ2h0OiBcIjFyZW1cIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIHtpc0NsaWVudCAmJiAhY29va2llcy50b2tlbiA/IChcclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgc3RhcnRJY29uPXs8TG9naW5JY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2F1dGgvbG9naW5cIlxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiZGFya2dyZWVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJkYXJrZ3JlZW5cIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIGlzQ2xpZW50ICYmIChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBdmF0YXJDbGlja30gc3g9e3sgcDogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHN4PXt7IGJnY29sb3I6IGRlZXBPcmFuZ2VbNTAwXSB9fT5VPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZU1lbnVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJib3R0b21cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU1lbnVDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2F1dGgvcHJvZmlsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTXkgUHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTWVudUNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYXV0aC91cGRhdGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZSBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgey8qIE5hdmlnYXRpb24gQmFyICovfVxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgPFRvb2xiYXIgc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiB9fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIHN4PXt7IGZvbnRXZWlnaHQ6IDYwMCB9fT5cclxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiL2Fzc2V0cy9mb29kL2xvZ28xLnBuZ1wiIGFsdD1cIlwiLz4gKi99XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBnYXA9ezJ9PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCIvY21zL2xpc3RcIj5cclxuICAgICAgICAgICAgICBQcm9kdWN0c1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvY21zL2NhcnRcIlxyXG4gICAgICAgICAgICAgIHN0YXJ0SWNvbj17XHJcbiAgICAgICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXtjYXJ0Q291bnR9IGNvbG9yPVwiZXJyb3JcIiBtYXg9ezl9PlxyXG4gICAgICAgICAgICAgICAgICA8U2hvcHBpbmdDYXJ0SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBNeSBDYXJ0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXBwQmFyIiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJCb3giLCJDb250YWluZXIiLCJHcmlkIiwiQmFkZ2UiLCJBdmF0YXIiLCJNZW51IiwiTWVudUl0ZW0iLCJJY29uQnV0dG9uIiwiTG9naW5JY29uIiwiU2hvcHBpbmdDYXJ0SWNvbiIsInVzZVJvdXRlciIsInVzZUNvb2tpZXMiLCJTd2FsIiwidXNlQ2FydCIsImRlZXBPcmFuZ2UiLCJIZWFkZXIiLCJpc0NsaWVudCIsInNldElzQ2xpZW50IiwiY29va2llcyIsInJlbW92ZUNvb2tpZSIsImNhcnRJdGVtcyIsInJvdXRlciIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJvcGVuIiwiQm9vbGVhbiIsImhhbmRsZUF2YXRhckNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlTWVudUNsb3NlIiwiaGFuZGxlTG9nb3V0IiwicmVzdWx0IiwiZmlyZSIsInRpdGxlIiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiaXNDb25maXJtZWQiLCJwYXRoIiwic2V0VGltZW91dCIsInB1c2giLCJjYXJ0Q291bnQiLCJsZW5ndGgiLCJzeCIsIndpZHRoIiwiYm9yZGVyQm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwibWF4V2lkdGgiLCJjb250YWluZXIiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtaW5IZWlnaHQiLCJweCIsIml0ZW0iLCJ4cyIsIm1kIiwicHkiLCJkaXNwbGF5IiwiaW1nIiwic3JjIiwiYWx0Iiwic3R5bGUiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsInRva2VuIiwic3RhcnRJY29uIiwiaHJlZiIsInZhcmlhbnQiLCJjb2xvciIsImJvcmRlckNvbG9yIiwib25DbGljayIsInAiLCJiZ2NvbG9yIiwib25DbG9zZSIsImFuY2hvck9yaWdpbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInRyYW5zZm9ybU9yaWdpbiIsInBvc2l0aW9uIiwiZm9udFdlaWdodCIsImdhcCIsImJhZGdlQ29udGVudCIsIm1heCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/layout/header/index.tsx\n");

/***/ }),

/***/ "./pages/layout/wrapper/wrapper.tsx":
/*!******************************************!*\
  !*** ./pages/layout/wrapper/wrapper.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header */ \"./pages/layout/header/index.tsx\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer */ \"./pages/layout/footer/index.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_header__WEBPACK_IMPORTED_MODULE_2__, _footer__WEBPACK_IMPORTED_MODULE_3__]);\n([_header__WEBPACK_IMPORTED_MODULE_2__, _footer__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst Wrapper = ({ children })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\wrapper\\\\wrapper.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Code\\\\WebSkitters_React_Class\\\\STUDY\\\\next2\\\\pages\\\\layout\\\\wrapper\\\\wrapper.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYXlvdXQvd3JhcHBlci93cmFwcGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNWO0FBQ0E7QUFPL0IsTUFBTUcsVUFBMkIsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDNUMscUJBQ0U7OzBCQUNFLDhEQUFDSCwrQ0FBTUE7Ozs7O1lBQ05HOzBCQUNELDhEQUFDRiwrQ0FBTUE7Ozs7Ozs7QUFHYjtBQUVBLGlFQUFlQyxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJEOlxcQ29kZVxcV2ViU2tpdHRlcnNfUmVhY3RfQ2xhc3NcXFNUVURZXFxuZXh0MlxccGFnZXNcXGxheW91dFxcd3JhcHBlclxcd3JhcHBlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9oZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vZm9vdGVyXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5jb25zdCBXcmFwcGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXIiLCJGb290ZXIiLCJXcmFwcGVyIiwiY2hpbGRyZW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/layout/wrapper/wrapper.tsx\n");

/***/ }),

/***/ "./theme/index.ts":
/*!************************!*\
  !*** ./theme/index.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/esm/styles/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__]);\n_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        primary: {\n            main: '#68aa10'\n        },\n        secondary: {\n            main: '#f44336'\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZS9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUduRCxNQUFNQyxRQUFRRCxpRUFBV0EsQ0FBQztJQUN4QkUsU0FBUztRQUNQQyxTQUFTO1lBQ1BDLE1BQU07UUFDUjtRQUNBQyxXQUFXO1lBQ1RELE1BQU07UUFDUjtJQUNGO0FBQ0Y7QUFDQSxpRUFBZUgsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiRDpcXENvZGVcXFdlYlNraXR0ZXJzX1JlYWN0X0NsYXNzXFxTVFVEWVxcbmV4dDJcXHRoZW1lXFxpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuaW1wb3J0IHsgcHVycGxlIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9jb2xvcnMnO1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiAnIzY4YWExMCcsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46ICcjZjQ0MzM2JyxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./theme/index.ts\n");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("@mui/system");;

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = import("@mui/system/DefaultPropsProvider");;

/***/ }),

/***/ "@mui/system/Grid":
/*!***********************************!*\
  !*** external "@mui/system/Grid" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@mui/system/Grid");;

/***/ }),

/***/ "@mui/system/InitColorSchemeScript":
/*!****************************************************!*\
  !*** external "@mui/system/InitColorSchemeScript" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = import("@mui/system/InitColorSchemeScript");;

/***/ }),

/***/ "@mui/system/RtlProvider":
/*!******************************************!*\
  !*** external "@mui/system/RtlProvider" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@mui/system/RtlProvider");;

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = import("@mui/system/colorManipulator");;

/***/ }),

/***/ "@mui/system/createBreakpoints":
/*!************************************************!*\
  !*** external "@mui/system/createBreakpoints" ***!
  \************************************************/
/***/ ((module) => {

module.exports = import("@mui/system/createBreakpoints");;

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = import("@mui/system/createStyled");;

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@mui/system/createTheme");;

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@mui/system/cssVars");;

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@mui/system/spacing");;

/***/ }),

/***/ "@mui/system/style":
/*!************************************!*\
  !*** external "@mui/system/style" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("@mui/system/style");;

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("@mui/system/styleFunctionSx");;

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("@mui/system/useThemeProps");;

/***/ }),

/***/ "@mui/utils/ClassNameGenerator":
/*!************************************************!*\
  !*** external "@mui/utils/ClassNameGenerator" ***!
  \************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/ClassNameGenerator");;

/***/ }),

/***/ "@mui/utils/HTMLElementType":
/*!*********************************************!*\
  !*** external "@mui/utils/HTMLElementType" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/HTMLElementType");;

/***/ }),

/***/ "@mui/utils/appendOwnerState":
/*!**********************************************!*\
  !*** external "@mui/utils/appendOwnerState" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/appendOwnerState");;

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/capitalize");;

/***/ }),

/***/ "@mui/utils/chainPropTypes":
/*!********************************************!*\
  !*** external "@mui/utils/chainPropTypes" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/chainPropTypes");;

/***/ }),

/***/ "@mui/utils/composeClasses":
/*!********************************************!*\
  !*** external "@mui/utils/composeClasses" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/composeClasses");;

/***/ }),

/***/ "@mui/utils/createChainedFunction":
/*!***************************************************!*\
  !*** external "@mui/utils/createChainedFunction" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/createChainedFunction");;

/***/ }),

/***/ "@mui/utils/debounce":
/*!**************************************!*\
  !*** external "@mui/utils/debounce" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/debounce");;

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/deepmerge");;

/***/ }),

/***/ "@mui/utils/deprecatedPropType":
/*!************************************************!*\
  !*** external "@mui/utils/deprecatedPropType" ***!
  \************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/deprecatedPropType");;

/***/ }),

/***/ "@mui/utils/elementAcceptingRef":
/*!*************************************************!*\
  !*** external "@mui/utils/elementAcceptingRef" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/elementAcceptingRef");;

/***/ }),

/***/ "@mui/utils/elementTypeAcceptingRef":
/*!*****************************************************!*\
  !*** external "@mui/utils/elementTypeAcceptingRef" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/elementTypeAcceptingRef");;

/***/ }),

/***/ "@mui/utils/exactProp":
/*!***************************************!*\
  !*** external "@mui/utils/exactProp" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/exactProp");;

/***/ }),

/***/ "@mui/utils/extractEventHandlers":
/*!**************************************************!*\
  !*** external "@mui/utils/extractEventHandlers" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/extractEventHandlers");;

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/formatMuiErrorMessage");;

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/generateUtilityClass");;

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/generateUtilityClasses");;

/***/ }),

/***/ "@mui/utils/getReactElementRef":
/*!************************************************!*\
  !*** external "@mui/utils/getReactElementRef" ***!
  \************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/getReactElementRef");;

/***/ }),

/***/ "@mui/utils/getScrollbarSize":
/*!**********************************************!*\
  !*** external "@mui/utils/getScrollbarSize" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/getScrollbarSize");;

/***/ }),

/***/ "@mui/utils/integerPropType":
/*!*********************************************!*\
  !*** external "@mui/utils/integerPropType" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/integerPropType");;

/***/ }),

/***/ "@mui/utils/isFocusVisible":
/*!********************************************!*\
  !*** external "@mui/utils/isFocusVisible" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/isFocusVisible");;

/***/ }),

/***/ "@mui/utils/isMuiElement":
/*!******************************************!*\
  !*** external "@mui/utils/isMuiElement" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/isMuiElement");;

/***/ }),

/***/ "@mui/utils/mergeSlotProps":
/*!********************************************!*\
  !*** external "@mui/utils/mergeSlotProps" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/mergeSlotProps");;

/***/ }),

/***/ "@mui/utils/ownerDocument":
/*!*******************************************!*\
  !*** external "@mui/utils/ownerDocument" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/ownerDocument");;

/***/ }),

/***/ "@mui/utils/ownerWindow":
/*!*****************************************!*\
  !*** external "@mui/utils/ownerWindow" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/ownerWindow");;

/***/ }),

/***/ "@mui/utils/refType":
/*!*************************************!*\
  !*** external "@mui/utils/refType" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/refType");;

/***/ }),

/***/ "@mui/utils/requirePropFactory":
/*!************************************************!*\
  !*** external "@mui/utils/requirePropFactory" ***!
  \************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/requirePropFactory");;

/***/ }),

/***/ "@mui/utils/resolveComponentProps":
/*!***************************************************!*\
  !*** external "@mui/utils/resolveComponentProps" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/resolveComponentProps");;

/***/ }),

/***/ "@mui/utils/resolveProps":
/*!******************************************!*\
  !*** external "@mui/utils/resolveProps" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/resolveProps");;

/***/ }),

/***/ "@mui/utils/setRef":
/*!************************************!*\
  !*** external "@mui/utils/setRef" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/setRef");;

/***/ }),

/***/ "@mui/utils/unsupportedProp":
/*!*********************************************!*\
  !*** external "@mui/utils/unsupportedProp" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/unsupportedProp");;

/***/ }),

/***/ "@mui/utils/useControlled":
/*!*******************************************!*\
  !*** external "@mui/utils/useControlled" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/useControlled");;

/***/ }),

/***/ "@mui/utils/useEnhancedEffect":
/*!***********************************************!*\
  !*** external "@mui/utils/useEnhancedEffect" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/useEnhancedEffect");;

/***/ }),

/***/ "@mui/utils/useEventCallback":
/*!**********************************************!*\
  !*** external "@mui/utils/useEventCallback" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/useEventCallback");;

/***/ }),

/***/ "@mui/utils/useForkRef":
/*!****************************************!*\
  !*** external "@mui/utils/useForkRef" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/useForkRef");;

/***/ }),

/***/ "@mui/utils/useId":
/*!***********************************!*\
  !*** external "@mui/utils/useId" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@mui/utils/useId");;

/***/ }),

/***/ "@mui/utils/useLazyRef":
/*!****************************************!*\
  !*** external "@mui/utils/useLazyRef" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/useLazyRef");;

/***/ }),

/***/ "@mui/utils/usePreviousProps":
/*!**********************************************!*\
  !*** external "@mui/utils/usePreviousProps" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/usePreviousProps");;

/***/ }),

/***/ "@mui/utils/useSlotProps":
/*!******************************************!*\
  !*** external "@mui/utils/useSlotProps" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/useSlotProps");;

/***/ }),

/***/ "@mui/utils/useTimeout":
/*!****************************************!*\
  !*** external "@mui/utils/useTimeout" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/useTimeout");;

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "__barrel_optimize__?names=AppBar,Avatar,Badge,Box,Button,Container,Grid,IconButton,Menu,MenuItem,Toolbar,Typography!=!./node_modules/@mui/material/esm/index.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=AppBar,Avatar,Badge,Box,Button,Container,Grid,IconButton,Menu,MenuItem,Toolbar,Typography!=!./node_modules/@mui/material/esm/index.js ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppBar: () => (/* reexport safe */ _AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Avatar: () => (/* reexport safe */ _Avatar_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   Badge: () => (/* reexport safe */ _Badge_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   Box: () => (/* reexport safe */ _Box_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   Button: () => (/* reexport safe */ _Button_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   Container: () => (/* reexport safe */ _Container_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   Grid: () => (/* reexport safe */ _Grid_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   IconButton: () => (/* reexport safe */ _IconButton_index_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   Menu: () => (/* reexport safe */ _Menu_index_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   MenuItem: () => (/* reexport safe */ _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]),\n/* harmony export */   Toolbar: () => (/* reexport safe */ _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]),\n/* harmony export */   Typography: () => (/* reexport safe */ _Typography_index_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar/index.js */ \"./node_modules/@mui/material/esm/AppBar/index.js\");\n/* harmony import */ var _Avatar_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatar/index.js */ \"./node_modules/@mui/material/esm/Avatar/index.js\");\n/* harmony import */ var _Badge_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Badge/index.js */ \"./node_modules/@mui/material/esm/Badge/index.js\");\n/* harmony import */ var _Box_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Box/index.js */ \"./node_modules/@mui/material/esm/Box/index.js\");\n/* harmony import */ var _Button_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button/index.js */ \"./node_modules/@mui/material/esm/Button/index.js\");\n/* harmony import */ var _Container_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Container/index.js */ \"./node_modules/@mui/material/esm/Container/index.js\");\n/* harmony import */ var _Grid_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Grid/index.js */ \"./node_modules/@mui/material/esm/Grid/index.js\");\n/* harmony import */ var _IconButton_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IconButton/index.js */ \"./node_modules/@mui/material/esm/IconButton/index.js\");\n/* harmony import */ var _Menu_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Menu/index.js */ \"./node_modules/@mui/material/esm/Menu/index.js\");\n/* harmony import */ var _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MenuItem/index.js */ \"./node_modules/@mui/material/esm/MenuItem/index.js\");\n/* harmony import */ var _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Toolbar/index.js */ \"./node_modules/@mui/material/esm/Toolbar/index.js\");\n/* harmony import */ var _Typography_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Typography/index.js */ \"./node_modules/@mui/material/esm/Typography/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__, _Avatar_index_js__WEBPACK_IMPORTED_MODULE_1__, _Badge_index_js__WEBPACK_IMPORTED_MODULE_2__, _Box_index_js__WEBPACK_IMPORTED_MODULE_3__, _Button_index_js__WEBPACK_IMPORTED_MODULE_4__, _Container_index_js__WEBPACK_IMPORTED_MODULE_5__, _Grid_index_js__WEBPACK_IMPORTED_MODULE_6__, _IconButton_index_js__WEBPACK_IMPORTED_MODULE_7__, _Menu_index_js__WEBPACK_IMPORTED_MODULE_8__, _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_9__, _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_10__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_11__]);\n([_AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__, _Avatar_index_js__WEBPACK_IMPORTED_MODULE_1__, _Badge_index_js__WEBPACK_IMPORTED_MODULE_2__, _Box_index_js__WEBPACK_IMPORTED_MODULE_3__, _Button_index_js__WEBPACK_IMPORTED_MODULE_4__, _Container_index_js__WEBPACK_IMPORTED_MODULE_5__, _Grid_index_js__WEBPACK_IMPORTED_MODULE_6__, _IconButton_index_js__WEBPACK_IMPORTED_MODULE_7__, _Menu_index_js__WEBPACK_IMPORTED_MODULE_8__, _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_9__, _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_10__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1BcHBCYXIsQXZhdGFyLEJhZGdlLEJveCxCdXR0b24sQ29udGFpbmVyLEdyaWQsSWNvbkJ1dHRvbixNZW51LE1lbnVJdGVtLFRvb2xiYXIsVHlwb2dyYXBoeSE9IS4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDcUQ7QUFDQTtBQUNGO0FBQ0o7QUFDTTtBQUNNO0FBQ1Y7QUFDWTtBQUNaO0FBQ1E7QUFDRiIsInNvdXJjZXMiOlsiRDpcXENvZGVcXFdlYlNraXR0ZXJzX1JlYWN0X0NsYXNzXFxTVFVEWVxcbmV4dDJcXG5vZGVfbW9kdWxlc1xcQG11aVxcbWF0ZXJpYWxcXGVzbVxcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFwcEJhciB9IGZyb20gXCIuL0FwcEJhci9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEF2YXRhciB9IGZyb20gXCIuL0F2YXRhci9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhZGdlIH0gZnJvbSBcIi4vQmFkZ2UvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3ggfSBmcm9tIFwiLi9Cb3gvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tIFwiLi9CdXR0b24vaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb250YWluZXIgfSBmcm9tIFwiLi9Db250YWluZXIvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBHcmlkIH0gZnJvbSBcIi4vR3JpZC9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEljb25CdXR0b24gfSBmcm9tIFwiLi9JY29uQnV0dG9uL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWVudSB9IGZyb20gXCIuL01lbnUvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZW51SXRlbSB9IGZyb20gXCIuL01lbnVJdGVtL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9vbGJhciB9IGZyb20gXCIuL1Rvb2xiYXIvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUeXBvZ3JhcGh5IH0gZnJvbSBcIi4vVHlwb2dyYXBoeS9pbmRleC5qc1wiIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=AppBar,Avatar,Badge,Box,Button,Container,Grid,IconButton,Menu,MenuItem,Toolbar,Typography!=!./node_modules/@mui/material/esm/index.js\n");

/***/ }),

/***/ "__barrel_optimize__?names=Box,Container,Divider,Grid,IconButton,Link,Stack,Typography!=!./node_modules/@mui/material/esm/index.js":
/*!*****************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=Box,Container,Divider,Grid,IconButton,Link,Stack,Typography!=!./node_modules/@mui/material/esm/index.js ***!
  \*****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Box: () => (/* reexport safe */ _Box_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Container: () => (/* reexport safe */ _Container_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   Divider: () => (/* reexport safe */ _Divider_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   Grid: () => (/* reexport safe */ _Grid_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   IconButton: () => (/* reexport safe */ _IconButton_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   Link: () => (/* reexport safe */ _Link_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   Stack: () => (/* reexport safe */ _Stack_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   Typography: () => (/* reexport safe */ _Typography_index_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Box_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box/index.js */ \"./node_modules/@mui/material/esm/Box/index.js\");\n/* harmony import */ var _Container_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container/index.js */ \"./node_modules/@mui/material/esm/Container/index.js\");\n/* harmony import */ var _Divider_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Divider/index.js */ \"./node_modules/@mui/material/esm/Divider/index.js\");\n/* harmony import */ var _Grid_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Grid/index.js */ \"./node_modules/@mui/material/esm/Grid/index.js\");\n/* harmony import */ var _IconButton_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IconButton/index.js */ \"./node_modules/@mui/material/esm/IconButton/index.js\");\n/* harmony import */ var _Link_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Link/index.js */ \"./node_modules/@mui/material/esm/Link/index.js\");\n/* harmony import */ var _Stack_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Stack/index.js */ \"./node_modules/@mui/material/esm/Stack/index.js\");\n/* harmony import */ var _Typography_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Typography/index.js */ \"./node_modules/@mui/material/esm/Typography/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box_index_js__WEBPACK_IMPORTED_MODULE_0__, _Container_index_js__WEBPACK_IMPORTED_MODULE_1__, _Divider_index_js__WEBPACK_IMPORTED_MODULE_2__, _Grid_index_js__WEBPACK_IMPORTED_MODULE_3__, _IconButton_index_js__WEBPACK_IMPORTED_MODULE_4__, _Link_index_js__WEBPACK_IMPORTED_MODULE_5__, _Stack_index_js__WEBPACK_IMPORTED_MODULE_6__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_7__]);\n([_Box_index_js__WEBPACK_IMPORTED_MODULE_0__, _Container_index_js__WEBPACK_IMPORTED_MODULE_1__, _Divider_index_js__WEBPACK_IMPORTED_MODULE_2__, _Grid_index_js__WEBPACK_IMPORTED_MODULE_3__, _IconButton_index_js__WEBPACK_IMPORTED_MODULE_4__, _Link_index_js__WEBPACK_IMPORTED_MODULE_5__, _Stack_index_js__WEBPACK_IMPORTED_MODULE_6__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1Cb3gsQ29udGFpbmVyLERpdmlkZXIsR3JpZCxJY29uQnV0dG9uLExpbmssU3RhY2ssVHlwb2dyYXBoeSE9IS4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQytDO0FBQ1k7QUFDSjtBQUNOO0FBQ1k7QUFDWjtBQUNFIiwic291cmNlcyI6WyJEOlxcQ29kZVxcV2ViU2tpdHRlcnNfUmVhY3RfQ2xhc3NcXFNUVURZXFxuZXh0Mlxcbm9kZV9tb2R1bGVzXFxAbXVpXFxtYXRlcmlhbFxcZXNtXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm94IH0gZnJvbSBcIi4vQm94L2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFpbmVyIH0gZnJvbSBcIi4vQ29udGFpbmVyL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGl2aWRlciB9IGZyb20gXCIuL0RpdmlkZXIvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBHcmlkIH0gZnJvbSBcIi4vR3JpZC9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEljb25CdXR0b24gfSBmcm9tIFwiLi9JY29uQnV0dG9uL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGluayB9IGZyb20gXCIuL0xpbmsvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdGFjayB9IGZyb20gXCIuL1N0YWNrL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHlwb2dyYXBoeSB9IGZyb20gXCIuL1R5cG9ncmFwaHkvaW5kZXguanNcIiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Box,Container,Divider,Grid,IconButton,Link,Stack,Typography!=!./node_modules/@mui/material/esm/index.js\n");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("clsx");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("react-cookie");;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("sweetalert2");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui","vendor-chunks/slick-carousel","vendor-chunks/react-toastify"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();