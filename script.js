const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

// Toggle burger menu
toggle.addEventListener("click", () => {
    toggle.classList.toggle("active"); // create cross icon
    navbar.classList.toggle("active"); // open/close menu

    // Close menu when link is clicked
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            toggle.classList.remove("active");
        });
    });
});

// Profile image click animation
const profileImg = document.querySelector(".hero-left img");

profileImg.addEventListener("click", () => {
    profileImg.classList.add("clicked");

    setTimeout(() => {
        profileImg.classList.remove("clicked");
    }, 600);
});


