// Función para determinar el tipo de triángulo
function determinarTipoTriangulo() {
  // Obtener los valores de los lados del triángulo
  var lado1 = parseFloat(document.getElementById("lado1").value);
  var lado2 = parseFloat(document.getElementById("lado2").value);
  var lado3 = parseFloat(document.getElementById("lado3").value);

  // Verificar si los valores ingresados forman un triángulo válido
  if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado3 + lado1 > lado2) {
    // Determinar el tipo de triángulo
    if (lado1 === lado2 && lado2 === lado3) {
      alert("El triángulo es equilátero");
    } else if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1) {
      alert("El triángulo es isósceles");
    } else {
      alert("El triángulo es escaleno");
    }
  } else {
    alert("Los valores ingresados no forman un triángulo válido");
  }
}
