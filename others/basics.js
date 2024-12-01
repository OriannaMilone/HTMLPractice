//Statements
//It is a set of instructions that are executed in a sequence. (Basically a line of code)

//Variables 
//There are 3 ways to declare a variable in JavaScript: var, let, const
/*  var: is a function scope variable, but not a block scope variable.
    Which means that you can access the var outside places its not expected to be reached;
    Also you can re-declare it, in general this type leads to many difficult bugs to depure.
    It is also hoisted, which means that you can access it before its declaration.
    A variable declared without an especification of vat type, will be automatically a var type.
    And a var declare without a value, will be automatically undefined.
    It is not recommended to use this var type.
*/

var myName = "Orianna";
console.log(myName);
myAge = 22;
console.log(myAge);
var lastName;
console.log(lastName);
lastName = "M";
console.log(lastName);

/*  let: is a block scope variable. It handy when you need a variable that can 
    change its value throughout the program.
    When declaring a variable with let, you can't re-declare it. 
    It allows the multiple declaration when used.
*/
let myLastName = "M",
    myAge = 22,
    myName = "Orianna";
console.log(myName);    

/*  const: it is a constant variable, which means that it can't be changed. And when declared is
    mandatory to assign a value to it. It is block scope variable.
    */
const myCity = "São Paulo";
console.log(myCity);

//Interaction with the user
//Alert: it is a pop-up message that will appear on the screen.
alert("Hello World!");

//Prompt: it is used to get input from the user. The first parameter is the message that will appear on the screen,
//and the second is the default value.
prompt("What is your pet?", "Dog");
let pet = prompt("What is your pet?");
console.log(pet);

//Confirm: it is used to get a confirmation from the user. It will return a boolean value.
let isAdult = confirm("Are you an adult?");
console.log(isAdult);

/*However it is not suggested to use confirm, alert or prompt during production.
  As it is considered intrusive when blocking the page.
*/

//Weird things in JavaScript:
alert("There will be an error");
[1, 2].forEach(alert);

