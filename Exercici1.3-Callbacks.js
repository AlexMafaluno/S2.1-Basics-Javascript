'use strict'


function ejercicio3(){
//Exercici 1.3: Callbacks

//Ejercicio 1
function myDisplayer(some){
    console.log(some);
}

function processar(nombre, callback){
    callback(nombre);
};

processar("Alex", myDisplayer);

//Ejercicio 2

function suma(result){
    console.log(result);
}

function calculadora(num1, num2, callback){
    let sum = num1 + num2;
    callback(sum);
};

calculadora( 8, 4, suma);

//Ejercicio 3

function asincron(result){
    console.log(result);
};

function esperarISaludar(num, callback){
    setTimeout(() => {
        callback(num); // Pasa `num` a la callback despues del TimeOut
    }, 3000);
};
esperarISaludar(4, asincron);

//Ejercicio 4

function myDisplayer(result){
    console.log(result);
};

function processarElements(array2, callback){
    for(let i = 0; i < array2.length; i++){
        callback(array2[i]);
    }
};

const array2 = [2, 3, 4, 5];
processarElements(array2, myDisplayer);

//Ejercicio 5

function myDisplayer3(result){
    console.log(result);
};

function processarCadena(nom, callback){
    let text = nom.toUpperCase();
    callback(text);
}

processarCadena("aleREss", myDisplayer3);


};