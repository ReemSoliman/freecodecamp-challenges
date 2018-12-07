
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

function destroyer(arr) {
	
	var args = [].slice.call(arguments);
	arr = args[0];
	//console.log(args);
    
	return arr.filter(function(val){return !args.includes(val); });
}

	console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
	console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
	console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
	console.log(destroyer([2, 3, 2, 3], 2, 3));
	
function whatIsInAName(collection, source) 
{
  // What's in a name?
  var arr = [];
  let srcKeys = Object.keys(source);
  
  return collection.filter(function (obj) {
	    for(var i = 0; i < srcKeys.length; i++) {
	      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
	        return false;
	      }
	    }
	    return true;
	  });
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
/*function spinalCase(str) {
	  let i =0;
	  let arr = [];
	  do{
		  indx = str.search(/\W|\B[A-Z]/);
		  if(indx>-1)
		     arr.push(str.slice(i,indx).toLowerCase());
		  else
			  arr.push(str.toLowerCase());
		  str = str.substring(indx+1);
		  i = 0;
		  console.log(str+ ","+ indx+","+arr);
	  }
	  while(i<str.length&& indx > -1)
	 return arr.join("-");	  
	  
}
*/
function spinalCase(str) {
	  // Create a variable for the white space and underscores.
	  var regex = /\s+|_+/g;

	  // Replace low-upper case to low-space-uppercase
	  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

	  // Replace space and underscore with -
	  return str.replace(regex, '-').toLowerCase();
	}

	// test here
	spinalCase('This Is Spinal Tap');
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
//console.log(spinalCase("The_Andy_Griffith_Show"));
function myReplace(str, before, after) {

	  str = str.replace(before,after);
	  console.log(str);
	  return str;
	}

	myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");	