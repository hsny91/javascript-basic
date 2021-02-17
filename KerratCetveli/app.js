/**
 * Okul Kayit Sistemi
 * 1.Ekranin sol tarafinda bir form olusturulacak,
 * 2.Forma girilen bilgiler kategorisine göre kontrol edilecek (rakam veya alfabetik kontrol),
 * 3.Form'a bir ekle butuno koyulacak,
 * 4.Butona tiklandiginda Form bilgileri bir arraye atilacak, 
 * 5.Array'de tutulan bilgiler ekranin sag tarafina yazdirilacak,
 * 6.Listenin sonuna toplam ögrenci sayisi yazdirilacak.
 */

let counter = 0;
let firstNumber, secondNumber, resultNumber;

let studentName = "";

mainElement.addEventListener("click", (event) => {
    let playerNameArea = document.querySelector("#input-player");
    event.preventDefault();
    let deneme = []
    if (event.target.id === "add-player") {
        deneme.push({
            playerName: playerNameArea.value,
            playerPuan: 0
        })
        let id = deneme[0].playerName
        localStorage.setItem(id, JSON.stringify(deneme));
        createStartUI();
    }
})

mainElement.addEventListener("click", function (event) {
    if (event.target.className === "player-name") {
        refreshUI()
        studentName = event.target.id;
    }
})

function refreshUI() {
    if (counter < 1) {
        mainElement.innerHTML = createGameArea()
    } else {
        counter = 0;
        createStartUI();
        //localstoragae
    }
}


function createGameArea() {
    counter++
    firstNumber = Math.floor(Math.random() * 10);
    secondNumber = Math.floor(Math.random() * 10);
    return createQuestion(firstNumber, secondNumber, counter)
}


function createQuestion(pFirstNumber, pSecondNumber, pCounter) {
    return `<div id="calculation-place">
    <div id="point">Question</div>
    <div id="sayi">Question-${pCounter}</div>
    <span id="first-number">${pFirstNumber}</span>
    <span id="cross-mark">x</span>
    <span id="second-number">${pSecondNumber}</span>
    <span id="equal-mark">=</span>
    <input id="result-number"></input>
   </div>
   <div id="timer"></div>
    `
}




mainElement.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkResult();
    }
})

function checkResult() {
    let resultNumberArea = document.querySelector("#result-number");
    let puan = 0;
    resultNumber = firstNumber * secondNumber;
    if (resultNumber == resultNumberArea.value) {
        puan += 10
        refreshPuan(puan)
        refreshUI()
    } else {
        puan -= 5
        refreshPuan(puan)
        refreshUI()
    }
}

function refreshPuan(puan) {
    let activePerson = []
    activePerson = JSON.parse(localStorage.getItem(studentName));
    activePerson[0].playerPuan += puan
    console.log(activePerson)
    localStorage.setItem(studentName, JSON.stringify(activePerson));
}