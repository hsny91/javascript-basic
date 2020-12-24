//1. Parca isimleri büyük harflere cevrilecektir.
//2. Parca isimlerinden sayilar cikartilacaktir.
//3. Parca isimleri tersine cevrilecektir.
//4. Her parcanin basina KEREMAG_ eklenecektir.
//5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. (Date nesnesini kullanarak tarih ve saat konulmasi yeterlidir)

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
//conver to reverse
function convertToReverse(pPartList) {
    let reversePartList = pPartList.map(part => part.split("").reverse().join(""));
    console.log(reversePartList);
    return reversePartList;
}
convertToUpperCase(carParts);
convertToReverse(carParts);
subtractedNumbers(carParts);