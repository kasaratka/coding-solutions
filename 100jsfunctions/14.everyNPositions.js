
// Write a function named everyNPositions that receives 2 parameters:

// a string - message
// a number - step
// and returns a new string composed of all characters from message that are on positions divisible by step.

function everyNPositions(message, step) {
    let result = ''; 
    for(let i = 0; i < message.length; i += step) {
        result += message[i];
    }
    return result;
}

export { everyNPositions };