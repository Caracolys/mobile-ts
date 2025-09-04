import PromptSync from "prompt-sync";
const prompt = PromptSync();

const n = Number(prompt("Quantos casos voce vai digitar? "));

for (let i = 0; i < n; i++) {
    const numerador = Number(prompt("Entre com o numerador: "));
    const denominador = Number(prompt("Entre com o denominador: "));

    if (denominador === 0) {
        console.log("DIVISAO IMPOSSIVEL");
    } else {
        const resultado = numerador / denominador;
        console.log("DIVISAO = " + resultado.toFixed(2));
    }
}
