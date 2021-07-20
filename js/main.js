// 1. chiedi all’utente il cognome
var cognome = prompt('Quale è il tuo cognome');
cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1).toLowerCase();

// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var lista = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
lista.push(cognome);

console.log('la lista è composta da: ' + lista);

// 3a. stampa la lista ordinata alfabeticamente dalla A alla Z
console.log('Lista dalla A alla Z: ' + lista.sort());
// 3b. stampa la lista ordinata alfabeticamente dalla Z alla A 
console.log('Lista dalla Z alla A: ' + lista.reverse());

// 4a scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var lista_ordinata = lista.sort();
console.log(cognome + ' si trova al ' + (lista_ordinata.indexOf(cognome) + 1) + ' ° posto della lista ordinata dalla A alla Z');

// 4b scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var lista_reverse = lista.reverse();
console.log(cognome + ' si trova al ' + (lista_reverse.lastIndexOf(cognome) + 1) + ' ° posto della lista ordinata dalla Z alla A');
