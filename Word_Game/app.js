
let base, randomized, dragging, draggedOver;
let isRight = 'Not In Order!';

let Eleman=document.querySelector(".col-sm")




Eleman.addEventListener("dragover",(event)=>{
  event.preventDefault();
});

Eleman.addEventListener("mousedown",(event)=>{
document.getElementById(event.target.id).style.backgroundColor="tomato"
});


Eleman.addEventListener("dragstart",(event)=>{
  event.dataTransfer.setData("Text", event.target.id);
});


const setDraggedOver = (e) => {
  e.preventDefault();
  draggedOver = Number.isNaN(parseInt(e.target.innerText)) ? e.target.innerText : parseInt(e.target.innerText)
}

const setDragging = (e) =>{
  dragging = Number.isNaN(parseInt(e.target.innerText)) ? e.target.innerText : parseInt(e.target.innerText)
}

const compare = (e) =>{
  var index1 = randomized.indexOf(dragging);
  var index2 = randomized.indexOf(draggedOver);
  randomized.splice(index1, 1)
  randomized.splice(index2, 0, dragging)
 
  isRight = randomized.join("") === base.join("") 
    ? 'In Order!': 'Not In Order!'
 
 
};