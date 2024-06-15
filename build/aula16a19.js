"use strict";
class Computador {
    id;
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
        this.id = 0;
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
    upgradeRam(qtdRAM) {
        if (qtdRAM >= 0 && qtdRAM <= 128) {
            this.ram = qtdRAM;
        }
        else {
            console.log(`Quantidade ${qtdRAM} para o computador ${this.nome}não é permitido`);
        }
    }
}
// Instanciar
const comp1 = new Computador("Rápido", 64, 10);
const comp2 = new Computador("Gamer", 32, 5);
const comp3 = new Computador("Caro", 128, 10);
comp1.ligar();
comp1.upgradeRam(256);
comp1.info();
comp2.info();
comp3.info();
