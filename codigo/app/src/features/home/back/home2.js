let labelCadastre = document.getElementById('cadastre-se')
let labelNomeLogado = document.getElementById('nome_user')
var isLogado = false
const btnMobile = document.getElementById('btnMobile')
btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

function toggleMenu(event) {
  if (event.type === 'touchstart') {
    event.preventDefault()
  }
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
  const active = nav.classList.contains('active')
  event.currentTarget.setAttribute('aria-expanded', active)
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar menu')
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir menu')
  }
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
function cadastrarProduto() {
  if (isLogado == false) {
    alert('Não é possível cadastrar produto sem estar logado.')
  } else {
    window.location.replace(
      '../../../cadastroProduto/htmls/cadastroProduto.html'
    )
  }
}

window.addEventListener('load', function (event) {
  var usuarios = JSON.parse(localStorage.getItem('usuarios'))
  usuarios.forEach(user => {
    user.produtos.forEach(produto => {
      // var divNova = document.createElement(`caixaProduto${cont}`)
      let telaProduto = document.getElementById('caixaProdutos1')
      telaProduto.innerHTML += `<div onclick="cliqueProduto(${produto.id})" class="col-lg-3 col-md-6 col-sm-12 productCol" id="${produto.id}"> <img src="../../res/img/notebook.jpeg" alt="" /> <p>${produto.nome}</p> <p><strong>R$${produto.preco}</strong></p></div>`
    })
  })
})
function cliqueProduto(idProduto) {
  localStorage.setItem('idProduto', JSON.stringify(idProduto))
  window.location.replace('../../../informaçõesProduto/view/htmls/info.html')
}
