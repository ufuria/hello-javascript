/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función

/*--Funcion de orden superior - Funcion que retorna una funcion --*/
/**
  * @param {number} A   : numero almacenado para ser multiplicado por un b 
  * */
let funcionPrincipal = (A) => {
  //aprovecha el concepto de scope, ya que la funcion interna puede alimentarse de cosas
  //de la funcion madre""
  return function funcionSecundaria (b){  
    return A*b //conoce A ya que vive dentro de la funcionPrincipal
  };
} 
// "funcionPrincipal" retorna una funcion, esa funcion con el valor pasado
// por parametro es asignada a multiplicador, el argumento es almacenado internamente
// y ahora multiplicador es una funcion!!
let multiplicador = funcionPrincipal(2)
console.log(multiplicador(4))

/*con una funcion madre sin parametros*/
function funcionMadre(){
  return function(b){
    return 5*b
  }
}
let multiplicado2 = funcionMadre()
console.log(multiplicado2(2)) 
// 2. Implementa una función currificada que multiplique 3 números

function funcionPadre(a){
    return function (b){
      return function (c) {
          return a*b*c
      }
    }
}

console.log(funcionPadre(2)(2)(2))
// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
//                        (gg)
                        
function base (a){
  return function elevado(b){ 
    //let cont = b
    //resultado *= a
    //cont == 0 ? resultado *=1 : elevado(b - 1)
    //b == 0 ? return 1 : return (a * elevado(b - 1))  
    if (b == 0) return 1;
    return a * elevado(b - 1);
  }
  
}

let a = base(2)
console.log(a(5))

function base2(a){
  return function elevado(b){ 
    return b == 0 ? 1 : a * elevado(b - 1)
  }
}
let base22 = base2(2)
console.log(base22(3))

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(a){

  class Contador{
      
      constructor(valor = a){
      this.valor = valor
      }
    
    increment(){
      this.valor++
    }

    decrement(){
      this.valor--
    }

    getValue(){
    return this.valor
    }

  }
let contador = new Contador(a)
return contador
}

let contador = createCounter(5)
console.log(typeof contador)
console.log(contador.getValue())
contador.decrement()
console.log(contador.getValue())
contador.increment()
contador.increment()
console.log(contador.getValue())
// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers){
  let suma = 0
  for(let number of numbers){
    suma += number
  }
  return (suma * multiplier)
}
console.log(sumManyTimes(2,1,2,3,4,5))

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function ejercicioSeis(callback, ...numbers){
  let resultadoSum = 0
  for (numero of numbers){
    resultadoSum += numero
  }
  callback(resultadoSum)
}

function ejSeisCallback(numero){
  console.log(`Caia ceniza del cielo. He recibido el ${numero} cuando me invocaron`)
}

ejercicioSeis(ejSeisCallback,1,2,3,4,5)
// 7. Desarrolla una función parcial

function multiplicador2(a,...nNumeros){
  // variable para almacenar el resultado
  // de la multiplicacion de los numeros ingresador por el parametro rest
  let resultMult1 = 1 
  
  for(let numero of nNumeros){
   resultMult1 *= numero
  }
  return a * resultMult1
}

function multiplicadorParcial(nBase){
  /*al momento de definir esta funcion anonima(la de abajo de este comentario) establecimos que le llegaran n numeros por por argumentos este es el parametro rest
    * convierte todos los numeros pasados por argumento y los transpasa a un array
    * luego al llamar la funcion multiplicador2 hace uso del "spread" que convierte un array a numeros sueltos
    * asi podemos pasar las cosas que queramos y luego como multiplicador2 recibe n cosas (rest) se vuelven compatibles y dentro de multiplicador2 se trabaja ese array creado con haciendo uso del operador Rest
    * */
  return function (...numeros){
    return multiplicador2(nBase, ...numeros)
  }
}

const multiplicaCon = multiplicadorParcial(2)

console.log(multiplicaCon(4, 5))
// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico
