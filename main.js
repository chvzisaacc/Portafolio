const formContacto = document.querySelector('.form-contacto');

if (formContacto) {
    formContacto.addEventListener('submit', function (e) {
        e.preventDefault();

        const mensajeConfirmacion = document.createElement('p');
        mensajeConfirmacion.textContent = '¡Mensaje enviado! Te contactaré pronto.';
        mensajeConfirmacion.classList.add('mensaje-exito');

        formContacto.appendChild(mensajeConfirmacion);

        formContacto.reset();

        setTimeout(() => {
            mensajeConfirmacion.remove();
        }, 4000);
    });
}