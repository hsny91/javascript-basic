
 const genRandom = (array) => {
    base = array.slice()
    randomized = array.sort(() => Math.random() - 0.5)
    if (randomized.join("") !== base.join("")) {
        renderItems(randomized)
    } 
    else {
        genRandom()
    }
}
 
document.addEventListener("drag", (event) => {
    if (event.target.className === "col syllable") {
        setDragging(event);
    }
});

document.addEventListener("dragover", (event) => {
    if (event.target.className === "col syllable") {
        setDraggedOver(event);
    }
});

document.addEventListener("drop", (event) => {
    if (event.target.className === "col syllable") {
        compare(event);
    }
});

let compare = (event) => {
    let index1 = randomized.indexOf(dragging);
    let index2 = randomized.indexOf(draggedOver);
    randomized.splice(index1, 1)
    


let setDraggedOver = (event) => {
    event.preventDefault();
    draggedOver = event.target.id;
}

let setDragging = (event) => {
    dragging = event.target.id;
}








/**
 * const genRandom = (array) => {
    base = array.slice()
    randomized = array.sort(() => Math.random() - 0.5)
    if (randomized.join("") !== base.join("")) {
        renderItems(randomized)
    } else {
        genRandom()
    }
}
 */