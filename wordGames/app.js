// let words = [{
//     name: "BILGISAYAR",
//     syllables: ["BIL", "GI", "SA", "YAR"]
//   },
//   {
//     name: "DEFTER",
//     syllables: ["DEF", "TER"]
//   }
let wordList = [{
        word: ['HUS', 'NI', 'YE']
    },
    {
        word: ['DEF', 'TER',]
    },
    {
        word: ['DE', 'NE', 'ME']
    },
    {
        word: ['A', 'YAK','KA','BI']
    },
    {
        word: ['MEH', 'MET']
    },

]

let wordArrayLenght=wordList.length;
let index=Math.floor(Math.random() * wordArrayLenght); 


genRandom(wordList[index].word)
