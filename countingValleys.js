'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

// have a counter for the purpose of maintaining sea level at 0
// for each one, you will increment or decrement the level
//somehow, when it passes 0, I want to trip a boolean, and add to a "valley" counter if it drops below?

function countingValleys(steps, path) {
    let counter = 0
    let valley = false
    let valleyCounter = 0
    
    for (const step of path) {
        if (step === "U") {
            counter++
        } else {
            counter--
        }
        
        if (counter < 0 && valley === false) {
            valley = true;
            valleyCounter++;
        } else if (counter >= 0 && valley == true) {
            valley = false
        } else {
            //pass
        }
    }
    return valleyCounter

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}