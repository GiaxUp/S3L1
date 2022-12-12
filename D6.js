/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
  return l1 * l2;
}
const areaTotal = area(5, 10); // Dovrebbe restituire 50
console.log(areaTotal);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a, b) {
  if (a === b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
}
const sumDiff = crazySum(3, 4); // Dovrebbe restituire 7
const sumEqual = crazySum(5, 5); // Dovrebbe restituire 30
console.log(sumDiff);
console.log(sumEqual);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num) {
  if (num > 19) {
    return Math.abs(num - 19) * 3;
  } else {
    return Math.abs(num - 19);
  }
}
const numLower = crazyDiff(15); // Dovrebbe restituire 4
const numHigher = crazyDiff(25); // Dovrebbe restituire 18
console.log(numLower);
console.log(numHigher);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
const firstNum = boundary(30); // Dovrebbe restituire true
const secondNum = boundary(120); // Dovrebbe restituire false
const thirdNum = boundary(400); // Dovrebbe restituire true
console.log(firstNum, secondNum, thirdNum);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(string) {
  if (string.startsWith("EPICODE")) {
    return string;
  } else {
    return "EPICODE " + string;
  }
}
const resultEpiYes = epify("EPICODE Questo è il caso in cui la frase inizi con Epicode, quindi l'ho lasciata lì.");
const resultEpiNo = epify("Questo è il caso in cui la frase non inizi con Epicode, quindi l'ho aggiunta.");
console.log(resultEpiYes);
console.log(resultEpiNo);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(number) {
  if (number % 3 == 0 || number % 7 == 0) {
    return true;
  } else {
    return false;
  }
}
const numMultiple = check3and7(21); // Dovrebbe restituire true
const numNotMultiple = check3and7(20); // Dovrebbe restituire false
console.log(numMultiple, numNotMultiple);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(string) {
  return string.split("").reverse().join("");
}
const stringToRevert = reverseString("Giacomo"); // Dovrebbe restituire omocaiG
console.log(stringToRevert);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(string) {
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(" ");
}
const phraseUpper = upperFirst("a little fox was looking at you");
console.log(phraseUpper);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(string) {
  return string.substring(1, string.length - 1);
}
const cutResult = cutString("Crocodile"); // Dovrebbe restituire rocodile
console.log(cutResult);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  let randomNumbers = [];
  for (let i = 0; i < n; i++) {
    randomNumbers.push(Math.floor(Math.random() * 11));
  }
  return randomNumbers;
}
const randomResult = giveMeRandom(5);
console.log(randomResult);
