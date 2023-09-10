const logo = document.querySelector(".navbarlogo");

logo.addEventListener('mouseover', ()=> {
    logo.classList.add('rotated');
})

logo.addEventListener('mouseout', ()=>{
    logo.classList.remove('rotated');
})
