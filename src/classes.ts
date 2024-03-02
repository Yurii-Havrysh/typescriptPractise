import { ProductInterface, ProductListInterface } from "./interfaces";

class Product implements ProductInterface{
    public name: string;
    public price: number;
    public image: string;
    public description: string;

    constructor(name:string, price:number, image:string, description:string) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
    }
}

class ProductList implements ProductListInterface{
    products :Product[] = [];

    addProduct(product: Product) {
        console.log(this.products);
        
        this.products.push(product);
    }

    showProduct(product: Product) {
        const productDiv = document.createElement('div');
        const name = document.createElement('h2');
        name.append(product.name);
        const image = document.createElement('img');
        image.style.maxWidth = "350px"
        image.src = product.image;
        image.append(product.image);
        const price = document.createElement('p');
        price.append(product.price + '$');
        const description = document.createElement('p');
        description.append(product.description) 
        productDiv.append(name, image, price, description);
        document.body.append(productDiv);
    }
}

export {Product, ProductList}
