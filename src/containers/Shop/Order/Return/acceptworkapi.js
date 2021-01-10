const axios = require('axios');
const today = new Date();
const timestamp = today.toISOString();

function acceptworkapi (url_post1, orderId, date, time) {
axios
    .post("http://localhost:3000/employees/"+url_post1+"/employee-working", {date: date, time_period: time, employee_id: url_post1, order_id: orderId} )
    .then(response => response.json())
    .catch(err => {
      console.error(err)
    });

window.location.reload(false);
}

export default acceptworkapi;