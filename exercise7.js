function urutkanAbjad(str){
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    var temp=[];
    var sortTemp='';
    var penampung='';
    //convert kata to number
    for(var i=0;i<str.length;i++){
        for(var j=0;j<abjad.length;j++){
            if(str[i]===abjad[j]){
                temp.push(j)
            }
        }
    }
    // console.log(temp)
    //sorting number
    for(var i=0;i<temp.length;i++){
        for(var j=0;j<temp.length;j++){
            if(temp[j]>temp[j+1]){
                penampung = temp[j]
                temp[j] = temp[j+1]
                temp[j+1] = penampung
            }
        }
    }
    // console.log(temp)
    //convert number to kata
    for(var i=0;i<temp.length;i++){
        if(temp[i]==0){
            sortTemp+=abjad[0]
        }
        for(var j=1;j<abjad.length;j++){
            if(temp[i]===j){
                sortTemp+=abjad[j]
            }
        }
    }
    return sortTemp;
}

console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'