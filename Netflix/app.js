function searchAnimation() {
    const search = document.querySelector('.search')
    const navBtn = document.querySelector('#navBtn')
    const navSearch = document.querySelector('#navSearch')

    navBtn.addEventListener('click', function () {
        search.classList.toggle('active')
        navSearch.focus()
    })
}
searchAnimation()

function showAccount() {
    const account = document.querySelector('#account')
    const accountOpen = document.querySelector('#account-open')
    const heroSection = document.querySelector('#hero-section')

    account.addEventListener('mouseover', function () {
        accountOpen.classList.add('show')
    })

    heroSection.addEventListener('mouseover', function () {
        accountOpen.classList.remove('show')
    })
}

showAccount()

function showBrowse() {
    const browse = document.querySelector('#browse')
    const browseOpen = document.querySelector('#browseOpen')

    browse.addEventListener('click', function () {
        browseOpen.classList.toggle('show')
    })
}

showBrowse()

function showVideo() {
    const heroImg = document.querySelector('#hero-img')
    const heroVideo = document.querySelector('#hero-video')
    const btn1 = document.querySelector('#number1')
    const playSvg = document.querySelector('#playSvg')
    const pauseSvg = document.querySelector('#pauseSvg')


    function video() {
        if (btn1.children[2].textContent === 'Oynat') {
            playSvg.classList.add('hidden')
            pauseSvg.classList.remove('hidden')
            heroImg.classList.add('hidden')
            heroVideo.classList.remove('hidden')
            btn1.children[2].textContent = 'Durdur'
            heroVideo.play()
        } else if (btn1.children[2].textContent === 'Durdur') {
            playSvg.classList.remove('hidden')
            pauseSvg.classList.add('hidden')
            btn1.children[2].textContent = 'Oynat'
            heroImg.classList.remove('hidden')
            heroVideo.classList.add('hidden')
            heroVideo.pause()
        }
    }

    btn1.addEventListener('click', function () {
        video()
    })
}
showVideo()

function volume() {
    const volume = document.querySelector('#volume')
    const volumeOn = document.querySelector('#volumeOn')
    const volumeOff = document.querySelector('#volumeOff')
    const heroVideo = document.querySelector('#hero-video')

    volume.addEventListener('click', function () {
        if (heroVideo.volume === 1) {
            volumeOn.classList.add('hidden')
            volumeOff.classList.remove('hidden')
            heroVideo.volume = 0;
        } else {
            volumeOn.classList.remove('hidden')
            volumeOff.classList.add('hidden')
            heroVideo.volume = 1;
        }
    })


}
volume()

function navBar() {
    const nav = document.querySelector('#nav-bar')

    if (window.scrollY > 0) {
        nav.style.backgroundColor = '#080808'
    } else {
        nav.style.backgroundColor = 'transparent'
    }
}

window.addEventListener('scroll', navBar)
window.addEventListener('load', navBar)

function caret() {
    const caretRight = document.querySelectorAll('.caret-right')
    caretRight.forEach((caretRight)=>{
        caretRight.addEventListener('click',function(){
            caretRight.parentElement.querySelectorAll('img').forEach((img)=>{
                img.classList.add('active')
                if(img.classList.contains('active')){
                    img.classList.add('x1')
                }else if(img.classList.contains('x1')){
                    img.classList.add('x2')
                }
            })
        })
    })
}

caret()

