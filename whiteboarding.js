// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"
// Output: "Jasmine%20Ann%20Jones"

function spaceReplace(string) {
  let output = "";
  for(let i = 0; i < string.length; i++){
    if(string[i] === " ") {
      output += "%20";
    } else {
      output += string[i];
    }
  }
  return output;
}
spaceReplace("I had a dream inside my jar")

function spaceReplaceRecurse(string) {
  let space = string.indexOf(" ");
  if(space === -1) return string.slice(0);
  return string.slice(0, space) + "%20" +  spaceReplaceRecurse(string.slice(space + 1));
}
spaceReplaceRecurse("I had a dream inside my jar");

// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi", 7, 53]
// Output: [7, 9, "hi", 12, 53]

const dedupeArray = arr => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) result.push(arr[i]);
  }
  return result;
};

const filterDup = arr => {
  const result = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  })
return result;};

const dedupeArrayRecurse = (arr, result = []) => {
  if (!arr.length) return result;
  if (!result.includes(arr[0])) result.push(arr[0]);
  return dedupeArray(arr.slice(1), result);
};


// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"
// Output: "3ab2c4da"

function compressString(str) {
  let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) { 
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      if(count > 1 ){
        result += count + str[i];
      } else {
        result += str[i];
      }
      
      count = 1;
    }
  }
  return result;
}

function compressStringRecurse(str) {
  if (str.length === 0) return "";
  let count = 1;
  let i = 1;
  while (i < str.length && str[i] === str[i - 1]) {
    count++;
    i++;
  }
  if(count > 1) {
    return count + str[i - 1] + compressStringRecurse(str.substr(i));
  } else {
    return str[i - 1] + compressStringRecurse(str.substr(i));
  }
}


// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"
// Output: false
// Input: "copyright"
// Output: true
// Ask clarifying questions?	
// Write down inputs and outputs?	
// Consider edge cases?	
// Use technical language correctly?	
// Explain their solution clearly, including summarizing the code from input to output?	
// Correctly solve the problem?
const hasUnique = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
};


// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms — take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem — as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]
// Output: [2, 7, 9, 12]


function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j = j - 1;
      }
      arr[j + 1] = key;
  }
  return arr;
}