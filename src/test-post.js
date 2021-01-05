const axios = require('axios');

function testpost(url_post, params) {
axios
  .post(url_post, params )
  .then(response => {
    console.log("response: ", response)
    // do something about response
  })
  .catch(err => {
    console.error(err)
  });
window.location.reload(false)
}

export default testpost;