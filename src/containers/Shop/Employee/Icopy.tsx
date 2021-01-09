import React from 'react'
import { RiUserSettingsFill } from 'react-icons/ri'
import { SearchBox } from '../../../components/Input/SearchBox'
import {
  Button,
  Layout,
  Card,
  Dropdown,
  Modal,
  Textbox,
  Dropbox,
} from '../../../components'
import { useStore } from '../../../hooks'
import { observer } from 'mobx-react-lite'
import { useModal } from '../../../hooks'
import { EmployeeCard } from './EmployeeCard'
import styles from './Employee.module.css'

export const Employee = observer(() => {
  const modal = useModal()
  const { employeeStore } = useStore()
  const exampleData = [
    {
      role: 'หัวหน้าช่าง',
      name: 'สรัญญา ทุ่มวงศ์',
      phone: '080-000-0000',
      address:
        '108 หมู่ 2 ถนนบางกรวย-จงถนอม ตำบลมหาสวัสดิ์ อำเภอบางกรวย จังหวัดนนทบุรี 11130',
    },
    {
      role: 'หัวหน้าช่าง',
      name: 'สรัญญา ทุ่มวงศ์',
      phone: '080-000-0000',
      address:
        '108 หมู่ 2 ถนนบางกรวย-จงถนอม ตำบลมหาสวัสดิ์ อำเภอบางกรวย จังหวัดนนทบุรี 11130',
    },
    {
      role: 'ช่าง',
      name: 'สรัญญา ทุ่มวงศ์',
      phone: '080-000-0000',
      address:
        '108 หมู่ 2 ถนนบางกรวย-จงถนอม ตำบลมหาสวัสดิ์ อำเภอบางกรวย จังหวัดนนทบุรี 11130',
    },
  ]

  const titleStyle = `${styles['set-title']} font-lg weight-md`
  const itemStyle = `${styles['set-inner-row']} font-md weight-li`
  return (
    <Layout>
      <Card.Container fullHeight>
        <Card.Body>
          <div className={`${styles.header}`}>
            <div className={`${styles['group-header']}`}>
              <RiUserSettingsFill size={40} />
              <div className={`${styles['customer-label']} font-xl`}>
                พนักงาน
              </div>
            </div>
            <div className={`${styles['group-header']}`}>
              <SearchBox size="fluid" />
              <div className={`${styles['customer-label']}`}>
                <Button color="teal" onClick={modal.open}>
                  + เพิ่มรายชื่อ
                </Button>
              </div>
            </div>
          </div>
          {exampleData.map((item) => {
            return (
              <EmployeeCard
                role={item.role}
                name={item.name}
                phone={item.phone}
                address={item.address}
                className={`${styles['employee-box']}`}
              />
            )
          })}
        </Card.Body>
      </Card.Container>

      {/* Modal Segment */}
      <Modal modal={modal}>
        <Modal.Header>+ เพิ่มรายชื่อพนักงาน</Modal.Header>
        <Modal.Body>
          <div className={titleStyle}>ข้อมูลพนักงาน</div>
          <div className={`${styles['set-row']}`}>
            <div className={itemStyle}>
              <Dropdown className="tb-size-md" label="แผนก" />
            </div>
            <div className={itemStyle}>
              <Dropdown className="tb-size-md" label="ตำแหน่ง" />
            </div>
            <div className={itemStyle}>
              <Dropdown className="tb-size-md" label="การว่าจ้าง" />
            </div>
          </div>
          <div className={`${styles['set-row']}`}>
            <div className={itemStyle}>
              <Textbox
                as="date"
                className="tb-size-md"
                label="วันที่เริ่มงาน"
              />
            </div>
            <div className={itemStyle}>
              <Textbox className="tb-size-md" label="เงินเดือน" />
            </div>
          </div>

          <div className={titleStyle}>ข้อมูลส่วนตัว</div>
          <div className={`${styles['set-row']}`}>
            <div className={itemStyle}>
              <Textbox label="ชื่อ" />
            </div>
            <div className={itemStyle}>
              <Textbox label="นามสกุล" />
            </div>
            <div className={itemStyle}>
              <Textbox label="เบอร์โทร" />
            </div>
            <div className={itemStyle}>
              <Textbox label="เลขบัตรประชาชน" />
            </div>
          </div>

          <div className={`${styles['set-row']}`}>
            <div className={itemStyle}>
              <Textbox as="date" label="วัน/เดือน/ปีเกิด" />
            </div>
            <div className={itemStyle}>
              <Dropdown className="tb-size-sm" label="ระดับการศึกษา" />
            </div>
            <div className={itemStyle}>
              <Dropdown className="tb-size-sm" label="ความสามารถพิเศษ" />
            </div>
            <div className={itemStyle}>
              <Textbox placeHolder="กรณีอื่นๆ" />
            </div>
          </div>

          <div className={`${styles['set-row']}`}>
            <div className={itemStyle}>
              <Textbox label="อีเมลล์" />
            </div>
            <div className={itemStyle}>
              <Textbox label="ID Line" />
            </div>
            <div className={itemStyle}>
              <Textbox label="Facebook" />
            </div>
          </div>

          <div className={`${styles['set-row']}`}>
            <div className={itemStyle}>
              <Dropbox label="รูปโปรไฟล์" />
            </div>
            <div className={itemStyle}>
              <Dropbox label="บัตรประจำตัวประชาชน" />
            </div>
          </div>

          <div className={titleStyle}>บุคคลที่สามารถติดต่อ (กรณีฉุกเฉิน)</div>
          <div className={`${styles['set-row']}`}>
            <div className={itemStyle}>
              <Textbox label="ชื่อ" />
            </div>
            <div className={itemStyle}>
              <Textbox label="นามสกุล" />
            </div>
            <div className={itemStyle}>
              <Textbox label="เบอร์โทร" />
            </div>
            <div className={itemStyle}>
              <Dropdown className="tb-size-sm" label="สถานะ" />
            </div>
          </div>

          <div className={titleStyle}>ที่อยู่ที่สามารถติดต่อได้</div>
          <div className={`${styles['set-row']}`}>
            <div className={itemStyle}>
              <Textbox className="tb-size-md" label="ที่อยู่" />
            </div>
            <div className={itemStyle}>
              <Dropdown className="tb-size-md" label="ประเทศ" />
            </div>
            <div className={itemStyle}>
              <Dropdown className="tb-size-md" label="จังหวัด" />
            </div>
          </div>

          <div>
            <div className={`${styles['set-row']}`}>
              <div className={itemStyle}>
                <Textbox className="tb-size-md" label="ตำบล/แขวง" />
              </div>
              <div className={itemStyle}>
                <Dropdown className="tb-size-md" label="อำเภอ/เขต" />
              </div>
              <div className={itemStyle}>
                <Dropdown className="tb-size-md" label="รหัสไปรษณีย์" />
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
              <Button color="green">ยืนยันเพิ่ม</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Layout>
  )
})
