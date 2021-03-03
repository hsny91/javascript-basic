

const carParts = ["crk725", "karb789", "phyt234", "mech256", "tesl345", "cabr234"]

// convert to upperCase
function convertToUpperCase(pPartList) {
    let upperCasePartList = pPartList.map(part => part.toUpperCase());
    console.log(upperCasePartList);
    return upperCasePartList;
}
//Numbers will be subtracted from part names
function subtractedNumbers(pPartList) {
    let subtractedNumberList = pPartList.map(part => part.replace(/[0-9]/g, ''));
    console.log(subtractedNumberList);
    return subtractedNumberList;

}

function convertToReverse(pPartList) {
    let reversePartList = pPartList.map(part => part.split("").reverse().join(""));
    console.log(reversePartList);
    return reversePartList;
}
convertToUpperCase(carParts);
convertToReverse(carParts);
subtractedNumbers(carParts);