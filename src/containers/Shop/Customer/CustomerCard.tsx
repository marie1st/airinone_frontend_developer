import React, { useState, useEffect } from 'react'
import { Card, Button, Layout, Dropdown,Modal,Textbox,Dropbox,} from '../../../components'
import { CgProfile } from 'react-icons/cg'
import styles from './Customer.module.css'
import { useModal } from '../../../hooks'
import testput from '../../../test-put'
import testdelete from '../../../test-delete'


type Props = {
  name?: string
  phone?: string
  address?: string
  className?: string
  id?: string
}

const titleStyle = `${styles['set-title']} font-lg weight-md`
const itemStyle = `${styles['set-inner-row']} font-md weight-li`


export const CustomerCard = ({

  name = 'สรัญญา ทุ่มวงศ์', 
  phone = '090-009-0990',
  address = '108 หมู่ 2 ถนนบางกรวย-จงถนอม ตำบลมหาสวัสดิ์ อำเภอบางกรวย จังหวัดนนทบุรี 11130',
  className,
  id = "1",
}: Props) => {
  const modalEdit = useModal()
  return (
    <>
    <Card.Container className={className}>
      <Card.Body className={`${styles['customer-banner']}`}>
        <div className={`${styles['group-left-box']}`}>
          <CgProfile size={40} />
          <div className={`${styles['data']}`}>
            <div className={`${styles['name-phone']}`}>
              <div>{name}</div>
              <div className={`${styles['phone']}`}>{phone}</div>
            </div>
            <div className={`${styles.address}`}>{address}</div>
          </div>
        </div>
        <div className={`${styles.button}`}>
          <Button id = "btnE" color="yellow" onClick={modalEdit.open}>แก้ไขรายชื่อ</Button>
          <div className={`${styles['button-space']}`}>
              <Button color="red" onClick={() => testdelete(id) } >ลบรายชื่อ</Button>
          </div>
        </div>
      </Card.Body>
      </Card.Container>
      {/* Modal Segment */}
    <Modal modal={modalEdit}>
    <Modal.Header>+ เพิ่มรายชื่อลูกค้า</Modal.Header>
    <Modal.Body>
      <div className={titleStyle}>ช่องทางการรับข่าวสาร</div>
      <div className={`${styles['set-row']}`}>
        <div className={itemStyle}>
          <Dropdown className="tb-size-sm" label="แหล่งที่มา" />
        </div>
        <Textbox
          placeHolder="กรณีอื่นๆ"
          className={`${styles['set-inner-row']}`}
        />
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
          <Textbox label="ID Line" />
        </div>
      </div>

      <div>
        <div className={`${styles['set-row']}`}>
          <div className={itemStyle}>
            <Textbox label="เลขประจำตัวผู้เสียภาษี" />
          </div>
          <div className={itemStyle}>
            <Textbox label="อาชีพ" />
          </div>
          <div className={itemStyle}>
            <Textbox label="อีเมลล์" />
          </div>
          <div className={itemStyle}>
            <Textbox label="Facebook" />
          </div>
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

      <div>
        <div className={titleStyle}>สถานที่ติดตั้ง/ส่งสินค้า</div>
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
          <Button color="grey" onClick={modalEdit.close}>
            ยกเลิก
          </Button>
        </div>
        <div className={`${styles['set-inner-row']}`}>
              <Button color="green">ยืนยัน</Button>
        </div>
      </div>
    </Modal.Body>
    </Modal>
  </>
  )
}
  