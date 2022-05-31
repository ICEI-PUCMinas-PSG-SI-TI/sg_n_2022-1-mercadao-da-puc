var files = document.querySelector('input[name="files"]');
  
  files.addEventListener("change", function(file){
    var input = file.target;
    
    var reader = new FileReader();
      
    reader.onload = function(){
        var dataURL = reader.result;
        var output = document.getElementById('output');
        output.src = dataURL;
      };
  
      reader.readAsDataURL(input.files[0]);
  });

  function atualizouUnidade() {
    let select1 = document.querySelector('#campui');
    let optionValue1 = select1.options[select1.selectedIndex];
    return optionValue1.value;
  }

  function atualizouQuantidade() {
    let select2 = document.querySelector('#sel1');
    let optionValue2 = select2.options[select2.selectedIndex];
    return optionValue2.text;
  } 

  let salvar = document.getElementById("btnAdd");

  salvar.addEventListener("click", function() {
    let usuarios = localStorage.getItem('usuarios')

      let produto = {
            descricao: document.getElementById('descricao').value,
            preco: document.getElementById('preco').value,
            categoria: document.querySelector('input[name="optCheck"]:checked').value,
            localEntrega: atualizouUnidade(),
            estadoDoProduto:  document.querySelector('input[name="optradio"]:checked').value,
            marca: document.getElementById('marca').value,
            quantidadeDoProduto: atualizouQuantidade(),
          }

          if (localStorage.getItem('produtos') == null) {
            localStorage.setItem('produtos', []);
            var caixaProdutos = [];
            caixaProdutos[caixaProdutos.length] = produto;
            console.log(JSON.stringify(caixaProdutos));
            localStorage.setItem('produtos', JSON.stringify(caixaProdutos));
          }else {
            var caixaProdutos = JSON.parse(localStorage.getItem('produtos'));
            caixaProdutos[caixaProdutos.length] = produto;
            localStorage.setItem('produtos', JSON.stringify(caixaProdutos));
            // console.log(localStorage.getItem('produtos').produtos);
            // let caixaProdutos = JSON.parse(localStorage.getItem('produtos'));
            // console.log(caixaProdutos);
          }
  });
  
  function clean() {
    localStorage.clear();
  }