"use strict";
function f_teste(v, r) {
    return r;
}
console.log(f_teste(10, "teste"));
console.log(f_teste("teste", 10));
console.log(f_teste(true, false));
class C_Teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const ct1 = new C_Teste(10);
console.log(ct1.valor);
