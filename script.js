let searchctn = document.querySelector('#search-ctn');
let searchbar = document.querySelector('.search-bar-container');
window.onscroll=() =>{
    searchBtn.classList.remove('fa-times');
    searchBtn.classList.remove('active');

}
searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBtn.classList.toggle('active');

})
