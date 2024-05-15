let button, quebraLinha, jogada = 1
let tabuleiro = new Array(3)
for(let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(3)
}

for(let i = 0; i < tabuleiro.length; i++){
    quebraLinha = document.createElement('br')
    document.body.append(quebraLinha)
    for(let j = 0; j < tabuleiro.length; j++){
    button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.setAttribute('id', 'bt' + i + '' + j)
    button.setAttribute('class', 'btjogo' + i)
    button.setAttribute('onclick', 'marca(' + i + ',' + j + ')')
    button.append(document.createTextNode(''))
    document.body.append(button)
}
}

function marca(linha, coluna){
    marcarCasa('bt' + linha + '' + coluna)
}
function marcarCasa(nomeButton){
    if(jogada % 2 == 0){
        document.getElementById(nomeButton).innerText = "O"
    }else{
        document.getElementById(nomeButton).innerText = "X"
}
document.getElementById(nomeButton).disabled = true
jogada++
}