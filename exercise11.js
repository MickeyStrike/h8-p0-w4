function shoppingTime(memberId, money){
    let arrListPurchased=[];
    let arrChangeMoney=[];
    let arr=[
                ['Sepatu Stacattu','Baju Zoro','Baju H&N','Sweater Uniklooh','Casing Handphone'],
                [1500000,500000,250000,175000,50000]
            ];
    let member = [];
    let duit = [];
    let temp = {};

    //untuk mensorting memberId dan money & push memberid ke member dan push money ke duit
    if(memberId===memberId || money===money){
        member.push(memberId)
        duit.push(money)
    }
    //untuk memfilter member undifined, member kosong, duit kurang
    for(let i=0;i<duit.length;i++){
        if((member[i]&&duit[i])===undefined){
            return `Mohon maaf, toko X hanya berlaku untuk member saja`
        }else if(member[i]===''){
            return `Mohon maaf, toko X hanya berlaku untuk member saja`
        }else if(duit[i]<arr[1][4]){
            return 'Mohon maaf, uang tidak cukup'
        }else if(member[i]==='1820RzKrnWn08'){
            //mengakses array
            arrListPurchased.push(arr[0][0],arr[0][1],arr[0][2],arr[0][3],arr[0][4])
            arrChangeMoney.push(arr[1][1]+arr[1][2]+arr[1][3]+arr[1][4])
            temp['memberId'] = member[i]
            temp['money'] = duit[i]
            temp['listPurchased'] = arrListPurchased
            temp['changeMoney'] = Number(duit[i] - arrChangeMoney[i])
        }else if(member[i]==='82Ku8Ma742'){
            arrListPurchased.push(arr[0][4])
            arrChangeMoney.push(arr[1][4])
            temp['memberId'] = member[i]
            temp['money'] = duit[i]
            temp['listPurchased'] = arrListPurchased
            temp['changeMoney'] = Number(duit[i] - arrChangeMoney[i])
        }
    }

    return temp
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja