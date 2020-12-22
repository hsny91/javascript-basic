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

// Math Average
let mathAverage=findLessonAverage(notes, 1);
console.log(`Math Average: ${mathAverage}`);

// German Avarage
let germanAverage=findLessonAverage(notes, 2);
console.log(`German Average: ${germanAverage}`);

//English Average
let englishAverage=findLessonAverage(notes, 3);
console.log(`English Average: ${englishAverage}`);

//Geography Average
let geographyAverage=findLessonAverage(notes, 4);
console.log(`Geography Average: ${geographyAverage}`);

// Students who passed 70 in mathematics
let mathExpert=passBoundaryNote(notes, 70, 1);
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