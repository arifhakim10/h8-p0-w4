function hitungHuruf(kata) {
    var arr = kata.split(' ');
    var banding = 0;
    var index;
    
    for(var i = 0; i < arr.length; i++){
      var hitung = 0;
       for (j = 0; j < arr[i].length; j++){
         for (k = arr[i].length -1; k >= 0; k--){
           if (arr[i][j] === arr[i][k] && j !== k){
           hitung++
            } 
          }
       }
      
      if (hitung > banding){
      
      banding = hitung
      
      index = i
      }
    } 
  return arr[index]
  }
  
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau
