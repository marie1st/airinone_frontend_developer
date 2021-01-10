import React from 'react'
import { Badge, Button, Card, Modal, Spacer } from '../../../../components'
import {
  FaCalendarDay,
  FaHandPaper,
  FaListUl,
  FaShoppingCart,
} from 'react-icons/fa'
import { SiApacheairflow } from 'react-icons/si'
import { AiOutlineSetting, AiOutlineCheck } from 'react-icons/ai'
import { RiUserSettingsLine } from 'react-icons/ri'
import styles from './Take.module.css'
import { useModal } from '../../../../hooks'
import { useHistory } from 'react-router-dom'
import { FiEdit3 } from 'react-icons/fi'

export const Take = () => {
  const modalDetail = useModal()
  const modalTeam = useModal()
  const history = useHistory()

  return (
    <>
      <Card.Container>
          <Card.Body className={`${styles.wrapperBody}`}>
            <div className={`${styles.wrapperHeader}`}>
              <div
                className={`${styles.wrapperHeaderContent} font-xl weight-md`}
              >
                <FaShoppingCart />
                อนุมัติคืนของ (5)
              </div>
              <Button color="yellow" size="md">
                <FaCalendarDay /> ปฎิทินช่าง
              </Button>
            </div>
            {Array(3)
              .fill('')
              .map(() => (
                <Card.Container className={`${styles.wrapperCard}`}>
                  <Card.Body className={`${styles.wrapperCardBody}`}>
                    <div className={`${styles.wrapperCardBodyC1}`}>
                      <Badge color="yellow">ติดตั้ง</Badge>
                      <Badge>บริการ</Badge>
                    </div>
                    <div
                      className={`${styles.wrapperCardBodyAC} font-mr weight-re`}
                    >
                      <div className={`${styles.wrapperCardBodyC2}`}>
                        <div>วันที่นัดหมาย : 18/08/2020</div>
                        <div>เวลา : ช่วงเช้า 10:00 - 12:00</div>
                      </div>
                      <div className={`${styles.wrapperCardBodyC2}`}>
                        <div>ชื่อ : ชญณิพัฑฒ์ ธนะปรีดากุล</div>
                        <div>
                          ที่อยู่ : 252 ถ.รัชดาภิเษก แขวงห้วยขวาง เขตห้วยขวาง
                          กรุงเทพฯ 10310
                        </div>
                      </div>
                      <div className={`${styles.wrapperCardBodyC2}`}>
                        <div>ช่องทางการสั่งซื้อ : Walk In</div>
                      </div>
                    </div>
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
                      <Button onClick={modalTeam.open}>
                        <RiUserSettingsLine />
                        ทีมช่างที่รับงาน
                      </Button>
                    </div>
                    <div>
                      <Button
                        color="green"
                        onClick={() => {
                          history.push('/shop/order/take/:id')
                        }}
                      >
                        <AiOutlineCheck /> อนุมัติคืนของ
                      </Button>
                    </div>
                  </Card.Footer>
                </Card.Container>
              ))}
          </Card.Body>
      </Card.Container>

      <Modal modal={modalDetail}>
        <Modal.Header>รายละเอียดข้อมูลออเดอร์</Modal.Header>
        <Modal.Body>
          <div className={`${styles.flexRowNoSpace}`}>
            <div
              className={`${styles.flexColumn} ${styles.modalBodyOrderDetail}`}
            >
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
            <div
              className={`${styles.flexColumn2}  ${styles.modalBodyOrderDetail}`}
            >
              <div>#1234567890</div>
              <div>ชญณิพัฑฒ์ ธนะปรีดากุล</div>
              <div>089-333-4444</div>
              <div>
                252 ถ.รัชดาภิเษก แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพฯ 10310
              </div>
              <div>18/08/2020, ช่วงเช้า 10:00 - 12:00 น. </div>
              <div>ติดตั้ง (1)</div>
              <div>1</div>
              <div>xxxxxxxx</div>
              <div>
                Lorem ipsum dolor sit amet, in blanditiis tortor. Tellus
                vestibulum libero dui et platea pretium, neque aliquam vivamus,
                id est, suscipit dui felis, tincidunt sed erat. In bibendum
                cras, vestibulum justo elit amet non, in sed turpis. Vehicula
                consectetuer voluptates fermentum phasellus magna{' '}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal modal={modalTeam} className={styles.modalTeam}>
        <Modal.Header>
          <div className='flex'>
            <RiUserSettingsLine />
            ทีมช่างที่รับงาน
          </div>
        </Modal.Header>
        <Modal.Body>
          ข้อมูลออเดอร์
          <Card.Container noShadow className="mt-2">
            <Card.Body>
              <div className={`${styles.orderContent}`}>
                <div className={`${styles.wrapperOrderContent} `}>
                  <div className={`${styles.status}`}>
                    <Badge color="yellow">ติดตั้ง</Badge>
                    <Badge>บริการ</Badge>
                  </div>
                  <div className={`${styles.contentDetailC1}`}>
                    รหัสออเดอร์ : #1234567890
                  </div>
                  <div className={`${styles.contentDetailC2}`}>
                    ชื่อลูกค้า : ชญณิพัฑฒ์ ธนะปรีดากุล
                  </div>
                </div>

                <div className={`${styles.wrapperOrderContent} `}>
                  <div className={`${styles.status} flex`}>
                    <SiApacheairflow size="24" color="2899E0" />
                    <Spacer x={0.25}/>
                      X1
                    <Spacer x={0.25}/>
                    <AiOutlineSetting size="24" color="2899E0" />
                    <Spacer x={0.25}/>
                      X0
                    <Spacer x={0.25}/>
                    <FaHandPaper size="24" color="2899E0" />
                    <Spacer x={0.25}/>
                      X0
                  </div>

                  <div className={`${styles.contentDetailC1}`}>
                    วันที่นัดหมาย : 18/08/2020
                  </div>
                  <div className={`${styles.contentDetailC2}`}>
                    เวลา : ช่วงเช้า 10:00 - 12:00
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card.Container>
          <Card.Container noShadow className={styles.cardContainer}>
            <Card.Body>
              <div className={`${styles.chiefMac}`}>
                <div className={`weight-md font-md`}>หัวหน้าช่าง</div>
                <div className={`${styles.detail}`}>
                  จิรัช ไชยสินธ์ เบอร์โทรติดต่อ : 095-414-1278
                </div>
              </div>
              <div className={`${styles.machanical}`}>
                <div className={`weight-md font-md`}>ลูกทีมช่าง</div>
                <div className={`${styles.detail}`}>
                  <div>กัมพล ศิริกิจวัชรโชติ</div>
                  <div>กัมพล ศิริกิจวัชรโชติ</div>
                </div>
              </div>
            </Card.Body>
          </Card.Container>
        </Modal.Body>
        <Modal.Footer>
          <div className={`${styles.BBottom} flex justify-end`}>
            <Button color="yellow">
              <FiEdit3 />
              แก้ไข
            </Button>
            <Spacer x={0.25}/>
            <Button color="grey" onClick={modalTeam.close}>ปิด</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}
