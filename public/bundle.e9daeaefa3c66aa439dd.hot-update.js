webpackHotUpdate("bundle",{

/***/ "./src/client/App/App.jsx":
/*!********************************!*\
  !*** ./src/client/App/App.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst Axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nconst styles = __webpack_require__(/*! ./App.scss */ \"./src/client/App/App.scss\");\nconst Current = __webpack_require__(/*! ../components/Current/Current */ \"./src/client/components/Current/Current.jsx\");\nconst Header = __webpack_require__(/*! ../components/Header/Header */ \"./src/client/components/Header/Header.jsx\");\nconst SelectCity = __webpack_require__(/*! ../components/SelectCity/SelectCity */ \"./src/client/components/SelectCity/SelectCity.jsx\");\n\nclass App extends React.Component {\n    constructor(...args) {\n        var _temp;\n\n        return _temp = super(...args), this.state = Object.assign({}, this.props), _temp;\n    }\n\n    // componentDidMount() {\n    //     Axios.get('https://jsonplaceholder.typicode.com/posts').then(response => this.setState({ data: response.data }))\n    // }\n\n    render() {\n        const { cities } = this.state;\n        return React.createElement(\n            'div',\n            { className: styles.App },\n            React.createElement(Header, null),\n            React.createElement(SelectCity, { cities: cities })\n        );\n    }\n}\n\nmodule.exports = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L0FwcC9BcHAuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jbGllbnQvQXBwL0FwcC5qc3g/NmQ0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JylcbmNvbnN0IEF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0FwcC5zY3NzJylcbmNvbnN0IEN1cnJlbnQgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL0N1cnJlbnQvQ3VycmVudCcpXG5jb25zdCBIZWFkZXIgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInKVxuY29uc3QgU2VsZWN0Q2l0eSA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvU2VsZWN0Q2l0eS9TZWxlY3RDaXR5JylcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5wcm9wc1xuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vICAgICBBeGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHJlc3BvbnNlLmRhdGEgfSkpXG4gICAgLy8gfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNpdGllcyB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHB9PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8U2VsZWN0Q2l0eSBjaXRpZXM9e2NpdGllc30vPlxuICAgICAgICAgICAgICAgIHsvKiA8Q3VycmVudCBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IC8+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwXG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFsQkE7QUFDQTtBQW9CQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/App/App.jsx\n");

/***/ })

})