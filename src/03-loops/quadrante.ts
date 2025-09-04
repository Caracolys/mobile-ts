import PromptSync from "prompt-sync";
const prompt = PromptSync();

while (true) {
    console.log("Digite os valores das coordenadas X e Y:");
    const x: number = Number(prompt(""));
    const y: number = Number(prompt(""));

    if (x === 0 || y === 0) break;

    if (x > 0 && y > 0) console.log("QUADRANTE Q1");
    else if (x < 0 && y > 0) console.log("QUADRANTE Q2");
    else if (x < 0 && y < 0) console.log("QUADRANTE Q3");
    else console.log("QUADRANTE Q4");
}
