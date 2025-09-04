import PromptSync from "prompt-sync";
const prompt = PromptSync();

function lerNota(msg: string): number {
    while (true) {
        const nota = Number(prompt(msg));
        if (nota >= 0 && nota <= 10) {
            return nota;
        } else {
            console.log("Valor invalido! Tente novamente:");
        }
    }
}

const n1 = lerNota("Digite a primeira nota: ");
const n2 = lerNota("Digite a segunda nota: ");

const media = (n1 + n2) / 2;
console.log("MEDIA = " + media.toFixed(2));
