import PromptSync from "prompt-sync";
const prompt = PromptSync();

const n = Number(prompt("Quantos numeros voce vai digitar? "));

let dentro = 0, fora = 0;

for (let i = 0; i < n; i++) {
    const valor = Number(prompt("Digite um numero: "));
    if (valor >= 10 && valor <= 20) dentro++;
    else fora++;
}

console.log(`${dentro} DENTRO`);
console.log(`${fora} FORA`);
