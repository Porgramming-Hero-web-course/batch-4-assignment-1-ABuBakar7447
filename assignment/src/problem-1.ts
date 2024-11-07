{
    const ArrayofNumbers = (param: number[]):number =>{
    
        let total = 0;
        param.forEach((value: number):number =>{
            total = total + value;
            return total;
        })
        return total;
    }
    
    const values = ArrayofNumbers([1,2,3,4]);
    console.log(values);
}