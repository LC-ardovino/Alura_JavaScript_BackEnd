
function ganhoPorHora(salario, horasTrabalhadasNoMes) 
{

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    console.log(salarioHora);
    console.log(Math.round(salarioHora));//usando Math.round

    str = salarioHora.toFixed(2);//Formata o numero, mas retorna uma string como resposta
    console.log(str);

    formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    console.log(formatado)

    
}

ganhoPorHora(1000,176)