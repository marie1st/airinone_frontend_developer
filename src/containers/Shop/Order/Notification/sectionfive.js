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
} from '../../../../components'

import { SiApacheairflow } from 'react-icons/si'
import { AiOutlineSetting, AiOutlineCheck } from 'react-icons/ai'
import { BsX } from 'react-icons/bs'
import orderdelete from '../../../../orderdelete'
import orderpostapi from '../../../../orderpostapi'

class sectionfive extends React.Component {

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
                            
                            <Card.Container noShadow className={styles.cardContainer}>
            <Card.Body>
              <div className={`${styles.orderContent}`}>
                <div className={`${styles.wrapperOrderContent} `}>
                  <div className={`${styles.status}`}>
                    <Badge color="yellow">ติดตั้ง</Badge>
                    <Badge>บริการ</Badge>
                  </div>
                  <div className={`${styles.contentDetailC1}`}>
                    รหัสออเดอร์ : {order.order_id}
                  </div>
                  <div className={`${styles.contentDetailC2}`}>
                    ชื่อลูกค้า : {customer.first_name + " " + customer.last_name}
                  </div>
                </div>

                <div className={`${styles.wrapperOrderContent} `}>
                  <div className={`${styles.status}`}>
                    <div>
                      <SiApacheairflow size="24" color="2899E0" />
                      X1
                    </div>

                    <div>
                      <AiOutlineSetting size="24" color="2899E0" />
                      X0
                    </div>

                    <div>
                      <FaHandPaper size="24" color="2899E0" />
                      X0
                    </div>
                  </div>

                  <div className={`${styles.contentDetailC1}`}>
                    วันที่นัดหมาย : {order.appointment_date}
                  </div>
                  {this.timerage.map(item=>(
                  <div className={`${styles.contentDetailC2}`}>
                    เวลา : ช่วง{item + " "} {order.time_period} น.
                  </div>
                  ))}
                </div>
              </div>

            </Card.Body>
          </Card.Container>


          <Card.Container>
            <Card.Body>
              <div className={`${styles.flexRow}`}>
                <div className={`${styles.flexColumn}`}>
                  <div>วันที่นัดหมาย</div>
                  <Textbox as="date" />
                </div>
                <div className={`${styles.flexColumn}`}>
                  <div>ช่วงเวลาที่นัดหมาย</div>
                  <Dropdown className="tb-size-md" />
                </div>
                <Button>
                  <FaSearch />
                  ค้นหาช่าง
                </Button>
              </div>
            </Card.Body>
          </Card.Container>
          <div>


            <div className={`${styles.flexRow}`}>
              <div>เลือกหัวหน้าช่าง</div>
              <div>รายการที่เลือก: {this.state.boolChecked.filter(item => item === true).length}</div>
            </div>
            <Card.Container noShadow className={styles.cardContainer}>
            {this.state.employees
                .filter(employee => employee.roleId === 0 (
                  <Card.Body>
                    <div className={`${styles.detail}`}>
                    <input key ={employee.employee_id} type="checkbox" checked={this.state.boolChecked} onChange={this.toggledoChange} ></input>
                        {employee.first_name + employee.last_name} เบอร์โทรติดต่อ : {employee.phone_number}
                    </div>
                    <div className={`${styles.chiefMac}`}></div>
                  </Card.Body>
                ))}
            </Card.Container>
          </div>
          <div>
            <div className={`${styles.flexRow}`}>
              <div>เลือกลูกทีมช่าง</div>
              <div>รายการที่เลือก: {this.state.isChecked.filter(item => item === true).length}</div>
            </div>
            <Card.Container noShadow className={styles.cardContainer}>
              {this.state.employees.filter(employee => employee.roleId === 1 
            (
                  <Card.Body>
                    <div className={`${styles.detail}`}>
                      <input type="checkbox"></input>
                      {employee.first_name + " " + employee.last_name}
                    </div>
                    <div className={`${styles.chiefMac}`}></div>
                  </Card.Body>
                ))}
            </Card.Container>
          </div>
          <div className={styles.flexRow}>
            <Button color="red" onClick = {() => orderdelete(order.order_id)}>
              <BsX />
              ปฏิเสธงาน
            </Button>
            <div className={styles.BBottom}>
              <Button color="grey" onClick={modalManage.close}>
                ปิด
              </Button>
              <Button color="green" onClick = {() => {this.selectedCheckboxes.map(item =>( orderpostapi(order.order_id, pass_value = { date: `${timestamp}`, employee_id: {item}, order_id: `${order.order_id}`})))}}>
                <AiOutlineCheck />
                รับงาน
              </Button>
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
export default sectionfive;