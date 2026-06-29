
//FUNÇAO PRA LOGO VOLTAR PRA SECTION PRINCIPAL

const logoHome = document.getElementById("logoHome");

logoHome.addEventListener("click", function(event){

    event.preventDefault();      //Ele permite com que mude só a main fazendo com que o URL não mude, assim n criando varias páginas

    abrirTela("tela-principal");  //aqui ela só executa a funcionalidade para puxar a section da tela principal

});

//Imagem de Perfil e atualização da imagem

const avatar = document.getElementById("avatarPerfil");               //const indica que avatar esta recebendo o que esta em avatarPerfil
const SelecionarImagem = document.getElementById("SelecionarImagem");

avatar.addEventListener("click", function(){

    SelecionarImagem.click();

});

SelecionarImagem.addEventListener("change", function(){

    const arquivo = SelecionarImagem.files[0];       //Pega a foto escolhida

    if(arquivo){

        avatar.src = URL.createObjectURL(arquivo);  //Troca a imagem do avatar do perfil 

    }

});

//Botao Configurações e Modo escuro

const botao_config = document.getElementById("botao_config");
const drawerConfig = document.getElementById("drawerConfig");
const botao_voltar = document.getElementById("botao_voltar");

botao_config.addEventListener("click", function(){
    drawerConfig.classList.toggle("aberto");
});                
 //como ele funciona como um interruptor ele vai fechar e abrir com o aberto 
botao_voltar.addEventListener("click", function(){
    drawerConfig.classList.remove("aberto");
});

const escolhaTema = document.getElementById("escolhaTema");

escolhaTema.addEventListener("change", function(){ //roda quando o bota muda de ligado/desligado

    document.body.classList.toggle("tema-escuro");  //add ou remove class tema-escuro

});

// Botões dos dropdowns do menu

const botaoEnsinoBasico = document.getElementById("botaoEnsinoBasico");
const opcoesEnsinoBasico = document.querySelector(".opcoes-ebasico");

const botaoAnosIniciais = document.getElementById("botaoAnosIniciais");
const opcoesAnosIniciais = document.querySelector(".opcoes-anosini");

botaoEnsinoBasico.addEventListener("click", function(){

    opcoesEnsinoBasico.classList.toggle("aberto");
    opcoesAnosIniciais.classList.remove("aberto");

});

botaoAnosIniciais.addEventListener("click", function(){

    opcoesAnosIniciais.classList.toggle("aberto");
    opcoesEnsinoBasico.classList.remove("aberto");

});

//Função pra chamar a tela Crianças Pequenas

function abrirTela(idTela){

    const telas = document.querySelectorAll(".tela");

    telas.forEach(function(tela){
        tela.classList.remove("ativa");
    });

    document.getElementById(idTela).classList.add("ativa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const botaoCriancas = document.getElementById("botaoCriancas");

botaoCriancas.addEventListener("click", function(){
    abrirTela("tela-criancas");
    opcoesEnsinoBasico.classList.remove("aberto");
});


//Função pra chamar a tela 1° Ano

function abrirTela(idTela){

    const telas = document.querySelectorAll(".tela");

    telas.forEach(function(tela){
        tela.classList.remove("ativa");
    });

    document.getElementById(idTela).classList.add("ativa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const botao1ano = document.getElementById("botao1ano");

botao1ano.addEventListener("click", function(){
    abrirTela("tela-1ano");
    opcoes-anosini.classList.remove("aberto");
});




//Função pra chamar a tela 2° Ano

function abrirTela(idTela){

    const telas = document.querySelectorAll(".tela");

    telas.forEach(function(tela){
        tela.classList.remove("ativa");
    });

    document.getElementById(idTela).classList.add("ativa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const botao2ano = document.getElementById("botao2ano");

botao2ano.addEventListener("click", function(){
    abrirTela("tela-2ano");
    opcoes-anosini.classList.remove("aberto");
});



//Função pra chamar a tela 3° Ano

function abrirTela(idTela){

    const telas = document.querySelectorAll(".tela");

    telas.forEach(function(tela){
        tela.classList.remove("ativa");
    });

    document.getElementById(idTela).classList.add("ativa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const botao3ano = document.getElementById("botao3ano");

botao3ano.addEventListener("click", function(){
    abrirTela("tela-3ano");
    opcoes-anosini.classList.remove("aberto");
});




//FUNÇÃO DO MOLDE DO CARD PÓS CLICK DO USUARIO 

const moldeJogo = document.getElementById("moldeJogo");

const fecharMolde = document.getElementById("fecharMolde");

const moldeImagem = document.getElementById("moldeImagem");

const moldeTitulo = document.getElementById("moldeTitulo");

const moldeBncc = document.getElementById("moldeBncc");

const moldeObjetivo = document.getElementById("moldeObjetivo");

const moldeLink = document.getElementById("moldeLink");


function abrirMoldeJogo(titulo, imagem, bncc, objetivo, link){

    moldeTitulo.textContent = titulo;

    moldeImagem.src = imagem;

    moldeBncc.textContent = bncc;

    moldeObjetivo.textContent = objetivo;

    moldeLink.href = link;

    moldeJogo.classList.add("aberto");

}

function fecharMoldeJogo(){

    moldeJogo.classList.remove("aberto");

}

fecharMolde.addEventListener("click", fecharMoldeJogo);

moldeJogo.addEventListener("click", function(event){

    if(event.target === moldeJogo){

        fecharMoldeJogo();

    }

});