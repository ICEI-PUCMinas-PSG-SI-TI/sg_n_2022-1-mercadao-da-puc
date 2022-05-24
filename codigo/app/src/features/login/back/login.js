let inputEmail = document.getElementById("emailLogin");
let inputSenha = document.getElementById("senhaLogin");


function cliqueLogin(){

    var email = inputEmail.value
    var senha = inputSenha.value
    if(email == '' || senha == ''){
        alert('preencha os campos')
    }else{
        loginUsuario(email,senha)

    }

    

}

function loginUsuario(emailL, senhaL){

    if(localStorage.getItem('usuarios') == null){
        alert('Usuário nao registrado ')
    }else{
        var usuarios = JSON.parse(localStorage.getItem('usuarios'))
        usuarios.forEach(user => {
            if(user.email == emailL && user.senha == senhaL){
                alert(`Usuario registrado ${user.nome}`) 
                
            }else{
                alert('Email ou senha incorretos')
            }
        });
    }
}