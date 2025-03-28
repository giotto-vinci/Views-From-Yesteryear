"use strict";

const el = {
  styles: document.getElementById("style"),
  content: document.getElementById("art"),
  classicism: document.getElementById("class"),
  imgclass: document.getElementById("imgclass"),
  artist: document.getElementById("name"),
  piece: document.getElementById("title"),
  neoclassicism: document.getElementById("neoclass"),
  imgneoclass: document.getElementById("imgneoclass"),
  artist1: document.getElementById("name1"),
  piece1: document.getElementById("title1"),
  expressionism: document.getElementById("express"),
  imgexpress: document.getElementById("imgexpress"),
  artist2: document.getElementById("name2"),
  piece2: document.getElementById("title2"),
  neoexpressionism: document.getElementById("neoexpress"),
  imgneoexpress: document.getElementById("imgneoexpress"),
  artist3: document.getElementById("name3"),
  piece3: document.getElementById("title3"),
  conceptual: document.getElementById("concept"),
  imgconcept: document.getElementById("imgconcept"),
  artist4: document.getElementById("name4"),
  piece4: document.getElementById("title4"),
  cubism: document.getElementById("cube"),
  imgcube: document.getElementById("imgcube"),
  artist5: document.getElementById("name5"),
  piece5: document.getElementById("title5"),
  futurism: document.getElementById("future"),
  imgfuture: document.getElementById("imgfuture"),
  artist6: document.getElementById("name6"),
  piece6: document.getElementById("title6"),
  constructivism: document.getElementById("construct"),
  imgconstruct: document.getElementById("imgconstruct"),
  artist7: document.getElementById("name7"),
  piece7: document.getElementById("title7"),
  dadaart: document.getElementById("dada"),
  imgdada: document.getElementById("imgdada"),
  artist8: document.getElementById("name8"),
  piece8: document.getElementById("title8"),
  digital: document.getElementById("digi"),
  imgdigi: document.getElementById("imgdigi"),
  artist9: document.getElementById("name9"),
  piece9: document.getElementById("title9"),
  impressionism: document.getElementById("impress"),
  imgimpress: document.getElementById("imgimpress"),
  artist10: document.getElementById("name10"),
  piece10: document.getElementById("title10"),
  popart: document.getElementById("pop"),
  imgpop: document.getElementById("imgpop"),
  artist11: document.getElementById("name11"),
  piece11: document.getElementById("title11"),
  romanticism: document.getElementById("roman"),
  imgroman: document.getElementById("imgroman"),
  artist12: document.getElementById("name12"),
  piece12: document.getElementById("title12"),
  streetart: document.getElementById("street"),
  imgstreet: document.getElementById("imgstreet"),
  artist13: document.getElementById("name13"),
  piece13: document.getElementById("title13"),
  surrealism: document.getElementById("surre"),
  imgsurre: document.getElementById("imgsurre"),
  artist14: document.getElementById("name14"),
  piece14: document.getElementById("title14"),
  symbolism: document.getElementById("symb"),
  imgsymb: document.getElementById("imgsymb"),
  artist15: document.getElementById("name15"),
  piece15: document.getElementById("title15"),
};

/*
overlay.addEventListener('click', e => {
  console.log("Overlay");
})
*/
// Iterate through objects within a style;
const content = [
  {
    movement: "classicism",
    artwork: [
      {
        artist: "Caravaggio",
        imgclass: '/images/Classicism/Caravaggio-Bacchus.jpg',
        piece: "Bacchus",
      },

      {
        artist: "Paulus Potter",
        imgclass: '/images/Classicism/Paulus Potter, The Bull.jpg',
        piece: "The Bull",
      },

      {
        artist: "Paul Peter Rubens",
        imgclass:
          '/images/Classicism/Peter Paul Rubens, The Garden of Love.jpg',
        piece: "The Garden of Love",
      },
      {
        artist: "Simon Vouet Sophonisba",
        imgclass:
          '/images/Classicism/simon-vouet-sophonisba-receiving-the-poisoned-chalice.jpg',
        piece: "Receivieng the poisoned Chalice",
      },
      {
        artist: "Giovanni Battista Gaulli",
        imgclass:
          '/images/Classicism/Giovanni Battista Gaulli, Triumph of the Name of Jesus.jpg',
        piece: "Triumph in the Name of Jesus",
      },
      {
        artist: "Johannes Vermeer",
        imgclass:
          '/images/Classicism/Johannes Vermeer, Girl with a Pearl Earing.jpg',
        piece: "Girl with a Pearl Earing",
      },
      {
        artist: "Nicolas Poussin",
        imgclass:
          '/images/Classicism/Nicolas Poussin, Landscape with a Calm.jpg',
        piece: "Landscape with a Calm",
      },
      /*
    {
        artist: "",
        imgclass: '',
        piece: "",
    },
  */
    ],
  },

  {
    movement: "neoclassicism",
    artwork: [
      {
        artist1: "Claude Joseph Vernet",
        imgneoclass:
          '/images/Neo Classicism/Claude-Joseph-Vernet-the-bridge-and-the-castel-sant-angelo-in-rome.jpg',
        piece1: "The Bridge and the Castel Sant Angelo in Rome",
      },
      {
        artist1: "Pompeo Batoni",
        imgneoclass:
          '/images/Neo Classicism/pompeo-batoni-peace-and-justice.jpg',
        piece1: "Peace and Justice",
      },
      {
        artist1: "Benjamin West",
        imgneoclass:
          '/images/Neo Classicism/Benjamin-West-agrippina-and-her-children-mourning-over-the-ashes-of-germanicus-1773.jpg',
        piece1:
          "Agrippa and her Children Mourning over the ashes of Germanicus",
      },
      {
        artist1: "Gavin Hamilton William",
        imgneoclass:
          '/images/Neo Classicism/Gavin-Hamilton-william-hamilton-of-bangour-poet-1748.jpg!Large.jpg',
        piece1: "Hamilton of Bongour Poet",
      },
      {
        artist1: "James Barry",
        imgneoclass: '/images/Neo Classicism/James-Barry-the-education-of-achilles-1772.jpg',
        piece1: "The Education of Achilles",
      },
      {
        artist1: "John Singleton Copley",
        imgneoclass: '/images/Neo Classicism/John-Singleton-Copley-mary-and-elizabeth-royall.jpg',
        piece1: "Mary and Elizabeth Royall",
      },
      /*
    {
      artist1: "",
      imgneoclass: '',
      piece1: "",
    },
    */
    ],
  },

  {
    movement: "expressionism",
    artwork: [
      {
        artist2: "Edvard Munch",
        imgexpress:
          '/images/Expressionism/Edvard-Munch-the-scream-1893(2).jpg!Large.jpg',
        piece2: "The Scream",
      },
      {
        artist2: "James Ensor",
        imgexpress:
          '/images/Expressionism/James-Ensor-my-aunt-asleep-dreaming-of-monsters-1890.jpg',
        piece2: "My Aunt Asleep Dreaming of Monsters",
      },
      {
        artist2: "Amedeo Modigliani",
        imgexpress:
          '/images/Expressionism/amedeo-modigliani-portrait-of-the-brother-of-the-painter-micheli.jpg',
        piece2: "Portrait of the Brother of the Painter Micheli",
      },
      {
        artist2: "Kathe Kollwitz",
        imgexpress: '/images/Expressionism/Kathe-Kollwitz-Misery.jpg',
        piece2: "Misery",
      },
      /*
    {
      artist2: "",
      imgexpress: '',
      piece2: "",
    },
    */
    ],
  },
  {
    movement: "neoexpressionism",
    artwork: [
      {
        artist3: "David Park",
        imgneoexpress:
          '/images/Neo Expressionism/David Park-kids-on-bikes-1950.jpg',
        piece3: "Kids on Bikes",
      },
      {
        artist3: "Enzo Cucchi",
        imgneoexpress:
          '/images/Neo Expressionism/Enzo-Cucchi-la-luce-entra-chiena.jpg!Large.jpg',
        piece3: "La Luce Entra Chiena",
      },
      {
        artist3: "Graca Morais",
        imgneoexpress:
          '/images/Neo Expressionism/Graca-Morais-unknown-title-3.jpg',
        piece3: "Unknown title 3",
      },
      {
        artist3: "Julio Pomar",
        imgneoexpress:
          '/images/Neo Expressionism/Julio=Pomar-mario-soares--o-presidente.jpg',
        piece3: "Mario Soares O-Presidente",
      },
      /*
    {
      artist3: "",
      imgneoexpress: '',
      piece3: "",
    },
    */
    ],
  },

  {
    movement: "conceptual",
    artwork: [
      {
        artist4: "Cornelia Parker",
        imgconcept: '/images/Conceptual/Cornelia-Parker-heart-of-darkness.jpeg',
        piece4: "Heart of Darkness",
      },
      {
        artist4: "Damien Hirst",
        imgconcept: '/images/Conceptual/Damien-Hirst-virgin-mother-1.jpg',
        piece4: "Virgin Mother",
      },
      {
        artist4: "Erik Bulatov",
        imgconcept: '/images/Conceptual/Erik-Bulatov-sky.jpg',
        piece4: "Sky",
      },
      {
        artist4: "Gerard Fromanger",
        imgconcept:
          '/images/Conceptual/Gerard-Fromanger-my-painting-drips-1966.jpg',
        piece4: "My Painting Drips",
      },
      /*
    {
      artist4: "",
      imgconcept: '',
      piece4: "",
    },
    */
    ],
  },

  {
    movement: "cubism",
    artwork: [
      {
        artist5: "Georges Braque",
        imgcube: '/images/Cubism/Georges-Braque-big-nude-1908.jpg',
        piece5: "Big Nude",
      },
      {
        artist5: "Guilherme de Santa Rita",
        imgcube:
          '/images/Cubism/Guilherme-de-Santa-Rita-orfeu-nos-infernos-detail-1904.jpg',
        piece5: "Orfeu nos Infernos",
      },
      {
        artist5: "Maurice de Vlaminck",
        imgcube:
          '/images/Cubism/Maurice-de-Vlaminck-the-table-still-life-with-almonds-1907.jpg',
        piece5: "The Table Still Life with Almonds",
      },
      {
        artist5: "Georges Braque",
        imgcube: '/images/Cubism/Georges-Braque-fishing-boats.jpg',
        piece5: "Fishing Boots",
      },
      /*
    {
      artist5: "",
      imgcube: '',
      piece5: "",
    },
    */
    ],
  },

  {
    movement: "futurism",
    artwork: [
      {
        artist6: "Felix Del Marle",
        imgfuture:
          '/images/Futurism/Felix Del Marle-study-for-a-portrait-of-jean-dupr-1913.jpg!Large.jpg',
        piece6: "Study for a portrait of Jean Dupr",
      },
      {
        artist6: "Franz Marc",
        imgfuture:
          '/images/Futurism/Franz Marc-the-tower-of-blue-horses-1913.jpg!Large.jpg',
        piece6: "The Tower of Blue Horses",
      },
      {
        artist6: "Giacomo Balla",
        imgfuture:
          '/images/Futurism/Giacomo Balla-street-light-1909.jpg!Large.jpg',
        piece6: "Street Light",
      },
      {
        artist6: "Gino Severini",
        imgfuture:
          '/images/Futurism/Gino Severini-the-bear-dance-at-the-moulin-rouge-1913.jpg!Large.jpg',
        piece6: "The Bear Dance at the Moulin Rouge",
      },
      /*
    {
      artist6: "",
      imgfuture: '',
      piece6: "",
    },
    */
    ],
  },

  {
    movement: "constructivism",
    artwork: [
      {
        artist7: "David Bomberg",
        imgconstruct:
          '/images/Constructivism/David Bomberg-racehorses-1913.jpg',
        piece7: "Racehorses",
      },
      {
        artist7: "Erich Buchholz",
        imgconstruct:
          '/images/Constructivism/Erich Buchholz-relief-painting-1922.jpg',
        piece7: "Relief Painting",
      },
      {
        artist7: "Lajos Kassak",
        imgconstruct:
          '/images/Constructivism/Lajos Kassak-wooden-relief-1923.jpg!Large.jpg',
        piece7: "Wooden Relief",
      },
      {
        artist7: "Oskar Schlemmer",
        imgconstruct:
          '/images/Constructivism/Oskar Schlemmer-figurines-in-space-study-for-the-triadic-ballet-1924.jpg',
        piece7: "Figurines in Space Study for the Triadic Ballet",
      },
      /*
    {
      artist7: "",
      imgconstruct: '',
      piece7: "",
    },
    */
    ],
  },

  {
    movement: "dadaart",
    artwork: [
      {
        artist8: "Carlo Carra",
        imgdada:
          '/images/Dada/Carlo-Carra-still-life-with-syphon-soda-water-1914.jpg',
        piece8: "Still Life with Syphon Soda Water",
      },
      {
        artist8: "Francis Picabia",
        imgdada:
          '/images/Dada/Francis-Picabia-spanish-night-1922.jpg!Large.jpg',
        piece8: "Spanish Night",
      },
      {
        artist8: "Jacob Epstein",
        imgdada: '/images/Dada/Jacob-Epstein-rockdrill.png!Large.png',
        piece8: "Rockdrill",
      },
      {
        artist8: "Jean Arp",
        imgdada: '/images/Dada/Jean-Arp-before-my-birth-1914.jpg!Large.jpg',
        piece8: "Before my Birth",
      },
      /*
    {
      artist8: "",
      imgdada: '',
      piece8: "",
    },
    */
    ],
  },

  {
    movement: "digital",
    artwork: [
      {
        artist9: "Babek Matveev",
        imgdigi:
          '/images/Digital Art/Babak-Matveev-a-neo-paradise-129.jpg!Large.jpg',
        piece9: "A Neo Paradise",
      },
      {
        artist9: "Beeple",
        imgdigi: '/images/Digital Art/Beeple-5000-days.jpeg!Large.jpeg',
        piece9: "5000 Days",
      },
      {
        artist9: "Kristoffer Zetterstrand",
        imgdigi: '/images/Digital Art/Kristoffer-Zetterstrand-Mortal-Coil.jpg',
        piece9: "Mortal Coil",
      },
      {
        artist9: "Beeple",
        imgdigi: '/images/Digital Art/Beeple-color-civilize-17.png!Large.png',
        piece9: "Color Civilize",
      },
      /*
    {
      artist9: "",
      imgdigi: '',
      piece9: "",
    },
    */
    ],
  },

  {
    movement: "impressionism",
    artwork: [
      {
        artist10: "Berthe Morisot",
        imgimpress:
          '/images/Impressionism/Berthe-Morisot-the-old-track-to-auvers-1863.jpg!Large.jpg',
        piece10: "The Old Track to Auvers",
      },
      {
        artist10: "Camille Pissarro",
        imgimpress:
          '/images/Impressionism/Camille-Pissarro-village-corner-1863.jpg!Large.jpg',
        piece10: "Village Corner",
      },
      {
        artist10: "Edgar Degas",
        imgimpress: '/images/Impressionism/edgar-degas-the millinery-shop.jpg',
        piece10: "The Millinery Shop",
      },
      {
        artist10: "Edouard Manet",
        imgimpress:
          '/images/Impressionism/Edouard-Manet-music-in-the-tuileries-gardens-1862.jpg!Large.jpg',
        piece10: "Music in the Tuileries Gardens",
      },
      {
        artist10: "",
        imgimpress: '',
        piece10: "",
      },
    ],
  },

  {
    movement: "popart",
    artwork: [
      {
        artist11: "Alex Katz",
        imgpop: '/images/Pop Art/Alex-Katz-blue-umbrella.jpg!Large.jpg',
        piece11: "Blue Umbrella",
      },
      {
        artist11: "Charles Blackman",
        imgpop:
          '/images/Pop Art/Charles-Blackman-girl-with-flowers.jpg!Large.jpg',
        piece11: "Girl with Flowers",
      },
      {
        artist11: "Jyoti Bhatt",
        imgpop: '/images/Pop Art/Jyoti-Bhatt-a-face.jpg!Large.jpg',
        piece11: "A Face",
      },
      {
        artist11: "Mark Lancaster",
        imgpop: '/images/Pop Art/Mark-Lancaster-untitled.jpg',
        piece11: "Untitled",
      },
      /*
    {
      artist11: "",
      imgpop: '',
      piece11: "",
    },
    */
    ],
  },

  {
    movement: "romanticism",
    artwork: [
      {
        artist12: "Correggio",
        imgroman:
          '/images/Romanticism/Correggio-allegory-of-the-vices-1530(2).jpg!Large.jpg',
        piece12: "Allegory of the Vices",
      },
      {
        artist12: "David Allen",
        imgroman:
          '/images/Romanticism/David-Allan-the-uncultivated-genius-1775.jpg',
        piece12: "The Uncultivated Genius",
      },
      {
        artist12: "Correggio",
        imgroman:
          '/images/Romanticism/Correggio-allegory-of-the-virtues(2).jpg!Large.jpg',
        piece12: "Allegory of the Virtues",
      },
      {
        artist12: "Francisco Goya",
        imgroman:
          '/images/Romanticism/Francisco-Goya-the-sacrifice-to-priapus-1771.jpg',
        piece12: "The Sacrifice to Priapus",
      },
      {
        artist12: "Correggio",
        imgroman: '/images/Romanticism/Correggio-danae-1531(2).jpg!Large.jpg',
        piece12: "Danae",
      },
      {
        artist12: "Henry Fuseli",
        imgroman:
          '/images/Romanticism/Henry-Fuseli-henry-v-act-ii-scene-2-henry-v-discovering-the-conspirators-1780(1).jpg',
        piece12: "Henry V Act II Scene 2 Henry V Discovering the Conspirators",
      },
      /*
    {
      artist12: "",
      imgroman: '',
      piece12: "",
    },
    */
    ],
  },

  {
    movement: "streetart",
    artwork: [
      {
        artist13: "Alberto Pereira",
        imgstreet: '/images/Street Art/Alberto-Pereira-Untitled.png',
        piece13: "Untitled",
      },
      {
        artist13: "Banksy",
        imgstreet: '/images/Street Art/Banksy-flower-thrower.jpg',
        piece13: "Flower Thrower",
      },
      {
        artist13: "Blek Le Rat",
        imgstreet: '/images/Street Art/blek-le-rat-Mona-Lisa.jpg',
        piece13: "Mona Lisa",
      },
      {
        artist13: "Burhan Dogancay",
        imgstreet:
          '/images/Street Art/Burhan-Dogancay-new-york-john-lennon-1980.jpg',
        piece13: "New York John Lennon",
      },
      /*
    {
      artist13: "",
      imgstreet: '',
      piece13: "",
    },
    */
    ],
  },

  {
    movement: "surrealism",
    artwork: [
      {
        artist14: "Salvador Dali",
        imgsurre: '/images/Surrealism/Dali-figure-at-a-window.jpg!Large.jpg',
        piece14: "Figure at a Window",
      },
      {
        artist14: "Joan Miro",
        imgsurre: '/images/Surrealism/Joan-Miro-maternity.jpg',
        piece14: "Maternity",
      },
      {
        artist14: "Salvador Dali",
        imgsurre:
          '/images/Surrealism/Dali-portrait-of-gala-with-two-lamb-chops-balanced-on-her-shoulder.jpg!Large.jpg',
        piece14:
          "Portrait of Gala with Two Lamb Chops Balanced on her Shoulder",
      },
      {
        artist14: "Lajos Gulacsy",
        imgsurre:
          '/images/Surrealism/Lajos-Gulacsy-the-opium-smoker-s-dream-1918.jpg',
        piece14: "The Opium Smoker's Dream",
      },
      {
        artist14: "M.C. Escher",
        imgsurre: '/images/Surrealism/M.C.-Escher-bookplate-bastiaan-kist.jpg',
        piece14: "Bookplate Bastian Kist",
      },
      /*
    {
      artist14: "",
      imgsurre: '',
      piece14: "",
    },
    */
    ],
  },

  {
    movement: "symbolism",
    artwork: [
      {
        artist15: "Victor Hugo",
        imgsymb:
          '/images/Symbolism/Victor-Hugo-gavroche-at-11-years-old-1850.jpg',
        piece15: "Gavroche at 11 years old",
      },
      {
        artist15: "William Blake",
        imgsymb: '/images/Symbolism/William Blake-Isaac-newton.JPG',
        piece15: "Isaac Newton",
      },
      {
        artist15: "William Holman Hunt",
        imgsymb:
          '/images/Symbolism/William-Holman-Hunt-the-light-of-the-world.jpg!Large.jpg',
        piece15: "The Light of the World",
      },
      {
        artist15: "William Blake",
        imgsymb:
          '/images/Symbolism/William Blake-The Great Red Dragon and the Woman clothed with the sun2.JPG',
        piece15: "The Great Red Dragon and the Woman Clothed with the Sun",
      },
      {
        artist15: "Wojciech Siudmak",
        imgsymb: '/images/Symbolism/Wojciech Siudmak-energy.jpg!Large.jpg',
        piece15: "Energy",
      },
      /*
    {
      artist15: "",
      imgsymb: '',
      piece15: "",
    },
    */
    ],
  },
];

const imgMap = {
  classicism: "imgclass",
  neoclassicism: "imgneoclass",
  expressionism: "imgexpress",
  neoexpressionism: "imgneoexpress",
  conceptual: "imgconcept",
  cubism: "imgcube",
  futurism: "imgfuture",
  constructivism: "imgconstruct",
  dadaart: "imgdada",
  digital: "imgdigi",
  impressionism: "imgimpress",
  popart: "imgpop",
  romanticism: "imgroman",
  streetart: "imgstreet",
  surrealism: "imgsurre",
  symbolism: "imgsymb",
};

console.log(el);


//getGitHubData

async function getGitHubData() {
  const url = 'https://api.github.com/users/giotto-vinci/repos';
  try {
      const response = await fetch('url');
      const data = await response.json()
      const receivedInfo = data

      then(response => {
        if (!response.ok) {
            throw new Error('Network response failed ' + response.statusText);
        }
        return response.json();
    })
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
} catch (error) {
  console.log(error)
}
  };


let currentIndexes = Array(content.length).fill(0);

function updateContent() {
  content.forEach((movement, movementIndex) => {
  const artworkIndex = currentIndexes[movementIndex];
  const artwork = movement.artwork[artworkIndex];

  const artist = artwork.currentIndexes + 1;
  const piece = artwork.currentIndexes + 1;
  const imgKey = imgMap[movement.movement]; // Map movement to correct image key

  if (artist) {
  artist.textContent = artwork.artist || artwork.artist1 || artwork.artist2 || artwork.artist3 || artwork.artist4 || artwork.artist5 || artwork.artist6 || artwork.artist7 || artwork.artist8 || artwork.artist9 || artwork.artist10 || artwork.artist11 || artwork.artist12 || artwork.artist13 || artwork.artist14 || artwork.artist15;
  }
  if (piece) {
  piece.textContent = artwork.piece || artwork.piece1 || artwork.piece2 || artwork.piece3 || artwork.piece4 || artwork.piece5 || artwork.piece6 || artwork.piece7 || artwork.piece8 || artwork.piece9 || artwork.piece10 || artwork.piece11 || artwork.piece12 || artwork.piece13 || artwork.piece14 || artwork.piece15;
  }

  console.log(artist, piece);

  const imageSrc = artwork[imgKey];
  // Update image source if it exists
  if (el[imgKey] && imageSrc) {
    el[imgKey].src = imageSrc;
  }

  // Move to next index (looping through the content array)
  currentIndexes[movementIndex] = (artworkIndex + 1) % movement.artwork.length;
});
}
  
  function startUpdatingContent() {
    setInterval(updateContent, 6000);
  }

// Call this function to start loading artworks
startUpdatingContent();


/*
content.forEach((movement, movementIndex) => {
  const forwardButton = document.getElementById(`for-${movementIndex}`);
  const backButton = document.getElementById(`back-${movementIndex}`);

  // Forward button event listener for each movement
  forwardButton.addEventListener('click', function() {
    if (currentIndexes[movementIndex] < movement.artwork.length - 1) {
      currentIndexes[movementIndex]++;
      updateContent(); // Update content immediately for the movement
    }
  });

  // Back button event listener for each movement
  backButton.addEventListener('click', function() {
    if (currentIndexes[movementIndex] > 0) {
      currentIndexes[movementIndex]--;
      updateContent(); // Update content immediately for the movement
    }
  });
});

function updateDisplay() {
  content.forEach((movement, movementIndex) => {
    const currentItem = movement.artwork[currentIndexes[movementIndex]];
    // Ensure image source is updated for each movement
    document.getElementById('imageSrc').src = currentItem.imgSrc;
  });
}
  */