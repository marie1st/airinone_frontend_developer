import React, { useEffect, useState }from 'react'
import {

  Button,
  Card,
  Modal,
  Dropdown,
  Table,

} from '../../../../components'
import { FiEdit3 } from 'react-icons/fi'
import styles from './Stock.module.css'
import { useModal } from '../../../../hooks'

const headers = [  'ลำดับ',
'อุปกรณ์',
'ยี่ห้อ',
'BTU/h',
'จำนวนคงเหลือ',
'หน่วย',
'จัดการอุปกรณ์',
  '']




export const IStockApi = () => {
  const modal= useModal();

  const [ErrorData, setErrors] = useState(false);
  const [WarehouseData, SetWarehouse] = useState([]);
  const [MechanicData, SetMech] = useState([]);
  const [WithdrawMech, SetWithDrawMech] = useState([]);

  async function fetchData() {
    const res = await fetch("http://localhost:3000/warehouses")
      .then(res => res.json())
      .then(res => SetWarehouse(res))
      .catch(err => setErrors(err));

  }


  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
       <Card.Container className={styles.page}>
      <Card.Body className={styles.content}>
        <header className="font-xl weight-md">
          คลังสินค้า ({WarehouseData.length})
        </header>
        
        <Card.Container className={styles.space}>
          <Card.Header>ค้นหาแบบละเอียด</Card.Header>
          <Card.Footer className={styles.filter}>
            <div className={styles['filter-col']}>
              <label>ประเภท</label>
              <Dropdown list={['Room Air']} />
            </div>
            <div className={styles['filter-col']}>
              <label>ยี่ห้อ</label>
              <Dropdown list={['All']} />
            </div>
            <div className={styles['filter-col']}>
              <label>รุ่น</label>
              <Dropdown list={['All']} />
            </div>
            <div className={styles['filter-col']}>
              <label>BTU/H</label>
              <Dropdown list={['3,400-10,900']} />
            </div>
            <div className={styles['filter-btn']}>
              <Button color="grey">ล้างข้อมูล</Button>
              <Button color="teal" size="xl">
                ค้นหาแบบละเอียด
              </Button>
            </div>
          </Card.Footer>
        </Card.Container>

        <Table.Container className={styles.space}>
          <Table.Header headers={headers} />
          {WarehouseData.map((stock, index) => (
            <Table.Row key={stock.id} content={stock.description}>
              <Table.Col>{index + 1}</Table.Col>
              <Table.Col>{stock.name}</Table.Col>
              <Table.Col>{stock.brand}</Table.Col>
              <Table.Col>{stock.btu}</Table.Col>
              <Table.Col>{stock.amount}</Table.Col>
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
        </Table.Container>
      </Card.Body>
      <Modal modal={modal}>
        <Modal.Header>+ คลังอุปกรณ์</Modal.Header>
        <Modal.Body>
          <Dropdown label="ชื่ออุปกรณ์" />
          <Dropdown label="ยี่ห้อ" />
          <Dropdown label="หน่วยอุปกรณ์" />
        </Modal.Body>
      </Modal>
    </Card.Container>
    </>
  )
}



export default IStockApi;