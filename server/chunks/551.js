"use strict";
exports.id = 551;
exports.ids = [551];
exports.modules = {

/***/ 8551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CartContext),
/* harmony export */   G: () => (/* binding */ CartContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const { createContext , useState , useEffect  } = __webpack_require__(6689);
const CartContext = createContext({});
function CartContextProvider({ children  }) {
    const ls =  false ? 0 : null;
    const [cartProducts, setCartProducts] = useState([]);
    useEffect(()=>{
        if (cartProducts?.length > 0) {
            ls?.setItem("cart", JSON.stringify(cartProducts));
        }
    }, [
        cartProducts
    ]);
    useEffect(()=>{
        if (ls && ls.getItem("cart")) {
            setCartProducts(JSON.parse(ls.getItem("cart")));
        }
    }, []);
    function addProduct(productId) {
        setCartProducts((prev)=>[
                ...prev,
                productId
            ]);
    }
    function removeProduct(productId) {
        setCartProducts((prev)=>{
            const pos = prev.indexOf(productId);
            if (pos !== -1) {
                return prev.filter((value, index)=>index !== pos);
            }
            return prev;
        });
    }
    function clearCart() {
        setCartProducts([]);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartContext.Provider, {
        value: {
            cartProducts,
            setCartProducts,
            addProduct,
            removeProduct,
            clearCart
        },
        children: children
    });
}


/***/ })

};
;