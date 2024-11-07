** Why Are Type Guards Necessary?
In TypeScript, type guards help us check the type of a variable when we have a flexible type, like a union. This lets us write code that works safely across different types.

1. typeof Type Guard
The typeof guard is useful for checking primitive types like string, number, and boolean.

Example:

function describeValue(value: string | number) {
    if (typeof value === 'string') {
        return `String: ${value.toUpperCase()}`;
    } else {
        return `Number: ${value + 10}`;
    }
}

console.log(describeValue("hello")); 
console.log(describeValue(5));

Here, typeof helps to understand if value is a string or number.

2. in Type Guard
The in operator checks if a property exists in an object, making it useful when we’re working with different object shapes.

Example:

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

We can see that, in helps us distinguish between Dog and Cat based on their unique properties.

3. instanceof Type Guard
The instanceof operator checks if an object is an instance of a specific class, making it ideal for distinguishing between class-based objects.

Example:

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
start(new Bike());

instanceof lets us handle Car and Bike instances separately.