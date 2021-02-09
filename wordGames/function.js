let containerDiv = document.querySelector('#list')
let buttonGroupDiv=document.querySelector('#button-group');
let base, randomized, dragging, draggedOver;
let isRight = 'Not In Order!';

const genRandom = (array) => {
    base = array.slice()
    randomized = array.sort(() => Math.random() - 0.5)
        renderItems(randomized)
    }

let renderHeader = () => {
    document.querySelector('#isRight').innerHTML = isRight
}

let renderBody = (pList) => {
    return pList.map((word) =>{
      return `<div class="col syllable" id="${word}" draggable="true">${word}</div>`
     } )
  
}
let renderButton=()=>{
    return `
    <div class="col">
    <button type="button" id="random" class="btn btn-outline-success">Random</button>
    </div>
    <div class="col">
    <button type="button" id="check" class="btn btn-outline-primary">Check</button>
    </div>
    `
}
const renderItems = (pList) => {
    renderHeader();
    containerDiv.innerHTML = renderBody(pList);
    buttonGroupDiv.innerHTML=renderButton();
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
    renderItems(randomized)
};


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