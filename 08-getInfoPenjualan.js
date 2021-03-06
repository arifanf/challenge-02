const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
];
  
function getInfoPenjualan(dataPenjualan) {

  /* logic :
  1. hitung totalKeuntungan = (hargaJual - hargaBeli) * totalTerjual * total
  2. hitung totalModal =  (totalTerjual + sisaStok) * hargaBeli * total
  3. hitung persentaseKeuntungan = (totalModal / totalKeuntungan) * 100%
  4. cari produkBukuTerlaris dan penulisTerlaris yang sesuai dengan jumlah buku yang banyak terjual
  5. return dalam bentuk object 
  */

  if (typeof dataPenjualan === 'object' ) {
    // totalKeuntungan
    const jumlahUntung = dataPenjualan.map( item => (item.hargaJual - item.hargaBeli) * item.totalTerjual ).reduce( (totalSebelum, totalJual ) => totalSebelum + totalJual, 0);

    // totalModal
    const jumlahModal = dataPenjualan.map( item => (item.totalTerjual + item.sisaStok) * item.hargaBeli ).reduce( (totalSebelum, totalJual ) => totalSebelum + totalJual, 0);

    // persentaseKeuntungan
    const persentaseUntung = ((jumlahUntung / jumlahModal) * 100).toFixed(1);

    // agar totalKeuntungan dan totalModal memiliki format uang Rupiah
    function konversiKeRupiah(angka) {
      var rupiah = '';		
      var angkaReverse = angka.toString().split('').reverse().join(''); // dibalik dulu biar gampang ambil 3 angka
      for( var i = 0; i < angkaReverse.length; i++ ) 
        if( i % 3 == 0) rupiah += angkaReverse.substr(i,3) + '.';
      return 'Rp. ' + rupiah.split('', rupiah.length-1).reverse().join('');
    };

    // produkBukuTerlaris
    // const bukuTerlaris = Math.max(...dataPenjualan.map( item => item.totalTerjual) );

  //   const buku = dataPenjualan.reduce( (produk, item) => {
  //     if ( item.totalTerjual === bukuTerlaris ) {
  //       return produk = item.namaProduk;
  //       // return produk;
  //     }
  //   }, 0 );
    // penulisTerlaris

    return { 
      totalKeuntungan: konversiKeRupiah(jumlahUntung), 
      totalModal: konversiKeRupiah(jumlahModal), 
      persentaseKeuntungan: persentaseUntung + ' %',
      // produkBukuTerlaris: buku,
      // penulisTerlaris: 
    }  
  }
  else {
    return 'INVALID DATA INPUT'
  }
  
};

console.log(getInfoPenjualan(dataPenjualanNovel))
// EXPECTED OUTPUT => OBJECT seperti di bawah ini
/*
{
    totalKeuntungan : 'Rp. 10.000.000',
    totalModal : 'Rp. 6.000.000',
    persentaseKeuntungan : '60%',
    produkBukuTerlaris : sesuai data ,
    penulisTerlaris : sesuai data
}
*/