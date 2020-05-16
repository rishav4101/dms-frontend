webpackHotUpdate("static/development/pages/Registration.js",{

/***/ "./components/RegisterForm.js":
/*!************************************!*\
  !*** ./components/RegisterForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/anwesha/Desktop/DMS3/components/RegisterForm.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar useStyles = function useStyles(theme) {\n  return {\n    root: {\n      '& > *': {\n        margin: theme.spacing(1),\n        width: '25ch'\n      }\n    }\n  };\n};\n\nvar RegistrationForm = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(RegistrationForm, _React$Component);\n\n  var _super = _createSuper(RegistrationForm);\n\n  function RegistrationForm(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, RegistrationForm);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      email: \"\",\n      password: \"\",\n      phone: \"\"\n    };\n    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(RegistrationForm, [{\n    key: \"handleChange\",\n    value: function handleChange(evt) {\n      var value = evt.target.value;\n      this.setState(_objectSpread(_objectSpread({}, this.state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, evt.target.name, value)));\n      console.log(this.state.email);\n      console.log(this.state.password);\n      console.log(this.state.phone);\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(event) {\n      //send to API\n      console.log(\"first step of data done\");\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var classes = this.props.classes;\n      return (//LATERR\n        __jsx(\"div\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 9\n          }\n        }, __jsx(\"form\", {\n          className: classes.root,\n          noValidate: true,\n          autoComplete: \"off\",\n          onSubmit: this.handleSubmit,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 18\n          }\n        }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          id: \"standard-basic\",\n          label: \"Email\",\n          value: this.state.email,\n          onChange: this.handleChange,\n          name: \"email\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 9\n          }\n        }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          id: \"standard-password-input\",\n          label: \"Password\",\n          type: \"password\",\n          name: \"password\",\n          value: this.state.password,\n          onChange: this.handleChange,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 9\n          }\n        }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          id: \"standard-basic\",\n          label: \"Phone No.\",\n          value: this.state.phone,\n          onChange: this.handleChange,\n          name: \"phone\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 11\n          }\n        })), __jsx(\"button\", {\n          onClick: this.handleSubmit,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 7\n          }\n        }, \"Submit\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {\n          href: \"/clinic\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 7\n          }\n        }, __jsx(\"button\", {\n          onClick: this.handleSubmit,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 29\n          }\n        }, \"Register as Clinic\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {\n          href: \"/hospital\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 7\n          }\n        }, __jsx(\"button\", {\n          onClick: this.handleSubmit,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 31\n          }\n        }, \"Register as Clinic\")))\n      );\n    }\n  }]);\n\n  return RegistrationForm;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"withStyles\"])(useStyles)(RegistrationForm)); //alert('A name was submitted: ' + this.state.value);\n// event.preventDefault();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlZ2lzdGVyRm9ybS5qcz9iM2I5Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aWR0aCIsIlJlZ2lzdHJhdGlvbkZvcm0iLCJwcm9wcyIsInN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsInBob25lIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImV2dCIsInZhbHVlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImV2ZW50IiwiY2xhc3NlcyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUM1QkMsUUFBSSxFQUFFO0FBQ0osZUFBUztBQUNQQyxjQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsQ0FERDtBQUVQQyxhQUFLLEVBQUU7QUFGQTtBQURMO0FBRHNCLEdBQVo7QUFBQSxDQUFsQjs7SUFTTUMsZ0I7Ozs7O0FBQ0YsNEJBQVlDLEtBQVosRUFDQTtBQUFBOztBQUFBOztBQUNJLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFXO0FBQ1BDLFdBQUssRUFBQyxFQURDO0FBRVBDLGNBQVEsRUFBQyxFQUZGO0FBR1BDLFdBQUssRUFBQztBQUhDLEtBQVg7QUFNQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLHlHQUFwQjtBQUVBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIseUdBQXBCO0FBVko7QUFXQzs7OztpQ0FFYUUsRyxFQUFLO0FBQ2pCLFVBQU1DLEtBQUssR0FBR0QsR0FBRyxDQUFDRSxNQUFKLENBQVdELEtBQXpCO0FBQ0EsV0FBS0UsUUFBTCxpQ0FDSyxLQUFLVixLQURWLHFHQUVHTyxHQUFHLENBQUNFLE1BQUosQ0FBV0UsSUFGZCxFQUVxQkgsS0FGckI7QUFJQUksYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS2IsS0FBTCxDQUFXQyxLQUF2QjtBQUNBVyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLYixLQUFMLENBQVdFLFFBQXZCO0FBQ0FVLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtiLEtBQUwsQ0FBV0csS0FBdkI7QUFHRDs7O2lDQUlZVyxLLEVBQU87QUFBQztBQUVuQkYsYUFBTyxDQUFDQyxHQUFSLENBQVkseUJBQVo7QUFDRDs7OzZCQUtLO0FBQUEsVUFHREUsT0FIQyxHQUdVLEtBQUtoQixLQUhmLENBR0RnQixPQUhDO0FBS1IsYUFBUTtBQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDUztBQUFNLG1CQUFTLEVBQUVBLE9BQU8sQ0FBQ3JCLElBQXpCO0FBQStCLG9CQUFVLE1BQXpDO0FBQTBDLHNCQUFZLEVBQUMsS0FBdkQ7QUFBNkQsa0JBQVEsRUFBRSxLQUFLWSxZQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ1QsTUFBQyxtRUFBRDtBQUFXLFlBQUUsRUFBQyxnQkFBZDtBQUNBLGVBQUssRUFBQyxPQUROO0FBRUEsZUFBSyxFQUFFLEtBQUtOLEtBQUwsQ0FBV0MsS0FGbEI7QUFHQSxrQkFBUSxFQUFFLEtBQUtHLFlBSGY7QUFJQSxjQUFJLEVBQUMsT0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFMsRUFNVCxNQUFDLG1FQUFEO0FBQ0ksWUFBRSxFQUFDLHlCQURQO0FBRUksZUFBSyxFQUFDLFVBRlY7QUFHSSxjQUFJLEVBQUMsVUFIVDtBQUlJLGNBQUksRUFBQyxVQUpUO0FBS0ksZUFBSyxFQUFFLEtBQUtKLEtBQUwsQ0FBV0UsUUFMdEI7QUFNSSxrQkFBUSxFQUFFLEtBQUtFLFlBTm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFOUyxFQWVQLE1BQUMsbUVBQUQ7QUFBVyxZQUFFLEVBQUMsZ0JBQWQ7QUFDRixlQUFLLEVBQUMsV0FESjtBQUVGLGVBQUssRUFBRSxLQUFLSixLQUFMLENBQVdHLEtBRmhCO0FBR0Ysa0JBQVEsRUFBRSxLQUFLQyxZQUhiO0FBSUYsY0FBSSxFQUFDLE9BSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQWZPLENBRFQsRUF1QkY7QUFBUSxpQkFBTyxFQUFFLEtBQUtFLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBdkJFLEVBd0JGLE1BQUMsaURBQUQ7QUFBTSxjQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXNCO0FBQVEsaUJBQU8sRUFBRSxLQUFLQSxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUF0QixDQXhCRSxFQXlCRixNQUFDLGlEQUFEO0FBQU0sY0FBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF3QjtBQUFRLGlCQUFPLEVBQUUsS0FBS0EsWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FBeEIsQ0F6QkU7QUFESjtBQThCRzs7OztFQXpFMEJVLDRDQUFLLENBQUNDLFM7O0FBMkV0QkMsMElBQVUsQ0FBQzFCLFNBQUQsQ0FBVixDQUFzQk0sZ0JBQXRCLENBQWYsRSxDQUNBO0FBQ0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlZ2lzdGVyRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuICBpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbiAgaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuICBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG4gIFxuICBjb25zdCB1c2VTdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgJyYgPiAqJzoge1xuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgIHdpZHRoOiAnMjVjaCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuICBcbiAgY2xhc3MgUmVnaXN0cmF0aW9uRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICBjb25zdHJ1Y3Rvcihwcm9wcylcbiAgICAgIHtcbiAgICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICAgIGVtYWlsOlwiXCIsXG4gICAgICAgICAgICAgIHBhc3N3b3JkOlwiXCIsXG4gICAgICAgICAgICAgIHBob25lOlwiXCJcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICB9XG5cbiAgICAgICBoYW5kbGVDaGFuZ2UoZXZ0KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICBbZXZ0LnRhcmdldC5uYW1lXTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZW1haWwpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBhc3N3b3JkKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5waG9uZSk7XG4gICAgICAgIFxuICAgICAgIFxuICAgICAgfVxuICAgICBcbiAgICAgIFxuICAgIFxuICAgICAgaGFuZGxlU3VibWl0KGV2ZW50KSB7Ly9zZW5kIHRvIEFQSVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3Qgc3RlcCBvZiBkYXRhIGRvbmVcIilcbiAgICAgIH1cblxuXG5cblxuICAgIHJlbmRlcigpe1xuICBcbiAgICAgIFxuICAgIGNvbnN0IHtjbGFzc2VzfSA9IHRoaXMucHJvcHM7XG4gIFxuICAgIHJldHVybiAoLy9MQVRFUlJcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPFRleHRGaWVsZCBpZD1cInN0YW5kYXJkLWJhc2ljXCIgXG4gICAgICAgIGxhYmVsPVwiRW1haWxcIiBcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IFxuICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IFxuICAgICAgICBuYW1lPVwiZW1haWxcIi8+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtcGFzc3dvcmQtaW5wdXRcIlxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dEZpZWxkIGlkPVwic3RhbmRhcmQtYmFzaWNcIiBcbiAgICAgICAgbGFiZWw9XCJQaG9uZSBOby5cIiBcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGhvbmV9IFxuICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IFxuICAgICAgICBuYW1lPVwicGhvbmVcIi8+XG4gICAgICAgICAgXG4gICAgICA8L2Zvcm0+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDxMaW5rIGhyZWY9Jy9jbGluaWMnID48YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5SZWdpc3RlciBhcyBDbGluaWM8L2J1dHRvbj48L0xpbms+XG4gICAgICA8TGluayBocmVmPScvaG9zcGl0YWwnID48YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5SZWdpc3RlciBhcyBDbGluaWM8L2J1dHRvbj48L0xpbms+XG4gICAgICA8L2Rpdj5cbiBcbiAgICApO1xuICAgICAgfVxuICB9XG4gIGV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXModXNlU3R5bGVzKShSZWdpc3RyYXRpb25Gb3JtKVxuICAvL2FsZXJ0KCdBIG5hbWUgd2FzIHN1Ym1pdHRlZDogJyArIHRoaXMuc3RhdGUudmFsdWUpO1xuIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RegisterForm.js\n");

/***/ })

})