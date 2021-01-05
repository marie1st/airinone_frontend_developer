const request = require('request');

function testdelete (url_delete) {

const options = {
    method: 'DELETE',
    url: `http://localhost:3000/customers/${url_delete}`
  };
  
request(options, function (error, response, body) {
      if (error) throw new Error(error);
      //return response
  });
window.location.reload(false);
}

export default testdelete;