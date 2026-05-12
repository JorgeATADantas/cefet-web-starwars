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


fetch("https://swapi.info/api/films")
.then((res) => res.json())
.then(filmes => {filmes.forEach(insereFilme)})
.catch((error) => console.error(error))


function insereFilme(filme){  
  // 1. Solicitamos ao document a criação de um elemento
  let filmeE1 = document.createElement('li');

  // 2. Configurando-lo (atributos, id, classes etc.)
  // Converter número para romano
  let romano = decimalParaRomano(filme.episode_id);

  // alinhar usando padEnd
  romano = romano.padEnd(4, ' ');

  // conteúdo
  filmeE1.innerHTML = `Episode ${romano} - ${filme.title}`;

  // 3. Inserção do elemento na árvore DOM
  let containerEl = document.querySelector('#filmes ul');
  containerEl.appendChild(filmeE1);
}

//Excluindo filmes existentes
let limparFilmesEl = document.querySelector('#filmes ul');
limparFilmesEl.innerHTML = '';

//Inserindo as tarefas na página
filmes.forEach(insereFilme);



