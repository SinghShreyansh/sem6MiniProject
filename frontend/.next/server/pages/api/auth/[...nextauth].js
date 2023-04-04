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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./database/mongoConnect.js":
/*!**********************************!*\
  !*** ./database/mongoConnect.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongo = async ()=>{\n    try {\n        const { connection  } = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DB_URL);\n        if (connection.readyState == 1) {\n            return Promise.resolve(true);\n        }\n    } catch (error) {\n        return Promise.reject(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS9tb25nb0Nvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFlBQVksR0FBRyxVQUFZO0lBQy9CLElBQUk7UUFDRixNQUFNLEVBQUVDLFVBQVUsR0FBRSxHQUFHLE1BQU1GLHVEQUFnQixDQUFDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDO1FBRWpFLElBQUlKLFVBQVUsQ0FBQ0ssVUFBVSxJQUFJLENBQUMsRUFBRTtZQUM5QixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDO0lBQ0gsRUFBRSxPQUFPQyxLQUFLLEVBQUU7UUFDZCxPQUFPRixPQUFPLENBQUNHLE1BQU0sQ0FBQ0QsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZVQsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9kYXRhYmFzZS9tb25nb0Nvbm5lY3QuanM/ZTU3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBjb25uZWN0TW9uZ28gPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgY29ubmVjdGlvbiB9ID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5EQl9VUkwpO1xyXG5cclxuICAgIGlmIChjb25uZWN0aW9uLnJlYWR5U3RhdGUgPT0gMSkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RNb25nbztcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdE1vbmdvIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiREJfVVJMIiwicmVhZHlTdGF0ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZXJyb3IiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./database/mongoConnect.js\n");

/***/ }),

/***/ "(api)/./models/userSchema.js":
/*!******************************!*\
  !*** ./models/userSchema.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    username: String,\n    email: String,\n    password: String\n});\nconst Users = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.user || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"user\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlclNjaGVtYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFFakQsTUFBTUcsVUFBVSxHQUFHLElBQUlILDRDQUFNLENBQUM7SUFDNUJJLFFBQVEsRUFBRUMsTUFBTTtJQUNoQkMsS0FBSyxFQUFFRCxNQUFNO0lBQ2JFLFFBQVEsRUFBRUYsTUFBTTtDQUNqQixDQUFDO0FBRUYsTUFBTUcsS0FBSyxHQUFHTixpREFBVyxJQUFJRCwrQ0FBSyxDQUFDLE1BQU0sRUFBRUUsVUFBVSxDQUFDO0FBRXRELGlFQUFlSyxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL21vZGVscy91c2VyU2NoZW1hLmpzPzQ3ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgdXNlcm5hbWU6IFN0cmluZyxcclxuICBlbWFpbDogU3RyaW5nLFxyXG4gIHBhc3N3b3JkOiBTdHJpbmcsXHJcbn0pO1xyXG5cclxuY29uc3QgVXNlcnMgPSBtb2RlbHMudXNlciB8fCBtb2RlbChcInVzZXJcIiwgdXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VycztcclxuIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwidXNlclNjaGVtYSIsInVzZXJuYW1lIiwiU3RyaW5nIiwiZW1haWwiLCJwYXNzd29yZCIsIlVzZXJzIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/userSchema.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _database_mongoConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../database/mongoConnect */ \"(api)/./database/mongoConnect.js\");\n/* harmony import */ var _models_userSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/userSchema */ \"(api)/./models/userSchema.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            name: \"Credentials\",\n            async authorize (credentials, req) {\n                (0,_database_mongoConnect__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().catch((error)=>{\n                    error: \"Connection Failed...!\";\n                });\n                // check user existance\n                const result = await _models_userSchema__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                if (!result) {\n                    throw new Error(\"No user Found with Email Please Sign Up...!\");\n                }\n                // compare()\n                const checkPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_5__.compare)(credentials.password, result.password);\n                // incorrect password\n                if (!checkPassword || result.email !== credentials.email) {\n                    throw new Error(\"Username or Password doesn't match\");\n                }\n                return result;\n            }\n        }), \n    ],\n    pages: {\n        signIn: \"/auth/login\"\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBQ1U7QUFDUjtBQUNYO0FBQ1o7QUFFbkMsaUVBQWVBLGdEQUFRLENBQUM7SUFDdEJNLFNBQVMsRUFBRTtRQUNUTCxpRUFBYyxDQUFDO1lBQ2JNLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGFBQWE7U0FDeEMsQ0FBQztRQUNGVixzRUFBbUIsQ0FBQztZQUNsQlcsSUFBSSxFQUFFLGFBQWE7WUFDbkIsTUFBTUMsU0FBUyxFQUFDQyxXQUFXLEVBQUVDLEdBQUcsRUFBRTtnQkFDaENiLGtFQUFZLEVBQUUsQ0FBQ2MsS0FBSyxDQUFDLENBQUNDLEtBQUssR0FBSztvQkFDOUJBLEtBQUssRUFBRSx1QkFBdUIsQ0FBQztnQkFDakMsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsdUJBQXVCO2dCQUN2QixNQUFNQyxNQUFNLEdBQUcsTUFBTWYsa0VBQWEsQ0FBQztvQkFBRWlCLEtBQUssRUFBRU4sV0FBVyxDQUFDTSxLQUFLO2lCQUFFLENBQUM7Z0JBQ2hFLElBQUksQ0FBQ0YsTUFBTSxFQUFFO29CQUNYLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7Z0JBQ2pFLENBQUM7Z0JBRUQsWUFBWTtnQkFDWixNQUFNQyxhQUFhLEdBQUcsTUFBTWxCLGlEQUFPLENBQ2pDVSxXQUFXLENBQUNTLFFBQVEsRUFDcEJMLE1BQU0sQ0FBQ0ssUUFBUSxDQUNoQjtnQkFFRCxxQkFBcUI7Z0JBQ3JCLElBQUksQ0FBQ0QsYUFBYSxJQUFJSixNQUFNLENBQUNFLEtBQUssS0FBS04sV0FBVyxDQUFDTSxLQUFLLEVBQUU7b0JBQ3hELE1BQU0sSUFBSUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7Z0JBQ3hELENBQUM7Z0JBRUQsT0FBT0gsTUFBTSxDQUFDO1lBQ2hCLENBQUM7U0FDRixDQUFDO0tBQ0g7SUFDRE0sS0FBSyxFQUFFO1FBQ0xDLE1BQU0sRUFBRSxhQUFhO0tBQ3hCO0NBQ0EsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gXCIuLi8uLi8uLi9kYXRhYmFzZS9tb25nb0Nvbm5lY3RcIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvdXNlclNjaGVtYVwiO1xyXG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcImJjcnlwdGpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVCxcclxuICAgIH0pLFxyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcclxuICAgICAgICBjb25uZWN0TW9uZ28oKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGVycm9yOiBcIkNvbm5lY3Rpb24gRmFpbGVkLi4uIVwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB1c2VyIGV4aXN0YW5jZVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFVzZXJzLmZpbmRPbmUoeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgfSk7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHVzZXIgRm91bmQgd2l0aCBFbWFpbCBQbGVhc2UgU2lnbiBVcC4uLiFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb21wYXJlKClcclxuICAgICAgICBjb25zdCBjaGVja1Bhc3N3b3JkID0gYXdhaXQgY29tcGFyZShcclxuICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgcmVzdWx0LnBhc3N3b3JkXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gaW5jb3JyZWN0IHBhc3N3b3JkXHJcbiAgICAgICAgaWYgKCFjaGVja1Bhc3N3b3JkIHx8IHJlc3VsdC5lbWFpbCAhPT0gY3JlZGVudGlhbHMuZW1haWwpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXJuYW1lIG9yIFBhc3N3b3JkIGRvZXNuJ3QgbWF0Y2hcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiBcIi9hdXRoL2xvZ2luXCIsXHJcbn0sXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJjb25uZWN0TW9uZ28iLCJVc2VycyIsImNvbXBhcmUiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfU0VDUkVUIiwibmFtZSIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwicmVxIiwiY2F0Y2giLCJlcnJvciIsInJlc3VsdCIsImZpbmRPbmUiLCJlbWFpbCIsIkVycm9yIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwicGFnZXMiLCJzaWduSW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();