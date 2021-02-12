document.addEventListener("click", (e) => {
    if (e.target.id === "check") {
        checkCorrectWord();
    }
});

let checkCorrectWord = () => {
    if (mixSylbList.join("") === correctWord.join("")) {
        dragList.style.backgroundColor = "green";
    } else {
        dragList.style.backgroundColor = "red";
    }
}
