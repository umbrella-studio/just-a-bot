const { JadiAnime } = require('jadianime-ts')
async function ainime(gambar) {
let options = {
    proxy: "SOCKS5://157.245.247.84:59166",
    qqmode: 'china'
  }
  try{
    let akhir = await JadiAnime(gambar, options)
    console.log(akhir)
    return akhir
  } catch (e){
    console.error(e)
  } 
  
}

let tolol = ainime('./test2.jpeg')
  console.log(tolol)