const AnimalList = ["cow", "sheep", "chicken", "pig", "cow", "cow", "pig", "sheep", "cow", "sheep", "cow", "cow", "chicken"];
const chickenLeg = 2;
const pigLeg = 4;
const sheepLeg = 4;
const cowLeg = 4;
let numberOfCow = 0,
    numberOfShepp = 0,
    numberOfChicken = 0,
    numberOfPig = 0;

for (i = 0; i < AnimalList.length; i++) {
    if (AnimalList[i].includes("cow")) {
        numberOfCow++
    }
    else if (AnimalList[i].includes("chicken")) {
        numberOfChicken++
    }
    else if (AnimalList[i].includes("pig")) {
        numberOfPig++
    }
    else if (AnimalList[i].includes("sheep")) {
        numberOfShepp++
    }

}
let helalBacakSayisi = numberOfCow * cowLeg + numberOfShepp * sheepLeg + numberOfChicken * chickenLeg;
console.log(`Helal bacak sayisi: ${helalBacakSayisi}`);

