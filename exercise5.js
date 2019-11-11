function ubahHuruf(kata){
    var temp='';
    var alfabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for(var i=0;i<kata.length;i++){
        for(var j=0;j<alfabet.length;j++){
            if(kata[i]==alfabet[j]){
                temp += alfabet[j+1]
            }else if(kata[i]==alfabet[25]){
                temp += alfabet[0]
            }
        }
    }
    return temp;
}

console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu