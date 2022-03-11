function getAngkaTerbesarKedua(dataNumbers) {

  /* logic :
  menggunakan conditional statement if else untuk mengecek tipe data dari inputan dataNumbers
  1. jika tipe data dari inputan dataNumbers adalah array => buat variabel untuk remove duplicate number menggunakan filter yang kemudian di sorting angka secara ascending dan mengambil angka terbesar kedua dari array
  2. kalo tipe data dari inputan dataNumbers = null atau bukan array => return error message
  */
  
  if ( typeof dataNumbers === 'object' ) {
    const removeDuplicateNumber = dataNumbers.filter( (item, index) => {
      return dataNumbers.indexOf( item ) === index } );

    const secondLargestNumber = removeDuplicateNumber.sort( (a,b) => {return a - b} )[removeDuplicateNumber.length - 2];
    return secondLargestNumber;
  }
  else if ( typeof dataNumbers !== 'object' && (dataNumbers === null || dataNumbers === '' || typeof dataNumbers === 'undefined')) {
    return 'ERROR: where\'s the parameter Bro?';
  }
  else {
    return 'ERROR: It\'s not an array.. please give me an array of number';
  }
};

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8]

console.log(getAngkaTerbesarKedua(dataAngka))
// EXPECTED OUTPUT :
// 8

console.log(getAngkaTerbesarKedua(0))
// EXPECTED OUTPUT :
// 'ERROR: It\'s not array.. please give me array'

console.log(getAngkaTerbesarKedua())
// EXPECTED OUTPUT :
// 'ERROR: where\'s the parameter Bro?'