const toggleButton= document.querySelector(".toggle-button")
const navbar =document.querySelector('.navbar')

toggleButton.addEventListener("click", function(envent){
     envent.preventDefault()
    navbar.classList.toggle("active")
})