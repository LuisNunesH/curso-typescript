"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(n, ram, cpu) {
        this.nome = n;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        console.log("Computador criado");
    }
    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`CPU: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log('-------------------');
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
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
