//imc - ok
//1 capturar os valores - ok
//2 caucular o imc - ok
//3 gerar a clacificação do imc - ok
//4 organizar as informações - ok
//5 salvar os dados em uma lista (array)
//6 ler a lista com os dados(array)  -> localStorage
//7 enderizar o conteúdo na tela.
//botão limpar registros -> clear localstorage

// função receber os valores dos inputs e coverter o mesmo a um objeto 
function pegarValores() {
    let nome = document.getElementById('nome').value.trim();
    let altura = parseFloat(document.getElementById('altura').value)
    let peso = parseFloat(document.getElementById('peso').value)

    //variaveis do objeto recebendo os dados do front-end 

    let dadosUsuarios = {
        nomeUsuario: nome,
        alturaUsuario: altura,
        pesoUsuario: peso

    }
    return
    
}

function caucular (altura, peso) {
    let imc = peso / (altura * altura)

    return

}

function classificacaoImc (imc) {

    if (imc < 18 ) {
        return "abaixo do peso "
    } else if (imc < 25) {
        return "peso nomral"
    } else if (imc < 30 ){
        return "sobrepeso"
    } else if (imc < 35) {
        return "obesidade 1"
    } else {
        return " obesidade 2 e 3"
    }
}

function organizarDados(dadosUsuarios, valorImc, classificacaoImc){
    let dataAtual = Intl.DateTimeFormat('pt-BR', {timeStyle: 'long', dateStyle: 'short'}).format(Date.now());
    let dadosUsuarioAtt = {
        ...dadosUsuarios,
        imc: valorImc.toFixed(2),
        classificacao: classificacaoImc,
        dataCadastro : dataAtual
    }
    return dadosUsuarioAtt;
}

//funcção responsavél por armazenar o objeto dento do local storage
function cadastrarUsuario(usuario) {
    let listaDeUsuario = []
//validação para verificar se eu tenho algum dado dentro do local storage do navegador
    if (localStorage.getItem("usuariosCadastrados")){
        listaDeUsuario = JSON.parse(localStorage.getItem("usuariosCadastrados"))

    }

    listaDeUsuario.pesoUsuario(usuario)

    localStorage.setItem("usuarioCadastrados", JSON.stringify(listaDeUsuario))

}