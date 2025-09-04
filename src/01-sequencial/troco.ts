import PromptSync from "prompt-sync";
const prompt = PromptSync();

const valor = Number(prompt("Digite o valor do produto: "));
const pago = Number(prompt("Digite o valor pago: "));
const troco = pago - valor;

console.log(`TROCO = ${troco.toFixed(2)}`);