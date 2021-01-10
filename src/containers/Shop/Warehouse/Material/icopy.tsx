import React from 'react'
import { Card, Table, Button, Modal, Dropdown, Spacer, Textbox, Textarea } from '../../../../components'
import styles from './Material.module.css'
import { FiEdit3 } from 'react-icons/fi'
import { useModal } from '../../../../hooks'

const headers = [
  'ลำดับ',
  'อุปกรณ์',
  'ยี่ห้อ',
  'จำนวนการเบิก',
  'จำนวนคงเหลือ',
  'หน่วย',
  'จัดการอุปกรณ์',
  ''
]

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

const counts = "0";

export const Material = () => {
  const modal = useModal()

  return (
    <Card.Container className={styles.page}>
      <Card.Body className={styles.content}>
        <header className="font-xl weight-md">
          คลังอุปกรณ์ที่่ใช้แล้วหมดไป ({materialMock.length})
        </header>

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
        <Modal.Header>+ คลังอุปกรณ์ที่่ใช้แล้วหมดไป</Modal.Header>
        <Modal.Body>
        <div >
          <div>
              <Dropdown label="ชื่ออุปกรณ์" />
              <br></br>
              <Dropdown label="ยี่ห้อ" /> <Spacer x={1.5} /> <Textbox label="หน่วยอุปกรณ์" />
              <button /><Textbox label={counts}></Textbox><button /><Spacer x={1.5} /><Dropdown label="หน่วยอุปกรณ์" />

          </div>
        </div>
        </Modal.Body>
      </Modal>
    </Card.Container>
  )
}
