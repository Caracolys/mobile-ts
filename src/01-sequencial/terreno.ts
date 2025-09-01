<<<<<<< HEAD
import promptSync from 'prompt-sync';
const prompt = promptSync();

const largura = Number(prompt("Digite a largura do terreno: "));
const comprimento = Number(prompt("Digite o comprimento do terreno: "));
const valorM2 = Number(prompt("Digite o valor do metro quadrado: "));
=======
const largura = Number(prompt("Digite a largura do terreno: "));
const comprimento = Number(prompt("Digite o comprimento do terreno: "));
const valorM2 = Number(prompt("Digite o valor do metro quadrado do terreno: "));
>>>>>>> e630d0aa794c36b6ccd9229c363f621c11c3b918

const area = largura * comprimento;
const preco = area * valorM2;

<<<<<<< HEAD
console.log("Area do terreno = ${area.toFixed(2)}");
console.log("Preco do terreno = ${preco.toFixed(2)}");
=======
console.log(`Area do terreno = ${area.toFixed(2)}`)
console.log(`Preço do terreno = ${preco.toFixed(2)}`)
>>>>>>> e630d0aa794c36b6ccd9229c363f621c11c3b918
