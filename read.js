// ===============================
// READ.JS
// ===============================

import { listarFuncionarios } from "./storage.js";

async function carregarFuncionarios() {

    const tbody = document.getElementById("tbody");

    tbody.innerHTML = "";

    const funcionarios = await listarFuncionarios();

    document.getElementById("totalFuncionarios").textContent = funcionarios.length;

    funcionarios.forEach(funcionario => {

        tbody.innerHTML += `
            <tr>

                <td>${funcionario.nome}</td>

                <td>${funcionario.cpf}</td>

                <td>${funcionario.cargo}</td>

                <td>${funcionario.setor}</td>

                <td>${funcionario.tempoEmpresa} ${funcionario.tipoTempo}</td>

                <td>${funcionario.dificuldade}</td>

                <td>
                    <button onclick="mostrarRecomendacao('${funcionario.id}')">
                        Ver
                    </button>
                </td>

                <td>
                    <button onclick="editarFuncionario('${funcionario.id}')">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                </td>

                <td>
                    <button onclick="excluirFuncionario('${funcionario.id}')">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>

            </tr>
        `;

    });

}

// Disponibiliza para outros arquivos
window.carregarFuncionarios = carregarFuncionarios;

// Carrega automaticamente ao abrir a página
document.addEventListener("DOMContentLoaded", () => {
    carregarFuncionarios();
});