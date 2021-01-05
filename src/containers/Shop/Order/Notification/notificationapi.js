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
import { useModal } from '../../../../hooks'
import orderdelete from '../../../../orderdelete'
import orderpostapi from '../../../../orderpostapi'

const modalDetail = useModal()
const modalManage = useModal()
const modalAddOrder = useModal()
const today = new Date();
const timestamp = today.toISOString();
var timerange = "";
var pass_value = {};
class NotificationOrder extends React.Component {

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
        return (
        <div>
            {this.state.orders.map(order =>(
                <div>
                    {this.state.customers.map(customer =>(
                        <div>
                            {this.state.employees.map(employee =>(
                                <div>


<Card.Container>
            <Card.Body className={`${styles.wrapperBody}`}>
              <div className={`${styles.wrapperHeader}`}>
                <div className={`${styles.wrapperHeaderContent} font-xl weight-md`}>
                  <FaBell />
                  แจ้งเตือนออเดอร์
                </div><Spacer x={0.5} /><div className='circle'>3</div>
                <div className='flex'>
                  <Button color="yellow" size="md">
                    <FaCalendarDay /> ปฎิทินช่าง
                  </Button>
                  <Spacer x={0.25}/>
                  <Button size="md" color="teal" onClick={modalAddOrder.open}>
                    <FaPlus />
                    เพิ่มออเดอร์
                  </Button>
                </div>
              </div>
        

                  <Card.Container className={`${styles.wrapperCard}`}>

                    <Card.Body className={`${styles.wrapperCardBody}`}>
                    'sectionone'
                      <div className={`${styles.wrapperCardBodyC1}`}>
                        <Badge color="yellow">ติดตั้ง</Badge>
                        <Badge>บริการ</Badge>
                      </div>
                      <div
                        className={`${styles.wrapperCardBodyAC} font-mr weight-re`}
                      >
                        <div className={`${styles.wrapperCardBodyC2}`}>
                          <div>วันที่นัดหมาย : {order.appointment_date}</div>
                          <div>เวลา : {order.time_period}</div>
                        </div>
                        <div className={`${styles.wrapperCardBodyC2}`}>
                          <div>ชื่อ : {customer.first_name + " " + customer.last_name}</div>
                          <div>
                            ที่อยู่ : {customer.address + " " + customer.district + " " +customer.subdistrict + " " +customer.province + " " + customer.country + " " + customer.postcode}
                          </div>
                        </div>
                        <div className={`${styles.wrapperCardBodyC2}`}>
                          <div>ช่องทางการสั่งซื้อ : Walk In</div>
                        </div>
                      </div>
                    'endsectionone'
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
                      'sectiontwo'
                      <div className="flex flex-row">
                        <Button size="md" color="green">
                          <AiOutlineCheck />
                          รับงาน
                        </Button>
                        <Spacer x={0.25} />
                        <Button size="md" color="red" onClick = {() => orderdelete(order.order_id)}>
                          <BsX />
                          ปฏิเสธงาน
                        </Button>
                      </div>
                      'endsectiontwo'
                    </Card.Footer>
                  </Card.Container>

            </Card.Body>

          </Card.Container>
          <Modal modal={modalDetail}>
        <Modal.Header>รายละเอียดข้อมูลออเดอร์</Modal.Header>
        <Modal.Body>
        'sectionthree'
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
              <script>if (order.time_period === "10:00-12:00") {timerange = "เช้า"} else {timerange = "บ่าย"}</script>
              <div>{order.appointment_date}, ช่วง{timerange} + " " +{order.time_period} น. </div>
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
        'endofsectionthree'

        </Modal.Body>
      </Modal>

      <Modal modal={modalAddOrder}>
        <Modal.Header>+ เพิ่มออเดอร์หน้าร้าน (Walk In)</Modal.Header>
        <Modal.Body>
        'sectionfour'
          <div className={`${styles.flexColumn}`}>
            Order
            <div className={`${styles.flexRow}`}>
              <div className={`${styles.flexColumn}`}>
                <div>Brand</div>
                <Dropdown className="tb-size-md" />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>Type inverter</div>
                <Dropdown className="tb-size-md" />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>BTU</div>
                <Dropdown className="tb-size-md" />
              </div>
            </div>
            <div className={`${styles.flexRow}`}>
              <div className={`${styles.flexColumn}`}>
                <div>Type CDU</div>
                <Dropdown className="tb-size-md" />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>Type FCU</div>
                <Dropdown className="tb-size-md" />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>Model</div>
                <Dropdown className="tb-size-md" />
              </div>
            </div>
          </div>

          <div className={`${styles.flexColumn}`}>
            ช่องทางการรับทราบข่าวสาร
            <div className={`${styles.flexRow}`}>
              <div className={`${styles.flexColumn}`}>
                <div>แหล่งที่มา</div>
                <div className={`${styles.flexRow}`}>
                  <Dropdown className="tb-size-md" />
                  <Textbox placeHolder="กรณีอื่นๆ" />
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.flexColumn}`}>
            ข้อมูลส่วนตัว
            <div className={`${styles.flexRow}`}>
              <div className={`${styles.flexColumn}`}>
                <div>ชื่อ</div>
                <Textbox />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>นามสกุล</div>
                <Textbox />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>เบอร์โทร</div>
                <Textbox />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>ID Line</div>
                <Textbox />
              </div>
            </div>
            <div className={`${styles.flexRow}`}>
              <div className={`${styles.flexColumn}`}>
                <div>เลขประจำตัวผู้เสียภาษี</div>
                <Textbox />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>อาชีพ</div>
                <Textbox />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>อีเมล์</div>
                <Textbox />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>Facebook</div>
                <Textbox />
              </div>
            </div>
          </div>

          <div className={`${styles.flexRowNoSpace}`}>
            <div className={`${styles.flexColumn}`}>
              <div>รูปโปรไฟล์</div>
              <Dropbox />
            </div>
            <div className={`${styles.flexColumn}`}>
              <div>บัตรประจำตัวประชาชน</div>
              <Dropbox />
            </div>
          </div>

          <div className={`${styles.flexColumn}`}>
            สถานที่ติดตั้ง/ส่งสินค้า
            <div className={`${styles.flexRow}`}>
              <div className={`${styles.flexColumn}`}>
                <div>ที่อยู่</div>
                <Textbox />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>ประเทศ</div>
                <Dropdown className="tb-size-md" />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>จังหวัด</div>
                <Dropdown className="tb-size-md" />
              </div>
            </div>
            <div className={`${styles.flexRow}`}>
              <div className={`${styles.flexColumn}`}>
                <div>ตำบล/แขวง</div>
                <Textbox />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>อำเภอ/เขต</div>
                <Dropdown className="tb-size-md" />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>รหัสไปรษณีย์</div>
                <Dropdown className="tb-size-md" />
              </div>
            </div>
          </div>

          <div className={`${styles.flexColumn}`}>
            นัดหมาย
            <div className={`${styles.flexRowNoSpace}`}>
              <div className={`${styles.flexColumn}`}>
                <div>วันที่นัดหมาย</div>
                <Textbox as="date" />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>ช่วงเวลาที่นัดหมาย</div>
                <Dropdown className="tb-size-md" />
              </div>
            </div>
          </div>

          <div>
            <Button color="grey" onClick={modalAddOrder.close}>
              ยกเลิก
            </Button>
            <Button color="green">ยืนยันเพิ่มออเดอร์</Button>
          </div>
          'endofsectionfour'
        </Modal.Body>
      </Modal>

       <Modal modal={modalManage}>
        <Modal.Header>

          <div>
            <RiUserSettingsLine />
            จัดการคิวช่าง
          </div>
        </Modal.Header>
        <Modal.Body>
          ข้อมูลออเดอร์

            'sectionfive'
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
                  <div className={`${styles.contentDetailC2}`}>
                    เวลา : ช่วง{timerange + " "} {order.time_period} น.
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

        'endofsectionfive'
        </Modal.Body>
      </Modal>


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
export default NotificationOrder;