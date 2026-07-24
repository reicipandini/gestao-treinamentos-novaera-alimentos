import { db } from "./firebase.js";

import {
    collection,
    getDocs,
    doc,
    getDoc,
    setDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


const tbody = document.getElementById("tbodyTreinamentos");


let funcionarios = [];

let treinamentos = [];



carregarTreinamentos();






async function carregarTreinamentos(){


    tbody.innerHTML = "";


    funcionarios = [];

    treinamentos = [];



    const funcionariosRef = collection(
        db,
        "funcionarios"
    );


    const dados = await getDocs(funcionariosRef);



    for(const documento of dados.docs){


        const funcionario = {


            id: documento.id,

            ...documento.data()


        };



        funcionarios.push(funcionario);



        const treinamentoRef = doc(
            db,
            "treinamentos",
            documento.id
        );



        const treinamentoSnap = await getDoc(
            treinamentoRef
        );



        if(!treinamentoSnap.exists()){



            const treinamento = {


                curso:
                pegarCurso(funcionario.dificuldade),


                instituicao:
                pegarInstituicao(funcionario.dificuldade),


                status:"Pendente",


                dataInicio:"",


                dataConclusao:"",


                certificado:false


            };



            await setDoc(
                treinamentoRef,
                treinamento
            );



            treinamentos.push({


                id:documento.id,

                ...treinamento


            });



        }else{


            treinamentos.push({


                id:documento.id,

                ...treinamentoSnap.data()


            });


        }


    }



    mostrarTabela(treinamentos);


}








function mostrarTabela(lista){


    tbody.innerHTML = "";



    lista.forEach(treinamento=>{


        const funcionario = funcionarios.find(

            f => f.id === treinamento.id

        );



        tbody.innerHTML += `


        <tr>


            <td>
                ${funcionario 
                ? funcionario.nome 
                : "Sem nome"}
            </td>



            <td>
                ${treinamento.curso}
            </td>



            <td>
                ${treinamento.instituicao}
            </td>



            <td>
                ${treinamento.dataInicio || "-"}
            </td>



            <td>
                ${treinamento.dataConclusao || "-"}
            </td>



            <td>
                ${treinamento.status}
            </td>



            <td>


                <select onchange="alterarStatus('${treinamento.id}',this.value)">



                    <option value="Pendente"
                    ${treinamento.status==="Pendente"?"selected":""}>
                    Pendente
                    </option>



                    <option value="Em andamento"
                    ${treinamento.status==="Em andamento"?"selected":""}>
                    Em andamento
                    </option>



                    <option value="Concluído"
                    ${treinamento.status==="Concluído"?"selected":""}>
                    Concluído
                    </option>



                </select>


            </td>



            <td>

                <button onclick="verDetalhes('${treinamento.id}')">

                    Ver

                </button>

            </td>



        </tr>


        `;



    });



    atualizarCards();


}











async function alterarStatus(id,status){



    const treinamentoRef = doc(
        db,
        "treinamentos",
        id
    );



    const dados = {};



    dados.status = status;



    if(status==="Em andamento"){


        dados.dataInicio =
        new Date().toLocaleDateString("pt-BR");


    }



    if(status==="Concluído"){


        dados.dataConclusao =
        new Date().toLocaleDateString("pt-BR");



        dados.certificado = true;


    }



    await updateDoc(
        treinamentoRef,
        dados
    );



    carregarTreinamentos();


}



window.alterarStatus = alterarStatus;










function atualizarCards(){



    document.getElementById(
        "totalTreinamentos"
    ).textContent = treinamentos.length;



    document.getElementById(
        "totalPendentes"
    ).textContent =

    treinamentos.filter(
        t=>t.status==="Pendente"
    ).length;




    document.getElementById(
        "totalAndamento"
    ).textContent =

    treinamentos.filter(
        t=>t.status==="Em andamento"
    ).length;




    document.getElementById(
        "totalConcluidos"
    ).textContent =

    treinamentos.filter(
        t=>t.status==="Concluído"
    ).length;



}







window.filtrarStatus = function(status){



    if(status==="Todos"){


        mostrarTabela(treinamentos);


        return;


    }



    const filtrados = treinamentos.filter(

        t=>t.status===status

    );



    mostrarTabela(filtrados);



};







function pegarCurso(dificuldade){


    switch(dificuldade){


        case "APPCC":
            return "Curso de APPCC";


        case "BPF":
            return "Boas Práticas de Fabricação";


        case "POP":
            return "Procedimentos Operacionais Padronizados";


        case "ISO22000":
            return "ISO 22000";


        case "FSSC22000":
            return "FSSC 22000";


        case "AnaliseSensorial":
            return "Análise Sensorial";


        case "Microbiologia":
            return "Microbiologia de Alimentos";


        case "TecnologiaProcessamento":
            return "Tecnologia de Processamento";


        case "Rastreabilidade":
            return "Rastreabilidade";


        case "ControleQualidade":
            return "Controle de Qualidade";


        default:
            return "Curso";


    }


}






function pegarInstituicao(dificuldade){



    switch(dificuldade){



        case "APPCC":

        case "BPF":

        case "POP":

        case "AnaliseSensorial":

        case "Microbiologia":

        case "TecnologiaProcessamento":

        case "ControleQualidade":

            return "SENAI";



        case "ISO22000":

            return "SGS Academy";



        case "FSSC22000":

            return "DNV";



        case "Rastreabilidade":

            return "SEBRAE";



        default:

            return "-";


    }


}
