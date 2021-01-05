const request = require('request');
const fs = require('fs');
var common = require('./filename');
function testapi (url_get) {
  const file_name_to_write = common.fileNameWrite(url_get);

  const options = {
    method: 'GET',
    url: url_get
  };

request(options, function (error, response, body) {
	if (error) throw new Error(error);
  let data_log = body;
  fs.writeFileSync('./log/'+file_name_to_write+'.json', data_log);
  return body;
});
}
module.exports = {testapi};
