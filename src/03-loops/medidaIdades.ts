import PromptSync from "prompt-sync";
const prompt = PromptSync();

console.log("Digite as idades:");

let soma = 0;
let cont = 0;

while (true) {
    const idade= Number(prompt(""));

    if (idade < 0) break;

    soma += idade;
    cont++;
}

if (cont === 0) {
    console.log("IMPOSSIVEL CALCULAR");
} else {
    const media = soma / cont;
    console.log("MEDIA = " + media.toFixed(2));
}
