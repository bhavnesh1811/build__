**2. Output-Based Questions**

1. `console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");`
    
    **Question:** What will be the output? Explain why.
    **Answer:** 
    Start // code executes synchronously
    End //code executes synchronously
    Promise // Priority because of microtask queue 
    Timeout //Executes after promise because of macrotask queue 
    
2. `let original = { a: 1, b: { c: 2 } };
let shallowCopy = { ...original };
shallowCopy.b.c = 3;
console.log(original.b.c);`
    
    **Question:** What will be the output? Explain why shallow copy behaves this way.
    **Answer:** Output will be 3 because shallow copy copies the top level properties and nested objects still gives reference to the original object
    
3. `for (var i = 1; i <= 3; i++) { setTimeout(() => console.log(i), 1000);
}
for (let j = 1; j <= 3; j++) { setTimeout(() => console.log(j), 1000);
}`
    
    **Question:** Explain the output difference between the two loops and why this behavior occurs with `var` and `let`.
    **Answer:** For the first loop declared with var variable output will be 4 4 4 because of scope of var variable which is global in this case

    For the second loop declared with let variable output will be 1 2 3 because of scope of let variable everytime a new settimeout function is created
    
4. `let obj1 = { a: 10 };
let obj2 = obj1;
obj2.a = 20;
console.log(obj1.a);`
    
    **Question:** What will be the output? Explain how JavaScript treats objects when assigned to another variable.
    **Answer:** Output will be 20 because it takes reference from the same memory allocation.