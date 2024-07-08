// Write a function named max5 that receives 5 numbers as parameters and returns the biggest one between them.


function max5(nr1, nr2, nr3, nr4, nr5) {

    const arr =  [...arguments]

    const max = Math.max(...arr)

    return max;
}
export { max5 };