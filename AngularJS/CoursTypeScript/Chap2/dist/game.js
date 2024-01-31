"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = exports.Status = void 0;
// Etat du jeu
var Status;
(function (Status) {
    Status[Status["Winner"] = 0] = "Winner";
    Status[Status["Loser"] = 1] = "Loser";
    Status[Status["Progress"] = 2] = "Progress";
})(Status || (exports.Status = Status = {}));
class Game {
    constructor(_words) {
        this._words = _words;
        this._maxAttempts = 7; // définir le nombre de coups max en lecture seule
        this.init(_words);
    }
    /**
     * init : intialiser le jeu
     *
     * @param words
     */
    init(words) {
        this._word = words[Math.floor(Math.random() * words.length)].word;
        this._hiddenWord = words[Math.floor(Math.random() * words.length)].hide;
        this._message = `Voici un jeu de pendu vous devez devinez le mot caché en 7 coups au  plus, vous pouvez uniquement proposer un mot, certaines lettres du  mot à trouver sont affichées. Bonne chance mot : ${this._hiddenWord}`; // word.hide
        this._status = Status.Progress;
    }
    // getter et setter
    get status() { return this._status; }
    set status(status) { this._status = status; }
    get message() { return this._message; }
    // gestion de l'utilisateur : setter et getter
    get attemtps() { return this._attempts; }
    /**
    * isWord : test boolean si le mot est celui que l'on cherche ou non
    *
    * @param word
    */
    isWord(word) {
    }
    /**
     * show : affiche le mot caché à deviner
     */
    show() {
        return '...TODO';
    }
    /**
     * run: logique du jeu
     *
     * @param choice
     */
    run(choice) {
    }
    /**
     * final: affiche l'état du jeu à la fin
     */
    final() {
    }
}
exports.Game = Game;
