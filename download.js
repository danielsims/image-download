const request = require('request')
const fs = require('fs')

const downloadProducts = products => {

  const download = (url, path, callback) => {
    request.head(url, (err, res, body) => {
      request(url)
        .pipe(fs.createWriteStream(path))
        .on('close', callback)
    })
  }

  for (let product in products) {
   const images = products[product].Images;

   for (let image in images) {
     const url = images[image].URL;
     const folder = url.split('/').slice(4)[0];
     const name = url.split('/').slice(-1)[0];
     const path = './images/' + folder + '/' + name ;

     if (fs.existsSync('images/' + folder)) {
       null
     } else {
       fs.mkdir(`images/${folder}`, (err) => {
          if (err) throw err;
        });
     }

     download(url, path, () => {
       console.log('✅ Image Downloaded - ' + url)
     })
    }
   }
}

module.exports = { downloadProducts };