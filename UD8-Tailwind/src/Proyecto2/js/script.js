// 1. Seleccionar elementos
const themeToggleBtn = document.getElementById("theme-toggle");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

// 2. Función para verificar el tema al cargar
function checkTheme() {
  const isDarkStored = localStorage.getItem("color-theme") === "dark";
  const isSystemDark = !("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (isDarkStored || isSystemDark) {
    document.documentElement.classList.add("dark");
    sunIcon.classList.remove("hidden"); // Mostrar sol para volver a luz
    moonIcon.classList.add("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    moonIcon.classList.remove("hidden"); // Mostrar luna para ir a oscuro
    sunIcon.classList.add("hidden");
  }
}

// 3. Función para alternar el tema
function toggleMode() {
  // Alternar iconos
  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");

  // Referencia al logo (buscamos la clase que pusimos en el HTML)
  const logoElement = document.querySelector(".bg-logo-light-mode");

  if (document.documentElement.classList.contains("dark")) {
    // Si es dark, pasamos a light
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");

    // Cambiar clases de fondo del logo si es necesario
    logoElement?.classList.replace("bg-logo-dark-mode", "bg-logo-light-mode");
  } else {
    // Si es light, pasamos a dark
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");

    logoElement?.classList.replace("bg-logo-light-mode", "bg-logo-dark-mode");
  }
}

// 4. Event Listeners
themeToggleBtn.addEventListener("click", toggleMode);
document.addEventListener("DOMContentLoaded", checkTheme);