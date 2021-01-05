const axios = require('axios');

function orderpostapi (url_post, params) {
axios
    .post("http://localhost:3000/order-products/"+url_post+"/employee-working", params )
    .then(response => {
      console.log("response: ", response)
      // do something about response
    })
    .catch(err => {
      console.error(err)
    });
window.location.reload(false);
}

export default orderpostapi;