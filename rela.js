// ==========================================
// RELATÓRIOS - NOVAERA ALIMENTOS
// FIREBASE FIRESTORE
// ==========================================


import { db } from "./firebase.js";


import {

    collection,
    getDocs

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";





// ==========================================
// INICIAR
// ==========================================


window.onload = function(){

    carregarRelatorios();

};









// ==========================================
// CARREGAR RELATÓRIOS
// ==========================================


async function carregarRelatorios(){


    try{


        // ==============================
        // FUNCIONÁRIOS
        // ==============================


        const funcionariosSnap = await getDocs(
            collection(db,"funcionarios")
        );



        let funcionarios=[];



        funcionariosSnap.forEach(doc=>{


            funcionarios.push({

                id:doc.id,

                ...doc.data()

            });


        });




        // TOTAL FUNCIONÁRIOS


        document.getElementById(
            "totalFuncionarios"
        ).innerHTML = funcionarios.length;





        carregarSetores(funcionarios);







// ==============================
// TREINAMENTOS
// ==============================


const treinamentosSnap = await getDocs(
    collection(db,"treinamentos")
);


let treinamentos=[];



treinamentosSnap.forEach(doc=>{


    let dados = doc.data();



    // BUSCA O FUNCIONÁRIO PELO ID

    let funcionario = funcionarios.find(
        f => f.id === dados.idFuncionario
    );



    treinamentos.push({


        id:doc.id,


        nome:
        funcionario
        ? funcionario.nome
        : "Sem nome",



        curso:
        dados.curso || "Sem curso",



        status:
        dados.status || "Pendente",



        instituicao:
        dados.instituicao || "Sem instituição",



        data:

        dados.dataConclusao ||
        dados.dataInicio ||
        ""



    });



});





        calcularTreinamentos(treinamentos);



        rankingCursos(treinamentos);



        mostrarInstituicoes(treinamentos);





    }


    catch(error){


        console.error(
            "Erro ao carregar relatório:",
            error
        );


    }



}









// ==========================================
// FUNCIONÁRIOS POR SETOR
// ==========================================


function carregarSetores(funcionarios){



    let setores={};




    funcionarios.forEach(f=>{


        let setor =
        f.setor || "Sem setor";



        if(!setores[setor]){


            setores[setor]=0;


        }



        setores[setor]++;



    });





    let tabela =
    document.getElementById("setores");



    tabela.innerHTML="";





    Object.entries(setores)

    .forEach(([setor,total])=>{



        tabela.innerHTML += `


        <tr>

            <td>${setor}</td>

            <td>${total}</td>

        </tr>


        `;



    });



}









// ==========================================
// STATUS DOS TREINAMENTOS
// ==========================================


function calcularTreinamentos(lista){



    let concluidos = 0;

    let andamento = 0;

    let pendentes = 0;





    lista.forEach(t=>{



        if(t.status === "Concluído"){


            concluidos++;


        }


        else if(t.status === "Em andamento"){


            andamento++;


        }


        else{


            pendentes++;


        }



    });







    document.getElementById(
        "totalCursos"
    ).innerHTML = lista.length;




    document.getElementById(
        "totalConcluidos"
    ).innerHTML = concluidos;




    document.getElementById(
        "totalAndamento"
    ).innerHTML = andamento;




    document.getElementById(
        "totalPendentes"
    ).innerHTML = pendentes;



}









// ==========================================
// RANKING DE CURSOS
// ==========================================


function rankingCursos(lista){



    let cursos={};




    lista.forEach(t=>{



        if(!cursos[t.curso]){


            cursos[t.curso]=0;


        }



        cursos[t.curso]++;



    });







    let tabela =
    document.getElementById(
        "rankingCursos"
    );



    tabela.innerHTML="";






    Object.entries(cursos)

    .sort((a,b)=>b[1]-a[1])

    .forEach(([curso,total])=>{



        tabela.innerHTML += `


        <tr>


            <td>${curso}</td>


            <td>${total}</td>


        </tr>


        `;



    });



}









// ==========================================
// ÚLTIMOS TREINAMENTOS
// ==========================================


// ==========================================
// TREINAMENTOS POR INSTITUIÇÃO
// ==========================================

function mostrarInstituicoes(lista){


    let instituicoes = {};



    lista.forEach(t=>{


        let nome =
        t.instituicao || "Sem instituição";



        if(!instituicoes[nome]){

            instituicoes[nome] = 0;

        }



        instituicoes[nome]++;


    });



    let tabela =
    document.getElementById(
        "treinamentosInstituicao"
    );



    tabela.innerHTML = "";



    Object.entries(instituicoes)

    .sort((a,b)=>b[1]-a[1])

    .forEach(([instituicao,total])=>{


        tabela.innerHTML += `

            <tr>

                <td>
                    ${instituicao}
                </td>


                <td>
                    ${total}
                </td>

            </tr>

        `;


    });


}