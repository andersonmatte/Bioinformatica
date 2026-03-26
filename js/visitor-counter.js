import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    increment
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

/*
 CONFIGURAÇÃO GERADA PELO FIREBASE
*/

const firebaseConfig = {

    apiKey: "AIzaSyCwdwA9R7P2NeD0qafTeEZR9rFkD0E--fI",

    authDomain: "bioinformatica-portal.firebaseapp.com",

    projectId: "bioinformatica-portal",

    storageBucket: "bioinformatica-portal.firebasestorage.app",

    messagingSenderId: "805405216124",

    appId: "1:805405216124:web:f15bea8143d2c2015368f9"

};

const app =
    initializeApp(
        firebaseConfig
    );

const db =
    getFirestore(
        app
    );

async function initVisitorCounter() {

    try {

        const ref =
            doc(
                db,
                "metrics",
                "visitors"
            );

        /*
         evita contar múltiplas páginas
         no mesmo dispositivo
        */

        const visited =
            localStorage.getItem(
                "visited"
            );

        if (!visited) {

            try {

                await updateDoc(
                    ref,
                    {
                        count:
                            increment(1)
                    }
                );

            } catch {

                /*
                 cria o documento
                 se não existir
                */

                await setDoc(
                    ref,
                    {
                        count: 1
                    }
                );

            }

            localStorage.setItem(
                "visited",
                "true"
            );

        }

        const snapshot =
            await getDoc(
                ref
            );

        const count =
            snapshot.data().count;

        const el =
            document.getElementById(
                "visit-count"
            );

        if (el) {

            el.textContent =
                count;

        }

    } catch (error) {

        console.error(
            "Erro contador:",
            error
        );

    }

}

window.initVisitorCounter =
    initVisitorCounter;