/**
 * Okul Kayit Sistemi
 * 1.Ekranin sol tarafinda bir form olusturulacak,
 * 2.Forma girilen bilgiler kategorisine göre kontrol edilecek (rakam veya alfabetik kontrol),
 * 3.Form'a bir ekle butuno koyulacak,
 * 4.Butona tiklandiginda Form bilgileri bir arraye atilacak, 
 * 5.Array'de tutulan bilgiler ekranin sag tarafina yazdirilacak,
 * 6.Listenin sonuna toplam ögrenci sayisi yazdirilacak.
 */
const mainElement = document.querySelector("#app");
let counter = 0;
let firstNumber, secondNumber, resultNumber;


function createPlayerList() {
    return `
    <div>
    <form id="player-info" class="needs-validation" novalidate>
                <div class="form-group">
                    <input type="text" class="form-control" id="player-name"
                        placeholder="Player Name">
                </div>
                    <button id="add-player"  class="btn btn-primary">Add Player</button>
            </form>
        </div>
            ${createPlayerListTable()}
    `
}


function createStartUI() {
    mainElement.innerHTML = createPlayerList()
}
createStartUI()
///////***********///////////

function createPlayerListTable() {
    let newList = [];
    for (let i = 0; i < localStorage.length; i++) {
        let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
        newList.push(item);
    }
    return newList.map((players) =>
        players.map((player, index) => {
            return `
            <div>
           <table class="player-table">
    <tbody>
      <tr>
        <td>${index+1}.Player:</td>
        <td id="${player.playerName}" class="player-name">${player.playerName}</td>
        <td class="player-name">${player.playerPuan}</td>
      </tr>
    </tbody>
  </table>
  </div>
    `
        })).join("")
}

mainElement.addEventListener("click", function (event) {
    if (event.target.className === "player-name") {
        refreshUI()
    }
})

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

function createGameArea() {
    counter++
    firstNumber = Math.floor(Math.random() * 10);
    secondNumber = Math.floor(Math.random() * 10);
    return createQuestion(firstNumber, secondNumber, counter)
}


function refreshUI() {
    if (counter < 3) {
        mainElement.innerHTML = createGameArea()
    } else {
        createStartUI();
    }
}




mainElement.addEventListener("click", (event) => {
    let playerNameArea = document.querySelector("#player-name");
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


mainElement.addEventListener('keypress', (event) => {

    resultNumber = firstNumber * secondNumber;
    let resultNumberArea = document.querySelector("#result-number");
    if (event.key === 'Enter') {
        if (resultNumber == resultNumberArea.value) {
            //resultNumberArea.value = ""
            refreshUI()
        } else {
            alert("nein")
        }
    }
})