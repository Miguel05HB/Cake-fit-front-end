"use strict";
exports.id = 705;
exports.ids = [705];
exports.modules = {

/***/ 4705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ProductsGrid)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/Button.js + 1 modules
var Button = __webpack_require__(8316);
// EXTERNAL MODULE: ./components/icons/CartIcon.js
var CartIcon = __webpack_require__(8777);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/CartContext.js
var CartContext = __webpack_require__(8551);
;// CONCATENATED MODULE: ./components/ProductBox.js







const ProductWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-3cb8497b-0"
})``;
const WhiteBox = external_styled_components_default()((link_default())).withConfig({
    componentId: "sc-3cb8497b-1"
})`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;
const Title = external_styled_components_default()((link_default())).withConfig({
    componentId: "sc-3cb8497b-2"
})`
  font-weight: normal;
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`;
const ProductInfoBox = external_styled_components_default().div.withConfig({
    componentId: "sc-3cb8497b-3"
})`
  margin-top: 5px;
`;
const PriceRow = external_styled_components_default().div.withConfig({
    componentId: "sc-3cb8497b-4"
})`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;
const Price = external_styled_components_default().div.withConfig({
    componentId: "sc-3cb8497b-5"
})`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
  }
`;
function ProductBox({ _id , title , description , price , images  }) {
    const { addProduct  } = (0,external_react_.useContext)(CartContext/* CartContext */.A);
    const url = "/product/" + _id;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ProductWrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(WhiteBox, {
                href: url,
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: images?.[0],
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ProductInfoBox, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Title, {
                        href: url,
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(PriceRow, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Price, {
                                children: [
                                    "S/.",
                                    price
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(Button/* default */.C, {
                                block: true,
                                primary: true,
                                outline: true,
                                onClick: ()=>addProduct(_id),
                                children: "Agregar"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ProductsGrid.js



const StyledProductsGrid = external_styled_components_default().div.withConfig({
    componentId: "sc-19694e96-0"
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
function ProductsGrid({ products  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(StyledProductsGrid, {
        children: products?.length > 0 && products.map((product)=>/*#__PURE__*/ jsx_runtime.jsx(ProductBox, {
                ...product
            }, product._id))
    });
}


/***/ })

};
;