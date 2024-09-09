// Write a function named addDays that receives 2 parameters:

// a date - initialDate
// a number - daysCount
// and returns a new date created by adding daysCount days to initialDate.

function addDays(initialDate, daysCount) {
  const resultDate = new Date(initialDate);

  resultDate.setDate(resultDate.getDate() + daysCount);

  return resultDate;
}

export { addDays };
