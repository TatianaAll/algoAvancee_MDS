// NE PAS TOUCHER
const distance = 212725;
const shipSize = 'XS';
const consumptions = ['XS:2.4', 'S:5.9', 'M:9.7', 'L:14.2', 'XL:21.4'];
const crew = [191, 168, 183, 183, 168, 188, 187, 164, 190, 181, 161, 157, 169, 184];
const safetyIndex = 3;
// NE PAS TOUCHER

// fuel en T
function fuelQuantity(dist, consumption) {
    return Math.ceil((dist/10000)*consumption);
}

// nourriture en kg
function foodQuantity(dist, crewArray) {
    const crewSizeTotal = crewArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    return Math.ceil((dist/10000)*(crewSizeTotal/10));
}

//equipement
function toolsQuantity(safetyLevel, crewArray){
    let factor = 0;
    crewArray.forEach(mate => {
        if (mate >= 180) {
            factor += 45;
        } else {
            factor += 40;
        }  
    });
    return (safetyLevel*factor);
}

let arrayUtilities = [];

const consumptionPerSize = consumptions.map(ship => ship.split(":"));
const consuptionCurrentShip = consumptionPerSize.find(consumList => consumList[0] === shipSize)[1];

arrayUtilities.push(fuelQuantity(distance, consuptionCurrentShip));

arrayUtilities.push(foodQuantity(distance, crew));

arrayUtilities.push(toolsQuantity(safetyIndex, crew));
console.log(arrayUtilities.join("_"));


