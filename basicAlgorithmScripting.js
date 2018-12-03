function reverseString(str) {
	//Reverse the provided string.
  let arr = str.split('');
  console.log(arr.reverse());
  console.log(arr.length);
  let temp = [];
  let i=0;
  let x = arr.length;
  while( i<x){
    temp[i] = arr.pop();
    console.log(i+ "  " + temp + " "+ arr);
    i++;
  }
  console.log(i);
  console.log(temp);
  return temp.toString();
  
  //or simply: return str.split('').reverse().join('');
}

reverseString("hello");

function factorialize(num) {
	 
	 let temp = [];
	 let i=0 ;
	 let product = 1;
	  while(i<num )
	  {temp[i] = i+1;
	  product *=(i+1);
	  i++;
	  }
	  
	  console.log(product);
	  return num;
	}

	factorialize(20);
	
function findLongestWordLength(str) {
	//Return the length of the longest word in the provided sentence.
	 let arr= str.split(' ');
	 console.log(arr);
	 let temp = arr[0].length ;
	 for(let i=0; i<arr.length; i++){
		 if (temp < arr[i].length)
			 temp = arr[i].length
	 }
	 console.log(temp); 
	  return temp;
	}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

function largestOfFour(arr) {
	  // Return an array consisting of the largest number from each provided sub-array. 
	 //For simplicity, the provided array will contain exactly 4 sub-arrays.
	  let temp = [];
	  for(let i =0; i<arr.length;i++){
		  let arrNum = arr[i][0];
		  for(let j=0;j<arr[i].length;j++)
			  if (arr[i][j] > arrNum)
				  arrNum = arr[i][j];
		   temp[i] = arrNum;
		  }
	  console.log(temp); 
	  return temp;
	}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

function confirmEnding(str, target) {
	  // Check if a string (first argument, str) ends with the given target string (second argument, target).
	  if(str.substring(str.length-target.length, str.length) == target)
	     return true;
	  else 
	      return false;
	 
	}

	confirmEnding("Bastian", "n");
	
function repeatStringNumTimes(str, num) {
	  // Repeat a given string str (first argument) for num times (second argument). 
	  // Return an empty string if num is not a positive number.
	  let cpy = str;
	  for (let i =1; i<num;i++){
		  str = str+cpy;
	  }
	  console.log(str);
	  return str;
	}

	repeatStringNumTimes("abc", 3);
	
function truncateString(str, num) {
    // Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
	//Return the truncated string with a ... ending.
  str= str.split('').splice(0,num).join('')+"...";
  console.log(str);
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

function titleCase(str) {
	//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
	arr = str.split(' ');
	for(let i=0; i<arr.length;i++){
		
		let x = arr[i].charAt(0).toUpperCase()+arr[i].slice(1).toLowerCase();
		arr[i]=x;
	}
	str = arr.join(' ');
	 console.log(str);
	  return str;
	}

titleCase("I'm a little tea pot");

function frankenSplice(arr1, arr2, n) {
  // You are given two arrays and an index.
  //Use the array methods slice and splice to copy each element of the first array into the second array, in order.
	
  for(let i=0; i<arr1.length; i++){
	  arr2.splice(n+i,0,arr1[i]);
  }
	
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

function bouncer(arr) {
  // Remove all falsy values from an array.
	return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

function getIndexToIns(arr, num) {
	  // Return the lowest index at which a value (second argument) should be inserted into 
	//an array (first argument) once it has been sorted. The returned value should be a number.
	arr.sort(function(a, b){return a-b});
	console.log(arr);
  if (arr.length ==0)
      return 0;
	for(let i=0; i<arr.length; i++){
		  if(num == arr[i])
			  return i;
		  else if(num >arr[i] && num < arr[i+1] && i+1 < arr.length)
		      return i+1;
		  else if (i+1 == arr.length)
			  return i+1;
    
   }
	
  return num;
}

//getIndexToIns([40, 60], 50);
getIndexToIns([3, 10, 5], 3)

function chunkArrayInGroups(arr, size) {
  // Write a function that splits an array (first argument) into groups the length of size 
	//(second argument) and returns them as a two-dimensional array.
  let arr2 =[];
  let j=0;
  for(let i=0; i<arr.length;i+=size)
  {
    arr2[j]= arr.slice(i, i+size);
    console.log(arr2);
    j++;
  }
  return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);