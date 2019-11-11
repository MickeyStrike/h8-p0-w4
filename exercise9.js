function checkAB(str){
    var a=[];
    var b=[];
    for(var i=0;i<str.length;i++){
        if(str[i]=='a'){
            a.push(i)
        }else if(str[i]=='b'){
            b.push(i)
        }
    }
    console.log(a,b)
    //check
    if(a.length==0||b.length==0){
        return false;
    }else{
        for(var i=0;i<a.length;i++){
            for(var j=0;j<a.length;j++){
                if(((Math.abs(a[i]-b[j]>2))&&(Math.abs(a[i]-b[j]<5))) || ((Math.abs(b[j]-a[i]>3))&&(Math.abs(b[j]-a[i]<5)))){
                    return true;
                }else{
                    j++
                }
            }
        }
    }
    return false
}

console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

/*
Diberikan sebuah function checkAB(str) 
yang menerima satu parameter berupa string. 
function tersebut mengembalikan nilai true jika di dalam string 
tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter 
lain minimal satu kali. Jika tidak ditemukan sama sekali, 
kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.
*/