// Create some arrays
const numbers = [43,65,77,100,1,23];
const numbers2 = new Array(22,44,55,66,77);
const fruits = ['Apple','Orange','Kiwi','Peach'];
const mix = ['hello',3,true,undefined,{a:1,b:2}];

let val;

// Get an array length
val = numbers.length;
val = fruits.length;
val = mix.length;

// check if array is array
val = Array.isArray(numbers2);

// Get a single value
val = numbers[3];

// Change the value
numbers[3]=250;

// find the index of te value
val = numbers.indexOf(1);

// How to mutate an array
// add on to the end
numbers.push(777);

// add to the beginning
numbers.unshift(55);

// remove from the end
numbers.pop();

// remove from the beginning
numbers.shift();

// splice
// numbers.splice(1,4);

// reverse method
// numbers.reverse();

// concat (merge them together)
val = numbers.concat(numbers2);

// // sort arrays(little bit tricky)
// val = fruits.sort();
// val = numbers.sort();

// // sorting an array with compare function (desc,asc order)
// val = numbers.sort(function(x,y){
//     return x-y
// });

// val = numbers.sort(function(x,y){
//     return y-x
// });

// Find method
// Eg: want to find any number over 50 
function over50(num){
    return num >50;
};

val = numbers.find(over50);

console.log(val);