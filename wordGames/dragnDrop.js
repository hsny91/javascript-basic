/**
 * Sürüklenecek elemana ilk kez tiklandiginda elemanin IDsini alir ve degiskene atar
 */

document.addEventListener("drag", (e) => {
    if (e.target.className === "drag-item") {
        setDragging(e)
    }
});

/**
 * Sürüklenenen elemanin birakilacagi alanda bulunan elemanin IDsini alir ve degiskene atar 
 */

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

let setDragging = (event) => {
    dragging = event.target.id;
}

/**
 * birakilan hecenin birakildigi bölgeye girmesini, birakilan bölgedeki hecenin ise kaydirilmasini saglar
 */
let dropped = () => {
    let indexDragging = mixSylbList.indexOf(dragging)
    let indexDragOver = mixSylbList.indexOf(draggedOver)
    mixSylbList.splice(indexDragging, 1)
    mixSylbList.splice(indexDragOver, 0 , dragging)
    createUI(mixSylbList)
}

