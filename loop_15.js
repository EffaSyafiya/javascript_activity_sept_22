// for loop

// for(let i = 1; i <=10 ; i++){
//     if(i === 2){
//         console.log('id found');
//         continue;
//     }
//     if(i === 5){
//         console.log('stop the loop');
//         break;
//     }
//     console.log(i);
// }

// while loop

// let i = 0;

// while(i < 10){
//     console.log(i);
//     i++;
// }

// Do wihle

// let i = 100;

// do{
//     console.log(i);
//     i++
// }

// while(i<10);

// loop an array
const numbers = [22,33,44,55,66,77,88,99];

// for (let i = 0 ; i < numbers.length ; i++){
//     console.log(`i ${numbers}`); - whole array on you
//     console.log(i, numbers[i]);
// }

// forEach (its only for arrays)
// numbers.forEach(function(num,index){
//     console.log(index,num)
// });

const users = [
    {name: 'effa', id:1},
    {name: 'syafiya', id:2},
    {name: 'hawa', id:3},
];

for (let i = 0 ; i < users.length ; i++){
    console.log(i,users[i].name);
}

users.forEach(function(user){
    console.log(user.name);
})
