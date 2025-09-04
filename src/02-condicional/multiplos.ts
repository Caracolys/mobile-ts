import PromptSync from "prompt-sync";
const prompt = PromptSync();

console.log("Digite dois numeros inteiros:");
const a = Number(prompt(""));
const b = Number(prompt(""));

if (a % b === 0 || b % a === 0) {
    console.log("Sao multiplos");
} else {
    console.log("Nao sao multiplos");
}
