function makanTerusRekursif(waktu) {
    var makan = 1;
    if (waktu > 0) {
        waktu = waktu - 15
    } else {
        return 0
    }
    return makan + makanTerusRekursif(waktu);
}

console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0

