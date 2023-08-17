const search = document.querySelector('.search')
const navBtn = document.querySelector('#navBtn')
const navSearch = document.querySelector('#navSearch')

navBtn.addEventListener('click',function(){
    search.classList.toggle('active')
    navSearch.focus()
})