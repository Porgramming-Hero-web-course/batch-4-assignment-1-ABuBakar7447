{
    const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    };

    type person = {
        name: string;
        age: number;
    };

    const person1: person = {
        name: "Alice",
        age: 20,
    };

    console.log(getProperty(person1, "age"));
}
