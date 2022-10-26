"use script"

var somma = 0;

for (var i = 0; i < 10; i++) {

var numero_utente = parseInt(prompt('Inserisci un numero'));

if(!isNaN(numero_utente)) {
somma = somma + numero_utente;
}
}

console.log(somma);