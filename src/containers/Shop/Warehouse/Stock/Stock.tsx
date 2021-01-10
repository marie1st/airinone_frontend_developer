import React from 'react'
import { Card, Table, Button, Modal, Dropdown } from '../../../../components/'
import styles from './Stock.module.css'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../../hooks'
import { FiEdit3 } from 'react-icons/fi'
import { useModal } from '../../../../hooks'
import IStockApi from './iStockapi'


/**
 * Define each field of headers
 */
const headers = [  'ลำดับ',
'อุปกรณ์',
'ยี่ห้อ',
'จำนวนการเบิก',
'จำนวนคงเหลือ',
'หน่วย',
'จัดการอุปกรณ์',
  '']

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

export const Stock = observer(() => {
  const { productStore } = useStore()
  const modal = useModal()

  return (
    <IStockApi />
  )
})
