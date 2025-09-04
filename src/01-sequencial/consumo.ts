import PromptSync from "prompt-sync";
const prompt = PromptSync();

const distancia = Number(prompt("Distância percorrida: "));
const combGasto = Number(prompt("Combust[ivel gasto]: "));

console.log("Consumo médio: " + (distancia / combGasto).toFixed(3));