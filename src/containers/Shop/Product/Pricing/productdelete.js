const request = require('request');

function productdelete (url_delete) {

const options = {
    method: 'DELETE',
    url: `http://localhost:3000/product-n-prices/${url_delete}`
  };
  
request(options, function (error, response, body) {
      if (error) throw new Error(error);
      //return response
  });
window.location.reload(false);
}

export default productdelete;