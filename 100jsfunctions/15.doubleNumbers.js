// Write a function named doubleNumbers that takes an array of numbers as a parameter. The function should return a new array where each element of the original array is doubled.

function doubleNumbers(numbers) {
  let result=[];
  for(let i=0; i < numbers.length; i++)
  {
      result.push(numbers[i] * 2);
  }
  return result;
}

export { doubleNumbers };