/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

//forma 1, devuelve la suma pero no se puede usar 
let sum = (a,b) => {console.log("La suma es:"+ (a+b) ) }
sum(1,1)

//forma 2, return explicito 
let sum2 = (a,b) => {return a+b}

let resultado = sum2(1,5)

console.log(`La suma-2 da: ${resultado}`)


resultado>5 ? console.log(`La suma-2 da: ${resultado}`) : console.console("la suma da menor que 5")

//forma 3, return implicito
let sum3 = (a,b) => a+b
console.log(`la suma-3 da:` + sum3(5,5)) // lo harcodea a un string
console.log(`la suma-3.1 da`, sum3(5,5)) //con "," formate cada argumento segun su tipo, no lo harcodea
console.log(`la suma-3.1.1 da ${sum3(5,5)}`) // lo harcodea a string tambien

//forma 4, funcion tradicional
function sum4(a,b){
  return (a+b)
}
console.log("La suma 4 da:",sum4(10,10))

// forma 5, con funciones anonimas

let anonima = function (a,b) {return (a+b)} 
console.log("La suma 5 da:",anonima(6,4))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let arrayNumbers = [1,2,3,4,5]
arrayNumbers = [10,2,13,51]

let numeroMayor = (array) => {
 let mayor = 0; 
  for (let i = 0; i < array.length; i++){
    array[i] > mayor ? mayor = array[i] : null
  }
    console.log(`El numero mayor del array es ${mayor}`)
}

numeroMayor(arrayNumbers)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let cadena = "xarximiliano sebastian" // 10 vocales
let contadorVocales = (c) => {
  let cont = 0
  for(let i = 0; i < c.length; i++){  
      "aeiou".includes(c[i].toLowerCase()) ? (cont +=1) : null
  }
console.log(`la cadena contiene ${cont} vocales`)
}
contadorVocales(cadena)
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let arrayDeStrings = [cadena, "juanito"]  

/** 
 * @param {string[]} arr | La funcion recibe como parametro un array, de esta forma 
  * la la info acorde de cada metodo que se este ocupando de un array
 */
let enMayusculas = (arr) => arr.map((s) => s.toUpperCase()) 
console.log(enMayusculas(arrayDeStrings))
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
let esPrimo = (n) => {
  return n%2 == 0 ? true : false
}
console.log(esPrimo(57)) // broma 
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let ar1 = [1,2,3,5]
let ar2 = [1,3,5,6,1]
let uwu = (arr1,arr2) => {
  let comunes = []
  for (let i = 0; i<arr1.length;i++){
    (arr2.includes(arr1[i]) && !(comunes.includes(arr1[i]))) ? comunes.push(arr1[i]): null
  } 
  return arr1
}

console.log(uwu(ar1,ar2))
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

ar1 = [1,2,3,6,8]
/**
  *
  *@param {number[]} arr1
  */
let sumadorPares = (arr1) =>{
  let cont = 0
  for(let i = 0; i<arr1.length; i++){
    arr1[i] % 2 == 0 ? cont += arr1[i] : null
  }
  return cont
}
console.log("la suma de todos los elementos pares es:", sumadorPares(ar1))
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

ar1 = [1,2,3,4,5]
let elevadosCuadrado=(arr1) => arr1.map((e) => e*2)
console.log(elevadosCuadrado(ar1))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let cdn = "inflo globos con el poto"
/**
  * @param {string} str
  */
let invertidora = (str) => {
  let palabras = str.split(" ")
  let resultado = []
  
  for(let i = palabras.length - 1 ; i >= 0 ; i--){
    resultado.push(palabras[i])
  }
  return resultado.join(" ")
}
console.log(invertidora(cdn))
// 10. Crea una función que calcule el factorial de un número dado
/**
  * @param {number} a
  */
let factorialDe = (a) => { return a <= 1 ?  1 : (a * factorialDe(a - 1))  }
console.log(factorialDe(3))
