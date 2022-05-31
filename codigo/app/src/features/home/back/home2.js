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

function listarProdutos() {
    
}
window.addEventListener("load", function(event) {
    // let telaProduto = document.createElement('div')
    // telaProduto.classList.add('col-lg-3','col-md-6','col-sm-12','productCol')
    // <div class="col-lg-3 col-md-6 col-sm-12 productCol">
    //       <img src="../../res/img/notebook.jpeg" alt="" />
    //       <p>Notebook ITAUTEC</p>
    //       <p><strong>R$500</strong></p>
    //     </div>

    

    // var usuarios = JSON.parse(localStorage.getItem('usuarios'))
    // var caixaProdutos = []
    // usuarios.forEach(user => {
    //     caixaProdutos.push(user.produtos)
        
    // })


    var caixaProdutos = JSON.parse(localStorage.getItem('produtos'))
    caixaProdutos.forEach(produto => {
        let telaProduto = document.getElementById('caixaProdutos1')
        telaProduto.innerHTML +=  `<div class="col-lg-3 col-md-6 col-sm-12 productCol"> <img src="../../res/img/notebook.jpeg" alt="" /> <p>${produto.descricao}</p> <p><strong>R$${produto.preco}</strong></p></div>`
    })
  });