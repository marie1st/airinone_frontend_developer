import React from 'react'
import { Badge, Button, Card, Modal } from '../../../../components'
import {
  FaCalendarDay,
  FaHandPaper,
  FaListUl,
  FaHome,
  FaElementor,
} from 'react-icons/fa'

import { SiApacheairflow } from 'react-icons/si'
import { AiOutlineSetting} from 'react-icons/ai'
import { RiUserSettingsLine } from 'react-icons/ri'
import styles from './Install.module.css'
import { useModal } from '../../../../hooks'
import { FiEdit3 } from 'react-icons/fi'

export const Install = () => {
  const modalDetail = useModal()
  const modalManage = useModal()

  return (
    <>
      <div>
        <Card.Container>
          <Card.Body className={`${styles.wrapperBody}`}>
            <div className={`${styles.wrapperHeader}`}>
              <div
                className={`${styles.wrapperHeaderContent} font-xl weight-md`}
              >
                <FaHome />
                ดำเนินการติดตั้ง
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
                        <div>ช่องทางการสั่งซื้อ : Walk Out</div>
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
                      <Button onClick={modalManage.open}>
                        <RiUserSettingsLine />
                        ทีมช่างที่รับงาน
                      </Button>
                    </div>
                    <div className={`${styles.wrapperStatus}`}>
                      <div>สถานะปัจจุบัน :</div>
                      <div className={`${styles.wrapperStatusContent}`}>
                        ทดสอบการทำงาน
                      </div>
                      <Button color="teal" size="lg">
                        <FaElementor /> ขั้นตอนติดตั้ง
                      </Button>
                    </div>
                  </Card.Footer>
                </Card.Container>
              ))}
          </Card.Body>
        </Card.Container>



        <Modal modal={modalDetail} className={styles.modalDetail}>
          <Modal.Header
            className={`${styles.modalDetailHeader} font-xl weight-mr`}
          >
            รายละเอียดข้อมูลออเดอร์
          </Modal.Header>
          <Modal.Body className={`${styles.modalDetailBody}`}>
            <div className={`${styles.modalDetailBodyC1} font-mr weight-re`}>
              <div className={styles.modalDetailBCC}>รหัสออเดอร์ :</div>
              <div className={styles.modalDetailBCC}>ชื่อลูกค้า :</div>
              <div className={styles.modalDetailBCC}>เบอร์โทรติดต่อ :</div>
              <div className={styles.modalDetailBCC}>ที่อยู่ :</div>
              <div className={styles.modalDetailBCC}>วันที่นัดหมาย :</div>
              <div className={styles.modalDetailBCC}>ประเภทงาน :</div>
              <div className={styles.modalDetailBCC}>จำนวนแอร์ :</div>
              <div className={styles.modalDetailBCC}>รุ่น :</div>
              <div className={styles.modalDetailBCC}>รายละเอียด :</div>
            </div>
            <div className={`${styles.modalDetailBodyC2} font-mr weight-li`}>
              <div className={styles.modalDetailBCC}>#1234567890</div>
              <div className={styles.modalDetailBCC}>ชญณิพัฑฒ์ ธนะปรีดากุล</div>
              <div className={styles.modalDetailBCC}>089-333-4444</div>
              <div className={styles.modalDetailBCC}>
                252 ถ.รัชดาภิเษก แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพฯ 10310
              </div>
              <div className={styles.modalDetailBCC}>
                18/08/2020, ช่วงเช้า 10:00 - 12:00 น.{' '}
              </div>
              <div className={styles.modalDetailBCC}>ติดตั้ง (1)</div>
              <div className={styles.modalDetailBCC}>1</div>
              <div className={styles.modalDetailBCC}>xxxxxxxx</div>
              <div className={styles.modalDetailBCC}>
                Lorem ipsum dolor sit amet, in blanditiis tortor. Tellus
                vestibulum libero dui et platea pretium, neque aliquam vivamus,
                id est, suscipit dui felis, tincidunt sed erat. In bibendum
                cras, vestibulum justo elit amet non, in sed turpis. Vehicula
                consectetuer voluptates fermentum phasellus magna{' '}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <></>
          </Modal.Footer>
        </Modal>
        <Modal modal={modalManage} className={`${styles.modalManage}`}>
          <Modal.Header>
            <div
              className={`${styles.modalManageHeader} font-xl weight-mr flex items-center`}
            >
              <RiUserSettingsLine />
              ทีมช่างที่รับงาน
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className={`${styles.modalManageCardHeader}`}>
              ข้อมูลออเดอร์
            </div>
            <Card.Container className={`${styles.modalManageCardContainerR1}`}>
              <Card.Body className={`${styles.modalManageCardBodyR1} `}>
                <div className={`${styles.wrapperCardBodyR1C1}`}>
                  <div className={`${styles.modalCardBodyC1Status}`}>
                    <Badge color="yellow">ติดตั้ง</Badge>
                    <Badge>บริการ</Badge>
                  </div>
                  <div className={`${styles.modalManageCardBodyR1IconSpace}`}>
                    <SiApacheairflow size="30" color="2899E0" />
                    X1
                    <AiOutlineSetting size="30" color="2899E0" />
                    X1
                    <FaHandPaper size="30" color="2899E0" />
                    X1
                  </div>
                </div>
                <div>
                  <div className={`${styles.modalManageCardBodyR1Space}`}>
                    <div className={`font-mr weight-re`}>รหัสออเดอร์ :</div>
                    <div className={`font-mr weight-li`}>#1234567890</div>
                  </div>
                  <div className={`${styles.modalManageCardBodyR1Space}`}>
                    <div className={`font-mr weight-re`}>วันที่นัดหมาย :</div>
                    <div className={`font-mr weight-li`}>18/08/2020</div>
                  </div>
                </div>
                <div>
                  <div className={`${styles.modalManageCardBodyR1Space}`}>
                    <div className={`font-mr weight-re`}>ชื่อลูกค้า :</div>
                    <div className={`font-mr weight-li`}>
                      ชญณิพัฑฒ์ ธนะปรีดากุล
                    </div>
                  </div>
                  <div className={`${styles.modalManageCardBodyR1Space}`}>
                    <div className={`font-mr weight-re`}>เวลา :</div>
                    <div className={`font-mr weight-li`}>
                      ช่วงเช้า 10:00 - 12:00
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card.Container>
            <Card.Container className={`${styles.modalManageCardBodyR2}`}>
              <Card.Body>
                <div className={`${styles.modalManageCardBodyR2Chief}`}>
                  <div className={`${styles.modalManageCardBodyR2ChiefHeader}`}>
                    หัวหน้าช่าง
                  </div>
                  <div
                    className={`${styles.modalManageCardBodyR2ChiefDetail} font-li weight-li`}
                  >
                    จิรัช ไชยสินธ์ เบอร์โทรติดต่อ : 095-414-1278
                  </div>
                </div>
                <div className={`${styles.modalManageCardBodyR2Mac}`}>
                  <div className={`${styles.modalManageCardBodyR2MacHeader}`}>
                    ลูกทีมช่าง
                  </div>
                  <div
                    className={`${styles.modalManageCardBodyR2MacDetail} font-li weight-li`}
                  >
                    <div>กัมพล ศิริกิจวัชรโชติ</div>
                    <div>กัมพล ศิริกิจวัชรโชติ</div>
                  </div>
                </div>
              </Card.Body>
            </Card.Container>
          </Modal.Body>
          <Modal.Footer className="flex justify-end">
            <div className={styles.BBottom}>
              <Button color="yellow">
                <FiEdit3 />
                แก้ไข
              </Button>
              <Button color="grey" onClick={modalManage.close}>
                ปิด
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}
