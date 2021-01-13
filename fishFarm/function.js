
  
/**
 * stok miktari belli bir kg ustunde olanlari bulan fonksiyon
 * @param {*} parray
 * @param {*} pKg
 */
function findBiggerThan(parray, pKg) {
  let result = parray.filter(
    (stockAmount) => stockAmount.stockVolumeInKg > pKg
  );
  return result;
}

/**
 * verilen bir arrayde baligin ismini veren fonksiyon
 * @param {*} pArray
 */
function showName(pArray) {
  pArray.map((type) => console.log(type.fishType));
}

/**
 * belli bir fiyat araligindeki baliklari bulan fonksiyon
 * @param {*} pArray
 * @param {*} pLower
 * @param {*} pUpper
 */
function findBetween(pArray, pLower, pUpper) {
  let cheaperFish = pArray.filter(
    (cheapFish) => (cheapFish.price < pUpper) & (cheapFish.price > pLower)
  );
  return cheaperFish;
}

/**
 * Sadece Bern'de ve kis sezonu satilan baliklari bulan fonksiyon
 * @param {*} pArray
 */
function findBernWinter(pArray) {
  let winterInBern = pArray.filter(
    (winterBern) =>
      (winterBern.season == "Winter") & winterBern.saleLocations.includes("BE")
  );
  return winterInBern;
}

/**
 * son kullanma tarihini bulan fonksiyon
 * @param {*} pArray
 */
function findExpirationDate(pArray) {
  let newList = [];
  pArray.map((fish) => {
    fish.entryDate.setDate(fish.entryDate.getDate() + fish.durationInDays);
    newList.push({ PullDate: fish.entryDate, fishType: fish.fishType });
  });
  return newList;
}

/**
 * AB den gelen ve 10 fr ucuz olan baliklari veren fonksiyon
 * @param {*} pArray
 * @param {*} pLimit
 */
function findFromAB(pArray, pLimit) {
  let fromAB = pArray.filter(
    (type) =>
      (type.originCountry == "Poland" ||
        type.originCountry == "France" ||
        type.originCountry == "Italy" ||
        type.originCountry == "GREECE" ||
        type.originCountry == "Spain") &
      (type.price < pLimit)
  );
  return fromAB;
}

/**
 * toplam balik stogunu veren fonksiyon
 * @param {*} pArray
 */
function findTotalStock(pArray) {
  let stokckList = pArray.map((type) => type.itemWeightInGrams);
  return stokckList.reduce((a, b) => {
    return a + b;
  });
}
/**
 * en pahali baliklari veren fonksiyon
 * @param {*} pArray
 */
function findExpensiveFish(pArray) {
  let highPrice = Math.max.apply(
    Math,
    pArray.map(function (fish) {
      return fish.price;
    })
  );
  let highPriceList = pArray.filter((fish) => fish.price == highPrice);
  return highPriceList;
}

/**
 * en uzun sureli durabilen baliklari veren fonksiyon
 * @param {*} pArray
 */
function findLongerDuration(pArray) {
  let durationDay = Math.max.apply(
    Math,
    pArray.map(function (fish) {
      return fish.durationInDays;
    })
  );
  let durationDayList = pArray.filter(
    (fish) => fish.durationInDays == durationDay
  );
  return durationDayList;
}

/**
 * ulke adini veren fonksiyon
 * @param {*} pArray
 */
function showCountry(pArray) {
  pArray.map((type) => console.log(type.originCountry));
}

/**
 * kis ve sonbahar sezonu icin fransiz kantonundakileri veren fonksiyon
 * @param {*} pArray
 */
function findSwissPrice(pArray) {
  let swissPrice = pArray.filter(
    (swiss) =>
      (swiss.season == "Winter" || swiss.season == "Autumn") &
      swiss.saleLocations.includes("VD")
  );
  let swissPriceList = swissPrice.map((type) => type.price);
  return swissPriceList;
}

/**
 * ortalamayi veren fonksiyon
 * @param {*} pArray
 */
function findAverage(pArray) {
  let sum = pArray.reduce((a, b) => {
    return a + b;
  });
  let average = sum / pArray.length;
  return average;
}
/**
 * ticinodaki toplam stogu veren fonksiyon
 * @param {*} pArray
 */
function findTicinoStock(pArray) {
  let saleInTicino = pArray.filter((ticino) =>
    ticino.saleLocations.includes("TI")
  );
  let ticinoStokckList = saleInTicino.map((type) => type.stockVolumeInKg);
  return ticinoStokckList.reduce((a, b) => {
    return a + b;
  });
}

/**
 * Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklari veren fonksiyon
 * @param {*} pArray
 */
function findImported(pArray) {
  let summerImport = pArray.filter(
    (type) =>
      (type.season == "Summer") &
      type.saleLocations.includes("ZH") &
      (type.originCountry == "Norway" ||
        type.originCountry == "Japan" ||
        type.originCountry == "United Kingdom" ||
        type.originCountry == "Egypt" ||
        type.originCountry == "Vietnam")
  );
  let weightList = summerImport.map((type) => type.itemWeightInGrams);
  return weightList;
}


// /*Cabbar, Kerem ve Sinan ortaklasa balik ciftligi projesine girerler. Cabbar ve Keremin referansi ile Sinan da bizlerden bir program istemektedir.
// Uc kafadar bizden ciftlikteki baliklarin satisi icin bir online sistem istemektedirler. Online satis sistemi asagidaki sorulara cevap verebilmelidir.

// 1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
// 2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
// 3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
// 4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
// 5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
// 6) Toplam balik stoku ne kadardir?
// 7) En pahali olan balik hangisidir? 
// 8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
// 9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
// 10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
// 11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?*/
// const fishFarm = [ 
//     { 
//         fishType: "Salmon",
//         price: 15.70,
//         entryDate: new Date(2021, 0, 1),    // 01.01.2021
//         durationInDays: 30,
//         itemWeightInGrams: 145,
//         originCountry: "Norway", 
//         season: "Winter", 
//         stockVolumeInKg: 6500,
//         saleLocations: ["ZH", "GE", "BE", "VD"],
//     },
//     { 
//         fishType: "Seatrout",
//         price: 7.90,
//         entryDate: new Date(2021, 11, 12),    // 12.12.2021
//         durationInDays: 20,
//         itemWeightInGrams: 460,
//         originCountry: "Japan", 
//         season: "Winter", 
//         stockVolumeInKg: 1600,
//         saleLocations: ["GL", "GR", "BE", "VS"],
//     },
//     { 
//         fishType: "Sailfish",
//         price: 5.20,
//         entryDate: new Date(2021, 3, 19),    
//         durationInDays: 15,
//         itemWeightInGrams: 240,
//         originCountry: "United Kingdom", 
//         season: "Spring", 
//         stockVolumeInKg: 500,
//         saleLocations: ["ZH", "SH", "BL", "SO"],
//     },
//     { 
//         fishType: "Red Drum",
//         price: 3.10,
//         entryDate: new Date(2021, 5, 15),   
//         durationInDays: 18,
//         itemWeightInGrams: 300,
//         originCountry: "Poland", 
//         season: "Summer", 
//         stockVolumeInKg: 15500,
//         saleLocations: ["FR", "GE", "NE", "TI"],
//     },
//     { 
//         fishType: "Pompano",
//         price: 10,
//         entryDate: new Date(2021, 8, 17),    
//         durationInDays: 20,
//         itemWeightInGrams: 645,
//         originCountry: "France", 
//         season: "Autumn", 
//         stockVolumeInKg: 1500,
//         saleLocations: ["ZH", "GE", "BE", "VD"],
//     },
//     { 
//         fishType: "Bluefish", 
//         price: 13.70,
//         entryDate: new Date(2021, 10, 11),  
//         durationInDays: 5,
//         itemWeightInGrams: 845,
//         originCountry: "Italy", 
//         season: "Winter", 
//         stockVolumeInKg: 200,
//         saleLocations: ["NW", "OW", "UR", "LU"],
//     },
//     { 
//         fishType: "Mackerel",
//         price: 8.90,
//         entryDate: new Date(2021, 6, 18),    
//         durationInDays: 16,
//         itemWeightInGrams: 150,
//         originCountry: "GREECE", 
//         season: "Summer", 
//         stockVolumeInKg: 8100,
//         saleLocations: ["AG", "BL", "BE", "VD", "TG"],
//     },
//     { 
//         fishType: "Perch",
//         price: 11.90,
//         entryDate: new Date(2021, 10, 1),  
//         durationInDays: 30,
//         itemWeightInGrams: 222,
//         originCountry: "Egypt", 
//         season: "Summer", 
//         stockVolumeInKg: 9500,
//         saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
//     },
//     { 
//         fishType: "Mullet",
//         price: 4.80,
//         entryDate: new Date(2021, 2, 14),   
//         durationInDays: 30,
//         itemWeightInGrams: 333,
//         originCountry: "Vietnam", 
//         season: "Summer", 
//         stockVolumeInKg: 600,
//         saleLocations: ["ZH", "GE", "BE", "VD"],
//     },
//     { 
//         fishType: "Tuna",
//         price: 19.50,
//         entryDate: new Date(2021, 0, 1),    
//         durationInDays: 30,
//         itemWeightInGrams: 250,
//         originCountry: "Spain", 
//         season: "Winter", 
//         stockVolumeInKg: 2300,
//         saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
//     },  
// ]
 



// ///En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
// let findLongTimeFish=(fish)=>(fish.price)


