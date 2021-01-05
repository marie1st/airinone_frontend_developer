import React from 'react';
const request = require('request');

const getapi = (props) => {

  const options = {
    method: 'GET',
    url: url_get
  };
  const { repos } = props;
  request(options, function (error, response, body) {
	if (error) throw new Error(error);
        let data_log = body;
        return body;
    return repos
});
}

export default getapi;