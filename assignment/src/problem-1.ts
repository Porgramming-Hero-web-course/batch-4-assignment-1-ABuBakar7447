{
    const sumArray = (param: number[]):number =>{
    
        let total = 0;
        param.forEach((value: number):number =>{
            total = total + value;
            return total;
        })
        return total;
    }
    
    const values = sumArray([1,5,3,100]);
    console.log(values);
}