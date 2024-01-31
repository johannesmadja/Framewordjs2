// Typage génériques
function fusion<T>(a : T[], b : T[]) : T[] {
    return a.concat(b);
}

let c = fusion (["a", "b", "c"], ["d", "e"]);
console.log(c);
