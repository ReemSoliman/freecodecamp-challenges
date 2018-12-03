function sumAll(arr) {
	  let sum = 0;
	  
	  for(let i=arr[0];i<=arr[1];i++){
	    console.log(i);
	    sum = sum + i;
	  }
	  return sum;
	}

	sumAll([1, 4]);
/*Compare two arrays and return a new array with any items only found in one of the two given arrays, 
 but not both. In other words, return the symmetric difference of the two arrays.*/
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for(let i =0; i<arr1.length;i++)
  {
    if(arr2.indexOf(arr1[i])<0)
      newArr.push(arr1[i]);
  }
  for(let i =0; i<arr2.length;i++)
  {
    if(arr1.indexOf(arr2[i])<0)
      newArr.push(arr2[i]);
  }
  return newArr;
}