'use strict'

function ejercicio5(){
//Exercici 1.5: Array transformations

//Ejercicio 1

const array9 = [1, 2, 3, 4];
let cuadrado = array9.map(function (num) { 
    return num * num;
});
console.log(cuadrado);

//Ejercicio 2

const array10 = [1, 2, 3, 4];

const arrayFilter =   array10.filter((num) => num % 2 == 0);

console.log(arrayFilter);

//Ejercicio 3

const array11 = [1, 10, 8, 11];

const arrayFind = array11.find((num) => num > 10);

console.log(arrayFind);

//Ejercicio 4

const array12 = [13, 7, 8, 21];
const contador = 0;
const arrayReduce = array12.reduce((acc, currentValue) => acc + currentValue, contador,);

console.log(arrayReduce);

//Ejercicio 5

const arr1 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

function calcularArray(arr1){
    const suma = 0;
    const result1 = arr1.filter( num => num >= 10).map(num => num *2).reduce((acc, num) => acc + num, suma,);
    return  console.log(result1);
};

calcularArray(arr1);

//Ejercicio 6

const arr2 = [11, 12, 9, 14];

const isBigEvery = arr2.every((num) => num >= 10);
console.log(isBigEvery);
const isBigSome = arr2.some((num) => num >= 10);
console.log(isBigSome);

};