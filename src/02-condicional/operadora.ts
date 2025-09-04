import PromptSync from "prompt-sync";
const prompt = PromptSync();

const valorMinutoSemPlano = 2.00;
const valorMinutoComPlano = 0.50;
const minutosInclusosPlano = 100;

const minutosFalados = Number(prompt("Digite a quantidade de minutos falados: "));
const possuiPlano = prompt("Possui plano de minutos? (s/n): ").toLowerCase() === 's';
let custoTotal: number;

if (possuiPlano) {
    if (minutosFalados <= minutosInclusosPlano) {
        custoTotal = 0;
    } else {
        const minutosExcedentes = minutosFalados - minutosInclusosPlano;
        custoTotal = minutosExcedentes * valorMinutoComPlano;
    }
} else {
    custoTotal = minutosFalados * valorMinutoSemPlano;
}   
console.log(`O custo total da ligação é: R$ ${custoTotal.toFixed(2)}`);

