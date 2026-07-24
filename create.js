// create.js

import { adicionarFuncionario } from "./storage.js";

async function cadastrarFuncionario() {

    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const cargo = document.getElementById("cargo").value;
    const setor = document.getElementById("setor").value;
    const tempoEmpresa = document.getElementById("tempoEmpresa").value;
    const tipoTempo = document.getElementById("tipoTempo").value;
    const dificuldade = document.getElementById("dificuldade").value;

    if (
        !nome ||
        !cpf ||
        !cargo ||
        !setor ||
        !tempoEmpresa ||
        !dificuldade
    ) {
        alert("Preencha todos os campos!");
        return;
    }

    const funcionario = {
        nome,
        cpf,
        cargo,
        setor,
        tempoEmpresa,
        tipoTempo,
        dificuldade
    };

    try {

        await adicionarFuncionario(funcionario);

        alert("Funcionário cadastrado com sucesso!");

        document.getElementById("nome").value = "";
        document.getElementById("cpf").value = "";
        document.getElementById("cargo").value = "";
        document.getElementById("setor").value = "";
        document.getElementById("tempoEmpresa").value = "";
        document.getElementById("tipoTempo").value = "Meses";
        document.getElementById("dificuldade").value = "";

        if (typeof carregarFuncionarios === "function") {
            carregarFuncionarios();
        }

    } catch (erro) {

        console.error(erro);
        alert("Erro ao cadastrar funcionário.");

    }

}

// Torna a função acessível ao onclick do HTML
window.cadastrarFuncionario = cadastrarFuncionario;