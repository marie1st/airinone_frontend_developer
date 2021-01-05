import React, { useState, useEffect } from "react";
import { CustomerCard } from "../src/containers/Shop/Customer/CustomerCard";
import styles from './containers/Shop/Customer/Customer.module.css';



function AppCus() {
  const [userData, setUserData] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setUserData({ loading: true });
    let mounted = true;
    getApiCustomerWithaxios()
       .then(u => {
           if(mounted) {
               setUserData(u)
           }
       })
    return () => mounted = false;
  }, []);

  const getApiCustomerWithaxios = async () => {
    const customerUrl = "http://localhost:3000/customers";
    const axios = require('axios');
    const request = require('request');
    //const response = await axios.get(customerUrl);
    const options = {
      method: 'GET',
      url: customerUrl
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      let data_log = body;
      return body;
    });
    //setUserData(response.data);
    setUserData(data_log);
  };

  return (
    <div className="AppCus">
      <div className="user-container">
        {userData.map(u => (
            <CustomerCard
                name={u.first_name + " " + u.last_name} 
                phone={u.phone_number}
                address= {u.address+ " " + u.district + " " + u.subdistrict + " " + u.postcode + " " + u.country}
                className={`${styles['customer-box']}`}
            />
        ))}
      </div>
    </div>
  );
}
export default AppCus;