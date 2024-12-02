'use strict'

function ejercicio4(){

//Exercici 1.4: Rest & Spread operators

//Ejercicio 1

let array3 = [3, 4, 5, 6];
let array4 = [7, 8, 9];
let array5 =[...array3, ...array4];
console.log(array5);

//Ejercicio 2

function suma(...numbers){
   let suma = 0;
   for(let num of numbers) suma += num;
    return console.log(suma);
   }

suma(1, 2, 3, 4, 5 ,6 ,7 ,8 ,9);


//Ejercicio 3

let objecte1 = {
    num1 : 2,
    num2 : 34,
};
let objecte2 = {
    ...objecte1, 
    num4 : 7
};

console.log(objecte1);
console.log(objecte2);

//Ejercicio 4

const [a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7]
console.log(a);
console.log(b);
console.log(rest);

//Ejercicio 5

function spreadEnFuncion(a, b, c){
    console.log(a, b, c );
}
let array8 =[2, 3, 45];
spreadEnFuncion(...array8);

//Ejercicio 6

const obj1 = {
    nom: "Juan",
    edad: 33,
    Talla: "L"
};

const obj2 = {
    color: "Blanco",
    Lados: 2
};

const objFusionado = {...obj1, ...obj2};
console.log(objFusionado);
};