// if(condition){
// do something (if it is true) Eg: password
// } else{
    // do something else (if it is wrong)
// }

const id = 100;

// want to check the id is 'equal to something'
// if(id == 100){//normal equal
    // console.log('id is 100');
// }else{
    // console.log('id is not 100');
// }
// Not equal to
// if(id != 100){
    // console.log('correct');
// }else{
    // console.log('id is 100');
// }
// equal value and type
// if (id === 100){
    // console.log('id is a number')
// } else{
    // console.log('Not Found')
// }

// greater than or less than
// if(id >= 100){
//     console.log('valid value');
// }else{
//     console.log('invalid')
// }

const color = 'yellow';

// if(color === 'red'){
//     console.log('color is red');
// }else if(color === 'green'){
//     console.log('color is green');
// }else{
//     console.log('color is not valid');
// }

// logical operators
// && - both of them need to be true 
// || - either one need to be true

const userName = 'Effa';
const age = 22;

// AND &&
// if(age >=0 && age <=12){
//     console.log(`${userName} is a child`);
// } else if (age >= 13 && age <=19){
//     console.log(`${userName} is a teenager`);
// } else{
//     console.log(`${userName} is an adult`);
// }

// OR ||
if(age < 16 || age >65){
    console.log(`${userName} can not run`);
}else{
    console.log(`${userName} is registered`);
}

// ternary operators(if there is only one condition, we can write it)

console.log(id === 100 ? 'correct number' : 'invalid number');

//without braces(optional - to look more neat)
if (id == 100)
    console.log('id is a number')
else
    console.log('Not Found')
