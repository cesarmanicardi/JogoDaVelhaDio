var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName("quadrado");

mudarJogador("X");

function quadradoEscolhido(id){

    if(vencedor !== null){
        return;
    }
    
    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== "-"){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = "green";

    if(jogador === "X"){
        jogador = "O"
    }else{
        jogador = "X"
    }

    mudarJogador(jogador);
    checaVencedor();
};

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    let quadrado1 = document.getElementById(1);
    let quadrado2 = document.getElementById(2);
    let quadrado3 = document.getElementById(3);
    let quadrado4 = document.getElementById(4);
    let quadrado5 = document.getElementById(5);
    let quadrado6 = document.getElementById(6);
    let quadrado7 = document.getElementById(7);
    let quadrado8 = document.getElementById(8);
    let quadrado9 = document.getElementById(9);
    if(checaSequencia(quadrado1, quadrado2, quadrado3)){
        mudaCor(quadrado1, quadrado2, quadrado3);
        mudaVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado4, quadrado5, quadrado6)){
        mudaCor(quadrado4, quadrado5, quadrado6);
        mudaVencedor(quadrado4);
        return;
    }
    if(checaSequencia(quadrado7, quadrado8, quadrado9)){
        mudaCor(quadrado7, quadrado8, quadrado9);
        mudaVencedor(quadrado7);
        return;
    }
    if(checaSequencia(quadrado1, quadrado4, quadrado7)){
        mudaCor(quadrado1, quadrado4, quadrado7);
        mudaVencedor(quadrado4);
        return;
    }
    if(checaSequencia(quadrado2, quadrado5, quadrado8)){
        mudaCor(quadrado2, quadrado5, quadrado8);
        mudaVencedor(quadrado2);
        return;
    }
    if(checaSequencia(quadrado3, quadrado6, quadrado9)){
        mudaCor(quadrado3, quadrado6, quadrado9);
        mudaVencedor(quadrado6);
        return;
    }
    if(checaSequencia(quadrado1, quadrado5, quadrado9)){
        mudaCor(quadrado1, quadrado5, quadrado9);
        mudaVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado7, quadrado5, quadrado3)){
        mudaCor(quadrado7, quadrado5, quadrado3);
        mudaVencedor(quadrado7);
        return;
    }
}

function mudaCor(qd1, qd2, qd3){
    qd1.style.backgroundColor = "#05f005";
    qd2.style.backgroundColor = "#05f005";
    qd3.style.backgroundColor = "#05f005";
}

function mudaVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function checaSequencia(qd1, qd2, qd3){
    let igual = false;
    if(qd1.innerHTML !== "-" && qd1.innerHTML === qd2.innerHTML && qd2.innerHTML === qd3.innerHTML){
        igual = true;
    }

    return igual;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = "";
    
    for(let i = 1; i <= 9; i++){
        let quadrado = document.getElementById(i);
        quadrado.style.background = "#a6a6a6";
        quadrado.style.color = "#a6a6a6";
        quadrado.innerHTML = "-";
    }
    mudarJogador("X");
}


//#05f005