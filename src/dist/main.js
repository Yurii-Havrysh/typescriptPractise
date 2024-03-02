"use strict";
exports.__esModule = true;
var classes_1 = require("./classes");
var productList = new classes_1.ProductList();
//product1
var samsungImg = 'https://images.samsung.com/is/image/samsung/p6pim/pl/2401/gallery/pl-galaxy-s24-s928-sm-s928bztpeue-thumb-539515768';
var samsungDesc = "Size (Main_Display). 156.4mm (6.2\" full rectangle)  / \n152.3mm (6.0\" rounded corners) ; Resolution (Main Display). 2340 x 1080 (FHD+) ; Technology (Main Display).";
productList.addProduct(new classes_1.Product('Samsung S20', 1200, samsungImg, samsungDesc));
productList.showProduct(new classes_1.Product('Samsung S20', 1200, samsungImg, samsungDesc));
//product2
var huaweiImg = 'https://a.allegroimg.com/s512/11fa3f/c18b2cf44f18b3c0c44128a6a0b3/Smartfon-Huawei-P50-Pro-8-GB-256-GB-czarny';
var huaweiDesc = "Display Size 6.6 inches, OLED, up to 120 Hz refresh rate. Processor. Snapdragon 888 4G \u00B7 Memory. RAM + ROM \u00B7 \nRear Camera. 50 MP True-Chroma Camera (Color, f/1.8 aperture, OIS).";
productList.addProduct(new classes_1.Product('Huawei P50', 800, huaweiImg, huaweiDesc));
productList.showProduct(new classes_1.Product('Huawei P50', 800, huaweiImg, huaweiDesc));
//product3
var iphoneImg = "https://www.mediaexpert.pl/media/cache/resolve/gallery/images/\n58/5860372/Smartfon-APPLE-iPhone-15-Pro-Tytan-naturalny-1.jpg";
var iphoneDesc = "Apple iPhone 15 Pro smartphone. Announced Sep 2023. Features 6.1\u2033 display, Apple A17 Pro chipset, \n3274 mAh battery, 1024 GB storage, 8 GB RAM,";
productList.addProduct(new classes_1.Product('Iphone 15 Pro', 1400, iphoneImg, iphoneDesc));
productList.showProduct(new classes_1.Product('Iphone 15 Pro', 1400, iphoneImg, iphoneDesc));
