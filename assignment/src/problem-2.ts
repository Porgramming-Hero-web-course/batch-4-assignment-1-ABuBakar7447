{
    const ArrayofNumbers = (param: number[]):number[] =>{
    
        const removeDupli = param.filter((item: number, index: number) => param.indexOf(item) == index);
        return removeDupli;
    }
    
    const values = ArrayofNumbers([1, 2, 2, 3, 4, 4, 5,5]);
    console.log(values);
}