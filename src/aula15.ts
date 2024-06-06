function fsoma(...n:number[]){
    let s:number = 0;
    for(let en of n){
        s += en;
    }
    return s;
}

console.log(fsoma(10, 20, 30, 40, 100, 700, 100))