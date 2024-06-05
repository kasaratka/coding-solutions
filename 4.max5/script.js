function max5(nr1, nr2, nr3, nr4, nr5) {

    const arr =  [...arguments]

    const max = Math.max(...arr)

    return max;
}
export { max5 };