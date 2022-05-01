// Var

var comprimento = 7;
var altura = 5;

var area = comprimento * altura;

console.log(area)


//Let

let comprimentoLet = 7;
let alturaLet = 5;

let areaLet = comprimento * altura;

console.log(areaLet)

//Const

const forma = 'Quadrado';
const alturaConst = 5;
const comprimentoConst = 7;
let areaConst;//Por se tratar de uma variavel que sera alterada no futuro, seu valor n pode ser const.

if (forma === 'Quadrado'){
    areaConst = alturaConst*comprimentoConst
}
else{
    areaConst = (alturaConst*comprimentoConst) / 2
}
console.log(areaConst)

//Tipagem Dinamica
// unType

let minhaVar = 876;
minhaVar = "Texto";
minhaVar = true
