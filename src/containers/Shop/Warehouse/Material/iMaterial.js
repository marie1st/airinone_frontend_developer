import React, { useEffect, useState }from 'react'
import { Card, Table, Button, Modal, Dropdown, Spacer, Textbox, Textarea } from '../../../../components/'
import styles from './Material.module.css'
import { FiEdit3 } from 'react-icons/fi'
import { useModal } from '../../../../hooks'


const headers = [
  'ลำดับ',
  'อุปกรณ์',
  'ยี่ห้อ',
  'จำนวนเบิก',
  'จำนวนคงเหลือ',
  'หน่วย',
  'จัดการอุปกรณ์',
  ''
]




export const IMaterialApi = () => {
  const modal= useModal();
  const [ErrorData, setErrors] = useState(false);
  const [UsedEquipData, SetUsedEquip] = useState([]);
  const [WithdrawUsedData, SetWithDrawUsed] = useState([]);


  async function fetchData() {
    const response = await fetch("http://localhost:3000/used-equipments")
      .then(response=>response.json())
      .then(response=>SetUsedEquip(response))
      .catch(err => setErrors(err));
    const resp = await fetch("http://localhost:3000/withdraw-used-equipments")
      .then(resp => resp.json())
      .then(resp =>SetWithDrawUsed(resp));
    
  }


  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
          <Card.Container className={styles.page}>
      <Card.Body className={styles.content}>
        <header className="font-xl weight-md">
          คลังอุปกรณ์ที่่ใช้แล้วหมดไป ({UsedEquipData.length})
        </header>       
        <Table.Container className={styles.space}>
          <Table.Header headers={headers} />
      {UsedEquipData.map((stock, index) => (
            <>
            {WithdrawUsedData.filter(us=> us.name=== stock.name).map((st, key)=>(
 
            <Table.Row key={stock.id} content={stock.description}>
              <Table.Col>{index + 1}</Table.Col>
              <Table.Col>{stock.name}</Table.Col>
              <Table.Col>{stock.brand}</Table.Col>
              <Table.Col>{st.withdraw_amount}</Table.Col>
              <Table.Col>{stock.amount - st.withdraw_amount}</Table.Col>
              <Table.Col>ตัว</Table.Col>
              <Table.Col>
                <Button onClick={() => modal.open()}>
                  <FiEdit3
                    className="font-xl"
                    style={{ marginBottom: '-6px' }}
                  />
                  แก้ไข
                </Button>
              </Table.Col>
            </Table.Row>
  
            ))}
            </>
          ))}      
          </Table.Container>          
      </Card.Body>
      <Modal modal={modal}>
        <Modal.Header>+ คลังอุปกรณ์ที่่ใช้แล้วหมดไป</Modal.Header>
        <Modal.Body>
        <div >
          <div>
              <Dropdown label="ชื่ออุปกรณ์" />
              <br></br>
              <Dropdown label="ยี่ห้อ" /> <Spacer x={1.5} /> <Textbox label="หน่วยอุปกรณ์" />
              <button /><Textbox label="รายละเอียดอุปกรณ์"></Textbox><button /><Spacer x={1.5} /><Dropdown label="หน่วยอุปกรณ์" />

          </div>
        </div>
        </Modal.Body>
      </Modal>
    </Card.Container>
    </>
  )
}



export default IMaterialApi;