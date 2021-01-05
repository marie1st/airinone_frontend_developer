
import React from 'react'
import { CustomerCard } from "../src/containers/Shop/Customer/CustomerCard";
import styles from './containers/Shop/Customer/Customer.module.css';
import {  
    Badge,
    Button,
    Card,
    Modal,
    Dropdown,
    Textbox,
    Dropbox,
    Spacer
} from '../src/components'
import {
    FaBell,
    FaCalendarDay,
    FaPlus,
    FaHandPaper,
    FaListUl,
    FaSearch,
  } from 'react-icons/fa'
import { SiApacheairflow } from 'react-icons/si'
import { AiOutlineSetting, AiOutlineCheck } from 'react-icons/ai'
import { RiUserSettingsLine } from 'react-icons/ri'
import { BsX } from 'react-icons/bs'
import { useModal } from '../src/hooks'
import orderdelete from './orderdelete';


class PostsOrder extends React.Component {

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
        const modalDetail = useModal()
        const modalManage = useModal()
        this.selectedCheckboxes = new Set();
        const today = new Date();
        const timestamp = today.toISOString();
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
            .then((employees) => this.setState({ employees }))
    
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
        if(this.state.orders.length === 0 ){
            return <div>React Fetch Loading</div>

        }

        return (
            <div className="user-container">
              {this.state.orders.map(order => (
              <Card.Container className={`${styles.wrapperCard}`}>
              <Card.Body className={`${styles.wrapperCardBody}`}>
                <div className={`${styles.wrapperCardBodyC1}`}>
                  <Badge color="yellow">ติดตั้ง</Badge>
                  <Badge>บริการ</Badge>
                </div>
                <div className={`${styles.wrapperCardBodyAC} font-mr weight-re`}>
                  <div className={`${styles.wrapperCardBodyC2}`}>
                    <div>วันที่นัดหมาย : {order.appointment_date}</div>
                    <div>เวลา : {order.time_period}</div>
                  </div>
                  {this.state.customers.map(customer =>(
                  <div className={`${styles.wrapperCardBodyC2}`}>
                  <div>ชื่อ : {customer.first_name + " " + customer.last_name}</div>
                  <div>
                    ที่อยู่ : {customer.address + " " + customer.district + " " + customer.subdistrict + " " + customer.country + " " + customer.post_code}
                  </div>
                </div>
                  ))}
                  <div className={`${styles.wrapperCardBodyC2}`}>
                    <div>ช่องทางการสั่งซื้อ : Walk-in</div>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className={`${styles.wrapperFotter}`}>
                <div className={`${styles.wrapperStatus}`}>
                  <SiApacheairflow size="30" color="2899E0" />
                  X1
                  <AiOutlineSetting size="30" color="2899E0" />
                  X1
                  <FaHandPaper size="30" color="2899E0" />
                  X1
                  <Button color="blue" onClick={modalDetail.open}>
                    <FaListUl />
                    ดูรายละเอียด
                  </Button>
                  <Button onClick={modalManage.open}>
                    <RiUserSettingsLine />
                    ทีมช่างที่รับงาน
                  </Button>
                </div>
                <div className="flex flex-row">
                  <Button size="md" color="green">
                    <AiOutlineCheck />
                    รับงาน
                  </Button>
                  <Spacer x={0.25} />
                  <Button size="md" color="red" onClick = {orderdelete(order.id)}>
                    <BsX />
                    ปฏิเสธงาน
                  </Button>
                </div>
              </Card.Footer>
            </Card.Container>
              ))}
            <div>
            {this.state.orders.map(order => (
                <div>
            <Modal modal={modalManage}>
                <Modal.Header>
                <div>
                    <RiUserSettingsLine />
                    จัดการคิวช่าง
                </div>
                </Modal.Header>
                <Modal.Body>
                ข้อมูลออเดอร์
            <Card.Container noShadow className={styles.cardContainer}>
            <Card.Body>
              <div className={`${styles.orderContent}`}>
                <div className={`${styles.wrapperOrderContent} `}>
                  <div className={`${styles.status}`}>
                    <Badge color="yellow">ติดตั้ง</Badge>
                    <Badge>บริการ</Badge>
                  </div>
                  <div className={`${styles.contentDetailC1}`}>
                    รหัสออเดอร์ : {order.id}
                  </div>
                  <div className={`${styles.contentDetailC2}`}>
                    ชื่อลูกค้า : {customer.first_name + customer.last_name}
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
                  <div className={`${styles.contentDetailC2}`}>
                    เวลา : {order.time_period}
                  </div>
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
            <div className={`${styles.flexRow}`}>
            <div>เลือกลูกทีมช่าง</div>
            <div>รายการที่เลือก: {this.state.isChecked.filter(item => item === true).length}</div>
            </div>
            <Card.Container noShadow className={styles.cardContainer}>
            {this.state.employees.filter(employee => employee.roleId === 1 
            (
              <Card.Body>
                <div className={`${styles.detail}`}>
                  <input key = {employee.employee_id} type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange}></input>
                  {employee.first_name + " " + employee.last_name}
                </div>
                <div className={`${styles.chiefMac}`}></div>
              </Card.Body>
            ))}
            </Card.Container>
            <div className={styles.flexRow}>
            <Button color="red" onClick = {() => orderdelete(order.order_by)}>
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
                </Modal.Body>
            </Modal>

            <Modal modal={modalDetail}>
            <Modal.Header>รายละเอียดข้อมูลออเดอร์</Modal.Header>
        <Modal.Body>
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
                <div>#1234567890</div>
                <div>ชญณิพัฑฒ์ ธนะปรีดากุล</div>
                <div>089-333-4444</div>
                <div>
                252 ถ.รัชดาภิเษก แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพฯ 10310
                </div>
                <div>18/08/2020, ช่วงเช้า 10:00 - 12:00 น. </div>
                <div>ติดตั้ง (1)</div>
                <div>1</div>
                <div>xxxxxxxx</div>
                <div>
                Lorem ipsum dolor sit amet, in blanditiis tortor. Tellus
                vestibulum libero dui et platea pretium, neque aliquam vivamus,
                id est, suscipit dui felis, tincidunt sed erat. In bibendum
                cras, vestibulum justo elit amet non, in sed turpis. Vehicula
                consectetuer voluptates fermentum phasellus magna{' '}
                </div>
                </div>
                </div>
                </Modal.Body>
                </Modal>
                </div>
            ))}
            </div>
            </div>
        )
    }
}

export default PostsOrder;