/*let name
let age

name = prompt("Ingrese su nombre")
age = parseInt(prompt("Ingrese su edad"))

alert(name + " tienes " + age + "años, en 15 tendrás " +  (age +15))*/


//------------------------------------------------------------------------------//

//condicional uf comparacion


/*let numberOne, numberTwo

numberOne = parseInt(prompt("Ingrese el primer número"))
numberTwo = parseInt(prompt("Ingrese el segundo número"))


//  Condicionales 
if(numberOne>numberTwo){
    //si la condicion se cumple
    alert(`El número mayor es ${numberOne}`)
}else if(numberOne===numberTwo){//arreglar
    //si la condicion no se cumple
    alert(`el número mayor es ${numberTwo}`)
}

// Variacion condicional doble OPERADOR TERNARIO

let numMayor = (numberOne>numberTwo)
?"El número mayor es es primero"
:"El número mayor es el segundo"

console.log(numMayor)*/

//--------------------------------------------------------------------------------//

//condicional if


/*let user, pass
let userConfirm, passConfirm


user = prompt("Ingrese su usuario")
pass = prompt("Ingrese su contraseña")

userConfirm = prompt("Confirme su usuario")
passConfirm = prompt("Confirme su contraseña")

if (user == userConfirm && pass == passConfirm){
    alert(`Bienvenido a mi APP`)
}else if(user != userConfirm && pass == passConfirm){
    alert(`Nombre de usuario invalido`)
}else if (user == userConfirm && pass != passConfirm){
    alert(`Contraseña incorrecta`)
}else if(user != userConfirm && pass!= passConfirm){
    alert(`Acceso denegado`)
}*/

//--------------------------------------------------------------------------------//

//ciclo while determinado


/*let tipoDocumento = "C.C"
let noDocumento = 1234567
let nombre = "Miguel"
let apellido = "Coronado"
let op
let cont = 0
let mod = 0
let mod1 = 0



while(cont == 0){

    alert(`Bienvendio al sistema`)

    op = parseInt(prompt("Ingrese que procedimiento desea hacer 1.Ingresar Estudiante 2.Ver Estudiante 3.Modificar Estudiante"))

switch(op){
    case 1:

    nombre = prompt("Ingrese nombre del estudiante")
    apellido = prompt("Ingrese apellido del estudiante")
    tipoDocumento = prompt("Ingrese el tipo de docuemento")
    noDocumento = parseInt(prompt("Ingrese número de documento"))

    break;

    case 2:

    if (nombre == undefined || apellido == undefined || tipoDocumento == undefined || noDocumento == undefined){
        alert(`No hay ningun estudiante registrado por favor ingrese alguno`)
    }else{
        alert(`El estudiante ${nombre + apellido} identificado con ${tipoDocumento} no. ${noDocumento}`)

    }

    break;

    case 3:
while(mod1 == 0){

    mod = parseInt(prompt("Que dato desea actualizar 1.nombre 2.apellido 3.tipo Documento 4. no Documento"))

    switch(mod){

        case 1:

        nombre = prompt("Ingrese nombre del estudiante")
        alert(`nombre actualizado`)

        break;
        case 2:

        apellido = prompt("Ingrese apellido del estudiante")
        alert(`apellido actualizado`)

        break;

        case 3:

        tipoDocumento = prompt("Ingrese el tipo de docuemento")
        alert(`tipo Documento actualizado`)

        break;

        case 4:

        noDocumento = parseInt(prompt("Ingrese número de documento"))
        alert(`no.Documento actualizado`)

        break;


    }
    mod1 = parseInt(prompt("Desea actualizar algo mas? 0.si 1.no"))
}

    break;
    
}
 cont = parseInt(prompt("Desea seguir el proceso? 0.si 1.no"))
    
}*/

//---------------------------------------------------------------------------------------------------------//


//ciclo for determinado

/*for(let i=1;i<=5;i++){
    //cuerpo del ciclo
    console.log("Hola estoy dentro del ciclo!!")
}*/

//ciclo while indeterminado 

//CADENA DE CARACTERES

/*seguir = "si"
while(seguir == "si"){
    console.log("Hola estoy dento del ciclo while")

    seguir=prompt("Desea seguir?")
}

//ParseInt

seguir = 1
while(seguir == 1){
    console.log("Hola estoy dento del ciclo while")

    seguir=parseInt(prompt("Desea seguir? 1.si 2.no"))
}*/

//CONFIRM

seguir = true
while(seguir == true){
    console.log("Hola estoy dento del ciclo while")

    seguir=confirm(prompt("Desea seguir?"))
}