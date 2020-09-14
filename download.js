const async = require("async");
const request = require('request')
const fs = require('fs')

const queue = async.queue(function(task, callback) {

  if (fs.existsSync(`./images/${task.folder}`)) {
    null
  } else {
    fs.mkdir(`./images/${task.folder}`, (err) => {
      if (err) throw err;
    });
  }
  request.head(task.url, (err, res, body) => {
    request(task.url)
      .on('error', function(err) {
        console.log(` Download Error - ${task.url}`)
        retryDownload(task.url, task.path, task.folder);
      })
      .pipe(fs.createWriteStream(task.path))
    callback(console.log(` Image Downloaded - ${task.url}`))
  })
}, 5);

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

      queue.push({url: url, path: path, folder: folder}, function(err) {
        if (err) {
          console.log(err);
        }
      });
    }
  }
}

const retryDownload = (url, path, folder) => {
  console.log(` Retrying - ${url}`);
  queue.unshift({url: url, path: path, folder: folder}, function(err) {
    if (err) {
      console.log(err);
    }
  });
}

module.exports = {
  downloadProducts
};
