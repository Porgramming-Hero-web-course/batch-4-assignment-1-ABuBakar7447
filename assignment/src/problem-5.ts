{
    const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    };

    type personType = {
        name: string;
        age: number;
    };

    const person: personType = {
        name: "Alice",
        age: 20,
    };

    console.log(getProperty(person, "name"));
}
