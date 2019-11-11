function naikAngkot(arrPenumpang){
    rute = ['A','B','C','D','E','F']
    let result=[]
    let dari=0
    let tujuan=0
    
    for(let i=0;i<arrPenumpang.length;i++){
        let obj={}
        obj["penumpang"] = arrPenumpang[i][0]
        obj["naikDari"] = arrPenumpang[i][1]
        obj["tujuan"] = arrPenumpang[i][2]
        
        // tujuan.push(arrPenumpang[i][1],arrPenumpang[i][2])
        for(let j=0;j<rute.length;j++){
            if(arrPenumpang[i][1]===rute[j]){
                dari+=j
            }
            if(arrPenumpang[i][2]===rute[j]){
                tujuan+=j
            }
        }
        obj['bayar'] = (tujuan - dari) * 2000 
        result.push(obj)
    }

    // console.log(tujuan)
    return result
}

console.log(naikAngkot([
                        ['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']
                       ]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]