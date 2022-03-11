function getSplitName(personName) {
  
    if ( typeof personName === 'string' ) {
        const nameArray = personName.split(' ');
  
      if ( nameArray.length === 3 ) {
        let firstName = nameArray[0];
        let middleName = nameArray[nameArray.length / 2 | 0];
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