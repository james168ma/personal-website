webpackHotUpdate("static/development/pages/subpages/[id].js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"siteTitle\", function() { return siteTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _navItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navItem */ \"./components/navItem.js\");\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.module.css */ \"./components/layout.module.css\");\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/home/james/Documents/programs/james168ma.github.io/components/layout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar name = 'James';\nvar siteTitle = 'james168ma';\nfunction Layout(_ref) {\n  var _this = this;\n\n  var name = _ref.name,\n      ids = _ref.ids,\n      children = _ref.children,\n      home = _ref.home;\n  return __jsx(\"div\", {\n    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  })), __jsx(\"header\", {\n    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, home ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.heading2Xl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, name)) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h2\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingLg,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.colorInherit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, name))))), __jsx(\"nav\", {\n    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navbar,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navbarNav,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(_navItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    link: \"/\",\n    text: \"Home\",\n    selected: home,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }), \"  /*edit this later*/\", ids.map(function (id) {\n    return __jsx(_navItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      link: \"/subpages/\" + id,\n      text: id,\n      selected: name === id,\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 15\n      }\n    });\n  }))), __jsx(\"main\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, children), !home && __jsx(\"div\", {\n    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.backToHome,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, \"\\u2190 Back to home\"))));\n}\n_c = Layout;\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC5qcz8wOWE3Il0sIm5hbWVzIjpbIm5hbWUiLCJzaXRlVGl0bGUiLCJMYXlvdXQiLCJpZHMiLCJjaGlsZHJlbiIsImhvbWUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJoZWFkZXIiLCJ1dGlsU3R5bGVzIiwiaGVhZGluZzJYbCIsImhlYWRpbmdMZyIsImNvbG9ySW5oZXJpdCIsIm5hdmJhciIsIm5hdmJhck5hdiIsIm1hcCIsImlkIiwiYmFja1RvSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLE9BQWI7QUFDTyxJQUFNQyxTQUFTLEdBQUcsWUFBbEI7QUFFUSxTQUFTQyxNQUFULE9BQStDO0FBQUE7O0FBQUEsTUFBN0JGLElBQTZCLFFBQTdCQSxJQUE2QjtBQUFBLE1BQXZCRyxHQUF1QixRQUF2QkEsR0FBdUI7QUFBQSxNQUFsQkMsUUFBa0IsUUFBbEJBLFFBQWtCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQzVELFNBQ0U7QUFBSyxhQUFTLEVBQUVDLHlEQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQVEsYUFBUyxFQUFFRCx5REFBTSxDQUFDRSxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILElBQUksR0FDSCxtRUFDRTtBQUFJLGFBQVMsRUFBRUksK0RBQVUsQ0FBQ0MsVUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1Q1YsSUFBdkMsQ0FERixDQURHLEdBS0gsbUVBQ0U7QUFBSSxhQUFTLEVBQUVTLCtEQUFVLENBQUNFLFNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFRiwrREFBVSxDQUFDRyxZQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdDWixJQUF4QyxDQURGLENBREYsQ0FERixDQU5KLENBSkYsRUFvQkU7QUFBSyxhQUFTLEVBQUVNLHlEQUFNLENBQUNPLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRVAseURBQU0sQ0FBQ1EsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBUyxRQUFJLEVBQUMsR0FBZDtBQUFrQixRQUFJLEVBQUMsTUFBdkI7QUFBOEIsWUFBUSxFQUFFVCxJQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsMkJBRUdGLEdBQUcsQ0FBQ1ksR0FBSixDQUFRLFVBQUFDLEVBQUUsRUFBSTtBQUNiLFdBQ0UsTUFBQyxnREFBRDtBQUFTLFVBQUksRUFBRSxlQUFlQSxFQUE5QjtBQUFrQyxVQUFJLEVBQUVBLEVBQXhDO0FBQTRDLGNBQVEsRUFBRWhCLElBQUksS0FBS2dCLEVBQS9EO0FBQW1FLFNBQUcsRUFBRUEsRUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBR0QsR0FKQSxDQUZILENBREYsQ0FwQkYsRUErQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPWixRQUFQLENBL0JGLEVBZ0NHLENBQUNDLElBQUQsSUFDQztBQUFLLGFBQVMsRUFBRUMseURBQU0sQ0FBQ1csVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixDQURGLENBakNKLENBREY7QUEwQ0Q7S0EzQ3VCZixNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTmF2SXRlbSBmcm9tICcuL25hdkl0ZW0nXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGF5b3V0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcblxuY29uc3QgbmFtZSA9ICdKYW1lcydcbmV4cG9ydCBjb25zdCBzaXRlVGl0bGUgPSAnamFtZXMxNjhtYSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgbmFtZSwgaWRzLCBjaGlsZHJlbiwgaG9tZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAge2hvbWUgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZzJYbH0+e25hbWV9PC9oMT5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jb2xvckluaGVyaXR9PntuYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJOYXZ9PlxuICAgICAgICAgIDxOYXZJdGVtIGxpbms9XCIvXCIgdGV4dD1cIkhvbWVcIiBzZWxlY3RlZD17aG9tZX0vPiAgLyplZGl0IHRoaXMgbGF0ZXIqL1xuICAgICAgICAgIHtpZHMubWFwKGlkID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxOYXZJdGVtIGxpbms9e1wiL3N1YnBhZ2VzL1wiICsgaWR9IHRleHQ9e2lkfSBzZWxlY3RlZD17bmFtZSA9PT0gaWR9IGtleT17aWR9Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgeyFob21lICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrVG9Ib21lfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGE+4oaQIEJhY2sgdG8gaG9tZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ })

})