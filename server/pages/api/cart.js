"use strict";
(() => {
var exports = {};
exports.id = 579;
exports.ids = [579];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

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

/***/ 2311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handle)
/* harmony export */ });
/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5946);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8721);


async function handle(req, res) {
    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__/* .mongooseConnect */ .I)();
    const ids = req.body.ids;
    res.json(await _models_Product__WEBPACK_IMPORTED_MODULE_1__/* .Product */ .x.find({
        _id: ids
    }));
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2311));
module.exports = __webpack_exports__;

})();