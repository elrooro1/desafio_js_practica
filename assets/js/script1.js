document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    const regex = /^[a-zA-Z]+$/;

    const resultadoElement = document.querySelector('.resultado');
    const errorNombreElement = document.getElementById('errorNombre');
    const errorAsuntoElement = document.getElementById('errorAsunto');
    const errorMensajeElement = document.getElementById('errorMensaje');

    // Limpiar mensajes de error anteriores
    errorNombreElement.textContent = "";
    errorAsuntoElement.textContent = "";
    errorMensajeElement.textContent = "";
    resultadoElement.textContent = "";

    if (!regex.test(nombre)) {
        errorNombreElement.textContent = "El nombre es requerido y debe contener solo caracteres alfabéticos.";
        document.getElementById('nombre').classList.add('error');
    }

    if (!regex.test(asunto)) {
        errorAsuntoElement.textContent = "El asunto es requerido y debe contener solo caracteres alfabéticos.";
        document.getElementById('asunto').classList.add('error');
    }

    if (!mensaje.trim()) {
        errorMensajeElement.textContent = "El mensaje es requerido.";
        document.getElementById('mensaje').classList.add('error');
    }

    // Validar si se deben mostrar mensajes de error o éxito
    if (errorNombreElement.textContent || errorAsuntoElement.textContent || errorMensajeElement.textContent) {
        resultadoElement.textContent = "Error: Por favor, completa todos los campos correctamente.";
    } else {
        resultadoElement.textContent = "Formulario enviado correctamente";
        // Aquí podrías enviar los datos del formulario a un servidor si es necesario
        document.getElementById('nombre').classList.remove('error');
        document.getElementById('asunto').classList.remove('error');
        document.getElementById('mensaje').classList.remove('error');
    }
});