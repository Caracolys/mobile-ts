import PromptSync from "prompt-sync";
const prompt = PromptSync();

const escala = prompt("Voce vai digitar a temperatura em qual escala (C/F)? ").toUpperCase();

if (escala === "F") {
    const f: number = Number(prompt("Digite a temperatura em Fahrenheit: "));
    const c: number = (f - 32.0) * 5.0 / 9.0;

    console.log("Temperatura equivalente em Celsius: " + c.toFixed(2));

} else if (escala === "C") {
    const c: number = Number(prompt("Digite a temperatura em Celsius: "));
    const f: number = c * 9.0 / 5.0 + 32.0;
    
    console.log("Temperatura equivalente em Fahrenheit: " + f.toFixed(2));
}
