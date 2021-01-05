import React from 'react'
import {
  Badge,
  Button,
  Card,
  Modal,
  Dropdown,
  Textbox,
  Dropbox,
  Spacer,
} from '../../../../components'
import {
  FaBell,
  FaCalendarDay,
  FaPlus,
  FaHandPaper,
  FaListUl,
  FaSearch,
} from 'react-icons/fa'
import { SiApacheairflow } from 'react-icons/si'
import { AiOutlineSetting, AiOutlineCheck } from 'react-icons/ai'
import { RiUserSettingsLine } from 'react-icons/ri'
import { BsX } from 'react-icons/bs'
import styles from './Notification.module.css'
import { useModal } from '../../../../hooks'

export const Notification = () => {
  const modalDetail = useModal()
  const modalAddOrder = useModal()
  const modalManage = useModal()

  return (
    <>
      <Card.Container>
        <Card.Body className={`${styles.wrapperBody}`}>
          <div className={`${styles.wrapperHeader}`}>
            <div className={`${styles.wrapperHeaderContent} font-xl weight-md`}>
              <FaBell />
              แจ้งเตือนออเดอร์
            </div>
            <div className='flex'>
              <Button color="yellow" size="md">
                <FaCalendarDay /> ปฎิทินช่าง
              </Button>
              <Spacer x={0.25}/>
              <Button size="md" color="teal" onClick={modalAddOrder.open}>
                <FaPlus />
                เพิ่มออเดอร์
              </Button>
            </div>
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
                    <Button onClick={modalManage.open}>
                      <RiUserSettingsLine />
                      ทีมช่างที่รับงาน
                    </Button>
                  </div>
                  <div className="flex flex-row">
                    <Button size="md" color="green">
                      <AiOutlineCheck />
                      รับงาน
                    </Button>
                    <Spacer x={0.25} />
                    <Button size="md" color="red">
                      <BsX />
                      ปฏิเสธงาน
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
            <div className={`${styles.flexColumn}`}>
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
            <div className={`${styles.flexColumn2}`}>
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
      <Modal modal={modalAddOrder}>
        <Modal.Header>+ เพิ่มออเดอร์หน้าร้าน (Walk In)</Modal.Header>
        <Modal.Body>
          <div className={`${styles.flexColumn}`}>
            Order
            <div className={`${styles.flexRow}`}>
              <div className={`${styles.flexColumn}`}>
                <div>Brand</div>
                <Dropdown className="tb-size-md" />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>Type inverter</div>
                <Dropdown className="tb-size-md" />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>BTU</div>
                <Dropdown className="tb-size-md" />
              </div>
            </div>
            <div className={`${styles.flexRow}`}>
              <div className={`${styles.flexColumn}`}>
                <div>Type CDU</div>
                <Dropdown className="tb-size-md" />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>Type FCU</div>
                <Dropdown className="tb-size-md" />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>Model</div>
                <Dropdown className="tb-size-md" />
              </div>
            </div>
          </div>

          <div className={`${styles.flexColumn}`}>
            ช่องทางการรับทราบข่าวสาร
            <div className={`${styles.flexRow}`}>
              <div className={`${styles.flexColumn}`}>
                <div>แหล่งที่มา</div>
                <div className={`${styles.flexRow}`}>
                  <Dropdown className="tb-size-md" />
                  <Textbox placeHolder="กรณีอื่นๆ" />
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.flexColumn}`}>
            ข้อมูลส่วนตัว
            <div className={`${styles.flexRow}`}>
              <div className={`${styles.flexColumn}`}>
                <div>ชื่อ</div>
                <Textbox />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>นามสกุล</div>
                <Textbox />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>เบอร์โทร</div>
                <Textbox />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>ID Line</div>
                <Textbox />
              </div>
            </div>
            <div className={`${styles.flexRow}`}>
              <div className={`${styles.flexColumn}`}>
                <div>เลขประจำตัวผู้เสียภาษี</div>
                <Textbox />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>อาชีพ</div>
                <Textbox />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>อีเมล์</div>
                <Textbox />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>Facebook</div>
                <Textbox />
              </div>
            </div>
          </div>

          <div className={`${styles.flexRowNoSpace}`}>
            <div className={`${styles.flexColumn}`}>
              <div>รูปโปรไฟล์</div>
              <Dropbox />
            </div>
            <div className={`${styles.flexColumn}`}>
              <div>บัตรประจำตัวประชาชน</div>
              <Dropbox />
            </div>
          </div>

          <div className={`${styles.flexColumn}`}>
            สถานที่ติดตั้ง/ส่งสินค้า
            <div className={`${styles.flexRow}`}>
              <div className={`${styles.flexColumn}`}>
                <div>ที่อยู่</div>
                <Textbox />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>ประเทศ</div>
                <Dropdown className="tb-size-md" />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>จังหวัด</div>
                <Dropdown className="tb-size-md" />
              </div>
            </div>
            <div className={`${styles.flexRow}`}>
              <div className={`${styles.flexColumn}`}>
                <div>ตำบล/แขวง</div>
                <Textbox />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>อำเภอ/เขต</div>
                <Dropdown className="tb-size-md" />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>รหัสไปรษณีย์</div>
                <Dropdown className="tb-size-md" />
              </div>
            </div>
          </div>

          <div className={`${styles.flexColumn}`}>
            นัดหมาย
            <div className={`${styles.flexRowNoSpace}`}>
              <div className={`${styles.flexColumn}`}>
                <div>วันที่นัดหมาย</div>
                <Textbox as="date" />
              </div>
              <div className={`${styles.flexColumn}`}>
                <div>ช่วงเวลาที่นัดหมาย</div>
                <Dropdown className="tb-size-md" />
              </div>
            </div>
          </div>

          <div>
            <Button color="grey" onClick={modalAddOrder.close}>
              ยกเลิก
            </Button>
            <Button color="green">ยืนยันเพิ่มออเดอร์</Button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal modal={modalManage}>
        <Modal.Header>
          <div>
            <RiUserSettingsLine />
            จัดการคิวช่าง
          </div>
        </Modal.Header>
        <Modal.Body>
          ข้อมูลออเดอร์
          <Card.Container noShadow className={styles.cardContainer}>
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
                  <div className={`${styles.status}`}>
                    <div>
                      <SiApacheairflow size="24" color="2899E0" />
                      X1
                    </div>

                    <div>
                      <AiOutlineSetting size="24" color="2899E0" />
                      X0
                    </div>

                    <div>
                      <FaHandPaper size="24" color="2899E0" />
                      X0
                    </div>
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
          <Card.Container>
            <Card.Body>
              <div className={`${styles.flexRow}`}>
                <div className={`${styles.flexColumn}`}>
                  <div>วันที่นัดหมาย</div>
                  <Textbox as="date" />
                </div>
                <div className={`${styles.flexColumn}`}>
                  <div>ช่วงเวลาที่นัดหมาย</div>
                  <Dropdown className="tb-size-md" />
                </div>
                <Button>
                  <FaSearch />
                  ค้นหาช่าง
                </Button>
              </div>
            </Card.Body>
          </Card.Container>
          <div>
            <div className={`${styles.flexRow}`}>
              <div>เลือกหัวหน้าช่าง</div>
              <div>รายการที่เลือก: 1</div>
            </div>
            <Card.Container noShadow className={styles.cardContainer}>
              {Array(3)
                .fill('')
                .map(() => (
                  <Card.Body>
                    <div className={`${styles.detail}`}>
                      <input type="checkbox"></input>
                      จิรัช ไชยสินธ์ เบอร์โทรติดต่อ : 095-414-1278
                    </div>
                    <div className={`${styles.chiefMac}`}></div>
                  </Card.Body>
                ))}
            </Card.Container>
          </div>
          <div>
            <div className={`${styles.flexRow}`}>
              <div>เลือกลูกทีมช่าง</div>
              <div>รายการที่เลือก: 2</div>
            </div>
            <Card.Container noShadow className={styles.cardContainer}>
              {Array(4)
                .fill('')
                .map(() => (
                  <Card.Body>
                    <div className={`${styles.detail}`}>
                      <input type="checkbox"></input>
                      กัมพล ศิริกิจวัชรโชติ
                    </div>
                    <div className={`${styles.chiefMac}`}></div>
                  </Card.Body>
                ))}
            </Card.Container>
          </div>
          <div className={styles.flexRow}>
            <Button color="red">
              <BsX />
              ปฏิเสธงาน
            </Button>
            <div className={styles.BBottom}>
              <Button color="grey" onClick={modalManage.close}>
                ปิด
              </Button>
              <Button color="green">
                <AiOutlineCheck />
                รับงาน
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
