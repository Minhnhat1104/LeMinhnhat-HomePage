document.querySelector(".nav-item-container--about").onclick = function click() {
    document.querySelector(".modal-box--active").classList.remove("modal-box--active")
    document.querySelector(".modal-box--about").classList.add("modal-box--active")
}

document.querySelector(".nav-item-container--contact").onclick = function click() {
    document.querySelector(".modal-box--active").classList.remove("modal-box--active")
    document.querySelector(".modal-box--contact").classList.add("modal-box--active")
}

document.querySelector(".nav-item-container--home").onclick = function click() {
    document.querySelector(".modal-box--active").classList.remove("modal-box--active")
    document.querySelector(".modal-box--home").classList.add("modal-box--active")
}