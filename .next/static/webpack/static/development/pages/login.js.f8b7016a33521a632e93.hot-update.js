webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/anwesha/Desktop/DMS3/components/LoginForm.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar useStyles = function useStyles(theme) {\n  return {\n    root: {\n      '& > *': {\n        margin: theme.spacing(1),\n        width: '25ch'\n      }\n    }\n  };\n};\n\nvar LoginForm = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(LoginForm, _React$Component);\n\n  var _super = _createSuper(LoginForm);\n\n  function LoginForm(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, LoginForm);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      username: \"\",\n      password: \"\"\n    };\n    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(LoginForm, [{\n    key: \"handleChange\",\n    value: function handleChange(evt) {\n      var value = evt.target.value;\n      this.setState(_objectSpread(_objectSpread({}, this.state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, evt.target.name, value)));\n      console.log(this.state.username);\n      console.log(this.state.password);\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(event) {\n      //LATERRRRR\n      alert('A name was submitted: ' + this.state.value);\n      event.preventDefault();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var classes = this.props.classes;\n      return (//LATERR\n        __jsx(\"form\", {\n          className: classes.root,\n          noValidate: true,\n          autoComplete: \"off\",\n          onSubmit: this.handleSubmit,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 7\n          }\n        }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          id: \"standard-basic\",\n          label: \"Standard\",\n          value: this.state.username,\n          onChange: this.handleChange,\n          name: \"username\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 9\n          }\n        }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          id: \"standard-password-input\",\n          label: \"Password\",\n          type: \"password\",\n          name: \"password\",\n          value: this.state.password,\n          onChange: this.handleChange,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 9\n          }\n        }))\n      );\n    }\n  }]);\n\n  return LoginForm;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"withStyles\"])(useStyles)(LoginForm));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcz8wMzQ4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aWR0aCIsIkxvZ2luRm9ybSIsInByb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImV2dCIsInZhbHVlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImV2ZW50IiwiYWxlcnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzZXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNFO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUM1QkMsUUFBSSxFQUFFO0FBQ0osZUFBUztBQUNQQyxjQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsQ0FERDtBQUVQQyxhQUFLLEVBQUU7QUFGQTtBQURMO0FBRHNCLEdBQVo7QUFBQSxDQUFsQjs7SUFTTUMsUzs7Ozs7QUFDRixxQkFBWUMsS0FBWixFQUNBO0FBQUE7O0FBQUE7O0FBQ0ksOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQVc7QUFDUEMsY0FBUSxFQUFDLEVBREY7QUFFUEMsY0FBUSxFQUFDO0FBRkYsS0FBWDtBQUlBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIseUdBQXBCO0FBRUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQix5R0FBcEI7QUFSSjtBQVNDOzs7O2lDQUVhRSxHLEVBQUs7QUFDakIsVUFBTUMsS0FBSyxHQUFHRCxHQUFHLENBQUNFLE1BQUosQ0FBV0QsS0FBekI7QUFDQSxXQUFLRSxRQUFMLGlDQUNLLEtBQUtULEtBRFYscUdBRUdNLEdBQUcsQ0FBQ0UsTUFBSixDQUFXRSxJQUZkLEVBRXFCSCxLQUZyQjtBQUlBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLWixLQUFMLENBQVdDLFFBQXZCO0FBQ0FVLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtaLEtBQUwsQ0FBV0UsUUFBdkI7QUFHRDs7O2lDQUlZVyxLLEVBQU87QUFBQztBQUNuQkMsV0FBSyxDQUFDLDJCQUEyQixLQUFLZCxLQUFMLENBQVdPLEtBQXZDLENBQUw7QUFDQU0sV0FBSyxDQUFDRSxjQUFOO0FBQ0Q7Ozs2QkFLSztBQUFBLFVBR0RDLE9BSEMsR0FHVSxLQUFLakIsS0FIZixDQUdEaUIsT0FIQztBQUtSLGFBQVE7QUFDTjtBQUFNLG1CQUFTLEVBQUVBLE9BQU8sQ0FBQ3RCLElBQXpCO0FBQStCLG9CQUFVLE1BQXpDO0FBQTBDLHNCQUFZLEVBQUMsS0FBdkQ7QUFBNkQsa0JBQVEsRUFBRSxLQUFLVyxZQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxtRUFBRDtBQUFXLFlBQUUsRUFBQyxnQkFBZDtBQUNBLGVBQUssRUFBQyxVQUROO0FBRUEsZUFBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV0MsUUFGbEI7QUFHQSxrQkFBUSxFQUFFLEtBQUtFLFlBSGY7QUFJQSxjQUFJLEVBQUMsVUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsRUFNRSxNQUFDLG1FQUFEO0FBQ0ksWUFBRSxFQUFDLHlCQURQO0FBRUksZUFBSyxFQUFDLFVBRlY7QUFHSSxjQUFJLEVBQUMsVUFIVDtBQUlJLGNBQUksRUFBQyxVQUpUO0FBS0ksZUFBSyxFQUFFLEtBQUtILEtBQUwsQ0FBV0UsUUFMdEI7QUFNSSxrQkFBUSxFQUFFLEtBQUtDLFlBTm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFORjtBQURGO0FBa0JHOzs7O0VBMURtQmMsNENBQUssQ0FBQ0MsUzs7QUE0RGZDLDBJQUFVLENBQUMzQixTQUFELENBQVYsQ0FBc0JNLFNBQXRCLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuICBpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbiAgaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuICBcbiAgY29uc3QgdXNlU3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICcmID4gKic6IHtcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgICB3aWR0aDogJzI1Y2gnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbiAgXG4gIGNsYXNzIExvZ2luRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICBjb25zdHJ1Y3Rvcihwcm9wcylcbiAgICAgIHtcbiAgICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICAgIHVzZXJuYW1lOlwiXCIsXG4gICAgICAgICAgICAgIHBhc3N3b3JkOlwiXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgIGhhbmRsZUNoYW5nZShldnQpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgIFtldnQudGFyZ2V0Lm5hbWVdOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS51c2VybmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucGFzc3dvcmQpO1xuICAgICAgICBcbiAgICAgICBcbiAgICAgIH1cbiAgICAgXG4gICAgICBcbiAgICBcbiAgICAgIGhhbmRsZVN1Ym1pdChldmVudCkgey8vTEFURVJSUlJSXG4gICAgICAgIGFsZXJ0KCdBIG5hbWUgd2FzIHN1Ym1pdHRlZDogJyArIHRoaXMuc3RhdGUudmFsdWUpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG5cblxuXG4gICAgcmVuZGVyKCl7XG4gIFxuICAgICAgXG4gICAgY29uc3Qge2NsYXNzZXN9ID0gdGhpcy5wcm9wcztcbiAgXG4gICAgcmV0dXJuICgvL0xBVEVSUlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPFRleHRGaWVsZCBpZD1cInN0YW5kYXJkLWJhc2ljXCIgXG4gICAgICAgIGxhYmVsPVwiU3RhbmRhcmRcIiBcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9IFxuICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IFxuICAgICAgICBuYW1lPVwidXNlcm5hbWVcIi8+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtcGFzc3dvcmQtaW5wdXRcIlxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgXG4gICAgICAgICAgLz5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICAgICAgfVxuICB9XG4gIGV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXModXNlU3R5bGVzKShMb2dpbkZvcm0pXG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LoginForm.js\n");

/***/ })

})