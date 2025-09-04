import PromptSync from "prompt-sync";
const prompt = PromptSync();

console.log("Digite dois numeros:");
let x = Number(prompt(""));
let y = Number(prompt(""));

if (x > y) [x, y] = [y, x];

let soma = 0;
for (let i = x + 1; i < y; i++) {
    if (i % 2 !== 0) soma += i;
}

console.log("SOMA DOS IMPARES = " + soma);
