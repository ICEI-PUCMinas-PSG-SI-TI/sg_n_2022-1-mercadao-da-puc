let inputNome = document.getElementById("nome");
//let selectedUnidade = document.getElementById("sel1");
//Pesquisar como capturar um radio button
let inputNumber = document.getElementById("number");
let inputEmail = document.getElementById("email");
let inputEmailConfirmation = document.getElementById("emailConfirmation");
let inputSenha = document.getElementById("senha1");
let inputSenhaConfirmation = document.getElementById("senha2");
let inputPix = document.getElementById("pix");
let inputDescripition = document.getElementById("descricao");
let botaoSumbmit = document.getElementById("botao");


//preciso saber oque esta dando errado antes de tirar
function previnirEventoDeReload(evt){
    evt.preventDefault();
}

botaoSumbmit.addEventListener(
    'click', previnirEventoDeReload,false
);
function cliqueCadastro(){


    var nome = inputNome.value;
    var number = inputNumber.value;
    var email = inputEmail.value;
    var emailConfirmation = inputEmailConfirmation.value;
    var senha = inputSenha.value;
    var senhaConfirmation = inputSenhaConfirmation.value;
    var pix = inputPix.value;
    var description = inputDescripition.value;
    if(checkNome(nome) && checkNumber(number) && checkEmail(email,emailConfirmation) 
    && checkSenha(senha,senhaConfirmation) && checkDescription(description)) {
        //Criar conta é permitido
        let usuario = new Usuario(nome,senha,email,pix,description,number)
        salvar(usuario)

        alert('Criando conta com sucesso')
        //window.location.replace('../../../login/view/htmls/login.html')
    }
   
}

function checkNome(nome1) {
    if(nome1 == ''){
        alert('Voce deve informar um nome')
        return false
    }else{
        return true
    }

}
function Usuario(nomeCadastro,senhaCadastro,emailCadastro,pixCadastro,descricaoCadastro,numeroCadastro){
    this.nome = nomeCadastro;
    this.senha = senhaCadastro;
    this.email = emailCadastro;
    this.pix = () => (pixCadastro == '') ? 'pix nao foi informado':pixCadastro
    this.descricao = descricaoCadastro;
    this.number = numeroCadastro;
}

  /**
   * 
   * @param {Usuario} usuario 
   */
function salvar(usuario) {
    let usuarios = localStorage.getItem('usuarios')
    if(usuarios == null){
        usuarios = [];
        localStorage.setItem('usuarios',JSON.stringify(usuarios));
    }
    usuarios = JSON.parse(localStorage.getItem('usuarios'))
    let usuarioAtual = {nome:usuario.nome, senha:usuario.senha, email: usuario.email, pix:usuario.pix()
        ,descricao: usuario.descricao, number:usuario.number }
    //console.log(`usuario ${usuarioAtual.senha}`)
    usuarios.push(usuarioAtual)
    localStorage.setItem('usuarios',JSON.stringify(usuarios));
}



function checkSenha(senha1,senha2){
    if(senha1 == ''){
        alert ("Coloque uma senha");
        return false
    }else if(senha2 == ''){
        alert ("Confirme a senha");
        return false
    }else if (!(senha1 == senha2)){
        alert ("As senhas informadas nao correspomdem");
        return false
    }else{
        return true
    }

}
function checkEmail(email1,email2){
    if(email1 == ''){
        alert('Informe o email')
        return false
    }else if(email2 == ''){
        alert('Confirme o email')
        return false
    }else if(!(email1 == email2)){
        alert('Os emails informados nao correspondem')
        return false
    }else{
        return true
    }
}
function checkNumber(number1){
    if(number1 == ''){
        alert('informe o numero de contato')
        return false 
    }else{
        return true
    }

}
function checkDescription(description1){
    if(description1 == ''){
        alert('Uma pequena descrição é obrigatoria para o cadastro de conta')
        return false
    }
    return true

}
