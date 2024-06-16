function f_teste<T, U>(v:T, r:U):U{
    return r;
}

console.log(f_teste<number, string>(10, "teste"));
console.log(f_teste<string, number>("teste", 10));
console.log(f_teste<boolean, boolean>(true, false));

class C_Teste<T>{
    public valor:T
    constructor(valor:T){
        this.valor = valor;
    }
}

const ct1 = new C_Teste<number>(10)

console.log(ct1.valor)