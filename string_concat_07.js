const firstName = 'Effa';
const lastName = 'Syafiya';
const age = 22;
const test = 'Hello from javascript';
const courses = 'web development,web design,cloud';


let val;

val = firstName + lastName;

// concatination
val = firstName+' '+lastName;

// Append
val = 'Amran';
val += 'Mustapha';

// escaping
val = 'That\'s awesome';

// length
val = firstName.length;

// change case
val = firstName.toLowerCase();
val = firstName.toUpperCase();

// char at
val = firstName.charAt('2');

// indexOf
val = firstName.indexOf('a');
val = firstName.lastIndexOf('a');

// substring
val = firstName.substring(1,3);

// slice
val = firstName.slice(0,3);
val = firstName.slice(-3);

// split
val = test.split('');
val = courses.split(',');

// replace (case sensitive)
val = test.replace('Javascript','React.js');


// includes()
val = test.includes('effa');

console.log(val);

