// Write a function named getLongestString that receives an Array of strings as parameter and returns the longest one.

// If the Array is empty, return an empty string.

// If there are multiple strings of the same maximum length, return the first one.

function getLongestString(arrayOfStrings) {
    let result="";
    for(let i=0; i < arrayOfStrings.length; i++ ){
        if(arrayOfStrings[i].length>result.length){
            result = arrayOfStrings[i];
        }
    }
    return result;
}

export { getLongestString };