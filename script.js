// alert("Meu JavaScript está funcionando!");

// Selecionando o título (você já fez isso)
let titulo = document.getElementById('titulo-principal');


// MODIFICANDO o texto dele
// titulo.textContent = "Título Alterado pelo JS!";

// Selecionando o parágrafo (você já fez isso)
let paragrafo = document.querySelector('.paragrafo');

// MODIFICANDO a cor do texto dele
paragrafo.style.color = 'blue';
paragrafo.style.fontSize = '20px'; // Aumentando a fonte
paragrafo.style.fontWeight = 'bold'; // Deixando o texto em negrito

let botaoMagico = document.getElementById('botao-magico');

botaoMagico.addEventListener('click', function() {
    // Mudando o texto do botão quando clicado
    titulo.textContent = "O poder do evento!";
    console.log("Fui clicado!");
    
    // alert("A mágica do evento aconteceu!");
})

const botoesNumeros = document.querySelectorAll('.numero');

const visor = document.querySelector('.visor');

botoesNumeros.forEach(botao => {

    botao.addEventListener('click', function() {


        const numeroClicado = botao.textContent;
        visor.textContent += numeroClicado; // Adiciona o número ao visor


        console.log(`Cliquei no botão ${numeroClicado}!`);
    });
});