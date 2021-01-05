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

const headers = ['วันที่', 'รายการ', 'จำนวนเงิน', 'สถานะรายการ', 'ขอเบิกเงิน', ''];

export const ReturnDetail = observer(() => {
  const { productStore } = useStore()

  return (

      <div className="flexColumn">
        <div>
          <Card.Container>
            <Card.Body>
            <div className={`${styles.wrapperHeader}`}>
            <div className={`${styles.wrapperHeaderContent} font-xl weight-md`}>
              <FaDollarSign /> <Spacer x={0.5} />เบิก/ถอน
              <Spacer x={1.5} />
              <Dropdown list={['เลือกช่วงเวลา']} />
              <Spacer x={1.5} />
              <Calendar />
            </div>
            <div className='flex'>
              <SearchBox />
            </div>
            </div>
            <Table.Container className="a">
            <Table.Header headers={headers} />
             {productStore.products.map((stock, index) => (
            <Table.Row key={stock.id}>
              <Table.Col >{index + 1}</Table.Col>
              <Table.Col >{stock.product_name}</Table.Col>
              <Table.Col >{stock.product_brand}</Table.Col>
              <Table.Col><ButtonT color="blue">รออนุมัติ</ButtonT></Table.Col>
              <Table.Col><Tabbutton color="yellow" size="xl"><FaDollarSign />เบิกเงิน</Tabbutton></Table.Col>
              <Table.Col> </Table.Col>
            </Table.Row>
             ))}
              </Table.Container>
           </Card.Body>
          </Card.Container>
        </div>
      </div>
  )
})
