console.log('HELLO WORLD.');
console.error('This is an error.');
console.warn('This is a warning.');

//There are three types of variables: var, let, cost
//With the let variable you can reassign values but with the const variable you cannot reassign values.

/*
There are different types of data types in JS ,they include:strings, numbers, symbols, booleans, null, 
*/

/* this is what concatenate means */
const name ='John';
const age = 30;

console.log('My name is ' + name + ' and I am ' + age + ' years old');

//You can also use the template string

console.log(`My name is ${name} and I am ${age} years old.`);

//String proprties and methods
//properties
const s = 'Hello world ';

console.log(s.length);

//methods.All methods have a parenthesis.
console.log(s.toUpperCase())
console.log(s.substring(0, 5))
console.log(s.substring(0, 5).toUpperCase())

//Arrays - are varibles that hold multiple values.They are also zero based.

//the .push() method- used to add items to the end of an array.
//the .unshift() array method-used to add items at the start of an array.