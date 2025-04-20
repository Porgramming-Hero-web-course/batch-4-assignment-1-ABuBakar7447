{
    const removeDuplicates = (param: number[]):number[] =>{
    
        const removeDupli = param.filter((item: number, index: number) => param.indexOf(item) == index);
        return removeDupli;
    }
    
    const values = removeDuplicates([1, 2, 2,1, 1, 3, 4, 4, 5,5,7,7]);
    console.log(values);
}