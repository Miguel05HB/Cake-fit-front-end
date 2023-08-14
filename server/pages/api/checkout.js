"use strict";
(() => {
var exports = {};
exports.id = 756;
exports.ids = [756];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 5946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ mongooseConnect)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

function mongooseConnect() {
    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 1) {
        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();
    } else {
        const uri = process.env.MONGODB_URI;
        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);
    }
}


/***/ }),

/***/ 3632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ Order)
/* harmony export */ });
const { Schema , models , model  } = __webpack_require__(1185);
const OrderSchema = new Schema({
    line_items: Object,
    name: String,
    email: String,
    city: String,
    postalCode: String,
    streetAddress: String,
    paid: Boolean
}, {
    timestamps: true
});
const Order = models?.Order || model("Order", OrderSchema);


/***/ }),

/***/ 8721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    images: [
        {
            type: String
        }
    ],
    category: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types).ObjectId,
        ref: "Category"
    },
    properties: {
        type: Object
    }
}, {
    timestamps: true
});
const Product = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Product || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Product", ProductSchema);


/***/ }),

/***/ 6040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5946);
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3632);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8721);



const stripe = __webpack_require__(8174)(process.env.STRIPE_SK);
async function handler(req, res) {
    if (req.method !== "POST") {
        res.json("Deber\xeda ser una solicitud de publicaci\xf3n");
        return;
    }
    const { name , email , city , postalCode , streetAddress , cartProducts  } = req.body;
    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__/* .mongooseConnect */ .I)();
    const productsIds = cartProducts;
    const uniqueIds = [
        ...new Set(productsIds)
    ];
    const productsInfos = await _models_Product__WEBPACK_IMPORTED_MODULE_2__/* .Product */ .x.find({
        _id: uniqueIds
    });
    let line_items = [];
    for (const productId of uniqueIds){
        const productInfo = productsInfos.find((p)=>p._id.toString() === productId);
        const quantity = productsIds.filter((id)=>id === productId)?.length || 0;
        if (quantity > 0 && productInfo) {
            line_items.push({
                quantity,
                price_data: {
                    currency: "PEN",
                    product_data: {
                        name: productInfo.title
                    },
                    unit_amount: quantity * productInfo.price * 100
                }
            });
        }
    }
    const orderDoc = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* .Order */ .K.create({
        line_items,
        name,
        email,
        city,
        postalCode,
        streetAddress,
        paid: false
    });
    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        customer_email: email,
        success_url: process.env.PUBLIC_URL + "/cart?success=1",
        cancel_url: process.env.PUBLIC_URL + "/cart?canceled=1",
        metadata: {
            orderId: orderDoc._id.toString(),
            test: "Ok"
        }
    });
    res.json({
        url: session.url
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6040));
module.exports = __webpack_exports__;

})();