/** 1)  string olarak verilen bir isim ve soyismin sadece bas harflerini Uppercase a cevirin.
    3)  0 dan 100 e kadar olan prime (asal sayilari) yazdirin (Asal sayilar: sadece kendisine ve 1 e bolunebilen sayilar)
         bulunmasi gereken sonuc: 1, 2, 3, 5, 7, 11 ....
    5)  Asagidaki sekli programlama yapilarini kullanarak cizdiriniz.
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

//Asal sayilari bulma
const MAX_BOUNDARY = 100;
for (let minBoundary = 0; minBoundary < MAX_BOUNDARY; minBoundary++) {

}
// yildiz 
const MAX_NUMBER = 6;
for (let i = 0; i < MAX_NUMBER; i++) {
    for (let x = 0; x<= i; x++) {
        console.log("*")
    }
    console.log("\n")
    
}
// for(i=1;i<=10;i++)
// {
// for(a=1;a<=i;a++)
// {
// document.write(“*“);
// }
// document.write(“<br>“);

// }