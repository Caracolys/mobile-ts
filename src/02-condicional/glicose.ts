import PromptSync from "prompt-sync";
const prompt = PromptSync();

const medida = Number(prompt("Digite a medida da glicose: "));

if (medida <= 100.0) {
    console.log("Classificacao: normal");
} else if (medida <= 140.0) {
    console.log("Classificacao: elevado");
} else {
    console.log("Classificacao: diabetes");
}
