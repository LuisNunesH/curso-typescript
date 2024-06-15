class Conta{
    numero:number;
    titular:string;

    constructor(numero:number, titular:string){
        this.numero = numero;
        this.titular = titular;
    }
}

class ContaPF extends Conta{

}

class ContaPJ extends Conta{

}

const cont1 = new ContaPF(123456789, "Luis");
const cont2 = new ContaPJ(987654321, "Henrique");

console.log(cont1.titular);