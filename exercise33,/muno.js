const header = document.querySelector("#header");

console.log(header);

const text = document.querySelector(".text")
console.log(text)

const button =document.querySelector("button")

console.log(button)


function changeText(){

    header.textContent = "welcom to my websited";
}

function changeElement (){

  text.innerHTML = "<img src='https://i.pinimg.com/736x/1b/87/3c/1b873cfacaf75364e5a857deb2821920.jpg' alt=''>";
  
}