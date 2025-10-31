// 1. SOLICITAR OS DADOS (prompt é "JS Raiz" do navegador)
const inputIdade = prompt("Digite sua idade:");
const inputStatus = prompt("Qual seu status (registrado ou não registrado):");

// 2. "LIMPAR" OS DADOS
const idade = parseInt(inputIdade);
const statu = (inputStatus || "").toLowerCase().trim();

// Variáveis que vão guardar as mensagens
let mensagemIdade;
let mensagemStatus;
let mensagemAcesso;

// 3. REQUISITO: OPERADOR TERNÁRIO
const ehMaiorDeIdade = (idade >= 18);
mensagemIdade = ehMaiorDeIdade ? "Classificação: Você é MAIOR de idade." : "Classificação: Você é MENOR de idade.";

// 4. REQUISITO: ESTRUTURA SWITCH
switch (statu) {
    case "registrado":
        mensagemStatus = "Status: Bem-vindo de volta!";
        break;
    case "não registrado":
        mensagemStatus = "Status: Por favor, complete seu registro.";
        break;
    default: 
        mensagemStatus = "Status: Desconhecido.";
}

// 5. REQUISITO: OPERADORES LÓGICOS
if (ehMaiorDeIdade && statu === "registrado") {
    mensagemAcesso = "Nível de Acesso: Acesso Completo.";
}
else if (!ehMaiorDeIdade || statu === "não registrado") {
    mensagemAcesso = "Nível de Acesso: Acesso Limitado.";
}
else {
    mensagemAcesso = "Nível de Acesso: Acesso Limitado (status inválido).";
}

// 6. EXIBIR O RESULTADO (alert é "JS Raiz" do navegador)
const resumoFinal = `
--- Resumo do Usuário ---
Você informou:
Idade: ${idade}
Status: ${statu}

--- Resultados ---
${mensagemIdade}
${mensagemStatus}
${mensagemAcesso}
`;

alert(resumoFinal);