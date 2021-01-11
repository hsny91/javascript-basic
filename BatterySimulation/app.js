
const plusButton=document.querySelector("#counter-plus");
const minusButton=document.querySelector("#counter-minus");
const batteryLevel=document.querySelector("#battery-level");
const batteryLevelShow=document.querySelector("#battery-show");

let counterBattery=0;

plusButton.addEventListener('click',(e) => {    
    increaseBattery();
    showBatteryLevel();
    controlBatteryLevel();
   
});

minusButton.addEventListener('click',(e) => {    
    decreaseBattery();
    showBatteryLevel();
});



const increaseBattery=()=>{counterBattery+=25};
const decreaseBattery=()=>{counterBattery-=25};
const showBatteryLevel=()=>{batteryLevel.innerHTML=counterBattery};
const controlBatteryLevel=()=>{if(counterBattery==100)batteryLevelShow.innerHTML="doldu"}
  