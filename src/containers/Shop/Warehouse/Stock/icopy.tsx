import React from 'react'
import { Card, Table, Button, Modal, Dropdown } from '../../../../components'
import styles from './Stock.module.css'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../../hooks'
import { FiEdit3 } from 'react-icons/fi'
import { useModal } from '../../../../hooks'


/**
 * Define each field of headers
 */
const headers = [  'ลำดับ',
'อุปกรณ์',
'ยี่ห้อ',
'จำนวนการเบิก',
'จำนวนคงเหลือ',
'หน่วย',
'จัดการอุปกรณ์',
  '']

const materialMock = [
    {
      id: 0,
      name: 'FCU',
      brand: 'Daikin',
      model: 'not sure!!',
      detail:
        'Model : FTM 18 NV2S, Wall Mounted Type ( Smash II - Non Inverter R32 )',
      unit: 'ตัว',
    },
  ]

export const Stock = observer(() => {
  const { productStore } = useStore()
  const modal = useModal()

  return (
    <Card.Container className={styles.page}>
      <Card.Body className={styles.content}>
        <header className="font-xl weight-md">
          คลังสินค้า ({productStore.products.length})
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
          {materialMock.map((stock, index) => (
            <Table.Row key={stock.id} content="asd">
              <Table.Col>{index + 1}</Table.Col>
              <Table.Col>{stock.name}</Table.Col>
              <Table.Col>{stock.brand}</Table.Col>
              <Table.Col>Unknown</Table.Col>
              <Table.Col>Unknown</Table.Col>
              <Table.Col>{stock.unit}</Table.Col>
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
  )
})
