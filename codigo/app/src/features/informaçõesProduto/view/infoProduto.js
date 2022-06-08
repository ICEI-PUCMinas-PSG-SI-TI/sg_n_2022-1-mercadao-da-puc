let nomeProduto = document.getElementById('nomeProduto')
let precoProduto = document.getElementById('precoProduto')
let categoriaProduto = document.getElementById('categoriaProduto')
let entregaProduto = document.getElementById('entregaProduto')
let estadoProduto = document.getElementById('estadoProduto')
//let marcaProduto = document.getElementById('nomeProduto')
let quantidadeProduto = document.getElementById('quantidadeProduto')
let descricaoProduto = document.getElementById('descricao')

let labelCadastre = document.getElementById('cadastre-se')
let labelNomeLogado = document.getElementById('nome_user')
var isLogado = false

function iniciarTela() {
  verificarLogado()
  carregarInformacoes()
}

function verificarLogado() {
  if (localStorage.getItem('usuarios') == null) {
    alert('Usuário nao registrado ')
  } else {
    var usuarios = JSON.parse(localStorage.getItem('usuarios'))
    usuarios.forEach(user => {
      if (user.logado == true) {
        isLogado = true
        labelCadastre.style.display = 'none'
        labelNomeLogado.innerHTML = user.nome
      }
    })
  }
}

function carregarInformacoes() {
  let idProduto = JSON.parse(localStorage.getItem('idProduto'))
  var usuarios = JSON.parse(localStorage.getItem('usuarios'))
  usuarios.forEach(user => {
    user.produtos.forEach(produto => {
      if (produto.id == idProduto) {
        // dados usuario
        let nomeUsuario = user.nome
        let emailUsuario = user.email
        let pix = user.pix
        let unidadeUsuario = user.unidade
        //dados Produto
        let nomeProduto1 = produto.nome
        let precoProduto1 = produto.preco
        let categoriaProduto1 = produto.categoria
        let entregaProduto1 = produto.localEntrega
        let estadoProduto1 = produto.estadoDoProduto
        // let quantidadeProduto1 = produto.quantidadeDoProduto
        let descricaoProduto1 = produto.descricao
        //troca innerText users
        document.getElementById(
          'nomeUsuario'
        ).innerHTML = `<li class="list-group-item" id="nomeUsuario"><strong>Nome do usuario: </strong>${user.nome}</li>`
        document.getElementById(
          'emailUsuario'
        ).innerHTML = `<li class="list-group-item" id="emailUsuario"><strong>Email de contato do vendedor:</strong> ${user.email}</li>`
        document.getElementById(
          'pixUsuario'
        ).innerHTML = `<li class="list-group-item" id="pixUsuario"><strong>Pix do vendedor:</strong> ${user.pix}</li>`
        document.getElementById(
          'unidadeUsuario'
        ).innerHTML = `<li class="list-group-item" id="unidadeUsuario"><strong>Unidade de estudo:</strong> ${user.unidade}</li>`

        //troca innerText produto
        nomeProduto.innerText = nomeProduto1
        precoProduto.innerText = precoProduto1 + ' R$'
        categoriaProduto.innerText = categoriaProduto1
        entregaProduto.innerText = entregaProduto1
        estadoProduto.innerText = estadoProduto1
        // quantidadeProduto.innerText = quantidadeDoProduto1 + ' restantes'
        descricaoProduto.innerText = descricaoProduto1
      }
    })
  })
}
