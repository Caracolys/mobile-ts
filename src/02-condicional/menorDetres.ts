import PromptSync from "prompt-sync";
const prompt = PromptSync();

const valor1 = Number(prompt("Digite o primeiro valor: "));
const valor2 = Number(prompt("Digite o segundo valor: "));
const valor3 = Number(prompt("Digite o terceiro valor: "));

let menor = valor1;

if (valor2 < menor) {
    menor = valor2;
}   
if (valor3 < menor) {
    menor = valor3;
}   
console.log("MENOR = " + menor);