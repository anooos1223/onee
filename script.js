const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    main.classList.toggle("shift");

    // optional: change icon
    menuBtn.textContent = sidebar.classList.contains("open") ? "✖" : "☰";
});
