// ===============================
// DELETE.JS
// ===============================

import { excluirFuncionario as removerFuncionario } from "./storage.js";

async function excluirFuncionario(id) {

    const confirmar = confirm("Tem certeza que deseja excluir este funcionário?");

    if (!confirmar) return;

    try {

        await removerFuncionario(id);

        alert("Funcionário excluído com sucesso!");

        carregarFuncionarios();

        // Limpa a área da recomendação da IA
        document.getElementById("resultadoIA").innerHTML =
            "Selecione um funcionário para visualizar a recomendação.";

    } catch (erro) {

        console.error(erro);
        alert("Erro ao excluir funcionário.");

    }

}

// Disponibiliza a função para o HTML
window.excluirFuncionario = excluirFuncionario;