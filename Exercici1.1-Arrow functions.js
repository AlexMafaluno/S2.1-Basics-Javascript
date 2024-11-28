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


   const arrayNumeros=[4, 5, 6, 3, 2];

   arrayNumeros.forEach(index => console.log(index));

//Ejercicio 5


const myTimeout = () => {
    let a = "Felicidades";
    setTimeout(() => console.log(a), 3000);
};

myTimeout();


};