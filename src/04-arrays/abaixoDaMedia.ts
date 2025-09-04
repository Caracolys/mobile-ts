import PromptSync from "prompt-sync";
const prompt = PromptSync();

const N = Number(prompt("Quantos elementos vai ter o vetor? "));
const vetor: number[] = [];

for (let i = 0; i < N; i++) {
    vetor.push(Number(prompt("Digite um numero: ")));
}

const media = vetor.reduce((acc, val) => acc + val, 0) / N;

console.log("MEDIA DO VETOR = " + media.toFixed(3));
console.log("ELEMENTOS ABAIXO DA MEDIA:");
vetor.forEach(val => {
    if (val < media) {
        console.log(val.toFixed(1));
    }
});
