// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomsten:
// Hoera!
// Hoera!
// Hoera!
// ==========================================
console.log("====================Opdracht 1======================");

for (let i = 0; i < 3; i++) {
    console.log('HoErA!?');
}


// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de vijfde loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
// ==========================================
console.log("====================Opdracht 2======================");

for (let j = 0; j < 5; j++) {
    let log = "loop...";
    if (j === 4) {
        log = "klaar...";
    }
    console.log(log);
}


// ==========================================
// Opdracht 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// Verwachte uitkomsten:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// .... etc.
// 15 is oneven

// Tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over..(bruh)
// ==========================================
console.log("====================Opdracht 3======================");
for (let k = 0; k < 15; k++) {
    let remainder = k % 2;
    if (remainder === 0) {
        console.log(k + ' is even');
    } else {
        console.log(k + ' is oneven');
    }
}


// ==========================================
// [BONUSOPDRACHT] - optioneel: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================
console.log("====================Opdracht 4======================");
let preString = '';
for (let l = 0; l <= 9; l++) {
    if ([3, 6].includes(l)) {
        preString = preString + '>';
    }
    console.log(preString + l)
}