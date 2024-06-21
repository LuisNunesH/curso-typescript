namespace Veiculos{
    enum Cores{"Preto", "Branco", "Vermelho", "Amarelo", "Azul", "Prata"}
    export class Carro{
        private nome:string;
        private motor:Motores.Motor;
        private cor:String
        constructor(nome:string, motor:Motores.Motor, cor:Cores){
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        public ligar(){
            this.motor.liga = true;
        }
        public desligar(){
            this.motor.liga = false;
        }
        get minhaCor(){
            return this.cor;
        }
        get meuNome(){
            return this.nome;
        }
        get estouLigado(){
            return (this.motor.liga?"Sim":"Não");
        }
        get minhaPotencia(){
            return this.motor.potencia;
        }
    }
    export class CarroEsportivo extends Carro{
        constructor(nome:string, cor:Cores){
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), 2);
        }
    }
    export class CarroPopular extends Carro{
        constructor(nome:string, cor:Cores){
            super(nome, new Motores.Motor(3, 100), 2);
        }
    }
}

namespace Motores{

    export class Turbo{

        private pot:number;
        constructor(pot:number){
            this.pot = pot;
        }
        get potencia(){
            return this.pot;
        }

    }

    export class Motor{
        private ligado:boolean;
        private cilindros:number;
        private pot:number;
        constructor(cilindros:number, pot:number, turbo?:Turbo){
            this.ligado = false;
            this.cilindros = cilindros;
            this.pot = pot + (turbo?turbo.potencia:0);
        }
        set liga(ligado:boolean){
            this.ligado = ligado;
        }
        get liga(){
            return this.ligado;
        }
        get potencia{
            return this.pot;
        }
    }

}

const carro1 = new Veiculos.CarroEsportivo("Raid", 2);
const carro2 = new Veiculos.CarroPopular("Nuss", 0);

console.log(carro1.meuNome);
console.log(carro1.minhaCor);
console.log(carro1.minhaPotencia);
console.log(carro1.estouLigado);