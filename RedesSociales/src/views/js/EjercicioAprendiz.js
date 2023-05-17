let aprendices = [];

console.log(`Seleccione la opcion que desea realizar 0.Agregar aprendiz al final 1.Ver aprendiz 2.Buscar aprendiz 3.Modificar aprendiz 4.Buscar aprendiz 5.Ordenar lista A - Z`);




function escogerProceso(){

let op = parseInt(prompt("Ingrese la opcion que desee elegir"))

switch(op){
    case 0:
        let name = prompt("Ingrese el nombre del estudiante")
        aprendices.push(name)
    break;
    case 1:
        console.log(aprendices);
    break;
    case 2:
        let nombre = prompt("Ingrese el nombre del aprendiz que desea buscar")
        buscar = aprendices.find(aprendices=>aprendices==nombre)

        if (buscar == undefined){
            alert("El aprendiz no existe")
        }else{
            alert("El aprendiz que usted busco es: " + buscar)
        }
    break;
    case 3:
        let aprendizI=parseInt(prompt("Ingrese la posicion que quiere modificar"))
        let update=parseInt(prompt("Ingrese el valor por el cual quiere cambiarlo"))
        aprendices[aprendizI]=update
        alert(`El aprendiz se modifico correctamente: ${update}`)
    break;
    case 4:
        let apren = prompt("digite la posicion")
        aprendices.splice(apren,1)
        window.alert(`el aprendiz se ha borrado correctamente`)
    break;
    case 5:
        aprendices.sort()
        alert(aprendices)
    break;

    }

}

seguir="si"
while (seguir == "si"){
    escogerProceso()
        seguir=prompt("Desea continuar?")
}