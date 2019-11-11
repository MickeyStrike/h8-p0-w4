function changeMe(arr){
   var nama = ''
   var temp={}
   for(var i=0;i<arr.length;i++){
      nama = (i+1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ':'
         temp['firstname'] = arr[i][0]
         temp['lastname'] = arr[i][1]
         temp['gender'] = arr[i][2]
         if(arr[i][3]==undefined){
            temp['age'] = 'invalid Birth Year'
         }else{
            temp['age'] = Number(2019-arr[i][3])
         }
         console.log(nama)
         console.log(temp)
   }
}

console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]))
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""