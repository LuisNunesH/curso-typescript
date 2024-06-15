interface curso{
    titulo: string;
    des: string;
    aulas: number;
    maxAlunos?: number;
}

let curso1: curso;
let curso2: curso;
let curso3: curso;

curso1 = {
    titulo: "Typesccript",
    des: "Curso de Typescript",
    aulas: 100,
    maxAlunos: 50
}

curso2 = {
    titulo: "Typesccript",
    des: "Curso de Typescript",
    aulas: 100,
    maxAlunos: 50
}

curso3 = {
    titulo: "Typesccript",
    des: "Curso de Typescript",
    aulas: 100
}

console.log(curso1)
console.log(curso2)
console.log(curso3)