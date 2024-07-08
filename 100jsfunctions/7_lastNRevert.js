// Write a function named lastNRevert that receives 2 parameters:

// a string named text
// a number - n
// and returns the last n characters of text but in reverse order.


function lastNRevert(text, n) {
    
    let newText = text.slice(-n);
    
    let reversedNewText = newText.split('').reverse().join('');
    
    return reversedNewText;
}

export { lastNRevert };