var list = document.getElementById('list')
var base, randomized, dragging, draggedOver;
var isRight = 'Not In Order!';

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
const renderItems = (data) => {
    renderHeader();
    list.innerHTML = renderBody(data);
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
const compare = (e) => {
    var index1 = randomized.indexOf(dragging);
    var index2 = randomized.indexOf(draggedOver);
    randomized.splice(index1, 1)
    randomized.splice(index2, 0, dragging)

    isRight = randomized.join("") === base.join("") ?
        'In Order!' : 'Not In Order!'

    renderItems(randomized)
};


const setDraggedOver = (e) => {
    e.preventDefault();
    draggedOver = Number.isNaN(parseInt(e.target.innerText)) ? e.target.innerText : parseInt(e.target.innerText)
}

const setDragging = (e) => {
    dragging = Number.isNaN(parseInt(e.target.innerText)) ? e.target.innerText : parseInt(e.target.innerText)
}

// genRandom([0, 1, 2, 3, 4, 5, 6])
genRandom(['hus', 'ni', 'ye'])