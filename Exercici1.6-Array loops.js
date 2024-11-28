'use strict'

function ejercicio6(){
// Exercici 1.6: Array loops

//Ejercicio 1 

let noms = ["Anna", "Bernat", "Clara"];

noms.forEach( (index) => console.log(index)); 

//Ejercicio 2

for(const nom of noms){
    console.log(nom);
};

//Ejercicio 3

let arrayNums = [1, 2, 3, 4, 5, 6];

const result = arrayNums.filter ( (num) => num % 2 == 0);

console.log(result);

//Ejercicio 4

const persona ={
    nom: "Ona",
    edat: 25, 
    ciutat: "Barcelona"
};

for( const clau in persona ){
    console.log(`${clau}: ${persona[clau]}`);
};

//Ejercicio 5

for(const index of arrayNums){
    console.log(index);
    if (index == 5){
        break;
    };
};

//Ejercicio 6

let i = 0;
for( const nom of noms){
    console.log(`${i} : ${nom}`);
    i++;
};

};