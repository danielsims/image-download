const async = require("async");
const request = require('request')
const fs = require('fs')

const queue = async.queue(function(task, callback) {
  request.head(task.url, (err, res, body) => {
    request(task.url)
      .pipe(fs.createWriteStream(task.path))
    callback(console.log(` Image Downloaded - ${task.url}`))
  })
}, 10);

queue.drain(function() {
  console.log('\n Download Complete \n');
});

const downloadProducts = products => {

  for (let product in products) {
    const images = products[product].Images;

    for (let image in images) {
      const url = images[image].URL;
      const folder = url.split('/').slice(4)[0];
      const name = url.split('/').slice(-1)[0];
      const path = './images/' + folder + '/' + name;

      if (fs.existsSync('images/' + folder)) {
        null
      } else {
        fs.mkdir(`images/${folder}`, (err) => {
          if (err) throw err;
        });
      }

      queue.push({url: url, path: path}, function(err) {
        if (err) {
          console.log(err);
        }
      });

    }
  }
}

module.exports = {
  downloadProducts
};
