//Crear array

let onces = ["Empanada", "Tamal"]

//imprimir el array

console.log(onces)

//acceder a unn elemento del array

elemento1 = onces[1]
console.log(onces[1])
console.log(elemento1)

//ultima posicion del array

console.log(onces[onces.length - 1])

//recorrer el array

onces.forEach(function(valor,posicion,array){

    console.log(`En la posicion ${posicion} hay ${valor}`);
})

//añadir elementos al final del array

onces.push("Jugo")
console.log(onces)
onces.push("Hamburguesa", "Perro Caliente")

//eliminar el ultimo elemento del array

onces.pop()

//añadir elemento al principio del array

onces.unshift("Frutas")
console.log(onces);

//eliminar primer elemento de un array

onces.shift()
console.log(onces);

//eliminar de una posicion en especifico

onces.splice(1,1)
console.log(onces);

//metodo de busqueda filter

let busqueda1 = onces.filter(onces=>onces=="Tamal")
console.log(busqueda1);

//metodo de busqueda find

let busqueda2 = onces.find(onces=>onces=="Jugo")
console.log(busqueda2)