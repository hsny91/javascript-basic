/*Oto yedek parca isi yapan Kerem Bey, toptancilardan aldigi yedek parcalari, kendi envanterine kendi sistemi ile kaydedip, bu parcalari depoya yerlestirirken bir takim süreclerden gecirmek istemektir. Bu süreclerin her biri bir fonksiyon olarak tanimlanacaktir.
Araba parcalari ise bir array icinde verilecektir.
Kerem Bey'in istedigi program, asagiaki durumlari karsilamasi gerekmektedir.
1. Parca isimleri büyük harflere cevrilecektir.
2. Parca isimlerinden sayilar cikartilacaktir.    -
3. Parca isimleri tersine cevrilecektir.
4. Her parcanin basina KEREMAG_ eklenecektir.
5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. (Date nesnesini kullanarak tarih ve saat konulmasi yeterlidir)*/

let arabaParcalari = [
  "fren2",
  "lastik4",
  "tekerlek",
  "tampon",
  "camurluk",
  "aks",
];
let parcaList = arabaParcalari.join(",");

let turnUppercase = (pString) => pString.toUpperCase(); //buyuk harfe cevrildi
let turnReverse = (pString) => pString.split("").reverse().join("");
/**
 * KEREMAG_ ekleyen fonksiyon
 * @param {*} pString
 */
function addWord(pString) {
  for (index = 0; index < arabaParcalari.length; index++) {
    pString[index] = "KEREMAG_" + pString[index];
  }
  return pString;
}
/**
 * icerisindeki numaralari silen fonksiyon
 * @param {*} pString
 */
function cancelNumbers(pString) {
  for (index = 0; index < pString.length; index++) {
    pString[index] = pString[index].replace(/[0-9]/g, "");
  }
  return pString;
}
/**
 * Tarih ekleyen fonksiyon
 * @param {*} pString
 */
function addDate(pString) {
  for (index = 0; index < pString.length; index++) {
    pString[index] = pString[index] + "  " + Date();
  }
  return pString;
}

let uppercaseList = turnUppercase(parcaList);
let reverseList = turnReverse(uppercaseList).split(",");
let addList = addWord(reverseList);
let cancelList = cancelNumbers(addList);
let resultList = addDate(cancelList);
//sonucu yazdir
console.log(resultList);