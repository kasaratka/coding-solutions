// Write a function named mostRepetitions that receives 3 parameters:

// a string - string1
// a string - string2
// a letter
// and returns the string that has the most occurrences of the specified letter. If both have the same number of occurrences return string1.



function mostRepetitions(string1, string2, letter) {
  let count1=0;
  let count2=0;
  for(let i=0; i <= string1.length;i++){
      if(letter==string1[i]){
          count1+=1;
      }
  }
  for(let j=0; j <= string2.length;j++){
      if(letter==string2[j]){
          count2+=1;
      }
  }
  if (count1>=count2){
      return string1;
  }
  else return string2;
}

export { mostRepetitions };