let suspectWagon = Math.floor((Math.random() *10)+1);
alert(suspectWagon);
for (let selectionRepeatNumber = 1; selectionRepeatNumber <= 4; selectionRepeatNumber++) {
    let chosenWagon = prompt("Chose Wagon");
    if (selectionRepeatNumber == 4 && chosenWagon != suspectWagon) {
        alert(`You can not find Suspect. The suspect is in wagon number ${ suspectWagon } `)
    } else {
        if (chosenWagon == suspectWagon) {
            alert(`You can find suspect. Yor scorre 100-25*${selectionRepeatNumber-1} `);
            break;
        } else if (chosenWagon < suspectWagon) {
            alert("FORWARD TO THE BACK WAGON")
        } else if (chosenWagon > suspectWagon) {
            alert("FORWARD TO THE FRONT WAGON")
        }
    }
}