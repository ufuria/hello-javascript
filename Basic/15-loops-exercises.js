/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

// v1
for(let i = 1; i <= 20; i++ ){
  console.log(i)
}

console.log("\n Probando otra version \n")

// v2
for (let i = 0 ; i < 21; i++){
  if (i == 0){
    continue
  }
  console.log(i)
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let i = 1
let a = 1
while (i<=100){ 
  console.log(a += i)
  i++
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i<50; i++){
  i%2 == 0 ? console.log(i) : console.log(`${i} , No es un par`); 
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["Xarximiliano", "Fernanda", "Sebastian"]
for(let i = 0; i < nombres.length ; i++){
  console.log(nombres[i])
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let b = "Un gato negro"
let cont = 0
for(let i = 0; i< b.length; i++ ){
  "aeiou".includes(b[i].toLowerCase()) ? cont += 1 : b[i] != " " && console.log(`${b[i]}, no es una vocal`)
} 
console.log(cont)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
