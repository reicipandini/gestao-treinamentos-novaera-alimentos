import { db } from "./firebase.js";

import { 
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";



let funcionarios = [];


carregarFuncionarios();




function pegarCurso(dificuldade){

    switch(dificuldade){

        case "APPCC":
            return "Curso de APPCC (HACCP) - Análise de Perigos e Pontos Críticos de Controle";


        case "BPF":
            return "Curso de Boas Práticas de Fabricação (BPF)";


        case "POP":
            return "Curso de Procedimentos Operacionais Padronizados (POP)";


        case "ISO22000":
            return "Curso de Sistema de Gestão da Segurança de Alimentos ISO 22000";


        case "FSSC22000":
            return "Curso de Certificação FSSC 22000";


        case "AnaliseSensorial":
            return "Curso de Análise Sensorial de Alimentos";


        case "Microbiologia":
            return "Curso de Microbiologia de Alimentos";


        case "TecnologiaProcessamento":
            return "Curso de Tecnologia de Processamento de Alimentos";


        case "Rastreabilidade":
            return "Curso de Rastreabilidade na Indústria de Alimentos";


        case "ControleQualidade":
            return "Curso de Controle de Qualidade de Alimentos";


        default:
            return "Não definido";

    }

}





async function carregarFuncionarios(){

    const lista = document.getElementById("listaFuncionarios");


    try{

        const funcionariosRef = collection(db,"funcionarios");


        const dados = await getDocs(funcionariosRef);


        funcionarios = [];


        dados.forEach((doc)=>{

            funcionarios.push(doc.data());

        });


        mostrarFuncionarios();


    }
    catch(error){

        console.log("Erro ao buscar funcionários:",error);


        lista.innerHTML = `
            <h2>Erro ao carregar funcionários</h2>
        `;

    }

}




function mostrarFuncionarios(){


let lista = document.getElementById("listaFuncionarios");


lista.innerHTML = "";



if(funcionarios.length === 0){

    lista.innerHTML = `
        <h2>Nenhum funcionário cadastrado</h2>
    `;

    return;

}




funcionarios.forEach((funcionario)=>{


lista.innerHTML += `

<div class="card-funcionario">


<h2>
${funcionario.nome}
</h2>


<p>
<b>Cargo:</b> ${funcionario.cargo || ""}
</p>


<p>
<b>Setor:</b> ${funcionario.setor || ""}
</p>


<p>
<b>Curso:</b> ${pegarCurso(funcionario.dificuldade)}
</p>


</div>

`;


});


}






function pesquisarFuncionario(){


let pesquisa = document
.getElementById("pesquisa")
.value
.toLowerCase();



let resultado = funcionarios.filter(funcionario =>

funcionario.nome
.toLowerCase()
.includes(pesquisa)

);



let lista = document.getElementById("listaFuncionarios");


lista.innerHTML = "";



resultado.forEach(funcionario=>{


lista.innerHTML += `

<div class="card-funcionario">


<h2>${funcionario.nome}</h2>


<p>
<b>Cargo:</b> ${funcionario.cargo || ""}
</p>


<p>
<b>Setor:</b> ${funcionario.setor || ""}
</p>


<p>
<b>Curso:</b> ${pegarCurso(funcionario.dificuldade)}
</p>


</div>

`;


});


}






function voltarDashboard(){

    window.location.href="index.html";

}



window.pesquisarFuncionario = pesquisarFuncionario;
window.voltarDashboard = voltarDashboard;
