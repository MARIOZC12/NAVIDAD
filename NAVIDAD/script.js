document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtener el botón
    const contactButton = document.getElementById('contact-btn');

    // 2. Añadir el evento de click
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            // Mostrar una alerta de Navidad al hacer click
            alert('¡Ho Ho Ho! ¡Gracias por contactarnos! Te deseamos una Feliz Navidad y un Próspero Año Nuevo.');
            // Aquí podrías añadir lógica más compleja como enviar un formulario.
        });
    }

    // 3. Pequeño efecto visual (opcional: animar el fondo ligeramente)
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.transition = 'background-color 0.5s ease';
        // Puedes añadir un evento para cambiar el color de fondo en hover si lo deseas.
    }
});