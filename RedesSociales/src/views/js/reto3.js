// Función para realizar la conversión de temperatura
function convertirTemperatura() {
  var temperatura = parseFloat(document.getElementById("temperatura").value);
  var unidadOrigen = document.getElementById("origen").value;
  var unidadDestino = document.getElementById("destino").value;
  var resultado;

  // Conversiones de temperatura
  if (unidadOrigen === "Celsius") {
    if (unidadDestino === "Fahrenheit") {
      resultado = (temperatura * 9/5) + 32;
    } else if (unidadDestino === "Kelvin") {
      resultado = temperatura + 273.15;
    } else {
      resultado = temperatura;
    }
  } else if (unidadOrigen === "Fahrenheit") {
    if (unidadDestino === "Celsius") {
      resultado = (temperatura - 32) * 5/9;
    } else if (unidadDestino === "Kelvin") {
      resultado = (temperatura - 32) * 5/9 + 273.15;
    } else {
      resultado = temperatura;
    }
  } else if (unidadOrigen === "Kelvin") {
    if (unidadDestino === "Celsius") {
      resultado = temperatura - 273.15;
    } else if (unidadDestino === "Fahrenheit") {
      resultado = (temperatura - 273.15) * 9/5 + 32;
    } else {
      resultado = temperatura;
    }
  } else {
    resultado = temperatura;
  }

  // Mostrar resultado en una alerta
  alert("El resultado de la conversión es: " + resultado.toFixed(2) + " " + unidadDestino);
}
