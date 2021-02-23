const carParts = ["crk725", "karb789", "phyt234", "mech256", "tesl345", "cabr234"]
const autoList = [];

let MAIN_METHOD = (pAutoName) => {
    let capitalizName = CAPITALIZE_TO_AUTO_NAME(pAutoName);
    let revereseName = REVERSE_NAME(capitalizName);
    let addCompany = ADD_COMPANY(revereseName);
    let matches = Match(addCompany);
    let addDate = ADD_DATE_TO_THE_END(matches);
    autoList.push(addDate);
}

// Parca isimleri büyük harflere cevrilecektir.
const CAPITALIZE_TO_AUTO_NAME = (pName) => {
    return pName.toUpperCase();
}
// Parca isimlerinden sayilar cikartilacaktir.
const Match = (string) => {
    string = string.replace(/[0-9]/g, '');
    return string;
}
// Parca isimleri tersine cevrilecektir.
const REVERSE_NAME = (pName) => {
    return pName.split("").reverse().join("");
}
// Her parcanin basina KEREMAG_ eklenecektir.
const ADD_COMPANY = (pName) => {
    //pName.padStart(pName.length+8, "KEREMAG_"); Farklı bir ekleme yöntemi;
    return "KEREMAG__" + pName;
}

// Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir.
const ADD_DATE_TO_THE_END = (pName) => {
    let addDate = pName + "__" + Date();
    return addDate;
}
//Tüm dizide bu fonksiyonun uygulanmasını sağlıyoruz.
for (let index = 0; index < carParts.length; index++) {
    MAIN_METHOD(carParts[index])
}

