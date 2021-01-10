import React from 'react'
import { Button, Card, Spacer, Table, Dropdown } from '../../../../components'
import styles from './Return.module.css'
import { BiCheck } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'
import { FaDollarSign }from 'react-icons/fa'
import { SearchBox } from '../../../../../src/components/Input/SearchBox'
import { Calendar } from '../../../../../src/components/Input/Calendar'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../../hooks'
import { ButtonT } from '../../../../components/ButtonT/ButtonT'
import { Tabbutton } from '../../../../components/Tabbutton/Tabbutton'
import IStockApi from './iStock'

const headers = ['วันที่', 'รายการ', 'จำนวนเงิน', 'สถานะรายการ', 'ขอเบิกเงิน', ''];

export const ReturnDetail = observer(() => {
  const { productStore } = useStore()

  return (

      <IStockApi />
  )
})
