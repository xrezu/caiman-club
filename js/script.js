document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('hidden');
});


var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30, // Espacio entre slides, ajustar según necesidad
    loop: true, // Hace que el carrusel sea continuo

    // Opciones de paginación
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Opciones de navegación
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Opciones de la barra de desplazamiento
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});