// Solution 1 using traditional function
const createCounter = function (init) {
  let counter = init;
  function increment() {
    return ++counter;
  }
  function descrement() {
    return --counter;

  }
  function reset() {
    return (counter = init)
  }
  return {
    increment, descrement, reset
  }
}
const counter = createCounter(5)
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.descrement());
console.log(counter.reset());


// Solution 2 using arrow function

const createCounter2 = function (init) {
  let counter = init;
  return {
    increment: () => ++counter,
    descrement: () => --counter,
    reset: () => (counter = init)
  }
}
console.log('============ Arrow Counter ===========');
const arrowCounter = createCounter2(5)
console.log(arrowCounter.increment());
console.log(arrowCounter.increment());
console.log(arrowCounter.descrement());
console.log(arrowCounter.reset());

// Solution 2 using arrow function
class classCounter2{
  constructor(init){
    this.init = init;
    this.counter = init;
  }
  increment () {
    this.counter+=1;
    return this.counter;
  }
  descrement()  {
    this.counter-=1;
    return this.counter;
  }
  reset () {
    this.counter-=this.init;
    return this.counter;
  }
}
console.log('============ Class Counter ===========');
const classCounter = new classCounter2(5)
console.log(classCounter.increment());
console.log(classCounter.increment());
console.log(classCounter.descrement());
console.log(classCounter.reset());
