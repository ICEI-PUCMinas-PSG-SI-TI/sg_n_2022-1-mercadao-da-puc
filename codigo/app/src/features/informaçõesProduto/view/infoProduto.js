let nomeProduto = document.getElementById('nomeProduto')
let precoProduto = document.getElementById('precoProduto')
let categoriaProduto = document.getElementById('categoriaProduto')
let entregaProduto = document.getElementById('entregaProduto')
let estadoProduto = document.getElementById('estadoProduto')
//let marcaProduto = document.getElementById('nomeProduto')
let quantidadeProduto = document.getElementById('quantidadeProduto')



let produto = JSON.parse(localStorage.getItem('produtos'))
let nomeProduto1 = produto.descricao
let precoProduto1 = produto.preco
let categoriaProduto1 = produto.categoria
let entregaProduto1 = produto.localEntrega
let estadoProduto1 = produto.estadoDoProduto
 //let marcaProduto = produto.marca
let quatidadeProduto1 = produto.quantidadeDoProduto

nomeProduto.innerText = nomeProduto1
