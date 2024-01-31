
// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier 
import { Product } from "./Product";
import { MockDetails, Details, Delivery, MockDelivery } from "./data/MockProducts";

// pour extraire uniquement les produits dont l'option delivery est "special"
let products : Array<Product<Details, Delivery>> = [];

//  Récupération des détails
MockDetails.forEach((detail) => {

    let detailId = detail.id;
    let mokeDeliver : any = MockDelivery.find((eachDeliver) => eachDeliver.id == detailId);

    products.push(new Product<Details, Delivery> (detail, mokeDeliver.delivery));
});

console.log(products);

let product = products.filter((prod) => prod.option = Delivery.Special)

console.log("--------- Classe filtrer ----------");
console.log(product);

