
let sliderElemnt = document.querySelector("#slider");
let buttonElemnt = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abdcefghijklmnopqABCDEFGHIJKLMNOPQ0123456789!@#$%¨&";
let novaSenha = "";

sizePassword.innerHTML = sliderElemnt.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatepassword(){
    let pass ="";

    for(let i = 0, n = charset.length; i < sliderElemnt.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
      }
      containerPassword.classList.remove("hide");
      password.innerHTML = pass;
      novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso");
    navigator.clipboard.writeText(novaSenha);
}
