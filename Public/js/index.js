"use strict";

const el = {
  styles: document.getElementById("style"),
  classicism: document.getElementById("class"),
  neoclassicism: document.getElementById("neoclass"),
  expressionism: document.getElementById("express"),
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
  imgclass: document.getElementById("imgclass"),
  imgneoclass: document.getElementById("imgneoclass"),
  imgexpress: document.getElementById("imgexpress"),
  imgneoexpress: document.getElementById("imgneoexpress"),
  imgconcept: document.getElementById("imgconcept"),
  imgcube: document.getElementById("imgcube"),
  imgfuture: document.getElementById("imgfuture"),
  imgconstruct: document.getElementById("imgconstruct"),
  imgdada: document.getElementById("imgdada"),
  imgdigi: document.getElementById("imdigi"),
  imgimpress: document.getElementById("imgimpress"),
  imgpop: document.getElementById("imgpop"),
  imgroman: document.getElementById("imgroman"),
  imgstreet: document.getElementById("imgstreet"),
  imgsurre: document.getElementById("imgsurre"),
  imgsymb: document.getElementById("imgsymb"),
  artist: document.getElementById("name"),
  piece: document.getElementById("title"),
  artist1: document.getElementById("name1"),
  piece1: document.getElementById("title1"),
  artist2: document.getElementById("name2"),
  piece2: document.getElementById("title2"),
  artist3: document.getElementById("name3"),
  piece3: document.getElementById("title3"),
  artist4: document.getElementById("name4"),
  piece4: document.getElementById("title4"),
  artist5: document.getElementById("name5"),
  piece5: document.getElementById("title5"),
  artist6: document.getElementById("name6"),
  piece6: document.getElementById("title6"),
  artist7: document.getElementById("name7"),
  piece7: document.getElementById("title7"),
  artist8: document.getElementById("name8"),
  piece8: document.getElementById("title8"),
  artist9: document.getElementById("name9"),
  piece9: document.getElementById("title9"),
  artist10: document.getElementById("name10"),
  piece10: document.getElementById("title10"),
  artist11: document.getElementById("name11"),
  piece11: document.getElementById("title11"),
  artist12: document.getElementById("name12"),
  piece12: document.getElementById("title12"),
  artist13: document.getElementById("name13"),
  piece13: document.getElementById("title13"),
  artist14: document.getElementById("name14"),
  piece14: document.getElementById("title14"),
  artist15: document.getElementById("name15"),
  piece15: document.getElementById("title15"),
};

//http://

// Iterate through objects within a style;
const classicism = [
    {
      artist: "Caravaggio",
      imgclass: "/images/Classicism/Caravaggio-Bacchus.jpg",
      piece: "Bacchus",
    },

    {
      artist: "Paulus Potter",
      imgclass: "/images/Classicism/Paulus Potter, The Bull.jpg",
      piece: "The Bull",
    },

    {
      artist: "Paul Peter Rubens",
      imgclass: "/images/Classicism/Peter Paul Rubens, The Garden of Love.jpg",
      piece: "The Garden of Love",
    },
    {
      artist: "Simon Vouet Sophonisba",
      imgclass:
        "/images/Classicism/simon-vouet-sophonisba-receiving-the-poisoned-chalice.jpg",
      piece: "Receivieng the poisoned Chalice",
    },
    {
      artist: "Giovanni Battista Gaulli",
      imgclass:
        "/images/Classicism/Giovanni Battista Gaulli, Triumph of the Name of Jesus.jpg",
      piece: "Triumph in the Name of Jesus",
    },
    /*
    {
        artist: "",
        imgclass: '',
        piece: "",
    },
  */
  ];

  const neoclassicism = [
    {
      artist1: "Claude Joseph Vernet",
      imgneoclass:
        "/images/Neo rowclassicismicism/Claude-Joseph-Vernet-the-bridge-and-the-castel-sant-angelo-in-rome.jpg",
      piece1: "The Bridge and the Castel Sant Angelo in Rome",
    },

    {
      artist1: "Pompeo Batoni",
      imgneoclass:
        "/images/Neo rowclassicismicism/pompeo-batoni-peace-and-justice.jpg",
      piece1: "Peace and Justice",
    },
    {
      artist1: "Benjamin West",
      imgneoclass:
        "/images/Neo Classicism/Benjamin-West-agrippina-and-her-children-mourning-over-the-ashes-of-germanicus-1773.jpg",
      piece1: "Agrippa and her Children Mourning over the ashes of Germanicus",
    },
    {
      artist1: "Gavin Hamilton William",
      imgneoclass:
        "/images/Neo Classicism/Gavin-Hamilton-william-hamilton-of-bangour-poet-1748.jpg!Large.jpg",
      piece1: "Hamilton of Bongour Poet",
    },
    /*
    {
      artist1: "",
      imgneoclass: "",
      piece1: "",
    },
    */
  ];

  const expressionism = [
    {
      artist2: "Edvard Munch",
      imgexpress:
        "/images/Expressionism/Edvard-Munch-the-scream-1893(2).jpg!Large.jpg",
      piece2: "The Scream",
    },
    {
      artist2: "James Ensor",
      imgexpress:
        "/images/Expressionism/James-Ensor-my-aunt-asleep-dreaming-of-monsters-1890.jpg",
      piece2: "My Aunt Asleep Dreaming of Monsters",
    },
    {
      artist2: "Amedeo Modigliani",
      imgexpress:
        "/images/Expressionism/amedeo-modigliani-portrait-of-the-brother-of-the-painter-micheli.jpg",
      piece2: "Portrait of the Brother of the Painter Micheli",
    },
    {
      artist2: "Kathe Kollwitz",
      imgexpress: "/images/Expressionism/Kathe-Kollwitz-Misery.jpg",
      piece2: "Misery",
    },
    /*
    {
      artist2: "",
      imgexpress: "",
      piece2: "",
    },
    */
  ];

  const neoexpressionism = [
    {
      artist3: "David Park",
      imgneoexpress:
        "/images/Neo Expressionism/David Park-kids-on-bikes-1950.jpg",
      piece3: "Kids on Bikes",
    },
    {
      artist3: "Enzo Cucchi",
      imgneoexpress:
        "/images/Neo Expressionism/Enzo-Cucchi-la-luce-entra-chiena.jpg!Large.jpg",
      piece3: "La Luce Entra Chiena",
    },
    {
      artist3: "Graca Morais",
      imgneoexpress:
        "/images/Neo Expressionism/Graca-Morais-unknown-title-3.jpg",
      piece3: "Unknown title 3",
    },
    {
      artist3: "Julio Pomar",
      imgneoexpress:
        "/images/Neo Expressionism/Julio=Pomar-mario-soares--o-presidente.jpg",
      piece3: "Mario Soares O-Presidente",
    },
    /*
    {
      artist3: "",
      imgneoexpress: "",
      piece3: "",
    },
    */
  ];

  const conceptual = [
    {
      artist4: "Cornelia Parker",
      imgconcept: "/images/Conceptual/Cornelia-Parker-heart-of-darkness.jpeg",
      piece4: "Heart of Darkness",
    },
    {
      artist4: "Damien Hirst",
      imgconcept: "/images/Conceptual/Damien-Hirst-virgin-mother-1.jpg",
      piece4: "Virgin Mother",
    },
    {
      artist4: "Erik Bulatov",
      imgconcept: "/images/Conceptual/Erik-Bulatov-sky.jpg",
      piece4: "Sky",
    },
    {
      artist4: "Gerard Fromanger",
      imgconcept:
        "/images/Conceptual/Gerard-Fromanger-my-painting-drips-1966.jpg",
      piece4: "My Painting Drips",
    },
    /*
    {
      artist4: "",
      imgconcept: "",
      piece4: "",
    },
    */
  ];

  const cubism = [
    {
      artist5: "Georges Braque",
      imgcube: "/images/Cubism/Georges-Braque-big-nude-1908.jpg",
      piece5: "Big Nude",
    },
    {
      artist5: "Guilherme de Santa Rita",
      imgcube:
        "/images/Cubism/Guilherme-de-Santa-Rita-orfeu-nos-infernos-detail-1904.jpg",
      piece5: "Orfeu nos Infernos",
    },
    {
      artist5: "Maurice de Vlaminck",
      imgcube:
        "/images/Cubism/Maurice-de-Vlaminck-the-table-still-life-with-almonds-1907.jpg",
      piece5: "The Table Still Life with Almonds",
    },
    {
      artist5: "Georges Braque",
      imgcube: "/images/Cubism/Georges-Braque-fishing-boats.jpg",
      piece5: "Fishing Boots",
    },
    /*
    {
      artist5: "",
      imgcube: "",
      piece5: "",
    },
    */
  ];

  const futurism = [
    {
      artist6: "Felix Del Marle",
      imgfuture:
        "/images/Futurism/Felix Del Marle-study-for-a-portrait-of-jean-dupr-1913.jpg!Large.jpg",
      piece6: "Study for a portrait of Jean Dupr",
    },
    {
      artist6: "Franz Marc",
      imgfuture:
        "/images/Futurism/Franz Marc-the-tower-of-blue-horses-1913.jpg!Large.jpg",
      piece6: "The Tower of Blue Horses",
    },
    {
      artist6: "Giacomo Balla",
      imgfuture:
        "/images/Futurism/Giacomo Balla-street-light-1909.jpg!Large.jpg",
      piece6: "Street Light",
    },
    {
      artist6: "Gino Severini",
      imgfuture:
        "/images/Futurism/Gino Severini-the-bear-dance-at-the-moulin-rouge-1913.jpg!Large.jpg",
      piece6: "The Bear Dance at the Moulin Rouge",
    },
    /*
    {
      artist6: "",
      imgfuture: "",
      piece6: "",
    },
    */
  ];

  const construtivism = [
    {
      artist7: "David Bomberg",
      imgconstruct: "/images/Constructivism/David Bomberg-racehorses-1913.jpg",
      piece7: "Racehorses",
    },
    {
      artist7: "Erich Buchholz",
      imgconstruct:
        "/images/Constructivism/Erich Buchholz-relief-painting-1922.jpg",
      piece7: "Relief Painting",
    },
    {
      artist7: "Lajos Kassak",
      imgconstruct:
        "/images/Constructivism/Lajos Kassak-wooden-relief-1923.jpg!Large.jpg",
      piece7: "Wooden Relief",
    },
    {
      artist7: "Oskar Schlemmer",
      imgconstruct:
        "/images/Constructivism/Oskar Schlemmer-figurines-in-space-study-for-the-triadic-ballet-1924.jpg",
      piece7: "Figurines in Space Study for the Triadic Ballet",
    },
    /*
    {
      artist7: "",
      imgconstruct: "",
      piece7: "",
    },
    */
  ];

  const dadaart = [
    {
      artist8: "Carlo Carra",
      imgdada:
        "/images/Dada/Carlo-Carra-still-life-with-syphon-soda-water-1914.jpg",
      piece8: "Still Life with Syphon Soda Water",
    },
    {
      artist8: "Francis Picabia",
      imgdada: "/images/Dada/Francis-Picabia-spanish-night-1922.jpg!Large.jpg",
      piece8: "Spanish Night",
    },
    {
      artist8: "Jacob Epstein",
      imgdada: "/images/Dada/Jacob-Epstein-rockdrill.png!Large.png",
      piece8: "Rockdrill",
    },
    {
      artist8: "Jean Arp",
      imgdada: "/images/Dada/Jean-Arp-before-my-birth-1914.jpg!Large.jpg",
      piece8: "Before my Birth",
    },
    /*
    {
      artist8: "",
      imgdada: "",
      piece8: "",
    },
    */
  ];

  const digital = [
    {
      artist9: "Babek Matveev",
      imgdigi:
        "/images/Digital Art/Babak-Matveev-a-neo-paradise-129.jpg!Large.jpg",
      piece9: "A Neo Paradise",
    },
    {
      artist9: "Beeple",
      imgdigi: "/images/Digital Art/Beeple-5000-days.jpeg!Large.jpeg",
      piece9: "5000 Days",
    },
    {
      artist9: "Kristoffer Zetterstrand",
      imgdigi: "/images/Digital Art/Kristoffer-Zetterstrand-Mortal-Coil.jpg",
      piece9: "Mortal Coil",
    },
    {
      artist9: "Beeple",
      imgdigi: "/images/Digital Art/Beeple-color-civilize-17.png!Large.png",
      piece9: "Color Civilize",
    },
    /*
    {
      artist9: "",
      imgdigi: "",
      piece9: "",
    },
    */
  ];

  const impressionism = [
    {
      artist10: "Berthe Morisot",
      imgimpress:
        "/images/Impressionism/Berthe-Morisot-the-old-track-to-auvers-1863.jpg!Large.jpg",
      piece10: "The Old Track to Auvers",
    },
    {
      artist10: "Camille Pissarro",
      imgimpress:
        "/images/Impressionism/Camille-Pissarro-village-corner-1863.jpg!Large.jpg",
      piece10: "Village Corner",
    },
    {
      artist10: "Edgar Degas",
      imgimpress: "/images/Impressionism/edgar-degas-the millinery-shop.jpg",
      piece10: "The Millinery Shop",
    },
    {
      artist10: "Edouard Manet",
      imgimpress:
        "/images/Impressionism/Edouard-Manet-music-in-the-tuileries-gardens-1862.jpg!Large.jpg",
      piece10: "Music in the Tuileries Gardens",
    },
    {
      artist10: "",
      imgimpress: "",
      piece10: "",
    },
  ];

  const popart = [
    {
      artist11: "Alex Katz",
      imgpop: "/images/Pop Art/Alex-Katz-blue-umbrella.jpg!Large.jpg",
      piece11: "Blue Umbrella",
    },
    {
      artist11: "Charles Blackman",
      imgpop:
        "/images/Pop Art/Charles-Blackman-girl-with-flowers.jpg!Large.jpg",
      piece11: "Girl with Flowers",
    },
    {
      artist11: "Jyoti Bhatt",
      imgpop: "/images/Pop Art/Jyoti-Bhatt-a-face.jpg!Large.jpg",
      piece11: "A Face",
    },
    {
      artist11: "Mark Lancaster",
      imgpop: "/images/Pop Art/Mark-Lancaster-untitled.jpg",
      piece11: "Untitled",
    },
    /*
    {
      artist11: "",
      imgpop: "",
      piece11: "",
    },
    */
  ];

  const romanticism = [
    {
      artist12: "Correggio",
      imgroman:
        "/images/Romanticism/Correggio-allegory-of-the-vices-1530(2).jpg!Large.jpg",
      piece12: "Allegory of the Vices",
    },
    {
      artist12: "David Allen",
      imgroman:
        "/images/Romanticism/David-Allan-the-uncultivated-genius-1775.jpg",
      piece12: "The Uncultivated Genius",
    },
    {
      artist12: "Correggio",
      imgroman:
        "/images/Romanticism/Correggio-allegory-of-the-virtues(2).jpg!Large.jpg",
      piece12: "Allegory of the Virtues",
    },
    {
      artist12: "Francisco Goya",
      imgroman:
        "/images/Romanticism/Francisco-Goya-the-sacrifice-to-priapus-1771.jpg",
      piece12: "The Sacrifice to Priapus",
    },
    {
      artist12: "Correggio",
      imgroman: "/images/Romanticism/Correggio-danae-1531(2).jpg!Large.jpg",
      piece12: "Danae",
    },
    {
      artist12: "Henry Fuseli",
      imgroman:
        "/images/Romanticism/Henry-Fuseli-henry-v-act-ii-scene-2-henry-v-discovering-the-conspirators-1780(1).jpg",
      piece12: "Henry V Act II Scene 2 Henry V Discovering the Conspirators",
    },
    /*
    {
      artist12: "",
      imgroman: "",
      piece12: "",
    },
    */
  ];

  const streetart = [
    {
      artist13: "Alberto Pereira",
      imgstreet: "/images/Street Art/Alberto-Pereira-Untitled.png",
      piece13: "Untitled",
    },
    {
      artist13: "Banksy",
      imgstreet: "/images/Street Art/Banksy-flower-thrower.jpg",
      piece13: "Flower Thrower",
    },
    {
      artist13: "Blek Le Rat",
      imgstreet: "/images/Street Art/blek-le-rat-Mona-Lisa.jpg",
      piece13: "Mona Lisa",
    },
    {
      artist13: "Burhan Dogancay",
      imgstreet:
        "/images/Street Art/Burhan-Dogancay-new-york-john-lennon-1980.jpg",
      piece13: "New York John Lennon",
    },
    /*
    {
      artist13: "",
      imgstreet: "",
      piece13: "",
    },
    */
  ];

  const surrealism = [
    {
      artist14: "Salvador Dali",
      imgsurre: "/images/Surrealism/Dali-figure-at-a-window.jpg!Large.jpg",
      piece14: "Figure at a Window",
    },
    {
      artist14: "Joan Miro",
      imgsurre: "/images/Surrealism/Joan-Miro-maternity.jpg",
      piece14: "Maternity",
    },
    {
      artist14: "Salvador Dali",
      imgsurre:
        "/images/Surrealism/Dali-portrait-of-gala-with-two-lamb-chops-balanced-on-her-shoulder.jpg!Large.jpg",
      piece14: "Portrait of Gala with Two Lamb Chops Balanced on her Shoulder",
    },
    {
      artist14: "Lajos Gulacsy",
      imgsurre:
        "/images/Surrealism/Lajos-Gulacsy-the-opium-smoker-s-dream-1918.jpg",
      piece14: "The Opium Smoker's Dream",
    },
    {
      artist14: "M.C. Escher",
      imgsurre: "/images/Surrealism/M.C.-Escher-bookplate-bastiaan-kist.jpg",
      piece14: "Bookplate Bastian Kist",
    },
    /*
    {
      artist14: "",
      imgsurre: "",
      piece14: "",
    },
    */
  ];

  const symbolism = [
    {
      artist15: "Victor Hugo",
      imgsymb:
        "/images/Symbolism/Victor-Hugo-gavroche-at-11-years-old-1850.jpg",
      piece15: "Gavroche at 11 years old",
    },
    {
      artist15: "William Blake",
      imgsymb: "/images/Symbolism/William Blake-Isaac-newton.JPG",
      piece15: "Isaac Newton",
    },
    {
      artist15: "William Holman Hunt",
      imgsymb:
        "/images/Symbolism/William-Holman-Hunt-the-light-of-the-world.jpg!Large.jpg",
      piece15: "The Light of the World",
    },
    {
      artist15: "William Blake",
      imgsymb:
        "/images/Symbolism/William Blake-The Great Red Dragon and the Woman clothed with the sun2.JPG",
      piece15: "The Great Red Dragon and the Woman Clothed with the Sun",
    },
    {
      artist15: "Wojciech Siudmak",
      imgsymb: "/images/Symbolism/Wojciech Siudmak-energy.jpg!Large.jpg",
      piece15: "Energy",
    },
    /*
    {
      artist15: "",
      imgsymb: "",
      piece15: "",
    },
    */
  ];


//const stylerow = [[classicism], [neoclassicism], [expressionism], [neoexpressionism], [conceptual], [cubism], [futurism], [construtivism], [dadaart], [digital], [impressionism], [popart], [romanticism], [streetart], [surrealism], [symbolism]];


function loopThroughArt() {
  let index = 0;
  setInterval(() => {
      if (index < classicism.length) {
          el.imgclass.src = classicism[index].imgclass;
          el.artist.innerText = classicism[index].artist;
          el.piece.innerText = classicism[index].piece;
          index++;
      } else {
          index = 0;
      }
  }, 4000)
}

setTimeout(loopThroughArt, 4000);


/*
  loopThroughStyle(classicism, {artist: el.artist, img: el.imgclass, piece: el.piece});
  loopThroughStyle(neoclassicism, {artist: el.artist1, img: el.imgneoclass, piece: el.piece1});
  loopThroughStyle(expressionism, {artist: el.artist2, img: el.imgexpress, piece: el.piece2});
  loopThroughStyle(neoexpressionism, {artist: el.artist3, img: el.imgneoexpress, piece: el.piece3});
  loopThroughStyle(conceptual, {artist: el.artist4, img: el.imgconcept, piece: el.piece4});
  loopThroughStyle(cubism, {artist: el.artist5, img: el.imgcube, piece: el.piece5});
  loopThroughStyle(futurism, {artist: el.artist6, img: el.imgfuture, piece: el.piece6});
  loopThroughStyle(construtivism, {artist: el.artist7, img: el.imgconstruct, piece: el.piece7});
  loopThroughStyle(dadaart, {artist: el.artist8, img: el.imgdada, piece: el.piece8});
  loopThroughStyle(digital, {artist: el.artist9, img: el.imgdigi, piece: el.piece9});
  loopThroughStyle(expressionism, {artist: el.artist10, img: el.imgexpress, piece: el.piece10});
  loopThroughStyle(popart, {artist: el.artist11, img: el.imgpop, piece: el.piece11});
  loopThroughStyle(romanticism, {artist: el.artist12, img: el.imgroman, piece: el.piece12});
  loopThroughStyle(streetart, {artist: el.artist13, img: el.imgstreet, piece: el.piece13});
  loopThroughStyle(surrealism, {artist: el.artist14, img: el.imgsurre, piece: el.piece14});
  loopThroughStyle(symbolism, {artist: el.artist15, img: el.imgsymb, piece: el.piece15});


setTimeout(loopThroughStyle, 3000);



// Dynamic function to handle updates for each style
function loopThroughStyle(styleData, index) {
  let index = 0;
  setInterval(() => {
    if (index < styleData.length) {
      el[`artist${index}`].innerText = styleData[index].artist && styleData[index].artist1 && styleData[index].artist2 && styleData[index].artist3 && styleData[index].artist4 && styleData[index].artist5 && styleData[index].artist6 && styleData[index].artist7 && styleData[index].artist8 && styleData[index].artist9 && styleData[index].artist10 && styleData[index].artist11 && styleData[index].artist12 && styleData[index].artist13 && styleData[index].artist14 && styleData[index].artist15;
      el[`img${styleKey}`].src = styleData[index].img && styleData[index].imgneoclass && styleData[index].imgexpress && styleData[index].imgneoexpress && styleData[index].imgconcept && styleData[index].imgcube && styleData[index].imgfuture && styleData[index].imgconstruct && styleData[index].imgdada && styleData[index].imgdigi && styleData[index].imgimpress && styleData[index].imgpop && styleData[index].imgroman && styleData[index].imgstreet && styleData[index].imgsurre && styleData[index].imgsymb;
      el[`piece${index}`].innerText = styleData[index].piece && styleData[index].piece1 && styleData[index].piece2 && styleData[index].piece3 && styleData[index].piece4 && styleData[index].piece5 && styleData[index].piece6 && styleData[index].piece7 && styleData[index].piece8 && styleData[index].piece9 && styleData[index].piece10 && styleData[index].piece11 && styleData[index].piece12 && styleData[index].piece13 && styleData[index].piece14 && styleData[index].piece15;
      index++;
    } else {
      index = 0;  // Reset index for the next loop
    }
  }, 3000);
}

// Iterate through all styles dynamically
function loopThroughStyles() {
  const styles = [
    { styleData: classicism, index: 0 },
    { styleData: neoclassicism, index: 1 },
    { styleData: expressionism, index: 2 },
    { styleData: neoexpressionism, index: 3 },
    { styleData: conceptual, index: 4 },
    { styleData: cubism, index: 5 },
    { styleData: futurism, index: 6 },
    { styleData: construtivism, index: 7 },
    { styleData: dadaart, index: 8 },
    { styleData: digital, index: 9 },
    { styleData: impressionism, index: 10 },
    { styleData: popart, index: 11 },
    { styleData: romanticism, index: 12 },
    { styleData: streetart, index: 13 },
    { styleData: surrealism, index: 14 },
    { styleData: symbolism, index: 15 },
  ];

  styles.forEach(({ styleData, index }) => {
    loopThroughStyle(styleData, index);
  });
}

// Call the loop function after a delay
setTimeout(loopThroughStyles, 3000);
*/
/*

function loopThroughClass() {
  let index = 0;
  let index = 0;
  setInterval(() => {
    if (index < classicism[index].length) {
      el.artist.innerText = classicism[index][index].artist;
      el.imgclass.src = classicism[index][index].imgclass;
      el.piece.innerText = classicism[index][index].piece;
      index++;
    } else {
      index = (index + 1) % classicism.length; // Loop back to the first image
      index = 0;
    }
  }, 3000);
}

setTimeout(loopThroughClass, 3000);


function loopThroughNeoClass() {
  let index = 0;
  let index = 0;
  setInterval(() => {
    if (index < neoclassicism[index].length) {
        el.artist1.innerText = neoclassicism[index][index].artist1;
        el.imgclass.src = neoclassicism[index][index].imgclass;
        el.piece1.innerText = neoclassicism[index][index].piece1;
        index++;
    } else {
      index = (index + 1) % neoclassicism.length; // Loop back to the first image
      index = 0;
    }
  }, 3000);
}
*/
/*

const currentArt = classicism[index][index];
      el.artist.innerText = currentArt.artist;
      el.piece.innerText = currentArt.piece;

      // Change the image source based on the style
      switch (index) {
        case 0: // Classicism
          el.imgclass.src = currentArt.imgclass;
          break;
        case 1: // Neoclassicism
          el.imgneoclass.src = currentArt.art;
          break;
        // Add more cases for other art styles
      }
      */
/*
async function getNewStyleImage() {
    const url = "";
    try {
        const response = await fetch(url);
        const data = await response.json();
        const receivedData = data.urls.regular

        const imgclass = document.querySelector("class")

    } catch (error) {
        console.log(error)
    }
}
*/