import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { SearchBox } from '../../../components/Input/SearchBox'
import {
  Button,
  Layout,
  Card,
  Dropdown,
  Modal,
  Textbox,
  Dropbox,
} from '../../../components'
import { useStore } from '../../../hooks'
import { observer } from 'mobx-react-lite'
import { useModal } from '../../../hooks'
import styles from './Customer.module.css'
import Posts from '../../../testapi'
import testpost from '../../../test-post'
import submitOK from '../../../submitOK'



export const Customer = observer(() => {
  const modal = useModal();
  const { customerStore } = useStore();
  const exampleCustomer = [
    {
      "id": "1234",
      "first_name": "สรันรัตน์",
      "last_name": "เรืองรอง",
      "phone_number": "08797793",
      "id_line": "sararat.r",
      "occupation": "devop",
      "email": "sararat.r@gmail.com",
      "facebook": "sararat",
      "profile_pic": "NULL",
      "id_card_pic": "NULL",
      "address": "123",
      "country": "Thailand",
      "province": "Bangkok",
      "subdistrict": "Bangkapi",
      "district": "Bangkapi",
      "postcode": "10240",
      "created_at": "2020-12-27T04:53:53.000Z"
    },
    {
      "id": "1235",
      "first_name": "เรืองฤทธิ์",
      "last_name": "สนุกสนาน",
      "phone_number": "08173879",
      "id_line": "ruengrit.s",
      "occupation": "technician",
      "email": "ruengrit.s@gmail.com",
      "facebook": "NULL",
      "profile_pic": "sNULL",
      "id_card_pic": "sNULL",
      "address": "234",
      "country": "Thailand",
      "province": "Bangkok",
      "subdistrict": "Bangna",
      "district": "Bangna",
      "postcode": "10260",
      "created_at": "2020-12-27T05:19:54.000Z"
    }
  ];

  const titleStyle = `${styles['set-title']} font-lg weight-md`
  const itemStyle = `${styles['set-inner-row']} font-md weight-li`
  const url_get = "http://localhost/customers/"
  const today = new Date();
  const timestamp = today.toISOString();
  var pass_value = {
    "id": "1235",
    "first_name": "เรืองฤทธิ์",
    "last_name": "สนุกสนาน",
    "phone_number": "08173879",
    "id_line": "ruengrit.s",
    "occupation": "technician",
    "email": "ruengrit.s@gmail.com",
    "facebook": "NULL",
    "profile_pic": "sNULL",
    "id_card_pic": "sNULL",
    "address": "234",
    "country": "Thailand",
    "province": "Bangkok",
    "subdistrict": "Bangna",
    "district": "Bangna",
    "postcode": "10260",
    "created_at": `${timestamp}`
  }



  return (
    <Layout>
      <Card.Container fullHeight>
        <Card.Body>
          <div className={`${styles.header}`}>
            <div className={`${styles['group-header']}`}>
              <FaUserFriends size={40} />
              <div className={`${styles['customer-label']} font-xl`}>
                ลูกค้า
              </div>
            </div>
            <div className={`${styles['group-header']}`}>
              <SearchBox size="fluid" />
              <div className={`${styles['customer-label']}`}>
                <Button color="teal" onClick={modal.open}>
                  + เพิ่มรายชื่อ
                </Button>
              </div>
            </div>
          </div>
          <div>
            <Posts />
          </div>
        </Card.Body>
      </Card.Container>

      {/* Modal Segment */}
      <Modal modal={modal}>
        <Modal.Header>+ เพิ่มรายชื่อลูกค้า</Modal.Header>
        <Modal.Body>
          <div className={titleStyle}>ช่องทางการรับข่าวสาร</div>
          <div className={`${styles['set-row']}`}>
            <div className={itemStyle}>
              <Dropdown className="tb-size-sm" label="แหล่งที่มา" />
            </div>
            <Textbox
              placeHolder="กรณีอื่นๆ"
              className={`${styles['set-inner-row']}`}
            />
          </div>

          <div className={titleStyle}>ข้อมูลส่วนตัว</div>
          <div className={`${styles['set-row']}`}>
            <div className={itemStyle}>
              <Textbox id="first_name" label="ชื่อ" />
            </div>
            <div className={itemStyle}>
              <Textbox id = "last_name" label="นามสกุล" />
            </div>
            <div className={itemStyle}>
              <Textbox id="phone_number" label="เบอร์โทร" />
            </div>
            <div className={itemStyle}>
              <Textbox id="id_line" label="ID Line" />
            </div>
          </div>

          <div>
            <div className={`${styles['set-row']}`}>
              <div className={itemStyle}>
                <Textbox id ="tax_id" label="เลขประจำตัวผู้เสียภาษี" />
              </div>
              <div className={itemStyle}>
                <Textbox id= "occupation" label="อาชีพ" />
              </div>
              <div className={itemStyle}>
                <Textbox id ="email" label="อีเมลล์" />
              </div>
              <div className={itemStyle}>
                <Textbox id ="facebook" label="Facebook" />
              </div>
            </div>
          </div>

          <div className={`${styles['set-row']}`}>
            <div className={itemStyle}>
              <Dropbox id="profile_pic" label="รูปโปรไฟล์" filename =""/>
            </div>
            <div className={itemStyle}>
              <Dropbox id = "id_card_pic" label="บัตรประจำตัวประชาชน" filename="" />
            </div>
          </div>

          <div>
            <div className={titleStyle}>สถานที่ติดตั้ง/ส่งสินค้า</div>
            <div className={`${styles['set-row']}`}>
              <div className={itemStyle}>
                <Textbox id = "address" className="tb-size-md" label="ที่อยู่" />
              </div>
              <div className={itemStyle}>
                <Dropdown id ="country" className="tb-size-md" label="ประเทศ" />
              </div>
              <div className={itemStyle}>
                <Dropdown id= "country" className="tb-size-md" label="จังหวัด" />
              </div>
            </div>
          </div>

          <div>
            <div className={`${styles['set-row']}`}>
              <div className={itemStyle}>
                <Textbox id= "subdistrict" className="tb-size-md" label="ตำบล/แขวง" />
              </div>
              <div className={itemStyle}>
                <Dropdown id="district" className="tb-size-md" label="อำเภอ/เขต" />
              </div>
              <div className={itemStyle}>
                <Dropdown id="postcode" className="tb-size-md" label="รหัสไปรษณีย์" />
              </div>
            </div>
          </div>
          <div className={`${styles['set-button']}`}>
            <div className={`${styles['set-inner-row']}`}>
              <Button color="grey" onClick={modal.close}>
                ยกเลิก
              </Button>
            </div>
            <div className={`${styles['set-inner-row']}`}>
              <Button color="green" onClick={() => testpost("http://localhost:3000/customers", pass_value)}>ยืนยันเพิ่ม</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Layout>
  )
})
