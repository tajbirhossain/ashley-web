const bars = document.querySelector(".fa-bars")
const menu = document.querySelector(".headerRight ul")
const overlay = document.querySelector(".overlay")

// const menuItem = document.querySelector(".menuItem")
// const menuList = document.querySelector(".menuItem ul")



bars.addEventListener("click", () => {
    menu.classList.add("active")
    overlay.classList.add("active")
})
overlay.addEventListener("click", () => {
    menu.classList.remove("active")
    overlay.classList.remove("active")
})