webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/anwesha/Desktop/DMS3/components/LoginForm.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar useStyles = function useStyles(theme) {\n  return {\n    root: {\n      '& > *': {\n        margin: theme.spacing(1),\n        width: '25ch'\n      }\n    }\n  };\n};\n\nvar LoginForm = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(LoginForm, _React$Component);\n\n  var _super = _createSuper(LoginForm);\n\n  function LoginForm(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, LoginForm);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      username: \"\",\n      password: \"\"\n    };\n    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(LoginForm, [{\n    key: \"handleChange\",\n    value: function handleChange(event) {\n      this.setState({\n        username: event.target.value\n      });\n      console.log(this.state.username);\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(event) {\n      alert('A name was submitted: ' + this.state.value);\n      event.preventDefault();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var classes = this.props.classes;\n      return __jsx(\"form\", {\n        className: classes.root,\n        noValidate: true,\n        autoComplete: \"off\",\n        onSubmit: this.handleSubmit,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 7\n        }\n      }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        id: \"standard-basic\",\n        label: \"Standard\",\n        value: this.state.value,\n        onChange: this.handleChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 9\n        }\n      }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        id: \"standard-password-input\",\n        label: \"Password\",\n        type: \"password\",\n        value: this.state.value,\n        onChange: this.handleChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return LoginForm;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__[\"withStyles\"])(useStyles)(LoginForm));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcz8wMzQ4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aWR0aCIsIkxvZ2luRm9ybSIsInByb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NlcyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0U7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzVCQyxRQUFJLEVBQUU7QUFDSixlQUFTO0FBQ1BDLGNBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQUREO0FBRVBDLGFBQUssRUFBRTtBQUZBO0FBREw7QUFEc0IsR0FBWjtBQUFBLENBQWxCOztJQVNNQyxTOzs7OztBQUNGLHFCQUFZQyxLQUFaLEVBQ0E7QUFBQTs7QUFBQTs7QUFDSSw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBVztBQUNQQyxjQUFRLEVBQUMsRUFERjtBQUVQQyxjQUFRLEVBQUM7QUFGRixLQUFYO0FBSUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQix5R0FBcEI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLHlHQUFwQjtBQVBKO0FBUUM7Ozs7aUNBRVlFLEssRUFBTztBQUNsQixXQUFLQyxRQUFMLENBQWM7QUFBQ04sZ0JBQVEsRUFBRUssS0FBSyxDQUFDRSxNQUFOLENBQWFDO0FBQXhCLE9BQWQ7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS1gsS0FBTCxDQUFXQyxRQUF2QjtBQUNEOzs7aUNBRVlLLEssRUFBTztBQUNsQk0sV0FBSyxDQUFDLDJCQUEyQixLQUFLWixLQUFMLENBQVdTLEtBQXZDLENBQUw7QUFDQUgsV0FBSyxDQUFDTyxjQUFOO0FBQ0Q7Ozs2QkFLSztBQUFBLFVBR0RDLE9BSEMsR0FHVSxLQUFLZixLQUhmLENBR0RlLE9BSEM7QUFLUixhQUNFO0FBQU0saUJBQVMsRUFBRUEsT0FBTyxDQUFDcEIsSUFBekI7QUFBK0Isa0JBQVUsTUFBekM7QUFBMEMsb0JBQVksRUFBQyxLQUF2RDtBQUE2RCxnQkFBUSxFQUFFLEtBQUtXLFlBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLG1FQUFEO0FBQVcsVUFBRSxFQUFDLGdCQUFkO0FBQStCLGFBQUssRUFBQyxVQUFyQztBQUFnRCxhQUFLLEVBQUUsS0FBS0wsS0FBTCxDQUFXUyxLQUFsRTtBQUF5RSxnQkFBUSxFQUFFLEtBQUtOLFlBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFLE1BQUMsbUVBQUQ7QUFDSSxVQUFFLEVBQUMseUJBRFA7QUFFSSxhQUFLLEVBQUMsVUFGVjtBQUdJLFlBQUksRUFBQyxVQUhUO0FBSUksYUFBSyxFQUFFLEtBQUtILEtBQUwsQ0FBV1MsS0FKdEI7QUFJNkIsZ0JBQVEsRUFBRSxLQUFLTixZQUo1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FERjtBQVlHOzs7O0VBMUNtQlksNENBQUssQ0FBQ0MsUzs7QUE0Q2ZDLDBJQUFVLENBQUN6QixTQUFELENBQVYsQ0FBc0JNLFNBQXRCLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuICBpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbiAgaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuICBcbiAgY29uc3QgdXNlU3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICcmID4gKic6IHtcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgICB3aWR0aDogJzI1Y2gnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbiAgXG4gIGNsYXNzIExvZ2luRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICBjb25zdHJ1Y3Rvcihwcm9wcylcbiAgICAgIHtcbiAgICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICAgIHVzZXJuYW1lOlwiXCIsXG4gICAgICAgICAgICAgIHBhc3N3b3JkOlwiXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS51c2VybmFtZSk7XG4gICAgICB9XG4gICAgXG4gICAgICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgYWxlcnQoJ0EgbmFtZSB3YXMgc3VibWl0dGVkOiAnICsgdGhpcy5zdGF0ZS52YWx1ZSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cblxuXG5cbiAgICByZW5kZXIoKXtcbiAgXG4gICAgICBcbiAgICBjb25zdCB7Y2xhc3Nlc30gPSB0aGlzLnByb3BzO1xuICBcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPFRleHRGaWVsZCBpZD1cInN0YW5kYXJkLWJhc2ljXCIgbGFiZWw9XCJTdGFuZGFyZFwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1wYXNzd29yZC1pbnB1dFwiXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICBcbiAgICAgICAgICAvPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gICAgICB9XG4gIH1cbiAgZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyh1c2VTdHlsZXMpKExvZ2luRm9ybSlcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LoginForm.js\n");

/***/ })

})