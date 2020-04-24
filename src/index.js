'use strict'

const fibonacci = (numMax = 350) => {
    
    let i = 0;
    const array = [0,1];
    let position;

    while (i < numMax) {
        position = array.length;
        i = array[position-2] + array[position-1];
        array.push(i);
    }
    console.log(array)
    return array;
}


const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
