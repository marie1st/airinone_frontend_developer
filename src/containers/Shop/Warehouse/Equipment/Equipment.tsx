import React from 'react'
import { Card, Table, Modal, Button, Dropdown } from '../../../../components/'
import styles from './Equipment.module.css'
import { FiEdit3 } from 'react-icons/fi'
import { observer } from 'mobx-react-lite'
import { useModal } from '../../../../hooks'
import IEquipmentApi from './iEquipment'

const headers = [
  'ลำดับ',
  'อุปกรณ์',
  'ยี่ห้อ',
  'จำนวนเบิก',
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
    <IEquipmentApi />
  )
})
