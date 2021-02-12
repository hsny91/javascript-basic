/**
 * UI elemanlarini olustururlar
*/

function addSyllables(pSyllableList) {
    return pSyllableList.map(syllable => {
      return `<div class="drag-item" id="${syllable}" draggable="true">${syllable}</div>`
    }).join("")
  }
  
  function createButtons() {
    return `
        <button id="check">CHECK</button>
        <button id="next-word">NEXT</button>
      `
  }