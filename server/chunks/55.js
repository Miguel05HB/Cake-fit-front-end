"use strict";
exports.id = 55;
exports.ids = [55];
exports.modules = {

/***/ 8316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ButtonStyle),
  C: () => (/* binding */ Button)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./lib/colors.js
const primary = "#0D3D29";

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Button.js



const ButtonStyle = external_styled_components_.css`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  svg {
    height: 16px;
    margin-right: 5px;
  }
  ${(props)=>props.block && external_styled_components_.css`
      display: block;
      width: 100%;
    `}
  ${(props)=>props.white && !props.outline && external_styled_components_.css`
      background-color: #fff;
      color: #000;
    `}
  ${(props)=>props.white && props.outline && external_styled_components_.css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
    `}
    ${(props)=>props.black && !props.outline && external_styled_components_.css`
      background-color: #000;
      color: #fff;
    `}
  ${(props)=>props.black && props.outline && external_styled_components_.css`
      background-color: transparent;
      color: #000;
      border: 1px solid #000;
    `}
  ${(props)=>props.primary && !props.outline && external_styled_components_.css`
      background-color: ${primary};
      border: 1px solid ${primary};
      color: #fff;
    `}
    ${(props)=>props.primary && props.outline && external_styled_components_.css`
      background-color: transparent;
      border: 1px solid ${primary};
      color: ${primary};
    `}
  ${(props)=>props.size === "l" && external_styled_components_.css`
      font-size: 1.2rem;
      padding: 10px 20px;
      svg {
        height: 20px;
      }
    `}
`;
const StyledButton = external_styled_components_default().button.withConfig({
    componentId: "sc-eff34fd6-0"
})`
  ${ButtonStyle}
`;
function Button({ children , ...rest }) {
    return /*#__PURE__*/ jsx_runtime.jsx(StyledButton, {
        ...rest,
        children: children
    });
}


/***/ }),

/***/ 2758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Center)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-51616b49-0"
})`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;
function Center({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledDiv, {
        children: children
    });
}


/***/ }),

/***/ 8899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Header)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/Center.js
var Center = __webpack_require__(2758);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/CartContext.js
var CartContext = __webpack_require__(8551);
;// CONCATENATED MODULE: ./components/icons/Bars.js

function BarsIcon({ className ="w-6 h-6"  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        })
    });
}

;// CONCATENATED MODULE: ./components/Header.js







const StyledHeader = external_styled_components_default().header.withConfig({
    componentId: "sc-3e2489b9-0"
})`
  background-color: #222;
`;
const Logo = external_styled_components_default()((link_default())).withConfig({
    componentId: "sc-3e2489b9-1"
})`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;
const Wrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-3e2489b9-2"
})`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = external_styled_components_default().nav.withConfig({
    componentId: "sc-3e2489b9-3"
})`
  ${(props)=>props.mobileNavActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = external_styled_components_default()((link_default())).withConfig({
    componentId: "sc-3e2489b9-4"
})`
  display: block;
  color: #aaa;
  text-decoration: none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
const NavButton = external_styled_components_default().button.withConfig({
    componentId: "sc-3e2489b9-5"
})`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
function Header() {
    const { cartProducts  } = (0,external_react_.useContext)(CartContext/* CartContext */.A);
    const [mobileNavActive, setMobileNavActive] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime.jsx(StyledHeader, {
        children: /*#__PURE__*/ jsx_runtime.jsx(Center/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Wrapper, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Logo, {
                        href: "/",
                        children: "Cake Fit"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(StyledNav, {
                        mobileNavActive: mobileNavActive,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(NavLink, {
                                href: "/",
                                children: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(NavLink, {
                                href: "/products",
                                children: "Productos"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(NavLink, {
                                href: "/categories",
                                children: "Categorias"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(NavLink, {
                                href: "/account",
                                children: "Cuenta"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(NavLink, {
                                href: "/cart",
                                children: [
                                    "Carrito (",
                                    cartProducts.length,
                                    ")"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(NavButton, {
                        onClick: ()=>setMobileNavActive((prev)=>!prev),
                        children: /*#__PURE__*/ jsx_runtime.jsx(BarsIcon, {})
                    })
                ]
            })
        })
    });
}


/***/ })

};
;