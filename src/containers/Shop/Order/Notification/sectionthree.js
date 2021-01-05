import React from 'react'
import styles from './Notification.module.css';
import {  
    Badge,
    Button,
    Card,
    Modal,
    Dropdown,
    Textbox,
    Dropbox,
    Spacer
} from '../../../../../src/components'


import { AiOutlineCheck } from 'react-icons/ai'
import { BsX } from 'react-icons/bs'
import orderdelete from '../../../../orderdelete'
import orderpostapi from '../../../../orderpostapi'

class sectionthree extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            orders: [],
            customers: [],
            employees: [],
            isChecked: false,
            boolChecked: false,
            employees: [],
        };
    }
    componentWillMount = () => {

        this.selectedCheckboxes = new Set();
    }

    componentDidMount() {


        fetch("http://localhost:3000/order-products")
            .then(response=> response.json)
            .then((orders) => this.setState({ orders }))
        this.state.orders.forEach(element => {
            fetch("http://localhost:3000/customers/"+element.order_by)
                .then(response => response.json)
                .then((customers) => this.setState({ customers }))
        });
        fetch("http://localhost:3000/employees")
            .then(response=>response.json)
            .then((employees) => this.setState({ employees }));
        
        var timerange = ""
        this.state.orders.forEach(element => {
            if(element.time_period === "10:00-12:00") { timerange = "เช้า";}
            else{ timerage = "บ่าย";}
        });
        
    
    }

    toggleChange = key => {
        if(this.selectedCheckboxes.has(key)){
          this.selectedCheckboxes.delete(key)
        }else {
          this.selectedCheckboxes.add(key)
        }
        this.setState({
          isChecked: !this.state.isChecked,
        });
    }
  
      toggledoChange = key => {
        if(this.selectedCheckboxes.has(key)) {
          this.selectedCheckboxes.delete(key)
        }else {
          this.selectedCheckboxes.add(key)
        }
        this.setState({
          boolChecked: !this.state.isChecked,
        });
    }
  
    render() {
        return (
        <div>
            {this.state.orders.map(order =>(
                <div>
                    {this.state.customers.map(customer =>(
                        <div>
                            {this.state.employees.map(employee =>(
                                <div>
                                   <div className={`${styles.flexRowNoSpace}`}>
            <div className={`${styles.flexColumn}`}>
              <div>รหัสออเดอร์ :</div>
              <div>ชื่อลูกค้า :</div>
              <div>เบอร์โทรติดต่อ :</div>
              <div>ที่อยู่ :</div>
              <div>วันที่นัดหมาย :</div>
              <div>ประเภทงาน :</div>
              <div>จำนวนแอร์ :</div>
              <div>รุ่น :</div>
              <div>รายละเอียด :</div>
            </div>
            <div className={`${styles.flexColumn2}`}>
              <div>#{order.order_id}</div>
              <div>{customer.first_name + " " +customer.last_name}</div>
              <div>{customer.phone_number}</div>
              <div>
              {customer.address + " " + customer.district + " " +customer.subdistrict + " " +customer.province + " " + customer.country + " " + customer.postcode}
              </div>
              {this.timerange.map(item=>(
                <div>{order.appointment_date}, ช่วง{item} + " " +{order.time_period} น. </div>
              ))}
              <div>{order.type_of_work + " " + "(" + order.amount + ")"}</div>
              <div>{order.amount}</div>
              <div>{order.model}</div>
              <div>
                งาน {order.type_of_work} แอร์รุ่น + {' '} + {order.model} + {' '}+ จำนวน + {' '}+ {order.btu} BTU,
                ยี่ห้อ + {' '}+ {order.brand} + {' '}+ {order.type_cdu} + {' '}+  {order.type_inverter} + {' '}+  {order.type_fcu} จำนวน + {' '}+ {order.amount} + {' '}+  
                ประเภทสินค้า + {' '}+ {order.product}
              </div>
            </div>
          </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
        )
    }
}
export default sectionthree;