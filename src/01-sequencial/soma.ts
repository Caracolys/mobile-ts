import promptSync from 'prompt-sync';
const prompt = promptSync();

const X = Number(prompt("Digite um valor para X: "));
const Y = Number(prompt("Digite um valor para Y: "));

const soma = X + Y;

console.log(`SOMA = ${soma}`);