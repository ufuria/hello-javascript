/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animales = []
animales = ["seba", "xarximiliano", "kiru", "canela", "taitus" ]
// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("cholo")
animales.push("cucho")
console.log(animales) 
// 3. Elimina el que se encuentra en tercera posición
animales[2] = "" ; 
console.log(animales)
// 4. Crea un set que almacene cinco libros
let setLibros = new Set(["Juramentada","Tratado del hombre", "Arcanum ilimitado", "El camino de los reyes"])
console.log("SET de Libros")
console.log("")
console.log(setLibros)

// 5. Añade dos más. Uno de ellos repetido
/*El repetido no te para el programa
  * lo deja pasar
*/
setLibros.add("Juramentada")   
setLibros.add("la cucaracha")
console.log("")
console.log(setLibros)
// 6. Elimina uno concreto a tu elección

let deletiado = setLibros.delete("Juramentada")

console.log("\n" + deletiado)
console.log(setLibros)
// 7. Crea un mapa que asocie el número del mes a su nombre
let mapUno = new Map([
  ["1", "Enero"],
  ["2", "Febrero"],
  ["3", "Marzo"],
  ["4", "Abril"]
]) 
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(mapUno.has("1"))
console.log(mapUno.has("5"))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
let mesesVerano = []
mesesVerano = ["Diciembre", "Enero", "Febrero", "Marzo"]
mapUno.set("mesesVerano", mesesVerano)
console.log("")
console.log(mapUno)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let arrayToSet = ["A","b","c"]
let setFromArray = new Set(arrayToSet)

console.log("\n")
console.log(setFromArray)

let map2 = new Map()
map2 = new Map([
  ["setKey", setFromArray]
])
console.log("\n")
console.log(map2)
  
