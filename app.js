const inquirer = require('inquirer');
const fs = require('fs')
const { fetchProducts } = require('./fetch')

inquirer
  .prompt([{
      name: 'NETOAPI_ENDPOINT',
      prefix: ''
    },
    {
      name: 'NETOAPI_KEY',
      prefix: ''
    },
  ])
  .then(answers => {
    const url = answers['NETOAPI_ENDPOINT'];
    const key = answers['NETOAPI_KEY'];
    console.log('\n Initialising... \n')
    fetchProducts(0, url, key);
  })
  .catch(error => console.log(error));

if (fs.existsSync('images')) {
  null
} else {
  fs.mkdir('images', (err) => {
    if (err) throw err;
  });
}
