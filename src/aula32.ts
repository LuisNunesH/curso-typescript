namespace Veiculos{

    export class Carro{
        nome:string;
        motor:Motores.Motor;
        constructor(nome:string){
            this.nome = nome;
            this.motor = new Motores.Motor(100);
        }
    }

}

namespace Motores{

    class Turbo{

        pot:number;
        constructor(pot:number){
            this.pot = pot;
        }

    }

    export class Motor{
        pot:number;
        constructor(pot:number){
            this.pot = pot;

        }
    }

}

const carro1 = new Veiculos.Carro("Fusca");