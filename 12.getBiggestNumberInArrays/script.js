// Write a function named getBiggestNumberInArrays that receives 2 parameters:

// an array of numbers named numbers1
// another array of numbers named numbers2
// and returns the maximum number between those 2 arrays.

function getBiggestNumberInArrays(numbers1, numbers2) {
    let max1=numbers1[0];
    let max2=numbers2[0];
    for(let i = 1; i<numbers1.length; i++){
       if( numbers1[i]> max1){
         max1 = numbers1[i];
       }
    }
    for(let j = 1; j<numbers2.length; j++){
       if( numbers2[j]> max2){
         max2 = numbers2[j];
       }
    }
    if(max1>max2){
        return max1;

    }
    else{
        return max2;
    }
}

export { getBiggestNumberInArrays };
