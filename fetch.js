const fetch = require('node-fetch');
const { downloadProducts } = require('./download')

const fetchProducts = (page, url, key) => {

  fetch(url, {
      method: 'POST',
      headers: {
        'NETOAPI_ACTION': 'GetItem',
        'NETOAPI_KEY': `${key}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'Filter': {
          'IsActive': ["True", "False"],
          "Limit": "100",
          "Page": `${page}`,
          'OutputSelector': [
            'Images'
          ]
        }
      })
    })
    .then(res => res.json())
    .then(data => data.Item)
    .then(products => {
      downloadProducts(products)

      if (products.length > 0) {
        let nextPage = page + 1;
        fetchProducts(nextPage, url, key)
      }

    }).catch(err => console.log(err));
}

module.exports = { fetchProducts };
