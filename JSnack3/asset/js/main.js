// Dato l'array di nomi:
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

// e dati due numeri min e max (min più piccolo di max) --> per i PROMPT TODO convalida


let max;
let min;

// validazione basilare per l'inserimento dei valori MIN e MAX
do {
    min = parseInt(prompt('Inserisci un numero da 0 a 5'))
    max = parseInt(prompt('Inserisci un numero da 0 a 5 (deve essere maggiore di quello inserito precedentemente!!'))
} while (isNaN(min) || isNaN(max) || min > max || min < 0 || max > 5);

// nuovo array in cui pushare gli elementi che soddisfano la condizione
const newMyArray2 = [];

// Eseguiamo questo esercizio prima con forEach 
myArray.forEach(
    (element,index) => {

        // Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
        if (index > min && index < max) {
            newMyArray2.push(element)
        }
    }
)

// condizioni per stampare il messaggio in base al numero degli elementi che soddisfano le condizioni precedenti
if ( (max - min) == 2) {
    document.getElementById('container').innerHTML += `Il nome scelto è <span style="font-weight: bold;">${newMyArray2.join(', ')}</span>`
} else if ( (max - min ) == 0 || (max - min ) == 1 ) {
    document.getElementById('container').innerHTML += `Mi dispiace... non c'è posto per nessuno`
} else {
    document.getElementById('container').innerHTML += `I nomi scelti sono <span style="font-weight: bold;">${newMyArray2.join(', ')}</span>`
}
 

// e poi con filter.
// const newMyArray3 = myArray.filter() 