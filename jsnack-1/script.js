// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const primaParola = prompt("inserisci una parola: ");
const secondaParola = prompt("inserisci un'altra parola: ");

console.log(primaParola);
console.log(secondaParola);

if (primaParola.length <= secondaParola.length) {

    document.querySelector("#prima").innerText = `la parola piu' corta e': ${primaParola} `;
    document.querySelector("#seconda").innerText = `la parola piu' lunga e': ${secondaParola} `;
    
} else {

    document.querySelector("#prima").innerText = `la parola piu' lunga e': ${primaParola} `;
    document.querySelector("#seconda").innerText = `la parola piu' corta e': ${secondaParola} `;
}