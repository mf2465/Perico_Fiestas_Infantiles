// validacion.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    var regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
        alert("Por favor ingresa un correo electrónico válido.");
        return false;
    }

    if (!nombre ||!apellido ||!telefono ||!email ||!mensaje) {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    alert("Formulario enviado exitosamente!");
    
});
