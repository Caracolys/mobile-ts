import PromptSync from "prompt-sync";
const prompt = PromptSync();

while (true) {
    const senha = Number(prompt("Digite a senha: "));

    if (senha === 2002) {
        console.log("Acesso permitido!");
        break;
    } else {
        console.log("Senha Invalida! Tente novamente:");
    }
}
