/*
Clase 16 - Variables
Vídeo: https://youtu.be/1glVfFxj8a4?t=3049
*/

/* var, la menera inicial de declarar variables en JavaScript
 Se puede reasignar y redeclarar
 no ocupar por problemas de hosting y scope
 el "hosting" es que las variables declaradas con var
 se mueven al principio del fichero, lo que implica que 
 se pueden acceder y usar antes estar declaradas
*/
var helloWorld = "¡Hola, JavaScript!"
console.log(helloWorld)

helloWorld = "¡Hola de nuevo, JavaScript!"
console.log(helloWorld)

/*let y const introducidas en ES6 en 2015*/
 
// let

/**
 *  las variables declaradas con let solo son accesibles dentro 
 *  del bloque de donde se declaran, no se pueden redeclarar pero si reasignar
 */

/*
* aqui con el hosting, el identificador de la variable
* si se eleva al principio del fichero, no se puede ejecutar
* no se puede acceder a la variable antes de declararla
*   
*/
let helloWorld2 = "¡Hola, JavaScript 2!"
console.log(helloWorld2)

helloWorld2 = "¡Hola de nuevo, JavaScript 2!"
console.log(helloWorld2)

// const
// tambien accesibles solo dentro del bloque donde se declaran.
//  no se pueden redeclarar ni reasignar
const helloWorld3 = "¡Hola, JavaScript 3!"
console.log(helloWorld3)

// Error 
// ya que no se puede reasignar una variable declarada con const
// helloWorld3 = "¡Hola de nuevo, JavaScript 2!"
// console.log(helloWorld3)

/* No significa que las variables const no sean inmutables, 
si conts lo utilizamos con datos que en vez de ser un valor sean
REFERENCIAS por ej array, ahi si que pueden variar, ya que la referencia no cambia
es el contenido dentro de la referencia */