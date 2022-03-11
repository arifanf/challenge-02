function getAngkaTerbesarKedua(dataNumbers) {
  
    if ( typeof dataNumbers === 'object' ) {
      const secondLargestNumber = dataNumbers.sort( (a,b) => {return a - b} )[dataNumbers.length-2];
      return secondLargestNumber;
    }
    else if ( typeof dataNumbers !== 'object' && (dataNumbers === null || dataNumbers === '' || typeof dataNumbers === 'undefined')) {
      return 'ERROR: where\'s the parameter Bro?';
    }
    else {
      return 'ERROR: It\'s not an array.. please give me an array of number';
    }
  }
  
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