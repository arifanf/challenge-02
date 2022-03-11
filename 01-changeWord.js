function changeWord(selectedText, changedText, text) {

    // jika kataTerpilih = kataTerpilih.diperbesar
    // maka kataTerubah = kataTerubah.diperbesar + kataTerbesar.diiris(1)
    // contoh mencintai --> selectedText[0] : m --> M {
        // membenci = M + embenci }
    // return diubah(Mencintai, Membenci)

    // conditional statement
    if ( selectedText[0] === selectedText[0].toUpperCase() ) {
            changedText = changedText[0].toUpperCase() + changedText.slice(1);
    }
    return text.replace(selectedText, changedText);
};

const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

// Ketika function tersebut dipanggil dengan variabel kalimat1
console.log(changeWord('mencintai', 'membenci', kalimat1));
// OUTPUT => 'Andini sangat membenci kamu selamanya'

// Ketika function tersebut dipanggil dengan variabel kalimat2
console.log(changeWord('bromo', 'semeru', kalimat2));
// OUTPUT => 'Gunung semarang tak akan mampu menggambarkan besarnya cintaku padamu'
