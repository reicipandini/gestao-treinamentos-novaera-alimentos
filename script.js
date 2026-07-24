
import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


window.onload = function () {

    

    pesquisarFuncionario();

};



function pesquisarFuncionario() {

    const pesquisa = document.getElementById("pesquisa");

    pesquisa.addEventListener("keyup", function () {

        const texto = pesquisa.value.toLowerCase();

        const linhas = document.querySelectorAll("#tbody tr");

        linhas.forEach(function (linha) {

            const conteudo = linha.textContent.toLowerCase();

            linha.style.display = conteudo.includes(texto) ? "" : "none";

        });

    });

}



function sair(){

    if(confirm("Deseja realmente sair do sistema?")){

        window.location.href = "login.html";

    }

}

function mascaraCPF(campo){

    let valor = campo.value;

    valor = valor.replace(/\D/g, ""); // remove letras e símbolos

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");

    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    campo.value = valor;
}

window.sair = sair;


async function carregarCards(){

    const funcionariosSnap = await getDocs(collection(db,"funcionarios"));

    document.getElementById("totalFuncionarios").textContent =
    funcionariosSnap.size;

    const treinamentosSnap = await getDocs(collection(db,"treinamentos"));

    let concluidos = 0;
    let andamento = 0;
    let pendentes = 0;

    treinamentosSnap.forEach(doc=>{

        const treinamento = doc.data();

        if(treinamento.status==="Concluído"){
            concluidos++;
        }

        if(treinamento.status==="Em andamento"){
            andamento++;
        }

        if(treinamento.status==="Pendente"){
            pendentes++;
        }

    });

    document.getElementById("totalConcluidos").textContent = concluidos;
    document.getElementById("totalAndamento").textContent = andamento;
    document.getElementById("totalPendentes").textContent = pendentes;

}

carregarCards();
