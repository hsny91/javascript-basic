const fishFarm = [ 
    { 
        fishType: "Salmon",
        price: 15.70,
        entryDate: new Date(2021, 0, 1),    // 01.01.2021
        durationInDays: 30,
        itemWeightInGrams: 145,
        originCountry: "Norway", 
        season: "Winter", 
        stockVolumeInKg: 6500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    { 
        fishType: "Seatrout",
        price: 7.90,
        entryDate: new Date(2021, 11, 12),    // 12.12.2021
        durationInDays: 20,
        itemWeightInGrams: 460,
        originCountry: "Japan", 
        season: "Winter", 
        stockVolumeInKg: 1600,
        saleLocations: ["GL", "GR", "BE", "VS"],
    },
    { 
        fishType: "Sailfish",
        price: 5.20,
        entryDate: new Date(2021, 3, 19),    
        durationInDays: 15,
        itemWeightInGrams: 240,
        originCountry: "United Kingdom", 
        season: "Spring", 
        stockVolumeInKg: 500,
        saleLocations: ["ZH", "SH", "BL", "SO"],
    },
    { 
        fishType: "Red Drum",
        price: 3.10,
        entryDate: new Date(2021, 5, 15),   
        durationInDays: 18,
        itemWeightInGrams: 300,
        originCountry: "Poland", 
        season: "Summer", 
        stockVolumeInKg: 15500,
        saleLocations: ["FR", "GE", "NE", "TI"],
    },
    { 
        fishType: "Pompano",
        price: 10,
        entryDate: new Date(2021, 8, 17),    
        durationInDays: 20,
        itemWeightInGrams: 645,
        originCountry: "France", 
        season: "Autumn", 
        stockVolumeInKg: 1500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    { 
        fishType: "Bluefish", 
        price: 13.70,
        entryDate: new Date(2021, 10, 11),  
        durationInDays: 5,
        itemWeightInGrams: 845,
        originCountry: "Italy", 
        season: "Winter", 
        stockVolumeInKg: 200,
        saleLocations: ["NW", "OW", "UR", "LU"],
    },
    { 
        fishType: "Mackerel",
        price: 8.90,
        entryDate: new Date(2021, 6, 18),    
        durationInDays: 16,
        itemWeightInGrams: 150,
        originCountry: "GREECE", 
        season: "Summer", 
        stockVolumeInKg: 8100,
        saleLocations: ["AG", "BL", "BE", "VD", "TG"],
    },
    { 
        fishType: "Perch",
        price: 11.90,
        entryDate: new Date(2021, 10, 1),  
        durationInDays: 30,
        itemWeightInGrams: 222,
        originCountry: "Egypt", 
        season: "Summer", 
        stockVolumeInKg: 9500,
        saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
    },
    { 
        fishType: "Mullet",
        price: 4.80,
        entryDate: new Date(2021, 2, 14),   
        durationInDays: 30,
        itemWeightInGrams: 333,
        originCountry: "Vietnam", 
        season: "Summer", 
        stockVolumeInKg: 600,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    { 
        fishType: "Tuna",
        price: 19.50,
        entryDate: new Date(2021, 0, 1),    
        durationInDays: 30,
        itemWeightInGrams: 250,
        originCountry: "Spain", 
        season: "Winter", 
        stockVolumeInKg: 2300,
        saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
    },  
]
/**
 * 1.Stok miktari 500 kg uzerinde olan baliklar
 * @param {*} fish 
 */
let findOverStockFish=(fish)=>(fish.stockVolumeInKg>=500);
let overStockFish=fishFarm.filter(findOverStockFish);

/**
 * 2.Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar 
 * @param {*} fish 
 */
let findFishPrice=(fish)=>(9<fish.price && fish.price>12);
let FishPrice=fishFarm.filter(findFishPrice);

/**
 * 3.Sadece Bern'de ve kis sezonu satilan baliklar 
 * @param {*} fish 
 */
let findFishInBern=(fish)=>(fish.season=="Winter"&& fish.saleLocations.includes("BE"));
let fishInBern=fishFarm.filter(findFishInBern)

/**
 * 4.Son kullanma tarihlerine gore baliklari siralayiniz
 */
function sortLastUseDate() {
    let newList = [];
    fishFarm.map((fish) => {
      fish.entryDate.setDate(fish.entryDate.getDate() + fish.durationInDays);
      newList.push({date:fish.entryDate , name:fish.fishType});
    });
    return newList;
  }
  
  let newListToSort = sortLastUseDate().sort(function (a, b) {
    return a.date.getTime() - b.date.getTime();
  
  });
  
  console.log(newListToSort);

  /**
 * 5.Avrupali baliklari bulur
 * @param {*} pFarmList 
 * @param {*} pCountryList 
 */
function findEuropeanFish(pFarmList, pCountryList, pPrice) {
    let europeanFish = [];
    pFarmList.filter(fish => {
      for (let index = 0; index < pCountryList.length; index++) {
        const country = pCountryList[index].toLowerCase();
        if (fish.originCountry.toLowerCase() === country && fish.price < pPrice) {
          europeanFish.push(fish.fishType)
        }
      }
    })
    return europeanFish;
  }
  /**************SORU-5******************/
let europeanFish = findEuropeanFish(fishFarm, europeanCountry, 10)
let sortedAlphabeticalList = sortAlphabeticalList(europeanFish)
console.log(`AB kaynakli 10 CHF'den daha ucuz ve alfabetik olarak siralanmis baliklar: ${sortedAlphabeticalList}`)
/**
 * 6.Toplam balik stogu
 * @param {*} a 
 * @param {*} b 
 */
  let findTotalStock=(a,b)=>({stockVolumeInKg:a.stockVolumeInKg+b.stockVolumeInKg})
  let totalFishStock=fishFarm.reduce(findTotalStock);
/**
 * 7.En pahali olan balik 
 * @param {*} fish 
 */
  let findHighPrice=(fish)=>(fish.price)
  let maxPrice=Math.max.apply(Math, fishFarm.map(findHighPrice));
  let maxPriceFish=fishFarm.filter(fish=>fish.price==maxPrice)




  
   
