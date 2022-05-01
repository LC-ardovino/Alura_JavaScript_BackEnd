//Arrow function
const apresentarArrow = nome => `meu nome e ${nome}`;
const soma = (num1,num2) => num1 + num2 ;

//Arrow function com + de 1 linha de instrucao

const SomaNumerosPequenos = (num1,num2) => {
    if (num1 || num2 > 10){
        return "Apenas numeros de 1 a 9"
    }else{
        return num1 + num2
    }
}


