let labelCadastre = document.getElementById('cadastre-se')
let labelNomeLogado = document.getElementById('nome_user')
var isLogado = false

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
let nomePerfil = document.getElementById('nomePerfil')
let btnDesloga = document.getElementById('btnDeslogar')
let nome = document.getElementById('nome')
let email = document.getElementById('email')
let celular = document.getElementById('numero')
let pix = document.getElementById('pix')
let descricao = document.getElementById('descricao')
let unidade = document.getElementById('sel1')
let salvarMudanca = document.getElementById('btnChange')
let unidadeValor
let usuarioAtual
let usuario = JSON.parse(localStorage.getItem('usuarios'))
for (let i = 0; i < usuario.length; i++) {
  if (usuario[i].logado) {
    usuarioAtual = usuario[i]
  }
}
atualizaDadosPerfil()
function atualizaDadosPerfil() {
  if (usuarioAtual.unidade == 'São Gabriel') {
    unidadeValor = 2
  } else if (usuarioAtual.unidade == 'Coração Eucaristico') {
    unidadeValor = 1
  } else if (usuarioAtual.unidade == 'Praça da Liberdade') {
    unidadeValor = 3
  } else if (usuarioAtual.unidade == 'Barreiro') {
    unidadeValor = 4
  } else if (usuarioAtual.unidade == 'Outro') {
    unidadeValor = 5
  }

  nomePerfil.innerText = usuarioAtual.nome
  nome.value = usuarioAtual.nome
  email.value = usuarioAtual.email
  celular.value = usuarioAtual.number
  pix.value = usuarioAtual.pix
  descricao.innerText = usuarioAtual.descricao
  unidade.value = unidadeValor
}

function deslogar() {
  isLogado = false
  labelNomeLogado.style.display = 'none'
  labelCadastre.style.display = 'block'
  labelCadastre.innerHTML = '<span> Cadastre-se</span>'
  usuarioAtual.logado = false
  console.log(usuarioAtual)
  //window.location.href = '../../../home/view/htmls/home.html'
}
btnDesloga.addEventListener('click', deslogar)

verificarLogado()
