"use strict";

const el = {
  styles: document.getElementById("style"),
  art: document.getElementById("img"),
  artist: document.getElementById("name"),
  figcaption: document.getElementById("title"),
  classicism: document.getElementById("class"),
  neoclassicism: document.getElementById("neoclass"),
  expressionism: document.getElementById("expression"),
  neoexpressionism: document.getElementById("neoexpress"),
  conceptual: document.getElementById("concept"),
  cubism: document.getElementById("cube"),
  futurism: document.getElementById("future"),
  construtivism: document.getElementById("construct"),
  dadaart: document.getElementById("dada"),
  digital: document.getElementById("digi"),
  impressionism: document.getElementById("impress"),
  popart: document.getElementById("pop"),
  romanticism: document.getElementById("roman"),
  streetart: document.getElementById("street"),
  surrealism: document.getElementById("surre"),
  symbolism: document.getElementById("symb"),
};

// Iterate through objects; Can use for later use
const stylerow = [
  {
    art: 'public\Images\Classicism\Caravaggio-Bacchus.jpg',
    artist: "Caravaggio",
    figcaption: "Bacchus",
  },

  {
    art: 'public\Images\Classicism\Paulus Potter, The Bull.jpg',
    artist: "Paulus Potter",
    figcaption: "The Bull",
  },
  /*
    {
        art: '',
        artist: "",
        piece: "",
    }
        */
];

function loopThroughArt() {
  let index = 0;
  setInterval(() => {
    if (index < stylerow.length) {
      el.art.innerText = stylerow[index].art;
      el.artist.innerText = stylerow[index].artist;
      el.piece.innertext = stylerow[index].piece;
      index++;
    } else {
      index = 0;
    }
  }, 3000);
}

setTimeout(loopThroughArt, 3000);
