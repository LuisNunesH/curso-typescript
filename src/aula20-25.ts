class Conta{
    protected numero:number;
    protected titular:string;
    protected saldoconta:number;

    constructor(titular:string){
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoconta = 0;
    }

    private gerarNumeroConta():number{
        return Math.floor(Math.random() * 100000) + 1;
    }

    protected info(){
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
    }

    private get saldo():number{
        return this.saldoconta;
    }

    private set saldo(saldoconta:number){
        this.saldoconta = saldoconta;
    }

    protected deposito(valor:number){
        if(valor < 0){
            console.log(`Valor inválido`)
            return
        }
        this.saldoconta += valor;
    }

    protected saque(valor:number){
        if(valor < 0){
            console.log(`Valor inválido`)
            return
        }
        if(valor <= this.saldoconta){
            this.saldoconta -= valor;
        } else{
            console.log(`Saldo insuficiente`)
        }
    }
}

class ContaPF extends Conta{
    cpf: number;
    constructor(cpf:number, titular:string){
        super(titular);
        this.cpf = cpf;
    }
    info(){
        console.log("Tipo.....:PF")
        super.info();
        console.log(`CPF.....: ${this.cpf}`)
        console.log('-------------')
    }
    deposito(valor:number){
        if(valor > 1000){
            console.log(`Valor de depósito muito grande para este tipo de conta`)
        } else{
            super.deposito(valor);
        }
    }
    public saque(valor:number){
        if(valor > 1000){
            console.log(`Valor de saque muito grande para este tipo de conta`)
        } else{
            super.saque(valor)
        }
    }
}

class ContaPJ extends Conta{
    cnpj: number;
    constructor(cnpj:number, titular:string){
        super(titular);
        this.cnpj = cnpj;
    }
    info(){
        console.log("Tipo.....:PJ")
        super.info();
        console.log(`CNPJ.....: ${this.cnpj}`)
        console.log('-------------')
    }
    deposito(valor:number){
        if(valor > 10000){
            console.log(`Valor de depósito muito grande para este tipo de conta`)
        } else{
            super.deposito(valor);
        }
    }
    public saque(valor:number){
        if(valor > 10000){
            console.log(`Valor de saque muito grande para este tipo de conta`)
        } else{
            super.saque(valor)
        }
    }
}

const cont1 = new ContaPF(111, "Luis");
const cont2 = new ContaPJ(222333, "Henrique");

// console.log(cont1.titular);
// console.log(cont1.numero);

cont1.deposito(999);
cont1.info();
cont2.info();
cont2.deposito(1500);
cont1.saque(300);
cont1.saldo = 233;
console.log(cont1.saldo);