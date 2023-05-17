let btn = document.getElementById("btnCalcular")

btn.onclick = function calcular(e){

    //declarar funcion calcular=(e) =>{}
    e.preventDefault()

    //Entradas
    
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let op = parseInt(document.getElementById("op").value) 

    //alert(num1,num2,op);

    switch(op){
        case 1:
            let suma = parseInt(num1) + parseInt(num2)
            alert(`La suma entre ${num1} y ${num2} es ${suma}`)

        break;

        case 2:
            let resta = parseInt(num1) - parseInt(num2)

            //Acceder al div resultado

            let res = document.querySelector(".resultado")
            res.innerHTML=`<p>La resta entre ${num1} y ${num2} es ${resta}`
        break;

        case 3:
            let multi = parseInt(num1) * parseInt(num2)

            //Acceder al div resultado

            let mul = document.querySelector(".resultado")
            mul.innerHTML=`<p>La multiplicacion entre ${num1} y ${num2} es ${multi}`
        break;

        case 4:
            let division = parseInt(num1) / parseInt(num2)

            //Acceder al div resultado

            let divi = document.querySelector(".resultado")
            divi.innerHTML=`<p>La division entre ${num1} y ${num2} es ${division}`
        break;
    }
}