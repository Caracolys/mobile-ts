import PromptSync from "prompt-sync";
const prompt = PromptSync();

const x = Number(prompt("Digite o valor de X: "));
const y = Number(prompt("Digite o valor de Y: "));

if (x === 0 && y === 0) {
    console.log("Origem");
} 
else if (x === 0) {
    console.log("Eixo Y");
} 
else if (y === 0) {
    console.log("Eixo X");
} 
else if (x > 0 && y > 0) {
    console.log("Q1");
} 
else if (x < 0 && y > 0) {
    console.log("Q2");
} 
else if (x < 0 && y < 0) {
    console.log("Q3");
} 
else {
    console.log("Q4");
}
