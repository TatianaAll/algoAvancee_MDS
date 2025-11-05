// NE PAS TOUCHER
const shipsFirstPeriod = 6;
const shipsSecondPeriod = 8;
const shipsThirdPeriod = 7;
const shipsMax = 17;
// NE PAS TOUCHER

let shipsPeriodsArray = [shipsFirstPeriod, shipsSecondPeriod, shipsThirdPeriod];

let totalShips = shipsPeriodsArray.reduce((accumulator, currentValue) => accumulator + currentValue);

let response = remainingPlaces(totalShips, shipsMax);
console.log(response);

function remainingPlaces(numberShips, shipsMax) {
    if (numberShips < shipsMax ) {
        return `OK il reste ${shipsMax - numberShips} place(s)`;
    } else if (numberShips > shipsMax) {
        return `KO il ne reste plus de place: ${shipsMax - numberShips} place(s)`;
    } else {
        return `C'était la dernière place !`;
    }
}
