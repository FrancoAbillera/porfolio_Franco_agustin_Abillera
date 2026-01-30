// carrusel.js

document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos el carrusel
    const carrusel = document.getElementById("carrusel_Cartas");

  // Escuchamos el evento de cambio de slide (Bootstrap)
    carrusel.addEventListener("slid.bs.carousel", () => {
        // Seleccionamos todos los videos dentro del carrusel
        const videos = carrusel.querySelectorAll("video");

        // Reiniciamos cada video
        videos.forEach(video => {
            video.currentTime = 0; // vuelve al inicio
            video.pause();         // lo dejamos pausado
            });

        // Reproducimos solo el video del slide activo
        const activeSlide = carrusel.querySelector(".carousel-item.active video");
        if (activeSlide) {
            activeSlide.play();
        }
    });
});
