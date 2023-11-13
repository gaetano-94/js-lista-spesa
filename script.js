'use strict';

const ulLista = document.getElementById('listaSpesa');

// ARRAY CON GLI ELEMENTI DELLA SPESA
const elementiLista = [
  'Pane',
  'Latte',
  'Pasta',
  'Uova',
  'Burro',
  'Farina',
  'Riso',
  'Cereali',
  'Zucchero',
  'Caffe',
  'Miele',
];

// indice del ciclo
let i = 0;

//creo un lista con while

while (i < elementiLista.length) {
  let liLista = document.createElement('li');

  //collegare la mia array all'elemento li
  liLista.innerText = elementiLista[i];

  //aggiungere li al DOM
  ulLista.appendChild(liLista);
  i++;
}
