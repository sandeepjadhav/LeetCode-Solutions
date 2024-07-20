/*
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
*/

function greaterThan10(n) { return n > 10; }
function firstIndex(n, i) { return i === 0; }


// Solution 1
const filter = function(arr, fn) {
  let result = [];
  for(i=0; i<arr.length; i++){
    if(fn(arr[i], i)){
      result.push(arr[i])
    }
  }
  return  result;
};
console.log(filter([0,10,20,30], greaterThan10));
console.log(filter([1,2,3], firstIndex));

console.log('============= ForEach ====================');
const filterForEach = function(arr, fn) {
  let result = [];
  arr.forEach((element, i) => {
    if(fn(element, i)){
      result.push(element)
    }
  });
  return  result;
};
console.log(filterForEach([0,10,20,30], greaterThan10));
console.log(filterForEach([1,2,3], firstIndex));
