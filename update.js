// ===============================
// UPDATE.JS
// ===============================

import { buscarFuncionario, atualizarFuncionario } from "./storage.js";

async function editarFuncionario(id) {

    const funcionario = await buscarFuncionario(id);

    if (!funcionario) {
        alert("Funcionário não encontrado.");
        return;
    }

    document.getElementById("nome").value = funcionario.nome;
    document.getElementById("cpf").value = funcionario.cpf;
    document.getElementById("cargo").value = funcionario.cargo;
    document.getElementById("setor").value = funcionario.setor;
    document.getElementById("tempoEmpresa").value = funcionario.tempoEmpresa;
    document.getElementById("tipoTempo").value = funcionario.tipoTempo;
    document.getElementById("dificuldade").value = funcionario.dificuldade;

    const botao = document.querySelector(".form button");

    botao.textContent = "Salvar Alterações";

    botao.onclick = async function () {

        const dados = {
            nome: document.getElementById("nome").value.trim(),
            cpf: document.getElementById("cpf").value.trim(),
            cargo: document.getElementById("cargo").value,
            setor: document.getElementById("setor").value,
            tempoEmpresa: document.getElementById("tempoEmpresa").value,
            tipoTempo: document.getElementById("tipoTempo").value,
            dificuldade: document.getElementById("dificuldade").value
        };

        await atualizarFuncionario(id, dados);

        alert("Funcionário atualizado com sucesso!");

        botao.textContent = "Cadastrar";
        botao.onclick = cadastrarFuncionario;

        document.getElementById("nome").value = "";
        document.getElementById("cpf").value = "";
        document.getElementById("cargo").value = "";
        document.getElementById("setor").value = "";
        document.getElementById("tempoEmpresa").value = "";
        document.getElementById("tipoTempo").value = "Meses";
        document.getElementById("dificuldade").value = "";

        carregarFuncionarios();
    };

}

window.editarFuncionario = editarFuncionario;