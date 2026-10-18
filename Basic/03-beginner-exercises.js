/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// asdasd este es un comentario en una linea 

// 2. Escribe un comentario en varias líneas

/*
este es un comentario en varias lineas
asd
asd

*/


// 3. Declara variables con valores asociados a todos los datos de tipo primitivos


let myName = "Lukas" // strings
let myLastName = "Lagos" 
let myAge = 22 // entero
let myHeight = 1.69 // float
let mySimbol = Symbol("aji") // weas unicas para propiedades de objetos
let bigInit = BigInt(32132321321) //weas muy grandes
let isFood = true // booleanos
let isDigerible = false
let weaIndefinida
let weaNull = null

let weas = [myName, myLastName, myAge, myHeight, mySimbol, bigInit, isFood, isDigerible,weaIndefinida,weaNull]


// 4. Imprime por consola el valor de todas las variables
for (let i = 0; i<10; i++){
 console.log(weas[i])
}
console.log("")
// 5. Imprime por consola el tipo de todas las variables
for (let i = 0; i<10; i++){
 console.log(typeof(weas[i]))
}
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
console.log("")
myName = "The Xarxest"
weas[0]= myName
console.log(weas[0])

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
console.log("")
myName = 30
weas[0] = myName
console.log(weas[0])
console.log(typeof(weas[0]))
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myName2 = "Lukas" // strings
const myLastName2 = "Lagos" 
const myAge2 = 22 // entero
const  mySimbol2 = Symbol("aji") // weas unicas para propiedades de objetos
const bigInit2 = BigInt(32132321321) //weas muy grandes
const myHeight2 = 1.69 // float
const isFood2 = true // booleanos
const isDigerible2 = false
//const weaIndefinida2
const weaNull2 = null

// 9. A continuación, modifica los valores de las constantes
//myName2 = "xarxest"

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse