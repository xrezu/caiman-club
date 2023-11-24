let recomendacion = document.querySelector('.recomendacion');
let recomendacionImagen = document.getElementById('recomendacion-imagen');
let recomendacionTexto = document.getElementById('recomendacion-texto');
let recomendacionDescripcion = document.getElementById('recomendacion-descripcion');

document.querySelectorAll('.focus-target').forEach(item => {
    let timer;
    item.addEventListener('mouseover', () => {
        let mensaje = item.getAttribute('data-message');
        let imagen = item.getAttribute('data-image');
        let descripcion = item.getAttribute('data-description');

        recomendacionTexto.textContent = mensaje;
        recomendacionImagen.src = imagen;
        recomendacionDescripcion.textContent = descripcion;

        timer = setTimeout(() => {
            recomendacion.classList.remove('hidden');
        }, 800); // Espera 800 milisegundos
    });
    item.addEventListener('mouseout', () => {
        clearTimeout(timer);
        recomendacion.classList.add('hidden');
    });
});