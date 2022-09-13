const person = {
    firstName: 'effa',
    lastName: 'syafiya',
    age: 22,
    email: 'effa@gmail.com',
    hobbies:['music','sport'],
    address:{
        city:'KT',
        country:'Malaysia'
    }
}

let val;
// get the specific value
val = person.age; //prefered because easier to remember
val = person['lastName'];
val = person.firstName;
val = person.hobbies;
val = person.hobbies[0];
val = person.hobbies[1];
val = person.address;
val = person.address.city;
val = person.address.country;
val = person.email;

// console.log(val);
const people = [
    {userName:'effa', age:22},
    {userName:'syafiya', age:20},
    {userName:'amran', age:46},
];

console.log(people);
val = people[0].userName;

// console.log(val);
for (let i = 0 ; i < people.length ; i++){
    console.log(people[i].age);
}
 