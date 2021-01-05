import React from 'react'
import { Card, Table, Modal, Button, Dropdown } from '../../../../components/'
import styles from './Equipment.module.css'
import { FiEdit3 } from 'react-icons/fi'
import { observer } from 'mobx-react-lite'
import { useModal } from '../../../../hooks'

const headers = [
  'ลำดับ',
  'อุปกรณ์',
  'ยี่ห้อ',
  'จำนวนการเบิก',
  'จำนวนคงเหลือ',
  'หน่วย',
  'จัดการอุปกรณ์',
  '',
]

const equipmentMock = [
  {
    id: 0,
    name: 'บันไดสูง 3เมตร',
    brand: 'Daikin',
    model: 'not sure!!',
    detail:
      'Model : FTM 18 NV2S, Wall Mounted Type ( Smash II - Non Inverter R32 )',
    unit: 'ตัว',
  },
]

export const Equipment = observer( () => {
  const modal = useModal()
  return (
    <Card.Container className={styles.page}>
      <Card.Body className={styles.content}>
        <header className="font-xl weight-md">
          คลังอุปกรณ์ที่่ใช้แล้วหมดไป ({equipmentMock.length})
        </header>

        <Table.Container className={styles.space}>
          <Table.Header headers={headers} />
          {equipmentMock.map((stock, index) => (
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
        <Modal.Header>+ คลังอุปกรณ์ช่าง</Modal.Header>
        <Modal.Body>
          <Dropdown label="ชื่ออุปกรณ์" />
          <Dropdown label="ยี่ห้อ" />
          <Dropdown label="หน่วยอุปกรณ์" />
        </Modal.Body>
      </Modal>
    </Card.Container>
  )
})
