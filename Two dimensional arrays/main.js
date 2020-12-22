const notes = [
    ["Hans", 80, 90, 10, 50], 
    ["Ulrich", 94, 36, 76, 74], 
    ["Olaf", 30, 60, 34, 78], 
    ["Otto", 60, 60, 78, 23],
    ["Tina", 71, 45, 89, 100],
    ["Rosalina", 40, 56, 82, 40],
    ["Urs", 49, 45, 56, 67],
    ["Monika", 49, 42, 16, 62]
];/**
 * 
 * @param {*} pNoteList 
 * @param {*} pIndex 
 * 
 * finding the Avarage note function
 */
function findLessonAvarage(pNoteList,pIndex){
    let toplam=0; 
    pNoteList.map(note=>toplam+=note[pIndex]);
    let avarage=toplam/pNoteList.length;
    console.log(avarage)
    return avarage;
}
// Math avarage
findLessonAvarage(notes,1);



