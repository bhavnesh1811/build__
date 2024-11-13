Q1). Explain the concept of closures in JavaScript. Provide a use-case where closures are beneficial.

A1) A closure is the combination of a function bundled together with reference to its surrounding state.It gives access to outer function's variable.

Use-Case of Closures:- Data Encapsulation

function createCounter(){
    let count=1;
    function increment(){
        console.log(count);
        count++;
    }
    return increment;
}

let counter=createCounter();

Here we are storing createCounter function and then calling the stored counter which have the access of the value of count even after the execution

counter() gives output 1

counter() gives output 2

counter() gives output 3

counter() gives output 4

Q2) Describe the differences between var, let, and const in JavaScript, focusing on hoisting and scope.

A2) var,let and const are used to declare variables in js.
a) Var:- Variables declared with var are function scoped and hoisted at the top of their containing scope and initialised with a value as undefined if not initialised.

Eg:- console.log(a) will give undefined

    console.log(a);
    var a=5;

let:- Variables declared with let are block scoped and hoisted at the top of their containing scope and throw a reference error due to temporal dead zone if not initialised.

Eg:- console.log(a) will give reference error

    console.log(a);
    let a=5;

const:- Variables declared with const are block scoped and hoisted at the top of their containing scope and throw a reference error due to temporal dead zone if not initialised.

console.log(a) will give reference error
    
    console.log(a);
    const a=5;

b) Varibles declared with var can be redeclared and reinitialised in same scope.

Varibles declared with let cannot be redeclared but can reinitialised in same scope.

Varibles declared with var cannot be redeclared nor be reinitialised in same scope.

Q3) What are the differences between a programming language and a scripting language? Where does JavaScript fit in?

A3) a) Programming languages are those languages used to instruct a machine whereas scripting languages are generally used to add features ,dom manipulation in web development and to run dynamic scripts.

b) Programming languages requires an explicit compiler for compilation whereas scripting languages uses just in time compilation which is faster in web development.

c) Examples of programming languages are C,C++ ,Examples of scripting languages are javascript,python

Javascript fits as both programming language as well as scripting language.

As scripting language, javascript is largely used in dom manipulation in client side,event driven process like if a user clicks something or change an input along with html and css.

As programming language, javascript is largely used in server side in node.js runtime environment which is very helpful in building large scale applications.


