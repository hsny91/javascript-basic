/**
 * Sürüklenecek elemana ilk kez tiklandiginda elemanin IDsini alir ve degiskene atar
 */

document.addEventListener("drag", (e) => {
    if (e.target.className === "drag-item") {
        setDragLeave(e)
    }
});


document.addEventListener("dragover", (e) => {
    if (e.target.className === "drag-item") {
        setDraggedOver(e);
    }
})

/**
 * drop fonksiyonunun tetiklenmesini saglar
 */
document.addEventListener("drop", (e) => {
    if (e.target.className === "drag-item") {
        e.preventDefault();
        dropped();
    }
})

let setDraggedOver = (event) => {
    event.preventDefault();
    draggedOver = event.target.id;
}

let setDragLeave = (event) => {
    dragLeave = event.target.id;
}

/**
 * birakilan hecenin birakildigi bölgeye girmesini, birakilan bölgedeki hecenin ise kaydirilmasini saglar
 */
let dropped = () => {
    let indexDragLeave = mixSylbList.indexOf(dragLeave)
    let indexDragOver = mixSylbList.indexOf(draggedOver)
    console.log(indexDragLeave)
    console.log(indexDragOver)
    mixSylbList.splice(indexDragLeave, 1)
    mixSylbList.splice(indexDragOver, 0, dragLeave)
    createUI(mixSylbList)
}