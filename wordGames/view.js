let renderHeader = () => {
    document.querySelector('#isRight').innerHTML = isRight
}

let renderBody = (pList) => {
    return pList.map((word) =>{
      return `<div class="col syllable" id="${word}" draggable="true">${word}</div>`
     })
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