const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();
const inputMaiusculo = input.toUpperCase();

console.log(cidade === inputMinusculo); // true
console.log(cidade === inputMaiusculo); // false

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres