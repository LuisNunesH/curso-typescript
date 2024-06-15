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

}


// Instanciar
const comp1 = new Computador("Rápido", 64, 10);
const comp2 = new Computador("Gamer", 32, 5);
const comp3 = new Computador("Caro", 128, 10);

console.log(comp1.nome);
console.log(comp2.nome);