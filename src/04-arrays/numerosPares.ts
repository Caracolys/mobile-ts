import PromptSync from "prompt-sync";
const prompt = PromptSync();

const N = Number(prompt("Quantos numeros voce vai digitar? "));
const vetor: number[] = [];

for (let i = 0; i < N; i++) {
    const num = Number(prompt("Digite um numero: "));
    vetor.push(num);
}

const pares = vetor.filter(v => v % 2 === 0);

console.log("NUMEROS PARES:");
console.log(pares.join(" "));
console.log("QUANTIDADE DE PARES = " + pares.length);
