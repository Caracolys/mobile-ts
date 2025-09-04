import PromptSync from "prompt-sync";
const prompt = PromptSync();

console.log("Digite as tres distancias:");
const d1 = Number(prompt(""));
const d2 = Number(prompt(""));
const d3 = Number(prompt(""));

const maior: number = Math.max(d1, d2, d3);

console.log("MAIOR DISTANCIA = " + maior.toFixed(2));
