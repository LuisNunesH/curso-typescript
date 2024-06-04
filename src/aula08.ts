let dados = {
    nome: "Luis",
    idade: 21,
    status: "A",
    ola: () => {
        console.log("Teste");
    },
    info: (p:string) => {
        console.log(p);
    }
}

dados.nome = "Luis Henrique";

console.log(typeof(dados));
console.log(dados.nome);

dados.ola();
dados.info(dados.nome);