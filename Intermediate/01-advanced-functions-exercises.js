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

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

// 7. Desarrolla una función parcial

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico
