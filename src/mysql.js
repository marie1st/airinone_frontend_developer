const mysql = require('mysql');



var connection = mysql.createConnection('mysql://root:p@ssw0rd4321@122.155.186.154:3309/airin1_dev_db?debug=true&charset=BIG5_CHINESE_CI&timezone=-0000');
connection.connect();
 
connection.query('SELECT roleId from employee', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].employee);
});
 
connection.end();