"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Source
 * @author : Vous
 */
const data_1 = require("../data");
const game_1 = require("../game");
const process = __importStar(require("process")); // Typage de process pour la gestion des flux
/**
 * Bootstrap
 */
process.stdin.setEncoding('utf8'); // Définit l'encodage des caractères dans le flux de la console.
let game = new game_1.Game(data_1.MockWords); // Initialisation du jeu
//2). Le traitement des entrées se fait ici
process.stdin.on('data', (data) => {
    game.run(data.toString().trim()); // logique du jeu
    // écrivez ici le code nécessaire pour faire fonctionner le jeu
    console.log("message");
    process.stdout.write('> ');
});
// 1.) Au début ce code s'exécute puis après tout se passe dans stdin.on('data')
console.log(game.message);
process.stdout.write('> ');
