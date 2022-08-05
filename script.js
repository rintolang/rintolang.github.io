document.querySelector(".holder").addEventListener("click", () => {
    document.querySelector("body").classList.toggle("lightMode");
    document.querySelector(".mainContent").classList.toggle("lightMode");
    document.querySelector("img").classList.toggle("toggleSw");
})