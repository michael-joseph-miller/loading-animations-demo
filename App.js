"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _src = require("@michael-joseph-miller/loading-animations-react/src");

var _logo = _interopRequireDefault(require("./images/logo128.png"));

require("./App.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    id: "app",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      id: "grid",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
        id: "header",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          id: "header-img-left",
          className: "header-img",
          src: _logo.default,
          alt: ""
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          id: "header-title",
          children: "loader-animations-react"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          id: "header-img-right",
          className: "header-img",
          src: _logo.default,
          alt: ""
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
        id: "main",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          id: "dots-wrapper",
          className: "wrapper",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_src.Dots, {
            text: "Dots Loader",
            colors: ['red', 'white', 'blue']
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          id: "progress-bar-wrapper",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_src.ProgressBar, {
            borderColor: "red",
            sliderColor: "white",
            sliderBackground: "blue"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: "Progress Bar"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          id: "waves-wrapper",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_src.Waves, {
            backgroundColor: "navy",
            waveColor: "#f0f8ff"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: "Waves"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          id: "spinner-wrapper",
          className: "wrapper",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_src.Spinner, {
            color1: "blue",
            color2: "white",
            text: "Spinner"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          id: "minimal-spinner-wrapper",
          className: "wrapper",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_src.MinimalSpinner, {
            text: "Minimal Spinner",
            color: "blue"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          id: "trinity-spinner-wrapper",
          className: "wrapper>",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_src.TrinitySpinner, {
            color: "cyan",
            text: "Trinity Spinner"
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("footer", {
        id: "footer",
        children: ["Icons made by", /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: "https://www.freepik.com",
          title: "Freepik",
          children: "Freepik"
        }), ' ', "from", /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: "https://www.flaticon.com/",
          title: "Flaticon",
          children: "www.flaticon.com"
        })]
      })]
    })
  });
}

var _default = App;
exports.default = _default;