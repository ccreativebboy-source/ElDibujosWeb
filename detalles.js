document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------------
    // 1. MANEJO DE DROPDOWNS Y MENÚ MÓVIL
    // -----------------------------------------------------------
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const toggleBtn = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');

        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Cerrar los otros menús desplegables abiertos
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.querySelector('.dropdown-menu')?.classList.remove('show');
                }
            });

            menu.classList.toggle('show');
        });
    });

    // Abrir/cerrar menú hamburguesa en móviles
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Cerrar menús al hacer clic fuera de ellos
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });

    // -----------------------------------------------------------
    // 2. REPRODUCCIÓN AUTOMÁTICA DE AUDIO (AUTOPLAY EN ENTRADA)
    // -----------------------------------------------------------
    const audio = document.getElementById('bg-audio');

    // Intentar reproducir inmediatamente (por si el navegador lo permite)
    if (audio) {
        audio.volume = 0.5; // Ajusta el volumen si lo deseas (0.0 a 1.0)
        
        const promise = audio.play();
        if (promise !== undefined) {
            promise.catch(() => {
                // Si el navegador bloqueó la reproducción automática sin interacción,
                // reproducimos el audio al primer clic o toque que dé el usuario en la página.
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
    // 2. DESPLEGABLES Y MENÚ MÓVIL
    // -----------------------------------------------------------
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const toggleBtn = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');

        toggleBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            dropdowns.forEach(other => {
                if (other !== dropdown) other.querySelector('.dropdown-menu')?.classList.remove('show');
            });
            menu?.classList.toggle('show');
        });
    });

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    window.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
        }
    });

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