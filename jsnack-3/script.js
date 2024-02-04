// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// Solo se è dispari inseriscilo nell’array.
// Stampa a schermo il contenuto dell'array

const dispari = [];
let numeri;

for (let i = 0; i < 6; i++) {

    numeri = +prompt("inserisci un numero: ");

    if (numeri % 2 != 0) {
        dispari.push(numeri);
    }
}

document.querySelector("#risultati").innerText = ` i valori dispari sono: ${dispari} `;

console.log(dispari);
console.log(numeri);
