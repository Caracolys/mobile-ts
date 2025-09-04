import PromptSync from "prompt-sync";
const prompt = PromptSync();

const n = Number(prompt("Quantos numeros voce vai digitar? "));

for (let i = 0; i < n; i++) {
    const x = Number(prompt("Digite um numero: "));
    if (x === 0) console.log("NULO");
    else {
        const tipo = x % 2 === 0 ? "PAR" : "IMPAR";
        const sinal = x > 0 ? "POSITIVO" : "NEGATIVO";
        console.log(tipo + " " + sinal);
    }
}
