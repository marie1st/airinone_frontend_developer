import React from 'react'
import { Button, Card, Spacer, Table } from '../../../../components'
import styles from './Return.module.css'
import { BiCheck } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'

export const ReturnDetail = () => {
  const history = useHistory()

  return (
    <>
      <div className="flexColumn">
        <div>
          <Card.Container>
            <Card.Body>
              <div className={`${styles.flexRow} ${styles.wrapperHeader}`}>
                <div>อุปกรณ์ที่ใช้แล้วหมดไป</div>
                <div>
                  <Button size="xl" color="yellow">
                    อนุมัติทั้งหมด
                  </Button>
                </div>
              </div>
              <Table.Container>
                <Table.Header
                  headers={[
                    'ลำดับ',
                    'อุปกรณ์',
                    'ยี่ห้อ',
                    'จำนวนที่ขอเบิก',
                    'หน่วย',
                    'การอนุมัติการเบิกของ',
                    '',
                  ]}
                />
                <Table.Body>
                  {Array(18)
                    .fill('')
                    .map(() => (
                      <Table.Row content="Model : FTM 18 NV2S, Wall Mounted Type ( Smash II - Non Inverter R32 )">
                        <Table.Col>1</Table.Col>
                        <Table.Col>FCU</Table.Col>
                        <Table.Col>Daikin</Table.Col>
                        <Table.Col>1</Table.Col>
                        <Table.Col>ตัว</Table.Col>
                        <Table.Col>
                          <div className="flexRow flex">
                            <Button size="md" color="green">
                              อนุมัติ
                            </Button>
                            <Spacer x={0.25}/>
                            <Button size="md" color="red">
                              ไม่อนุมัติ
                            </Button>
                          </div>
                        </Table.Col>
                      </Table.Row>
                    ))}
                </Table.Body>
              </Table.Container>
            </Card.Body>
            <Card.Body>
              <div className={`${styles.flexRow}`}>
                <div>รายการที่เลือก: 10/21</div>
                <div>
                  <Button
                    color="lightblue"
                    size="xl"
                    onClick={() => {
                      history.push('/shop/order/return')
                    }}
                  >
                    <BiCheck />
                    ยืนยันการอนุมัติ
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card.Container>
        </div>
        {/*  --------------------------------- */}
        <br />
        <div>
          <Card.Container>
            <Card.Body>
              <div className={`${styles.flexRow}  ${styles.wrapperHeader}`}>
                <div>อุปกรณ์ช่าง</div>
                <div>
                  <Button size="xl" color="yellow">
                    อนุมัติทั้งหมด
                  </Button>
                </div>
              </div>
              <Table.Container>
                <Table.Body>
                  {Array(18)
                    .fill('')
                    .map(() => (
                      <Table.Row content="Model : FTM 18 NV2S, Wall Mounted Type ( Smash II - Non Inverter R32 )">
                        <Table.Col>1</Table.Col>
                        <Table.Col>FCU</Table.Col>
                        <Table.Col>Daikin</Table.Col>
                        <Table.Col>1</Table.Col>
                        <Table.Col>ตัว</Table.Col>
                        <Table.Col>
                          <div className="flexRow flex">
                            <Button size="md" color="green">
                              อนุมัติ
                            </Button>
                            <Spacer x={0.25} />
                            <Button size="md" color="red">
                              ไม่อนุมัติ
                            </Button>
                          </div>
                        </Table.Col>
                      </Table.Row>
                    ))}
                </Table.Body>
              </Table.Container>
            </Card.Body>
            <Card.Body>
              <div className={`${styles.flexRow}`}>
                <div>รายการที่เลือก: 22/22</div>
                <div>
                  <Button
                    color="lightblue"
                    size="xl"
                    onClick={() => {
                      history.push('/shop/order/return')
                    }}
                  >
                    <BiCheck />
                    ยืนยันการอนุมัติ
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card.Container>
        </div>
      </div>
    </>
  )
}
