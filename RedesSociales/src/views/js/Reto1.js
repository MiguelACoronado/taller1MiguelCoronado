
let palabra = prompt("Ingrese una palabra")

opciones(palabra)

function opciones(){

    let op1 = 1
if(op1 == 1){

  let op = parseInt(prompt("Que proceso desea realizar 1.longitud 2.MAYUSCULAS 3.minusculas 4.primer caracter"))

    switch(op){

        case 1: 

        alert(longitud(palabra))

        break;

        case 2:

        alert(mayusculas(palabra))

        break;

        case 3:

        alert(minusculas(palabra))

        break;

        case 4:

        alert(primeraletra(palabra))

        break;

    }

    let op1 = parseInt(prompt("Desea continuar el ciclo? 0.no 1.si"))
}

}

function longitud(){

    let longitud = palabra.length

    return longitud
}

function mayusculas(){

    let mayusculas = palabra.toUpperCase()

    return mayusculas
}

function minusculas(){

    let minusculas = palabra.toLowerCase()

    return minusculas
}

function primeraletra(){

    let pLetra = palabra.charAt(0)

    return pLetra
}

