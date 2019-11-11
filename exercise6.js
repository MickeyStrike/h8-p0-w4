function digitPerkalianMinimum(angka){
    var tempAngka='';
    var strTemp=[];
    var strNum1;
    var strNum2;
    var strTempNum;

    for(var i=0;i<=Math.round(Math.sqrt(angka));i++){
        if(angka%i===0){
            // console.log(i)
            strNum1 = String(i)
            strNum2 = String(angka/i)
            // console.log(strNum2)
            strTempNum = (strNum1 + strNum2).length
            strTemp.push(strTempNum)
        }
    }
    // console.log(strTemp)
    if(strTemp.length==1){
        tempAngka = strTemp[0]
    }else{
        for(var i=0;i<strTemp.length-1;i++){
            for(var j=1;j<strTemp.length;j++){
                if(strTemp[i]>strTemp[i+1]){
                    tempAngka = strTemp[i+1]
                }else if(strTemp[i]===strTemp[strTemp.length-1]){
                    tempAngka = strTemp[i]
                }
                else{
                    i++
                }
            }
        }
    }
    return tempAngka;
}

console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2