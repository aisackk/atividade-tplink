var botaoEntrar = document.getElementById("button-submit")

function login () {
    var campoEmail = document.getElementById("usuario").value
    var campoSenha = document.getElementById("senha").value
    var campoCodigo = document.getElementById("codigo").value

    if(campoEmail== "teste@teste.com" && campoSenha== "teste123" && campoCodigo== "tplink2025") {
    window.location.replace("painel.html")
    }

    else {
        alert("Ops! Você errou e-mail e senha")
    }
}

botaoEntrar.addEventListener("click", login)
console.log('log 2')