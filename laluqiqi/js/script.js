// Toggle class active untuk menampilkan atau menyembunyikan navbar
const navbarNav = document.querySelector(".navbar-nav");
const menuButton = document.querySelector("#menu");

// Pastikan tombol menu ada di dalam dokumen sebelum menjalankan event
if (menuButton) {
  menuButton.addEventListener("click", () => {
    navbarNav.classList.toggle("active");
  });
}

// Klik di luar navbar untuk menutup menu
document.addEventListener("click", (e) => {
  if (!navbarNav.contains(e.target) && !menuButton.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
