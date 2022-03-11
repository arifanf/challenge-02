function checkEmail(email) {

    /* logic : 
    - cek type data dari parameter email, 
        1. kalo string diproses lagi => buat variabel regex sesuai email dan regex nama user 
            - kalo sesuai var regex email => outputnya 'VALID'
            - kalo sesuai regex nama aja => outputnya message error
            - selain kondisi di atas => outputnya 'INVALID'
        2. kalo ga dilihat apakah number atau tanpa parameter => maka akan di return message error

    */

    if ( typeof email === 'string' ) {
      
    var regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var regexName = /^([\w-]+(?:\.[\w-]+)*)$/i;
    
        if (email.toLowerCase().match(regexEmail)) {
            return 'VALID';
        } 
        else if ( email.toLowerCase().match(regexName) ) {
            return 'ERROR: Bro, it\'s just your name please give your domain email service like \'\@gmail.com or another\'';
        }
        else {
            return 'INVALID';
        }
    }
    else if (typeof email === 'number' ) {
        return 'ERROR: Bro, it\'s a number';
    }
    else {
        return 'ERROR: Bro, where is the parameter?';
    }  

};

console.log(checkEmail('apranata@binar.co.id')) //OUTPUT yang keluar ==> 'VALID'
console.log(checkEmail('apranata@binar.com')) //OUTPUT yang keluar ==> 'VALID'
console.log(checkEmail('apranata@binar')) //OUTPUT yang keluar ==> 'INVALID'
console.log(checkEmail('apranata')) //OUTPUT yang keluar ==> 'ERROR: Bro, it\'s just your name please give your domain email service like '\@gmail.com or another'\'
console.log(checkEmail(3322)) //OUTPUT yang keluar ==> 'ERROR: Bro, it\'s a number'
console.log(checkEmail()) //OUTPUT yang keluar ==> 'ERROR: Bro, where is the parameter?'