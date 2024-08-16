// Write a function named getMonthOfTheYear that receives a Date as a parameter and returns the month of the year as a human-readable string, in English.


function getMonthOfTheYear(date) {
  const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ];

  let monthIndex = date.getMonth();

  return months[monthIndex];
}

export { getMonthOfTheYear };
