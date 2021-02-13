/**
 * Hece arrayini karistirir
 * @param {*} pSyllableList 
 */
function shuffleSyllableList(pSyllableList) {
    correctWord = pSyllableList.slice()
    mixSylbList = pSyllableList.sort(() => Math.random() - 0.5)
    createUI(mixSylbList)
}
/**
 * UI'i olusturur
 * @param {*} pMixSylbList 
 */
