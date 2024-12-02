'use strict'



function ejercicio1(){

// Exercici 1.1: Arrow functions

//Ejercicio 1


const add = (a, b) => a + b;

console.log(add(4, 3));

//Ejercicio 2

const randomNumber = () => {
    return console.log(Math.floor(Math.random()* 101));
};

randomNumber();

//Ejercicio 3

class Person {
    constructor(name){
    this.name = name;
    }

    greet(){
        return console.log(`Hola, ${this.name}`);
    }
}

const saludo = new Person("Alex") // instancio
saludo.greet();// ejecuto el metodo


//Ejercicio 4


   let arrayNumeros =[4, 5, 6, 3, 2];

   function printNumbers(array){
    for(let i = 0; i < array.length; i++){
    ((num) => console.log(num))(array[i]);
    }
   };

   printNumbers(arrayNumeros);

//Ejercicio 5


const myTimeout = () => {
    let a = "Felicidades";
    setTimeout(() => console.log(a), 3000);
};

myTimeout();


};