// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


const firebaseConfig = {

  apiKey: "AIzaSyBuifcGXOkX8td9DqnBvSONLsrUNwUYqm4",

  authDomain: "novaera-b72d5.firebaseapp.com",

  projectId: "novaera-b72d5",

  storageBucket: "novaera-b72d5.firebasestorage.app",

  messagingSenderId: "666312346083",

  appId: "1:666312346083:web:0902c1c7937400088df8d6",

  measurementId: "G-VWECKC472F"

};


// Inicializa Firebase
const app = initializeApp(firebaseConfig);


// Analytics
const analytics = getAnalytics(app);


// Cria banco Firestore
const db = getFirestore(app);


// MUITO IMPORTANTE
export { db };