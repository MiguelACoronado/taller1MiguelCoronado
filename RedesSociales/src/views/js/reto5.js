// Datos de los instructores
var instructores = [
  {
    nombre: "Jennifer",
    apellido: "Fajardo",
    actividad: "JS"
  },
  {
    nombre: "Tatiana",
    apellido: "Cabrera",
    actividad: "JAVA"
  },
  {
    nombre: "Jonathan",
    apellido: "Espitia",
    actividad: "SQL"
  }
];

// Función para comprobar la respuesta del usuario
function comprobarRespuesta() {
  var nombreSeleccionado = document.getElementById("nombre").value;
  var apellidoSeleccionado = document.getElementById("apellido").value;
  var actividadSeleccionada = document.getElementById("actividad").value;

  // Buscar el instructor seleccionado en los datos
  var instructorSeleccionado = instructores.find(function(instructor) {
    return instructor.nombre === nombreSeleccionado &&
           instructor.apellido === apellidoSeleccionado &&
           instructor.actividad === actividadSeleccionada;
  });

  // Comprobar si la respuesta es correcta
  if (instructorSeleccionado) {
    alert("La respuesta es correcta");
  } else {
    alert("La respuesta es incorrecta");
  }
}
