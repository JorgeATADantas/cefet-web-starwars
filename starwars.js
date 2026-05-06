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


const API_ENDPOINT = 'https://swapi.info/api'
