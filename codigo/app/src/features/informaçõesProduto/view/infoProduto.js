

let nomeProduto = document.getElementById('nomeProduto')
let precoProduto = document.getElementById('precoProduto')
let categoriaProduto = document.getElementById('categoriaProduto')
let entregaProduto = document.getElementById('entregaProduto')
let estadoProduto = document.getElementById('estadoProduto')
//let marcaProduto = document.getElementById('nomeProduto')
let quantidadeProduto = document.getElementById('quantidadeProduto')



let produto = JSON.parse(localStorage.getItem('produtos'))
let nomeProduto1 = produto[1].descricao
let precoProduto1 = produto[1].preco
let categoriaProduto1 = produto[1].categoria
let entregaProduto1 = produto[1].localEntrega
let estadoProduto1 = produto[1].estadoDoProduto
 //let marcaProduto = produto.marca
let quatidadeProduto1 = produto[1].quantidadeDoProduto

nomeProduto.innerText = nomeProduto1
precoProduto.innerText = precoProduto1 + " R$"
categoriaProduto.innerText = categoriaProduto1
entregaProduto.innerText = entregaProduto1
estadoProduto.innerText = estadoProduto1

// TEMOS QUE ACHAR UM JEITO DE ATUALIZAR A QUANTIDADE RESTANTE
quantidadeProduto.innerText = quantidadeDoProduto1 + " restantes" 
