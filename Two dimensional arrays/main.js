/**
 *TWO DIMENSIONAL ARRAYS
 *Verilen "notes" isimli arrayin her elemani bir array icerir ve bu array sirasiyla ögrenci adini, mathematik, 
 *almanca, ingilizce ve cografya ders notlarini icermektedir. Bu cok boyutlu array kullanilarak;
 *1.Her dersin sinif ortalamasi ayri ayri hesaplanacak,
 *2.Herhangi bir dersden 70 puan üstü alanlarin listesi bulunacak,
 *3.Tüm derslerden ortalamanin üstünde olanlarin listesi olusturulacak,
 *4.Sinifin hangi dersde en iyi nota sahip oldugu gosterilecek,
 *5.Sinifin en kötü oldugu ders gosterilecek,
 *6.Tüm derslerin en iyi ögrencileri bulunacaktir.
 */

const notes = [
    ["Hans", 80, 90, 10, 50],
    ["Ulrich", 94, 36, 76, 74],
    ["Olaf", 30, 60, 34, 78],
    ["Otto", 60, 60, 78, 23],
    ["Tina", 71, 45, 89, 100],
    ["Rosalina", 40, 56, 82, 40],
    ["Urs", 49, 45, 56, 67],
    ["Monika", 49, 42, 16, 62]
];
const STUDENT_NAME = 0
const MATH_INDEX = 1;
const GERMAN_INDEX = 2;
const ENGLISH_INDEX = 3;
const GEO_INDEX = 4;

/**
 * @param {*} pNoteList 
 * @param {*} pIndex 
 * 
 * finding the Average note function
 */
function findLessonAverage(pNoteList, pIndex) {
    let toplam = 0;
    pNoteList.map(note => toplam += note[pIndex]);
    let average = toplam / pNoteList.length;
    return average;
}

/**
 *The function that finds students who pass 70 points

 * @param {*} pNotesList 
 */
function passBoundaryNote(pNotesList, pboundary, pIndex) {
    let hardworkingStudent = [];
    pNotesList.map(note => {
        if (note[pIndex] > pboundary)
            hardworkingStudent.push(note);
    })
    return hardworkingStudent;
}
/**
 * Ortalamanin üzerinde Not alanlarin listesi
 * @param {*} pNoteList 
 * @param {*} pLessonIndex 
 * @param {*} pAverageNote 
 */
function findOverAverageStudentList(pNoteList, pLessonIndex, pAverageNote) {
    let overAverageStudent = [];
    pNoteList.map(student => {
        if (student[pLessonIndex] > pAverageNote) {
            overAverageStudent.push(student[STUDENT_NAME] + " " + student[pLessonIndex]);
        }
    })
    return overAverageStudent;
}
/**
 * Ortalamanin üzerinde olan ögrencilerin listesinin konsola yazdirilmasi
 * @param {*} pAverageNote 
 * @param {*} pLessonName 
 * @param {*} pOverAverageStudent 
 */
function renderOverAverageStudent(pAverageNote, pLessonName, pOverAverageStudent) {
    console.log(`Ortalamasi ${pAverageNote} olan ${pLessonName} dersinden ortalamanin üzerinde not alan ögrenciler: ${pOverAverageStudent}`)
}

// Math Average
let mathAverage=findLessonAverage(notes, MATH_INDEX);
console.log(`Math Average: ${mathAverage}`);

// German Avarage
let germanAverage=findLessonAverage(notes, GERMAN_INDEX);
console.log(`German Average: ${germanAverage}`);

//English Average
let englishAverage=findLessonAverage(notes, 3);
console.log(`English Average: ${englishAverage}`);

//Geography Average
let geographyAverage=findLessonAverage(notes, 4);
console.log(`Geography Average: ${geographyAverage}`);

// Students who passed 70 in mathematics
let mathExpert=passBoundaryNote(notes, 70, MATH_INDEX);
console.log(`Students with more than 70 grades in Math: ${mathExpert}`)

// Students who passed 70 in German
let germanExpert=passBoundaryNote(notes, 70, 2);
console.log(`Students with more than 70 grades in German: ${germanExpert}`)

// Students who passed 70 in English
let englishExpert=passBoundaryNote(notes, 70, 3);
console.log(`Students with more than 70 grades in English: ${englishExpert}`)

// Students who passed 70 in Geography
let geographyExpert=passBoundaryNote(notes, 70, 4);
console.log(`Students with more than 70 grades in Geography: ${geographyExpert}`)

//Mathematik Dersinden Ortalamanin Üzerinde Not Alan Ögrencilerin Bulunmasi ve Konsola Yazdirilmasi
let mathOverAverageStudentList = findOverAverageStudentList(notes, MATH_INDEX, mathAverage);
renderOverAverageStudent(mathAverage, "Mathematik", mathOverAverageStudentList);

//Almanca Dersinden Ortalamanin Üzerinde Not Alan Ögrencilerin Bulunmasi ve Konsola Yazdirilmasi
let germanOverAverageStudentList = findOverAverageStudentList(notes, GERMAN_INDEX, germanAverage);
renderOverAverageStudent(germanAverage, "Almanca", germanOverAverageStudentList);

//Ingilizce Dersinden Ortalamanin Üzerinde Not Alan Ögrencilerin Bulunmasi ve Konsola Yazdirilmasi
let englishOverAverageStudentList = findOverAverageStudentList(notes, ENGLISH_INDEX, englishAverage);
renderOverAverageStudent(englishAverage, "Ingilizce", englishOverAverageStudentList);

//Cografya Dersinden Ortalamanin Üzerinde Not Alan Ögrencilerin Bulunmasi ve Konsola Yazdirilmasi
let geoOverAverageStudentList = findOverAverageStudentList(notes, GEO_INDEX, geographyAverage);
renderOverAverageStudent(geographyAverage, "Cografya", geoOverAverageStudentList);

