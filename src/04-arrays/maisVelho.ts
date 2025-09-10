import PromptSync from "prompt-sync";
const prompt = PromptSync();

const N = Number(prompt("Quantas pessoas voce vai digitar? "));

const nomes = [];
const idades = [];

for (let i = 0; i < N; i++) {
    console.log(`Dados da ${i + 1}a pessoa:`);
    nomes.push(prompt("Nome: "));
    idades.push(Number(prompt("Idade: ")));
}

let maiorIdade = idades[0];
let posicao = 0;

for (let i = 1; i < N; i++) {
    if (idades[i] > maiorIdade) {
        maiorIdade = idades[i];
        posicao = i;
    }
}

console.log("PESSOA MAIS VELHA: " + nomes[posicao]);
