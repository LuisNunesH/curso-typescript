class Computador {
    nome: string = "Computador 1";
    ram: number = 0;
    cpu: number = 0;
    ligado: boolean = false;
}

const comp1 = new Computador();
const comp2 = new Computador();
const comp3 = new Computador();

comp1.nome = "Rapidão";
comp2.nome = "Carão";
comp3.nome = "Gamer";

console.log(comp1.nome);
console.log(comp2.nome);