

function sum(accum, curr) { return accum + curr; }
function sum2(accum, curr) { return accum + curr * curr; }
let arr = [1, 2, 3, 4];
const reduce = function (nums, fn, init) {
  let initialValue = init;
  nums.forEach(num => {
    initialValue = fn(initialValue, num)
  });
  return initialValue;
}
console.log(reduce(arr, sum,0))
console.log(reduce(arr, sum2, 100))

console.log('============= For Loop ==============')
const reduceForLoop = function(nums, fn, init) {
  let initialValue = init;
  for(let i = 0; i < nums.length; i++){
    initialValue = fn(initialValue, nums[i])
  }
  return initialValue;
}

console.log(reduceForLoop(arr, sum, 0))
console.log(reduceForLoop(arr, sum2, 100))



console.log('============= For Of ==============')
const reduceForOf = function(nums, fn, init) {
  let initialValue = init;
  for(let num of nums){
    initialValue = fn(initialValue, num)
  }
  return initialValue;
}

console.log(reduceForOf(arr, sum, 0))
console.log(reduceForOf(arr, sum2, 100))




console.log('============= using Recursion ==============')
const reduceArray = function(nums, fn, init) {
  if(!nums.length){
    return init;
  } else {
    const head = nums[0];
    const tail = nums.slice(1);
    const val = fn(init, head);
    return reduceArray(tail, fn, val)
  }
}

console.log(reduceArray(arr, sum, 0))
console.log(reduceArray(arr, sum2, 100))