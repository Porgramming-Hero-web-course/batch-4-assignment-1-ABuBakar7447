
** ** Why Are Type Guards Necessary? ** **

In TypeScript, we use union types, which means a variable can be of more than one type. But when we actually want to work with the value, we need to figure out what type it currently is. That's where we need type guards help.

Type guards are like security checks that help TypeScript understand to what type of values a variable is storing. It could be string, boolean, number or object. After defining the variable type typescript let us store the values that only matches with the variable type we defined. 

----------------------------------------------------------------------------------------

** ** Discuss Various Types of Type Guards and Their Use Cases. ** **

1. typeof Type Guard
We use this when we are checking primitive types like string, number, boolean, etc.

** Example:

function describeValue(value: string | number) {
    if (typeof value === 'string') {
        return `String: ${value.toUpperCase()}`; 
    } else {
        return `Number: ${value + 10}`;
    }
}

console.log(describeValue("hello"));
console.log(describeValue(5)); 

*** Since value could be a string or number, we check which one it is. After the check, TypeScript lets us safely use .toUpperCase() or add numbers.

---------------------------------------------------------------

2. in Type Guard
We use this when we are working with object types that may have different properties.

** Example:

type Dog = { bark: () => void };
type Cat = { meow: () => void };

function makeSound(animal: Dog | Cat) {
    if ('bark' in animal) {
        animal.bark(); 
    } else {
        animal.meow();
    }
}

makeSound({ bark: () => console.log("Woof!") });
makeSound({ meow: () => console.log("Meow!") });

*** In this example, we can’t just call .bark() or .meow() directly. By using (in), we check which function exists on the object, then use it safely.

------------------------------------------------------------------

3. instanceof Type Guard
We use this when we are working with classes and want to check if an object is created from a certain class.

** Example:

class Car {
    drive() { console.log("Driving a car"); }
}

class Bike {
    pedal() { console.log("Pedaling a bike"); }
}

function start(vehicle: Car | Bike) {
    if (vehicle instanceof Car) {
        vehicle.drive();
    } else {
        vehicle.pedal();
    }
}

start(new Car());
// Output: Driving a car

start(new Bike()); 
// Output: Pedaling a bike

** When we use new to create objects from classes, instanceof helps confirm which class the object came from. Then, TypeScript gives us access to the right methods.

---------------------------------------------------------

**** If we describe shortly, ****
We could use "typeOf" for Primitives types value (string, number).
We could use "in" for Objects with different props.
We could use "instanceof" for Class instances.

