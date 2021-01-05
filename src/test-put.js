
const axios = require('axios');

function testput (url_put, params_put) {

axios
  .put(url_put, { params_put })
  .then(response => {
    //console.log("response: ", response)
    // do something about response
  })
  .catch(err => {
    console.error(err)
  });
  window.location.reload(false);
}

export default testput;