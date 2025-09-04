import PromptSync from "prompt-sync";
const prompt = PromptSync();

const raio = Number(prompt("Digite o raio do círculo: "));

const area = Math.PI * Math.pow(raio, 2);

console.log(`AREA= ${area.toFixed(4)}`);