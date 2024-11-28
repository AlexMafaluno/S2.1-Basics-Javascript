'use strict'


function ejercicio2(){

//Exercici 1.2: Operador ternari

//Ejercicio 1


function potConduir(edad){
    (edad >= 18) ? console.log("Puede conducir") : console.log("No puede conducir");
}
potConduir(18);

//Ejercicio 2

function comparador(num1, num2){
    (num1 > num2) 
    ? console.log(`${num1} es mas grande`) 
    : console.log(`${num2} es mas grande`);
};
comparador(4, 4);

// Ejercicio 3

function ternarios(num){
    (num > 0) 
    ? console.log("Es positivo") 
        : (num < 0)
            ? console.log("Es negativo")
             : (num == 0)
                ? console.log( "es cero")
                : console.log( " No es un numero");
};
ternarios(10);
ternarios(0);
ternarios(-4);

function trobarMaxim(a, b, c){
(a > b && a > c)
? console.log("a es valor maxim")
    :(b > a && b > c)
        ? console.log( "b es valor maxim")
        : console.log("c es valor maxim");
};
trobarMaxim(7, 9, 8);

//Ejercicio 4

function parOlmar(array){

    for(let i = 0; i< array.length; i++){
        (array[i] % 2 == 0)
        ? console.log(" Es par")
        : console.log(" Es impar");
    };
};
const array = [7, 7, 7];
parOlmar(array);


};