var parola1 = prompt('Inserisci una parola');
var parola2 = prompt('Inserisci una patola');

console.log('parola 1 = ' + parola1);
console.log('parola 2 = ' + parola2);


var lunghezza1 = parola1.length;
var lunghezza2 = parola2.length;

console.log('lunghezza 1 = ' + lunghezza1);
console.log('lunghezza 2 = ' + lunghezza2);

if(lunghezza1 > lunghezza2) {
    
    console.log(parola2);
    console.log(parola1);
} else if (lunghezza2 > lunghezza1) {
    
    console.log(parola1);
    console.log(parola2);
} else {
    console.log('sono uguali');
}
