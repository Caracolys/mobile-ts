const largura = Number(prompt("Digite a largura do terreno: "));
const comprimento = Number(prompt("Digite o comprimento do terreno: "));
const valorM2 = Number(prompt("Digite o valor do metro quadrado do terreno: "));

const area = largura * comprimento;
const preco = area * valorM2;

console.log(`Area do terreno = ${area.toFixed(2)}`)
console.log(`Preço do terreno = ${preco.toFixed(2)}`)