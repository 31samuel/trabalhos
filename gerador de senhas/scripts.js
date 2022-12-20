let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#valor");
let Password   = document.querySelector("#password")

let containerpassword = document.querySelector("#container-password")

let charset ="abcdefghtmnlopqrstuvxwnopqrs123456789@#$%";
let novasenha ="";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
 sizePassword.innerHTML = this.value;
}

function generatepassword(){
  let pass = "";
  for(let i =0, n = charset.length;i<sliderElement.value; ++i){
    pass+= charset.charAt(Math.floor(Math.random() * n))
  }
    containerpassword.classList.remove("hide")
   Password.innerHTML = pass;
   novasenha = pass
}

function copyPassword(){
     alert("senha copiada com sucesso!")
     navigator.clipboard.writeText(novasenha);
    
}

