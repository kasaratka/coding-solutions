// Write a function named getMillisecondsBetween that receives 2 dates as parameters and returns the number of milliseconds between them.

function getMillisecondsBetween(date1, date2) {

  let time1 = date1.getTime();
  let time2 = date2.getTime();

  let difference = Math.abs(time1 - time2);

  return difference;
}

export { getMillisecondsBetween };
