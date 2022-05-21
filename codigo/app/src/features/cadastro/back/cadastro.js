let inputNome = document.getElementById("nome");
//let selectedUnidade = document.getElementById("sel1");
//Pesquisar como capturar um radio button
let inputNumber = document.getElementById("number");
let inputEmail = document.getElementById("email");
let inputEmailConfirmation = document.getElementById("email");
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
    // console.log(nome)

    var number = inputNumber.value;
    // console.log(number)

    var email = inputEmail.value;
    // console.log(email)

    var emailConfirmation = inputEmailConfirmation.value;
    // console.log(emailConfirmation)

    var senha = inputSenha.value;
    // console.log(senha)

    var senhaConfirmation = inputSenhaConfirmation.value;
    // console.log(senhaConfirmation)

    var pix = inputPix.value;
    // console.log(pix)

    var description = inputDescripition.value;
    // console.log(description)
    checkSenha(senha,senhaConfirmation);


    
}

function checkSenha(senha1,senha2){
    if(senha1 == ''){
        alert ("Coloque uma senha");
    }else if(senha2 == ''){
        alert ("Confirme a senha");
    }else if (!(senha1 == senha2)){
        alert ("As senhas nao batem");
    }

}














// Function to check Whether both passwords
            // is same or not.
            function checkPassword() {
                var pwd = document.getElementById('pwd').value;
                log(pwd);
                var pwd2 = document.getElementById('pwd2').value;
               

  
                // If password not entered
                if (pwd == ''){
                    alert ("Coloque uma senha");
                    return false;
                  }
                      
                // If confirm password not entered
                else if (pwd2 == ''){
                    alert ("Confirme a senha");
                    return false;
                }
                // If Not same return False.  
                
                
  
                // If same return True.
                else{
                    alert("Cadastro feito.Bem vindo ao Mercadão!")
                    return true;
                }
            }