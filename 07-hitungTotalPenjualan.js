const dataPenjualanPakAldi = [
  {
    namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan: 760000,
    kategori : "Sepatu Sport",
    totalTerjual : 90,
  },
  {
    namaProduct : 'Sepatu Warrior Tristan Black Brown High',
    hargaSatuan: 960000,
    kategori : "Sepatu Sneaker",
    totalTerjual : 37,
  },
  {
    namaProduct : 'Sepatu Warrior Tristan Maroon High ',
    kategori : "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual : 90,
  },
  {
    namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
    hargaSatuan: 120000,
    kategori : "Sepatu Sneaker",
    totalTerjual : 90,
  }
]

function hitungTotalPenjualan(dataPenjualan) {
  
  if (typeof dataPenjualan === "object") {
    let jumlahPenjualanTotal = dataPenjualan
      .map((item) => item.totalTerjual)
      .reduce((totalSebelum, totalJual) => totalSebelum + totalJual, 0);
    return jumlahPenjualanTotal;
  } 
  else {
    return "Please input valid data";
  }
  
};

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
// EXPECTED OUTPUT => 307