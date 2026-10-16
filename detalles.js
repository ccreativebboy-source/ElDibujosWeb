//Catshow
document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------------
    // 1. SCROLL HORIZONTAL CON LA RUEDA DEL MOUSE
    // -----------------------------------------------------------
    const horizontalBody = document.querySelector('body.horizontal-layout');

    if (horizontalBody) {
        horizontalBody.addEventListener('wheel', (e) => {
            // Solo activa el scroll horizontal si estamos en pantalla ancha
            if (window.innerWidth > 768) {
                e.preventDefault();
                horizontalBody.scrollLeft += e.deltaY;
            }
        }, { passive: false });
    }

    
    // -----------------------------------------------------------
    // 3. REPRODUCCIÓN AUTOMÁTICA DE AUDIO EN PRIMER CLIC
    // -----------------------------------------------------------
    const audio = document.getElementById('bg-audio');
    if (audio) {
        audio.volume = 0.5;
        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.catch(() => {
                const startAudio = () => {
                    audio.play();
                    document.removeEventListener('click', startAudio);
                    document.removeEventListener('touchstart', startAudio);
                    document.removeEventListener('keydown', startAudio);
                };
                document.addEventListener('click', startAudio);
                document.addEventListener('touchstart', startAudio);
                document.addEventListener('keydown', startAudio);
            });
        }
    }
});