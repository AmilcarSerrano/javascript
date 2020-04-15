let arreglo = [1,2,3,4,5,6,7,8,9];
for(let i=0; i<arreglo.length; i++)
{
    console.log(arreglo[i]);
}

//Metodos y operaciones sobre arreglos
//filter
let lenguajes = ['Ruby', 'Python','Java', 'JavaScript'];
lenguajes = lenguajes.filter(function(elemen)
{
   return elemen != 'Python'; //Imprime todos elementos exceptos Python
}
);
lenguajes = lenguajes.filter((elem)=> elem != 'Ruby'); //Hace lo mismo que el anterior pero con arrow functions

//find
let objeto = lenguajes.find(objeto => objeto == 'JavaScript');
console.log(objeto);//Encuentra un elemento u objeto dentro del arreglo, en este caso encuentra JavaScript
//forEach
lenguajes.forEach(function(elemento)
{
    console.log(elemento);
});

let numeros = [1,2,3,4,5,6,7,8,9];
let numero = numeros.filter(numero => (numero % 2) != 0);
console.log(numero); //Imprime numero impares

let numero = numeros.filter(numero => (numero % 2) == 0);
console.log(numero); //Imprime numero pares

//map
let cantidades = [2, 4, 6, 8];
let cuadrados = numeros.map(numero => numero * numero);
console.log(cuadrados);