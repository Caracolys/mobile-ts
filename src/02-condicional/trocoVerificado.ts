import PromptSync from "prompt-sync";
const prompt = PromptSync();


const precoUnitario: number = Number(prompt("Preço unitário do produto: "));
const quantidade: number = Number(prompt("Quantidade comprada: "));
const dinheiroRecebido: number = Number(prompt("Dinheiro recebido: "));


const total: number = precoUnitario * quantidade;

if (dinheiroRecebido >= total) {
    const troco: number = dinheiroRecebido - total;
    console.log("TROCO = " + troco.toFixed(2));
    
} else {
    const faltam: number = total - dinheiroRecebido;
    console.log("DINHEIRO INSUFICIENTE. FALTAM " + faltam.toFixed(2) + " REAIS");
}
