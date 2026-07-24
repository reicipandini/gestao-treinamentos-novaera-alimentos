// ===============================
// IA.JS
// ===============================

import { buscarFuncionario } from "./storage.js";

async function mostrarRecomendacao(id){

    const funcionario = await buscarFuncionario(id);

    if(!funcionario) return;

    let instituicao = "";
    let preco = "";
    let cargaHoraria = "";
    let modalidade = "";
    let curso = "";

    switch(funcionario.dificuldade){

        case "APPCC":
            curso = "Curso de APPCC (HACCP) - Análise de Perigos e Pontos Críticos de Controle";
            instituicao = "SENAI";
            preco = "R$ 450,00";
            cargaHoraria = "40 horas";
            modalidade = "Presencial";
        break;


        case "BPF":
            curso = "Curso de Boas Práticas de Fabricação (BPF)";
            instituicao = "SENAI";
            preco = "R$ 280,00";
            cargaHoraria = "20 horas";
            modalidade = "Online";
        break;


        case "POP":
            curso = "Curso de Procedimentos Operacionais Padronizados (POP)";
            instituicao = "SENAI";
            preco = "R$ 320,00";
            cargaHoraria = "24 horas";
            modalidade = "Online";
        break;


        case "ISO22000":
            curso = "Curso de Sistema de Gestão da Segurança de Alimentos ISO 22000";
            instituicao = "SGS Academy";
            preco = "R$ 990,00";
            cargaHoraria = "32 horas";
            modalidade = "Presencial";
        break;


        case "FSSC22000":
            curso = "Curso de Certificação FSSC 22000";
            instituicao = "DNV";
            preco = "R$ 1.250,00";
            cargaHoraria = "40 horas";
            modalidade = "Presencial";
        break;


        case "AnaliseSensorial":
            curso = "Curso de Análise Sensorial de Alimentos";
            instituicao = "SENAI";
            preco = "R$ 390,00";
            cargaHoraria = "20 horas";
            modalidade = "Presencial";
        break;


        case "Microbiologia":
            curso = "Curso de Microbiologia de Alimentos";
            instituicao = "SENAI";
            preco = "R$ 480,00";
            cargaHoraria = "30 horas";
            modalidade = "Presencial";
        break;


        case "TecnologiaProcessamento":
            curso = "Curso de Tecnologia de Processamento de Alimentos";
            instituicao = "SENAI";
            preco = "R$ 650,00";
            cargaHoraria = "40 horas";
            modalidade = "Híbrido";
        break;


        case "Rastreabilidade":
            curso = "Curso de Rastreabilidade na Indústria de Alimentos";
            instituicao = "Sebrae";
            preco = "R$ 250,00";
            cargaHoraria = "16 horas";
            modalidade = "Online";
        break;


        case "ControleQualidade":
            curso = "Curso de Controle de Qualidade de Alimentos";
            instituicao = "SENAI";
            preco = "R$ 420,00";
            cargaHoraria = "24 horas";
            modalidade = "Presencial";
        break;
    }

    document.getElementById("resultadoIA").innerHTML = `

        <h3>${funcionario.nome}</h3>

        <hr><br>

        <p><strong>Cargo:</strong> ${funcionario.cargo}</p>

        <p><strong>Setor:</strong> ${funcionario.setor}</p>

        <p><strong>Tempo de Empresa:</strong> ${funcionario.tempoEmpresa} ${funcionario.tipoTempo}</p>

        <br>

        <p><strong>Competência a Desenvolver:</strong></p>

        <p>${funcionario.dificuldade}</p>

        <br>

        <p><strong>Curso Recomendado:</strong></p>

        <p>${curso}</p>

        <br>

        <p><strong>Instituição Recomendada:</strong></p>

        <p>${instituicao}</p>

        <br>

        <p><strong>Preço Médio:</strong></p>

        <p>${preco}</p>

        <br>

        <p><strong>Carga Horária:</strong></p>

        <p>${cargaHoraria}</p>

        <br>

        <p><strong>Modalidade:</strong></p>

        <p>${modalidade}</p>

    `;

}

window.mostrarRecomendacao = mostrarRecomendacao;