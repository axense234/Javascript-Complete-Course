// console.log('Hello')
// alert('yo')

// --------------------------------------------------------------------------- 
// Variables:


let b = 'smoothie';
console.log(b);

let SomeNumber = 45;
console.log(SomeNumber);

document.getElementById('some-text').textContent = 'Hello world!';

let age = prompt('What is your age?');
document.getElementById('current-age').textContent = age;
// ---------------------------------------------------------------------------

// Numbers:
let num1 = 5.7
let num2 = 4.3

// Increment num1 by 1
num1++
console.log(num1)
// Decrement num2 by 1
num2--
console.log(num2)

// Divide,multiply,remainder
let num4 = 10
let num5 = 2
let num6 = 3
dividednumber= num4 / num5
multipliednumber = num5 * num6
remaindernumber = num4 % num6
console.log(dividednumber)
console.log(multipliednumber)
console.log(remaindernumber)

// Increment/Decrement by any number
num1 += 10.3
console.log(num1)

// Functions
function fun() {
    console.log("this is a function");
}

fun();

// Functions 2
function calloutname() {
    let name = prompt('What is your name?');
    document.getElementById('current-name').textContent = 'Hello ' + name + '!';
}

calloutname()

function sum_of_numbers(num1, num2) {
    num3 = num1 + num2;
    console.log(num3);
    
}

sum_of_numbers(num1, num2);


// While Loops
let numwhile = 0;
while(numwhile < 100) {
    numwhile++;
    console.log(numwhile);
}

// For Loops
for(let numfor = 0; numfor < 100; numfor++) {
    console.log(numfor)
}

// Data Types
let numberdata = 34;
let stringdata = 'BOB';
let booleandata = false;
let objectdata = {firstname: 'Bob', secondname: 'Nigga'};
let undefineddata;
let nulldata = null;
let arraydata = ['apple', 'usedcondoms', 'idk'];

// Strings in Javascript(common methods)
let fruit = 'banana';
let morefruits = 'banana\napple'
console.log(fruit.length)
console.log(fruit.indexOf('n'))
console.log(fruit.slice(2, 5))
console.log(fruit.replace('banana', '012345'))
console.log(fruit.toUpperCase())
console.log(fruit.toLowerCase())
console.log(fruit[2])

// Arrays in Javascript
let fruits1 = ['banana', 'apple', 'orange', 'pineapples']
let fruits2 = new Array('banana', 'apple', 'orange', 'pineapples')

for(let i=0;i < fruits1; i++) {
    console.log(fruits[i])
}

// Array common methods
console.log(fruits1.join('-'))
console.log(fruits1, fruits1.pop(), fruits1) // deletes the last item
console.log(fruits1, fruits1.shift(), fruits1) // deletes the first item
console.log(fruits1, fruits1.push('blackberries'), fruits1) // appends
let vegetables = ['cucumbers', 'dicks']
let AllGroceries = fruits1.concat(vegetables) // add lists together

// Objects in Javascript
 let student = {
     firstname: 'Bob',
     secondname: 'Nigga',
     age: 34,
     height: 164,
     StudentInfo: function(){
         return this.firstname + '\n' + this.secondname + '\n' + this.age;
     }
    };
 console.log(student.secondname);
 student.secondname = 'Joe Mama';
 console.log(student.secondname);
 console.log(student.StudentInfo())

// Conditionals, Control flows(if else)
// && AND, || OR
if ((age <= 35) && (age >= 18)) {
    status = 'target demo';
} else {
    status = 'not my audience';
}

console.log(status)

// Switch statements
switch (2) {
    case 1:
        text = 'Weekend';
        break;
    case 2:
        text = 'Weekend';
        break;
    case 3:
        text = 'Weekend';
        break;
    default:
        text = 'Weekday';
        break;
}

console.log(text);