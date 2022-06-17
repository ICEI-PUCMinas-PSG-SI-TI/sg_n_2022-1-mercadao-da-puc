let heartFav = document.getElementById('heartFav')
let addFav = document.getElementById('addFav')
let favoritos = document.getElementById('favoritos')
let isFav = false
let usuario = JSON.parse(localStorage.getItem('usuarios'))

addFav.addEventListener('click', () => {
  if (isFav == false) {
    addFav.innerText = 'Remover dos favoritos'
    heartFav.classList.remove('fa-regular')
    heartFav.classList.add('fa-solid')
    for (let i = 0; i < usuario.length; i++) {
      if (usuario[i].logado) {
        usuario[i].produtosFavoritos[usuario[i].produtosFavoritos.length] =
          localStorage.getItem('idProduto')
      }
    }
    localStorage.setItem('usuarios', JSON.stringify(usuario))
    isFav = true
  } else {
    addFav.innerText = 'Adicionar aos favoritos'
    heartFav.classList.remove('fa-solid')
    heartFav.classList.add('fa-regular')
    for (let i = 0; i < usuario.length; i++) {
      let produtoIdPagina = localStorage.getItem('idProduto')
      if (usuario[i].logado) {
        for (let j = 0; j < usuario[i].produtosFavoritos[j].length; j++) {
          if (usuario[i].produtosFavoritos[j] == produtoIdPagina) {
            console.log(j)
            console.log(usuario[i].produtosFavoritos)
            usuario[i].produtosFavoritos[j].splice(j, 1, 'exfav')
          }
        }
      }
    }
    localStorage.setItem('usuarios', JSON.stringify(usuario))
    isFav = false
  }
})
heartFav.addEventListener('click', () => {
  if (isFav == false) {
    addFav.innerText = 'Remover dos favoritos'
    heartFav.classList.remove('fa-regular')
    heartFav.classList.add('fa-solid')
    for (let i = 0; i < usuario.length; i++) {
      if (usuario[i].logado) {
        usuario[i].produtosFavoritos[usuario[i].produtosFavoritos.length] =
          localStorage.getItem('idProduto')
      }
    }
    localStorage.setItem('usuarios', JSON.stringify(usuario))
    isFav = true
  } else {
    addFav.innerText = 'Adicionar aos favoritos'
    heartFav.classList.remove('fa-solid')
    heartFav.classList.add('fa-regular')
    for (let i = 0; i < usuario.length; i++) {
      let produtoIdPagina = localStorage.getItem('idProduto')
      if (usuario[i].logado) {
        for (let j = 0; j < usuario[i].produtosFavoritos[j].length; j++) {
          if (usuario[i].produtosFavoritos[j] == produtoIdPagina) {
            usuario[i].produtosFavoritos[j].splice(produtoIdPagina, 1)
          }
        }
      }
    }
    localStorage.setItem('usuarios', JSON.stringify(usuario))
    isFav = false
  }
})
