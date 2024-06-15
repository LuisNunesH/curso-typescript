class Computador {
    nome: string;
    ram: number;
    cpu: number;
    ligado: boolean;

    constructor(n:string, ram:number, cpu:number){
        this.nome = n;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        console.log("Computador criado");        
    }

    info():void{
        console.log(`Nome: ${this.nome}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`CPU: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log('-------------------');
    }

    ligar():void{
        this.ligado = true;
    }

    desligar():void{     
        this.ligado = false;
    }

}


// Instanciar
const comp1 = new Computador("Rápido", 64, 10);
const comp2 = new Computador("Gamer", 32, 5);
const comp3 = new Computador("Caro", 128, 10);

comp1.ligar();

comp1.info();
comp2.info();
comp3.info();