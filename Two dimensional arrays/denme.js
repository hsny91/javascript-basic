
  
/**
 * - Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi
- Herhangi bir dersden 70 puan üstü alanlarin listesi bulmasi
- Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi
- Sinifin hangi dersde en iyi nota sahip oldugunu gostermesi
- Sinifin en kötü oldugu dersi gostermesi
- Tüm derslerin en iyi ögrencilerini bulmasi
 */
const notes = [
  ["Hans", 80, 90, 10, 50],
  ["Ulrich", 94, 36, 76, 74],
  ["Olaf", 30, 60, 34, 78],
  ["Otto", 60, 60, 78, 23],
  ["Tina", 71, 45, 89, 100],
  ["Rosalina", 40, 56, 82, 40],
  ["Urs", 49, 45, 56, 67],
  ["Monika", 49, 42, 16, 62],
];
/**
 * ortalamyi bulan fonksiyon
 * @param {*} pIndex
 * @param {*} pNoteList
 * @param {*} pLessonName
 */
function findAverage(pIndex, pNoteList) {
  let toplam = 0;
  for (let index = 0; index < pNoteList.length; index++) {
    toplam += pNoteList[index][pIndex];
  }
  return toplam / notes.length;
}
/**
 *  70 puan ustu alanlarin isnmlerini bulan fonksiyon
 * @param {*} pIndex
 * @param {*} pNoteList
 * @param {*} pLessonNme
 */
function higher70(pIndex, pNoteList, pLessonNme) {
  let newList = [];
  for (let index = 0; index < pNoteList.length; index++) {
    if (pNoteList[index][pIndex] > 70) {
      newList.push(pNoteList[index][0] + " " + pNoteList[index][pIndex]);
    }
  }
  console.log(
    pLessonNme + " Dersinden 70 puan ustu alanlarin isnmleri: " + newList
  );
}
/**
 * ortalamanin ustunde olanlari bulan fonksiyon
 * @param {*} pindex
 * @param {*} pLessonName
 * @param {*} plist
 */
function higherThanAvearage(pindex, pLessonName, plist, averageLesson) {
  let averageList = [];
  for (let index = 0; index < notes.length; index++) {
    if (plist[index][pindex] > averageLesson) {
      averageList.push(plist[index][0] + " " + plist[index][pindex]);
    }
  }
  console.log(
    pLessonName +
      " dersinden ortalamanin ustunde olanlarin isnmleri: " +
      averageList
  );
}
/**
 * Sinifin hangi dersde en iyi nota sahip oldugunu gosteren fonksiyon
 */
function findMaxNotes() {
  let averageList = [
    averageMathNote,
    averageGermanNote,
    averageEnglishNote,
    averageGeographyNote,
  ];
  let moreSuccessLesson = Math.max.apply(null, averageList);

  if (moreSuccessLesson == averageMathNote) {
    console.log("EN Basarili ders matematiktir");
  } else if (moreSuccessLesson == averageGermanNote) {
    console.log("EN Basarili ders germany`dir");
  } else if (moreSuccessLesson == averageEnglishNote) {
    console.log("EN Basarili ders English`dir");
  } else {
    console.log("EN Basarili ders: geography`dir");
  }
}
/**
 * Sinifin hangi dersde en dusuk nota sahip oldugunu gosteren fonksiyon
 */
function findMinNotes() {
  let averageList = [
    averageMathNote,
    averageGermanNote,
    averageEnglishNote,
    averageGeographyNote,
  ];
  let moreSuccessLesson = Math.min.apply(null, averageList);
  if (moreSuccessLesson == averageMathNote) {
    console.log("EN Basarisiz ders matematiktir");
  } else if (moreSuccessLesson == averageGermanNote) {
    console.log("EN Basarisiz ders germany `dir");
  } else if (moreSuccessLesson == averageEnglishNote) {
    console.log("EN Basarisiz ders English `dir");
  } else {
    console.log("EN Basarisiz ders: geography `dir");
  }
}
/**
 * Tüm derslerin en iyi ögrencilerini bulan fonksiyon
 * @param {*} pIndex
 * @param {*} pLessonName
 */
function findSuccessStudent(pIndex, pLessonName) {
  let maxNotes = notes[0][pIndex];
  let successStudent = "";
  for (index = 0; index < notes.length; index++) {
    if (notes[index][pIndex] >= maxNotes) {
      maxNotes = notes[index][pIndex];
      successStudent = notes[index][0];
    }
  }
  console.log(
    pLessonName + " dersinden en yuksek alan ogrenci " + maxNotes,
    successStudent
  );
}
// Tum derslerin ortlamasini ekrana yazdirma
let averageMathNote = findAverage(1, notes);
let averageGermanNote = findAverage(2, notes);
let averageEnglishNote = findAverage(3, notes);
let averageGeographyNote = findAverage(4, notes);
console.log("Matematik dersinin ortalamasi: " + averageMathNote);
console.log("German dersinin ortalamasi: " + averageGermanNote);
console.log("English dersinin ortalamasi: " + averageEnglishNote);
console.log("Geography dersinin ortalamasi: " + averageGeographyNote);
//70 puan ustu alanlarin isnmlerini yazma
higher70(1, notes, "Math");
higher70(2, notes, "German");
higher70(3, notes, "English");
higher70(4, notes, "Geography");
//ortalamanin ustunde olanlari yazma
higherThanAvearage(1, "matematik", notes, averageMathNote);
higherThanAvearage(2, "German", notes, averageGermanNote);
higherThanAvearage(3, "English", notes, averageEnglishNote);
higherThanAvearage(4, "Geography", notes, averageGeographyNote);
// Sinifin hangi dersde en iyi nota sahip oldugunu yazma
findMaxNotes();
// Sinifin hangi dersde en dusuk nota sahip oldugunu yazma
findMinNotes();
//Tüm derslerin en iyi ögrencilerini yazma
findSuccessStudent(1, "matematik");
findSuccessStudent(2, "german");
findSuccessStudent(3, "english");
findSuccessStudent(4, "geography");

