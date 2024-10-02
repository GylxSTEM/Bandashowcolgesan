document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.carousel-slides');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const totalSlides = slides.children.length;
    let index = 0;

    function showSlide(index) {
        const offset = -index * 100; // Para desplazar las imágenes
        slides.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function () {
        index = (index > 0) ? index - 1 : totalSlides - 1;
        showSlide(index);
    });

    nextButton.addEventListener('click', function () {
        index = (index < totalSlides - 1) ? index + 1 : 0;
        showSlide(index);
    });

    // Auto avanzar cada 5 segundos
    setInterval(function () {
        index = (index < totalSlides - 1) ? index + 1 : 0;
        showSlide(index);
    }, 5000);
});
