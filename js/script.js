const navMenuBtn = document.querySelector("#nav-menu-btn")
const closeNavMenuBtn = document.querySelector("#close-nav-menu-btn")
const navMenu = document.querySelector(".nav-menu")

navMenuBtn.addEventListener("click", () => {
    navMenu.classList.add("nav-menu-active")
})

closeNavMenuBtn.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu-active")
})


window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        if (navMenu.className.includes("nav-menu-active")) {
            navMenu.classList.remove("nav-menu-active")
        }
    }
})