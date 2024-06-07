// Write a function name getMonthsNeededToWait that receives 2 numbers as parameters, representing the index of two months.

// The function should return the number of months we have to wait, to get from the first month to the second one.

function getMonthsNeededToWait(index1, index2) {
   
    if (index1 > index2) {
      return 12 - index1 + index2;
    }
    return index2 - index1;
}


export { getMonthsNeededToWait };
