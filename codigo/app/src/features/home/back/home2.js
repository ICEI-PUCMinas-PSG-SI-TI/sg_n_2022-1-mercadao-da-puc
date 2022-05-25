let labelCadastre = document.getElementById('cadastre-se')
let labelNomeLogado = document.getElementById('nome_user')

function verificarLogado(){
    if(localStorage.getItem('usuarios') == null){
        alert('Usuário nao registrado ')
    }else{
        var usuarios = JSON.parse(localStorage.getItem('usuarios'))
        usuarios.forEach(user => {
            console.log(user.logado)
            if(user.logado == true) {
                labelCadastre.style.display = "none"
                labelNomeLogado.innerHTML = user.nome
                console.log(user.nome)
            }

        })
    }
}
