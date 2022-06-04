let heartFav = document.getElementById('heartFav')
let addFav = document.getElementById('addFav')
let favoritos = document.getElementById('favoritos')
let isFav = false

addFav.addEventListener('click', () => {
  if (isFav == false) {
    addFav.innerText = 'Remover dos favoritos'
    isFav = true
  } else {
    addFav.innerText = 'Adicionar aos favoritos'
    isFav = false
  }
})
heartFav.addEventListener('click', () => {
  if (isFav == false) {
    addFav.innerText = 'Remover dos favoritos'
    isFav = true
  } else {
    addFav.innerText = 'Adicionar aos favoritos'
    isFav = false
  }
})
