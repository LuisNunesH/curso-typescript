// NULL - UNDEFINED - UNKNOWN

// NULL - Tipo Nulo
// UNDEFINED - Indefinido
// UNKNOWN - Desconhecido

let vnome:string|null;
vnome = "Luis";
console.log(vnome);

let vnome2:any;
console.log(vnome2);

let vnome3:unknown = vnome; // unknown só pode ser atribuído em tipos unknown ou any
let vnum:any = vnome3;
console.log(vnum);