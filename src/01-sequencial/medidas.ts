import PromptSync from "prompt-sync";
const prompt = PromptSync();

const A = Number(prompt("Digite a medida A: "));
const B = Number(prompt("Digite a medida B: "));
const C = Number(prompt("Digite a medida C: "));

const areaTriangulo = (A * C) / 2;
const areaTrapezio = ((A + B) * C) / 2;
const areaQuadrado = Math.pow(B, 2);

console.log("AREA DO TRIANGULO: " + areaTriangulo.toFixed(3));
console.log("AREA DO TRAPEZIO: " + areaTrapezio.toFixed(3));
console.log("AREA DO QUADRADO: " + areaQuadrado.toFixed(3));