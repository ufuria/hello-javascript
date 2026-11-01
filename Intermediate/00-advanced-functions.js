/*
Clases 2 a 11 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=346
*/

// Ciudadanos de primera clase
// los meniconados arriba son una propiedad del lenguaje que permite ttratar a las funciones como cualquier otro valor(asignarlas a avariables, pasarlas como argumentos o devolverlas)
//
// Las funciones de orden mayor son una categoria especifica de funciones que aprovechan esa propiedad para recibir otras funciones como argumentos o retornar funciones
//
// Empezamos con ejemplos de ciudadanos de primera clas:
const greet = function (name) {
    console.log(`Hola, ${name}`)
}

greet("Brais")

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

function returnGreeting() {
    return greet
}

processGreeting(greet, "MoureDev")
const greet2 = returnGreeting()
greet2("Brais Moure")

// Arrow functions avanzadas

// - Retorno implícito
const multiply = (a, b) => a * b
console.log(multiply(2, 5))

// - this léxico
const handler = {
    name: "Brais",
    greeting: function () {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}

handler.greeting()
handler.arrowGreeting();

// IIFE (Expresión de Función Invocada Inmediatamente)

(function () {
    console.log("IIFE clásico")
})();

(() => {
    console.log("IIFE con arrow function")
})();

// Parámetros Rest (...)

function sum(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(10, 15))

// Operador Spread (...)

const numbers = [1, 2, 3]
function sumWithSpread(a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // Sin Spread
console.log(sumWithSpread(...numbers)) // Con Spread

// Closures (Clausuras)

function createCounter() {
    let counter = 0
    return function () {
        counter++
        console.log(`Contador: ${counter}`)
    }
}

const counter = createCounter()
counter()
counter()
counter()
counter()

// Recursividad

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))

// Funciones parciales

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}

const sumWith = partialSum(4)
console.log(sumWith(2, 3))
console.log(sumWith(1, 2))

// Currying

/*
  * Tecnica de programacion funcional
  * que transforma una funcion que acepta
  * multiples argumentos en una secuencia de 
  * funciones donde cada una toma un
  * UNICO argumento
  * */

function currySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d)
            }
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)
console.log(sumC(3))
console.log(sumC(4))
console.log(sumAB(5)(7))




// Callbacks

/*
  * A una funcion le pasamos otra
  * funcion como argumento para acabar personalisando su comportamiento (ciudadano de primera clase)
  *
  *
  * */

//callback es la funcion que se le pasa por parametro
function processData(data, callback) {
    const result = sum(...data)
    callback(result) // cual sea la funcion que recibe processData como callback aqui es invocada y se le pasa la variable result, ahora la funcion que se paso por parametro sera la que ejecutara su propia logica con el argumento result
}

function processResult(resultado) {
    console.log(resultado)
}

function processResult2(resultado) {
    console.log(`Mi resultado es: ${resultado}`)
}
/* aqui inclusive en los primeros 2 processData no le pasamos el argumento a recibir
  ya que dentro del processData se le pasara, adentro de processData esta callback
  y callback = processResult
  callback(result) = processResult(result)
  y como esta definido la funcion processResult es que lo que le pasemos por argumento
  ahora sera procesado y renombrado como resultado, esa varible vive solo dentro del callback
  en este caso es una copia del valor numerico del result.
*/

/* Si es number, string o booleano se le pasa una copia como en este caso 
  PERO
  si se le pasa objetos o arrays lo que se copia es la referencia OJO CONO ESTO
  ya que las dos variables son distintas pero apuntan al mismo objeto/array
  por lo que si modificas el contenido al hacer por ejemplo resultado.push(4)
  el cambio se vera reflejado en ambas funciones
  en cambio si reasignas; resultado = [] la otra variable no se entera
*/
processData([1, 2, 3], processResult)
processData([1, 2, 3], processResult2)
processData([1, 2, 3], (resulta) => {
    console.log(`Mi resultado en la arrow function es: ${resulta}`)
})

