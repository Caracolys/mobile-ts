import PromptSync from "prompt-sync";
const prompt = PromptSync();

const x = Number(prompt("Digite o valor de X: "));

for (let i = 1; i <= x; i++) {
    if (i % 2 !== 0) console.log(i);
}
