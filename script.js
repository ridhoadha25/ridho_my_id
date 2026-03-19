const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

// Toggle menu burger
toggle.addEventListener("click", () => {
    toggle.classList.toggle("active"); // buat ikon silang
    navbar.classList.toggle("active"); // buka/tutup menu

    // Tutup menu saat klik link
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            toggle.classList.remove("active");
        });
    });
});

// Animasi klik gambar profil
const profileImg = document.querySelector(".hero-left img");

profileImg.addEventListener("click", () => {
    profileImg.classList.add("clicked");

    setTimeout(() => {
        profileImg.classList.remove("clicked");
    }, 600);
});


