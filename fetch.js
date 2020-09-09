const fetch = require('node-fetch');
const { downloadProducts } = require('./download')
require('dotenv').config()

const fetchProducts = page => {
  try {
    fetch(process.env.NETOAPI_ENDPOINT, {
      method: 'POST',
      headers: {
        'NETOAPI_ACTION': 'GetItem',
        'NETOAPI_USERNAME': process.env.NETOAPI_USERNAME,
        'NETOAPI_KEY': process.env.NETOAPI_KEY,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
         'Filter': {
            'IsActive': ["True", "False"],
            "Limit": "50",
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
        fetchProducts(nextPage)
      } else {
        console.log('Download Complete')
      }
    })
  } catch(err) {
    console.log(err)
  }
};

module.exports = { fetchProducts };
