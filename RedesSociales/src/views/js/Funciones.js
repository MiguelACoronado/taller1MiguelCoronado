/* FUNCIONES  */

// METODO 1: funcion por declaracion

//2.Invocar la funcion

saludar()

//1.declarar la funcion

function saludar(){

    //cuerpo de funcion - tareas de la funcion

    console.log("Buenos Dias por la mañana")
}

let numberOne = parseInt(prompt("Ingrese un numero"))
let numberTwo = parseInt(prompt("Ingrese otro numero"))

//funcion sin parametros
/*function sumar(){

    console.log(`La suma entre ${numberOne} y ${numberTwo} es igual a: ${numberOne + numberTwo}`)
}

sumar()*/

//funcion con parametros

/*function sumar(n1,n2/*parametros){

    console.log(`La suma entre ${n1} y ${n2} es igual a: ${n1 + n2}`)
}

sumar(numberOne,numberTwo/*argumentos)*/

// funcion con valor de retorno

/*function sumar(n1,n2){

    let sum = n1 + n2
    return sum
}

console.log(`La suma es ${sumar(15,26)}`)
let resultado = sumar(numberOne,numberTwo)*/

// METODO 2: funcion por expresión

/*let restar = function resta(n1,n2){
    console.log(`La resta entre ${n1} y ${n2} es: ${n1 + n2}`)
}

restar(numberOne,numberTwo)*/

//METODO 3: funcion anónima --> no nombre en la funcion

/*let mult = function(n1,n2){

    return n1 * n2
}

console.log(`La multiplicacion de los numeros es: ${mult(numberOne,numberTwo)}`)*/

//METODO 4: funcion arrow o flecha

let div =(n1,n2)=>{

    console.log(`La division entre ${n1} y ${n2} es: ${n1 / n2}`)

}

div(numberOne.numberTwo)