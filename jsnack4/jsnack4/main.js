"use script"
const list=["Sergio","Marco","Bruno"];
const name= prompt("Inserisci il tuo nome");
let invitato = false;
for (let i = 0; i < list.length; i++) {
    if (name===list[i]){
        alert("Accesso Riuscito");
        invitato=true;
        break
    }
}
if (invitato == false){
    alert("Accesso Negato");
}