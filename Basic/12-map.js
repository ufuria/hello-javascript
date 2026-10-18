/*
Clase 27 - Maps 
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map dicionario 

// Declaración

// cada elemento no es unico, cada elemto esta formado por un par
/**
 * formado por la clave "key" y su valor "value"
 * se puede almacenar cualquier claves y valores de cualquier tipo de dato
 * 
 */ 
let myMap = new Map()

console.log(myMap)

// Inicialiación

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set

// si la clave ya existe, modifica el valor
myMap.set("alias", "mouredev")
// si la clave no existe, la agrega y el valor tambien 
myMap.set("name", "Brais Moure")

console.log(myMap)

// get

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has
// con has preguntas SI contiene la clave ingresada
// ojo que devuelve un booleano, puedes realizar logica con esto

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete

myMap.delete("email")

console.log(myMap)

// keys, values y entries

console.log(myMap.keys()) // devuelve las llaves del mapa
console.log(myMap.values()) // devuelve los valoros del mapa
console.log(myMap.entries()) // nos trae todas las claves y valores/
                             // iterando

// size

console.log(myMap.size)

// clear
// clear si existe aqui no como en los arrays

myMap.clear()

console.log(myMap)



