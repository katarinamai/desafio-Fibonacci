'use strict'

/*
 Função para criar o array com números de Fibonacci
*/
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

/*
 Função para verificar se um número está nos números de Fibonacci
*/
const isFibonnaci = (num) => fibonacci().includes(num);

/*
 Exportando as duas funções.
*/
module.exports = {
    fibonacci,
    isFibonnaci
}
