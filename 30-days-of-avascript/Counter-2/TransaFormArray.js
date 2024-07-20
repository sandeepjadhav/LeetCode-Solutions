// Transforming Array Elements Using Indexed Functions
// Solution 1
const map = function(arr, fn) {
  let result = [];
  for(i=0; i<arr.length; i++){
     result.push(fn(arr[i], i))
  }
  return  result;
};

function plusI(n, i) { return n + i; }
function plusone(n) { return n + 1; }

console.log(map([1,2,3], plusone));
console.log(map([1,2,3], plusI));


console.log('============= ForEach ====================');
const mapForEach = function(arr, fn) {
  let result = [];
  arr.forEach((element, i) => {
    result.push(fn(element, i))
  });
  return  result;
};
console.log(mapForEach([1,2,3], plusone));
console.log(mapForEach([1,2,3], plusI));
