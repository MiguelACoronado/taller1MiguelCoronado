//Funcion lanzar moneda

let caraSelloAleatorio =(max)=>{

    return Math.floor(Math.random() * max)

}
 
console.log(caraSelloAleatorio(2))
//declaracion variables

let op = true

let name = prompt("Ingrese su nombre")

console.log(`Hola ${name}`)

let valorGlobal = parseInt(prompt("Ingrese el valor global con el que desee jugar"))

console.log(`Su valor global fue establecido en ${valorGlobal}`)

//Ciclo principal

while(op == true){

     let valorApostado = parseInt(prompt("Ingrese el valor que desea apostar"))

        //Funcion ganar

        let ganar = () => {

         valorGlobal = (valorApostado * 2) + valorGlobal

        return console.log(`Has ganado, tu saldo total quedo en ${valorGlobal}`)

        

        }

        //Funcion perder

        let perder = () => {

        valorGlobal = valorGlobal - valorApostado

        return console.log(`Has perdido, tu saldo total quedo en ${valorGlobal}`)

        

        }

     if(valorApostado <= valorGlobal){

        let eleccion = parseInt(prompt("Elija cara o sello 0.cara o 1.sello"))

        if(caraSelloAleatorio() == eleccion){

            console.log("Has ganado")

            console.log(ganar())

        }else if(caraSelloAleatorio() != eleccion){

            console.log("Has perdido")

            console.log(perder())
        }




     }else if (valorApostado > valorGlobal){

        console.log("El valor a apostar no puede ser mayor a su valor global")

     }

    op = confirm(prompt("Desea continuar?"))
}





