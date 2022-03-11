function getSplitName(personName) {

/* logic :
- cek tipe data dari inputan personName
  1. kalo string diproses lagi => split nama yang ada spasinya menjadi array
      - kalo panjang arraynya 3 => dibuat variabel firstName dari item ke 1, middleName dari item ke 2, dan lastName dari item terakhir, dan akan di return object
      - kalo panjang arraynya 2 => dibuat variabel firstName dari item ke 1, middleName = null, dan lastName dari item terakhir, dan akan di return object
      - kalo panjang arraynya 1 => dibuat variabel firstName dari item ke 1, middleName dan lastName = null, dan akan di return object
      - selain kondisi di atas => akan di return error message
  2. kalo tipe datanya bukan string => akan di return error message
*/
  
  if ( typeof personName === 'string' ) {
      const nameArray = personName.split(' ');

    if ( nameArray.length === 3 ) {
      let firstName = nameArray[0];
      let middleName = nameArray[1];
      let lastName = nameArray.slice(-1)[0];
      return {firstName, middleName, lastName};
    }
    else if ( nameArray.length === 2 ) {
      let firstName = nameArray[0];
      let middleName = null;
      let lastName = nameArray.slice(-1)[0];
      return {firstName, middleName, lastName};
    }
    else if ( nameArray.length === 1 ) {
      let firstName = nameArray[0];
      let middleName = null;
      let lastName = null;
      return {firstName, middleName, lastName};
    }
    else {
      return 'ERROR: This function is only for 3 characters name';
    }
  }
  else {
      return 'ERROR: Ayyy, this is not a name';
  }
};
  
console.log( getSplitName ('Aldi Daniela Pranata'));
// EXPECTED OUTPUT :
// { firstName: 'Aldi', middleName: 'Daniela', lastName: 'Pranata' }

console.log( getSplitName ('Dwi Kuncoro'));
// EXPECTED OUTPUT :
// { firstName: 'Dwi', middleName: 'null', lastName: 'Kuncoro' }

console.log( getSplitName ('Aurora'));
// EXPECTED OUTPUT :
// { firstName: 'Aurora', middleName: 'null', lastName: 'null' }

console.log( getSplitName ('Aurora Aureliya Sukma Darma'));
// EXPECTED OUTPUT :
// 'ERROR: This function is only for 3 characters name'

console.log( getSplitName (0));
// EXPECTED OUTPUT :s
// 'ERROR: Ayyy, this is not a name'