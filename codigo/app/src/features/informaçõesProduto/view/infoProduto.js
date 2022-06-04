let nomeProduto = document.getElementById('nomeProduto')
let precoProduto = document.getElementById('precoProduto')
let categoriaProduto = document.getElementById('categoriaProduto')
let entregaProduto = document.getElementById('entregaProduto')
let estadoProduto = document.getElementById('estadoProduto')
//let marcaProduto = document.getElementById('nomeProduto')
let quantidadeProduto = document.getElementById('quantidadeProduto')

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
        let nomeProduto1 = produto.descricao
        let precoProduto1 = produto.preco
        let categoriaProduto1 = produto.categoria
        let entregaProduto1 = produto.localEntrega
        let estadoProduto1 = produto.estadoDoProduto
        let quatidadeProduto1 = produto.quantidadeDoProduto

        nomeProduto.innerText = nomeProduto1
        precoProduto.innerText = precoProduto1 + ' R$'
        categoriaProduto.innerText = categoriaProduto1
        entregaProduto.innerText = entregaProduto1
        estadoProduto.innerText = estadoProduto1
        quantidadeProduto.innerText = quantidadeDoProduto1 + ' restantes'
      }
    })
  })
}
