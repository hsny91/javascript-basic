const invokeMe = () => console.log('I live here outside the scope');
const alsoInvokeMe = () => console.log('I also live outside the scope'); 
const plusButton=document.querySelector("#counter-plus");
const minusButton=document.querySelector("#counter-minus");

plusButton.addEventListener('click',(e) => {    
    invokeMe();
    alsoInvokeMe();    
});

minusButton.addEventListener('click',(e) => {    
    invokeMe();
    alsoInvokeMe();    
});

function decreaseBattery(){

}