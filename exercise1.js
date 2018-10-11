function angkaPrima(angka) {
  
  var Arr = [];
  var Arr2 = 0;
  
  for(var i = 2; i < angka; i++){
    Arr.push(Math.floor(angka % i));
  }
  for(var j = 0; j <= Arr.length; j++){
    if(Arr[j] === 0){
      Arr2++;
    }
  } if(Arr2 > 0){
    return false;
  }else {
    return true;
  }
}

console.log(angkaPrima(3));
console.log(angkaPrima(7));
console.log(angkaPrima(6));
console.log(angkaPrima(23));
console.log(angkaPrima(33));