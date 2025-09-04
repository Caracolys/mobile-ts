import PromptSync from "prompt-sync";
const prompt = PromptSync();

const nome = Number(prompt("Nome: "));
const valorHora = Number(prompt("Valor por hora: "));
const horas = Number(prompt("Horas trabalhadas: "));

const salario = valorHora * horas;

console.log(`O pagamento de ${nome} deve ser R$ ${salario.toFixed(2)}`);