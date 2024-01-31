"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier 
const Product_1 = require("./Product");
const MockProducts_1 = require("./data/MockProducts");
// pour extraire uniquement les produits dont l'option delivery est "special"
let products = [];
//  Récupération des détails
MockProducts_1.MockDetails.forEach((detail) => {
    let detailId = detail.id;
    let mokeDeliver = MockProducts_1.MockDelivery.find((eachDeliver) => eachDeliver.id == detailId);
    products.push(new Product_1.Product(detail, mokeDeliver.delivery));
});
console.log(products);
let product = products.filter((prod) => prod.option = MockProducts_1.Delivery.Special);
console.log("--------- Classe filtrer ----------");
console.log(product);
