import PromptSync from "prompt-sync";
const prompt = PromptSync();

const coefA = Number(prompt("Digite o coeficiente A da equação de segundo grau: "));
const coefB = Number(prompt("Digite o coeficiente B da equação de segundo grau: "));
const coefC = Number(prompt("Digite o coeficiente C da equação de segundo grau: "));

const delta = Math.pow(coefB, 2) - 4 * coefA * coefC;

if (delta < 0 || coefA === 0) {
    console.log("Impossível calcular");
}
else {
    const raizDelta = Math.sqrt(delta);
    const x1 = (-coefB + raizDelta) / (2 * coefA);
    const x2 = (-coefB - raizDelta) / (2 * coefA);

    console.log("X1 = " + x1.toFixed(5));
    console.log("X2 = " + x2.toFixed(5));
}