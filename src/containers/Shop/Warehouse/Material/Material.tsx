import React from 'react'
import { Card, Table, Button, Modal, Dropdown, Spacer, Textbox, Textarea } from '../../../../components/'
import styles from './Material.module.css'
import { FiEdit3 } from 'react-icons/fi'
import { useModal } from '../../../../hooks'
import IMaterialApi from './iMaterial'

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
    <IMaterialApi />
  )
}
