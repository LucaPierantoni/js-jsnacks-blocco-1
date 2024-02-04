// Calcola la somma e la media dei primi 10 numeri.

let somma = 0;
let media = 0;

for (i = 0; i < 10; i++) {

    somma += i;
    
}
media = somma / i;

document.querySelector("#risultatoSomma").innerHTML = `la somma dei primi 10 numeri e' ${somma}.<br> la media e' ${media}`;

    
