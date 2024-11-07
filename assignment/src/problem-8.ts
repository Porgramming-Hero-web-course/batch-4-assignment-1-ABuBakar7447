{
    type propType = {
        name: string,
        age: number,
        email: string
      }
    
      
    const validateKeys = <T extends propType>(obj: T, keys: (keyof T)[]): boolean => {
        for (let i = 0; i < keys.length; i++) {
            if (!(keys[i] in obj)) {
                return false;
            }
        }
        return true; 
    };
    
    const person: propType  = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]))
}