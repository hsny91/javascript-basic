/**
 * Bir sonraki hece grubunun kelime listesinden rastgele secilip getirilmesini saglar
 */
document.addEventListener("click", (e) => {
    if (e.target.id === "next-word") {
        generateRandomWord();
    }
});

/**
 * Hece grubunun dogru siralanip siralanmadigini denetler
 */

let generateRandomWord = () => {
    dragList.style.backgroundColor = "white";
    let index = Math.floor(Math.random() * words.length)
    let word = words[index].syllables
    shuffleSyllableList(word);
}