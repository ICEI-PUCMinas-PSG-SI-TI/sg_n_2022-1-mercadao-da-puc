let labelCadastre = document.getElementById('cadastre-se')
let labelNomeLogado = document.getElementById('nome_user')

function verificarLogado(){
    if(localStorage.getItem('usuarios') == null){
        alert('Usuário nao registrado ')
    }else{
        var usuarios = JSON.parse(localStorage.getItem('usuarios'))
        usuarios.forEach(user => {
            console.log(user.logado)
            if(user.logado == true) {
                labelCadastre.style.display = "none"
                labelNomeLogado.innerHTML = user.nome
                console.log(user.nome)
            }

        })
    }
}

window.addEventListener("load", function(event) {
    var usuarios = JSON.parse(localStorage.getItem('usuarios'))
    usuarios.forEach(user => {
        user.produtos.forEach(produto => {
            let telaProduto = document.getElementById('caixaProdutos1')
            telaProduto.innerHTML +=  `<div class="col-lg-3 col-md-6 col-sm-12 productCol"> <img src="../../res/img/notebook.jpeg" alt="" /> <p>${produto.descricao}</p> <p><strong>R$${produto.preco}</strong></p></div>`
        })
        
    })
  });