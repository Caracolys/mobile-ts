import PromptSync from "prompt-sync";
const prompt = PromptSync();

const salario = Number(prompt("Digite o salario da pessoa: "));

let percentual: number;

if (salario <= 1000.0) {
    percentual = 20;
} else if (salario <= 3000.0) {
    percentual = 15;
} else if (salario <= 8000.0) {
    percentual = 10;
} else {
    percentual = 5;
}

const aumento = salario * percentual / 100.0;
const novoSalario = salario + aumento;

console.log("Novo salario = R$ " + novoSalario.toFixed(2));
console.log("Aumento = R$ " + aumento.toFixed(2));
console.log("Porcentagem = " + percentual + " %");
