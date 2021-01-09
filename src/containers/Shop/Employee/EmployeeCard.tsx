import React from 'react'
import { Card, Button } from '../../../components'
import { CgProfile } from 'react-icons/cg'
import styles from './Employee.module.css'
import testdelete from './test-delete'

type Props = {
  role: string
  name?: string
  phone?: string
  address?: string
  className?: string
  id?: number
}

export const EmployeeCard = ({
  role = 'หัวหน้าช่าง',
  name = 'สรัญญา ทุ่มวงศ์',
  phone = '090-009-0990',
  address = '108 หมู่ 2 ถนนบางกรวย-จงถนอม ตำบลมหาสวัสดิ์ อำเภอบางกรวย จังหวัดนนทบุรี 11130',
  className,
  id,
}: Props) => {
  return (
    <Card.Container className={className}>
      <Card.Body className={`${styles['employee-banner']}`}>
        <div className={`${styles['group-left-box']}`}>
          <CgProfile size={40} />
          <div className={`${styles['data']}`}>
            <div className={`${styles['set-first-row']}`}>
              <div className={`${styles['role-container']} weight-md `}>{role}</div>
              <div className={`${styles['set-element1']}`}>{name}</div>
              <div className={`${styles['set-element2']}`}>{phone}</div>
            </div>
            <div className={`${styles.address}`}>{address}</div>
          </div>
        </div>
        <div className={`${styles.button}`}>
          <Button color="yellow">แก้ไขรายชื่อ</Button>
          <div className={`${styles['button-space']}`}>
            <Button color="red" onClick={() => testdelete(id)}>ลบรายชื่อ</Button>
          </div>
        </div>
      </Card.Body>
    </Card.Container>
  )
}
