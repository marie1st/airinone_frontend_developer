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

class sectionfour extends React.Component {

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
export default sectionfour;