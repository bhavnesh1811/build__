// Create a constructor function Person with a property name. 
// Add a method greet to its prototype that prints "Hello, <name>". Test this with different instances.

class Person{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}

const person1=new Person("Bhavnesh")
const person2=new Person("Rahul")
const person3=new Person("Ankit")
person1.greet()
person2.greet()
person3.greet()
