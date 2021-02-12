/**
 * WORD GAME
 * Oyun basladiginda Random olarak hecelerine ayrilmis bir kelime gelecek.
 * Heceler Drag & Drop yontemi ile anlamli olarak siralip bitirildiginde kullaniciya "DOGRU"  veya ''YANLIS" mesaji bildirilecek.
 * Data olarak Minimum 10 Kelime olmalacak
 * 'Next' butonu tiklandiginda hecelerine karisik olarak ayrilmis bir kelime gelecek.
 * 'Check' butonu tiklandiginda kelimenin dogru veya yanlisligi kontrol edilecek.
 * Analiz:
 * 1.Kelimeler ve heceler bir arrayde tutulur.
 * 2.Her hece bir div icinde ve bu hece grubu da bir container div icinde gösterilecek bir yapi olusturulur
 * 3.Heceler sort methodu ile karistrililir
 * 4.Karistirilan hece grubu map methodu ile container div icine yazdirilir.
 * 5.Tüm hecelere DragnDrop eventleri tanimlanir
 * 6.Next butonuna basildiginda kelime listesinden random olarak bir kelime ve hece grubu secilerek ekrana yazdirilir.
 * 7.Check butonuna basildiginda hece grubunun dogru siralip siralanmadigi kontrol edilir.
 */
const dragableItems = document.querySelectorAll(".drag-item");
const dragList = document.querySelector("#drag-list");
const buttons = document.querySelector("#buttons");
const container = document.querySelector("#container");


let correctWord, mixSylbList, dragging, draggedOver;

let words = [{
    syllables: ["BIL", "GI", "SA", "YAR"]
  },
  {
    syllables: ['A','YAK','KA','BI','LIK']
  },
  {
    syllables: ['KUR','SUN','KA','LEM']
  },
  {
    syllables: ['HI','CO','DERS']
  },
  {
    syllables: ["TE", "LE", "FON"]
  },
  {
    syllables: ['CEK','ME','CE']
  },
  {
    syllables: ['MU','REB','BI','YE']
  },
  {
    syllables: ["OG", "RET", "MEN"]
  },
  {
    syllables: ['OG', 'REN', 'CI','LER']
  },
  {
    syllables: ['KUR','SI','YER']
  }
];



shuffleSyllableList(words[2].syllables);

