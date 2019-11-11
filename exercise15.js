function highestScore(students){
  let arrTemp=[]
  let temp={}
  let result={}
  let saveNameFox=[]
  let saveNameWolves=[]
  let saveNameTigers=[]
  let saveScoreFox=[]
  let saveScoreTigers=[]
  let saveScoreWolves=[]

  // memproses students sesuai class dan membandingkan nilai dan mengelompokan nama & score
  for(let i=0;i<students.length;i++){
    for(let j=i+1;j<students.length;j++){
      if(students[i]['class']=='foxes'){
        if(students[i]['score'] > students[j]['score']){
          saveNameFox.push(students[i]['name'])
          saveScoreFox.push(students[i]['score'])
          break;
        }
      }else if(students[i]['class']=='wolves'){
        if(students[i]['score'] > students[j]['score']){
          saveNameWolves.push(students[i]['name'])
          saveScoreWolves.push(students[i]['score'])
          break
        }
      }
    }
  }
  for(let i=1;i<students.length;i++){
    if(students[i]['class']=='tigers'){
      saveNameTigers.push(students[i]['name'])
      saveScoreTigers.push(students[i]['score'])
      break;
    }
  }
  // console.log(saveNameTigers,saveScoreTigers)
  // console.log(saveNameTigers.length,saveScoreTigers.length)
  // pengelompokan nama score
    if(saveNameFox.length>0){
      for(let i=0;i<saveNameFox.length;i++){
        if(saveNameFox.length>1){
          temp={
                  name: saveNameFox[0],
                  score: saveScoreFox[0]
               }
        }else{
          temp={
                name: saveNameFox[i],
                score: saveScoreFox[i]
               }
          break;
        }
      }
      arrTemp.push(temp)
   }
  
   if(saveNameWolves.length>0){
    for(let i=0;i<saveNameWolves.length;i++){
      if(saveNameWolves.length>1){
        temp={
                name: saveNameWolves[0],
                score: saveScoreWolves[0]
             }
      }else{
        temp={
              name: saveNameWolves[i],
              score: saveScoreWolves[i]
             }
        break;
      }
    }
    arrTemp.push(temp)
 }
  
 if(saveNameTigers.length>0){
  for(let i=0;i<saveNameTigers.length;i++){
    if(saveNameTigers.length>1){
      temp={
              name: saveNameTigers[0],
              score: saveScoreTigers[0]
           }
    }else{
      temp={
            name: saveNameTigers[i],
            score: saveScoreTigers[i]
           }
      break;
    }
  }
  arrTemp.push(temp)
}
// console.log(arrTemp)
  //menyatukan semuanya
  for(let j=0;j<students.length;j++){
    if(arrTemp.length>2){
      if(result[students[j]['class']]===undefined){
        result[students[j]['class']] = arrTemp[j]
      }else{
        result['tigers'] = arrTemp[2]
      }
    }else{
      if(result[students[j]['class']]===undefined){
        result[students[j]['class']] = arrTemp[j]
      }
    }
  }
  return result;
}

console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}