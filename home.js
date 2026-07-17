const hamburger = document.querySelector(".hamburger");

const menu = document.querySelector(".menu");

const navLinks = document.querySelectorAll(".navbar a");

hamburger.addEventListener("click", function () {
  menu.classList.toggle("active");
});

// 2. Fungsi untuk menutup menu (menghapus class 'active')
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active"); // Menghapus class active di tombol hamburger
    menu.classList.remove("active"); // Menghapus class active di daftar menu agar menutup
  });
});
