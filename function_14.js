// Function declaration
function greet(firstName= 'Amran', lastName = 'Mustapha'){
// if(typeof firstName === 'undefined'){firstName = 'Amran'}
// if(typeof lastName === 'undefined'){lastName = 'Mustapha'}

    // console.log('welcome!!! ' +firstName);
    console.log(`welcome ${firstName} ${lastName}`);
}
greet();

// function expression //the name of function is the name of variable
const square = function (x=3){ 
    return x*x;
}; 

console.log(square(5));

// Immediate invokable function expression
(function(){
    console.log('IIFE RAN...')
})(); //the 2nd () is calling it immediately

(function(userName='effa'){
    console.log(`welcome ${userName}`)
})();

// property method
// when a function is a property of an object its
// called method
const todo={
    add : function(){
        console.log('add to the list');
    },
    edit : function(){
        console.log('edit the list');
    }
}
        todo.add();
        todo.edit();
