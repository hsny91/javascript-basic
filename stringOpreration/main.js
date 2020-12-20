/** 1)  string olarak verilen bir isim ve soyismin sadece bas harflerini Uppercase a cevirin.
 *  2)  0 dan 100 e kadar olan sayilari, bir satirda 10 sayi ve her sayinin arasinda virgul olacak sekilde yazdiriniz (10x10 luk bir     *  kare seklinde)
 *  3)  0 dan 100 e kadar olan prime (asal sayilari) yazdirin (Asal sayilar: sadece kendisine ve 1 e bolunebilen sayilar)
 *   bulunmasi gereken sonuc: 1, 2, 3, 5, 7, 11 ....
 *  4)Kucuk, buyuk, ozel karakterler ve sayilardan olusan 8 ile 16 (hane) uzunluklari arasinda guvenli 50 adet sifre olusturunuz. 
 *  5)  Asagidaki sekli programlama yapilarini kullanarak cizdiriniz.
​
          *
          **
          ***
          ****
          *****
          ******
*/

// String olarak verilen bir isim ve soyismin sadece bas harflerini Uppercase'e cevirme.
const nameSurname = "asik veysel";
let nameSurnameList = nameSurname.split(" ");
for (let indexOfList = 0; indexOfList < nameSurnameList.length; indexOfList++) {
    nameSurnameList[indexOfList] = nameSurnameList[indexOfList].charAt(0).toUpperCase() + nameSurnameList[indexOfList].slice(1);
}
let upperFirstLetter = nameSurnameList.join(" ");
console.log(upperFirstLetter);

// 10X10 Matris
let numberList = [];
for (var i = 1; i <= 100; i++) {
    numberList.push(i);
    if (i % 10 == 0) {
        numberList.push("\n")
    }
}
console.log(numberList.join(','));

// Asal sayilari bulma
const MAX_BOUNDARY = 100;
for (let primeNumber = 2; primeNumber < MAX_BOUNDARY; primeNumber++) {
    let controlPrime = true;
    for (let divisorNumber = 2; divisorNumber < primeNumber; divisorNumber++) {
        if (primeNumber % divisorNumber == 0) {
            controlPrime = false;
            break;
        }
    }
    if (controlPrime) {
        console.log(primeNumber);
    }
}

// password olusturma 
const NUMBER_OF_PASSWORD = 50;
const PASSWORD_MAX = 8;
const PASSWORD_MIN = 16;
const charsetLetter = "abcdefghiklmnopqrstuvwxyz";
const charsetLetterCapital="ABCDEFGHIJKLMNOPQRSTUVWXTZ";
const charset= ".!'^+%&/*()=?_";
const charsetNumber= "0123456789";
for (let index = 0; index < NUMBER_OF_PASSWORD; index++) {
    let passwordLength = Math.floor(Math.random() * (PASSWORD_MAX - PASSWORD_MIN)) + PASSWORD_MIN;
    let randomPassword ="";
for (let passwordIndex = 1; passwordIndex < passwordLength; passwordIndex++) {
    if (passwordIndex % 3 == 0) {
        let randomNumber = Math.floor(Math.random() * charset.length);
        randomPassword += charset.charAt(randomNumber)
    } else if (passwordIndex % 4 == 0) {
        let randomNumber = Math.floor(Math.random() * charsetLetterCapital.length);
        randomPassword += charsetLetterCapital.charAt(randomNumber)
    } else if (passwordIndex % 5 == 0) {
        let randomNumber = Math.floor(Math.random() * charsetNumber.length);
        randomPassword += charsetNumber.charAt(randomNumber)
    } else {
        let randomNumber = Math.floor(Math.random() * charsetLetter.length);
        randomPassword += charsetLetter.charAt(randomNumber)
    }
}
console.log(`Password: ${randomPassword}`);
}

// yildiz olusturma 
let starList = [];
const MAX_STAR = 6;
const YILDIZ = "*";
for (let startIndex = 0; startIndex < MAX_STAR; startIndex++) {
    starList.push(YILDIZ)
    console.log(starList.join(""))
}




