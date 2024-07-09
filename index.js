import { ovenTime } from "./cookbook.js";  



const expectedMinsInOven = ovenTime;
console.log('Expected Oven Time:', expectedMinsInOven, 'mins');

function remainingMinsInOven (mins) {
    let remaining = (expectedMinsInOven - mins)
    return remaining;
}

function layersPrep (layers) {
    let prepTime = (layers * 2)
    return prepTime;
}

function processInput() {
    const userInput = document.getElementById('userInput').value; 
    const inputNumber = Number(userInput);
    const remainingTime = remainingMinsInOven(inputNumber);

    const now =  new Date();
    const futureTime = new Date(now.getTime() + remainingTime * 60000);

    if (window.countdownInterval) {
        clearInterval(window.countdownInterval);
    }

    window.countdownInterval = setInterval(() => {
        const newNow = new Date().getTime();
        const t = futureTime.getTime() - newNow;
        if (t <= 0) {
            clearInterval(window.countdownInterval);
            document.getElementById("timer").innerHTML = "0:0:00";
            document.getElementById("output").innerText = 'Time is up!';
            return;
        }
        const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((t % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
    }, 1000);

    const futureTimeString = futureTime.getHours() + ":" + futureTime.getMinutes() + ":" + futureTime.getSeconds();
    document.getElementById("output").innerText = remainingTime + ' minutes. Ready by ' + futureTimeString;
};
function layerTime () {
    const layerInput = document.getElementById('layerInput').value;
    const layerNumber = Number(layerInput);
    const layerResult = layersPrep(layerNumber);
    document.getElementById("layerOutput").innerText = layerResult + ' minutes';
}

window.remainingMinsInOven = remainingMinsInOven;
window.processInput = processInput;
window.layerTime = layerTime;



// const timeRemains = remainingMinsInOven(10);
// console.log('Remaining Time:', timeRemains);


// const totalPrep = prepTimeInMins(4);
// console.log('Prep time:', totalPrep, 'mins');

// function totalTimeInMins (totalPrep, timeRemains) {
//     let totalTime = (totalPrep + timeRemains)
//     return totalTime;
// }

// const workingTime = totalTimeInMins(totalPrep, timeRemains)
// console.log('Total Working Time:', workingTime, 'mins');


