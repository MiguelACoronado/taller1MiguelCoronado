//Acceder al elemento por su id

let contenido = document.getElementById("Features")
console.log(contenido);


//Acceder al elemento de su selector

let con1 = document.querySelector("p")
console.log(con1);


//Acceder al elemento por su id 2

let con2 = document.querySelector("#features")
console.log(con2);


//Acceder al elemento por su selector class

let con3 = document.querySelector(".feature")
console.log(con3);


//Acceder a varios elementos por su selector

let con4 = document.querySelectorAll("p")
console.log(con4);

//Acceder a una posicion especifica del array(NodeList)

let con5 = document.querySelectorAll("p")[0]
console.log(con5)


//Recorrer el array(NodeList)

document.querySelectorAll("p").forEach((el)=>console.log(el));


//Ejemplo de acceso a campo de formulario

let num1 = document.getElementById("num1").value
console.log(num1);


//Acceder al valor de un atributo

document.querySelector("a").getAttribute("href")


//Cambiar el valor de un atrbuto

document.querySelector("a").setAttribute("href","https://www.youtube.com/")



//Accerder al atributo style para cambiar estilos

let mys = document.querySelector("#features")
mys.style.setProperty("color", "black")
mys.style.setProperty("background", "#EEC2A2")
mys.style.setProperty("font-size", "100%")


//Acceder a un selector y cambiar su contenido (modo de texto)

let mic = document.querySelector("h1")

let text = `
Este es el feature 1`

mic.textContent = text


//Acceder a un selector y cambiar su contenido (modo de texto) (Feature 2)

let mic2 = document.querySelector(".feature-2")

let text2 = `
<h1>Miguel Angel Coronado</h1>
<p>Aprendiz Ficha 2687390 de ADSO</p>`



mic2.innerHTML = text2


//Crear contenido de en DOM

let img1 = document.createElement("img")
img1.src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fmundo%2Fnoticias-48676663&psig=AOvVaw0QtSiTKCzzHdEyMI3u0uTw&ust=1683899872273000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCMDzmYG27f4CFQAAAAAdAAAAABAI"

document.body.appendChild(img1)

let caja = document.createElement("div")
caja.innerHTML = "<img src = img/GamepadButton.jpg>"

mic2.appendChild(caja)

