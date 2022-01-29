var navContainerList = document.querySelectorAll('.nav-item-container')

var modalBoxList = document.querySelectorAll('.modal-box')

var contentBtnList = document.querySelectorAll('.content__btn')

// var footerNavItemList = document.querySelectorAll('.footer-nav-item')




Array.from(navContainerList).forEach(function(navContainer, index) {
    navContainer.onclick=function() {
        document.querySelector(".modal-box--active").classList.remove("modal-box--active")
        modalBoxList[index].classList.add("modal-box--active")
    }
})

Array.from(contentBtnList).forEach(function(contentBtnItem, index) {
    contentBtnItem.onclick=function() {
        document.querySelector(".modal-box--active").classList.remove("modal-box--active")
        modalBoxList[index+1].classList.add("modal-box--active")
    }
})

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


var phoneNumberHover = function(option) {
    var phoneNumber = option.phoneNumber
    
    var phoneBtnLinkElement = document.querySelector(option.phoneLinkSelector) 
    
    var phoneBtnContent = phoneBtnLinkElement.innerHTML
    
    phoneBtnLinkElement.onmouseover = function (e) {
        e.target.innerHTML = phoneNumber  
    }
    
    phoneBtnLinkElement.onmouseout = function (e) {
        e.target.innerHTML = phoneBtnContent
    }
}
