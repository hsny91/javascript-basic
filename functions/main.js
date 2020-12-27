/**
 * 1. Parca isimleri büyük harflere cevrilecektir.
2. Parca isimlerinden sayilar cikartilacaktir.
3. Parca isimleri tersine cevrilecektir.
4. Her parcanin basina KEREMAG_ eklenecektir.
5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. (Date nesnesini kullanarak tarih ve saat konulmasi yeterlidi
 */
let partList=["Radyatör23", "Sanziman34", "Filtre3", "Direksiyon5", "Kaporta2", "ayna09"];

/**
 * convert to array element to upperCase 
 * @param {*} pPartList 
 */
function convertToUpperCase(pPartList){
let upperCasePartList=pPartList.map(part=>part.toUpperCase())
return upperCasePartList;
}
function throwNumber(pPartList){
    let throwNumberList=pPartList.map(part=>part.replace(/[0-9]/g,""))
    return throwNumberList;
}
function reverseList(pPartList){
    let reverseList=pPartList.map(part=>part.split("").reverse().join(""))
    return reverseList;
}

let upperCasePartList=convertToUpperCase(partList);
let throwNumberList=throwNumber(upperCasePartList);
let reverseList=reverseList(throwNumberList);

console.log(reverseList(throwNumberList));
