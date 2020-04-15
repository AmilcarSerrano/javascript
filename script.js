//Funciones
function saluda()
{
   document.write("Hola mundo");
}
document.log(saluda());
function suma(num1, num2)
{
  return num1 + num2;
}
resultado = suma(2,2);
console.log(resultado);
//Podemos crear variables sin palabras reservadas como let y var, simplemente asignando un valor
// Ejemplo: nombre = "Amilcar"; En este caso la variable se asigna por defecto al Scope global

//DIFERENCIA ENTRE LET, VAR Y CONST
/*
1. var. Alcance dentro del GlobalScope o dentro de LocalScope
2. let. Alcance solo dentro de un bloque de código
3. const. Cuando se quiera declarar una constante
*/
function cuadrado(numero)
{
  return numero * numero;
}
cuadrado(2);

/*
function cuadrado(este es un parametro)
{
  return numero * numero;
}
cuadrado(este es un argumento);
*/
//Los parametros no tienen tipo de dato, reciben lo que envía el argumento

//VALORES POR DEFECTO
// Si el parametro no recibe un argumento podemos asignar un valor por defecto como el cero en el ejemplo
function cuadrado(numero = 0)
{
  return numero * numero;
}
cuadrado();

//Podemos no declarar argumentos, solo así
function sumaTodo()
{
  return  arguments[0] + arguments[1];
}
console.log(sumaTodo(1,2));
//En este caso se suma 1 que está en la posición 0 más 2 que está en la posición 1; El resultado es 3

//FUNCIONES ANÓNIMAS
function ejecutar(funcion)
{
    funcion();
}

function sayHello()
{
    console.log("Hola");
}
//De este modo una función recibe como argumento una función

ejecutar(function()  //Esta es una función anónima
{
    console.log("Hola");
});

//Arrow functions
let demo = ()=>
{
    console.log("Hola mundo");
}

suma = (a,b)=> a + b
console.log(suma(2,3));

function sumis(a,b)
{
  return a + b;
}
console.log(sumis(5,5));
//La función suma es la misma con sumis, solo que la primera es arrow func.

let tutor = {
    nombre: "Amilcar",
    apellido: "Serrano",
    nombreCompleto: function(){
        setTimeout(function(){
            console.log(this.nombre + " " + this.apellido)
        }, 1000);
    }
}
tutor.nombreCompleto(); //Esta función devuelve UNDEFINED POR EL CONTEXTO

let tutor = {
    nombre: "Amilcar",
    apellido: "Serrano",
    nombreCompleto: function(){
        setTimeout(()=>{
            console.log(this.nombre + " " + this.apellido)
        }, 1000);
    }
}
tutor.nombreCompleto();//Esta función si devuelve el nombre completo al utilizar arrow functions