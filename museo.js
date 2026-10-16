document.addEventListener("wheel", function (event) {
    // Convertir el scroll vertical en horizontal
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();

        window.scrollBy({
            left: event.deltaY,
            behavior: "auto"
        });
    }
}, { passive: false });