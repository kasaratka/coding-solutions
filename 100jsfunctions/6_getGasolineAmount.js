// You're driving to a new city for a small weekend trip. Write a function named getGasolineAmount that receives 2 numbers as parameters:

// the number of kilometers to your destination
// average consumption of liters per 100km
// The function should return the amount of gasoline needed to complete the entire round-trip.

function getGasolineAmount(distance, consumptionPer100Km) {
  let n = (consumptionPer100Km * distance) / 100;
  return (n += n);
}

export { getGasolineAmount };
