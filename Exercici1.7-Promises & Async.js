'use strict'

function ejercicio7(){
//Exercici 1.7: Promises & Async/Await

//Ejercicio 1

//creación de la promesa
const myPromise = new Promise((resolve) =>{
    setTimeout(() => {
        resolve("Hola, món");}, 2000);
    });


//Ejercicio 2

//Utilización de la promesa
myPromise
    .then((message) => { 
        console.log(message);
    });

//Ejercicio 3

//Creación 
const myPromise2 = new Promise((resolve,reject) =>{
    const success = true;
    if(success){
        setTimeout(() =>{
            resolve("Hola");}, 4000);
    
    } else {
        reject("Hubo un error");
    }
});
//Utilización

myPromise2
    .then((message) => { 
        console.log(message);
    })
    .catch((error) =>{
        console.log(error);
    });

//Ejercicio 4


async function asyncCall(){
    console.log('Calling');
    const result = await myPromise; // usar la promesa directamente, poque es una promesa definida, no puedo invocarla como si fuera una función.(myPromise()).
    console.log(result);
}

asyncCall();

//Ejercicio 5

async function asyncCall(){
    try{
    console.log('Inicio de intentos de prueba');
    //lalalal;
    console.log('Calling');
    const result = await myPromise; // usar la promesa directamente, poque es una promesa definida, no puedo invocarla como si fuera una función.(myPromise()).
    console.log(result);
    console.log("Fin de las ejecuciones de try");
    }catch (err){
        console.log("Un error ha ocurrido");
    }
}

//Ejercicio 6

const myPromise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("2 segundos")}, 2000);
    });

const myPromise4 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("3 segundos")}, 3000);
    });

Promise.all([myPromise3, myPromise4]).then((values) =>{
    console.log(values);
});

};