//Sintaxis

/*
    const nombreobjeto={
        atributo:valor1,
        atributo:valor2
    }

    nombremetodo(){
        contenido del metodo
    }
*/ 

//Creacion del objeto animal con 3 atributos/propiedades y 1 metodo

/*const animal={
    nombre:"Rush",
    tipo:"Gato",
    edad:"4",
    comer(){
        console.log(`${animal.nombre} esta comiendo`);
        console.log(`${this.tipo} esta comiendo`);
    }
}
*/
//mostrar objeto completo

/*console.log(animal);*/

//mostrar atributo/propiedad de el objeto

/*console.log(animal.nombre);*/

/*const instructor={
    nombre:"Jennifer",
    apellido:"Fajardo",
    materia:"JavaScript",

    imprimirInstructor(){

        console.log(`El nombre del instructor es ${instructor.nombre}`);
        console.log(`El apellido del instructor es ${instructor.apellido}`);
        console.log(`la materia asignada para el/la instructor@ ${instructor.nombre} es ${instructor.materia}`);
    }
   
}*/

const instructores=[
    {firstName:"Jennifer",lastName:"Fajardo",signature:"JavaScript"},
    {firstName:"Tatiana",lastName:"Cabrera",signature:"Java"}

]


let ele = parseInt(prompt("seleccione el proceso que desee realizar 1.Agregar instructor al final 2.Ver instructores 3.Buscar instructores 4.Modificar instructores 5.Borrar instructores 6.Ordernar instructores A - Z"))


function AgregarInstructores(){
    
    let op = 1

        while(op == 1){
            let instructor={

                firstName : prompt("Ingrese el nombre del instructor"),
                lastName : prompt("Ingrese el apellido del instructor"),
                signature : prompt("Ingrese asignatura del instructor")

            }

            instructores.push(instructor)

                op = parseInt(prompt("Desea seguir con el ciclo 1.si 2.no"))
}

}

function VerInstructores(){
    console.log(instructores);
}
function BuscarInstructor(){
    let nombre = prompt("Ingrese el nombre del instructor que desea buscar")
    let apellido = prompt("Ingrese el apellido del instructor que desea buscar")
    let asignatura = prompt("Ingrese la asignatura del instructor que desea buscar")

        let buscar = instructores.find(instructores=>instructores.firstName==nombre && instructores.lastName==apellido && instructores.signature == asignatura)
        

        if (buscar == undefined){
            alert("El instructor no existe")
        }else{
            console.log(buscar);
        }
}



switch(ele){
    case 1:
        AgregarInstructores()
    break;
    case 2:
        VerInstructores()
    break;
    case 3:
        BuscarInstructor()
    break;
}
console.log(instructores);

/*function ModificarInstructor(){
    let instructorName=parseInt(prompt("Ingrese el nombre del profesor que quiera modificar"))
    let instructorLastName=parseInt(prompt("Ingrese el apellido del profesor que quiera modificar"))
    let instructorSignature=parseInt(prompt("Ingrese la asignatura del profesor que quiera modificar"))
    let update = instructores.find(instructor => instructor.firstName === instructorName && instructor.lastName === instructorLastName && instructor.signature === instructorSignature);
    instructores[instructorName,instructorLastName,instructorSignature]=update
    alert(`El aprendiz se modifico correctamente: ${update}`)
}*/