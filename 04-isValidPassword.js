function isValidPassword(givenPassword) {

    /* LOGIC :
        - cek type data dari parameter inputan => givenPassword, 
        1. kalo string diproses lagi => buat variabel regex sesuai kriteria password (terdiri dari 8 huruf, ada huruf besar, ada huruf kecil, dan ada angka)
            - kalo sesuai sama var regex kriterianya => outputnya true
            - selain kondisi di atas => outputnya false
        2. kalo bukan string, dilihat apakah tanpa parameter atau tipe data lain => maka akan di return message error  
    */
  
    if ( typeof givenPassword === 'string' ) {
      var regexPass = new RegExp( '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8})' );
      // return regexPass.test(givenPassword);
      if ( regexPass.test(givenPassword) ) {
        return true;
      }
      else {
        return false;
      }
    }
    else if ( typeof givenPassword !== 'object' && (givenPassword === null || givenPassword === '' || typeof givenPassword === 'undefined') ) {
        return 'ERROR: what\'s up! the parameter is lost?';
    }
    else {
      return 'ERROR: it\'s not a password Bro.. Please input your Password that contain 8 characters, at least one lowercase and uppercase character, and at least one number';
    }
  };
  
  console.log(isValidPassword('Meong2021')) //OUTPUT yang keluar ==> true
  // requirement : terdiri dari 8 huruf, ada huruf besar, ada huruf kecil, dan ada angka
  
  console.log(isValidPassword('meong2021')); //OUTPUT yang keluar ==> false
  console.log(isValidPassword('@eong')); //OUTPUT yang keluar ==> false
  console.log(isValidPassword('Meong2')); //OUTPUT yang keluar ==> false
  console.log(isValidPassword(0)); //OUTPUT yang keluar ==> 'ERROR: it\'s not an email address Bro'
  console.log(isValidPassword()); //OUTPUT yang keluar ==> 'ERROR: what\'s up! the parameter is lost?