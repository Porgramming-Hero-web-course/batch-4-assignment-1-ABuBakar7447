"use strict";
{
    const ArrayofNumbers = (param) => {
        const removeDupli = param.filter((item, index) => param.indexOf(item) == index);
        return removeDupli;
    };
    const values = ArrayofNumbers([1, 2, 2, 3, 4, 4, 5, 5]);
    console.log(values);
}
