const mobileMenu = document.querySelector('#mobile-nav');
const menu = document.querySelector('#nav-bar')
const hamburger = document.querySelector('.burger-nav');
const hamburgerClose = document.querySelector('.burger-nav-close');

const goTop = document.querySelector('.go-top');

goTop.addEventListener('click',function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
    
})


hamburger.addEventListener('click', function () {
    mobileMenu.classList = 'active';
});

hamburgerClose.addEventListener('click', function () {
    mobileMenu.classList = 'close';
});

window.addEventListener('scroll',function(){
    if(scrollY > 0){
        menu.style.backgroundColor = '#111111';
        menu.style.borderBottom = '1px solid #1a1a1a';
    } else{
        menu.style.backgroundColor = 'transparent';
        menu.style.border = 'none';
    }
});