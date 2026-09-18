const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
    if (navLinks.classList.contains("show")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuButton.textContent = "☰";
    });
});
const detailsButton = document.querySelector(".details-button");
const menuDetails = document.querySelector(".menu-details");

detailsButton.addEventListener("click", function () {
    menuDetails.classList.toggle("show");
});