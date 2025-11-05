// NE PAS TOUCHER
const ships = ['S', 'S', 'XS', 'L', 'S', 'S', 'S', 'S', 'M', 'L', 'M', 'M', 'L', 'M', 'S', 'L', 'XL', 'XS', 'M', 'L', 'XS', 'M', 'XS', 'L', 'XL', 'S', 'XL', 'S', 'XL', 'S', 'XL', 'XS', 'XS', 'XL', 'L', 'S', 'S', 'L', 'S', 'S', 'L', 'L', 'XL', 'XS', 'M', 'XS', 'L', 'XL', 'XL', 'XS', 'XL', 'M', 'XL', 'XL', 'M', 'S', 'L', 'L', 'XL', 'L', 'XS', 'M', 'M', 'L', 'XL', 'S', 'XS', 'M', 'XS', 'M', 'L', 'S', 'M', 'L', 'S', 'M', 'XL', 'L', 'XS', 'M', 'XL', 'L', 'S', 'S', 'S', 'XL', 'L', 'XL', 'S', 'M'];
// NE PAS TOUCHER

const countXS = ships.filter(ship => ship === "XS").length;
const countS = ships.filter(ship => ship === "S").length;
const countM = ships.filter(ship => ship === "M").length;
const countL = ships.filter(ship => ship === "L").length;
const countXL = ships.filter(ship => ship === "XL").length;

const counts = { XS: countXS, S: countS, M: countM, L: countL, XL: countXL };

let maxSize;
let sizeNumberMax = 0;
for (let size in counts) {
    if (counts[size] > sizeNumberMax) {
        sizeNumberMax = counts[size];
        maxSize = size;
    }
}
console.log(`${maxSize}_${sizeNumberMax}`);