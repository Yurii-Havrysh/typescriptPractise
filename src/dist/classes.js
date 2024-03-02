"use strict";
exports.__esModule = true;
exports.ProductList = exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price, image, description) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
    }
    return Product;
}());
exports.Product = Product;
var ProductList = /** @class */ (function () {
    function ProductList() {
        this.products = [];
    }
    ProductList.prototype.addProduct = function (product) {
        console.log(this.products);
        this.products.push(product);
    };
    ProductList.prototype.showProduct = function (product) {
        var productDiv = document.createElement('div');
        var name = document.createElement('h2');
        name.append(product.name);
        var image = document.createElement('img');
        image.style.maxWidth = "350px";
        image.src = product.image;
        image.append(product.image);
        var price = document.createElement('p');
        price.append(product.price + '$');
        var description = document.createElement('p');
        description.append(product.description);
        productDiv.append(name, image, price, description);
        document.body.append(productDiv);
    };
    return ProductList;
}());
exports.ProductList = ProductList;
