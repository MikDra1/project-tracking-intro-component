const burger = document.querySelector('.burger')
const headerUl = document.querySelector('.header__ul')
console.log(burger)

let isOpen = false;

burger.addEventListener("click", function() {
    if(!isOpen) {
        burger.src = 'images/icon-close.svg'
        headerUl.style.display = 'grid'
        isOpen = true;
    } else {
        burger.src = 'images/icon-hamburger.svg'
        headerUl.style.display = 'none'
        isOpen = false;
    }
});
