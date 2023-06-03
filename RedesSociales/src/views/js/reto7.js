function validarFormulario() {
    var tipoDocumento = document.getElementById("tipoDocumento").value;
    var numeroDocumento = document.getElementById("numeroDocumento").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var correoElectronico = document.getElementById("correoElectronico").value;
    var password = document.getElementById("password").value;
    var confirmarPassword = document.getElementById("confirmarPassword").value;
    var aceptarTerminos = document.getElementById("aceptarTerminos").checked;

    // Validar campos obligatorios
    if (!tipoDocumento || !numeroDocumento || !nombre || !apellido || !fechaNacimiento || !correoElectronico || !password || !confirmarPassword || !aceptarTerminos) {
      alert("Todos los campos son obligatorios.");
      return false;
    }

    // Validar longitud del número de documento
    if (numeroDocumento.length < 5) {
      alert("El número de documento debe tener al menos 5 dígitos.");
      return false;
    }

    // Validar caracteres alfanuméricos para nombre y apellido
    var alphanumericRegex = /^[a-zA-Z0-9\s]+$/;
    if (!alphanumericRegex.test(nombre) || !alphanumericRegex.test(apellido)) {
      alert("El nombre y el apellido deben contener caracteres alfanuméricos.");
      return false;
    }

    // Validar fecha de nacimiento mayor a 18 años (año 2002)
    var fechaLimite = new Date("2002-01-01");
    var fechaNac = new Date(fechaNacimiento);
    if (fechaNac >= fechaLimite) {
      alert("Debe ser mayor de 18 años para registrarse.");
      return false;
    }

    // Validar dominio de correo electrónico
    var emailRegex = /^[a-zA-Z0-9._%+-]+@misena\.edu\.co$/;
    if (!emailRegex.test(correoElectronico)) {
      alert("El correo electrónico debe tener el dominio @misena.edu.co");
      return false;
    }

    // Validar contraseña
    var passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{10,}/;
    if (!passwordRegex.test(password)) {
      alert("La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número, un carácter especial y ser de al menos 10 caracteres.");
      return false;
    }

    // Comprobar que el password y su confirmación son iguales
    if (password !== confirmarPassword) {
      alert("El password y su confirmación no coinciden.");
      return false;
    }

    // Comprobar que se haya aceptado los términos de uso
    if (!aceptarTerminos) {
      alert("Debe aceptar los términos de uso para registrarse.");
      return false;
    }

    // Si todas las validaciones pasan, el formulario es válido
    alert("Formulario enviado exitosamente.");
    return true;
  }

  function mostrarTerminos() {
    var modalTerminos = document.getElementById("modalTerminos");
    modalTerminos.style.display = "block";
  }

  function cerrarTerminos() {
    var modalTerminos = document.getElementById("modalTerminos");
    modalTerminos.style.display = "none";
  }