function changeMe(arr) {
  // console.log(arr[0][1]);
  var num = 0;
  var fullName = '';
  for(var i=0; i < arr.length; i++){
    num++;
    fullName = arr[i][0] + ' ' + arr[i][1];
    var objPerson = {};
    objPerson.firstName = arr[i][0];
    objPerson.lastName = arr[i][1];
    objPerson.gender = arr[i][2];
    if(arr[i][3] === undefined){
      objPerson.age = 'Invalid Birth Year';
    } else {
      objPerson.age = 2018 - arr[i][3];
    }
    console.log(num + '.' + fullName);
    console.log(objPerson);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""