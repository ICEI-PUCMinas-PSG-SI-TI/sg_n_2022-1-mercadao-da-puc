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

function Usuario(nomeCadastro,senhaCadastro,emailCadastro,pixCadastro,descricaoCadastro,numeroCadastro, logadoCadastro = false){
    this.nome = nomeCadastro;
    this.senha = senhaCadastro;
    this.email = emailCadastro;
    this.pix = () => (pixCadastro == '') ? 'pix nao foi informado':pixCadastro
    this.descricao = descricaoCadastro;
    this.number = numeroCadastro;
    this.logado = logadoCadastro;
}

function loginUsuario(emailL, senhaL){

    if(localStorage.getItem('usuarios') == null){
        alert('Nao existem usuarios  registrado ')
    }else{
        var usuarios = JSON.parse(localStorage.getItem('usuarios'))
        const usuariosAtualizados = usuarios.map(user => {
            if(user.email == emailL && user.senha == senhaL){
                user.logado = true 
                window.location.replace('../../../home/view/htmls/home.html')
            }else{
                alert('Email ou senha incorretos')
                user.logado = false;
            }
            return user
        });

        localStorage.setItem('usuarios',JSON.stringify(usuariosAtualizados));
    }
}