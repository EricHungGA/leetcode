// const a = { x:1 };
// const b = { x:1 };

// console.log(a===b) // returns false

//other potential option selected was a != b which is actually true

let animals = [{ type: "lion"}, "tiger"];
let clones = animals.slice();

clones[0].type = "bear"; // this changes animals.type
clones[1] = "sheep"; // this doesnt change animals[1]

console.log(animals[0].type, clones[0].type);
console.log(animals[1], clones[1]);

//The reason the assignment to clones[1] does not affect animals[1] is because strings, being immutable, create new string objects when their values change. This behavior is different from objects, where variables can hold references to the same object in memory. Since strings are immutable, assigning a new value to a string variable does not modify the original string, but rather creates a new string object with the updated value.
// In contrast, when you modify the type property of the object at clones[0], which is the same object referenced by animals[0], you are modifying the object itself. Both animals[0] and clones[0] reference the same object in memory, so changes made to clones[0] will be reflected in animals[0].