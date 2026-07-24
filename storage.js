// ===============================
// STORAGE.JS - FIRESTORE CRUD
// ===============================

import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    updateDoc,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


// Coleção do banco
const funcionariosCollection = collection(db, "funcionarios");


// ===============================
// CREATE - ADICIONAR FUNCIONÁRIO
// ===============================

export async function adicionarFuncionario(funcionario) {

    try {

        const docRef = await addDoc(funcionariosCollection, funcionario);

        return docRef.id;

    } catch (erro) {

        console.error("Erro ao adicionar funcionário:", erro);

    }

}


// ===============================
// READ - LISTAR TODOS
// ===============================

export async function listarFuncionarios() {

    try {

        const snapshot = await getDocs(funcionariosCollection);


        return snapshot.docs.map(documento => ({

            id: documento.id,

            ...documento.data()

        }));


    } catch (erro) {

        console.error("Erro ao buscar funcionários:", erro);

        return [];

    }

}


// ===============================
// READ - BUSCAR UM FUNCIONÁRIO
// ===============================

export async function buscarFuncionario(id) {


    try {


        const referencia = doc(db, "funcionarios", id);


        const snapshot = await getDoc(referencia);



        if (!snapshot.exists()) {

            return null;

        }



        return {

            id: snapshot.id,

            ...snapshot.data()

        };


    } catch (erro) {

        console.error("Erro ao buscar funcionário:", erro);

        return null;

    }


}


// ===============================
// UPDATE - ATUALIZAR FUNCIONÁRIO
// ===============================

export async function atualizarFuncionario(id, dados) {


    try {


        const referencia = doc(db, "funcionarios", id);


        await updateDoc(referencia, dados);



    } catch (erro) {


        console.error("Erro ao atualizar funcionário:", erro);


    }


}


// ===============================
// DELETE - EXCLUIR FUNCIONÁRIO
// ===============================

export async function excluirFuncionario(id) {


    try {


        const referencia = doc(db, "funcionarios", id);


        await deleteDoc(referencia);



    } catch (erro) {


        console.error("Erro ao excluir funcionário:", erro);


    }


}