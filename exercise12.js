function countProfit(shoppers){
    let listBarang = [
                        ['Sepatu Stacattu',1500000,10],
                        ['Baju Zoro', 500000,2],
                        ['Sweater Uniklooh',175000,1]
                     ]

    let saveSepatu=[]
    let saveBaju=[]
    let saveSweater=[]
    let profitSepatu=0
    let profitBaju=0
    let profitSweater=0

    for(let i=0;i<shoppers.length;i++){
        if(shoppers[i]['product']==='Sepatu Stacattu'){
            if(listBarang[0][2]-shoppers[i]['amount'] >= 0){
                listBarang[0][2] = listBarang[0][2] - shoppers[i]['amount']
                profitSepatu += shoppers[i]['amount'] * 1500000
                saveSepatu.push(shoppers[i]['name'])
            }
        }else if(shoppers[i]['product']==='Baju Zoro'){
            if(listBarang[1][2]-shoppers[i]['amount'] >= 0){
                listBarang[1][2] = listBarang[1][2] - shoppers[i]['amount']
                profitBaju += shoppers[i]['amount'] * 500000
                saveBaju.push(shoppers[i]['name'])
            }
        }else if(shoppers[i]['product']==='Sweater Uniklooh'){
            if(listBarang[2][2]-shoppers[i]['amount'] >= 0){
                listBarang[2][2] = listBarang[2][2] - shoppers[i]['amount']
                profitSweater += shoppers[i]['amount'] * 175000
                saveSweater.push(shoppers[i]['name'])
            }
        }
    }

    let hasil = [
                    {
                        product: 'Sepatu Stacattu',
                        shoppers: saveSepatu,
                        leftOver: listBarang[0][2],
                        totalProfit: profitSepatu
                    },
                    {
                        product: 'Baju Zoro',
                        shoppers: saveBaju,
                        leftOver: listBarang[1][2],
                        totalProfit: profitBaju
                    },
                    {
                        product: 'Sweater Uniklooh',
                        shoppers: saveSweater,
                        leftOver: listBarang[2][2],
                        totalProfit: profitSweater
                    }
                ]
    
    if(shoppers.length==0){
        return shoppers
    }
    return hasil
}

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, 
                         {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
                         {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, 
                         {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, 
                         {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, 
                         {name: 'Devi', product: 'Baju Zoro', amount: 1}, 
                         {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]