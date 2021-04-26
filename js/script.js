/*  
- Chiedi all'utente il suo nome,
- Chiedi il suo cognome
- Chiedi il suo colore preferito
- Infine scrivi sulla pagina nomecognomecolorepreferito21 */

var nome = prompt("Ciao, come ti chiami?");
console.log(nome);

var cognome = prompt("Qual è il tuo cognome?");
console.log(cognome);

var favColor = prompt("Qual è il tuo colore preferito?");
console.log(favColor);

var password = nome + cognome + favColor;
console.log(password);

document.getElementById("password").innerHTML = password;