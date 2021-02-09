let containerDiv = document.querySelector('#list')
let base, randomized, dragging, draggedOver;
let isRight = 'Not In Order!';

const genRandom = (array) => {
    base = array.slice()
    randomized = array.sort(() => Math.random() - 0.5)
    if (randomized.join("") !== base.join("")) {
        renderItems(randomized)
    } else {
        genRandom()
    }
}
let renderHeader = () => {
    document.querySelector('#isRight').innerHTML = isRight
}
let renderBody = (pList) => {
    let syllableList = "";
    pList.map((word) =>
        syllableList += `<div class="col syllable" id="${word}" draggable="true">${word}</div>`
    )
    return syllableList;
}
const renderItems = (pList) => {
    renderHeader();
    containerDiv.innerHTML = renderBody(pList);
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
const compare = (event) => {
    let index1 = randomized.indexOf(dragging);
    let index2 = randomized.indexOf(draggedOver);
    randomized.splice(index1, 1)
    randomized.splice(index2, 0, dragging)

    isRight = randomized.join("") === base.join("") ?
        'In Order!' : 'Not In Order!'

    renderItems(randomized)
};


let setDraggedOver = (event) => {
    event.preventDefault();
    draggedOver = event.target.id;
}

let setDragging = (event) => {
    dragging = event.target.id;
}


genRandom(['hus', 'ni', 'ye'])
