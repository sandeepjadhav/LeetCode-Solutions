
const functions= [x => x + 1, x => x * x, x => 2 * x];
const functions1 = [x => 10 * x, x => 10 * x, x => 10 * x];

const componse = function(functions){
  return function(x){
    return functions.reduceRight((acc, fn) => fn(acc), x);
  }
}
const fn = componse(functions);
console.log(fn(4));
const fns = componse(functions1);
console.log(fns(1));

console.log('============ For Loop ==============');

const componseFor = function(functions){
  return function(x){
    let result=x;
    for(let i = functions.length - 1; i >= 0; i--){
      result = functions[i](result);
    }
    return result;
  }
}

const fn3 = componseFor(functions);
console.log(fn3(4));
const fn4 = componseFor(functions1);
console.log(fn4(1));
