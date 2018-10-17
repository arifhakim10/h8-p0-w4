
function changeVocals (str) {
    //code di sini
    var result = ''
    for(var i = 0; i < str.length; i++){
        if(str[i] === 'a'){
            result = result + 'b'
        } else if(str[i] === 'i'){
            result = result + 'j'
        } else if(str[i] === 'u'){
            result = result + 'v'
        } else if(str[i] === 'e'){
            result = result + 'f'
        } else if(str[i] === 'o'){
            result = result + 'p'
        } else if(str[i] === 'A'){
            result = result +'B' 
        } else if(str[i] === 'I'){
            result = result +'J'
        } else if(str[i] === 'U'){
            result = result + 'V'
        } else if(str[i] === 'E'){
            result = result + 'F'
        } else if(str[i] === 'O'){
            result = result + 'P'
        } else {
            result = result + str[i]
        }
    }
    return result    
  }
  
  function reverseWord (str) {
    //code di sini
    var result = ''
    for(var i = str.length-1; i >= 0; i--){
        result = result + str[i]
    }
    return result
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var result = ''
    for(var i = 0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            result = result + str[i].toLowerCase()
        } else if(str[i] === str[i].toLowerCase()){
            result = result + str[i].toUpperCase()
        }
    }
    return result
  }
  
  function removeSpaces (str) {
    //code di sini
    var result = ''
    for(var i = 0; i < str.length; i++){
        if(str[i] !== ' '){
            result = result + str[i]
        }
    }
    return result
  }
  
  function passwordGenerator (name) {
    //code di sini
    var pindahHuruf = changeVocals(name);
    var bacaTerbalik = reverseWord(pindahHuruf);
    var besarKecil = setLowerUpperCase(bacaTerbalik);
    var spasiHuruf = removeSpaces(besarKecil); 

    if(name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else{
        return spasiHuruf
    }


  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'