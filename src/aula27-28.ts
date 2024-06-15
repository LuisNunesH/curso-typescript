interface curso{
    titulo: string;
    des: string;
    iniciarCurso(teste:string): void;
}

interface cursoProg extends curso{
    aulas: number;
    maxAlunos?: number;
}

interface cursoArtes extends curso{
    aulas: number;
    maxAlunos?: number;
}

let curso1: cursoProg;
let curso2: cursoProg;
let curso3: cursoArtes;

curso1 = {
    titulo: "Typesccript",
    des: "Curso de Typescript",
    aulas: 100,
    maxAlunos: 50,
    iniciarCurso(t:string){}
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