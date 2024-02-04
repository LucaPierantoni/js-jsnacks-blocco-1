// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

let numeri = prompt("inserisci un numero di 4 cifre");
let somma = 0;

if (numeri.length === 4) {

    for (let i = 0; i < numeri.length; i++) {

        somma += Number(numeri[i]);
    }

    document.querySelector("#risultato").innerText = `La somma dei numeri (${numeri}) è ${somma}`;

} else {

    document.querySelector("#risultato").innerText =` in numero deve essere di 4 cifre. `;

}

console.log(numeri);