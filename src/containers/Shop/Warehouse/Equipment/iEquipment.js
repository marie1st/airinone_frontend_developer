import React, { useEffect, useState }from 'react'

import { FiEdit3 } from 'react-icons/fi'
import { Card, Table, Modal, Button, Dropdown, Textbox, Dropbox } from '../../../../components/'
import styles from './Equipment.module.css'
import { useModal } from '../../../../hooks'
import { SearchBox } from '../../../../components/Input/SearchBox'

const titleStyle = `${styles['set-title']} font-lg weight-md`
const itemStyle = `${styles['set-inner-row']} font-md weight-li`

const headers = [  'ลำดับ',
'อุปกรณ์',
'ยี่ห้อ',
'จำนวนเบิก',
'จำนวนคงเหลือ',
'หน่วย',
'จัดการอุปกรณ์',
  '']




export const IEquipmentApi = () => {
  const modal= useModal();
  const modale = useModal();

  const [ErrorData, setErrors] = useState(false);
  const [MechanicData, SetMech] = useState([]);
  const [WithdrawMech, SetWithDrawMech] = useState([]);

  async function fetchData() {
    const respon = await fetch("http://localhost:3000/mechanical-equipments")
      .then(respon=>respon.json())
      .then(respon =>SetMech(respon))
      .catch(respon =>setErrors(respon));
    const responses = await fetch("http://localhost:3000/withdraw-mechanical-equipments")
      .then(responses=>responses.json())
      .then(responses=>SetWithDrawMech(responses));
  }


  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
       <Card.Container className={styles.page}>
      <Card.Body className={styles.content}>
        <header className="font-xl weight-md">
        <div className={`${styles.header}`}>
            <div className={`${styles['group-header']}`}>
          คลังอุปกรณ์ที่่ใช้แล้วหมดไป ({MechanicData.length})
          <div className={`${styles['group-header']}`}>
              <SearchBox size="fluid" />
              <div className={`${styles['customer-label']}`}>
                <Button color="yellow" onClick={modale.open}>
                  + เพิ่มอุปกรณ์
                </Button>
              </div>
        </div>
        </div>
        </div>
        </header>     
      
        <Table.Container className={styles.space}>
          <Table.Header headers={headers} />
{MechanicData.map((stock, index) => (
    <>
    {WithdrawMech.filter(mech=> mech.meid === stock.id).map((st, key) =>(
            <Table.Row key={stock.id} content={stock.description}>
            <Table.Col>{index + 1}</Table.Col>
            <Table.Col>{stock.name}</Table.Col>
            <Table.Col>{stock.brand}</Table.Col>
             <Table.Col>{st.withdraw_amount}</Table.Col>
            <Table.Col>{stock.amount - st.withdraw_amount}</Table.Col>
            <Table.Col>ตัว</Table.Col>
            <Table.Col>
            <Button onClick={() => modal.open()}>
            <FiEdit3 className="font-xl" style={{ marginBottom: '-6px' }}/>แก้ไข
            </Button>
            </Table.Col>
            </Table.Row>
    ))}
    </>
))}
    
   
          
           
       
        </Table.Container>
      </Card.Body>
      <Modal modal={modal}>
        <Modal.Header>+ คลังอุปกรณ์ช่าง</Modal.Header>
        <Modal.Body>
          <Dropdown label="ชื่ออุปกรณ์" />
          <Dropdown label="ยี่ห้อ" />
          <Dropdown label="หน่วยอุปกรณ์" />
        </Modal.Body>
      </Modal>
      {/* Modal Segment */}
      <Modal modal={modale}>
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
              <Button color="green" >ยืนยันเพิ่ม</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Card.Container>
    </>
  )
}



export default IEquipmentApi;