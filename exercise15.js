function changeVocals (str) {
  //code di sini
  var arr = [];
  var abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  
  for (var i = 0; i < str.length; i++) {
    arr.push(abjad[abjad.indexOf(str[i])+1]);
  }
  return arr.join('');
}

function reverseWord (str) {
  //code di sini
  var kata = '';
  
  for (var i = str.length - 1; i >= 0; i--) {
    kata += str[i];
  }
  return kata;
}

function setLowerUpperCase (str) {
  //code di sini
  var kata = '';
  
  for (var i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      kata += str[i].toLowerCase();
    }
    else {
      kata += str[i].toUpperCase();
    }
  }
  return kata;
}

function removeSpaces (str) {
  //code di sini
  return str.replace(/\s/g,'');
}

function passwordGenerator (str) {
  //code di sini
  var gantiVokal = changeVocals(str);
  var balikKata = reverseWord(gantiVokal);
  var upperCase = setLowerUpperCase(balikKata);
  var removedSpace = removeSpaces(upperCase);
  return removedSpace;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'