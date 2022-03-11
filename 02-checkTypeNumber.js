const checkTypeNumber = (givenNumber) => {
  
    if (typeof givenNumber !== 'object' && (givenNumber === null || givenNumber === '' || typeof givenNumber === 'undefined')) {
        return 'Error: Bro where is the parameter?';
    }
    else if ( Number.isInteger(givenNumber) === false ) {
        return 'Error: Invalid data type';
    }
    else if ( Number.isInteger(givenNumber) && givenNumber % 2 === 0 ) {
        return 'GENAP';
    }
    else if ( Number.isInteger(givenNumber) && givenNumber % 2 !== 0 ) {
        return 'GANJIL';
    }
};

console.log(checkTypeNumber(10)) // OUTPUT yang keluar ==> "GENAP"
console.log(checkTypeNumber(3)) // OUTPUT yang keluar ==> "GANJIL"
console.log(checkTypeNumber("3")) // OUTPUT yang keluar ==> "Error: Invalid data type"
console.log(checkTypeNumber({})) // OUTPUT yang keluar ==> "Error: Invalid data type"
console.log(checkTypeNumber([])) // OUTPUT yang keluar ==> "Error: Invalid data type"
console.log(checkTypeNumber()) // OUTPUT yang keluar ==> "Error: Bro where is the parameter?"