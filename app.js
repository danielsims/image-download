const fs = require('fs')
const { fetchProducts } = require('./fetch')

if (fs.existsSync('images')) {
  null
} else {
  fs.mkdir('images', (err) => {
     if (err) throw err;
   });
}

fetchProducts(0);
