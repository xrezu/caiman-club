document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menu-toggle').addEventListener('click', function () {
        document.getElementById('menu').classList.toggle('hidden');
    });


    var mySwiper = new Swiper('.swiper-container', {
        // Configuración básica
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Configuraciones de respuesta
        breakpoints: {
            // cuando la anchura es >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // cuando la anchura es >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // cuando la anchura es >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            },
        }
    });
});
