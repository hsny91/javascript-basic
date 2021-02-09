// let words = [{
//     name: "BILGISAYAR",
//     syllables: ["BIL", "GI", "SA", "YAR"]
//   },
//   {
//     name: "DEFTER",
//     syllables: ["DEF", "TER"]
//   }
let containerDiv = document.querySelector('#list')
let buttonGroupDiv=document.querySelector('#button-group');
let base, randomized, dragging, draggedOver;
let isRight = 'Not In Order!';

let wordList = [{
        word: ['HUS', 'NI', 'YE']
    },
    {
        word: ['DEF', 'TER', ]
    },
    {
        word: ['DE', 'NE', 'ME']
    },
    {
        word: ['A', 'YAK', 'KA', 'BI']
    },
    {
        word: ['MEH', 'MET']
    },

]


genRandom(wordList[0].word)

document.addEventListener("click", (event) => {
    if (event.target.id === "check") {
        isRight = randomized.join("") === base.join("") ?
            'In Order!' : 'Not In Order!'
        renderItems(randomized)
    }
});

document.addEventListener("click", (event) => {
    if (event.target.id === "random") {
        let wordArrayLenght = wordList.length;
        let index = Math.floor(Math.random() * wordArrayLenght);
        isRight =  'Not In Order!'
        genRandom(wordList[index].word)
    }
});