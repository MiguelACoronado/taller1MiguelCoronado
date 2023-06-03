function calcularPerimetroCirculo() {
  var radio = document.getElementById("radioCirculo").value;
  var perimetro = 2 * Math.PI * radio;
  alert("El perímetro del círculo es: " + perimetro.toFixed(2));
}

function calcularAreaTriangulo() {
  var base = document.getElementById("baseTriangulo").value;
  var altura = document.getElementById("alturaTriangulo").value;
  var area = (base * altura) / 2;
  alert("El área del triángulo es: " + area.toFixed(2));
}

function calcularPerimetroRectangulo() {
  var base = document.getElementById("baseRectangulo").value;
  var altura = document.getElementById("alturaRectangulo").value;
  var perimetro = 2 * (parseInt(base) + parseInt(altura));
  alert("El perímetro del rectángulo es: " + perimetro.toFixed(2));
}

function calcularAreaCuadrado() {
  var lado = document.getElementById("ladoCuadrado").value;
  var area = lado * lado;
  alert("El área del cuadrado es: " + area.toFixed(2));
}
  