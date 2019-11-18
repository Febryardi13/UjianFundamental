function lelang(a){
   var hargaAwal = 10000
   var diskon1 = (10000*20)/100
   var diskon2 = (10000*10)/100
  if(a <= 3){
      hargaAwal=hargaAwal+diskon1
  }else if(a >= 4){
      if(a*4){
        hargaAwal=hargaAwal+diskon2
      }
  }else if(a >= 50){
      hargaAwal=`barang sudah terjual`
  }
  return hargaAwal
}
console.log(lelang(60))