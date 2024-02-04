// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

const numeriUtente = []
let somma = 0;

for (i = 0; i < 10; i++) {
    
    numeriUtente[i] = Number(prompt("inserisci un numero"));
    somma = somma + numeriUtente[i];
}

document.querySelector("#risultato").innerText = ` la somma dei numeri (${numeriUtente}) inseriti e' ${somma} `;

console.log (numeriUtente)
console.log (somma)