const checkTypeNumber = (givenNumber) => {

    /* logic :
    jika angka masukan tipenya bukan object dan berisi null, undefined, atau kosong, maka return 'ERROR: what\'s up! the parameter is lost?'

    dan jika angka masukan tipenya integer dan modulus 2 = 0, maka return 'GENAP' karena bilangan genap jika dibagi 2 hasilnya akan tanpa sisa misal 2%2 = 0 atau 6%2 = 0

    dan jika angka masukan tipenya integer tapi ketika dimodulus 2 tidak sama dengan 0, maka return 'GANJIL' karena bilangan ganjil jika dibagi 2 hasilnya akan memiliki sisa misal 3%2 = 1 atau 5%2 = 1

    selain kriteria masukan di atas, maka return 'Error: Invalid data type'
    */
  
    if (typeof givenNumber !== 'object' && (givenNumber === null || givenNumber === '' || typeof givenNumber === 'undefined')) {
        return 'Error: Bro where is the parameter?';
    }
    else if ( Number.isInteger(givenNumber) && givenNumber % 2 === 0 ) {
        return 'GENAP';
    }
    else if ( Number.isInteger(givenNumber) && givenNumber % 2 !== 0 ) {
        return 'GANJIL';
    }
    else {
        return 'Error: Invalid data type';
    }
};

console.log(checkTypeNumber(10)) // OUTPUT yang keluar ==> "GENAP"
console.log(checkTypeNumber(3)) // OUTPUT yang keluar ==> "GANJIL"
console.log(checkTypeNumber("3")) // OUTPUT yang keluar ==> "Error: Invalid data type"
console.log(checkTypeNumber({})) // OUTPUT yang keluar ==> "Error: Invalid data type"
console.log(checkTypeNumber([])) // OUTPUT yang keluar ==> "Error: Invalid data type"
console.log(checkTypeNumber()) // OUTPUT yang keluar ==> "Error: Bro where is the parameter?"