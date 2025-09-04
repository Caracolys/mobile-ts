import PromptSync from "prompt-sync";
const prompt = PromptSync();

const horaInicial = Number(prompt("Hora inicial: "));
const horaFinal = Number(prompt("Hora final: "));

let duracao: number;

if (horaInicial < horaFinal) {
    duracao = horaFinal - horaInicial;
} else {
    duracao = 24 - horaInicial + horaFinal;
}

console.log("O JOGO DUROU " + duracao + " HORA(S)");
