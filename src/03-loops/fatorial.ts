import PromptSync from "prompt-sync";
const prompt = PromptSync();

const n = Number(prompt("Digite o valor de N: "));

let fat = 1;
for (let i = 1; i <= n; i++) {
    fat *= i;
}

console.log("FATORIAL = " + fat);
