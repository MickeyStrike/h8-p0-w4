function graduates(students){
    let daftarClass = []
    let result = {}

    //membuat daftar class dari input
    for(let i=0;i<students.length;i++){
        let classStudents = students[i]['class']
        if(daftarClass.includes(classStudents)){

        }else{
            daftarClass.push(classStudents)
        }
    }
    // console.log(daftarClass)

    //membuat objek class
    for(let i=0;i<daftarClass.length;i++){
        let listKeyClass = daftarClass[i]
        result[listKeyClass] = []
    }
    // console.log(result)

    //memisahkan student ke dalam setiap objek dari class

    for(let key in result){
        for(let i=0;i<students.length;i++){
            let studentClass = students[i]['class']
            let studentScore = students[i]['score']
            if(studentScore>75){
                if(studentClass===key){
                    result[key].push(students[i])
                }
            }
        }
    }
    // console.log(result)

    // menghapus class dalam objek result
    for(let key in result){
        for(let i=0;i<result[key].length;i++){
            delete result[key][i]['class']
        }
    }
    return result
}

console.log(graduates([
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
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}