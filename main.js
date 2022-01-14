document.querySelector(".nav-item-container--about").onclick = () => {
    document.querySelector(".modal-box--active").classList.remove("modal-box--active")
    document.querySelector(".modal-box--about").classList.add("modal-box--active")
}

document.querySelector(".nav-item-container--contact").onclick = () => {
    document.querySelector(".modal-box--active").classList.remove("modal-box--active")
    document.querySelector(".modal-box--contact").classList.add("modal-box--active")
}

document.querySelector(".nav-item-container--home").onclick = () => {
    document.querySelector(".modal-box--active").classList.remove("modal-box--active")
    document.querySelector(".modal-box--home").classList.add("modal-box--active")
}

// home button

document.querySelector(".content__btn--contact").onclick = () => {
    document.querySelector(".modal-box--active").classList.remove("modal-box--active")
    document.querySelector(".modal-box--contact").classList.add("modal-box--active")

    document.querySelector(".footer-nav-item-icon--active").classList.remove("footer-nav-item-icon--active")
    document.querySelector(".footer-nav-item--phone").classList.add("footer-nav-item-icon--active")
}

document.querySelector(".content__btn--about").onclick = () => {
    document.querySelector(".modal-box--active").classList.remove("modal-box--active")
    document.querySelector(".modal-box--about").classList.add("modal-box--active")

    
    document.querySelector(".footer-nav-item-icon--active").classList.remove("footer-nav-item-icon--active")
    document.querySelector(".footer-nav-item--user").classList.add("footer-nav-item-icon--active")
}

// moblie

document.querySelector(".footer-nav-item--user").onclick = () => {
    document.querySelector(".modal-box--active").classList.remove("modal-box--active")
    document.querySelector(".modal-box--about").classList.add("modal-box--active")

    document.querySelector(".footer-nav-item-icon--active").classList.remove("footer-nav-item-icon--active")
    document.querySelector(".footer-nav-item--user").classList.add("footer-nav-item-icon--active")
}

document.querySelector(".footer-nav-item--phone").onclick = () => {
    document.querySelector(".modal-box--active").classList.remove("modal-box--active")
    document.querySelector(".modal-box--contact").classList.add("modal-box--active")

    document.querySelector(".footer-nav-item-icon--active").classList.remove("footer-nav-item-icon--active")
    document.querySelector(".footer-nav-item--phone").classList.add("footer-nav-item-icon--active")
}

document.querySelector(".footer-nav-item--home").onclick = () => {
    document.querySelector(".modal-box--active").classList.remove("modal-box--active")
    document.querySelector(".modal-box--home").classList.add("modal-box--active")

    document.querySelector(".footer-nav-item-icon--active").classList.remove("footer-nav-item-icon--active")
    document.querySelector(".footer-nav-item--home").classList.add("footer-nav-item-icon--active")
}