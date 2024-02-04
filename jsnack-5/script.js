// Stampa il cubo dei primi N numeri,
// (partendo da 1, il numero N indicato dall'utente è compreso)
// dove N è un numero indicato dall’utente.

let numeroUtente = prompt("inserisci un numero");

for (let i = 1; i <= numeroUtente; i++) {

    const cubo = i * i * i;

    document.getElementById("risultato").innerHTML += cubo + "<br>";
    
}
 

