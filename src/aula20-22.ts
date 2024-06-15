class Conta{
    protected numero:number;
    protected titular:string;

    constructor(titular:string){
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }

    private gerarNumeroConta():number{
        return Math.floor(Math.random() * 100000) + 1;
    }

    info(){
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
        console.log('-------------')
    }
}

class ContaPF extends Conta{
    cpf: number;
    constructor(cpf:number, titular:string){
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF criada: ${this.titular}`)
    }
}

class ContaPJ extends Conta{
    cnpj: number;
    constructor(cnpj:number, titular:string){
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PF criada: ${this.titular}`)
    }
}

const cont1 = new ContaPF(111, "Luis");
const cont2 = new ContaPJ(222333, "Henrique");

// console.log(cont1.titular);
// console.log(cont1.numero);

cont1.info();