{
    type Circle = {
        shape: 'circle',
        radius: number
      }
      
      type Rectangle = {
        shape: 'rectangle',
        height: number,
        width: number
      }
      
      type Shape = Circle | Rectangle
      
      const calculateShapeArea = (param: Shape): number =>{
        
        if ('shape' in param && param.shape === 'circle'){
          const value = parseFloat((Math.PI * (param.radius * param.radius)).toFixed(2));
          return value;
        }
        else if ('shape' in param && param.shape === 'rectangle'){
          const value = param.height * param.width;
          return value;
        }
        else{
            return 0;
        }
      }
      
      const circleArea : Circle = {
          shape: 'circle',
          radius: 15
      }
      
      const rectangleArea : Rectangle = {
          shape:'rectangle',
          height: 5.3,
          width: 10
          
      }
      
      console.log(calculateShapeArea(circleArea));
      console.log(calculateShapeArea(rectangleArea));
}