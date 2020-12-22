//1. Parca isimleri büyük harflere cevrilecektir.
//2. Parca isimlerinden sayilar cikartilacaktir.
//3. Parca isimleri tersine cevrilecektir.
//4. Her parcanin basina KEREMAG_ eklenecektir.
//5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. (Date nesnesini kullanarak tarih ve saat konulmasi yeterlidir)

const carParts = ["crk725", "karb789", "phyt234", "mech256", "tesl345", "cabr234"]

// convert to upperCase
function convertToUpperCase(pPartList) {
    let upperCasePartList = pPartList.map(part => part.ToUpperCase());
    return upperCasePartList;
}
