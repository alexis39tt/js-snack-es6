/* Dato l'array di nomi: const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
*/

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let min = 2;
let max = 4;


/* CON FOR EACH */
console.log("[CON FOR EACH]")

let arrayForEach = [];

myArray.forEach((elm, i) => {
    if (i >= min && i <= max) {
        arrayForEach.push(elm)
    }
});
console.log(arrayForEach)


/* CON FILTER */
console.log("\n[CON FILTER]")

let arrayFilter = myArray.filter((elm, i) => {
    return i >= min && i <= max;
})
console.log(arrayFilter)