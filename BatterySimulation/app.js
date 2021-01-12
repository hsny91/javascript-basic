const counterPlus = document.querySelector("#counter-plus");
const counterMinus = document.querySelector("#counter-minus");
const lowestRow = document.querySelector("#lowest-row");
const lowRow = document.querySelector("#low-row");
const highRow = document.querySelector("#high-row");
const highestRow = document.querySelector("#highest-row")



let counter = 0;

counterPlus.addEventListener("click", (e) => {
    controlCounterIncrease();
    color();
})
counterMinus.addEventListener("click", (e) => {
    controlCounterDecrease();
    color()
})


function color() {
    if (counter === 0) {
        lowestRow.style.background = "white";
        lowRow.style.background = "white";
        highRow.style.background = "white";
        highestRow.style.background = "white";
    } else if (counter === 25) {
        lowestRow.style.background = "red";
        lowRow.style.background = "white";
        highRow.style.background = "white";
        highestRow.style.background = "white";
    } else if (counter === 50) {
        lowestRow.style.background = "orange";
        lowRow.style.background = "orange";
        highRow.style.background = "white";
        highestRow.style.background = "white";
    } else if (counter === 75) {
        lowestRow.style.background = "yellow";
        lowRow.style.background = "yellow";
        highRow.style.background = "yellow";
        highestRow.style.background = "white";
    } else if (counter === 100) {
        lowestRow.style.background = "green";
        lowRow.style.background = "green";
        highRow.style.background = "green";
        highestRow.style.background = "green";
    }

}

function controlCounterIncrease() {
    if (counter < 100) {
        document.querySelector(".counter-item").innerHTML = counter = counter + 25;
    }

}

function controlCounterDecrease() {
    if (counter > 0) {
        document.querySelector(".counter-item").innerHTML = counter = counter - 25;
    }

}





// const plusButton=document.querySelector("#counter-plus");
// const minusButton=document.querySelector("#counter-minus");
// const batteryLevel=document.querySelector("#battery-level");
// const batteryLevelShow=document.querySelector("#battery-show");

// let counterBattery=0;

// plusButton.addEventListener('click',(e) => { 
//     x();   
//     increaseBattery();
//     showBatteryLevel();
//     controlBatteryLevel();
 
   
// });

// minusButton.addEventListener('click',(e) => {    
//     decreaseBattery();
//     showBatteryLevel();
// });



// const increaseBattery=()=>{counterBattery+=25};
// const decreaseBattery=()=>{counterBattery-=25};
// const showBatteryLevel=()=>{batteryLevel.innerHTML=counterBattery};
// const controlBatteryLevel=()=>{if(counterBattery==100)batteryLevelShow.innerHTML="doldu"}
// const y=()=>{counterBattery=c}
  

// function x(){
//     if(counterBattery==100){
//         plusButton.removeEventListener('click', increaseBattery)   
//     }
           
      
//     }
