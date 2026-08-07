const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

// Abre y cierra el submenú al hacer clic
dropdownBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Evita que la página salte
  dropdownMenu.classList.toggle('show');
});

// Cierra el submenú si haces clic fuera de él
window.addEventListener('click', (e) => {
  if (!dropdownBtn.contains(e.target)) {
    dropdownMenu.classList.remove('show');
  }
});