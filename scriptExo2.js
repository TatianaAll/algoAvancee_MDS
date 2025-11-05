// NE PAS TOUCHER
const sizes = [4, 8, 1, 10, 5, 9, 4, 4, 2, 8, 4, 9, 5, 4, 7, 1];
const maxCapacity = 65;
// NE PAS TOUCHER

let nbVaisseauAmarrés = 0;
let capacitéRestante = maxCapacity;
for (vaisseau of sizes) {
    if (vaisseau <= capacitéRestante ) {
        nbVaisseauAmarrés ++;
        capacitéRestante -= vaisseau;
    } 
}
console.log(`${nbVaisseauAmarrés}_${capacitéRestante}`);