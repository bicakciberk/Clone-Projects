/*nav, side-bar*/
const menuBtn = document.querySelector('.menu');
const sideText = document.querySelectorAll('.side-text');
const sideBar = document.querySelector('#side-bar');
const thisHide = document.querySelectorAll('.this-hide');
const main = document.querySelector('#main');
const windowWidth = window.innerWidth;
const navbar = document.querySelector('#nav-bar');
const cardContainer = document.querySelector('.card-container');
const videoContainer = document.querySelector('.video-container');


function hideText() {
    menuBtn.addEventListener('click', function () {
        if (windowWidth > 581) {
            sideText.forEach((text) => {
                text.classList.toggle('hide');
                sideBar.classList.toggle('width')
            })

            thisHide.forEach((data) => {
                data.classList.toggle('hidden')
            })

            main.classList.toggle('width')
        } else {

        }

    })
}

hideText()

/*profile*/
const profile = document.querySelector('.profile'); /*avatar'a basılınca açılan (ayarlar vb yerlerin olduğu) yer*/
const pp = document.querySelector('.avatar'); /* nav'daki avatar (img)*/
const closeBtn = document.querySelector('.close');

function showProfile() {
    pp.addEventListener('click', function () {
        profile.classList.toggle('active');
        
        if(profile.classList.contains('active')){
            body.classList.add('scroll')
        } else{
            body.classList.remove('scroll')
        }
    });
}

function closeButton(){
    closeBtn.addEventListener('click',function(){
        profile.classList.remove('active')
        body.classList.remove('scroll')
    })
}

closeButton();
showProfile();

/*theme*/
const defaultBtn = document.querySelector('#default-btn') //bilgisayarın kullandığı tema
const lightBtn = document.querySelector('#light-btn') //açık tema 
const darkBtn = document.querySelector('#dark-btn') //karanlık tema
const themeWrite = document.querySelector('#theme-span'); //temadan mesela karanlık temaya basıldığında profile yerindeki span'ın değiştirilmesini sağlar


const theme = document.querySelector('.theme') // temaların bulunduğu container
const themeBtn = document.querySelector('#themeBTN') // profile kısmındaki tema yerini açmayı sağlayan yer (ul li)

const themeHeader = document.querySelector('.theme-header')



function selectCount() {
    defaultBtn.addEventListener('click', function () {
        defaultBtn.classList.add('active');
        lightBtn.classList.remove('active')
        darkBtn.classList.remove('active')
        themeWrite.textContent = 'Default'
    })

    lightBtn.addEventListener('click', function () {
        lightBtn.classList.add('active');
        defaultBtn.classList.remove('active')
        darkBtn.classList.remove('active')
        themeWrite.textContent = 'Açık'
    })


    darkBtn.addEventListener('click', function () {
        darkBtn.classList.add('active');
        defaultBtn.classList.remove('active')
        lightBtn.classList.remove('active')
        themeWrite.textContent = 'Karanlık'

    })
}

selectCount()

function openThemePage() {
    themeBtn.addEventListener('click', function () {
        theme.classList.add('active')
        profile.classList.remove('active')
    })

    themeHeader.addEventListener('click', function () {
        theme.classList.remove('active')
        profile.classList.add('active')
    })

    pp.addEventListener('click',function(){
        theme.classList.remove('active')
    })
}

openThemePage()


const body = document.querySelector('body');
const ytText = document.querySelector('.yt-text');
const navSearch = document.querySelector('#nav-search');
const ytMic = document.querySelector('.yt-mic')

function changeLight() {
    lightBtn.addEventListener('click', function () {
        body.classList.add('light');
        navbar.classList.add('light');
        sideBar.classList.add('light');
        profile.classList.add('light');
        theme.classList.add('light');
        ytText.classList.add('light');
        sideBar.classList.add('light');
        menuBtn.classList.add('light');
        navSearch.classList.add('light');
        sideBar.classList.add('light');
        ytMic.classList.add('light');
        main.classList.add('light');
        videoContainer.classList.add('light');
        theme.classList.add('light');
        cardContainer.classList.add('light')
        closeBtn.style.color = '#000'
    })
}

function changeDark() {
    darkBtn.addEventListener('click', function () {
        body.classList.remove('light');
        navbar.classList.remove('light');
        sideBar.classList.remove('light');
        profile.classList.remove('light');
        theme.classList.remove('light');
        ytText.classList.remove('light');
        sideBar.classList.remove('light');
        menuBtn.classList.remove('light');
        navSearch.classList.remove('light');
        sideBar.classList.remove('light');
        ytMic.classList.remove('light');
        main.classList.remove('light');
        videoContainer.classList.remove('light');
        theme.classList.remove('light');
        cardContainer.classList.remove('light')
        closeBtn.style.color = '#fefefe'

    })
}


changeLight()
changeDark()