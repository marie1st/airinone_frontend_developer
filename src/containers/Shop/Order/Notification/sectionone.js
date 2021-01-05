import React from 'react'
import styles from './Notification.module.css';
import {  
    Badge,

} from '../../../../components'
import Posts from '../../../../employeegetapi';
import {CustomerCard} from '../../Customer/CustomerCard'



class Sectionone extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            posts: [],
            customers: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/order-products")
            .then(response => response.json())
            .then((posts) => this.setState({ posts }));
        for(var i = 0; i < this.state.posts.length; i++) {
            fetch("http://localhost:3000/customers/" + this.state.posts[i].order_by)
            .then(response => response.json())
            .then((customers)=> this.setState({customers})); 
        }
    }

    render() {
        if(this.state.posts.length === 0 ){
            return <div>React Fetch Loading</div>

        }

        return (
            <div className="user-container">
              {this.state.posts.map(post => (
                <><div className={`${styles.wrapperCardBodyC1}`}>
                      <Badge color="yellow">ติดตั้ง</Badge>
                      <Badge>บริการ</Badge>
                  </div>
                      <div className={`${styles.wrapperCardBodyAC} font-mr weight-re`}>
                          <div className={`${styles.wrapperCardBodyC2}`}>
                              <div>วันที่นัดหมาย: {post.appointment_date}</div>
                              <div>เวลา: {post.time_period}</div>
                          </div>
                          {this.state.customers.map(customer=>(
                            <div className={`${styles.wrapperCardBodyC2}`}>
                            <div>ชื่อ: {customer.first_name + " " + customer.last_name}</div>
                            <div>
                            ที่อยู่: {customer.address + " " + customer.district + " " + customer.subdistrict + " " + customer.province + " " + customer.country + " " + customer.postcode}
                            </div>
                            </div>
                          ))}
                       
                          <div className={`${styles.wrapperCardBodyC2}`}>
                              <div>ช่องทางการสั่งซื้อ : Walk In</div>
                          </div>
                      </div></>
              ))}
            </div>
        )
    }
}
export default Sectionone;