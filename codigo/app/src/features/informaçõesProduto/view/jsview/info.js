let heartFav = document.getElementById('heartFav')
let addFav = document.getElementById('addFav')
let favoritos = document.getElementById('favoritos')
let isFav = false

addFav.addEventListener('click', () => {
  if (isFav == false) {
    addFav.innerText = 'Remover dos favoritos'
    heartFav.classList.remove('fa-regular')
    heartFav.classList.add('fa-solid')
    isFav = true
  } else {
    addFav.innerText = 'Adicionar aos favoritos'
    heartFav.classList.remove('fa-solid')
    heartFav.classList.add('fa-regular')
    isFav = false
  }
})
heartFav.addEventListener('click', () => {
  if (isFav == false) {
    addFav.innerText = 'Remover dos favoritos'
    heartFav.classList.remove('fa-regular')
    heartFav.classList.add('fa-solid')
    isFav = true
  } else {
    addFav.innerText = 'Adicionar aos favoritos'
    heartFav.classList.remove('fa-solid')
    heartFav.classList.add('fa-regular')
    isFav = false
  }
})
