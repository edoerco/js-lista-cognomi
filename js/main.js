// 1. chiedi all’utente il cognome
var cognome = prompt('Quale è il tuo cognome');

// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var lista_cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
lista_cognomi.push(cognome);
console.log('la lista è composta da: ' + lista_cognomi);

// 3a. stampa la lista ordinata alfabeticamente dalla A alla Z
console.log('Lista dalla A alla Z: ' + lista_cognomi.sort());
// 3b. stampa la lista ordinata alfabeticamente dalla Z alla A 
console.log('Lista dalla Z alla A: ' + lista_cognomi.reverse());


// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova