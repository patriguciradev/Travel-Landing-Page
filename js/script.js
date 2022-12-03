const respoIcon = document.querySelector(".respo-icon");
const navMenu = document.querySelector(".nav-menu");

respoIcon.addEventListener("click", () => {
    respoIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
});


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    respoIcon.classList.remove("active");
    navMenu.classList.remove("active");
}));