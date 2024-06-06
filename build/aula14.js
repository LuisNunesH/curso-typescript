"use strict";
const teste = (txt) => {
    console.log(txt);
};
const fsoma2 = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
teste("curso");
teste("curso typescript");
teste("curso 2024");
teste();
let numer = [10, 20, 30, 40];
console.log(fsoma2(numer));
