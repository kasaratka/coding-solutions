// Write a function named getBusinessAddress that receives an Object representing a business as a parameter, and returns a string representation of the it's address.

function getBusinessAddress(business) {
  
  return  `${business.address.street}, number ${business.address.number}, ${business.address.zipCode}`;

}

export { getBusinessAddress };
