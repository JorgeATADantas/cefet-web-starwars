// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.info/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

//Exercício 1: player de música
// (a) importe essa função play do music.js no seu arquivo starwars.js
// (b) invoque-a passando 2 argumentos referentes aos parâmetros especificados.
import {play} from './music.js'
let musica = {
  audioUrl:         'audio/tema-sw.mp3',
  coverImageUrl:    'imgs/logo.svg',
  title:            'Intro',
  artist:           'John Williams'
}

play(musica, document.body)

//Exercício 2: preencher lista de filmes
//Requisição AJAX

const API_ENDPOINT = 'https://swapi.info/api'

import { decimalParaRomano } from './roman.js';
import { friendlyFetch } from './friendly-fetch.js'; // Opcional 5: fetch com cache no localStorage


//fetch("https://swapi.info/api/films")
//.then((res) => res.json())
friendlyFetch("https://swapi.info/api/films") // Opcional 5: fetch com cache no localStorage
.then(filmes => {
  filmes.sort(function (a, b) {
    return a.episode_id - b.episode_id; // Opcional 4: filmes em ordem numérica
    });
  filmes.forEach(insereFilme);
})
.catch((error) => console.error(error))


function insereFilme(filme){  
  // 1. Solicitamos ao document a criação de um elemento
  let filmeE1 = document.createElement('li');

  // 2. Configurando-lo (atributos, id, classes etc.)
  // Convertendo número para romano
  let romano = decimalParaRomano(filme.episode_id);

  // Alinhando usando padEnd
  romano = romano.padEnd(4, ' ');

  // Conteúdo
  filmeE1.innerHTML = `Episode ${romano} - ${filme.title}`;

  // 3. Inserção do elemento na árvore DOM
  let containerE1 = document.querySelector('#filmes ul');
  containerE1.appendChild(filmeE1);

  //Exercício 3: mostrar a "intro" ao clicar (vide função abaixo)
  filmeE1.addEventListener('click', () => {insereIntroducao(filme)});
};

//Excluindo filmes existentes
let limparFilmeE1 = document.querySelector('#filmes ul');
limparFilmeE1.innerHTML = '';


//Exercício 3: mostrar a "intro" ao clicar
import { restartAnimation } from './restart-animation.js';

function insereIntroducao(filme){
  let introducaoEl = document.querySelector('pre.introducao');

  let romano = decimalParaRomano(filme.episode_id);

  // Definindo o texto
  introducaoEl.innerHTML = `Episode ${romano}\n${filme.title.toUpperCase()}\n\n${filme.opening_crawl}`;

  // Reiniciando a animação
  restartAnimation(introducaoEl);
};