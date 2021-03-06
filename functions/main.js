
let partList=["Radyatör23", "Sanziman34", "Filtre3", "Direksiyon5", "Kaporta2", "ayna09"];

/**
 * convert to array element to upperCase 
 * @param {*} pPartList 
 */
function convertToUpperCase(pPartList){
let upperCasePartList=pPartList.map(part=>part.toUpperCase())
return upperCasePartList;
}

/**
 * throw number
 * @param {*} pPartList 
 */
function throwNumber(pPartList){
    let throwNumberList=pPartList.map(part=>part.replace(/[0-9]/g,""))
    return throwNumberList;
}

/**
 * reverse arrays element
 * @param {*} pPartList 
 */
function reverseList(pPartList){
    let reverseList=pPartList.map(part=>part.split("").reverse().join(""))
    return reverseList;
}
/**
 * add array elemets Keremag
 * @param {*} pPartList 
 */
function addName(pPartList){
    let addNameList=pPartList.map(part=>"KEREMAG_"+part)
    return addNameList;
}

let upperCasePartList=convertToUpperCase(partList);
let throwNumberList=throwNumber(upperCasePartList);
let reversePartList=reverseList(throwNumberList);
let addNammeList=addName(reversePartList);

console.log(addNammeList);
