"use strict";
function logar(user, passs) {
    console.log(`User..: ${user}`);
    console.log(`Pass..: ${passs}`);
}
logar('Luis', '123');
function soma2(n1, n2) {
    let r = n1 + n2;
    return r;
}
let n_res = soma2(10, 15);
let s_res = soma2(2, 8).toString();
console.log(n_res);
