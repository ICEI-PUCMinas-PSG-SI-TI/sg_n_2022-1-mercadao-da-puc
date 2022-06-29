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

function filtroProdutos(paramCategoria) {
  document.querySelector('.recentes').innerHTML = paramCategoria
  if (paramCategoria == 'Roupas') {
    document.getElementById('imgCarousel1').setAttribute('src','../../res/img/FiltroRoupa.jpg')
    document.getElementById('imgCarousel2').setAttribute('src','../../res/img/FiltroRoupa.jpg')
    document.getElementById('imgCarousel3').setAttribute('src','../../res/img/FiltroRoupa.jpg')
  }
  if (paramCategoria == 'Eletronicos') {
    document.getElementById('imgCarousel1').setAttribute('src','../../res/img/FiltroEletronico.jpg')
    document.getElementById('imgCarousel2').setAttribute('src','../../res/img/FiltroEletronico.jpg')
    document.getElementById('imgCarousel3').setAttribute('src','../../res/img/FiltroEletronico.jpg')
  }
  if (paramCategoria == 'Acessorios') {
    document.getElementById('imgCarousel1').setAttribute('src','../../res/img/FiltroAcessorio.jpg')
    document.getElementById('imgCarousel2').setAttribute('src','../../res/img/FiltroAcessorio.jpg')
    document.getElementById('imgCarousel3').setAttribute('src','../../res/img/FiltroAcessorio.jpg')
  }
  if (paramCategoria == 'Livros') {
    document.getElementById('imgCarousel1').setAttribute('src','../../res/img/FiltroLivro.jpg')
    document.getElementById('imgCarousel2').setAttribute('src','../../res/img/FiltroLivro.jpg')
    document.getElementById('imgCarousel3').setAttribute('src','../../res/img/FiltroLivro.jpg')
  }
  if (paramCategoria == 'Esportes') {
    document.getElementById('imgCarousel1').setAttribute('src','../../res/img/FiltroEsporte.jpg')
    document.getElementById('imgCarousel2').setAttribute('src','../../res/img/FiltroEsporte.jpg')
    document.getElementById('imgCarousel3').setAttribute('src','../../res/img/FiltroEsporte.jpg')
  }
  if (paramCategoria == 'Serviços') {
    document.getElementById('imgCarousel1').setAttribute('src','../../res/img/FiltroServico.jpg')
    document.getElementById('imgCarousel2').setAttribute('src','../../res/img/FiltroServico.jpg')
    document.getElementById('imgCarousel3').setAttribute('src','../../res/img/FiltroServico.jpg')
  }
  let texto = ''
  let telaProduto = document.getElementById('caixaProdutos1')
  var usuarios = JSON.parse(localStorage.getItem('usuarios'))
  usuarios.forEach(user => {
    let filterProdutos = []
    filterProdutos = user.produtos.filter(produto => produto.categoria == paramCategoria)
    // var divNova = document.createElement(`caixaProduto${cont}`)
    console.log(paramCategoria);
    filterProdutos.forEach(p => {
      texto += `<div onclick="cliqueProduto(${p.id})" class="col-lg-3 col-md-6 col-sm-12 productCol" id="${p.id}"> <img src="../../res/img/notebook.jpeg" alt="" /> <p>${p.nome}</p> <p><strong>R$${p.preco}</strong></p></div>`
    })
  })
  telaProduto.innerHTML = texto;
}