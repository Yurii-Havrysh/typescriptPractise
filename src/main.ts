import { Product, ProductList } from "./classes"

let productList = new ProductList();
//product1
let samsungImg = 'https://images.samsung.com/is/image/samsung/p6pim/pl/2401/gallery/pl-galaxy-s24-s928-sm-s928bztpeue-thumb-539515768';
let samsungDesc = `Size (Main_Display). 156.4mm (6.2" full rectangle)  / 
152.3mm (6.0" rounded corners) ; Resolution (Main Display). 2340 x 1080 (FHD+) ; Technology (Main Display).`;
productList.addProduct(new Product('Samsung S20', 1200, samsungImg, samsungDesc));
productList.showProduct(new Product('Samsung S20', 1200, samsungImg, samsungDesc));
//product2
let huaweiImg = 'https://a.allegroimg.com/s512/11fa3f/c18b2cf44f18b3c0c44128a6a0b3/Smartfon-Huawei-P50-Pro-8-GB-256-GB-czarny';
let huaweiDesc = `Display Size 6.6 inches, OLED, up to 120 Hz refresh rate. Processor. Snapdragon 888 4G · Memory. RAM + ROM · 
Rear Camera. 50 MP True-Chroma Camera (Color, f/1.8 aperture, OIS).`;
productList.addProduct(new Product('Huawei P50', 800, huaweiImg, huaweiDesc));
productList.showProduct(new Product('Huawei P50', 800, huaweiImg, huaweiDesc));
//product3
let iphoneImg = `https://www.mediaexpert.pl/media/cache/resolve/gallery/images/
58/5860372/Smartfon-APPLE-iPhone-15-Pro-Tytan-naturalny-1.jpg`;
let iphoneDesc = `Apple iPhone 15 Pro smartphone. Announced Sep 2023. Features 6.1″ display, Apple A17 Pro chipset, 
3274 mAh battery, 1024 GB storage, 8 GB RAM,`;
productList.addProduct(new Product('Iphone 15 Pro', 1400, iphoneImg, iphoneDesc));
productList.showProduct(new Product('Iphone 15 Pro', 1400, iphoneImg, iphoneDesc));
